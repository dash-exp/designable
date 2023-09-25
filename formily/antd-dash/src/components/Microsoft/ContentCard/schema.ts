import { ISchema } from '@formily/react'

export const CmpSchema: ISchema = {
	"type": "object",
	"properties": {
		"field-group": {
			"type": "void",
			"x-component": "CollapseItem",
			"properties": {
				"title": {
          title: 'Title',
					"type": "string",
					"x-decorator": "FormItem",
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
              desc: {
                type: 'string',
                title: 'Description',
                'x-decorator': 'FormItem',
                'x-component': 'Input.TextArea',
              },
              btnText: {
                type: 'string',
                title: 'Button Text',
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
              "tag": {
                type: 'string',
                "title":"Tag",
                'x-decorator': 'FormItem',
                'x-component': 'Select',
                'x-component-props': {
                  defaultValue: '',
                },
                enum: ['','新品', '热销', '活动', '礼品', '免费'],
              }, 
              "style": {
                type: 'string',
                'title':'Text Style',
                'x-decorator': 'FormItem',
                'x-component': 'Select',
                'x-component-props': {
                  defaultValue: '',
                },
                enum: ['bg-lg-transparent-text-light', 'bg-lg-transparent-text-dark'],
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
  title: 'Content Card Title',
  "cards": [
    {
      "tag": "",
      "desc": "兼具平板电脑的多功能与笔记本电脑的高性能 — 一体式超便携设备.",
      "link": "/",
      "image": "/content/dam/ms/cn/homepage/content-card/Content-Card-Surface-Go-4-COMR-M005.webp",
      "title": "Surface Pro 9",
      "btnText": "购买"
    },
    {
      "tag": "新品",
      "desc": "借助 Microsoft 365 应用，将想法变为现实，提高线上和线下安全性，并专注于最重要的事项。",
      "link": "/",
      "image": "/content/dam/ms/cn/homepage/content-card/gldn-CP-Microsoft-Teams-Commercial.webp",
      "title": "Microsoft 365",
      "btnText": "购买"
    },
    {
      "tag": "新品",
      "desc": "新世代主机效能，展现优异游戏体验",
      "link": "/",
      "image": "/content/dam/ms/cn/homepage/gldn-XSS-CP-Xbox-Series-S-Evergreen.webp",
      "title": "XBOX Series X",
      "btnText": "购买XBOX"
    },
    {
      "tag": "新品",
      "desc": "兼具平板电脑的多功能与笔记本电脑的高性能 — 一体式超便携设备.",
      "image": "/content/dam/ms/cn/homepage/content-card/Content-Card-Surface-Go-4-COMR-M005.webp",
      "title": "Surface Pro 9",
      "btnText": "购买"
    }
  ],
}
