import React, {Fragment} from 'react'
import MainLayout from "../../components/layout/MainLayout";

import LearnersMainLayout from '../../components/home/LearnersMainLayout'

const Learners = () => {
    return (
      <Fragment>
        <MainLayout>
          <LearnersMainLayout>
          <h1>All Learner Books</h1>
          </LearnersMainLayout>
          </MainLayout>
      </Fragment>
    );
  }
  
  export default Learners;