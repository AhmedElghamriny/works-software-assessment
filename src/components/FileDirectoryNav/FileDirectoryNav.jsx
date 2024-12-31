import React from 'react'
import Row from 'react-bootstrap/esm/Row'

const FileDirectoryNav = () => {
  return (
    <Row style={{ 
      backgroundColor: '#424549',
      color: 'white',
      padding: '2rem',}}
      className="g-0"
    >
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item"><a href="#">Library</a></li>
          <li class="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
      </nav>
    </Row>
  )
}

export default FileDirectoryNav