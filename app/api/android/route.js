const androidHosts = `165.232.172.148 growtopia1.com
165.232.172.148 growtopia2.com
165.232.172.148 www.growtopia1.com
165.232.172.148 www.growtopia2.com
165.232.172.148 growtopiagame.com`;

export async function GET() {
  return new Response(androidHosts, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Content-Disposition': 'inline; filename="android.txt"'
    }
  });
}

