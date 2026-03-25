const androidHosts = `168.144.39.237 growtopia1.com
168.144.39.237 growtopia2.com
168.144.39.237 www.growtopia1.com
168.144.39.237 www.growtopia2.com
168.144.39.237 growtopiagame.com`;

export async function GET() {
  return new Response(androidHosts, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Content-Disposition': 'inline; filename="android.txt"'
    }
  });
}

