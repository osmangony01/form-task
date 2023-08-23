// import React, { useState } from 'react';

// const CheckboxGridForm = () => {
//   const [checkboxValues, setCheckboxValues] = useState({
//     r1c1box: false,
//     r1c2box: false,
//     r1c3box: false,
//     r2c1box: false,
//     r2c2box: false,
//     r2c3box: false,
//     r3c1box: false,
//     r3c2box: false,
//     r3c3box: false,
//   });

//   const handleCheckboxChange = (event) => {
//     const { name } = event.target;
//     setCheckboxValues((prevValues) => ({
//       ...prevValues,
//       [name]: !prevValues[name],
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const selectedCheckboxValues = Object.keys(checkboxValues).map((name) => checkboxValues[name]);

//     console.log(selectedCheckboxValues); // Array of true/false values
//     // Add logic to submit selected checkbox values to a backend or perform further actions
//   };

//   return (
//     <div className='form-item'>
//       <h1 className='pb-5'>Tick box Grid <span className='text-red-500'>*</span></h1>
//       {/* ... */}
//       <form onSubmit={handleSubmit}>
//         {/* ... */}
//         <fieldset id='group1' className='grid grid-cols-4 justify-items-center pb-6'>
//           {/* ... */}
//           <input
//             type='checkbox'
//             name="r1c1box"
//             onChange={handleCheckboxChange} checked={checkboxValues.r1c1box}
//           />
//           <input
//             type='checkbox'
//             name="r1c2box"
//             onChange={handleCheckboxChange}
//             checked={checkboxValues.r1c2box}
//           />
//           <input
//             type='checkbox'
//             name="r1c3box"
//             onChange={handleCheckboxChange}
//             checked={checkboxValues.r1c3box}
//           />
//         </fieldset>
//         {/* ... */}
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default CheckboxGridForm;
// for Tick box Grid


// import React, { useState } from 'react';

// const CheckboxGridForm = () => {
//   const [checkboxValues, setCheckboxValues] = useState({
//     r1c1box: 0,
//     r1c2box: 0,
//     r1c3box: 0,
//     r2c1box: 0,
//     r2c2box: 0,
//     r2c3box: 0,
//     r3c1box: 0,
//     r3c2box: 0,
//     r3c3box: 0,
//   });

//   const handleCheckboxChange = (event) => {
//     const { name } = event.target;
//     setCheckboxValues((prevValues) => ({
//       ...prevValues,
//       [name]: prevValues[name] === 1 ? 0 : 1,
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const selectedCheckboxValues = Object.keys(checkboxValues).map((name) => checkboxValues[name]);

//     console.log(selectedCheckboxValues); // Array of 0s and 1s
//     // Add logic to submit selected checkbox values to a backend or perform further actions
//   };

//   return (
//     <div className='form-item'>
//       <h1 className='pb-5'>Tick box Grid <span className='text-red-500'>*</span></h1>
//       {/* ... */}
//       <form onSubmit={handleSubmit}>
//         {/* ... */}
//         <fieldset id='group1' className='grid grid-cols-4 justify-items-center pb-6'>
//           {/* ... */}
//           <input
//             type='checkbox'
//             name="r1c1box"
//             onChange={handleCheckboxChange}
//             checked={checkboxValues.r1c1box === 1}
//           />
//           <input
//             type='checkbox'
//             name="r1c2box"
//             onChange={handleCheckboxChange}
//             checked={checkboxValues.r1c2box === 1}
//           />
//           <input
//             type='checkbox'
//             name="r1c3box"
//             onChange={handleCheckboxChange}
//             checked={checkboxValues.r1c3box === 1}
//           />
//         </fieldset>
//         {/* ... */}
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default CheckboxGridForm;
// import React, { useState } from 'react';

// const RadioGridForm = () => {
//   const [radioValues, setRadioValues] = useState({
//     r1c1: 0,
//     r1c2: 0,
//     r1c3: 0,
//     r2c1: 0,
//     r2c2: 0,
//     r2c3: 0,
//     r3c1: 0,
//     r3c2: 0,
//     r3c3: 0,
//   });

//   const handleRadioChange = (event) => {
//     const { name, value } = event.target;
//     setRadioValues((prevValues) => ({
//       ...prevValues,
//       [name]: value === '1' ? 0 : 1,
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const radioArray = Object.keys(radioValues).map((name) => radioValues[name]);

