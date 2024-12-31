import React, { useState } from 'react';

import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';

import Navbar from '../components/Navbar/Navbar';
import NotesTableau from '../components/NotesTableau/NotesTableau';
import FileDirectoryNav from '../components/FileDirectoryNav/FileDirectoryNav'

const HomePage = () => {
    const [note, setNote] = useState({ title: '', tags: [], body: '' });
    const [searchText, setSearchText] = useState('')

    const handleAddNewNote = (title, tags, body) => {
        setNote({ title, tags, body });
    };

    const handleSearchQuery = (searchText) => {
        setSearchText(searchText);
    }

    return (
        <Stack style={{ height: '100vh', width: '100vw', overflowX: 'hidden' }} className="g-0">
            <Row style={{ height: '7.5%', width: '100%' }} className="g-0">
                <Navbar sendNoteForm={handleAddNewNote} sendSearchQuery={handleSearchQuery}/>
            </Row>
            <Row style={{height: '5%', width: '100%'}} className="g-0">
                <FileDirectoryNav />
            </Row>
            <Row style={{ height: '87.5%', width: '100%' }} className="g-0">
                <NotesTableau note={note} searchText={searchText}/>
            </Row>
        </Stack>
    );
};

export default HomePage;
