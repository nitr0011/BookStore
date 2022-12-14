import React,{useState} from 'react'
import {Drawer,List,IconButton,Link,Tab} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

const PAGES = ["Home","Books","About Us","Login","Signup"]
function DrawerComp() {
 
  const [openDrawer,setOpenDrawer] = useState(false)
  return (
   <React.Fragment>
    <Drawer open={openDrawer}
    onClose={()=>setOpenDrawer(false)}
    >
      <List style={{color:'navy'}}>
                          <Link style={{color:'navy'}} href="/">
                            <li>
                            <Tab label='Home'/>
                            </li>
                          </Link>
                          <Link style={{color:'navy'}} href="/Books">
                            <li>
                            <Tab label='Books'/>
                            </li>
                          </Link>
                          <Link style={{color:'navy'}} href="/Aboutus">
                            <li>
                            <Tab label='About Us'/>
                            </li>
                          </Link>
                          <Link style={{color:'navy'}} href="/Profile">
                            <li>
                            <Tab label='Profile'/>
                            </li>
                          </Link>
                            <li>
                            <Tab label='Log Out'/>
                            </li>
                         
                          

       
      </List>
    </Drawer>
    <IconButton style={{color:'white', marginLeft:'auto'}} onClick={()=> setOpenDrawer(!openDrawer)}>
    <MenuIcon/>
    </IconButton>
   </React.Fragment>
  )
}

export default DrawerComp