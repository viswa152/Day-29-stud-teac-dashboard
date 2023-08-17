import { Button } from '@mui/material';
import React from 'react';
import {BsSearch} from 'react-icons/bs';
import {IoMdNotificationsOutline} from 'react-icons/io'
import {FiMessageSquare} from 'react-icons/fi'
import './Navbar.css';

function Navbar() {
  return (
      <div >
        <nav className='navbar'>
          <div className='d-flex'>
          <input className="form-control" type="text" /> 
            <Button variant="outlined"> <BsSearch /> </Button>
           <div className='nav-right'>
            <div className="notifications">
                <h4><IoMdNotificationsOutline/></h4>
                <h4><FiMessageSquare/></h4>
            </div>
           </div>
          </div>
        </nav>
      </div>
  )
}

export default Navbar