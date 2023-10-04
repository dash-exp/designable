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

function getCmpEleTemplate(node:TreeNode):HTMLElement{
    const div = document.createElement('div');
    const zIndex = 9999  + node.depth;
    div.innerHTML = `<div class="${node.componentName} dash-editable" cmpid="${node.id}">
          <section></section>
          <div class="dash-editable-placeholder" data-designer-node-id="${node.id}" style="z-index:${zIndex}"></div>
      </div>`;
    return div.firstChild
}


export function createNodeHolder(source:TreeNode,containerNode:TreeNode): void {
    let cmpEle = getCmpEleTemplate(source)
    const targetEle = getContainerEleByNodeId(containerNode.id) || getEleByNodeId(containerNode.id)
    console.log(targetEle)
    targetEle?.append(cmpEle!);
    loadInitialCompHtml(source);
}

export function insertCmpEleBefore(source:TreeNode,target:TreeNode): void {
    let cmpEle = getEleByNodeId(source.id) || getCmpEleTemplate(source)
    const targetEle = getEleByNodeId(target.id)
    targetEle?.parentNode.insertBefore(cmpEle!,targetEle);
    loadInitialCompHtml(source);
}

export function insertCmpEleAfter(source:TreeNode,target:TreeNode): void {
    let cmpEle = getEleByNodeId(source.id) || getCmpEleTemplate(source)
    const targetEle = getEleByNodeId(target.id)
    targetEle?.parentNode.insertBefore(cmpEle!,targetEle.nextSibling);
    loadInitialCompHtml(source);
}


export function loadInitialCompHtml(node:TreeNode): void {
   
    const schemaPath = getSchemaPath(node).replace("$.","")
    let pagePath = location.pathname.split('.html')[0]
    const itemPath = pagePath + '/:content/'+schemaPath + '.html'
    const selector = `.dash-editable[cmpid='${node.id}'] section`;
    const cmpEle = document.querySelector(selector);
    setTimeout(() => {
        loadCompHtml(itemPath).then((html)=>{
            //console.log('loadInitialCompHtml',html)
            cmpEle?.outerHTML= html;
            triggerRefresh()
        });
    }, 200);
}  

export function triggerRefresh(): void {
    const event = new Event("domRefresh");
    document.dispatchEvent(event)
}  
  
export function getEleByNodeId(id: String) : HTMLElement | null {
    const selector = `.dash-editable[cmpid='${id}']`;
    return document.querySelector(selector);
}

export function getContainerEleByNodeId(id: String) : HTMLElement | null {
    const selector = `.dash-editable-container[cmpid='${id}']`;
    return document.querySelector(selector);
}

export function removeEleByCmpId(id: String) {
    const selector = `.dash-editable[cmpid='${id}']`;
    const ele = document.querySelector(selector)
    ele?.parentNode.removeChild(ele) 
    triggerRefresh()
}

export function handleStructureNode(engine:Engine) {
     const selector = `.dash-editable[x-editable-structure]`;
    document.querySelectorAll(selector).forEach(function (ele) {
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
}