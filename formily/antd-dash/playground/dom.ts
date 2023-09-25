import { loadInitialPageSchema, loadCompHtml } from './service'
import {getSchemaPath,getResourcePath} from './utils/pathUtil'

export function indexOfParentContainer(ele?: HTMLElement) {
    const index = Array.from(
        ele.parentElement.children
    ).indexOf(ele);
    return index;
}


export function createComponentHolder(containerEle: HTMLElement, cmpName: string, cmpId: string,child:TreeNode): void {
    const div = document.createElement('div');
    div.innerHTML = `<div class="${cmpName} dash-editable" cmpid="${cmpId}">
          <section></section>
          <div class="dash-editable-placeholder" data-designer-node-id="${cmpId}"></div>
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