import React, { Fragment, useState } from 'react'
import { observer, useField } from '@formily/react'
import ColumnView from "./ColumnView";
import { Button, ButtonProps,Modal,Input } from 'antd'
import './styles.less'
import { usePrefix, IconWidget } from '@designable/react'

export interface IAssetPickerProps {
  text: React.ReactNode
  rootPath?:string
  triggerProps: ButtonProps
}

export const AssetPicker: React.FC<IAssetPickerProps> = observer((props) => {
  const field = useField()
  const {rootPath} = props
  const [visible, setVisible] = useState(false)

  const [path, setPath] = useState(props.value)

  const handleOpen = () => {
    setVisible(true)
  }

  const handleClose = () => {
    setVisible(false)
  }

  const handleConfirm = () => {
    props.value = path
    setVisible(false)
  }


  return (
    <Fragment>
      <Input
        {...props}
        onChange={(e) => {
          props.onChange?.(e?.target?.['value'])
        }}
        suffix={
          <IconWidget onClick={handleOpen} {...props.triggerProps} infer="Add" style={{ cursor: 'pointer' }} />
        }
      />
      <Modal open={visible} onCancel={handleClose} className="dash-asset-picker" onOk={handleConfirm}>
         <ColumnView rootPath={rootPath} handleValueChange={setPath} ></ColumnView> 
      </Modal>

    </Fragment>
  )
})