//     console.log(radioArray); // Array of 0s and 1s
//     // Add logic to submit radio values to a backend or perform further actions
//   };

//   return (
//     <div className='form-item'>
//       <h1 className='pb-5'>Radio Grid <span className='text-red-500'>*</span></h1>
//       <form onSubmit={handleSubmit}>
//         <fieldset className='grid grid-cols-4 justify-items-center pb-6'>
//           <label className='text-sm'>Row 1</label>
//           <input
//             type='radio'
//             value={radioValues.r1c1}
//             name="r1c1"
//             onChange={handleRadioChange}
//             checked={radioValues.r1c1 === 1}
//           />
//           <input
//             type='radio'
//             value={radioValues.r1c2}
//             name="r1c2"
//             onChange={handleRadioChange}
//             checked={radioValues.r1c2 === 1}
//           />
//           <input
//             type='radio'
//             value={radioValues.r1c3}
//             name="r1c3"
//             onChange={handleRadioChange}
//             checked={radioValues.r1c3 === 1}
//           />
//         </fieldset>
//         {/* Repeat similar code for group2 and group3 */}
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

//export default RadioGridForm;

//                                                work fine for 3 radio button

// import React, { useState } from 'react';

// const RadioGridForm = () => {
//     const initialRadioArray = [0, 0, 0];
//     const [radioArrayR1, setRadioArrayR1] = useState([...initialRadioArray]);
//     const [radioArrayR2, setRadioArrayR2] = useState([...initialRadioArray]);
//     const [radioArrayR3, setRadioArrayR3] = useState([...initialRadioArray]);

//     const handleRadioChangeR1 = (index) => {
//     const updatedArrayR1 = initialRadioArray.map((value, i) => i === index ? 1:0);
//     setRadioArrayR1(updatedArrayR1);
//     };

//   const handleRadioChangeR2 = (index) => {
//     const updatedArrayR2 = initialRadioArray.map((value, i) => i === index ? 1:0);
//     setRadioArrayR2(updatedArrayR2);
//   };
//   const handleRadioChangeR3 = (index) => {
//     const updatedArrayR3 = initialRadioArray.map((value, i) => i === index ? 1:0 );
//     setRadioArrayR3(updatedArrayR3);
//   };

//     const convertArrayToObject = (array2D) => {
//         const nestedObject = {};

//         for (let rowIndex = 0; rowIndex < array2D.length; rowIndex++) {
//           const rowKey = `row${rowIndex + 1}`;
//           nestedObject[rowKey] = {};

//           for (let colIndex = 0; colIndex < array2D[rowIndex].length; colIndex++) {
//             const colKey = `col${colIndex + 1}`;
//             nestedObject[rowKey][colKey] = array2D[rowIndex][colIndex];
//           }
//         }
//         return nestedObject;
//     };



//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const gridRaio = [radioArrayR1, radioArrayR2, radioArrayR3] 
//       const finalRaioObj = convertArrayToObject(gridRaio);
//     console.log('Radio Array:', finalRaioObj);
//     // Add logic to submit the radio array to a backend or perform further actions
//   };

//   return (
//     <div className='form-item'>
//       <h1 className='pb-5'>Radio Grid <span className='text-red-500'>*</span></h1>
//       <form onSubmit={handleSubmit}>
//         <fieldset className='grid grid-cols-4 justify-items-center pb-6'>
//           <label className='text-sm'>Row 1</label>
//           <input
//             type='radio'
//             value={radioArrayR1[0]}
//             name="group1"
//             onChange={() => handleRadioChangeR1(0)}
//             checked={radioArrayR1[0] === 1}
//           />
//           <input
//             type='radio'
//             value={radioArrayR1[1]}
//             name="group1"
//             onChange={() => handleRadioChangeR1(1)}
//             checked={radioArrayR1[1] === 1}
//           />
//           <input
//             type='radio'
//             value={radioArrayR1[2]}
//             name="group1"
//             onChange={() => handleRadioChangeR1(2)}
//             checked={radioArrayR1[2] === 1}
//           />
//         </fieldset>

//         <fieldset className='grid grid-cols-4 justify-items-center pb-6'>
//           <label className='text-sm'>Row 1</label>
//           <input
//             type='radio'
//             value={radioArrayR2[0]}
//             name="group2"
//             onChange={() => handleRadioChangeR2(0)}
//             checked={radioArrayR2[0] === 1}
//           />
//           <input
//             type='radio'
//             value={radioArrayR2[1]}
//             name="group2"
//             onChange={() => handleRadioChangeR2(1)}
//             checked={radioArrayR2[1] === 1}
//           />
//           <input
//             type='radio'
//             value={radioArrayR2[2]}
//             name="group2"
//             onChange={() => handleRadioChangeR2(2)}
//             checked={radioArrayR2[2] === 1}
//           />
//         </fieldset>

