import React from 'react';
import oops from '../image/oops.jpg'
const Error = () => {
    return (
        <div className='error'>
            <div className='oops'>
                <img src={oops} alt="oops"/>
            </div>
            Упс, чтото пошло не так <br/>
            Введите коректно город
        </div>
    );
};

export default Error;