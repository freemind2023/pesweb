export async function submitToGoogleSheets(data: Record<string, string>, formType: string) {
  const response = await fetch('/api/submit-form', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...data, formType }),
  });
  return response.json();
}
