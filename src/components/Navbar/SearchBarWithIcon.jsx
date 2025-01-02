import React, { useState, useEffect } from 'react';

import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBarWithIcon = ({sendSearchQuery}) => {

    return (
        <InputGroup style={{ width: '100%' }}>
            <Form.Control
                placeholder="Search notes..."
                aria-label="Search"
                aria-describedby="basic-addon2"
                onChange={(e) => sendSearchQuery(e.target.value)}
            />
            <Button variant="outline-secondary" id="button-addon2">
                <FontAwesomeIcon icon={faSearch} />
            </Button>
        </InputGroup>
    );
};

export default SearchBarWithIcon;
