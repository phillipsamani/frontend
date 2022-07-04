import React, { useState, useEffect, Fragment } from 'react'
import { withRouter, useRouter } from "next/router";
import renderHTML from "react-render-html";
import Image from 'next/image'
import Link from "next/link";

import MainLayout from '../../components/layout/MainLayout'
import SyllabusMainLayout from '../../components/home/SyllabusMainLayout'
import YearMenu from "../../components/year/yearSyllabusMenu"


import { singleSyllabus } from '../../actions/syllabus'
import { getSections, getSectionSyllabus } from '../../actions/section'
import { getCategories } from "../../actions/category";


const mySyllabus = ({syllabus}) => {
  const [sections, setSections] = useState([]);
  const [allCategories, setAllCategories] = useState([])
  const [associated, setAssociated] = useState([]);

  const initCategories = () => {
    getCategories({}).then((data) => {
        if (data.error) {
            console.log(data.error);
        } else {
            setAllCategories(data)
        }
    })
  }
   
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
    initCategories();
  }, [])

  const category = () => {
    return allCategories.map((c, i) => {
        return (
            <div key={i} className='syllabusCategoryTextContainer'>
                <Link href="/category/[slug]" as={`/category/${c.slug}`} >
                    <a className='btn btn-primary syllabusCategoryText'>{c.name} Syllabuses</a>
                </Link>
            </div>
        )
    })
}

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
      <div>
        <div className='syllabusContainer'>
          <div className='syllabusText'>{syllabus.name}</div>
          <div>
            <div className='syllabusDescription'>
                {renderHTML(syllabus.description)}
            </div>
            <div className='syllabusCategory'>
                {category()}
            </div>
        </div>

        <div>
            <div className='syllabusContentHolder'>
              <div className='syllabusContentHolder__1'>
                <div><YearMenu syllabus={syllabus}/></div>
                <div className='syllabusMainContents'>
                {associated.foreword ? showForeword() : null}
                {associated.acknowledgement ? showAcknowledgement() : null}
                {associated.introduction ? showIntroduction() : null}
                {associated.rationale ? showRationale() : null}
                {associated.aim ? showAim() : null}
                </div>
                {/* {JSON.stringify(associated)} */}
              </div>
              <div className='syllabusContentHolder__2'>
                <div className='syllabusContentHolder__2__toc'> Table of Contents</div>
                <div>{syllabusSections()}</div>
                </div>
            </div>
          </div>
          
        </div>
    </div> 
    </MainLayout>
  );
}

mySyllabus.getInitialProps = ({ query }) => {
  return singleSyllabus(query.slug).then((data) => {
      console.log(query.slug)
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