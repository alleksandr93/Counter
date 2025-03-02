import React, {useEffect} from 'react';
import s from './Counter.module.css'
import {CounterMain} from './CounterMain/CounterMain';
import {CounterSet} from './CounterSet/CounterSet';
import {Route, Routes} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {errorSelector, installCounter} from '../../state/counter-reducer';

type CounterProps = {}
export const Counter = ({}: CounterProps) => {
    const error = useSelector(errorSelector)
    return <div className={s.counterFlex}>
  <p className={error ?`${s.errorText}`:`${s.text}`}>{error?error:'1'}</p>
        <Routes>
            <Route path="/" element={<CounterSet/>}/>
            <Route path="/counter" element={<CounterMain/>}/>
        </Routes>

    </div>
};

