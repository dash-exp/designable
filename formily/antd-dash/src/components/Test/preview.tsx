import React from 'react'
import { createBehavior, createResource } from '@designable/core'
import { DnFC } from '@designable/react'
import { createVoidFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'
import cls from 'classnames'
import './styles.less'

export interface IDesignableTestProps {
  value?: string
  content?: string
  mode?: 'normal' | 'h1' | 'h2' | 'h3' | 'p'
  style?: React.CSSProperties
  className?: string
}

export const Test: DnFC<IDesignableTestProps> = (props) => {
  return <></>
}

Test.Behavior = createBehavior({
  name: 'Test',
  selector: (node) => node.props['x-component'] === 'Test',
  designerProps: {
    propsSchema: AllSchemas.Test,
  },
  designerLocales: AllLocales.Test,
})

Test.Resource = createResource({
  icon: 'TextSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        'x-type': 'base/cmp/test',
        'x-component': 'Test',
        ...AllSchemas.DefaultTestProp
      },
    },
  ],
})
