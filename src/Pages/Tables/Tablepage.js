import React, { useState } from "react";
import data from "./Tabledata";
import "./Tablestyling.css";
import { nanoid } from "nanoid";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

function Tablepage() {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    Name: "",
    Subject: "",
    Student: "",
    SClass: "",
  });

  const [editFormData, setEditFormData] = useState({
    Name: "",
    Subject: "",
    Student: "",
    SClass: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  // Handling input for new employee
  const hanleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  // New employee object
  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      Name: addFormData.Name,
      Subject: addFormData.Subject,
      Student: addFormData.Student,
      SClass: addFormData.SClass,
    };
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmission=(event)=>{
    event.preventDefault();
    
    const editedContact={
        id: editContactId,
        Name: editFormData.Name,
        Subject: editFormData.Subject,
        Student: editFormData.Student,
        SClass: editFormData.SClass,
    }

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact)=>contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  }
  

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      Name: contact.Name,
      Subject: contact.Subject,
      Student: contact.Student,
      SClass: contact.SClass,
    };
    setEditFormData(formValues);
  };

  const handleCancleClick = () => {
    setEditContactId(null);
  }

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts]
    const index = contacts.findIndex((contact)=> contact.id === contactId)
    newContacts.splice(index, 1);
    setContacts(newContacts)
  }

  return (
    <div className="container-fluid">
      <h1> Tables </h1>
      <p>
        Below is data table. Admin can Add, Edit or Delete teacher or student.{" "}
      </p>
      <div className="card">
        <div className="card-header"> DataTables Example </div>
        <div className="card-body">

          <form onSubmit={handleEditFormSubmission}>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th> Teacher Name </th>
                  <th> Subject </th>
                  <th> Student </th>
                  <th> Class </th>
                  <th> Action </th>
                </tr>
              </thead>

              {/* Table data below */}
              <tbody>
                {contacts.map((contact, index) => (
                  <>
                    {editContactId === contact.id ? (
                      <EditableRow
                        editFormData={editFormData}
                        handleEditFormChange={handleEditFormChange}
                        handleCancleClick={handleCancleClick}
                      />
                    ) : (
                      <ReadOnlyRow
                        contact={contact}
                        key={index}
                        handleEditClick={handleEditClick}
                        handleDeleteClick={handleDeleteClick}
                      />
                    )}
                  </>
                ))}
              </tbody>
            </table>
          </form>

          {/* Form for adding new employee */}
          <div className="employee-form">
            <h4> Add Data </h4>
            <form
              onSubmit={handleAddFormSubmit}
              className="employee-form-input"
            >
              <input
                type="text"
                placeholder="Enter Name"
                name="Name"
                required="required"
                onChange={hanleAddFormChange}
              />

              <input
                type="text"
                placeholder="Enter Subject"
                name="Subject"
                required="required"
                onChange={hanleAddFormChange}
              />

              <input
                type="text"
                placeholder="Enter Student"
                name="Student"
                required="required"
                onChange={hanleAddFormChange}
              />

              <input
                type="text"
                placeholder="Enter SClass"
                name="SClass"
                required="required"
                onChange={hanleAddFormChange}
              />

              <button type="submit"  className="btn btn-primary"> Add Employee </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tablepage;
