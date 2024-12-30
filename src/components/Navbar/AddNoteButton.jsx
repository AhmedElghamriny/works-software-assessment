import React, { useState } from 'react';

import NewNote from '../../pages/NewNote';

import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddNoteButton = ({ sendNoteForm }) => {
  const [addButtonisHovered, setAddButtonHovered] = useState(false);
  const [newNoteShown, setNewNoteShown] = useState(false);

  const handleShowAddNote = () => {
    setNewNoteShown(true);
  };

  const handleCloseNote = () => {
    setNewNoteShown(false);
  };

  return (
    <>
      <Button
        style={{
          width: '300px',
          backgroundColor: addButtonisHovered ? 'black' : 'white',
          color: addButtonisHovered ? 'white' : 'black',
          border: 'none',
          transition: 'background-color 0.3s ease, color 0.3s ease',
        }}
        onMouseEnter={() => setAddButtonHovered(true)}
        onMouseLeave={() => setAddButtonHovered(false)}
        onClick={handleShowAddNote}
      >
        <FontAwesomeIcon icon={faPlus} />
      </Button>

      {newNoteShown && <NewNote onClose={handleCloseNote} sendNoteForm={sendNoteForm}/>}
    </>
  );
};

export default AddNoteButton;
