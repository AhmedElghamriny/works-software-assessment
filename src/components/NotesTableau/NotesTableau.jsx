import React, { useState, useEffect } from 'react';

import EditNote from '../../pages/EditNote';

import Stack from 'react-bootstrap/esm/Stack';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/esm/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const NotesTableau = ({ note, searchText }) => {
  const [notes, setNotes] = useState([]);
  const [editNoteShown, setEditNoteShown] = useState(false);
  
  const handleShowEditAddNote = () => {
    setEditNoteShown(true);
  };

  const handleCloseEditNote = () => {
    setEditNoteShown(false);
  };

  const handleRemoveNote = (indexToRemove) => {
    setNotes((prevNotes) => prevNotes.filter((_, index) => index !== indexToRemove));
  }

  const handleUpdateNote = (sendNoteForm) => {
    const { noteIndex, updatedForm } = sendNoteForm;
    setNotes((prevNotes) =>
      prevNotes.map((noteItem, index) =>
        index === noteIndex
          ? { ...noteItem, title: updatedForm.title, tags: updatedForm.tags, body: updatedForm.body }
          : noteItem
      )
    );
  };

  
  useEffect(() => {
    if (note?.title && note?.body) {
      setNotes((prevNotes) => {
        if (!prevNotes.some((n) => n.title === note.title && n.body === note.body)) {
          return [...prevNotes, note];
        }
        return prevNotes;
      });
    }
  }, [note]);  

  const loadNotes = notes.filter((noteFilteredItem) => {
    return searchText.toLowerCase() === ''
      ? true // Return all notes if the searchText is empty
      : noteFilteredItem.title.toLowerCase().includes(searchText.toLowerCase()) || 
      noteFilteredItem.body.toLowerCase().includes(searchText.toLowerCase()) ||
      (noteFilteredItem.tags && noteFilteredItem.tags.join(', ').toLowerCase().includes(searchText.toLowerCase()));
  }).map((noteItem, index) => (
    <Col
      lg={4} // Divide the row into three equal parts
      md={6} // On medium screens, two notes per row
      sm={12} // On small screens, one note per row
      key={index}
      className="mb-4"
    >
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '10px',
          height: '500px',
          color: 'black',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          padding: '1rem',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap', // Allow wrapping for smaller screens
            height: '7.5%',
            width: '100%',
          }}
        >
          <h5
            style={{
              margin: 0, // Remove default margin to avoid spacing issues
              overflow: 'hidden',
              whiteSpace: 'nowrap', // Prevent wrapping of the title text
            }}
          >
            {noteItem.title}
          </h5>
          <div
            style={{
              display: 'flex',
              gap: '5px', // Reduced gap for smaller screens
              flexShrink: 0, // Prevent the buttons from shrinking
              flexWrap: 'nowrap', // Ensure buttons remain in one row
            }}
          >
            <Button
              style={{
                backgroundColor: 'black',
                border: 'none',
                padding: '0.5rem', // Adjust padding for better responsiveness
              }}
              onClick={handleShowEditAddNote}
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </Button>
            <Button
              style={{
                backgroundColor: 'black',
                border: 'none',
                padding: '0.5rem',
              }}
              onClick={() => handleRemoveNote(index)}
            >
              <FontAwesomeIcon icon={faTrashCan} />
            </Button>

            {editNoteShown && <EditNote sendNoteItemToEdit={{index, noteItem}} sendNoteForm={handleUpdateNote} onClose={handleCloseEditNote} />}
          </div>
        </div>
        <div
          style={{
            whiteSpace: 'pre-wrap',
            height: '87.5%', // Restrict height
            overflowY: 'auto', // Add vertical scroll when content overflows
            padding: '0.5rem',
            border: '1px solid #ccc', // Optional: Add a border for clarity
            borderRadius: '5px', // Optional: Add some rounding for aesthetics
          }}
        >
          <p>{noteItem.body}</p>
        </div>
        <p style={{height: '5%'}}>Tags: {noteItem.tags?.join(', ')}</p>
      </div>
    </Col>
  ));

  return (
    <Stack
      style={{
        backgroundColor: '#424549',
        color: 'white',
        padding: '2rem',
      }}
    >
      <Row className="g-0">
        {loadNotes}
      </Row>
    </Stack>
  );
};

export default NotesTableau;
