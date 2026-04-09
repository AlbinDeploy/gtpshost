const iosHosts = `[General]

[Rule]
FINAL,DIRECT

[Host]
www.growtopia1.com = 165.232.172.148
www.growtopia2.com = 165.232.172.148`;

export async function GET() {
  return new Response(iosHosts, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Content-Disposition': 'inline; filename="ios.txt"'
    }
  });
}

