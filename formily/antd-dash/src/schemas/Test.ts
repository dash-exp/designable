import { ISchema } from '@formily/react'

export const Test: ISchema = {
	"type": "object",
	"properties": {
		"field-group": {
			"type": "void",
			"x-component": "CollapseItem",
			"properties": {
				"title": {
					"type": "string",
					"x-decorator": "FormItem",
					"x-component": "Input"
				},
        "content": {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Input.TextArea',
        },
        "mode": {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Select',
          'x-component-props': {
            defaultValue: 'normal',
          },
          enum: ['h1', 'h2', 'h3', 'p', 'normal'],
        }, 
        cards:{
          type: 'array',
          'x-component': 'ArrayItems',
          'x-decorator': 'FormItem',
          title: 'cards',
          items: {
            type: 'object',
            'x-decorator': 'ArrayItems.Item',
            properties: {
              sort: {
                type: 'void',
                'x-decorator': 'FormItem',
                'x-component': 'ArrayItems.SortHandle',
              },
              config: {
                type: 'void',
                title: 'setting',
                'x-component': 'Editable.Popover',
                'x-reactions':
                '{{(field)=>field.title = field.parent.value.title || field.title}}',
                properties: {
                  title: {
                    type: 'string',
                    title: 'Title',
                    'x-decorator': 'FormItem',
                    'x-component': 'Input',
                  },
                  desc: {
                    type: 'string',
                    title: 'Description',
                    'x-decorator': 'FormItem',
                    'x-component': 'Input.TextArea',
                  },
                  link: {
                    type: 'string',
                    title: 'Link',
                    'x-decorator': 'FormItem',
                    'x-component': 'Input',
                  },
                  image: {
                    type: 'string',
                    title: 'Image',
                    'x-decorator': 'FormItem',
                    'x-component': 'Input',
                  },
                },
              },
              remove: {
                type: 'void',
                'x-decorator': 'FormItem',
                'x-component': 'ArrayItems.Remove',
              },
            },
          },
          properties: {
            add: {
              type: 'void',
              title: '添加条目',
              'x-component': 'ArrayItems.Addition',
            },
          },
        }     
			}
		},
    "style-group": {
			"type": "void",
			"x-component": "CollapseItem",
			"properties": {
				"id": {
					"type": "string",
					"x-decorator": "FormItem",
					"x-component": "Input"
				},
        "theme": {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Select',
          'x-component-props': {
            defaultValue: 'light',
          },
          enum: ['light', 'dark'],
        },
			}
		}
	}
}

export const DefaultTestProp = {
  title:'title',
  content:'content'
}