import { createLocales } from '@designable/core'
import { Input } from './Input'


export const HtmlScript = {
  'zh-CN': {
    title: '代码片段',
    'style-group':'样式',
    settings: {
      title:'标题',
      subtitle: '副标题',
      id:'ID',
      theme:'主题',
      'style-group':{
        'title':'样式'
      },
      'field-group':{
        'title':'属性'
      },
      mode: {
        title: '测试文本类型',
        dataSource: ['H1', 'H2', 'H3', 'Paragraph', 'Normal'],
      },
    },
  },
  'en-US': {
    title: 'Html Script',
    'style-group':'Style',
    settings: {
      html: 'HTML',
      script: 'Script',
      style: 'Style',
      id:'ID',
      'style-group':{
        'title':'Style'
      },
      'field-group':{
        'title':'Properties'
      },
      theme:'Theme',
      'field-group':'Properties',
      mode: {
        title: 'Test Mode',
        dataSource: ['H1', 'H2', 'H3', 'Paragraph', 'Normal'],
      },
    },
  }
}
