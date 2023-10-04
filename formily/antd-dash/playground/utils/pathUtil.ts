import {
    transformToSchema
  } from '@designable/formily-transformer'

const HTML_EXTIENTION = '.html';

export function getResourcePath() {
    let pathArray = location.pathname.split(HTML_EXTIENTION)
    return pathArray.length > 1 ? pathArray[1]:''
}

export function getPagePath() {
    if(self == top) {
        return getResourcePath()
    }
    let pathArray = location.pathname.split(HTML_EXTIENTION)
    return pathArray[0]
}

export function getSchemaPath(node:TreeNode){
    let depth = node.depth || 0
    const prefix = '$.schema.properties.'
    let schemaPath = []
    let currentNode = node
    while (depth > 0) {
        schemaPath.push(currentNode.id)
        depth = depth -1
        currentNode = node.parent
    }
    const path = prefix + schemaPath.reverse().join(".properties.") 
    return path
}

export function getNodeSchema(node:TreeNode){
   const schemaPath = getSchemaPath(node).substring(2)
   const rootSchema = transformToSchema(node.root)
   return getObjectProperty(rootSchema,schemaPath)

}

const getObjectProperty = (object:Object, path:string) => {
    if (object == null) { // null or undefined
      return object;
  }
    const parts = path.split('.');
    for (let i = 0; i < parts.length; ++i) {
            if (object == null) { // null or undefined
            return undefined;
        }
            const key = parts[i];
        object = object[key];
    }
    return object;
};

