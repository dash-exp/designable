import React from 'react'
import { createBehavior, createResource } from '@designable/core'
import { DnFC } from '@designable/react'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'

export interface IDesignableTitletProps {
  value?: string
  content?: string
  mode?: 'normal' | 'h1' | 'h2' | 'h3' | 'p'
  style?: React.CSSProperties
  className?: string
}

export const DashImage: DnFC<IDesignableTitleProps> = (props) => {
  return <></>
}

DashImage.Behavior = createBehavior({
  name: 'Dash Image',
  // extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'DashImage',
  designerProps: {
    propsSchema: AllSchemas.DashImage,
  },
  designerLocales: AllLocales.DashImage,
})

DashImage.Resource = createResource({
  icon: 'CardSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        'x-type': 'base/cmp/image',
        'x-component': 'DashImage',
        ...AllSchemas.DashImageDefaultProp
      },
    },
  ],
})
