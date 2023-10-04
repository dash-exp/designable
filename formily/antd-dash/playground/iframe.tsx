import React,{Children} from 'react'
import { ComponentTreeWidget, useTreeNode,useDesigner,useOperation } from '@designable/react'
import { observer } from '@formily/reactive-react'
import 'antd/dist/antd.css'
import ReactDOM from "react-dom";
import { GlobalRegistry,UpdateNodePropsEvent,RemoveNodeEvent,InsertAfterEvent,InsertBeforeEvent,PrependNodeEvent,AppendNodeEvent,CloneNodeEvent } from '@designable/core'
import { useState,useEffect } from 'react';
import { insertCmpEleBefore,insertCmpEleAfter,removeEleByCmpId,loadInitialCompHtml,handleStructureNode,createNodeHolder,getEleByNodeId } from './dom';
import './iframe.less';
import { loadInitialSchema, saveSchema ,savePageContent} from './service'

export const Content = () => {

  const designer = useDesigner()
  const engine = useOperation()?.engine

  //组件删除
  designer.subscribeTo(RemoveNodeEvent, (event) => {
    const { source, target } = event.data
    setTimeout(() => {
      savePageContent(designer,()=>{
        removeEleByCmpId(target.id)
      })
    }, 100);
    console.log('iframe removeNode',source,target)
  })

  //组件新增
  designer.subscribeTo(InsertAfterEvent, (event) => {
    const { source, target } = event.data
    console.log('iframe InsertAfterEvent',source,target)
    setTimeout(() => {
      savePageContent(designer,()=>{
        insertCmpEleAfter(source[0],target)
      })
    }, 100);

  })

  designer.subscribeTo(InsertBeforeEvent, (event) => {
    const { source, target } = event.data
    console.log('iframe InsertBeforeEvent',source,target)
    setTimeout(() => {
      savePageContent(designer,()=>{
        insertCmpEleBefore(source[0],target)
      })
    }, 100);

  })

  //容器新增子组件节点
  designer.subscribeTo(PrependNodeEvent, (event) => {
    const { source, target } = event.data
    console.log('iframe PrependNodeEvent',source,target)
    setTimeout(() => {
      savePageContent(designer,()=>{
        createNodeHolder(source[0],target)
      })
    }, 100);
  })

  designer.subscribeTo(AppendNodeEvent, (event) => {
    const { source, target } = event.data
    console.log('iframe AppendNodeEvent',source,target)
    setTimeout(() => {
      savePageContent(designer,()=>{
        createNodeHolder(source[0],target)
      })
    }, 100);

  })

  //组件内容更新
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
        const [version, setVersion] = useState(new Date().getTime());
        const handleRefresh = () => {
          //console.log('domRefresh')
          setVersion(new Date().getTime())
        }
        //todo:: 优化改成只触发对应组件的更新
        useEffect(()=>{
          document.addEventListener('domRefresh',handleRefresh)
          return () => {
            document.removeEventListener('domRefresh', handleRefresh);
          };
        },[])

        const container = getEleByNodeId(node.id); 

        // {console.log("field render",node,selector)}
         if(container === null) {
          {console.log("field render,container not found",node)}
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
      // Container: observer((props) => {
      //   const node = useTreeNode()
      //   const selector = `.dash-editable[x-id='${node.id}']`;
      //   const container = document.querySelector(selector); 
      //    if(container === null) {
      //     return <div>container editable not found</div>;
      //   }

      //   const adjustComponents = () => {
      //     const rootContainer = document.getElementById("page-root");
          
      //     if(rootContainer == null) {
      //       return;
      //     }

      //     let preEle = null;
      
      //     // 调整对应dom的位置或者生成新的组件dom结构
      //     Children.forEach(props.children, (child, index) => {
      //       let nodeId = child.props.node['id'];
           
      //       let cmpName = child.props.node['componentName'];
      //       let componentDomEle = getHtmlEleByComponentId(nodeId);
      //       console.log(nodeId,componentDomEle)
      //       if (!componentDomEle) {
      //         createComponentHolder(rootContainer, cmpName, nodeId,child.props.node);
      //         componentDomEle = getHtmlEleByComponentId(nodeId);
      //       }
      //       const domIndex = indexOfParentContainer(componentDomEle);
      //       //console.log('index','dom',domIndex,'node',child.props.node.props['x-index'])

      //       if (index !== domIndex) {
      //         if (preEle === null) {
      //           rootContainer.prepend(componentDomEle);
      //         } else {
      //           preEle.after(componentDomEle);
      //         }
      //       }
      //       preEle = componentDomEle;
      //     });
      //   };

      //   useEffect(()=>{
      //     // console.log("adjustComponents")
      //     adjustComponents()
      //   },[props.children])

      //   return ReactDOM.createPortal(
      //     <>
      //     <div className="dash-editable-placeholder" {...props} style={{
      //       display: 'block',
      //       zIndex:10000 + node.depth,
      //       ...props.style,
      //     }}>
      //       {props.children}
      //     </div>
      //     <div className="dash-editable-container">Drag components here</div>
      //      </>,
      //     container
      //   );

      // }),
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
        const [version, setVersion] = useState(new Date().getTime());
        const handleRefresh = () => {
          console.log('domRefresh')
          setVersion(new Date().getTime())
        }
        //todo:: 优化改成只触发对应组件的更新
        useEffect(()=>{
          handleStructureNode(engine)
          document.addEventListener('domRefresh',handleRefresh)
          return () => {
            document.removeEventListener('domRefresh', handleRefresh);
          };
        },[])

        {console.log("form render",new Date())}

        return ReactDOM.createPortal(
          <div className="dash-editable" {...props} style={{
            display: 'block',
            ...props.style,
          }}>
            {props.children}
          
          </div>,
          document.body
        );
      },
    }}
  />
  )
}
  
