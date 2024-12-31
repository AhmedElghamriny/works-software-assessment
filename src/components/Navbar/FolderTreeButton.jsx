import React, { useState } from 'react'

import Button from 'react-bootstrap/esm/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderTree } from '@fortawesome/free-solid-svg-icons';
import FolderSideTray from './FolderSideTray';

const FolderTreeButton = () => {
    const [folderTreeBtnHovered, setFolderTreeBtnHovered] = useState(false);
    const [folderTrayShown, setFolderTrayShown] = useState(false);

    const handleFolderTray = () => {
        if (!folderTrayShown) {
            setFolderTrayShown(true);
        }
        else {
            setFolderTrayShown(false);
        }
    }

  return (
    <>
        <Button  
            style={{
                width: '75px',
                backgroundColor: folderTreeBtnHovered ? 'black' : 'white',
                color: folderTreeBtnHovered ? 'white' : 'black',
                border: 'none',
                transition: 'background-color 0.3s ease, color 0.3s ease',
            }}
            onMouseEnter={() => setFolderTreeBtnHovered(true)}
            onMouseLeave={() => setFolderTreeBtnHovered(false)}
            onClick={handleFolderTray}
        >
            <FontAwesomeIcon icon={faFolderTree} />
        </Button>

        <FolderSideTray visible={folderTrayShown}/>
    </>
  )
}

export default FolderTreeButton