import { ISchema } from '@formily/react'


export const DashImage: ISchema = {
	"type": "object",
	"properties": {
		"field-group": {
			"type": "void",
			"x-component": "CollapseItem",
			"properties": {
				"path": {
					"type": "string",
					"x-component": "AssetPicker",
					"x-decorator": "FormItem",
					'x-component-props': {
						"rootPath":"/content/dam",
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

export const DashImageDefaultProp = {
  path:'/content/dam/common/placeholder-image.webp',
}