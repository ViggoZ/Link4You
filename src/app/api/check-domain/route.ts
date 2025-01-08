import { NextResponse } from 'next/server'

const WHOIS_API_KEY = process.env.WHOIS_API_KEY // 需要在 .env 文件中设置

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const domain = searchParams.get('domain');

  if (!domain) {
    return NextResponse.json({ error: 'Domain is required' }, { status: 400 });
  }

  try {
    const response = await fetch(
      `https://domain-availability.whoisxmlapi.com/api/v1?apiKey=${WHOIS_API_KEY}&domainName=${domain}`,
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );

    const data = await response.json();
    
    // API 返回的格式：
    // {
    //   "DomainInfo": {
    //     "domainName": "example.ai",
    //     "domainAvailability": "AVAILABLE" | "UNAVAILABLE"
    //   }
    // }

    return NextResponse.json({ 
      available: data.DomainInfo.domainAvailability === 'AVAILABLE',
      domain: domain,
      raw: data // 用于调试
    });
  } catch (error) {
    console.error('Error checking domain:', error);
    return NextResponse.json({ 
      error: 'Failed to check domain',
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
} 