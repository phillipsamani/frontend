import React, { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import Router from "next/router";
import dynamic from "next/dynamic";
import { withRouter } from "next/router";

import { isAuth, getCookie } from "../../../actions/auth";
import { createForeword } from "../../../actions/foreword";
import CreateIntroductionForm from '../../../components/admin/CRUD/Section_1_Introduction'

//Rich editor for creating introduction body
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "../../../node_modules/react-quill/dist/quill.snow.css";
import { QuillModules, QuillFormats } from "../../../helpers/quill";

const Section_1_Introduction = () => {
 
  const createIntroductionForm = () => {
    return (
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Insert an identifier here"
            
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Insert a title here"
            
          />
        </div>
        <div className="form-group">
          <ReactQuill
            modules={QuillModules}
            formats={QuillFormats}
           
            placeholder="Enter Foreword Body here"
            
          />
        </div>

        <div>
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </div>
      </form>
    );
  };



  return (
    <Fragment>
      {createIntroductionForm()}
    </Fragment>
  );
};

export default Section_1_Introduction;