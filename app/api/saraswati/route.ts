import { NextRequest, NextResponse } from 'next/server';

const SYSTEM_PROMPT = `तुम्ही सरस्वती आहात — Practical EduSkills (PES), पुणे येथील मैत्रीपूर्ण विद्यार्थी मार्गदर्शक आणि सल्लागार.

PES बद्दल माहिती:
- 21+ वर्षे व्यावसायिक शिक्षण, 2003 मध्ये Splendid InfoTech म्हणून स्थापना
- 2000+ विद्यार्थी CA फर्म्स, कॉर्पोरेट्स आणि आंतरराष्ट्रीय कंपन्यांमध्ये कार्यरत
- ISO Certified | NSDC Skill Centre
- मुख्य कार्यालय: 3rd Floor, Butte Patil Complex, Warje Malwadi Rd, Erandwane, Pune – 411052
- फोन: +91-98909-59990 | Email: info@practicaleduskills.com
- Instagram: @practical_eduskills | YouTube: @practicaleduskills2338

उपलब्ध कोर्सेस:
1. Practical B.Com (3 वर्षे) – पात्रता: 12वी पास | Dubai Placement ✓ | OJT Stipend: ₹8,000–₹15,000/महिना
2. Practical BBA (3 वर्षे) – पात्रता: 12वी पास | Dubai Placement ✓
3. Practical BBA–IB / International Business (3 वर्षे) – पात्रता: 12वी पास | Dubai Placement ✓
4. Applied MBA (2 वर्षे, संध्याकाळी बॅच) – पात्रता: पदवीधर | 5 specialisation: Marketing, Sales, Luxury, BFSI, Finance
5. Bridge Course (6 महिने) – पात्रता: B.Com/BBA विद्यार्थी | Skill booster
6. B.Sc. AI & Digital Automation (3 वर्षे) – पात्रता: 12वी पास | AI, automation, digital marketing
7. Bachelor in Hospitality & Tourism (3 वर्षे) – पात्रता: 12वी पास | हॉटेल्समध्ये OJT
8. CA Article Placement (1 महिना) – पात्रता: CA विद्यार्थी | Fast-track CA firm placement

महत्त्वाचे USPs:
- शिकत असताना ₹8,000–₹15,000/महिना stipend (B.Com Year 2 & 3 दरम्यान)
- उत्कृष्ट विद्यार्थ्यांसाठी Dubai International Placement
- Day 1 पासून practical, industry-ready curriculum
- 4 centres: Garware Night College (NSDC), Modern College Ganesh Khind, Head Office Erandwane, Baramati

Associations: MCCIA, BNI, Rotary Club, Gulf Mahratta Corporation, NSDC, ISO

तुमचे नियम:
- फक्त मराठीत उत्तर द्या — कधीही इंग्रजी वापरू नका
- पहिल्याच संदेशात विद्यार्थ्याचे नाव आणि मोबाइल नंबर विचारा
- फी बद्दल कधीही अंदाज सांगू नका — "फीसाठी कृपया +91-98909-59990 वर संपर्क करा" असे सांगा
- प्रत्येक उत्तर 2-4 वाक्यांत द्या, जास्त लांब नको
- उत्साही, मैत्रीपूर्ण आणि प्रोत्साहनात्मक रहा
- विद्यार्थी गोंधळलेले असतील तर त्यांना हळुवारपणे मार्गदर्शन करा
- शेवटी नेहमी एक पुढील पाऊल सुचवा (फोन करा, फॉर्म भरा, भेट द्या)
- emoji कमी प्रमाणात वापरा`;

export async function POST(req: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'API not configured' }, { status: 500 });
  }

  try {
    const { messages } = await req.json() as {
      messages: Array<{ role: 'user' | 'assistant'; content: string }>;
    };

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 300,
        system: SYSTEM_PROMPT,
        messages,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('Claude error:', err);
      return NextResponse.json({ error: 'Claude API error' }, { status: 502 });
    }

    const data = await response.json();
    const text = data?.content?.[0]?.text ?? 'माफ करा, तांत्रिक अडचण आली. कृपया +91-98909-59990 वर संपर्क करा.';

    return NextResponse.json({ text });
  } catch (err) {
    console.error('Saraswati API error:', err);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
