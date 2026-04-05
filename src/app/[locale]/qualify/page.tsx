import Header from '@/components/Header';
import QualifyForm from '@/components/QualifyForm';

export default function QualifyPage() {
  return (
    <main className="min-h-screen" style={{ background: '#F7F4EF' }}>
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <QualifyForm />
      </div>
    </main>
  );
}
