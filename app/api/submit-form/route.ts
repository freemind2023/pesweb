import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const url = process.env.GOOGLE_SHEET_URL;
  if (!url) {
    console.error('[submit-form] GOOGLE_SHEET_URL env var is not set');
    return NextResponse.json({ error: 'Not configured' }, { status: 500 });
  }

  try {
    const data = await req.json();
    const body = JSON.stringify(data);
    const headers: HeadersInit = { 'Content-Type': 'text/plain;charset=utf-8' };

    // Google Apps Script does a 302 redirect (script.google.com → script.googleusercontent.com).
    // A regular fetch follows it but converts POST → GET, losing the body.
    // We follow the redirect manually to keep the POST method and body intact.
    let res = await fetch(url, { method: 'POST', headers, body, redirect: 'manual' });

    if ((res.status === 301 || res.status === 302) && res.headers.get('location')) {
      const redirectUrl = res.headers.get('location')!;
      res = await fetch(redirectUrl, { method: 'POST', headers, body });
    }

    console.log('[submit-form] Google Apps Script response status:', res.status);
    return NextResponse.json({ status: 'ok' });
  } catch (err) {
    console.error('[submit-form] error:', err);
    return NextResponse.json({ error: 'Failed to submit' }, { status: 500 });
  }
}
