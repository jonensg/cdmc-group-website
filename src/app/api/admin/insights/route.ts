import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase-server';

function checkAuth(req: NextRequest): boolean {
  const auth = req.headers.get('x-admin-password');
  return auth === process.env.ADMIN_PASSWORD;
}

// GET — list pending (or all) insights
export async function GET(req: NextRequest) {
  if (!checkAuth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const supabase = createServerClient();
  const { searchParams } = new URL(req.url);
  const status = searchParams.get('status') || 'pending';

  const query = supabase
    .from('insights')
    .select('*')
    .order('heat_score', { ascending: false });

  if (status !== 'all') {
    query.eq('status', status);
  }

  const { data, error } = await query;
  if (error) return NextResponse.json({ error: String(error) }, { status: 500 });

  return NextResponse.json({ data });
}

// PATCH — update an insight (author_type, status, or content edits)
export async function PATCH(req: NextRequest) {
  if (!checkAuth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const supabase = createServerClient();
  const body = await req.json();
  const { id, ...updates } = body;

  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });

  // If publishing, set published_at
  if (updates.status === 'published' && !updates.published_at) {
    updates.published_at = new Date().toISOString();
  }

  const { data, error } = await supabase
    .from('insights')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) return NextResponse.json({ error: String(error) }, { status: 500 });

  return NextResponse.json({ data });
}

// DELETE — discard an insight
export async function DELETE(req: NextRequest) {
  if (!checkAuth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const supabase = createServerClient();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });

  const { error } = await supabase
    .from('insights')
    .update({ status: 'discarded' })
    .eq('id', id);

  if (error) return NextResponse.json({ error: String(error) }, { status: 500 });

  return NextResponse.json({ success: true });
}
