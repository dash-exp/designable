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
        "country": {
					"type": "string",
					"x-decorator": "FormItem",
          title: 'Label Country',
					"x-component": "Input"
				},
        navs: {
          "x-decorator": "FormItem",
          title: 'Navigations',
          'x-component': 'ArrayItems',
          type: 'array',
          items: {
            type: 'object',
            'x-decorator': 'ArrayItems.Item',
            'x-component-props': {
              header: 'Nav',
            },
            'x-decorator-props': {
              style: {
                alignItems: 'center',
                borderRadius: 3,
                paddingTop: 6,
                paddingBottom: 6,
              },
            },
            properties: {
              sortable: {
                type: 'void',
                'x-component': 'ArrayItems.SortHandle',
                'x-component-props': { style: { marginRight: 10 } },
              },
              title: {
                type: 'string',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
              },
              drawer: {
                type: 'void',
                'x-component-props': {
                  text: 'edit',
                },
                'x-decorator': 'FormItem',
                'x-component': 'DrawerSetter',
                properties: {
                  title: {
                    type: 'string',
                    title: 'Title',
                    'x-decorator': 'FormItem',
                    'x-component': 'Input',
                  },
                  links: {
                    type: 'array',
                    title:'Links',
                    'x-component': 'ArrayCollapse',
                    maxItems: 3,
                    'x-decorator': 'FormItem',
                    items: {
                      type: 'object',
                      'x-component': 'ArrayCollapse.CollapsePanel',
                      'x-component-props': {
                        header: 'Item',
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
                        title: 'add item',
                        'x-component': 'ArrayCollapse.Addition',
                      },
                    },
                  },
                },
              },
              remove: {
                type: 'void',
                'x-component': 'ArrayItems.Remove',
                'x-component-props': { style: { marginLeft: 5 } },
              },
            },
          },
          properties: {
            addItem: {
              type: 'void',
              'x-component': 'ArrayItems.Addition',
              'x-component-props': {
                style: {
                  marginBottom: 10,
                },
              },
            },
          },
        },                
        links: {
          type: 'array',
          title:'Bottom Links',
          'x-component': 'ArrayCollapse',
          maxItems: 3,
          'x-decorator': 'FormItem',
          items: {
            type: 'object',
            'x-component': 'ArrayCollapse.CollapsePanel',
            'x-component-props': {
              header: 'Item',
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
              title: 'add item',
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
