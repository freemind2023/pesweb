import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const sheetUrl = process.env.SARASWATI_SHEET_URL;
  if (!sheetUrl || sheetUrl.includes('YOUR_SARASWATI_SCRIPT_ID')) {
    return NextResponse.json({ ok: false, reason: 'Sheet URL not configured' });
  }

  try {
    const body = await req.json();
    await fetch(sheetUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false });
  }
}
