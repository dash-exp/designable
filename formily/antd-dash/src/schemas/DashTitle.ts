import { ISchema } from '@formily/react'
import { Input } from './Input'
export const Password: ISchema = {
  type: 'object',
  properties: {
    title: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
  },
}
