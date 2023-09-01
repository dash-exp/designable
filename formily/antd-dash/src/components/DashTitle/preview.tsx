import React from 'react'
import { Checkbox as FormilyCheckbox } from '@formily/antd'
import { createBehavior, createResource } from '@designable/core'
import { DnFC } from '@designable/react'
import { createFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'

export interface IDesignableTitletProps {
  value?: string
  content?: string
  mode?: 'normal' | 'h1' | 'h2' | 'h3' | 'p'
  style?: React.CSSProperties
  className?: string
}

export const DashTitle: DnFC<IDesignableTitleProps> = (props) => {
  const tagName = props.mode === 'normal' || !props.mode ? 'div' : props.mode
  return React.createElement(
    tagName,
    {
      ...props,
      className: cls(props.className, 'dash-title'),
      'data-content-editable': 'x-component-props.content',
    },
    props.content
  )
}

DashTitle.Behavior = createBehavior({
  name: 'Dash Title',
  // extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'DashTitle',
  designerProps: {
    propsSchema: AllSchemas.DashTitle,
  },
  designerLocales: AllLocales.DashTitle,
})

DashTitle.Resource = createResource({
  icon: 'TextSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        'x-type': 'content/title/title',
        'x-component': 'DashTitle',
        ...AllSchemas.DashTitleDefaultProp
      },
    },
  ],
})
