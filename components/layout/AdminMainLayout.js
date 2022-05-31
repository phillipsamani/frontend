import React, {Fragment} from 'react'
import Header from '../admin/AdminTopNav'

const AdminMainLayout = ({ children }) => {
    return (
        <Fragment>
            <div><Header /></div>
            <div>{children}</div>
        </Fragment>
    );
};

export default AdminMainLayout;