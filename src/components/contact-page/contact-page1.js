import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { loadScript } from '../utils/loadScripts';
import Footer2 from '../layout/Footer_2';
import { setAlert } from '../../actions/alert';
import { contactUsPage } from '../../actions/user';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Alert from '../layout/Alert';

const ContactPage1 = ({
  setAlert,
  contactUsPage,
  isAuthenticated,
  errorMessage
}) => {
  useEffect(() => {
    loadScript();
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const { name, email, message } = formData;
  //const user = localStorage.getItem('user');
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // on submit form
  const onSubmit = async e => {
    e.preventDefault();
    if (!name) {
      setAlert('Please Enter Your Name!', 'danger');
    } else if (!email) {
      setAlert('Please Enter Your Email!', 'danger');
    } else if (!message) {
      setAlert('Please Enter Your Message!', 'danger');
    } else {
      contactUsPage({ name, email, message });
    }

    setTimeout(() => setFormData({ name: '', email: '', message: '' }), 5000);
  };

  //render() {
  return (
    <Fragment>
      {/* Paste this code after body tag */}
      {/* <div className="se-pre-con" /> */}

      {/* contact Content */}
      <div className='container-fuild'>
        <div id='map' style={{ height: 400, margin: '0 auto' }}></div>
      </div>
      <section className='pro-content contact-content'>
        <div className='container'>
          <div className='row'>
            <div className='pro-heading-title'>
              <h1>Contact</h1>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-lg-9'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Alert />
              <p>{errorMessage}</p>

              <form onSubmit={e => onSubmit(e)}>
                <div className='form-group row'>
                  <div className='col-sm-6'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Name'
                      name='name'
                      value={name}
                      onChange={e => onChange(e)}
                    />
                  </div>
                  <div className='col-sm-6'>
                    <input
                      type='email'
                      className='form-control'
                      placeholder='Email'
                      name='email'
                      value={email}
                      onChange={e => onChange(e)}
                    />
                  </div>
                </div>
                {/* <div className='form-group row'>
                    <div className='col-sm-6'>
                      <input
                        type='text'
                        name='phone'
                        className='form-control'
                        placeholder='Phone'
                      />
                    </div>
                    <div className='col-sm-6'>
                      <input
                        type='text'
                        name='subject'
                        className='form-control'
                        placeholder='Subject'
                      />
                    </div>
                  </div> */}
                <div className='form-group row'>
                  <div className='col-sm-12'>
                    <textarea
                      className='form-control'
                      name='message'
                      placeholder='Message'
                      rows={5}
                      cols={56}
                      value={message}
                      onChange={e => onChange(e)}
                    />
                  </div>
                </div>
                <button
                  type='submit'
                  className='btn btn-secondary mb-3 swipe-to-top'
                >
                  Send
                </button>
                <div
                  id='alert-box'
                  className='alert alert-success alert-dismissible'
                  role='alert'
                >
                  <div id='alert-msg' />
                  <button
                    type='button'
                    className='close'
                    data-dismiss='alert'
                    aria-label='Close'
                  >
                    <span aria-hidden='true'>×</span>
                  </button>
                </div>
              </form>
            </div>
            <div className='col-12 col-lg-3'>
              <ul className='contact-info pl-0 mb-0'>
                <li>
                  {' '}
                  <i className='fas fa-mobile-alt' />
                  <span>
                    888-9636-6000
                    <br /> 888-9636-6000
                  </span>{' '}
                </li>
                <li>
                  {' '}
                  <i className='fas fa-map-marker' />
                  <span>
                    Katora
                    <br />
                    Demo Store 3654123
                  </span>{' '}
                </li>
                <li>
                  {' '}
                  <i className='fas fa-envelope' />
                  <span>
                    Support@example.com
                    <br />
                    info@example.com
                  </span>{' '}
                </li>
                <li>
                  {' '}
                  <i className='fas fa-tty' />
                  <span>
                    23456789
                    <br />
                    123456
                  </span>{' '}
                </li>
              </ul>
              <div className='pro-socials'>
                <h4>Follow Us</h4>
                <ul>
                  <li>
                    <Link to='#' className='fab fb fa-facebook-square' />
                  </li>
                  <li>
                    <Link to='#' className='fab tw fa-twitter-square' />
                  </li>
                  <li>
                    <Link to='#' className='fab sk fa-skype' />
                  </li>
                  <li>
                    <Link to='#' className='fab ln fa-linkedin' />
                  </li>
                  <li>
                    <Link to='#' className='fab ig fa-instagram' />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer Mobile */}
      <Footer2 />
    </Fragment>
  );
};
//}

ContactPage1.propTypes = {
  setAlert: PropTypes.func.isRequired,
  contactUsPage: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  errorMessage: PropTypes.string
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  errorMessage: state.user.message
});

export default connect(mapStateToProps, { setAlert, contactUsPage })(
  ContactPage1
);
