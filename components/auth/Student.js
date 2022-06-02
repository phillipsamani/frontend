import React, { useEffect, Fragment } from 'react';
import Router from 'next/router';
import { isAuth } from '../../actions/auth';

const Student = ({ children }) => {
    useEffect(() => {
        if (!isAuth()) {
            Router.push(`/`);
        } else if (isAuth().student !== 1) {
            Router.push(`/`);
        }
    }, []);
    return <Fragment>{children}</Fragment>;
};

export default Student;