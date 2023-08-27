import { message } from 'antd'
import axios from 'axios';
import {
  transformToSchema,
  transformToTreeNode,
} from '@designable/formily-transformer'
import {getSchemaPath,getResourcePath} from '../utils/pathUtil'

// 加载初始schema数据
// 加载组件html
// 保存页面
// 保存组件配置更新
// 发布页面
// 加载模板可用组件清单
// 加载素材列表
// 用户信息？

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  const token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjE2OWE3MDU0LTlkNjgtNDdmNS1iODE5LTcyYmFhYzE5NjA3ZCJ9.WAQ-zvxDbU9yktjLoVKOoAn2aVA5V_3ejPZduG19hVRwwFF3ps25psrzCoa9k5a_ITFHDCFoa3IbAMRdsrXa2A';
  config.headers.Authorization =  token;
  return config;
});


export const loadInitialPageSchema = (designer: Engine) => {
  const itemPath = getResourcePath() 

  axios.get(`/api/content/page/get?itemPath=${itemPath}`).then((result)=>{
    const schema = {
      'form':{},
      'schema':result.data.data.content.schema
      
    }
    console.log(schema)
    designer.setCurrentTree(
      transformToTreeNode(schema)
    )
  })
}


export async function loadCompHtml (url:string) {
    //https://design.oppo.com/content/oasis/in/en/jcr:content/root/responsivegrid/article_card_copy_16.html
    let result = 'html'
    await axios.get(url).then((resp)=>{
      console.log(resp)
      result = resp.data
    })

    return result
}

export const savePageContent = (designer: Engine) => {
  const itemPath = getResourcePath() 
  const schema = transformToSchema(designer.getCurrentTree())
  axios.post(`/api/content/page/updatePageContent?itemPath=${itemPath}`,schema).then((result)=>{
    console.log(result)
  })
  message.success('Save Success')
}

export const saveComp = (node:TreeNode) => {
  const schemaPath = getSchemaPath(node)
  const itemPath = getResourcePath() + '/:content/'+schemaPath
  console.log(itemPath,node.props)
  axios.post(`/api/content/page/saveComp?itemPath=${itemPath}`,node.props).then((result)=>{
    console.log(result)
  })
  message.success('Save Success')
}


