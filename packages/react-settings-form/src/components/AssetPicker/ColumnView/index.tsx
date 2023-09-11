import React,{ Fragment, useCallback, useState,useEffect } from 'react';
import "./index.less"
import Section from './Section';
import {listAssetChildren} from '../../../service'
import {Row} from './Row'

type Props = {
  rootPath?: string;
  handleValueChange?:() => void;
};


const ColumnView = ({ rootPath,handleValueChange }: Props) => {
  const [selectedPath,setSelectedPath] = useState('')
  const [currentPath,setCurrentPath] = useState('')
  const [paths,setPaths] = useState([])
  const onSelectPath = (path:string,type:string) => {
    if(type !='FOLDER'){
      return
    }
    const newPaths = paths.filter(item=>path.indexOf(item.path)>-1 && path !== item.path)
    listAssetChildren(path).then((data)=>{
      // setItems(data.data.data)
      setPaths([...newPaths,{path:path,children:data.data.data}])
      setCurrentPath(path)
      setSelectedPath('')
    })

  }

 

  const onClick = (path:string) => {
    if(path === selectedPath){
      setSelectedPath('')
    } else {
      setSelectedPath(path)
      handleValueChange(path)
    }
  }

  useEffect(()=>{
    listAssetChildren(rootPath).then((data)=>{
      setPaths([{path:rootPath,children:data.data.data}])
    })

  },[])

  return (
    <>
      <div className="dash-column-view">
        <div className="dash-column-section-container">
          {paths.map((path, sectionIndex) => (
            <Section
              key={sectionIndex} item = {path.path}
            >
              {path.children.map(
                (item,index) => {
                  return (
                    <Row
                      key={item.path}
                      hasChildren = {item.assetType=='FOLDER'}
                      onClick={() => onSelectPath(item.path,item.assetType)}
                      onSelect={() => onClick(item.path)}
                      isCurrent= {currentPath.indexOf(item.path) > -1}
                      item = {item}
                      isSelected={item.path === selectedPath}
                    />
                  );
                }
              )}
            </Section>
          ))}        

        </div>
      </div>
    </>
  );
};

export default ColumnView;
