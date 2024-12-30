import React, {useState} from 'react'

import './Navbar.css'

import Dropdown from 'react-bootstrap/Dropdown';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';


const SettingsDropdownButton = () => {
    const [settingsButtonisHovered, setSettingsButtonHovered] = useState(false);
    
  return (
    <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic" 
            style={{
            backgroundColor: settingsButtonisHovered ? "white" : "black",
            color: settingsButtonisHovered ? "black" : "white",
            border: 'none',
            transition: 'background-color 0.3s ease, color 0.3s ease'
        }}
            onMouseEnter={() => setSettingsButtonHovered(true)}
            onMouseLeave={() => setSettingsButtonHovered(false)}
        >
            <FontAwesomeIcon icon={faGear} style={{fontSize: '1.5rem'}}/>
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-1" >Account Settings</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
  )
}

export default SettingsDropdownButton