import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getFormData } from '../utilities/localDB';

const Response = () => {

    const [showResponse, setShowResponse] = useState(false);
    const handleShow = () => {
        setShowResponse(true);
    }

    const [formData, setFormData] = useState([]);

    useEffect(() => {
        setFormData(getFormData());
    }, [])

    console.log(formData);
    // if (Object.keys(formData).length) {
    //     const { mcqAns, checkbox1d, shortAns, paraAns, dropDownAns, scale, file, gridRadio, gridCheckbox } = formData;
    // }


    return (
        <div className='h-full  bg-[#F0EBF8] pt-4 pb-32'>
            <div className="w-[650px] mx-auto ">
                <div className='flex flex-col bg-white p-6 my-2.5 rounded-lg  border-t-8 border-purple-700'>
                    <h1 className='text-2xl py-4'>Thank you submit the assignment</h1>
                    <hr />
                    <div className='mt-5 mb-2'>
                        <button onClick={handleShow} className='bg-purple-700 hover:bg-purple-900 px-2 py-2 text-white rounded text-sm font-semibold '>Show response</button>
                        <button className='text-purple-600 text-sm font-semibold pl-4'><Link to="/">Back</Link></button>
                    </div>
                </div>

                <div className={ showResponse ? 'form-item': "hidden"}>
                    <div className='py-4'>
                        <p className='pb-2'>MCQ - Answer</p>
                        <p className='text-sm text-green-500'>{formData?.mcqAns}</p>

                    </div>
                    <hr />
                    <div className='py-4'>
                        <p className='py-4'>Checkbox Answer</p>
                        {
                            formData?.checkbox1d?.map((item, index) => {
                                return item == 1 ? <span className='text-sm text-green-500'> Option {index + 1}, </span> : ""
                            })

                        }
                    </div>
                    <hr />
                    <div className='py-4'>
                        <p className='py-4'>Short Answer</p>
                       <p className='text-sm text-green-500' >{formData?.shortAns }</p>
                            
                       
                    </div>
                    <hr />
                    <div className='py-4'>
                        <p className='py-4'>ParaGraph Answer</p>
                        <p className='text-sm text-green-500'>{
                            formData?.paraAns
                        }</p>
                    </div>
                    <hr />
                    <div className='py-4'>
                        <p className='py-4'>Drop Down</p>
                        <p className='text-sm text-green-500'>{ formData?.dropDownAns}</p>
                    </div>
                    <hr />
                    <div className='py-4'>
                        <p className='py-4'>Linear Scale Answer</p>
                        <p className='text-sm text-green-500'>{ formData?.scale}</p>
                    </div>
                    <hr />
                    <div className='py-4'>
                        <p className='py-4'>File Answer</p>
                        <p className='text-sm text-green-500'>{formData?.file}</p>
                    </div>
                    <hr />
                    <div className='py-4'>
                        <p className='py-4'>Multi choice Grid Answer</p>
                        {
                            formData?.gridRadio?.map((item, index) => {
                                return <span className='text-sm text-green-500' key={index}>row{index+1}-{ item.map((it, id)=> { return it==1 ? `col${id+1}`: ""} )}, </span>
                                //return console.log(item)
                            })
                        }
                    </div>
                    <hr />
                    <div className='py-4'>
                        <p className='py-4'>Tick box Grid </p>
                        {
                            formData?.gridCheckbox?.map((item, index) => {
                                return <span className='text-sm text-green-500' key={index}>{ item.map((it, id)=> { return it==1 ? `row${index+1}-col${id+1} , `: ""} )} </span>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Response;