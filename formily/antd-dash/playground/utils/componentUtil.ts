import { ISchema } from '@formily/react'
import { createBehavior, createResource } from '@designable/core'
import { DnFC } from '@designable/react'


export function createComponent(props:any){
    const xComponent = props['name']
    const xType = props['x-type']
    const designerProps = props['designerProps']
    const locale = {
        'zh-CN': {
          title: xComponent,
        },
        'en-US': {
          title: xComponent,
        }
      }
    const Component: DnFC<> = {
        Behavior: createBehavior({
          name: xComponent,
          selector: (node) => node.props['x-component'] === xComponent,
          designerProps: {
            ...designerProps,
            "x-type":xType,
            propsSchema: {
              "type": "object"
            } as ISchema,
          },
          designerLocales: locale,
        }),
        Resource: createResource({
          icon: 'TextSource',
          title: xComponent,
          elements: [
            {
              componentName: 'Field',
              props: {
                'x-type': xType,
                'x-component': xComponent,
              },
            },
          ],
        }),
      }
      return Component
}

