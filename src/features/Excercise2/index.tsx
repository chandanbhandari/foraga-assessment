import React, { useCallback } from 'react';
import { useLocalObservable, Observer } from 'mobx-react-lite';
import style from './excercise2.module.scss';

const Excercise2: React.FC = () => {

    // using local observer hook from mobx to manage stote
    const count = useLocalObservable(() => ({
        value: 0,
    }))

    // using callback to mae sure that the function is remembered on rerenders. 
    // Might be over optimization for small peice fo code but just wanted to utilize the concept here.
    const handleIncrement = useCallback((val) => () => {
        if(val < 0 && count.value === 0) return; // return if count is 0
        count.value += val
    }, [count]);

    return (
        <Observer>
            {() => (
                <div className={style.container}>
                    <div className={style.counterText}>Clicks: {count.value}</div>
                    <div className={style.buttonSection}>
                        <button onClick={handleIncrement(1)}>Increment</button>
                        <button onClick={handleIncrement(-1)}>Decrement</button>
                    </div>
                </div>
            )}
        </Observer>
    )
}

export default Excercise2;
