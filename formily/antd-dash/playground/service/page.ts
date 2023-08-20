import { axios } from 'axios'
import {
  transformToSchema,
  transformToTreeNode,
} from '@designable/formily-transformer'
import { message } from 'antd'

export const saveSchema = (params: Any) => {
  const schema= JSON.stringify(transformToSchema(designer.getCurrentTree()))
  axios.post("/api/content/page/update",schema).then(function (response) {
    console.log(response.data);
  });
}

export const loadInitialSchema = (params: Any) => {
  try {

    axios.get("/api/content/page/get",params).then(function (response) {
      designer.setCurrentTree(
        transformToTreeNode(JSON.parse(response.data))
      )
    });

  } catch {}
}
