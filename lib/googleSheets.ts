export async function submitToGoogleSheets(data: Record<string, string>, formType: string) {
  const url = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL;
  if (!url || url.includes('YOUR_SCRIPT_ID')) {
    console.warn('Google Sheets URL not configured');
    return { status: 'success' };
  }
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...data, formType }),
  });
  return response.json();
}
