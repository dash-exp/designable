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
          title: 'Title',
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
                'x-decorator': 'FormItem',
                'x-component': 'Select',
                'x-component-props': {
                  defaultValue: '',
                },
                enum: ['新品', '热销', '活动', '礼品', '免费'],
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
  title: 'Highlight Carousel',
  "cards": [
    {
      "tag": "新品",
      "desc": "尖端设计与惊异性能完美结合在这款多功能笔记本电脑之上，让你创意满满，轻松娱乐",
      "image": "/content/dam/ms/cn/homepage/Highlight-Surface-Laptop-Studio-2-CONS-M001-1_VP5-1920x600.webp",
      "style": "bg-lg-transparent-text-light",
      "title": "Surface Latop Studio2",
      "btnText": "立即订阅"
    },
    {
      "tag": "新品",
      "desc": " 一款便携度令人惊艳的全能笔记本电脑，性能和电池续航时间皆合你意。",
      "image": "/content/dam/ms/cn/homepage/Highlight-Surface-Laptop-Go-3-CONS-M001-1_VP5-1920x600.webp",
      "style": "bg-lg-transparent-text-dark",
      "title": "Surface Latop Go3",
      "btnText": "立即订阅"
    }
  ]
}
