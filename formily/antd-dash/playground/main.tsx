import 'antd/dist/antd.less'
import React, { useMemo } from 'react'
import ReactDOM from 'react-dom'
import {
  Designer,
  DesignerToolsWidget,
  ViewToolsWidget,
  Workspace,
  OutlineTreeWidget,
  ResourceWidget,
  HistoryWidget,
  StudioPanel,
  CompositePanel,
  WorkspacePanel,
  ToolbarPanel,
  ViewportPanel,
  ViewPanel,
} from '@designable/react'
import {
  SettingsDrawer,
  setNpmCDNRegistry,
} from '@designable/react-settings-form'
import {
  createDesigner,
  GlobalRegistry,
  Shortcut,
  KeyCode,
} from '@designable/core'

import {
  LogoWidget,
  ActionsWidget,
  SchemaEditorWidget,
  PreviewPageWidget
} from './widgets'
import { saveSchema,saveComp } from './service'
import {
  Form,
  DashTitle,
  DashImage,
  HtmlScript,
  Test,
  Container,
  HighlightCarousel,
  AlertComponent,
  ContentCard,
  LinkList,
  Highlight,
  SocialFollow,
  Footer,
  Header
} from '../src'

import './main.less'

import { getResourcePath } from './utils/pathUtil';

import { Sandbox } from '@designable/react-sandbox'

setNpmCDNRegistry('//cdn.jsdelivr.net/npm')

GlobalRegistry.registerDesignerLocales({
  'zh-CN': {
    sources: {
      Inputs: '输入控件',
      Layouts: '布局组件',
      Arrays: '自增组件',
      Displays: '展示组件',
    },
  },
  'en-US': {
    sources: {
      Inputs: 'Inputs',
      Layouts: 'Layouts',
      Arrays: 'Arrays',
      Displays: 'Displays',
    },
  },
  'ko-KR': {
    sources: {
      Inputs: '입력',
      Layouts: '레이아웃',
      Arrays: '배열',
      Displays: '디스플레이',
    },
  },
})

GlobalRegistry.setDesignerBehaviors([Header.Behavior,Footer.Behavior,SocialFollow.Behavior,Highlight.Behavior,LinkList.Behavior,ContentCard.Behavior,AlertComponent.Behavior,HighlightCarousel.Behavior,Form.Behavior,DashTitle.Behavior,HtmlScript.Behavior,DashImage.Behavior,Container.Behavior])

const App = () => {
  const resourcePath = getResourcePath();
  const engine = useMemo(
    () =>
      createDesigner({
        shortcuts: [
          new Shortcut({
            codes: [
              [KeyCode.Meta, KeyCode.S],
              [KeyCode.Control, KeyCode.S],
            ],
            handler(ctx) {
              saveSchema(ctx.engine)
            },
          }),
        ],
        rootComponentName: 'Form',
      }),
    []
  )

  return (
    <Designer engine={engine}>
      <StudioPanel logo={<LogoWidget />} actions={<ActionsWidget />}>
        <CompositePanel>
          <CompositePanel.Item title="panels.Component" icon="Component">
            <ResourceWidget
              title="Microsoft"
              sources={[
                Header,Footer,AlertComponent,HighlightCarousel,ContentCard,LinkList,Highlight,SocialFollow
              ]}
            />
            <ResourceWidget
              title="Dash.Base"
              sources={[
                Container,DashTitle,HtmlScript,DashImage
              ]}
            />
          </CompositePanel.Item>
          <CompositePanel.Item title="panels.OutlinedTree" icon="Outline">
            <OutlineTreeWidget />
          </CompositePanel.Item>
          {/* <CompositePanel.Item title="panels.History" icon="History">
            <HistoryWidget />
          </CompositePanel.Item> */}
        </CompositePanel>
        <Workspace id="form">
          <WorkspacePanel>
            <ToolbarPanel>
              <DesignerToolsWidget use={['SCREEN_TYPE']}/>
              <ViewToolsWidget
                use={['DESIGNABLE', 'JSONTREE','PREVIEW']}
              />
            </ToolbarPanel>
            <ViewportPanel style={{ height: '100%' }}>
              <ViewPanel type="DESIGNABLE">
              {() => (
                  <Sandbox
                    src={resourcePath}
                  />
                )}
 
              </ViewPanel>
              <ViewPanel type="JSONTREE" scrollable={false}>
                {(tree, onChange) => (
                  <SchemaEditorWidget tree={tree} onChange={onChange} />
                )}
              </ViewPanel>
              <ViewPanel type="PREVIEW" scrollable={false}>
                {(tree) => (
                  <PreviewPageWidget tree={tree} />
                )}
              </ViewPanel>
            </ViewportPanel>
          </WorkspacePanel>
        </Workspace>
        {/* <SettingsPanel title="panels.PropertySettings">
          <SettingsForm uploadAction="https://www.mocky.io/v2/5cc8019d300000980a055e76" />
        </SettingsPanel> */}
        <SettingsDrawer submitHandler={saveComp} />
      </StudioPanel>
    </Designer>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
