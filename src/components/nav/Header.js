import React, {useState} from "react";
// import {Menu} from 'antd';
// import { AppstoreOutlined, SettingOutlined, UserOutlined, UserAddOutlined } from '@ant-design/icons';
// const { SubMenu,Item } = Menu;
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,Container,NavDropdown} from 'react-bootstrap';
import './Header.css';
import Home from "../../pages/Home";
import Login from "../../pages/auth/Login";
import Register from "../../pages/auth/Register";
const Header = () =>{
   const [current, setCurrent] = useState('home')
   
   const handleClick = (e) => {
      setCurrent(e.key);
   };
   return(
 <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
       <ul onClick={handleClick} selectedKeys={[current]}>
         <li key={Home}>
         <svg xmlns="http://www.w3.org/2000/svg" 
         width="16" height="16" fill="currentColor" 
         class="bi bi-house-fill" viewBox="0 0 16 16">
         <path fill-rule="evenodd" 
          d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
         <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
         </svg><a href="/">HOME</a></li>
         <li key=""><svg xmlns="http://www.w3.org/2000/svg" width="16"
          height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
          <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
          </svg><a href="#">USERNAME</a></li>
       </ul>
       <ul>
         <li key={Login}>
         <svg xmlns="http://www.w3.org/2000/svg" width="16" 
         height="16" fill="currentColor" class="bi bi-person-fill" 
         viewBox="0 0 16 16">
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
        </svg><a href="/login">LOGIN</a></li>
         <li key={Register}><svg xmlns="http://www.w3.org/2000/svg" width="16"
          height="16" fill="currentColor" class="bi bi-person-plus-fill"
           viewBox="0 0 16 16">
           <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
           <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
           </svg><a href="/register">REGISTER</a></li>
       </ul>
    </div>
  </Navbar>
   )
}

export default Header