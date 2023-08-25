import React from 'react'
import { TreeNode } from '@designable/core'
import { usePrefix } from '../../hooks'
import { IconWidget } from '../IconWidget'
import { Button } from 'antd'
export interface ISettingProps {
  node: TreeNode
  style?: React.CSSProperties
}

export const Setting: React.FC<ISettingProps> = ({ node, style }) => {
  const prefix = usePrefix('aux-setting')
  if (node === node.root) return null
  return (
    <Button
      className={prefix}
      style={style}
      type="primary"
      onClick={() => {
        node.editting = true
      }}
    >
      <IconWidget infer="Setting" />
    </Button>
  )
}

Setting.displayName = 'Setting'
