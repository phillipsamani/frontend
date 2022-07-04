import React, { useState, useEffect, Fragment } from 'react'
import { Layout } from "antd";
import Link from "next/link";
// const {Content, Sider } = Layout;

import AdminMainLayout from "../../../components/layout/AdminMainLayout";
import AdminSyllabusLayout from '../../../components/admin/AdminSyllabusLayout'
import Admin from '../../../components/auth/Admin'
import CreateForewordForm from '../../../components/admin/CRUD/Foreword'

import { getForewords } from "../../../actions/foreword";

const AdminForewords = () => {
    const [allForewords, setAllForewords] = useState([])

    const initForewords = () => {
        getForewords({}).then((data) => {
            if (data.error) {
                console.log(data.error);
            } else {
                setAllForewords(data)
            }
        })
        }
        
    useEffect(() => {
        initForewords();
    }, [])


    const singleForeword = () => {
        return allForewords?.map((c, i) => {
            return (
                <Fragment>
                    <div key={i} className="adminForeword">
                        <div className="adminForewordTitle">
                            <div>
                            {c.subject.name} Foreword
                            </div>
                        </div>
                        <div className="adminForewordButtons">
                            <span className="adminForewordButton1"><Link href="/admin/syllabus/foreword/[slug]" as={`/admin/syllabus/foreword/${c.subject.slug}`}><a>Update</a></Link></span>
                            <span className="adminForewordButton2">Destroy</span>
                        </div>
                        
                    </div>
                    <hr/>
                </Fragment>
            )
        })
    }


    return (
    <AdminMainLayout>
        <Admin>
        <AdminSyllabusLayout>
            <Fragment>
                <div className="adminForewordContainer">
                    <div className="adminForewordHolder">
                        <h2>All Forewords</h2>
                        {singleForeword()}
                    </div>
                    <div>
                       <div className="adminForewordForm">
                        <h2>Create New Foreword</h2>
                        <CreateForewordForm />
                       </div>
                    </div>
                </div>
            </Fragment>
        </AdminSyllabusLayout>
        </Admin>
    </AdminMainLayout> 
  );
}

export default AdminForewords;

