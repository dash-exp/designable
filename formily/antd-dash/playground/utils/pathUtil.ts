const HTML_EXTIENTION = '.html';
export function getResourcePath() {
    let pathArray = location.pathname.split(HTML_EXTIENTION)   
    return pathArray.length > 1 ? pathArray[1]:''
}
