import React from 'react'
import { Checkbox as FormilyCheckbox } from '@formily/antd'
import { createBehavior, createResource } from '@designable/core'
import { DnFC } from '@designable/react'
// import { createFieldSchema } from '../Field'
// import { AllSchemas } from '../../../schemas'
// import { AllLocales } from '../../../locales'
import { CmpSchema,DefaultProp} from './schema'
import { locale} from './locale'

export interface IDesignableProps {
  value?: string
  content?: string
  mode?: 'normal' | 'h1' | 'h2' | 'h3' | 'p'
  style?: React.CSSProperties
  className?: string
}

export const HighlightCarousel: DnFC<IDesignableProps> = (props) => {
  return <></>
}

HighlightCarousel.Behavior = createBehavior({
  name: 'HighlightCarousel',
  // extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'HighlightCarousel',
  designerProps: {
    propsSchema: CmpSchema,
  },
  designerLocales: locale,
})

HighlightCarousel.Resource = createResource({
  icon: 'TextSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        'x-type': 'ms/cmp/content/highlight-carousel',
        'x-component': 'HighlightCarousel',
        ...DefaultProp
      },
    },
  ],
})
