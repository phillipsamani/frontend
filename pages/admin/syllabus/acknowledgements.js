import React, { useState, useEffect, Fragment } from 'react'
import { Layout } from "antd";
// const {Content, Sider } = Layout;

import AdminMainLayout from "../../../components/layout/AdminMainLayout";
import AdminSyllabusLayout from '../../../components/admin/AdminSyllabusLayout'
import Admin from '../../../components/auth/Admin'
import CreateAcknowledgementForm from '../../../components/admin/CRUD/Acknowledgement'

import { getAcknowledgements } from "../../../actions/acknowledgement";

const AdminAcknowledgement = () => {
    const [allAcknowledgements, setAllAcknowledgements] = useState([])

    const initAcknowledgements = () => {
        getAcknowledgements({}).then((data) => {
            if (data.error) {
                console.log(data.error);
            } else {
                setAllAcknowledgements(data)
            }
        })
        }
        
    useEffect(() => {
        initAcknowledgements();
    }, [])

    return (
    <AdminMainLayout>
        <Admin>
        <AdminSyllabusLayout>
            <Fragment>
                <div>
                    <div className="adminSyllabusAcknowledgement">
                       <div >
                        <CreateAcknowledgementForm />
                        
                       </div>
                    </div>
                </div>
            </Fragment>
        </AdminSyllabusLayout>
        </Admin>
    </AdminMainLayout> 
  );
}

export default AdminAcknowledgement;

