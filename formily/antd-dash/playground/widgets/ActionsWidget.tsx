import React, { useEffect } from 'react'
import { Space, Button, Radio } from 'antd'
import { GithubOutlined } from '@ant-design/icons'
import { useDesigner, TextWidget } from '@designable/react'
import {getSchemaPath,getResourcePath} from '../utils/pathUtil'
import {
  transformToSchema,
  transformToTreeNode,
} from '@designable/formily-transformer'
import { GlobalRegistry,RemoveNodeEvent,InsertAfterEvent,InsertBeforeEvent,PrependNodeEvent,AppendNodeEvent,CloneNodeEvent } from '@designable/core'


import { observer } from '@formily/react'
import { loadInitialSchema, saveSchema ,loadInitialPageSchema,savePageContent} from '../service'

export const ActionsWidget = observer(() => {
  const designer = useDesigner()
  window.designer = designer
  window.schema = ()=>{
    return JSON.stringify(transformToSchema(designer.getCurrentTree()))
  }

  //组件删除
  designer.subscribeTo(RemoveNodeEvent, (event) => {
    const { source, target } = event.data
    setTimeout(() => {
      savePageContent(designer)
    }, 100);
  })

  //组件删除
  designer.subscribeTo(InsertAfterEvent, (event) => {
    const { source, target } = event.data
    setTimeout(() => {
      savePageContent(designer)
    }, 100);
  })

  designer.subscribeTo(PrependNodeEvent, (event) => {
    const { source, target } = event.data
    setTimeout(() => {
      savePageContent(designer)
    }, 100);
  })

  designer.subscribeTo(InsertBeforeEvent, (event) => {
    const { source, target } = event.data
    setTimeout(() => {
      savePageContent(designer)
    }, 100);
  })

  designer.subscribeTo(AppendNodeEvent, (event) => {
    const { source, target } = event.data
    setTimeout(() => {
      savePageContent(designer)
    }, 100);
  })


  useEffect(() => {
    loadInitialPageSchema(designer)
    //loadInitialSchema(designer)
  }, [])
  const supportLocales = ['zh-cn', 'en-us', 'ko-kr']
  useEffect(() => {
    if (!supportLocales.includes(GlobalRegistry.getDesignerLanguage())) {
      GlobalRegistry.setDesignerLanguage('zh-cn')
    }
  }, [])

  const preview =()=>{
      const pagePath = getResourcePath() + ".html"
      window.open(pagePath)
  }

  return (
    <Space style={{ marginRight: 10 }}>
      <Button
        onClick={() => {
          preview()
        }}
      >
        <TextWidget>Preview</TextWidget>
      </Button>
      <Button type="primary"
        onClick={() => {
          savePageContent(designer)
        }}
      >
        <TextWidget>Save</TextWidget>
      </Button>

    </Space>
  )
})
