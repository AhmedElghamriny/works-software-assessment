import React, { useEffect, useState } from 'react'

import FolderSideTrayTopButtons from './FolderSideTrayTopButtons'
import FolderExplorer from './FolderExplorer'

import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import FolderSideTrayBottomButtons from './FolderSideTrayBottomButtons'
import SearchBarWithIcon from './SearchBarWithIcon'

const FolderSideTray = ({ visible }) => {
    const [newFolder, setNewFolder] = useState(false);
    const [text, setText] = useState('')
    const [sortFoldersClicked, setSortFoldersClicked] = useState(false)

    const handleNewFolder = () => {
        setNewFolder(true);
    }
    
    const handleNewFolderAdded = (successfullyAdded) => {
        if (successfullyAdded) {
            setNewFolder(false);
        }
    };

    const handleFolderSearch = (text) => {
        setText(text)
    }

    const handleSortFolders = (decision) => {
        setSortFoldersClicked(decision);
    }

 
  return (
    <Container 
        style={{
            width: '15vw',
            height: '92.5vh',
            backgroundColor: 'white',
            position: 'absolute',
            top: "7.5vh",
            left: visible ? "0" : "-20vw", // Slide out of view when hidden
            transition: 'all 0.5s ease-in-out', // Smooth slide transition
            zIndex: 1000,
        }}
    >
        <Row style={{height: '2.5%'}} className='g-0 mb-4'>
            <FolderSideTrayTopButtons addNewFolder={handleNewFolder} sortFolders={handleSortFolders}/>
        </Row>
        <Row className="g-0 search-bar-row mb-3">
            <SearchBarWithIcon sendSearchQuery={handleFolderSearch}/>
        </Row>
        <Row style={{height: '85%', overflowY: 'auto', overflowX: 'hidden'}} className='g-0'>
            <FolderExplorer newFolderBoolean={newFolder} searchQuery={text} isNewFolderAdded={handleNewFolderAdded} sortFoldersClicked={sortFoldersClicked}/>
        </Row>

        <Row style={{borderTop: '1px solid gray', height: '5%'}} className='g-0'>
            <FolderSideTrayBottomButtons/>
        </Row>
    </Container>
  )
}

export default FolderSideTray