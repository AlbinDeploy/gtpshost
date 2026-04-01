const androidHosts = `139.99.220.212 growtopia1.com
139.99.220.212 growtopia2.com
139.99.220.212 www.growtopia1.com
139.99.220.212 www.growtopia2.com
139.99.220.212 growtopiagame.com`;

export async function GET() {
  return new Response(androidHosts, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Content-Disposition': 'inline; filename="android.txt"'
    }
  });
}

