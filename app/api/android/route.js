const androidHosts = `157.66.54.162 growtopia1.com
157.66.54.162 growtopia2.com
157.66.54.162 www.growtopia1.com
157.66.54.162 www.growtopia2.com
157.66.54.162 growtopiagame.com`;

export async function GET() {
  return new Response(androidHosts, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Content-Disposition': 'inline; filename="android.txt"'
    }
  });
}

