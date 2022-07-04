import React, { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import Router from "next/router";
import dynamic from "next/dynamic";
import { withRouter } from "next/router";

import { isAuth, getCookie } from "../../../actions/auth";
import { createForeword } from "../../../actions/foreword";

//Rich editor for creating introduction body
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "../../../node_modules/react-quill/dist/quill.snow.css";
import { QuillModules, QuillFormats } from "../../../helpers/quill";

const Acknowledgement = () => {
 
  const createAcknowledgementForm = () => {
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
      {createAcknowledgementForm()}
    </Fragment>
  );
};

export default Acknowledgement;