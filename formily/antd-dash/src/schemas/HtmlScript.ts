import { ISchema } from '@formily/react'


export const HtmlScript: ISchema = {
	"type": "object",
	"properties": {
		"field-group": {
			"type": "void",
			"x-component": "CollapseItem",
			"properties": {
				"html": {
					"type": "string",
					title:'Html',
					"x-decorator": "FormItem",
					"x-component": "Input.TextArea"
					},
				"script": {
					type: 'string',
					title:'Script',
					'x-decorator': 'FormItem',
					'x-component': 'Input.TextArea',
				},
				"style": {
					type: 'string',
					title:'Style',
					'x-decorator': 'FormItem',
					'x-component': 'Input.TextArea',
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

export const HtmlScriptDefaultProp = {
  title:'title',
  subTitle:'subtitle'
}