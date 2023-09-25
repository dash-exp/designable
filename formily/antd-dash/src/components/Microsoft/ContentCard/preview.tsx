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

export const ContentCard: DnFC<IDesignableProps> = (props) => {
  return <></>
}

ContentCard.Behavior = createBehavior({
  name: 'ContentCard',
  // extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'ContentCard',
  designerProps: {
    propsSchema: CmpSchema,
  },
  designerLocales: locale,
})

ContentCard.Resource = createResource({
  icon: 'TextSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        'x-type': 'ms/cmp/content/content-card',
        'x-component': 'ContentCard',
        ...DefaultProp
      },
    },
  ],
})
