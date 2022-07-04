import React, { useState, useEffect, Fragment } from 'react'
import { Layout } from "antd";
// const {Content, Sider } = Layout;

import AdminMainLayout from "../../../components/layout/AdminMainLayout";
import AdminSyllabusLayout from '../../../components/admin/AdminSyllabusLayout'
import Admin from '../../../components/auth/Admin'

import { getCategories } from "../../../actions/category";

const AdminCategories = () => {
    const [allCategories, setAllCategories] = useState([])

    const initCategories = () => {
        getCategories({}).then((data) => {
            if (data.error) {
                console.log(data.error);
            } else {
                setAllCategories(data)
            }
        })
        }
        
    useEffect(() => {
    initCategories();
    }, [])

    const category = () => {
        return allCategories.map((c, i) => {
            return (
                <div key={i} className='adminCategoryContainer'>
                    <div>{c.name} </div>
                    <div>
                        <button className="btn btn-primary">Edit</button>
                    </div>
                </div>
            )
        })
    }


    return (
    <AdminMainLayout>
        <Admin>
        <AdminSyllabusLayout>
            <Fragment>
                <div>
                    <div className="adminSyllabusCategory">
                       <div>
                        {category()}
                       </div>
                       
                    </div>
                </div>
            </Fragment>
        </AdminSyllabusLayout>
        </Admin>
    </AdminMainLayout> 
  );
}

export default AdminCategories;

