import React from 'react'
import { Checkbox as FormilyCheckbox } from '@formily/antd'
import { createBehavior, createResource } from '@designable/core'
import { DnFC } from '@designable/react'
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
  },
  designerLocales: locale,
})

Container.Resource = createResource({
  icon: 'CardSource',
  title: {
    'zh-CN': '容器',
    'en-US': 'Container',
  },
  elements: [
    {
      componentName: 'Container',
      props: {
        'x-type': 'base/cmp/container',
        'x-component-name': 'Container',//对应Iframe里面渲染对应的组件
        'x-component': 'Container',
        ...DefaultProp
      },
    },
  ],
})
