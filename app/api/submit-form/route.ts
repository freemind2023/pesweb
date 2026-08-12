import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const isCareerMantra = typeof data.formType === 'string' && data.formType.startsWith('career-mantra');
    const url = isCareerMantra ? process.env.CAREER_MANTRA_SHEET_URL : process.env.GOOGLE_SHEET_URL;
    const envVarName = isCareerMantra ? 'CAREER_MANTRA_SHEET_URL' : 'GOOGLE_SHEET_URL';
    if (!url) {
      console.error(`[submit-form] ${envVarName} env var is not set`);
      return NextResponse.json({ error: 'Not configured' }, { status: 500 });
    }

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
