import React, { useState } from 'react'

import Button from 'react-bootstrap/esm/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderPlus, faFileCirclePlus, faArrowUpShortWide, faCompress } from '@fortawesome/free-solid-svg-icons';

const FolderSideTrayTopButtons = () => {
    const [newFilebuttonHovered, setNewFileButtonHovered] = useState(false);
    const [newFolderbuttonHovered, setNewFolderButtonHovered] = useState(false);
    const [sortButtonHovered, setSortButtonHovered] = useState(false);
    const [collapseButtonHovered, setCollapseButtonHovered] = useState(false);
  return (
    <div style={{display: 'flex', justifyContent: 'space-evenly', alignContent: 'center', padding: '0.5rem', }}>
        <Button className='ftray-button-top'
            onMouseEnter={() => setNewFileButtonHovered(true)}
            onMouseLeave={() => setNewFileButtonHovered(false)}

            style ={{backgroundColor: newFilebuttonHovered ? 'black' : 'white', color: newFilebuttonHovered ? 'white' : 'black', transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out'}}
        >
            <FontAwesomeIcon icon={faFileCirclePlus} />
        </Button>
        <Button className='ftray-button-top'
            onMouseEnter={() => setNewFolderButtonHovered(true)}
            onMouseLeave={() => setNewFolderButtonHovered(false)}

            style ={{backgroundColor: newFolderbuttonHovered ? 'black' : 'white', color: newFolderbuttonHovered ? 'white' : 'black', transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out'}}
        >
            <FontAwesomeIcon icon={faFolderPlus} />
        </Button>
        <Button className='ftray-button-top'
            onMouseEnter={() => setSortButtonHovered(true)}
            onMouseLeave={() => setSortButtonHovered(false)}

            style ={{backgroundColor: sortButtonHovered ? 'black' : 'white', color: sortButtonHovered ? 'white' : 'black', transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out'}}
        >
            <FontAwesomeIcon icon={faArrowUpShortWide} />\
        </Button>
        <Button className='ftray-button-top'
            onMouseEnter={() => setCollapseButtonHovered(true)}
            onMouseLeave={() => setCollapseButtonHovered(false)}

            style ={{backgroundColor: collapseButtonHovered ? 'black' : 'white', color: collapseButtonHovered ? 'white' : 'black', transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out'}}
        >
            <FontAwesomeIcon icon={faCompress} />
        </Button>
    </div>
  )
}

export default FolderSideTrayTopButtons