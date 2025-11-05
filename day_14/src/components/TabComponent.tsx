import React,{useState} from 'react'
import Tab from './Tab'
import HomeComponent from './HomeComponent'
import ProfileComponent from './ProfileComponent'
import MenuComponent from './MenuComponent'

const TabComponent = () => {
    const [activeTab,setActiveTab]=useState<string>('home')

    const handleToggleTab=(tab:string)=>{

       if(tab!="")
       {
        setActiveTab(tab)
       }

    }



   


  return (
    <div className='tab-container'>
        <div className='content-container'>
           {activeTab==="home" && <HomeComponent />}
            {activeTab==="profile" && <ProfileComponent />}
          {activeTab==="menu" && <MenuComponent />}

        </div>
        <div className='tabs'>
         <Tab 
           title="Home"
           tab_name="home"
           handleToggleTab={handleToggleTab}
           active_tab={activeTab}
         />
        <Tab 
           title="Profile"
            tab_name="profile"
             handleToggleTab={handleToggleTab}
               active_tab={activeTab}
         />
        <Tab 
           title="Menu"
           tab_name="menu"
             handleToggleTab={handleToggleTab}
               active_tab={activeTab}
         />
        </div>

    </div>
  )
}

export default TabComponent