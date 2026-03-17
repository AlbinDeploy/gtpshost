import Link from 'next/link';

const cardStyle = {
  display: 'block',
  padding: '24px',
  borderRadius: '16px',
  textDecoration: 'none',
  color: '#e2e8f0',
  background: '#1e293b',
  border: '1px solid #334155',
  boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
};

export default function HomePage() {
  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: '24px' }}>
      <div style={{ width: '100%', maxWidth: '720px' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{ fontSize: '40px', marginBottom: '12px' }}>Host Selector</h1>
          <p style={{ color: '#94a3b8', fontSize: '18px', margin: 0 }}>
            Pilih host yang ingin dibuka.
          </p>
        </div>

        <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          <Link href="/android" style={cardStyle}>
            <h2 style={{ marginTop: 0, marginBottom: '8px' }}>Android</h2>
            <p style={{ margin: 0, color: '#94a3b8' }}>Buka halaman host Android</p>
          </Link>

          <Link href="/ios" style={cardStyle}>
            <h2 style={{ marginTop: 0, marginBottom: '8px' }}>iOS</h2>
            <p style={{ margin: 0, color: '#94a3b8' }}>Buka halaman host iOS</p>
          </Link>
        </div>
      </div>
    </main>
  );
  }
            
