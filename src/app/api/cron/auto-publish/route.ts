import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase-server';

export const maxDuration = 60;

// Runs at 9am HKT (1am UTC) — auto-publishes all still-pending articles as CHIWA Team
export async function GET(req: NextRequest) {
  const secret = req.headers.get('x-cron-secret');
  if (secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const supabase = createServerClient();
  const now = new Date().toISOString();

  // Find all pending articles whose deadline has passed
  const { data: pending, error: fetchError } = await supabase
    .from('insights')
    .select('id, author_type')
    .eq('status', 'pending')
    .lte('decision_deadline', now);

  if (fetchError) {
    console.error('Auto-publish fetch error:', fetchError);
    return NextResponse.json({ error: String(fetchError) }, { status: 500 });
  }

  if (!pending || pending.length === 0) {
    return NextResponse.json({ success: true, published: 0, message: 'No pending articles' });
  }

  const ids = pending.map(a => a.id);

  // Publish them all as CHIWA Team (author_type stays 'team' unless Jones changed it)
  const { error: updateError } = await supabase
    .from('insights')
    .update({
      status: 'published',
      published_at: now,
    })
    .in('id', ids);

  if (updateError) {
    console.error('Auto-publish update error:', updateError);
    return NextResponse.json({ error: String(updateError) }, { status: 500 });
  }

  console.log(`Auto-published ${ids.length} articles`);
  return NextResponse.json({ success: true, published: ids.length });
}
