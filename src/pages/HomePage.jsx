import React, { useState } from 'react';

import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';

import Navbar from '../components/Navbar/Navbar';
import NotesTableau from '../components/NotesTableau/NotesTableau';

const HomePage = () => {
    const [note, setNote] = useState({ title: '', tags: [], body: '' });

    const handleAddNewNote = (title, tags, body) => {
        setNote({ title, tags, body });
    };

    return (
        <Stack style={{ height: '100vh', width: '100vw', overflowX: 'hidden' }} className="g-0">
            <Row style={{ height: '7.5%', width: '100%' }} className="g-0">
                <Navbar sendNoteForm={handleAddNewNote} />
            </Row>
            <Row style={{ height: '92.5%', width: '100%' }} className="g-0">
                <NotesTableau note={note} />
            </Row>
        </Stack>
    );
};

export default HomePage;