//         <fieldset className='grid grid-cols-4 justify-items-center pb-6'>
//           <label className='text-sm'>Row 1</label>
//           <input
//             type='radio'
//             value={radioArrayR3[0]}
//             name="group3"
//             onChange={() => handleRadioChangeR3(0)}
//             checked={radioArrayR3[0] === 1}
//           />
//           <input
//             type='radio'
//             value={radioArrayR3[1]}
//             name="group3"
//             onChange={() => handleRadioChangeR3(1)}
//             checked={radioArrayR3[1] === 1}
//           />
//           <input
//             type='radio'
//             value={radioArrayR3[2]}
//             name="group3"
//             onChange={() => handleRadioChangeR3(2)}
//             checked={radioArrayR3[2] === 1}
//           />
//               </fieldset>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default RadioGridForm;


// import React, { useState } from 'react';

// const RadioGridForm = () => {
//   const initialRadioArray = ["0", "0", "0", "0", "0", "0", "0", "0", "0"];
//   const [radioArray, setRadioArray] = useState([...initialRadioArray]);

//   const handleRadioChange = (index) => {
//     const updatedArray = initialRadioArray.map((value, i) =>
//       i === index ? "1" : "0"
//     );
//     setRadioArray(updatedArray);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     console.log('Radio Array:', radioArray);
//     // Add logic to submit the radio array to a backend or perform further actions
//   };

//   return (
//     <div className='form-item'>
//       <h1 className='pb-5'>Radio Grid <span className='text-red-500'>*</span></h1>
//       <form onSubmit={handleSubmit}>
//         <fieldset className='grid grid-cols-4 justify-items-center pb-6'>
//           <label className='text-sm'>Row 1</label>
//           <input
//             type='radio'
//             value={radioArray[0]}
//             name="group1"
//             onChange={() => handleRadioChange(0)}
//             checked={radioArray[0] === "1"}
//           />
//           <input
//             type='radio'
//             value={radioArray[1]}
//             name="group1"
//             onChange={() => handleRadioChange(1)}
//             checked={radioArray[1] === "1"}
//           />
//           <input
//             type='radio'
//             value={radioArray[2]}
//             name="group1"
//             onChange={() => handleRadioChange(2)}
//             checked={radioArray[2] === "1"}
//           />
//         </fieldset>

//         <fieldset className='grid grid-cols-4 justify-items-center pb-6'>
//           <label className='text-sm'>Row 2</label>
//           <input
//             type='radio'
//             value={radioArray[3]}
//             name="group2"
//             onChange={() => handleRadioChange(3)}
//             checked={radioArray[3] === "1"}
//           />
//           <input
//             type='radio'
//             value={radioArray[4]}
//             name="group2"
//             onChange={() => handleRadioChange(4)}
//             checked={radioArray[4] === "1"}
//           />
//           <input
//             type='radio'
//             value={radioArray[5]}
//             name="group2"
//             onChange={() => handleRadioChange(5)}
//             checked={radioArray[5] === "1"}
//           />
//         </fieldset>

//         <fieldset className='grid grid-cols-4 justify-items-center pb-6'>
//           <label className='text-sm'>Row 3</label>
//           <input
//             type='radio'
//             value={radioArray[6]}
//             name="group3"
//             onChange={() => handleRadioChange(6)}
//             checked={radioArray[6] === "1"}
//           />
//           <input
//             type='radio'
//             value={radioArray[7]}
//             name="group3"
//             onChange={() => handleRadioChange(7)}
//             checked={radioArray[7] === "1"}
//           />
//           <input
//             type='radio'
//             value={radioArray[8]}
//             name="group3"
//             onChange={() => handleRadioChange(8)}
//             checked={radioArray[8] === "1"}
//           />
//         </fieldset>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default RadioGridForm;

//                                                       perfectly work tik tok grid
// import React, { useState } from 'react';

// const CheckboxGridForm = () => {
//     const [checkboxValues, setCheckboxValues] = useState({
//         r1c1box: 0,
//         r1c2box: 0,
//         r1c3box: 0,
//         r2c1box: 0,
//         r2c2box: 0,
//         r2c3box: 0,
//         r3c1box: 0,
//         r3c2box: 0,
//         r3c3box: 0,
//     });

