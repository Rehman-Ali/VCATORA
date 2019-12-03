import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Footer2 from './layout/Footer_2';

const NotFound = () => {
  return (
    <Fragment>
      {/* Paste this code after body tag */}
      {/* <div className="se-pre-con"></div> */}
      {/* //Header Style One */}
      {/* About-us Content */}
      <section className='empty-content'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='pro-empty-page'>
                <h2>Error 404...</h2>
                <h1>Page Not Found</h1>
                <p>
                  We looked everywhere for this page. Are you sure the website
                  URL is correct? Go to the{' '}
                  <strong>
                    <Link to='/index' className='btn-link'>
                      main page
                    </Link>
                  </strong>{' '}
                  or select suitable category.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Mobile */}
      <Footer2/>
    </Fragment>
  );
};

export default NotFound;
