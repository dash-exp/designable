import React, { Fragment, useState } from 'react'
import { observer, useField } from '@formily/react'
import { FormLayout } from '@formily/antd'
import { Button, ButtonProps,Modal } from 'antd'
import './styles.less'

export interface IModalSetterProps {
  text: React.ReactNode
  triggerProps: ButtonProps
}

export const ModalSetter: React.FC<IModalSetterProps> = observer((props) => {
  const field = useField()
  const [visible, setVisible] = useState(false)

  const handleOpen = () => {
    setVisible(true)
  }

  const handleClose = () => {
    setVisible(false)
  }

  return (
    <Fragment>
      <Button block onClick={handleOpen} {...props.triggerProps}>
        {props.text || field.title}
      </Button>
      <Modal open={visible} onCancel={handleClose}>
         <FormLayout
            colon={false}
            labelWidth={120}
            labelAlign="left"
            wrapperAlign="right"
            feedbackLayout="none"
            tooltipLayout="text"
          >
            {props.children}
          </FormLayout>
      </Modal>

    </Fragment>
  )
})
