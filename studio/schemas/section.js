import { BiListUl } from 'react-icons/bi'

export default {
  name: 'section',
  title: 'Section',
  type: 'document',
  icon: BiListUl,
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Overall section title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      description: 'Brief introduction to section',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'modules',
      title: 'Modules',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'module' }
          ]
        }
      ],
    }
  ]
}