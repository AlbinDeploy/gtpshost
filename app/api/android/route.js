const androidHosts = `202.155.143.139 growtopia1.com
202.155.143.139 growtopia2.com
202.155.143.139 www.growtopia1.com
202.155.143.139 www.growtopia2.com
202.155.143.139 growtopiagame.com`;

export async function GET() {
  return new Response(androidHosts, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Content-Disposition': 'inline; filename="android.txt"'
    }
  });
}

