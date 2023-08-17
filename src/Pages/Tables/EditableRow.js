import React from 'react'

function EditableRow({editFormData, handleEditFormChange, handleCancleClick}) {
  return (
    <tr>
        <td>
        <input 
         type="text"
         placeholder="Enter Name"
         name="Name"
         required="required"
         value={editFormData.Name}
         onChnage={handleEditFormChange}
         />
        </td>

        <td>
        <input 
         type="text"
         placeholder="Enter Subject"
         name="Subject"
         required="required"
         value={editFormData.Subject}
         onChnage={handleEditFormChange}
         /> 
         </td>

        <td> 
        <input 
         type="text"
         placeholder="Enter Student"
         name="Student"
         required="required"
         value={editFormData.Student}
         onChnage={handleEditFormChange}
         />
        </td>

        <td> 
        <input 
         type="text"
         placeholder="Enter SClass"
         name="SClass"
         required="required"
         value={editFormData.SClass}
         onChnage={handleEditFormChange}
         />
        </td>

        <td>
            <button type="button"  className="btn btn-success" >Save</button>
            <button type="button"  className="btn btn-warning" onClick={handleCancleClick}> Cancel </button>
        </td>
    </tr>
  )
}

export default EditableRow