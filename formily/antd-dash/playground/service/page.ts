import { message } from 'antd'
import axios from 'axios';

// 加载初始schema数据
// 加载组件html
// 保存页面
// 保存组件配置更新
// 发布页面
// 加载模板可用组件清单
// 加载素材列表
// 用户信息？



export const loadInitialPageSchema = (url: string) => {
  axios.get(url).then((result)=>{
    console.log(result)
  })
}


export async function loadCompHtml (url:string) {
    //https://design.oppo.com/content/oasis/in/en/jcr:content/root/responsivegrid/article_card_copy_16.html
    let html = ''
    let tempUrl = 'https://design.oppo.com/content/oasis/in/en/jcr:content/root/responsivegrid/article_card_copy_16.html'
    await axios.get(tempUrl).then((resp)=>{
          html = resp.data
    });
    return "html"
}

export const savePage = (path:string,data:any) => {
  axios.post(path,data).then((result)=>{
    console.log(result)
  })
  message.success('Save Success')
}

export const saveComp = (path:string,data:any) => {
  axios.post(path,data).then((result)=>{
    console.log(result)
  })
  message.success('Save Success')
}


