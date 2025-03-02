import React from 'react';
import s from '../Counter.module.css';
import {Button} from '../../Button/Button';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {counterSelector, increment, maxSelector, reset} from '../../../state/counter-reducer';


export const CounterMain = () => {
    const dispatch = useDispatch();
    const counter = useSelector(counterSelector)
    const max = useSelector(maxSelector)
    return (
        <div className={s.borderCounter}>
            <div className={`${s.windowCounter} ${counter === max ? s.maxCount : ''}`}>
                {counter}
            </div>
            <div className={s.windowBTN}>
                <Button disabled={counter===max}
                        onClick={()=>dispatch(increment())}>inc</Button>
                <Button disabled={false}
                        onClick={()=>dispatch(reset())}>reset</Button>
                <Link to="/"><Button>set</Button></Link>
            </div>

        </div>

    )
};

