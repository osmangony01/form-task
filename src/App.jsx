// import React, { useState } from 'react';

// const App = () => {
//   const [formData, setFormData] = useState({
//     textField: '',
//     radioButton: '',
//     checkbox: [],
//     selectOption: '',
//     file: null,
//     rowRadios: [
//       { row1: '' },
//       { row2: '' },
//       { row3: '' },
//     ],
//     rowCheckboxes: [
//       { row1: [] },
//       { row2: [] },
//       { row3: [] },
//     ],
//   });

//   const handleChange = (event) => {
//     const { name, value, type, checked, files } = event.target;

//     if (type === 'checkbox') {
//       const updatedCheckboxes = [...formData[name]];
//       if (checked) {
//         updatedCheckboxes.push(value);
//       } else {
//         const index = updatedCheckboxes.indexOf(value);
//         if (index !== -1) {
//           updatedCheckboxes.splice(index, 1);
//         }
//       }
//       setFormData((prevData) => ({ ...prevData, [name]: updatedCheckboxes }));
//     } else if (type === 'file') {
//       setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
//     } else {
//       setFormData((prevData) => ({ ...prevData, [name]: value }));
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(formData);
//     // Add logic to submit form data to a backend or perform further actions
//   };

//   return (
//     <div>
//       <h1>Google Form Clone</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Text Field:
//           <input
//             type="text"
//             name="textField"
//             value={formData.textField}
//             onChange={handleChange}
//           />
//         </label>
//         {/* Radio Button */}
//         <div>
//           <label>
//             <input
//               type="radio"
//               name="radioButton"
//               value="option1"
//               checked={formData.radioButton === 'option1'}
//               onChange={handleChange}
//             />
//             Option 1
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="radioButton"
//               value="option2"
//               checked={formData.radioButton === 'option2'}
//               onChange={handleChange}
//             />
//             Option 2
//           </label>
//           {/* Add more radio options */}
//         </div>
//         {/* Checkbox */}
//         <div>
//           <label>
//             <input
//               type="checkbox"
//               name="checkbox"
//               value="checkbox1"
//               checked={formData.checkbox.includes('checkbox1')}
//               onChange={handleChange}
//             />
//             Checkbox 1
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               name="checkbox"
//               value="checkbox2"
//               checked={formData.checkbox.includes('checkbox2')}
//               onChange={handleChange}
//             />
//             Checkbox 2
//           </label>
//           {/* Add more checkbox options */}
//         </div>
//         {/* Select Options */}
//         <div>
//           <label>
//             Select Option:
//             <select
//               name="selectOption"
//               value={formData.selectOption}
//               onChange={handleChange}
//             >
//               <option value="">Select an option</option>
//               <option value="option1">Option 1</option>
//               <option value="option2">Option 2</option>
//               {/* Add more options */}
//             </select>
//           </label>
//         </div>
//         {/* File Upload */}
//         <div>
//           <label>
//             File Upload:
//             <input
//               type="file"
//               name="file"
//               onChange={handleChange}
//             />
//           </label>
//         </div>
//         {/* Rows of Radio Buttons */}
//         <div>
//           <p>Rows of Radio Buttons:</p>
//           {formData.rowRadios.map((row, index) => (
//             <div key={index}>
//               <label>
//                 <input
//                   type="radio"
//                   name={`rowRadios[${index}].row${index + 1}`}
//                   value="option1"
//                   checked={row[`row${index + 1}`] === 'option1'}
//                   onChange={handleChange}
//                 />
//                 Row {index + 1} Option 1
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name={`rowRadios[${index}].row${index + 1}`}
//                   value="option2"
//                   checked={row[`row${index + 1}`] === 'option2'}
//                   onChange={handleChange}
//                 />
//                 Row {index + 1} Option 2
//               </label>
//               {/* Add more radio options */}
//             </div>
//           ))}
//         </div>
//         {/* Rows of Checkboxes */}
//         <div>
//           <p>Rows of Checkboxes:</p>
//           {formData.rowCheckboxes.map((row, rowIndex) => (
//             <div key={rowIndex}>
//               <p>Row {rowIndex + 1}</p>
//               {['checkbox1', 'checkbox2'].map((checkboxValue, checkboxIndex) => (
//                 <label key={checkboxIndex}>
//                   <input
//                     type="checkbox"
//                     name={`rowCheckboxes[${rowIndex}].row${rowIndex + 1}`}
//                     value={checkboxValue}
//                     checked={row[`row${rowIndex + 1}`].includes(checkboxValue)}
//                     onChange={handleChange}
//                   />
//                   {`Row ${rowIndex + 1} Checkbox ${checkboxIndex + 1}`}
//                 </label>
//               ))}
//               {/* Add more checkboxes */}
//             </div>
//           ))}
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default App;
import React from 'react';
import { Outlet } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default App;