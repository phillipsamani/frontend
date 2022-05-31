import React, {Fragment} from 'react'
import Header from '../TopNav'
import Footer from '../BottomNav'
const MainLayout = ({ children }) => {
    return (
        <Fragment>
            <div><Header /></div>
            <div>{children}</div>
           
        </Fragment>
    );
};

export default MainLayout;