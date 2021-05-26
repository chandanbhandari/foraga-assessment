import styles from './excercise.module.scss';
import React from 'react';
import { useTimer } from './useTimer';

const Excercise1: React.FC = () => {
    const date = useTimer(); // Custom hook to manage timer

    return (
        <div className={styles.container}>
            <span className={styles.timer}>{date.toLocaleTimeString()}</span>
        </div>
    )
}

export default Excercise1;
