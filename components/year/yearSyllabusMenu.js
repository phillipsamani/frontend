import React, { useState, useEffect, Fragment } from 'react'
import Link from "next/link";
import { DropdownButton,Dropdown } from 'react-bootstrap'

import { getYearWithAllSubstrands } from "../../actions/year";

const YearButton = ({syllabus}) => {
  const [content, setContent] = useState([]);

    const showAllYears = () => {
        return syllabus.category.years?.map((year, i) => (
            <div key={i}  className="yearsHolder">
              <DropdownButton id="dropdown-item-button" title={year.name} onClick={() => yearSubstrands(year.slug)}>
                {showAllYearSubstrands()}
              </DropdownButton>
            </div>
        ));
    };

    const yearSubstrands = (slug) => {
      getYearWithAllSubstrands(slug, { syllabus }).then((data) => {
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

  return(
    <div className='yearContainer'>
      {showAllYears()}
    </div>
  )
};

export default YearButton;


