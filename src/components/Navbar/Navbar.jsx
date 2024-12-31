import React from 'react'

import SearchBarWithIcon from './SearchBarWithIcon';
import AddNoteButton from './AddNoteButton';
import FolderTreeButton from './FolderTreeButton';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Navbar = ({ sendNoteForm, sendSearchQuery }) => {
  return (
      <Row style={{backgroundColor: 'black', color: 'white', width: '100%'}} className='g-0'>
          <Col lg='4' style={{height: '100%', display:'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem'}}>
            <FolderTreeButton />
            <div style={{width: '60%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <p style={{fontSize: '2rem', fontWeight: '700'}}>KeepThought.</p>
            </div>
          </Col>
          <Col lg='6' style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><SearchBarWithIcon sendSearchQuery={sendSearchQuery}/></Col>
          <Col lg='2' style={{height: '100%', fontSize: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><AddNoteButton sendNoteForm={sendNoteForm}/></Col>
      </Row>
  )
}

export default Navbar