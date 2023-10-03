import { ISchema } from '@formily/react'

export const CmpSchema: ISchema = {
	"type": "object",
	"properties": {
		"field-group": {
			"type": "void",
			"x-component": "CollapseItem",
			"properties": {
				"title": {
					"type": "string",
					"x-decorator": "FormItem",
          title: 'Title',
					"x-component": "Input"
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
                  "rootPath":"/content/dam/ms",
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

export const DefaultProp = {
  title: 'Footer',
  link: '/',
  "cards": [
    {
      "title": "购买 Surface 设备",
      "link": "/",
      "image": "/content/dam/ms/cn/homepage/link-text/surface-go2-link-list-120x120.webp"
    },
    {
      "title": "选择你的Microsoft 365",
      "link": "/",
      "image": "/content/dam/ms/cn/homepage/link-text/gldn-Quick-Link-Icon-80x80-Microsoft-365.webp"
    },
    {
      "title": "购买xbox游戏和主机",
      "link": "/",
      "image": "/content/dam/ms/cn/homepage/link-text/xbox-blk-logo-link-list-120x120.webp"
    }
  ]
}
