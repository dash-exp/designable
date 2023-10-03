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

export const Footer: DnFC<IDesignableProps> = (props) => {
  return <></>
}

Footer.Behavior = createBehavior({
  name: 'Footer',
  // extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'Footer',
  designerProps: {
    propsSchema: CmpSchema,
  },
  designerProps(node) {
    return {
      draggable: false,
      cloneable: false,
      deletable: false,
      droppable: false,
      propsSchema: CmpSchema,
      "x-type":"ms/cmp/global/footer",
      defaultProps: {
        // labelCol: 6,
        // wrapperCol: 12,
      },
    }
  },
  designerLocales: locale,
})

Footer.Resource = createResource({
  icon: 'TextSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        'x-type': 'ms/cmp/global/footer',
        'x-component': 'Footer',
        ...DefaultProp
      },
    },
  ],
})
