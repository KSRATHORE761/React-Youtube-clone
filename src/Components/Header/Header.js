import React, {useState} from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';


function Header() {
  const[inputSearch,setInputSearch] = useState('');

  return (
    <div className='header'>
    <div className='header__left'>
    <MenuIcon/>
    <Link to ='/'>
      <img className='header__logo' 
       src = 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg' 
       alt=''/>
       </Link>
    </div>
    <div className='header__middle'>
    <input type='text' placeholder='Search' value = {inputSearch} onChange = {e => setInputSearch(e.target.value)}></input>
       <Link to={`/search/${inputSearch}`}>
       <SearchIcon className='header__inputButton'/>
       </Link>
    </div>
    <div className='header__right'>
       <VideoCallIcon className='header__icon'/>
       <AppsIcon className='header__icon'/>
       <NotificationsIcon className='header__icon'/>
       <Avatar src ='https://avatars.githubusercontent.com/u/29653843?s=400&u=d9171e25dfd974f54895c2986a2cccf538db0c41&v=4'
        alt='Kuldeep Rathore'
       />
    </div>
    </div>
  )
}

export default Header
