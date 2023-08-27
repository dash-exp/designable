import React, { useEffect } from 'react'
import { Space, Button, Radio } from 'antd'
import { GithubOutlined } from '@ant-design/icons'
import { useDesigner, TextWidget } from '@designable/react'
import { GlobalRegistry,RemoveNodeEvent,InsertAfterEvent,InsertBeforeEvent,PrependNodeEvent,AppendNodeEvent,CloneNodeEvent } from '@designable/core'


import { observer } from '@formily/react'
import { loadInitialSchema, saveSchema ,loadInitialPageSchema,savePageContent} from '../service'

export const ActionsWidget = observer(() => {
  const designer = useDesigner()

  //组件删除
  designer.subscribeTo(RemoveNodeEvent, (event) => {
    const { source, target } = event.data
    console.log('removeNode',source,target)
    setTimeout(() => {
      savePageContent(designer)
    }, 100);
  })

  //组件删除
  designer.subscribeTo(InsertAfterEvent, (event) => {
    setTimeout(() => {
      savePageContent(designer)
    }, 100);
  })

  designer.subscribeTo(PrependNodeEvent, (event) => {
    setTimeout(() => {
      savePageContent(designer)
    }, 100);
  })

  designer.subscribeTo(InsertBeforeEvent, (event) => {
    setTimeout(() => {
      savePageContent(designer)
    }, 100);
  })

  designer.subscribeTo(AppendNodeEvent, (event) => {
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
  return (
    <Space style={{ marginRight: 10 }}>
      <Button
        onClick={() => {
          savePageContent(designer)
        }}
      >
        <TextWidget>Save</TextWidget>
      </Button>
      <Button
        type="primary"
        onClick={() => {
          saveSchema(designer)
        }}
      >
        <TextWidget>Publish</TextWidget>
      </Button>
    </Space>
  )
})
