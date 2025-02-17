import React from 'react';
import s from './Counter.module.css'

type CounterProps = {}
export const Counter = ({}: CounterProps) => {
    return (
        <div className={s.borderCounter}>
            <div className={s.windowCounter}>
                1
            </div>
            <div className={s.windowBTN}>
               <button>inc</button>
               <button>reset</button>
            </div>
        </div>
    );
};

