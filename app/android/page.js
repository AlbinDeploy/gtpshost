const androidHosts = `178.128.61.71 growtopia1.com
178.128.61.71 growtopia2.com
178.128.61.71 www.growtopia1.com
178.128.61.71 www.growtopia2.com
178.128.61.71 growtopiagame.com`;

export default function AndroidPage() {
  return (
    <main style={{ minHeight: '100vh', padding: '24px', background: '#020617', color: '#e2e8f0' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1>Android Host</h1>
        <p style={{ color: '#94a3b8' }}>Salin isi di bawah ini sebagai host Android.</p>
        <pre style={{
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
          background: '#111827',
          border: '1px solid #334155',
          borderRadius: '16px',
          padding: '20px',
          overflowX: 'auto'
        }}>
{androidHosts}
        </pre>
        <a href="/api/android" style={{ color: '#38bdf8' }}>Buka versi TXT</a>
      </div>
    </main>
  );
  }
