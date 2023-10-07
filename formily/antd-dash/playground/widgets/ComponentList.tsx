import React, {useState,useEffect} from 'react'
import { GlobalRegistry } from '@designable/core'
import { createComponent } from '../utils/componentUtil';
import { loadCompList,loadCompSchema } from '../service'
import {  ResourceWidget } from '@designable/react'

export const ComponentList = ()=>{
    const [componentGroup,setComponentGroup] = useState({})

    useEffect(() => {
      //编辑时通过接口获取schema的handle
      GlobalRegistry.setDesignerSchemaHandler((type:string)=>{
        loadCompSchema(type).then((resp)=>{
          const schema = resp.data.data
          schema && GlobalRegistry.setDesignerSchema(type,schema)
        })
      })
      // component 列表
      let components:Record<string, []> = {}
      let behaviors:IBehavior[] =[]
      loadCompList().then((resp)=>{
           const cmps = resp.data.data
           cmps.forEach((node) => {
            const component = createComponent(node)
            components[node.group]= components[node.group] || []
            components[node.group] = [...components[node.group],component]
            behaviors.push(component.Behavior)
          });

          setComponentGroup(components)
          GlobalRegistry.setDesignerBehaviors(behaviors)
      })
  
      //console.log(GlobalRegistry.getDesignerBehaviors())
    }, [])
  
    return <>
      {Object.keys(componentGroup).map((group) => {
        return group.indexOf('hidden') == -1 &&
          <ResourceWidget
          title={group}
          sources={componentGroup[group]}/>
        
      })}
    </>
    }