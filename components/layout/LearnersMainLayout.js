import React, {Fragment} from 'react'
import Header from '../TopNav'

const LearnersMainLayout = ({ children }) => {
    return (
        <Fragment>
            <div><Header /></div>
            <div>{children}</div>
        </Fragment>
    );
};

export default LearnersMainLayout;