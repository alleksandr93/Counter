import React, {ChangeEvent, useState} from 'react';
import s from '../Counter.module.css';
import {Button} from '../../Button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {errorSelector, installCounter, maxSelector, minSelector, setError} from '../../../state/counter-reducer';
import {type Count, createValidationSchema} from '../../../utils/createValidationSchema';


export const CounterSet = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const max = useSelector(maxSelector)
    const min = useSelector(minSelector)
    const error = useSelector(errorSelector)

    const [counter, setCounter] = useState<Count>({minCount: min, maxCount: max});

    const validateAndSetCounter = (newCounter: Count) => {
        const validation = createValidationSchema(newCounter.minCount, newCounter.maxCount).safeParse(newCounter);

        if (!validation.success) {
            const errorMessage = validation.error.errors[0].message;
            dispatch(setError(errorMessage)); // Сохраняем ошибку в Redux
        } else {
            dispatch(setError(null)); // Убираем ошибку из Redux
        }
    }
    const onchangeMaxHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const newMax = Number(event.currentTarget.value);
        const newCounter = {...counter, maxCount: newMax};
        setCounter(newCounter);
        validateAndSetCounter(newCounter);
    }
    const onChangeStartHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const newMin = Number(event.currentTarget.value);
        const newCounter = {...counter, minCount: newMin};
        setCounter(newCounter);
        validateAndSetCounter(newCounter);
    }
    const onClickHandler = () => {
// Сохраняем значения в localStorage только при нажатии на кнопку
        localStorage.setItem('maxCounter', `${counter.maxCount}`);
        localStorage.setItem('minCounter', `${counter.minCount}`);
        dispatch(installCounter({min:counter.minCount, max:counter.maxCount}))
        navigate('/counter');
    }
    debugger
    return (
        <>
            <div className={s.borderCounter}>
                <div className={s.windowSetCounter}>
                    <div className={s.maxMin}>
                        <h3>max value :</h3>
                        <input className={error?`${s.inputError}`:''} value={counter.maxCount} type="number" onChange={onchangeMaxHandler}/>
                    </div>
                    <div className={s.maxMin}>
                        <h3>start value :</h3>
                        <input className={error?`${s.inputError}`:''} value={counter.minCount} type="number" onChange={onChangeStartHandler}/>
                    </div>
                </div>
                <div className={s.windowBTN}>
                    <Button disabled={!!error} onClick={onClickHandler}>set</Button>

                </div>
            </div>
        </>

    );
};

