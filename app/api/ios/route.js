const iosHosts = `[General]

[Rule]
FINAL,DIRECT

[Host]
www.growtopia1.com = 159.223.55.38
www.growtopia2.com = 159.223.55.38`;

export async function GET() {
  return new Response(iosHosts, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Content-Disposition': 'inline; filename="ios.txt"'
    }
  });
}

