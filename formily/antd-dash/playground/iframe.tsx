import React,{Children} from 'react'
import { ComponentTreeWidget, useTreeNode,useDesigner,useOperation } from '@designable/react'
import { observer } from '@formily/reactive-react'
import 'antd/dist/antd.css'
import ReactDOM from "react-dom";
import { GlobalRegistry,UpdateNodePropsEvent,RemoveNodeEvent,InsertAfterEvent,InsertBeforeEvent,PrependNodeEvent,AppendNodeEvent,CloneNodeEvent } from '@designable/core'
import { PureComponent, useState,useEffect } from 'react';
import { createElement } from 'react';
import { getHtmlEleByComponentId,createComponentHolder,indexOfParentContainer,removeEleByCmpId,loadInitialCompHtml,handleStructureNode } from './dom';
import './iframe.less';

export const Content = () => {

  const designer = useDesigner()
  const engine = useOperation()?.engine
  handleStructureNode(engine)
  //组件删除
  designer.subscribeTo(RemoveNodeEvent, (event) => {
    const { source, target } = event.data
    setTimeout(() => {
      removeEleByCmpId(target.id)
    }, 100);
    console.log('iframe removeNode',source,target)
  })

  //组件新增
  designer.subscribeTo(InsertAfterEvent, (event) => {
    const { source, target } = event.data
    console.log('iframe InsertAfterEvent',source,target)

  })

  designer.subscribeTo(PrependNodeEvent, (event) => {
    const { source, target } = event.data
    console.log('iframe PrependNodeEvent',source,target)

  })

  designer.subscribeTo(InsertBeforeEvent, (event) => {
    const { source, target } = event.data
    console.log('iframe InsertBeforeEvent',source,target)

  })

  designer.subscribeTo(AppendNodeEvent, (event) => {
    const { source, target } = event.data
    console.log('iframe AppendNodeEvent',source,target)

  })

  designer.subscribeTo(UpdateNodePropsEvent, (event) => {
    const { source, target } = event.data
    loadInitialCompHtml(target)
    console.log('iframe UpdateNodePropsEvent',source,target)

  })

  

  return (
    <ComponentTreeWidget
    components={{
      Field: observer((props) => {
        const node = useTreeNode()
        // console.log(node)
        const nodeId = node.props['x-designable-id'];
        const selector = `.dash-editable[cmpid='${nodeId}']`;
        const container = document.querySelector(selector); 
         if(container === null) {
          return;
        }
        return ReactDOM.createPortal(
          <div className="dash-editable-placeholder" {...props} style={{
            display: 'block',
            zIndex:10000 + node.depth,
            ...props.style,
          }}>
            {props.children}
          </div>,
          container
        );

      }),
      Container: observer((props) => {
        const node = useTreeNode()
        const selector = `.dash-editable[cmpid='${node.id}']`;
        const container = document.querySelector(selector); 
         if(container === null) {
          return <div>container editable not found</div>;
        }

        const adjustComponents = () => {
          const rootContainer = document.getElementById("page-root");
          
          if(rootContainer == null) {
            return;
          }

          let preEle = null;
      
          // 调整对应dom的位置或者生成新的组件dom结构
          Children.forEach(props.children, (child, index) => {
            let nodeId = child.props.node['id'];
           
            let cmpName = child.props.node['componentName'];
            let componentDomEle = getHtmlEleByComponentId(nodeId);
            console.log(nodeId,componentDomEle)
            if (!componentDomEle) {
              createComponentHolder(rootContainer, cmpName, nodeId,child.props.node);
              componentDomEle = getHtmlEleByComponentId(nodeId);
            }
            const domIndex = indexOfParentContainer(componentDomEle);
            //console.log('index','dom',domIndex,'node',child.props.node.props['x-index'])

            if (index !== domIndex) {
              if (preEle === null) {
                rootContainer.prepend(componentDomEle);
              } else {
                preEle.after(componentDomEle);
              }
            }
            preEle = componentDomEle;
          });
        };

        useEffect(()=>{
          // console.log("adjustComponents")
          adjustComponents()
        },[props.children])

        return ReactDOM.createPortal(
          <>
          <div className="dash-editable-placeholder" {...props} style={{
            display: 'block',
            zIndex:10000 + node.depth,
            ...props.style,
          }}>
            {props.children}
          </div>
          <div className="dash-editable-container">Drag components here</div>
           </>,
          container
        );

      }),
      Form: (props) => {
        // 节点删掉后需要删除对应的dom结构
        // const rootContainer = document.body;
        // const adjustComponents = () => {
        //   // const rootContainer = document.getElementById("page-root");
          
        //   if(rootContainer == null) {
        //     return;
        //   }

        //   let preEle = null;
      
        //   // 调整对应dom的位置或者生成新的组件dom结构
        //   Children.forEach(props.children, (child, index) => {
        //     let nodeId = child.props.node['id'];
           
        //     let cmpName = child.props.node['componentName'];
        //     let componentDomEle = getHtmlEleByComponentId(nodeId);
        //     console.log(nodeId,componentDomEle)
        //     if (!componentDomEle) {
        //       createComponentHolder(rootContainer, cmpName, nodeId,child.props.node);
        //       componentDomEle = getHtmlEleByComponentId(nodeId);
        //     }
        //     const domIndex = indexOfParentContainer(componentDomEle);
        //     //console.log('index','dom',domIndex,'node',child.props.node.props['x-index'])

        //     if (index !== domIndex) {
        //       if (preEle === null) {
        //         rootContainer.prepend(componentDomEle);
        //       } else {
        //         preEle.after(componentDomEle);
        //       }
        //     }
        //     preEle = componentDomEle;
        //   });
        // };

        // useEffect(()=>{
        //   // console.log("adjustComponents")
        //   //adjustComponents()
        // },[props.children])

        return ReactDOM.createPortal(
          <div className="dash-editable" {...props} style={{
            display: 'block',
            ...props.style,
          }}>
            {props.children}

            {/* <div className="drag-holder">Drag components here</div> */}
          </div>,
          document.body
        );
      },
    }}
  />
  )
}
  
