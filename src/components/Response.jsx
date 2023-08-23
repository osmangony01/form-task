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

    return (
        <div className='h-screen bg-[#F0EBF8] pt-4 pb-32'>
            <div className="w-[650px] mx-auto ">
                <div className='flex flex-col bg-white p-6 my-2.5 rounded-lg  border-t-8 border-purple-700'>
                    <h1 className='text-2xl py-4'>Thank you submit the assignment</h1>
                    <hr />
                    <div className='mt-5 mb-2'>
                    <button onClick={handleShow} className='bg-purple-700 hover:bg-purple-900 px-2 py-2 text-white rounded text-sm font-semibold '>Show response</button>
                    <button className='text-purple-600 text-sm font-semibold pl-4'><Link to="/">Back</Link></button>
                    </div>
                </div>

                <div className='form-item'>
                   
                </div>
            </div>
        </div>
    );
};

export default Response;