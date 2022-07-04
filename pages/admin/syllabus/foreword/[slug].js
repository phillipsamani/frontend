import React, { useState, useEffect, Fragment } from 'react'
import { Layout } from "antd";
import AdminMainLayout from "../../../../components/layout/AdminMainLayout";
import AdminSyllabusLayout from '../../../../components/admin/AdminSyllabusLayout'
import Admin from '../../../../components/auth/Admin'

import { syllabusForeword } from '../../../../actions/syllabus'

const AdminUpdateforeword = ({data}) => {
  

  const syllabusTitle = () => {
    return data.map((c, i) => {
        return (
            <div key={i}>
                <h2>{c.subject.name} Syllabus</h2>
            </div>
        )
    })
}

  return (
    <AdminMainLayout>
      <Admin>
      <AdminSyllabusLayout>
        <Fragment>
          <div className="adminForewordContainer">
            <div className="adminForewordHolder">{syllabusTitle()}</div>
            <div>
              <h3>Foreword</h3>
              <div>{JSON.stringify(data)}</div>
              <button>Publish</button>
            </div>
          </div>
        </Fragment>        
      </AdminSyllabusLayout>
      </Admin>
    </AdminMainLayout> 
  );
}

AdminUpdateforeword.getInitialProps = ({ query }) => {
    return syllabusForeword(query.slug).then((data) => {
        console.log(query.slug)
        if (data.error) {
            console.log(data.error);
        } else {
            return {
                data
            };
        }
    });
  };

export default AdminUpdateforeword;

