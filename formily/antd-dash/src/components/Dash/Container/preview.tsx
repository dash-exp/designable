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

export const Container: DnFC<IDesignableProps> = (props) => {
  return <></>
}

Container.Behavior = createBehavior({
  name: 'Container',
  // extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'Container',
  designerProps: {
    draggable: false,
    cloneable: false,
    deletable: false,
    droppable: true,
    propsSchema: CmpSchema,
    'x-type': 'base/cmp/container',
  },
  designerLocales: locale,
})

Container.Resource = createResource({
  icon: 'TextSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        'x-type': 'base/cmp/container',
        'x-component': 'Container',
        ...DefaultProp
      },
    },
  ],
})
