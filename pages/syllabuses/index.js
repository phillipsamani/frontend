import React, { useState, useEffect, Fragment } from 'react'
import Link from "next/link";
import renderHTML from "react-render-html";
import { AiOutlineHeatMap, AiOutlineInsertRowLeft } from 'react-icons/ai';
import { FaPhone, FaPeriscope, FaRegEnvelope } from "react-icons/fa";
import Image from 'next/image'
import MainLayout from "../../components/layout/MainLayout";
// import SyllabusMainLayout from '../../components/home/SyllabusMainLayout'

import { getSyllabuses } from '../../actions/syllabus'
import { getCategories } from "../../actions/category";

const Syllabuses = () => {
  const [allCategories, setAllCategories] = useState([])
  const [allSyllabuses, setAllSyllabuses] = useState([])

  const initCategories = () => {
      getCategories({}).then((data) => {
          if (data.error) {
              console.log(data.error);
          } else {
              setAllCategories(data)
          }
      })
    }

    const initSyllabuses = () => {
        getSyllabuses({}).then((data) => {
            if (data.error) {
                console.log(data.error);
            } else {
                setAllSyllabuses(data)
            }
        })
    }

    useEffect(() => {
        initCategories();
        initSyllabuses();

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
    return allSyllabuses.map((s, i) => {
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
      <Fragment>
        <MainLayout>
          <div>
            <div className='syllabusMainContainer '>
              <div className='syllabusContainerSidebar'>
                <div className='sidebarContents'>
                            <div className='sidebarLogo'>
                            <div className="logoHead">
                                <div><Image src="/coat-of-arm.png" alt="logo" height={80} width={80}/></div>
                            </div>
                                <p className='sidebarCoatText'>Solomon Islands <br />Goverment</p>
                            </div>
                            <div className='sidebarMehrdContainer'>
                                <div><p>Ministry of Education and Human Resource Development</p></div>
                            </div>
                            <div className='sidebarMehrdBoxContainer'>
                                <div className='sidebarMehrdImage__1'>
                                    <div><FaPeriscope /></div>
                                </div>
                                <div><p>P.O.Box G28, <br />Honiara,<br />Solomon Islands</p></div>
                            </div>
                            <div className='sidebarMehrdContactContainer'>
                                <div className='sidebarMehrdImage__2'>
                                    <div><FaPhone /></div>
                                </div>
                                <div><p>Fax: <br />(677) 22042,<br />Phone: <br /> (677) 28803 | 28804 | 24664</p></div>
                            </div>
                            <div className='sidebarMehrdEmailContainer'>
                                <div className='sidebarMehrdImage__3'>
                                    <div><FaRegEnvelope /></div>
                                </div>
                                <div><p>Email: <br /> psamani.mehrd.gov.sb</p></div>
                            </div>
                  </div>
              </div>
              <div className='syllabusContainerContent'>
                <div>
                    <div className='syllabusHeadingContainer'>
                      <div className='syllabusHeading'>
                        <div><h2>All Syllabuses</h2></div>
                        
                        <div className='syllabusDescription'>Solomon Islands Ministry of Education and Human Resource Development school standards documents are given below.</div>
                        <div className='syllabusCategory'>{category()}</div>
                      </div>
                      
                    </div>
                </div>
                <div>
                  <div>{syllabusCard()}</div>
                  
                </div>
              </div>
            </div>
          </div>
        </MainLayout>
      </Fragment>
    );
  }
  
  export default Syllabuses;