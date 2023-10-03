import React, { useMemo, useState } from 'react'
import { createForm } from '@formily/core'
import { Form,Submit } from '@formily/antd'
import { observer } from '@formily/react'
import { requestIdle, cancelIdle } from '@designable/shared'
import {
  usePrefix,
  useSelected,
  useOperation,
  useSelectedNode,
  useWorkbench,
  IconWidget,
  NodePathWidget,
} from '@designable/react'
import { SchemaField } from './SchemaField'
import { ISettingDrawerProps } from './types'
import { SettingsFormContext } from './shared/context'
import { useLocales, useSnapshot } from './effects'
import { Empty,Drawer,Button,Space } from 'antd'
import cls from 'classnames'
import './styles.less'
import './SettingsDrawer.less'

const GlobalState = {
  idleRequest: null,
}


export const SettingsDrawer: React.FC<ISettingDrawerProps> = observer(
  (props) => {
    const workbench = useWorkbench()
    const currentWorkspace =
      workbench?.activeWorkspace || workbench?.currentWorkspace
    const currentWorkspaceId = currentWorkspace?.id
    const operation = useOperation(currentWorkspaceId)
    const node = useSelectedNode(currentWorkspaceId)
    const selected = useSelected(currentWorkspaceId)
    const {submitHandler} = props

    const prefix = usePrefix('settings-form')
    const schema = node?.designerProps?.propsSchema
    const isEmpty = !(
      node && node.editting &&
      node.designerProps?.propsSchema &&
      selected.length === 1
    )
    let formVal = {...node?.props}
    if(!formVal['x-type']){
      formVal['x-type'] = node?.designerProps['x-type']
    }

      // todo:: 填充x-component和x-type

    const form = useMemo(() => {
      return createForm({
        initialValues: node?.designerProps?.defaultProps,
        values: formVal,
        effects(form) {
          useLocales(node)
          //useSnapshot(operation)
          props.effects?.(form)
        },
      })
    }, [node, node?.props, schema, operation, isEmpty])

    const onClose = () => {
      node.editting =false;
    };

    const onSubmit = () => {
      node.setProps(form.values)
      submitHandler(node)
      node.editting =false
    };

    const render = () => {
      if (!isEmpty) {
        console.log("form edit",node)
        return (
          <Drawer
            title={node.props['x-component']}
            className='dash-cmp-setting-drawer'
            width={500}
            maskClosable={false}
            onClose={onClose}
            visible = {node.editting}
            bodyStyle={{ paddingBottom: 80 }}
            extra={
              <Space>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={onSubmit} type="primary">
                  Submit
                </Button>
              </Space>
            }
          >
          <div
            className={cls(prefix, props.className)}
            style={props.style}
            key={node.id}
          >
            <SettingsFormContext.Provider value={props}>
              <Form
                form={form}
                colon={false}
                labelWidth={120}
                labelAlign="left"
                wrapperAlign="right"
                feedbackLayout="none"
                tooltipLayout="text"
              >
                <SchemaField
                  schema={schema}
                  components={props.components}
                  // scope={{ $node: node, ...props.scope }}
                />
                  {/* <Submit onSubmit={() => {
                    console.log(form.values)
                    node.props = form.values
                  }}>提交</Submit> */}
              </Form>
            </SettingsFormContext.Provider>
          </div>
          </Drawer>
        )
      }
      return (
        <div className={prefix + '-empty'}>
          <Empty />
        </div>
      )
    }

    return (
      <IconWidget.Provider tooltip>
        <div className={prefix + '-wrapper'}>
          {!isEmpty && <NodePathWidget workspaceId={currentWorkspaceId} />}
          <div className={prefix + '-content'}>{render()}</div>
        </div>
      </IconWidget.Provider>
    )
  },
  {
    scheduler: (update) => {
      cancelIdle(GlobalState.idleRequest)
      GlobalState.idleRequest = requestIdle(update, {
        timeout: 500,
      })
    },
  }
)