//     //const initialRadioArray = ["0", "0", "0"];
//     //const initialRadioArray = ["0", "0", "0"];
//     //const initialRadioArray = ["0", "0", "0"];

//     const handleCheckboxChange = (event) => {
//         const { name } = event.target;
//         setCheckboxValues((prevValues) => ({
//             ...prevValues,
//             [name]: prevValues[name] === 1 ? 0 : 1,
//         }));
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         // Create a two-dimensional array from checkbox values
//         const selectedCheckboxValuesArray = [
//             [checkboxValues.r1c1box, checkboxValues.r1c2box, checkboxValues.r1c3box],
//             [checkboxValues.r2c1box, checkboxValues.r2c2box, checkboxValues.r2c3box],
//             [checkboxValues.r3c1box, checkboxValues.r3c2box, checkboxValues.r3c3box],
//         ];

//         console.log(selectedCheckboxValuesArray); // 2D Array of checkbox values
//         // Add logic to submit selected checkbox values to a backend or perform further actions
//     };

//     return (
//         <div className='form-item'>
//             <h1 className='pb-5'>Tick box Grid <span className='text-red-500'>*</span></h1>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <fieldset id='group1' className='grid grid-cols-4 justify-items-center pb-6'>
//                         <input
//                             type='checkbox'
//                             name="r1c1box"
//                             onChange={handleCheckboxChange}
//                             checked={checkboxValues.r1c1box === 1}
//                         />
//                         <input
//                             type='checkbox'
//                             name="r1c2box"
//                             onChange={handleCheckboxChange}
//                             checked={checkboxValues.r1c2box === 1}
//                         />
//                         <input
//                             type='checkbox'
//                             name="r1c3box"
//                             onChange={handleCheckboxChange}
//                             checked={checkboxValues.r1c3box === 1}
//                         />
//                     </fieldset>
//                     <fieldset id='group2' className='grid grid-cols-4 justify-items-center pb-6'>
//                         <input
//                             type='checkbox'
//                             name="r2c1box"
//                             onChange={handleCheckboxChange}
//                             checked={checkboxValues.r2c1box === 1}
//                         />
//                         <input
//                             type='checkbox'
//                             name="r2c2box"
//                             onChange={handleCheckboxChange}
//                             checked={checkboxValues.r2c2box === 1}
//                         />
//                         <input
//                             type='checkbox'
//                             name="r2c3box"
//                             onChange={handleCheckboxChange}
//                             checked={checkboxValues.r2c3box === 1}
//                         />
//                     </fieldset>
//                     <fieldset id='group3' className='grid grid-cols-4 justify-items-center pb-6'>
//                         <input
//                             type='checkbox'
//                             name="r3c1box"
//                             onChange={handleCheckboxChange}
//                             checked={checkboxValues.r3c1box === 1}
//                         />
//                         <input
//                             type='checkbox'
//                             name="r3c2box"
//                             onChange={handleCheckboxChange}
//                             checked={checkboxValues.r3c2box === 1}
//                         />
//                         <input
//                             type='checkbox'
//                             name="r3c3box"
//                             onChange={handleCheckboxChange}
//                             checked={checkboxValues.r3c3box === 1}
//                         />
//                     </fieldset>
//                 </div>

//                 <hr />
//                 <div>

//                 </div>
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// };

// export default CheckboxGridForm;

import React, { useState } from 'react';

const RadioGridForm = () => {


    const [file, setFile] = useState();

    const handleUploadFile = (e)=>{
        setFile(e.target.files[0]);
    }

    const generateUniqueFileName = (originalFileName) => {
        const timestamp = Date.now();
        const parts = originalFileName.split('.');
        const randomString = Math.random().toString(36).substring(7);
        const filename = parts[0];
        const extension = parts[1];
        return `${timestamp}_${randomString}_${filename}.${extension}`;
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        let uniqueFileName = "";
        if (file) {
             uniqueFileName = generateUniqueFileName(file.name);
        }
        console.log(uniqueFileName);

    };

    return (
        <div className='form-item'>
            <h1 className='pb-5'>Radio Grid <span className='text-red-500'>*</span></h1>
            <form onSubmit={handleSubmit}>
                <input type='file' name='file' onChange={handleUploadFile} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default RadioGridForm;