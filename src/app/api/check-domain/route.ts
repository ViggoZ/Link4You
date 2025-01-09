import { NextResponse } from 'next/server'

const WHOIS_API_KEY = process.env.WHOIS_API_KEY

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const domain = searchParams.get('domain');

  if (!domain) {
    return NextResponse.json({ error: 'Domain is required' }, { status: 400 });
  }

  // 检查环境变量
  if (!WHOIS_API_KEY) {
    console.log('WhoisXML API key not configured');
    // 临时使用模拟数据
    return NextResponse.json({
      available: Math.random() > 0.5,
      domain: domain,
      provider: 'mock',
      raw: null
    });
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
    
    if (!response.ok) {
      throw new Error(`WhoisXML API responded with status: ${response.status}`);
    }
    
    const data = await response.json();
    return NextResponse.json({ 
      available: data.DomainInfo.domainAvailability === 'AVAILABLE',
      domain: domain,
      provider: 'whoisxml',
      raw: data
    });
  } catch (error) {
    console.error('WhoisXML API error:', error);
    // API 调用失败时使用模拟数据
    return NextResponse.json({
      available: Math.random() > 0.5,
      domain: domain,
      provider: 'mock',
      raw: null
    });
  }
} 