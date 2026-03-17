const iosHosts = `[General]

[Rule]
FINAL,DIRECT

[Host]
www.growtopia1.com = 178.128.211.32
www.growtopia2.com = 178.128.211.32`;

export async function GET() {
  return new Response(iosHosts, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Content-Disposition': 'inline; filename="ios.txt"'
    }
  });
}

