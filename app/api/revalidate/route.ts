import { revalidateTag } from 'next/cache';
import { type NextRequest, NextResponse } from 'next/server';

/**
 * Sanity webhook target for on-demand cache invalidation.
 * Configure in Sanity: POST with `?secret=SANITY_REVALIDATE_SECRET`
 */
export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');
  if (!secret || secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const docType = body?._type as string | undefined;

    revalidateTag('career');
    if (docType === 'careerType') {
      revalidateTag('careerType');
    }

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
  }
}
