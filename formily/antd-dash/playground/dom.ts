export function indexOfParentContainer(ele?: HTMLElement) {
    const index = Array.from(
        ele.parentElement.children
    ).indexOf(ele);
    return index;
}



export function createComponentHolder(containerEle: HTMLElement, cmpName: string, cmpId: string): void {
    const div = document.createElement('div');
    div.innerHTML = `<div class="${cmpName} cmp-holder" cmpid="${cmpId}" style="height:100px;">
          <div class="cmp-ghost-container" data-designer-node-id="${cmpId}">${cmpName} ${cmpId}</div>
      </div>`;
    containerEle.append(div.firstChild!);
  }
  
export function getHtmlEleByComponentId(id: String) : HTMLElement | null {
    const selector = `.cmp-holder[cmpid='${id}']`;
    return document.querySelector(selector);
}
