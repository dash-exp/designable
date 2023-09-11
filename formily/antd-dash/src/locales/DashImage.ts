import { createLocales } from '@designable/core'
import { Input } from './Input'


export const DashImage = {
  'zh-CN': {
    title: '图片组件',
    'style-group':'样式',
    settings: {
      path: '资源路径',
      id:'ID',
      theme:'主题',
      'style-group':{
        'title':'样式'
      },
      'field-group':{
        'title':'属性'
      },
    },
  },
  'en-US': {
    title: 'Dash Image',
    'style-group':'Style',
    settings: {
      path: 'Path',
      id:'ID',
      'style-group':{
        'title':'Style'
      },
      'field-group':{
        'title':'Properties'
      },
      theme:'Theme',
      'field-group':'Properties',
    },
  }
}
