import { defineArrayMember, defineField, defineType } from 'sanity';

const experienceLevels = [
  { title: 'Entry', value: 'Entry' },
  { title: 'Mid', value: 'Mid' },
  { title: 'Senior', value: 'Senior' },
  { title: 'Lead', value: 'Lead' },
];

export const career = defineType({
  name: 'career',
  title: 'Career',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'careerType',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'careerType' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Job Description',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    validation: (rule) =>
                      rule.uri({ allowRelative: true, scheme: ['http', 'https', 'mailto'] }),
                  },
                ],
              },
            ],
          },
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'experienceLevel',
      title: 'Experience Level',
      type: 'string',
      options: { list: experienceLevels, layout: 'radio' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'officeTiming',
      title: 'Office Timing',
      type: 'string',
      description: 'e.g. Mon–Fri, 9am–6pm',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g. Pune, Maharashtra',
    }),
    defineField({
      name: 'applyFormUrl',
      title: 'Google Form Apply URL',
      type: 'url',
      validation: (rule) => rule.required().uri({ scheme: ['https'] }),
    }),
    defineField({
      name: 'isOpen',
      title: 'Position Open',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'validThrough',
      title: 'Valid Through',
      type: 'datetime',
      description: 'Optional closing date for the listing',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
  orderings: [
    {
      title: 'Published Date, New',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'careerType.title',
      isOpen: 'isOpen',
    },
    prepare({ title, subtitle, isOpen }) {
      return {
        title: `${isOpen === false ? '🔒 ' : ''}${title}`,
        subtitle,
      };
    },
  },
});
