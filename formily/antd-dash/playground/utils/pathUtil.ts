const HTML_EXTIENTION = '.html';
export function getResourcePath() {
    let pathArray = location.pathname.split(HTML_EXTIENTION)   
    return pathArray.length > 1 ? pathArray[1]:''
}

export function getSchemaPath(node:TreeNode){
    let depth = node.depth || 0
    let schemaPath = '$.schema'
    while (depth > 0) {
        schemaPath  = `${schemaPath}.properties.${node.id}`
        depth = node.parent.depth
    }
    return schemaPath
}