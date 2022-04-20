import React from 'react';
import { Route } from 'react-router-dom';

const Adminlayout = (props) => {
    const {Component,...rest}=props
    return (
        <Route {...rest } render={(propsRouter)=>{
            return <Component {...propsRouter} />
        }} />
    );
}

export default Adminlayout;
