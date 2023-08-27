import React from 'react'
import { Form } from '@formily/core'
export interface ISettingFormProps {
  className?: string
  style?: React.CSSProperties
  uploadAction?: string
  components?: Record<string, React.FC<any>>
  effects?: (form: Form) => void
  scope?: any
}

export interface ISettingDrawerProps {
  className?: string
  style?: React.CSSProperties
  submitHandler?: (node: TreeNode) => void
  components?: Record<string, React.FC<any>>
  effects?: (form: Form) => void
  scope?: any
}
