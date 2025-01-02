import React, { useState } from 'react'

import SettingsDropdownButton from './SettingsDropdownButton'

import Button from 'react-bootstrap/esm/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const FolderSideTrayBottomButtons = () => {
  const [githubButtonHovered, setGithubButtonHovered] = useState(false);
  return (
    <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
        <Button 
          style = {{backgroundColor: githubButtonHovered ? 'black' : 'white', color: githubButtonHovered ? 'white' : 'black', transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out', border: 'none', fontSize: '1rem'}}
          onMouseEnter={() => setGithubButtonHovered(true)}
          onMouseLeave={() => setGithubButtonHovered(false)}
         >
          <FontAwesomeIcon icon={faGithub}/>
        </Button>
        <SettingsDropdownButton />
    </div>
  )
}

export default FolderSideTrayBottomButtons