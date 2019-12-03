import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer2 from './layout/Footer_2';
import { loadScript } from '../components/utils/loadScripts';
const Thankyou = () => {
  useEffect(() => {
    loadScript();
  }, []);
  return (
    <Fragment>
      {/* Paste this code after body tag */}
      {/* <div className="se-pre-con" /> */}
      {/* //Header Style One */}
      {/* About-us Content */}
      <section className='empty-content'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='pro-empty-page'>
                <h2 style={{ fontSize: 150 }}>
                  <i className='far fa-check-circle' />
                </h2>
                <h1>Thank You</h1>
                <p>
                  You have successfully place your order. Your order id is
                  354365G4. Go to the{' '}
                  <Link to='/order-detail' className='btn-link'>
                    <b>Order page</b>
                  </Link>
                  .
                </p>
              </div>
              <p />
            </div>
          </div>
        </div>
      </section>
      {/* Footer Mobile */}
      <Footer2 />
    </Fragment>
  );
};

export default Thankyou;
