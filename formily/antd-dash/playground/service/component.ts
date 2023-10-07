import { message } from 'antd'
import axios from 'axios';
import {
  transformToSchema,
  transformToTreeNode,
} from '@designable/formily-transformer'
import {getSchemaPath,getResourcePath,getNodeSchema,getPagePath} from '../utils/pathUtil'

export async function loadCompList () {
  let result = {}
  await axios.get(`/api/component/list`).then((resp)=>{
      result = resp.data
    })
  return result
}


export async function loadCompSchema (node:TreeNode) {
    const url = `/api/component/schema?path=${node.designerProps['x-type']}`
    let result = {}
    await axios.get(url).then((resp)=>{
      result = resp.data
    })

    return result
}



