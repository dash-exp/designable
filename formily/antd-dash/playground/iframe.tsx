import React,{Children} from 'react'
import { ComponentTreeWidget, useTreeNode } from '@designable/react'
import { observer } from '@formily/reactive-react'
import 'antd/dist/antd.css'
import ReactDOM from "react-dom";
import { PureComponent, useState,useEffect } from 'react';
import { createElement } from 'react';
import { getHtmlEleByComponentId,createComponentHolder,indexOfParentContainer } from './dom';

import {
  Form,
  Field,
  Input,
  Select,
  TreeSelect,
  Cascader,
  Radio,
  Slider,
  Rate,
  NumberPicker,
  Transfer,
  Password,
  DatePicker,
  Upload,
  Switch,
  Text,
  Card,
  ArrayCards,
  ObjectContainer,
  ArrayTable,
  Space,
  FormTab,
  FormCollapse,
  FormLayout,
  FormGrid,
} from '../src'


export const Content = () => (
  <ComponentTreeWidget
    components={{
      Field: observer((props) => {
        const node = useTreeNode()
        // console.log(node)
        const nodeId = node.props['x-designable-id'];
        const selector = `.cmp-holder[cmpid='${nodeId}']`;
        const container = document.querySelector(selector); 
        const pageContainer = document.getElementById('page-root');
        if(container === null) {
          return;
        }
        return ReactDOM.createPortal(
          <div className="cmp-ghost-container" {...props} style={{
            display: 'block',
            ...props.style,
          }}>
            {/* <span data-content-editable="title">{node.props.title}</span> */}
            {props.children}
          </div>,
          container
        );

      }),
      Card: (props) => {
        return (
          <div
            {...props}
            style={{
              background: '#eee',
              border: '1px solid #ddd',
              display: 'flex',
              padding: 10,
              height: props.children ? 'auto' : 150,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {props.children ? props.children : <span>拖拽字段进入该区域</span>}
          </div>
        )
      },
      Form: (props) => {
        // console.log(JSON.stringify(props));

        // 节点删掉后需要删除对应的dom结构
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
            if (!componentDomEle) {
              createComponentHolder(rootContainer, cmpName, nodeId);
              componentDomEle = getHtmlEleByComponentId(nodeId);
            }
            const domIndex = indexOfParentContainer(componentDomEle);
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
          adjustComponents()
        })

        return (
          <div
            {...props}
            style={{
              background: '#eee',
              border: '1px solid #ddd',
              display: 'flex',
              padding: 10,
              height: props.children ? 'auto' : 150,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >


            {/* <span data-content-editable="title">FORM:</span> */}
            {props.children ? props.children : <span>拖拽字段进入该区域</span>}


          </div>
        )
      },
    }}
  />
)