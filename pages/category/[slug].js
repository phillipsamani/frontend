import React, { useState, useEffect, Fragment } from 'react'
import { withRouter } from "next/router";
import Link from "next/link";
import renderHTML from "react-render-html";
import Image from 'next/image'

import MainLayout from "../../components/layout/MainLayout";
import GuidesMainLayout from '../../components/home/GuidesMainLayout'
import { singleCategory, getCategories } from '../../actions/category'

const CategorySlug = ({data}) => {
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

const syllabusCard = () => {
  return data.data.map((s, i) => {
      return (
          /// bootstrap card ///
          <div key={i} className="card syllabusCard" style={{width: "18rem" }} >
              <Image src="/coat-of-arm.png" alt="logo" height={100} width={100}/>
              <div className="card-body">
                  <h5 className="card-title">{s.subject.name} Syllabus</h5>
                  <p className="card-text">{renderHTML(s.description)}</p>
                  <Link href="/syllabus/[slug]" as={`/syllabus/${s.slug}`}>
                      <a className='btn btn-primary stretchContent'>View Syllabus</a>
                  </Link>
              </div>
          </div>
      )
  })
}


    return (
      <MainLayout>
       
        <div>
          <div className='syllabusContainerHolder'>
            <div>
              <div className='syllabusText'>{data.category.name} Syllabuses</div>              
              <div className='syllabusDescription'>
                 {data.category.description}               
              </div>
              <div className='syllabusCategory'>
                  {category()}
              </div>
            </div>
            
          </div>
          <div className="categoryContent">
            {syllabusCard()}
             
            </div>
          
        </div>
        
      </MainLayout>
    );
  }

  CategorySlug.getInitialProps = ({ query }) => {
    return singleCategory(query.slug).then((data) => {
        
        if (data.error) {
            console.log(data.error);
        } else {
            return {
              data
         
            };
        }
    });
};
  
  export default withRouter(CategorySlug);