import React from 'react';

import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBarWithIcon = () => {
    return (
        <InputGroup style={{ width: '50%' }}>
            <Form.Control
                placeholder="Search notes..."
                aria-label="Search"
                aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
                <FontAwesomeIcon icon={faSearch} />
            </Button>
        </InputGroup>
    );
};

export default SearchBarWithIcon;
