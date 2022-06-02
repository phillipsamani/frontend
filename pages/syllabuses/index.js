import React, {Fragment} from 'react'
import MainLayout from "../../components/layout/MainLayout";
import SyllabusMainLayout from '../../components/home/SyllabusMainLayout'

const Syllabuses = () => {
    return (
      <Fragment>
        <MainLayout>
          <SyllabusMainLayout>
          <h1>All Syllabuses</h1>
          </SyllabusMainLayout>
        </MainLayout>
      </Fragment>
    );
  }
  
  export default Syllabuses;