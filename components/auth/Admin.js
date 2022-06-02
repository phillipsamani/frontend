
import React, { useEffect, Fragment } from 'react';
import Router from 'next/router';
import { isAuth } from '../../actions/auth';

const Admin = ({ children }) => {
    useEffect(() => {
        if (!isAuth()) {
            Router.push(`/`);
        } else if (isAuth().role !== 1) {
            Router.push(`/`);
        }
    }, []);
    return <Fragment>{children}</Fragment>;
};

export default Admin;