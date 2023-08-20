import React from 'react'
import { Checkbox as FormilyCheckbox } from '@formily/antd'
import { createBehavior, createResource } from '@designable/core'
import { DnFC } from '@designable/react'
import { createFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'

export const DashTitle: DnFC<React.ComponentProps<typeof FormilyCheckbox>> =
  FormilyCheckbox

DashTitle.Behavior = createBehavior({
  name: 'Dash Title',
  // extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'Dash.Title',
  designerProps: {
    propsSchema: createFieldSchema(AllSchemas.DashTitle),
  },
  designerLocales: AllLocales.DashTitle,
})

DashTitle.Resource = createResource({
  icon: 'PasswordSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        title: 'DashTitle',
        'x-decorator': 'FormItem',
        'x-component': 'Dash.Title',
      },
    },
  ],
})
