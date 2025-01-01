import React, { useState } from 'react'

import Row from 'react-bootstrap/esm/Row'
import Button from 'react-bootstrap/esm/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons'

const FolderExplorer = () => {
    const [folders, setFolders] = useState(['test1', 'test2']);
    const [hoveredStates, setHoveredStates] = useState(folders.map(() => false));
    const [foldersSelected, setFoldersSelected] = useState(folders.map(() => false));

    const handleHoverOverEnter = (index) => {
      setHoveredStates((prevStates) => {
          const newStates = [...prevStates];
          newStates[index] = true;
          return newStates;
      })
    }

    const handleHoverOverLeave = (index) => {
      setHoveredStates((prevStates) => {
        const newStates = [...prevStates];
        newStates[index] = false;
        return newStates;
      })
    }
   
    const handleExpandFolder = (index) => {
      setFoldersSelected((prevStates) => {
        const newStates = [...prevStates];
        if(newStates[index] === true) {
          newStates[index] = false
        }
        else {
          newStates[index] = true
        }
        return newStates;
      })
    }

    const handleChangeName = (editFolderName, folderIndex) => {
      setFolders((prevNames) => {
        const newNames = [...prevNames];
        newNames[folderIndex] = editFolderName;
        return newNames;
      })
    }

    const loadFolders = folders.map((folder, index) => {
      const [isEditing, setIsEditing] = useState(false);

      const handleEditing = (folderName, folderIndex) => {
        if (folderName === '') {
          setFolders((prevNames) => {
            const newNames = [...prevNames];
            newNames[folderIndex] = 'Unnamed';
            return newNames;
          })
        }

        setIsEditing(false);
      }

      return (
        <Button 
          style={{
            backgroundColor: hoveredStates[index] ? 'black' : 'white',
            color: hoveredStates[index] ? 'white' : 'black',
            height: '40px',
            border: 'none',
            transition: 'background-color 0.3s ease-in-out, color 0.5s ease-in-out',
            display: 'flex',
            justifyContent: 'center'
          }}
          onMouseEnter={() => handleHoverOverEnter(index)}
          onMouseLeave={() => handleHoverOverLeave(index)}
          onClick={() => handleExpandFolder(index)}
        >   <div style={{width :'20%'}}>
              {foldersSelected[index] ? <FontAwesomeIcon icon={faAngleDown} style={{width: '20%'}}/> : <FontAwesomeIcon icon={faAngleRight} style={{width: '20%'}} />}
            </div>
            <div style={{width :'80%'}}>
              { isEditing ? <input 
                onChange={(e) => handleChangeName(e.target.value, index)} 
                onBlur={(e) => handleEditing(e.target.value, index)} value={folder}/> : <p onDoubleClick={() => setIsEditing(true)}>{folder}</p>
              }
            </div>
        </Button>
      )
    })

  return (
    <Row style={{color: 'black', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0.5rem', gap: '10px'}} className='g-0'>
        {loadFolders}
    </Row>
  )
}

export default FolderExplorer