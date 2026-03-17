const androidHosts = `178.128.211.32 growtopia1.com
178.128.211.32 growtopia2.com
178.128.211.32 www.growtopia1.com
178.128.211.32 www.growtopia2.com
178.128.211.32 growtopiagame.com`;

export async function GET() {
  return new Response(androidHosts, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Content-Disposition': 'inline; filename="android.txt"'
    }
  });
}

