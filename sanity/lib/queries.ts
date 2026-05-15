import { groq } from 'next-sanity';

export const CAREERS_LIST_QUERY = groq`
  *[_type == "career" && isOpen == true] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    experienceLevel,
    officeTiming,
    location,
    publishedAt,
    "excerpt": pt::text(description),
    applyFormUrl,
    "category": careerType->{ _id, title, "slug": slug.current }
  }
`;

export const CAREER_TYPES_QUERY = groq`
  *[_type == "careerType"] | order(coalesce(sortOrder, 999) asc, title asc) {
    _id,
    title,
    "slug": slug.current
  }
`;

export const CAREER_BY_SLUG_QUERY = groq`
  *[_type == "career" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    description,
    experienceLevel,
    officeTiming,
    location,
    applyFormUrl,
    isOpen,
    publishedAt,
    validThrough,
    "category": careerType->{ title, "slug": slug.current },
    "seo": {
      "title": coalesce(seo.title, title, ""),
      "description": coalesce(seo.description, pt::text(description), ""),
      "noIndex": coalesce(seo.noIndex, !isOpen)
    }
  }
`;

export const CAREER_SLUGS_QUERY = groq`
  *[_type == "career" && isOpen == true && defined(slug.current)] {
    "slug": slug.current
  }
`;

export const CAREER_OG_QUERY = groq`
  *[_type == "career" && slug.current == $slug][0] {
    title,
    experienceLevel,
    "categoryTitle": careerType->title
  }
`;
