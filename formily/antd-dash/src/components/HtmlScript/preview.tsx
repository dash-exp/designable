import React from 'react'
import { Checkbox as FormilyCheckbox } from '@formily/antd'
import { createBehavior, createResource } from '@designable/core'
import { DnFC } from '@designable/react'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'

export interface IDesignableScriptProps {
  html?: string
  style?: string
  script?: string
  className?: string
}

export const HtmlScript: DnFC<IDesignableScriptProps> = (props) => {
  return <></>
}

HtmlScript.Behavior = createBehavior({
  name: 'Custom Script',
  // extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'HtmlScript',
  designerProps: {
    propsSchema: AllSchemas.HtmlScript,
  },
  designerLocales: AllLocales.HtmlScript,
})

HtmlScript.Resource = createResource({
  icon: 'TextSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        'x-type': 'base/cmp/html-script',
        'x-component': 'HtmlScript',
        ...AllSchemas.DashTitleDefaultProp
      },
    },
  ],
})
