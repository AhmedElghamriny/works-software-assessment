import React, { useEffect, useState, useRef } from 'react'

import Row from 'react-bootstrap/esm/Row'
import Button from 'react-bootstrap/esm/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons'

const FolderButton = ({ index, folder, hoveredStates, foldersSelected, isEditing, handleHoverOverEnter, handleHoverOverLeave, handleExpandFolder, handleChangeName, handleEditing, setIsEditing }) => (
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
  >
    <div style={{width: '20%'}}>
      {foldersSelected[index] ? <FontAwesomeIcon icon={faAngleDown} style={{width: '20%'}}/> : <FontAwesomeIcon icon={faAngleRight} style={{width: '20%'}} />}
    </div>
    <div style={{width: '80%'}}>
      {isEditing ? 
        <input 
          onChange={(e) => handleChangeName(e.target.value, index)} 
          onBlur={(e) => handleEditing(e.target.value, index)} 
          value={folder.name}
        /> : 
        <p onDoubleClick={() => setIsEditing(true)}>{folder.name}</p>
      }
    </div>
  </Button>
);

const FolderExplorer = ({newFolderBoolean, isNewFolderAdded}) => {
    const [folders, setFolders] = useState([]);
    const [hoveredStates, setHoveredStates] = useState(folders.map(() => false));
    const [foldersSelected, setFoldersSelected] = useState(folders.map(() => false));
    const [editingStates, setEditingStates] = useState(folders.map(() => false));
    const newFolderRef = useRef(newFolderBoolean);

    console.log(folders)

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
        newNames[folderIndex] = { ...newNames[folderIndex], name: editFolderName };
        return newNames;
      })
    }

    const handleEditing = (folderName, folderIndex) => {
      setFolders((prevNames) => {
        const newNames = [...prevNames];
        newNames[folderIndex] = {
          ...newNames[folderIndex],
          name: folderName === '' ? 'Unnamed' : folderName, // Default to 'Unnamed' if blank
        };
        return newNames;
      });
    
      setEditingStates((prevStates) => {
        const newStates = [...prevStates];
        newStates[folderIndex] = false;
        return newStates;
      });
    };

    const addNewFolder = () => {
      setFolders(prevFolders => {
        const newFolders = [...prevFolders]
        newFolders.push({name: 'New Folder', directory: []})
        return newFolders  
      });
      setHoveredStates(prevStates => [...prevStates, false]);
      setFoldersSelected(prevStates => [...prevStates, false]);
      setEditingStates(prevStates => [...prevStates, false]);

      isNewFolderAdded(true);
    }

    useEffect(() => {
        if (newFolderBoolean && newFolderBoolean !== newFolderRef.current) {
            addNewFolder();
        }
    }, [newFolderBoolean]);

    const loadFolders = folders.map((folder, index) => (
      <FolderButton 
        key={index}
        index={index}
        folder={folder}
        hoveredStates={hoveredStates}
        foldersSelected={foldersSelected}
        isEditing={editingStates[index]}
        handleHoverOverEnter={handleHoverOverEnter}
        handleHoverOverLeave={handleHoverOverLeave}
        handleExpandFolder={handleExpandFolder}
        handleChangeName={handleChangeName}
        handleEditing={handleEditing}
        setIsEditing={(isEditing) => {
          setEditingStates(prevStates => {
            const newStates = [...prevStates];
            newStates[index] = isEditing;
            return newStates;
          });
        }}
      />
    ));


  return (
    <Row style={{color: 'black', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0.5rem', gap: '10px'}} className='g-0'>
        {loadFolders}
    </Row>
  )
}

export default FolderExplorer