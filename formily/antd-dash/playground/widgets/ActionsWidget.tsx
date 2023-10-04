import React, { useEffect } from 'react'
import { Space, Button, Radio } from 'antd'
import { useDesigner, TextWidget } from '@designable/react'
import {getSchemaPath,getResourcePath} from '../utils/pathUtil'
import {
  transformToSchema,
  transformToTreeNode,
} from '@designable/formily-transformer'
import { GlobalRegistry,RemoveNodeEvent,InsertAfterEvent,InsertBeforeEvent,PrependNodeEvent,AppendNodeEvent,CloneNodeEvent } from '@designable/core'
import { insertCmpEleBefore,insertCmpEleAfter,removeEleByCmpId,loadInitialCompHtml,handleStructureNode } from '../dom';

import { observer } from '@formily/react'
import { loadInitialSchema, saveSchema ,loadInitialPageSchema,savePageContent} from '../service'

export const ActionsWidget = observer(() => {
  const designer = useDesigner()
  window.designer = designer
  window.schema = ()=>{
    return JSON.stringify(transformToSchema(designer.getCurrentTree()))
  }

  // //组件删除
  // designer.subscribeTo(RemoveNodeEvent, (event) => {
  //   const { source, target } = event.data
  //   // setTimeout(() => {
  //   //   savePageContent(designer)
  //   // }, 100);
  // })

  // //组件添加
  // designer.subscribeTo(InsertAfterEvent, (event) => {
  //   const { source, target } = event.data
  //   // setTimeout(() => {
  //   //   console.log('action InsertAfterEvent',event.data,source[0].id,target.id)
  //   //   savePageContent(designer,()=>{
  //   //     insertCmpEleAfter(source[0],target)
  //   //   })
  //   // }, 100);
  // })

  // designer.subscribeTo(InsertBeforeEvent, (event) => {
  //   const { source, target } = event.data
  //   // console.log('action InsertBeforeEvent',source,target)
  //   // setTimeout(() => {
  //   //   savePageContent(designer,()=>{
  //   //     insertCmpEleBefore(source[0],target)
  //   //   })
  //   // }, 100);
  // })


  // designer.subscribeTo(PrependNodeEvent, (event) => {
  //   const { source, target } = event.data
  //   console.log('action PrependNodeEvent',source,target)
  //   setTimeout(() => {
  //     savePageContent(designer)
  //   }, 100);
  // })



  // designer.subscribeTo(AppendNodeEvent, (event) => {
  //   const { source, target } = event.data
  //   console.log('action AppendNodeEvent',source,target)
  //   setTimeout(() => {
  //     savePageContent(designer)
  //   }, 100);
  // })


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
