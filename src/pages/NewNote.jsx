import React, { useState } from 'react';

import NoteForm from '../components/Navbar/NoteForm';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const NewNote = ({ onClose, sendNoteForm }) => {
  const [cancelButtonisHovered, setCancelButtonHovered] = useState(false);

  return (
    <Container
      fluid
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(34, 33, 33, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        zIndex: 1000,
        top: '0',
        left: '0'
      }}
    >
      <Container
        style={{
          backgroundColor: 'white',
          width: '30vw',
          borderRadius: '20px',
          padding: '1rem',
          color: 'black',
          fontSize: '1rem'
        }}
      >
        <Row style={{ height: '20%'}}>
          <Container>
            <Row>
              <Col lg="11">
                <h1 className="new-note">New Note</h1>
              </Col>
              <Col
                lg="1"
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}
              >
                <Button
                  style={{
                    backgroundColor: cancelButtonisHovered ? 'white' : 'black',
                    color: cancelButtonisHovered ? 'black' : 'white',
                    border: 'none',
                    transition: 'background-color 0.3s ease, color 0.3s ease',
                  }}
                  onMouseEnter={() => setCancelButtonHovered(true)}
                  onMouseLeave={() => setCancelButtonHovered(false)}
                  onClick={onClose} // Trigger the onClose prop
                >
                  <FontAwesomeIcon icon={faX} />
                </Button>
              </Col>
            </Row>
          </Container>
        </Row>
        <Row style={{ height: '80%' }}>
          <NoteForm sendNoteForm={sendNoteForm} onClose={onClose}/>
        </Row>
      </Container>
    </Container>
  );
};

export default NewNote;
