const androidHosts = `159.223.55.38 growtopia1.com
159.223.55.38 growtopia2.com
159.223.55.38 www.growtopia1.com
159.223.55.38 www.growtopia2.com
159.223.55.38 growtopiagame.com`;

export async function GET() {
  return new Response(androidHosts, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Content-Disposition': 'inline; filename="android.txt"'
    }
  });
}

