import React, {useState} from 'react'

import SearchBarWithIcon from './SearchBarWithIcon';
import AddNoteButton from './AddNoteButton';
import SettingsDropdownButton from './SettingsDropdownButton';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Navbar = ({ sendNoteForm }) => {
  return (
      <Row style={{backgroundColor: 'black', color: 'white', width: '100%'}} className='g-0'>
          <Col lg='2' style={{height: '100%', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
              <p style={{fontSize: '2rem', fontWeight: '700'}}>KeepThought.</p>
          </Col>
          <Col lg='6' style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><SearchBarWithIcon/></Col>
          <Col lg='2' style={{height: '100%', fontSize: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><AddNoteButton sendNoteForm={sendNoteForm}/></Col>
          <Col lg='2' style={{height: '100%', fontSize: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><SettingsDropdownButton/></Col>
      </Row>
  )
}

export default Navbar