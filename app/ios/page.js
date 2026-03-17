const iosHosts = `[General]

[Rule]
FINAL,DIRECT

[Host]
www.growtopia1.com = 178.128.211.32
www.growtopia2.com = 178.128.211.32`;

export default function IOSPage() {
  return (
    <main style={{ minHeight: '100vh', padding: '24px', background: '#020617', color: '#e2e8f0' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1>iOS Host</h1>
        <p style={{ color: '#94a3b8' }}>Salin isi di bawah ini sebagai host iOS.</p>
        <pre style={{
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
          background: '#111827',
          border: '1px solid #334155',
          borderRadius: '16px',
          padding: '20px',
          overflowX: 'auto'
        }}>
{iosHosts}
        </pre>
        <a href="/api/ios" style={{ color: '#38bdf8' }}>Buka versi TXT</a>
      </div>
    </main>
  );
  }

