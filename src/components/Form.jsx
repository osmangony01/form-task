import React, { useState } from 'react';
import { addFormData } from '../utilities/localDB';
import { useNavigate } from 'react-router-dom';

const Form = () => {

    const navigate = useNavigate();
    // single line radio button
    const [mcgOption, setMcqOption] = useState("");
    const handleRadioChange = (option) => {
        setMcqOption(option);
    }

    // single line checkbox
    const [checkboxOptionValues, setCheckboxOptionValues] = useState({
        optionBox1: 0,
        optionBox2: 0,
        optionBox3: 0,
    })

    const handleCheckboxChangeOption = (e) => {
        const { name } = e.target;
        setCheckboxOptionValues((prevValues) => ({
            ...prevValues,
            [name]: prevValues[name] === 1 ? 0 : 1,
        }));
    }
    const checkboxOptionArray = [checkboxOptionValues.optionBox1, checkboxOptionValues.optionBox2, checkboxOptionValues.optionBox3];

    // select option
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const [linearScale, setLinearScale] = useState(0);



    // grid radio button
    const initialRadioArray = [0, 0, 0];
    const [radioArrayR1, setRadioArrayR1] = useState([...initialRadioArray]);
    const [radioArrayR2, setRadioArrayR2] = useState([...initialRadioArray]);
    const [radioArrayR3, setRadioArrayR3] = useState([...initialRadioArray]);

    const handleRadioChangeR1 = (index) => {
        const updatedArrayR1 = initialRadioArray.map((value, i) => i === index ? 1 : 0);
        setRadioArrayR1(updatedArrayR1);
    };

    const handleRadioChangeR2 = (index) => {
        const updatedArrayR2 = initialRadioArray.map((value, i) => i === index ? 1 : 0);
        setRadioArrayR2(updatedArrayR2);
    };
    const handleRadioChangeR3 = (index) => {
        const updatedArrayR3 = initialRadioArray.map((value, i) => i === index ? 1 : 0);
        setRadioArrayR3(updatedArrayR3);
    };

    const convertArrayToObject = (array2D) => {
        const nestedObject = {};

        for (let rowIndex = 0; rowIndex < array2D.length; rowIndex++) {
            const rowKey = `row${rowIndex + 1}`;
            nestedObject[rowKey] = {};

            for (let colIndex = 0; colIndex < array2D[rowIndex].length; colIndex++) {
                const colKey = `col${colIndex + 1}`;
                nestedObject[rowKey][colKey] = array2D[rowIndex][colIndex];
            }
        }
        return nestedObject;
    };

    // grid checkbox 
    const [checkboxValues, setCheckboxValues] = useState({
        r1c1box: 0,
        r1c2box: 0,
        r1c3box: 0,
        r2c1box: 0,
        r2c2box: 0,
        r2c3box: 0,
        r3c1box: 0,
        r3c2box: 0,
        r3c3box: 0,
    });

    const handleCheckboxChange = (event) => {
        const { name } = event.target;
        setCheckboxValues((prevValues) => ({
            ...prevValues,
            [name]: prevValues[name] === 1 ? 0 : 1,
        }));
    };

    const selectedCheckboxValuesArray = [
        [checkboxValues.r1c1box, checkboxValues.r1c2box, checkboxValues.r1c3box],
        [checkboxValues.r2c1box, checkboxValues.r2c2box, checkboxValues.r2c3box],
        [checkboxValues.r3c1box, checkboxValues.r3c2box, checkboxValues.r3c3box],
    ];

    // file upload
    const [file, setFile] = useState();

    const handleUploadFile = (e) => {
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




    const handleSubmit = (e) => {
        event.preventDefault();
        const form = e.target;

        const gridRaio = [radioArrayR1, radioArrayR2, radioArrayR3]
        const finalRaioObj = convertArrayToObject(gridRaio);

        let uniqueFileName = "";
        if (file) {
            uniqueFileName = generateUniqueFileName(file.name);
        }

        const formData = {
            "mcqAns": mcgOption,
            "checkbox1d": checkboxOptionArray,
            'shortAns': form.shortAns.value,
            'paraAns': form.paraGraph.value,
            'dropDownAns': selectedOption,
            'scale': linearScale,
            'file': uniqueFileName,
            'gridRadio': gridRaio,
            'gridCheckbox': selectedCheckboxValuesArray
        }

        //console.log(formData);
        
        addFormData(formData);
        form.reset();
        navigate("/response", { replace: true });
        

    };


    return (
        <div className='bg-[#F0EBF8] pt-4 pb-32'>
            <div className="w-[650px] mx-auto ">
                <div className='flex flex-col bg-white p-6 my-2.5 rounded-lg  border-t-8 border-purple-700'>
                    <h1 className='text-3xl py-3'>Assignment Task</h1>
                    <hr />
                    <p className='text-red-500 text-sm py-2'>* Indicates required question</p>
                </div>
                <div>
                    <form className='' onSubmit={handleSubmit}>
                        <div className='form-item'>
                            <label className='pb-5'>MCQ <span className='text-red-500'>*</span></label>
                            <fieldset>
                                <div >
                                    <input type='radio' value="Option1" name="mcg" onChange={() => handleRadioChange("Option1")} />
                                    <label className='pl-2'>Option 1</label>
                                </div>
                                <div >
                                    <input type='radio' value="Option2" name="mcg" onChange={() => handleRadioChange("Option2")} />
                                    <label className='pl-2'>Option 2</label>
                                </div>
                                <div >
                                    <input type='radio' value="Option3" name="mcg" onChange={() => handleRadioChange("Option3")} />
                                    <label className='pl-2'>Option 3</label>
                                </div>
                            </fieldset>

                        </div>

                        <div className='form-item'>
                            <label className='pb-5'>Checkbox <span className='text-red-500'>*</span></label>
                            <label><input type='checkbox' name="optionBox1" onChange={handleCheckboxChangeOption} checked={checkboxOptionValues.optionBox1 === 1} /><span className='pl-2 '>Option 1 </span></label>
                            <label><input type='checkbox' name="optionBox2" onChange={handleCheckboxChangeOption} checked={checkboxOptionValues.optionBox2 === 1} /><span className='pl-2 '>Option 2 </span></label>
                            <label><input type='checkbox' name="optionBox3" onChange={handleCheckboxChangeOption} checked={checkboxOptionValues.optionBox3 === 1} /><span className='pl-2 '>Option 3 </span></label>
                        </div>

                        <div className='form-item'>
                            <label className='pb-5'>Short Answer <span className='text-red-500'>*</span></label>
                            <div className=''>
                                <input type="text" name="shortAns" placeholder='Your answer' className='w-1/3 outline-0  border-b  border-slate-300 hover:border-b-2 hover:border-purple-700 placeholder:text-sm hover:outline-0 ' />
                            </div>
                        </div>

                        <div className='form-item'>
                            <label className='pb-5'>ParaGraph <span className='text-red-500'>*</span></label>
                            <input type="text" name="paraGraph" placeholder='Your answer' className='w-full outline-0 border-0 border-b  border-slate-300 hover:border-b-2 hover:border-purple-700 placeholder:text-sm' />
                        </div>

                        <div className='form-item'>
                            <label className='pb-5'>Drop down <span className='text-red-500'>*</span></label>
                            <select name="selectOption" value={selectedOption} className='w-1/3 border border-slate-300 p-4 outline-0 mt-4 rounded' onChange={handleOptionChange}>
                                <option value="" disabled>Select an option</option>
                                <option value="option1" >Option 1</option>
                                <option value="option2">Option 2</option>
                            </select>

                        </div>

                        <div className='form-item'>
                            <label className='pb-5'>File Upload <span className='text-red-500'>*</span></label>
                            <input type='file' name='file' onChange={handleUploadFile} />
                        </div>

                        <div className='form-item'>
                            <label className='pb-5'>Linear Scale <span className='text-red-500'>*</span></label>
                            <div className='grid grid-cols-7'>
                                <div className='flex flex-col justify-center items-center gap-10'>
                                    <label> </label>
                                    <label className='text-sm'>Worst</label>
                                </div>
                                <div className='flex flex-col justify-center items-center gap-4'>
                                    <label>1 </label>
                                    <input type='radio' name="scale" value="1" onChange={() => setLinearScale(1)} />
                                </div>
                                <div className='flex flex-col justify-center items-center gap-4'>
                                    <label>2 </label>
                                    <input type='radio' name="scale" value="2" onChange={() => setLinearScale(2)} />
                                </div>
                                <div className='flex flex-col justify-center items-center gap-4'>
                                    <label>3 </label>
                                    <input type='radio' name="scale" value="3" onChange={() => setLinearScale(3)} />
                                </div>
                                <div className='flex flex-col justify-center items-center gap-4'>
                                    <label>4 </label>
                                    <input type='radio' name="scale" value="4" onChange={() => setLinearScale(4)} />
                                </div>
                                <div className='flex flex-col justify-center items-center gap-4'>
                                    <label>5 </label>
                                    <input type='radio' name="scale" value="5" onChange={() => setLinearScale(5)} />
                                </div>
                                <div className='flex flex-col justify-center items-center gap-10 '>
                                    <label></label>
                                    <label className='text-sm'>Best</label>
                                </div>


                            </div>
                        </div>

                        <div className='form-item'>
                            <h1 className='pb-5'>Multi choice Grid <span className='text-red-500'>*</span></h1>
                            <div className='grid grid-cols-4  justify-items-center pb-5'>
                                <label></label>
                                <label className='text-sm'>Column 1</label>
                                <label className='text-sm'>Column 2</label>
                                <label className='text-sm'>Column 3</label>
                            </div>
                            <fieldset className='grid grid-cols-4 justify-items-center pb-6'>
                                <label className='text-sm'>Row 1</label>
                                <input
                                    type='radio'
                                    value={radioArrayR1[0]}
                                    name="group1"
                                    onChange={() => handleRadioChangeR1(0)}
                                    checked={radioArrayR1[0] === 1}
                                />
                                <input
                                    type='radio'
                                    value={radioArrayR1[1]}
                                    name="group1"
                                    onChange={() => handleRadioChangeR1(1)}
                                    checked={radioArrayR1[1] === 1}
                                />
                                <input
                                    type='radio'
                                    value={radioArrayR1[2]}
                                    name="group1"
                                    onChange={() => handleRadioChangeR1(2)}
                                    checked={radioArrayR1[2] === 1}
                                />
                            </fieldset>

                            <fieldset className='grid grid-cols-4 justify-items-center pb-6'>
                                <label className='text-sm'>Row 1</label>
                                <input
                                    type='radio'
                                    value={radioArrayR2[0]}
                                    name="group2"
                                    onChange={() => handleRadioChangeR2(0)}
                                    checked={radioArrayR2[0] === 1}
                                />
                                <input
                                    type='radio'
                                    value={radioArrayR2[1]}
                                    name="group2"
                                    onChange={() => handleRadioChangeR2(1)}
                                    checked={radioArrayR2[1] === 1}
                                />
                                <input
                                    type='radio'
                                    value={radioArrayR2[2]}
                                    name="group2"
                                    onChange={() => handleRadioChangeR2(2)}
                                    checked={radioArrayR2[2] === 1}
                                />
                            </fieldset>

                            <fieldset className='grid grid-cols-4 justify-items-center pb-6'>
                                <label className='text-sm'>Row 1</label>
                                <input
                                    type='radio'
                                    value={radioArrayR3[0]}
                                    name="group3"
                                    onChange={() => handleRadioChangeR3(0)}
                                    checked={radioArrayR3[0] === 1}
                                />
                                <input
                                    type='radio'
                                    value={radioArrayR3[1]}
                                    name="group3"
                                    onChange={() => handleRadioChangeR3(1)}
                                    checked={radioArrayR3[1] === 1}
                                />
                                <input
                                    type='radio'
                                    value={radioArrayR3[2]}
                                    name="group3"
                                    onChange={() => handleRadioChangeR3(2)}
                                    checked={radioArrayR3[2] === 1}
                                />
                            </fieldset>
                        </div>

                        <div className='form-item'>
                            <h1 className='pb-5'>Tick box Grid <span className='text-red-500'>*</span></h1>
                            <div className='grid grid-cols-4  justify-items-center pb-5'>
                                <label></label>
                                <label className='text-sm'>Column 1</label>
                                <label className='text-sm'>Column 2</label>
                                <label className='text-sm'>Column 3</label>
                            </div>
                            <fieldset id='group1' className='grid grid-cols-4 justify-items-center pb-6'>
                                <label className='text-sm'>Row 1</label>
                                <input
                                    type='checkbox'
                                    name="r1c1box"
                                    onChange={handleCheckboxChange}
                                    checked={checkboxValues.r1c1box === 1}
                                />
                                <input
                                    type='checkbox'
                                    name="r1c2box"
                                    onChange={handleCheckboxChange}
                                    checked={checkboxValues.r1c2box === 1}
                                />
                                <input
                                    type='checkbox'
                                    name="r1c3box"
                                    onChange={handleCheckboxChange}
                                    checked={checkboxValues.r1c3box === 1}
                                />
                            </fieldset>
                            <fieldset id='group2' className='grid grid-cols-4 justify-items-center pb-6'>
                                <label className='text-sm'>Row 2</label>
                                <input
                                    type='checkbox'
                                    name="r2c1box"
                                    onChange={handleCheckboxChange}
                                    checked={checkboxValues.r2c1box === 1}
                                />
                                <input
                                    type='checkbox'
                                    name="r2c2box"
                                    onChange={handleCheckboxChange}
                                    checked={checkboxValues.r2c2box === 1}
                                />
                                <input
                                    type='checkbox'
                                    name="r2c3box"
                                    onChange={handleCheckboxChange}
                                    checked={checkboxValues.r2c3box === 1}
                                />
                            </fieldset>
                            <fieldset id='group3' className='grid grid-cols-4 justify-items-center pb-6'>
                                <label className='text-sm'>Row 3</label>
                                <input
                                    type='checkbox'
                                    name="r3c1box"
                                    onChange={handleCheckboxChange}
                                    checked={checkboxValues.r3c1box === 1}
                                />
                                <input
                                    type='checkbox'
                                    name="r3c2box"
                                    onChange={handleCheckboxChange}
                                    checked={checkboxValues.r3c2box === 1}
                                />
                                <input
                                    type='checkbox'
                                    name="r3c3box"
                                    onChange={handleCheckboxChange}
                                    checked={checkboxValues.r3c3box === 1}
                                />
                            </fieldset>
                        </div>

                        <div className='flex justify-between items-center'>
                            <button type="submit" className='bg-purple-700 hover:bg-purple-900 px-6 py-2 text-white rounded text-sm font-semibold '>Submit</button>
                            <button className='text-purple-600 text-sm font-semibold'>Clear form</button>
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
