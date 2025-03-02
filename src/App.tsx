import React, {useEffect} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {Provider} from 'react-redux';
import {store} from './state/store';
import {HashRouter} from 'react-router-dom';



const tg = window.Telegram.WebApp
function App() {
    useEffect(() => {
        // Инициализация Telegram Web App
        tg.expand(); // Разворачивает Web App на весь экран
        console.log('Theme params:', tg.themeParams); // Логируем параметры темы
    }, [tg])
    const onClickHandler=()=>{
        tg.close()
    }
    return (
        <>

            <div className={'wrapper'}>
                <button onClick={onClickHandler} className={'closeBtn'}>Close</button>
                <Provider store={store}>
                    <HashRouter>
                        <Counter/>
                    </HashRouter>
                </Provider>

            </div>
        </>

    );
}

export default App;
