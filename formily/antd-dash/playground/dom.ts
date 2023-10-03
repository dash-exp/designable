import { loadInitialPageSchema, loadCompHtml } from './service'
import {getSchemaPath,getResourcePath} from './utils/pathUtil'
import { useOperation } from '@designable/react'
import { Engine,TreeNode,Designer } from '@designable/core'


export function indexOfParentContainer(ele?: HTMLElement) {
    const index = Array.from(
        ele.parentElement.children
    ).indexOf(ele);
    return index;
}


export function createComponentHolder(containerEle: HTMLElement, cmpName: string, cmpId: string,child:TreeNode): void {
    const div = document.createElement('div');
    const zIndex = 9999  + child.depth;
    div.innerHTML = `<div class="${cmpName} dash-editable" cmpid="${cmpId}">
          <section></section>
          <div class="dash-editable-placeholder" data-designer-node-id="${cmpId}" style="z-index:${zIndex}"></div>
      </div>`;
    containerEle.append(div.firstChild!);
    loadInitialCompHtml(child);
}


export function loadInitialCompHtml(node:TreeNode): void {
   
    const schemaPath = getSchemaPath(node).replace("$.","")
    const pagePath = location.pathname.split('.html')[0]
    const itemPath = pagePath + '/:content/'+schemaPath + '.html'
    const selector = `.dash-editable[cmpid='${node.id}'] section`;
    const cmpEle = document.querySelector(selector);
    setTimeout(() => {
        loadCompHtml(itemPath).then((html)=>{
            //console.log('loadInitialCompHtml',html)
            cmpEle?.outerHTML= html;
        });
    }, 200);

}  
  
export function getHtmlEleByComponentId(id: String) : HTMLElement | null {
    const selector = `.dash-editable[cmpid='${id}']`;
    return document.querySelector(selector);
}

export function removeEleByCmpId(id: String) {
    const selector = `.dash-editable[cmpid='${id}']`;
    const ele = document.querySelector(selector)
    ele?.parentNode.removeChild(ele) 
}

export function handleStructureNode(engine:Engine) {
     const selector = `.dash-editable[x-editable-structure]`;
    document.querySelectorAll(selector).forEach(function (ele) {
      //console.log(ele);
      const nodeId = ele.getAttribute("x-editable-structure")

      if(!engine.findNodeById(nodeId)){
        const parentId = ele.getAttribute("x-editable-parent")
        const parentNode = engine.findNodeById(parentId) || engine.getCurrentTree()
        const current = {
            id: nodeId,
            componentName:ele.getAttribute("x-component-name") || "Field",
            props: {
                "x-component":ele.getAttribute("x-component")
            },
            children: [],
        } 

        const currentNode = new TreeNode(current,parentNode)
        parentNode.children.push(currentNode)
      }    

    })

    // setTimeout(() => {
    //     const rootNode = engine.getCurrentTree()
    //     rootNode.setProps({
    //         ...rootNode.props,
    //         version:new Date().getTime()
    //     })
        
    //     document.querySelectorAll(selector).forEach(function (ele) {
    //         //console.log(ele);
    //         const nodeId = ele.getAttribute("x-editable-structure")
    //         const node =engine.findNodeById(nodeId)
    //         node.setProps({
    //             ...node.props,
    //             version:new Date().getTime()
    //         })
    //       })

    // }, 1500);

    
}