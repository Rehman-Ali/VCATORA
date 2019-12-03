import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Footer2 from './layout/Footer_2';
const Compare = () => {
  return (
    <Fragment>
      {/* Paste this code after body tag */}
      {/* <div className="se-pre-con" /> */}
           {/* Compare Content */}
      <div className='container-fuild'>
        <nav aria-label='breadcrumb'>
          <div className='container'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'>
                <Link to='#'>Home</Link>
              </li>
              <li className='breadcrumb-item active' aria-current='page'>
                Compare
              </li>
            </ol>
          </div>
        </nav>
      </div>
      <section className='pro-content compare-content'>
        <div className='container'>
          <div className='row'>
            <div className='pro-heading-title'>
              <h1>Compare Products Overview</h1>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-md-6'>
              <table className='table'>
                <thead>
                  <tr>
                    <td>
                      <div className='img-div'>
                        <img
                          className='img-fluid'
                          src='images/compare/compare_1.jpg'
                          alt='Product'
                        />
                      </div>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <h4>Austrian Crystals Jewelry Ring</h4>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Price&nbsp;:&nbsp;</span>
                      <span className='price-tag'>$285</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Color&nbsp;:&nbsp;</span>Gold Daimond
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Size&nbsp;:&nbsp;</span>28
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Type&nbsp;:&nbsp;</span>Rings
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='detail-buttons'>
                        <Link
                          to='/product-page1'
                          className='btn btn-secondary swipe-to-top'
                        >
                          View Details
                        </Link>
                        <div className='share'>
                          <Link to='#'>
                            Share &nbsp;
                            <i className='fas fa-share' />
                          </Link>{' '}
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='col-12 col-md-6'>
              <table className='table'>
                <thead>
                  <tr>
                    <td>
                      <div className='img-div'>
                        <img
                          className='img-fluid'
                          src='images/compare/compare_2.jpg'
                          alt='Product'
                        />
                      </div>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <h4>Crytal Wedding Engagement Rings</h4>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Price&nbsp;:&nbsp;</span>
                      <span className='price-tag'>$85</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Color&nbsp;:&nbsp;</span>Gold Crystal
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Size&nbsp;:&nbsp;</span>26
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Type&nbsp;:&nbsp;</span>Rings
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='detail-buttons'>
                        <Link
                          to='/product-page1'
                          className='btn btn-secondary swipe-to-top'
                        >
                          View Details
                        </Link>
                        <div className='share'>
                          <Link to='#'>
                            Share &nbsp;
                            <i className='fas fa-share' />
                          </Link>{' '}
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      {/* Footer Mobile */}
      <Footer2/>
    </Fragment>
  );
};

export default Compare;
