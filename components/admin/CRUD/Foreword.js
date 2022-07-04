import React, { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import Router from "next/router";
import dynamic from "next/dynamic";
import { withRouter } from "next/router";
import renderHTML from "react-render-html";

import { isAuth, getCookie } from "../../../actions/auth";
import { createForeword } from "../../../actions/foreword";
import { getSubjects } from "../../../actions/subject";
import { getSections } from "../../../actions/section";
import { create } from "../../../actions/foreword";

//Rich editor for creating foreword body
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "../../../node_modules/react-quill/dist/quill.snow.css";
import { QuillModules, QuillFormats } from "../../../helpers/quill";

const Foreword = ({router}) => {
  const bodyFromLS = () => {
    if (typeof window === 'undefined') {
          return false;
      }

      if (localStorage.getItem('body')) {
          return JSON.parse(localStorage.getItem('body'));
      } else {
          return false;
      }
    };

  const [allSubjects, setAllSubjects] = useState([])
  const [allSections, setAllSections] = useState([])

  // QUILL CONTENTS
  const [body, setBody] = useState(bodyFromLS())
  // const [differentiator, setDifferentiator] = useState({})
  // const [title, setTitle] = useState({})

  const [values, setValues] = useState({
    error: "",
    success: "",
    title: "",
    differentiator: "",
    formData: "",
    subject: "",
    section: "",
  });

  const {
    error,
    success,
    title,
    differentiator,
    formData,
    subject,
    section,
  } = values;
  
  const token = getCookie("token");

  const initSubjects = () => {
    getSubjects({}).then((data) => {
        if (data.error) {
            console.log(data.error);
        } else {
          setAllSubjects(data)
        }
    })
  }

  const initSections = () => {
    getSections({}).then((data) => {
        if (data.error) {
            console.log(data.error);
        } else {
          setAllSections(data)
        }
    })
  }

  useEffect(() => {
    setValues({ ...values, formData: new FormData() });
    initSubjects();
    initSections();
  }, [router])

  
  const publishForeword = (e) => {
    e.preventDefault();
    create({formData, token}).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          formData: "",
          title: "",
          body: "",
          differentiator:"",
          error: "",
          success: "A new forword was created"
          
        });
        //setStrands([]);
        setBody('');
        setAllSubjects([]);
        setAllSections([]);
        
      }
    });
    
  };

  const handleChange = (name) => (e) => {
    const value = e.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value, formData, error: ''});
    
  };

  // const handleTitle = e => {
  //   setTitle(e);
  //   formData.set('title', e);
  //   if (typeof window !== 'undefined') {
  //     localStorage.setItem('title', JSON.stringify(e));
  // }
  // };

  // const handleDifferentiator = e => {
  //   setDifferentiator(e);
  //   formData.set('differentiator', e);
  //   if (typeof window !== 'undefined') {
  //     localStorage.setItem('differentiator', JSON.stringify(e));
  // }
    
  // };

  const handleBody = e => {
    setBody(e);
    formData.set('body', e);
    if (typeof window !== 'undefined') {
      localStorage.setItem('body', JSON.stringify(e));
  }
    
  };

  const createForewordForm = () => {
    return (
      <form onSubmit={publishForeword}>
        {/* <div className="form-group">
          <select 
            className="form-control"
            onChange={handleChange("subject")}
          >
              <option>Please Select The Subject Syllabus</option>
              {allSubjects &&
                allSubjects.map((subject, i) => (
                  <option key={i} value={subject._id}>
                    {subject.name} Syllabus
                  </option>
                ))}
          </select>
        </div>
        <div className="form-group">
          <select
              className="form-control"
              onChange={handleChange("section")}
            >
              <option><italic>Please Select The Syllabus Section</italic></option>
              {allSections &&
                allSections.map((section, i) => (
                  <option key={i} value={section._id}>
                    {renderHTML(section.title)}
                  </option>
                ))}
          </select>
        </div> */}
        <div className="form-group">
            <label className="text-muted">Title</label>
            <input type="text" className="form-control" value={title} onChange={handleChange('title')} />
        </div>
        <div className="form-group">
            <label className="text-muted">Differentiator</label>
            <input type="text" className="form-control" value={differentiator} onChange={handleChange('differentiator')} />
        </div>
        
        <div className="form-group myInput">
          <p><strong>Body of the Foreword</strong></p>
          <ReactQuill
            modules={QuillModules}
            formats={QuillFormats}
            value={body}
            onChange={handleBody}
            placeholder="Enter Foreword Body here"
            
          />
        </div>

        <div>
          <button type="submit" className="btn btn-primary">
            Publish
          </button>
        </div>
      </form>

    );
  };



  return (
    <Fragment>
      {createForewordForm()}
      <hr/>
      {JSON.stringify()}
    </Fragment>
  );
};

export default withRouter(Foreword);