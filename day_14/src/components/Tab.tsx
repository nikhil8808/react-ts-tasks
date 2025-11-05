import React from 'react'

type tabProps={
    title:string;
    handleToggleTab:(tab:string)=>void;
    tab_name:string;
    active_tab:string
}

const Tab = ({title,handleToggleTab,tab_name,active_tab}:tabProps) => {
  return (
    <div className={`tab-item-container ${active_tab===tab_name?"active":""} `} onClick={()=>handleToggleTab(tab_name)}>
       <h5>{title}</h5>
    </div>
  )
}

export default Tab