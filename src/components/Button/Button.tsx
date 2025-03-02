import React from 'react';
import s from './Button.module.css'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
export const Button = ({children,className,disabled,...restProps}:ButtonProps) => {
    return <button  className={`${s.defaultButton} ${disabled ?s.disabled :''}`} {...restProps}>{children}</button>
};

