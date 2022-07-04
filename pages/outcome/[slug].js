import React, { useState, useEffect, Fragment } from 'react'
import renderHTML from "react-render-html";
import { DropdownButton,Dropdown } from 'react-bootstrap'
import Link from "next/link";

import MainLayout from "../../components/layout/MainLayout";
import { singleOutcome, listRelatedOutcomes, getYearSubstrands } from "../../actions/outcome";
import { getYearsWithAllSubstrands } from "../../actions/year";
import { getCategories } from "../../actions/category";

const LearningOutcome = ({data}) => {
  const [content, setContent] = useState([]);
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
            <div key={i} className='syllabusCategoryTextContainer'>
                <Link href="/category/[slug]" as={`/category/${c.slug}`} >
                    <a className='btn btn-primary syllabusCategoryText'>{c.name} Syllabuses</a>
                </Link>
            </div>
        )
    })
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

    return (
      <MainLayout>
       <div>
        <div className='syllabusContainerHolder'>
            <div className='syllabusText'>{data.subject.name} Syllabus</div>
            
            
            <div className='syllabusDescription'>
              {data.year.name}<br/>
               Substrand: {data.substrand.name}
              
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
              
              {/* {associated.foreword ? showForeword() : null
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
                {associated.aim ? showAim() : null} */}
                 <div>{renderHTML(data.general)}</div>
                 <div>{renderHTML(data.indicators)}</div>
                 
                 {JSON.stringify(data)}
              </div>
              <div className='syllabusContentHolder__2'>
                <div className='syllabusContentHolder__2__toc'>Other <strong>{data.substrand.name}</strong> Outcomes</div> 
                <div></div>
              </div>
            </div>
          </div>
        
          
         
        </div>  
               
      </MainLayout>
    );
  }
  
  LearningOutcome.getInitialProps = ({ query }) => {
    return singleOutcome(query.slug).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        return {
          data
        };
      }
    });
  };

  export default LearningOutcome;          