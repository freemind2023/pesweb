import type { StructureResolver } from 'sanity/structure';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Careers')
        .child(
          S.documentList()
            .title('Careers')
            .filter('_type == "career"')
            .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }]),
        ),
      S.listItem()
        .title('Career Types')
        .child(S.documentTypeList('careerType').title('Career Types')),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !['career', 'careerType'].includes(item.getId() ?? ''),
      ),
    ]);
