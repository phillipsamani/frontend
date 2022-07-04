import React, { useState, useEffect, Fragment } from 'react'
import { withRouter, useRouter } from "next/router";
import renderHTML from "react-render-html";
import Image from 'next/image'
import Link from "next/link";
import { DropdownButton,Dropdown } from 'react-bootstrap'

import MainLayout from '../../components/layout/MainLayout'
import SyllabusMainLayout from '../../components/home/SyllabusMainLayout'

import { singleSubstrand } from '../../actions/substrand'
import { getSections, getSyllabusSections } from '../../actions/section'
import { getYearsWithAllSubstrands } from "../../actions/year";

import { isAuth } from "../../actions/auth";
import { getCategories } from "../../actions/category";

import logo from '../../public/coat-of-arm.png'

const Substrand = ({data}) => {
  const [sections, setSections] = useState([]);
  const [allCategories, setAllCategories] = useState([])
  const [associated, setAssociated] = useState([]);
  const [content, setContent] = useState([]);
   
  const initsections = () => {
      getSections({}).then((data) => {
          if (data.error) {
              console.log(data.error);
          } else {
              setSections(data)
          }
      })
  }

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
    getSyllabusSections(slug, { data }).then((data) => {
      if (data.error) {
          console.log(data.error);
      } else {
          setAssociated(data);
      }
  });
}

const showAllYears = () => {
    return data.years?.map((year, i) => (
        <div key={i} className="yearsHolder">
          <DropdownButton id="dropdown-item-button" title={year.name} onClick={() => yearSubstrands(year.slug)}>
            {showAllYearSubstrands()} 
          </DropdownButton>
        </div>
    ));
};



const yearSubstrands = (slug) => {
    getYearsWithAllSubstrands(slug, { data }).then((data) => {
      if (data.error) {
          console.log(data.error);
      } else {
          setContent(data);
          if (associated || associated.length !== 0) {
            setAssociated([])
        }
      }
  });
};

const showAllYearSubstrands = () => {
  return content.map((c, i) => (
      <div key={i} >
         <Dropdown.Item>
          <Link href="/substrand/[slug]" as={`/substrand/${c.slug}`}>
              <a><strong>{c.name} </strong></a>
          </Link>
          </Dropdown.Item>
         
      </div>
  ));
};

const showOutcomes = () => {
    return data.outcomes?.map((o, i) => {
        return (
            <div key={i}>
                <div className="substrandHead">
                    {isAuth() && (
                        <React.Fragment>
                            <div className="Outcomes__1">
                                <Link href="/outcome/[slug]" as={`/outcome/${o.slug}`}>
                                    <a>{renderHTML(o.general)}</a>
                                </Link>
                            </div>
                            <div className="Outcomes__2">
                                <div>{renderHTML(o.indicators)}</div>
                            </div>
                        </React.Fragment>
                    )}
                    {!isAuth() && (
                        <React.Fragment>
                            <div className="Outcomes__1">
                                <span>{renderHTML(o.general)}</span>
                            </div>
                            <div className="Outcomes__2">
                                <div>{renderHTML(o.indicators)}</div>
                            </div>
                        </React.Fragment>
                    )}
                </div>
            </div>
        )
    });
}

const showSubstrand = () => {
    return (
        <div className="substrandContainer">
            <div className="substrandContainer__1">
                <div className="substrandHeading">
                    <div className="substrandHeading__1"><strong>Subject:</strong> {data.subject.name}
                    </div>
                    <div className="substrandHeading__2">
                    {data.year.name}
                    </div>
                </div>
                <div className="substrandStrand">
                    {renderHTML(data.strand.name)}
                </div>
                <div className="substrandHeads">
                    <div className="substrandHeads__1"> <strong>Substrand:</strong> {data.name}</div>
                    <div className="substrandHeads__2"> 
                        Periods: {data.periods}
                    </div>
                </div>
                <div className="substrandStatement">{renderHTML(data.statement)}</div>
                <div className="substrandOutcomes">
                    <div className="substrandOutcomes__1">General Learning Outcomes</div>
                    <div className="substrandOutcomes__2">Specific Learning Outcomes</div>
                </div>
                <div className="substrandOutcomesStem">
                    <div className="substrandOutcomes__stem__1">Learners should:</div>
                    <div className="substrandOutcomes__stem__2">Learners should be able to: </div>
                </div>
                <div>{showOutcomes()}</div>
            </div>

        </div>
    )
}

const assessment = () => {
    return data.outcomes?.map((c, i) => {
        return (
            <div key={i}>
                <div>
                    <a>{renderHTML(c.assessment)}</a>
                </div>
            </div>
        )
    })
}

const showForeword = () => {
  return associated.foreword?.map((f, i) => {
      return (
          <React.Fragment>
              <div key={i}>
                  <div>
                      <strong><h2>{f.title}</h2></strong>
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
        <div className='syllabusContainerHolder'>
            <div className='syllabusText'>{data.subject.name} Syllabus</div>
            
            
            <div className='syllabusDescription'>
                All learning outcomes for the {data.year.name} substrand <strong>{data.name}</strong>are shown below. 
                
            </div>
            <div className='syllabusCategory'>
                    {category()}
            </div>
         </div>  
          <div  className='syllabusContainer'>
          <div className="yearContainer">
          {showAllYears()} 
          </div>
            <div className='syllabusContentHolder'>
              <div className='syllabusContentHolder__1'>
              
              {associated.foreword ? showForeword() : null
                }
                {associated.acknowledgement ? showAcknowledgement() : <React.Fragment>
                    {showSubstrand()} 
                    < div className="substrand_assessment">
                        <div><strong>Suggested Assessment Events</strong></div>
                        <div>
                            {assessment()}
                        </div>
                        <div></div>
                    </div>
                </React.Fragment>
                }
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
               
    
    </MainLayout>
  );
}

Substrand.getInitialProps = ({ query }) => {
    return singleSubstrand(query.slug).then((data) => {
        
        if (data.error) {
            console.log(data.error);
        } else {
            return {
                data
         
            };
        }
    });
};

export default withRouter(Substrand);