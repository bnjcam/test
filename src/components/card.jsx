import TopNav from './topNav';
import { useState } from 'react';
import clsx from 'clsx';

export default function Card({ name, age, profPic, job, location }) {
    const [test, setTest] = useState(false)
    const cardClasses = (test) => clsx('border w-full mx-3 rounded-xl flex flex-col', {
        'h-16': !test,
        'h-64': test,
    })
    
    return (
        <div>
           <span onClick={() => setTest(!test)}>
                <div className={cardClasses(test)}>
                    <div className='flex'>
                        <img className='rounded-full h-10 w-10 mt-3 ml-4' src={profPic} alt='prog' />
                        <p className='mt-4 ml-3 text-bold text-xl'>{name}</p>
                    </div>
                    <div className='flex mt-4'>
                        <h2 className='font-bold ml-4 mr-2'>Location:</h2>
                        <p>{location}</p>
                    </div>
                    <div className='flex mt-4'>
                        <h2 className='font-bold ml-4 mr-2'>Job:</h2>
                        <p>{job}</p>
                    </div>
                </div>
           </span>
        </div>
    )
}