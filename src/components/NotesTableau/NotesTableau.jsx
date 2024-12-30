import React, { useState } from 'react';

import Stack from 'react-bootstrap/esm/Stack';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/esm/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const NotesTableau = ({ note }) => {
  const [notes, setNotes] = useState([]);

  // Add the new note to the state when the component renders or note changes
  React.useEffect(() => {
    if (note?.title) { // Ensure the note has content before adding
      setNotes((prevNotes) => [...prevNotes, note]);
    }
  }, [note]);

  const loadNotes = notes.map((noteItem, index) => (
    <Col
      lg={4} // Divide the row into three equal parts
      md={6} // On medium screens, two notes per row
      sm={12} // On small screens, one note per row
      key={index}
      className="mb-4" // Add margin to the bottom for spacing
    >
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '10px',
          height: '500px',
          color: 'black',
          display: 'flex',
          flexDirection: 'column',
          padding: '2rem',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add a subtle shadow for better aesthetics
        }}
      >
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <h5>{noteItem.title}</h5>
          <div style={{display: 'flex', gap: '10px'}}>
            <Button style={{backgroundColor: 'black', border: 'none'}}><FontAwesomeIcon icon={faPenToSquare} /></Button>
            <Button style={{backgroundColor: 'black', border: 'none'}} onClick={{}}><FontAwesomeIcon icon={faTrashCan} /></Button>
          </div>

        </div>
        <p>{noteItem.body}</p>
        <p>Tags: {noteItem.tags?.join(', ')}</p>
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
      <Row> {/* g-4 adds spacing between columns and rows */}
        {loadNotes}
      </Row>
    </Stack>
  );
};

export default NotesTableau;
