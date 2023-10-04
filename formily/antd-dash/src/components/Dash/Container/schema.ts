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

export const DefaultProp = {
  title: 'Highlight',
  "desc": " 您可以提出真實問題、 聊天及創作— AI 驅動網絡副手給您更佳答案",
  "link": "/",
  "image": "/content/dam/ms/cn/homepage/highlight/Highlight-Multi-Canvas-Bing-AI-No-Text_VP5-1596x600.jpg",
  "title": "为您介绍全新的Bing",
  "btnText": "了解Bing",
}
