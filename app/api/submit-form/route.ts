import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const url = process.env.GOOGLE_SHEET_URL;
  if (!url) return NextResponse.json({ error: 'Not configured' }, { status: 500 });

  try {
    const data = await req.json();
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(data),
    });
    return NextResponse.json({ status: 'ok' });
  } catch {
    return NextResponse.json({ error: 'Failed to submit' }, { status: 500 });
  }
}
