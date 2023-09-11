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
        cards: {
          type: 'array',
          title:'Cards',
          'x-component': 'ArrayCollapse',
          maxItems: 3,
          'x-decorator': 'FormItem',
          items: {
            type: 'object',
            'x-component': 'ArrayCollapse.CollapsePanel',
            'x-component-props': {
              header: 'Card',
            },
            properties: {
              index: {
                type: 'void',
                'x-component': 'ArrayCollapse.Index',
              },
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
                "type": "string",
                "title":"Image",
                "x-component": "AssetPicker",
                "x-decorator": "FormItem",
                'x-component-props': {
                  "rootPath":"/content/dam",
                },
              },
              remove: {
                type: 'void',
                'x-component': 'ArrayCollapse.Remove',
              },
              moveUp: {
                type: 'void',
                'x-component': 'ArrayCollapse.MoveUp',
              },
              moveDown: {
                type: 'void',
                'x-component': 'ArrayCollapse.MoveDown',
              },
            },
          },
          properties: {
            addition: {
              type: 'void',
              title: '添加条目',
              'x-component': 'ArrayCollapse.Addition',
            },
          },
        },
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