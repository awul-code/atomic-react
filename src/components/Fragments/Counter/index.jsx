import React, { useEffect, useState } from 'react';
import Button from '../../Elements/Button/Index';

function Counter() {


    /*************  ✨ Codeium Command 🌟  *************/
    /**
     * State hook to manage the count value.
     * Initializes with the value from localStorage or 0 if not present.
     * @returns {number} The current count state.
     */
    const [count, setCount] = useState(() => {
        return Number(localStorage.getItem('count')) || 0;
    });
    /******  d40e552a-0be8-4f4a-834a-b85cec43f452  *******/



    /**
     * Every time the count state changes, update the value in localStorage.
     * This is only run when the component mounts and when the count state changes.
     * @param {number} count The current count state.
     */
    useEffect(() => {
        localStorage.setItem('count', count);
    }, [count]);


    /*************  ✨ Codeium Command ⭐  *************/
    /**
     * Increment the counter by 1.
     */
    /******  71ef1346-424c-48a2-9cd2-0fee70e86728  *******/
    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };
    const handleDecrement = () => {
        const newCount = Math.max(0, count - 1);
        setCount(newCount);
    };


    /**
     * Reset the counter to 0.
     */

    /**
     * Reset the counter to 0.
     *
     * This function is an event handler that will be called when the "Reset"
     * button is clicked. It resets the `count` state to 0.
     */
    const handleReset = () => {
        setCount(0);
    };

    return (
        <div className='flex justify-center items-center gap-10 mt-9 flex-col'>

            <div className='flex gap-7 justify-center align-center items-center text-center'>
                <Button
                    className='bg-slate-900 text-4xl h-full'
                    onClick={handleDecrement}
                >
                    -
                </Button>
                <h1 className="text-4xl">
                    {count}
                </h1>
                <Button
                    className='bg-slate-900 text-4xl h-full'
                    onClick={handleIncrement}
                >
                    +
                </Button>
            </div>
            <Button
                className='bg-slate-900 text-4xl h-full'
                onClick={handleReset}
            >
                Reset
            </Button>
        </div>
    );
}

export default Counter;
