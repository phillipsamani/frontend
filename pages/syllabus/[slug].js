import React, { useState, useEffect, Fragment } from 'react'
import { withRouter, useRouter } from "next/router";
import renderHTML from "react-render-html";
import Image from 'next/image'
import Link from "next/link";

import MainLayout from '../../components/layout/MainLayout'
import HomeMainLayout from '../../components/home/HomeMainLayout'
import YearMenu from "../../components/year/yearSyllabusMenu"


import { singleSyllabus } from '../../actions/syllabus'
import { getSections, getSectionSyllabus } from '../../actions/section'


const mySyllabus = ({syllabus}) => {
  const [sections, setSections] = useState([]);
  
  const [associated, setAssociated] = useState([]);
   
  const initsections = () => {
      getSections({}).then((data) => {
          if (data.error) {
              console.log(data.error);
          } else {
              setSections(data)
          }
      })
  }
  useEffect(() => {
    initsections();
  }, [])

  const syllabusSections = () => {
    return sections.map((s, i) => {
        return (
            <div key={i} className="mb-1">
                <span style={{cursor: "pointer"}} onClick={() => sectionSyllabus(s.slug)} >
                    {renderHTML(s.title)}
                </span>
            </div>
        )
    })
}

const sectionSyllabus = (slug) => {
  getSectionSyllabus(slug, { syllabus }).then((data) => {
      if (data.error) {
          console.log(data.error);
      } else {
          setAssociated(data);
      }
  });
}

const showForeword = () => {
  return associated.foreword?.map((f, i) => {
      return (
          <React.Fragment>
              <div key={i}>
                  <div>
                      <strong><h2>{renderHTML(f.title)}</h2></strong>
                  </div>
                  <p>{renderHTML(f.body)}</p>

              </div>
          </React.Fragment>
      )
  })
}

const showAcknowledgement = () => {
  return associated.acknowledgement?.map((f, i) => {
      return (
          <React.Fragment>
              <div key={i}>
                  <div>
                      <strong><h2>{renderHTML(f.title)}</h2></strong>
                  </div>
                  <p>{renderHTML(f.body)}</p>
              </div>
          </React.Fragment>
      )
  })
}

const showIntroduction = () => {
  return associated.introduction?.map((f, i) => {
      return (
          <React.Fragment>
              <div key={i}>
                  <div>
                      <strong><h2>{renderHTML(f.title)}</h2></strong>
                  </div>
                  <p>{renderHTML(f.body)}</p>

              </div>
          </React.Fragment>
      )
  })
}

const showRationale = () => {
  return associated.rationale?.map((f, i) => {
      return (
          <React.Fragment>
              <div key={i}>
                  <div>
                      <strong><h2>{renderHTML(f.title)}</h2></strong>
                  </div>
                  <p>{renderHTML(f.body)}</p>
              </div>
          </React.Fragment>
      )
  })
}

const showAim = () => {
  return associated.aim?.map((f, i) => {
      return (
          <React.Fragment>
              <div key={i}>
                  <div>
                      <strong><h2>{renderHTML(f.title)}</h2></strong>
                  </div>
                  <p>{renderHTML(f.body)}</p>
              </div>
          </React.Fragment>
      )
  })
}


  return (
    <MainLayout>
      <HomeMainLayout>
        <div className='syllabusContainer'>
          <div className='syllabusText'>{syllabus.name}</div>
          <div>
            <div className='syllabusDescription'>{renderHTML(syllabus.description)}</div>
          
          <YearMenu syllabus={syllabus}/>
          
          <div>
            <div className='syllabusContentHolder'>
              <div className='syllabusContentHolder__1'>
                {associated.foreword ? showForeword() : null}
                {associated.acknowledgement ? showAcknowledgement() : null}
                {associated.introduction ? showIntroduction() : null}
                {associated.rationale ? showRationale() : null}
                {associated.aim ? showAim() : null}
              </div>
              <div className='syllabusContentHolder__2'>
                <div className='syllabusContentHolder__2__toc'> Table of Contents</div>
                <div>{syllabusSections()}</div>
                </div>
            </div>
          </div>
          </div>
        </div>
        
       
      </HomeMainLayout>
    </MainLayout>
  );
}

mySyllabus.getInitialProps = ({ query }) => {
  return singleSyllabus(query.slug).then((data) => {
      if (data.error) {
          console.log(data.error);
      } else {
          return {
              syllabus: data.syllabus
          };
      }
  });
};

export default withRouter(mySyllabus);