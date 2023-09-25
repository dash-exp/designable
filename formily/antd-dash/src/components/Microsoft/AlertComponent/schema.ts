import { ISchema } from '@formily/react'

export const CmpSchema: ISchema = {
  type: 'object',
  properties: {
    'field-group': {
      type: 'void',
      'x-component': 'CollapseItem',
      properties: {
        title: {
          type: 'string',
          title: 'Title',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
        link: {
          type: 'string',
          title: 'Link',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
      },
    },
    'style-group': {
      type: 'void',
      'x-component': 'CollapseItem',
      properties: {
        id: {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
        theme: {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Select',
          'x-component-props': {
            defaultValue: 'light',
          },
          enum: ['light', 'dark'],
        },
      },
    },
  },
}

export const DefaultProp = {
  title: 'Alert Message',
  link: '/',
}
