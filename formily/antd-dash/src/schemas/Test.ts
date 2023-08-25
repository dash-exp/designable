import { ISchema } from '@formily/react'

// export const Test: ISchema = {
//   type: 'object',
//   properties: {
//     content: {
//       type: 'string',
//       'x-decorator': 'FormItem',
//       'x-component': 'Input.TextArea',
//     },
//     mode: {
//       type: 'string',
//       'x-decorator': 'FormItem',
//       'x-component': 'Select',
//       'x-component-props': {
//         defaultValue: 'normal',
//       },
//       enum: ['h1', 'h2', 'h3', 'p', 'normal'],
//     },
//   },
// }
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
