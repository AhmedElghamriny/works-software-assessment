import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import CreatableSelect from "react-select/creatable";

const NoteForm = ({ sendNoteForm, receiveNoteEditForm, onClose }) => {

  const [title, setTitle] = useState('');
  const [titleLength, setTitleLength] = useState(0);
  
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [tagsLength, setTagsLength] = useState(0);
  
  const [bodyText, setBodyText] = useState('');
  const [bodyLength, setBodyLength] = useState(0);

  const [addButtonisHovered, setAddButtonHovered] = useState(false);

  const handleTagsChange = (newValue) => {
    if (newValue.length <= 5) {
      setSelectedOptions(newValue);
      setTagsLength(newValue.length);
    }
  };

  const sendNoteInformation = () => {
    sendNoteForm(title, selectedOptions.map(option => option.value), bodyText);
    onClose();
  };

  return (
    <Form className="br-10" style={{ height: "35vh" }}>
      <Form.Group>
        <Stack direction="horizontal" gap={3}>
          <div style={{ width: "50%" }}>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title..."
              maxLength={50}
              required
              onChange={(e) => {
                setTitle(e.target.value); // Update the title state
                setTitleLength(e.target.value.length);
              }}
              value={title} // Bind the input value to the state
            />
            <div style={{ display: "flex" }}>
              <p className="mt-3" style={{ opacity: "50%", marginLeft: "auto" }}>
                {titleLength}/50
              </p>
            </div>
          </div>
          <div style={{ width: "50%" }}>
            <Form.Label>Tags</Form.Label>
            <CreatableSelect
              isMulti
              onChange={handleTagsChange}
              value={selectedOptions}
              placeholder="Enter tags..."
            />
            <div style={{ display: "flex" }}>
              <p className="mt-3" style={{ opacity: "50%", marginLeft: "auto" }}>
                {tagsLength}/5
              </p>
            </div>
          </div>
        </Stack>
      </Form.Group>
      <Form.Group className="mb-1">
        <Form.Label>Body</Form.Label>
        <Form.Control
          maxLength="2000"
          as="textarea"
          placeholder="Enter notes..."
          rows={9}
          required
          style={{ resize: "none" }}
          onChange={(e) => {
            setBodyText(e.target.value); // Update the bodyText state
            setBodyLength(e.target.value.length);
          }}
          value={bodyText} // Bind the textarea value to the state
        />
      </Form.Group>
      <Form.Group
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          style={{
            backgroundColor: addButtonisHovered ? "white" : "black",
            color: addButtonisHovered ? "black" : "white",
            border: "none",
            transition: "background-color 0.3s ease, color 0.3s ease",
          }}
          onMouseEnter={() => setAddButtonHovered(true)}
          onMouseLeave={() => setAddButtonHovered(false)}
          onClick={(e) => {
            e.preventDefault(); // Prevent form submission
            sendNoteInformation();
          }}
        >
          Save
        </Button>
        <div>
          <p className="mt-3" style={{ opacity: "50%" }}>
            {bodyLength}/2000
          </p>
        </div>
      </Form.Group>
    </Form>
  );
};

export default NoteForm;
