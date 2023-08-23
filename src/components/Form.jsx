import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        textField: '',
        radioButton: '',
        checkbox: [],
        selectOption: '',
        file: null,
        rowRadios: [
            { row1: '' },
            { row2: '' },
            { row3: '' },
        ],
        rowCheckboxes: [
            { row1: [] },
            { row2: [] },
            { row3: [] },
        ],
    });

    const handleChange = (event) => {
        const { name, value, type, checked, files } = event.target;

        if (type === 'checkbox') {
            const updatedCheckboxes = [...formData[name]];
            if (checked) {
                updatedCheckboxes.push(value);
            } else {
                const index = updatedCheckboxes.indexOf(value);
                if (index !== -1) {
                    updatedCheckboxes.splice(index, 1);
                }
            }
            setFormData((prevData) => ({ ...prevData, [name]: updatedCheckboxes }));
        } else if (type === 'file') {
            setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
        } else {
            setFormData((prevData) => ({ ...prevData, [name]: value }));
        }
    };



    return (
        <div className='bg-[#F0EBF8] py-32'>
            <div className="w-[650px] mx-auto ">
                <div>
                    <h1>Google Form Clone</h1>
                </div>
                <div>
                    <form className=''>
                        <div className='form-item'>
                            <label className='pb-4'>MCQ</label>
                            <label> <input type='radio' value='option1' name="radioButton" /> <span className='pl-2 '>Option 1 </span> </label>
                            <label> <input type='radio' value='option2' name="radioButton" /> <span className='pl-2 '>Option 2 </span> </label>
                            <label> <input type='radio' value='option3' name="radioButton" /> <span className='pl-2 '>Option 3 </span> </label>
                        </div>
                        <div className='form-item'>
                            <label className='pb-4'>Checkbox</label>
                            <label><input type='checkbox' name="checkbox" value="checkbox2" /><span className='pl-2 '>Checkbox 1 </span></label>
                            <label><input type='checkbox' name="checkbox" value="checkbox2" /><span className='pl-2 '>Checkbox 2 </span></label>
                            <label><input type='checkbox' name="checkbox" value="checkbox2" /><span className='pl-2 '>Checkbox 3 </span></label>
                        </div>
                        <div className='form-item'>
                            <label className='pb-4'>Short Answer</label>
                            <div className=''>
                                <input type="text" placeholder='Your answer' className=' outline-0  border-b  border-slate-300 hover:border-b-2 hover:border-purple-700 placeholder:text-sm hover:outline-0 ' />
                            </div>
                        </div>
                        <div className='form-item'>
                            <label className='pb-4'>ParaGraph</label>
                            <input type="text" placeholder='Your answer' className='w-8/2 outline-0 border-0 border-b  border-slate-300 hover:border-b-2 hover:border-purple-700 placeholder:text-sm' />
                        </div>

                        <div className='form-item'>
                            <label className='pb-4'>Drop down</label>
                            <select className='w-1/3 border border-slate-300 p-4 outline-0 mt-4 rounded' name="selectOption" value="">
                                <option className='select:py-2' value="">Select an option</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                            </select>

                        </div>
                        <div className='form-item'>
                            <label className='pb-4'>File Upload</label>
                            <input type="file" name="file" />

                        </div>
                        <div className='form-item'>
                            <label className='pb-4'>Linear Scale</label>
                            <div className='grid grid-cols-7'>
                                <div className='flex flex-col justify-center items-center gap-10'>
                                    <label> </label>
                                    <label>Worst</label>
                                </div>
                                <div className='flex flex-col justify-center items-center gap-4'>
                                    <label>1 </label>
                                    <input type='radio' name="scale" value="0" />
                                </div>
                                <div className='flex flex-col justify-center items-center gap-4'>
                                    <label>2 </label>
                                    <input type='radio' name="scale" value="0" />
                                </div>
                                <div className='flex flex-col justify-center items-center gap-4'>
                                    <label>3 </label>
                                    <input type='radio' name="scale" value="0" />
                                </div>
                                <div className='flex flex-col justify-center items-center gap-4'>
                                    <label>4 </label>
                                    <input type='radio' name="scale" value="0" />
                                </div>
                                <div className='flex flex-col justify-center items-center gap-4'>
                                    <label>5 </label>
                                    <input type='radio' name="scale" value="0" />
                                </div>
                                <div className='flex flex-col justify-center items-center gap-10 '>
                                    <label></label>
                                    <label>Best</label>
                                </div>


                            </div>
                        </div>

                        <div className='form-item'>
                            <h1 className='pb-4'>Multi choice Grid</h1>
                            <div className='grid grid-cols-4  justify-items-center pb-5'>
                                <label></label>
                                <label>Column 1</label>
                                <label>Column 2</label>
                                <label>Column 3</label>
                            </div>
                            <fieldset id='group1' className='grid grid-cols-4  justify-items-center pb-6'>
                                <label>Row 1</label>
                                <input type='radio' value="0" name="group1" />
                                <input type='radio' value="0" name="group1" />
                                <input type='radio' value="0" name="group1" />
                            </fieldset>
                            <fieldset id='group2' className='grid grid-cols-4  justify-items-center pb-6'>
                                <label>Row 2</label>
                                <input type='radio' value="0" name="group2" />
                                <input type='radio' value="0" name="group2" />
                                <input type='radio' value="0" name="group2" />
                            </fieldset>
                            <fieldset id='group3' className='grid grid-cols-4 justify-items-center pb-6'>
                                <label>Row 3</label>
                                <input type='radio' value="0" name="group3" />
                                <input type='radio' value="0" name="group3" />
                                <input type='radio' value="0" name="group3" />
                            </fieldset>
                        </div>
                        <div className='form-item'>
                            <h1 className='pb-4'>Tick box Grid</h1>
                            <div className='grid grid-cols-4  justify-items-center pb-5'>
                                <label></label>
                                <label>Column 1</label>
                                <label>Column 2</label>
                                <label>Column 3</label>
                            </div>
                            <fieldset id='group1' className='grid grid-cols-4  justify-items-center pb-6'>
                                <label>Row 1</label>
                                <input type='checkbox' value="0" name="r1c1box" />
                                <input type='checkbox' value="0" name="r1c2box" />
                                <input type='checkbox' value="0" name="r1c3box" />
                            </fieldset>
                            <fieldset id='group2' className='grid grid-cols-4  justify-items-center pb-6'>
                                <label>Row 2</label>
                                <input type='checkbox' value="0" name="r2c1box" />
                                <input type='checkbox' value="0" name="r2c2box" />
                                <input type='checkbox' value="0" name="r2c3box" />
                            </fieldset>
                            <fieldset id='group3' className='grid grid-cols-4 justify-items-center pb-6'>
                                <label>Row 3</label>
                                <input type='checkbox' value="0" name="r3c1box" />
                                <input type='checkbox' value="0" name="r3c2box" />
                                <input type='checkbox' value="0" name="r3c3box" />
                            </fieldset>
                        </div>

                        <div>
                            <button className='bg-purple-700 hover:bg-purple-900 px-6 py-2 text-white rounded text-sm font-semibold '>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;


// import React, { useState } from 'react';

// const App = () => {
//     const [selectedOptions, setSelectedOptions] = useState({
//         row1: '',
//         row2: '',
//         row3: '',
//     });

//     const handleRadioChange = (row, value) => {
//         setSelectedOptions((prevOptions) => ({
//             ...prevOptions,
//             [row]: value,
//         }));
//     };

//     return (
//         <div>
//             <h1>3x3 Radio Button Grid</h1>
//             <div className="radio-grid">
//                 {[1, 2, 3].map((row) => (
//                     <div key={row} className="radio-row">
//                         {[1, 2, 3].map((column) => (
//                             <label key={column} className="radio-label">
//                                 <input
//                                     type="radio"
//                                     name={`row${row}`}
//                                     value={`option${column}`}
//                                     checked={selectedOptions[`row${row}`] === `option${column}`}
//                                     onChange={() => handleRadioChange(`row${row}`, `option${column}`)}
//                                 />
//                                 Row {row}, Option {column}
//                             </label>
//                         ))}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default App;
