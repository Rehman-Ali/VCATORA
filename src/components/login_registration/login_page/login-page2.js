import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Footer2 from '../../layout/Footer_2';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login, register } from '../../../actions/auth';
import { setAlert } from '../../../actions/alert';
import Alert from '../../layout/Alert';

const LoginPage2 = ({
  login,
  isAuthenticated,
  errorMessage,
  setAlert,
  register
}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    customers_firstname: '',
    customers_lastname: ''
  });

  const { email, password, customers_firstname, customers_lastname } = formData;
  const user = localStorage.getItem('user');

  // onChange call
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // on login form submit
  const onSubmitLoginForm = async e => {
    e.preventDefault();
    if (!email) {
      setAlert('Please Enter Your Email!', 'danger');
    } else if (!password) {
      setAlert('Please Enter Your Password!', 'danger');
    } else {
      login(email, password);
    }
  };
  // on signup form submit
  const onSubmitSignupForm = async e => {
    e.preventDefault();
    if (!customers_firstname) {
      setAlert('Please Enter Your First Name!', 'danger');
    } else if (!customers_lastname) {
      setAlert('Please Enter Your Last Name!', 'danger');
    } else if (!email) {
      setAlert('Please Enter Your Email!', 'danger');
    } else if (!password) {
      setAlert('Please Enter Your Passowrd', 'danger');
    } else {
      register({ customers_firstname, customers_lastname, email, password });
    }
  };

  // redirect if user is not authenticate
  if (isAuthenticated || user) {
    return <Redirect to='/' />;
  }

  return (
    <Fragment>
      {/* Paste this code after body tag */}
      {/*   <div className="se-pre-con" /> */}
      {/* login Content */}
      <div className='container-fuild'>
        <nav aria-label='breadcrumb'>
          <div className='container'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'>
                <Link to='#'>Home</Link>
              </li>
              <li className='breadcrumb-item active' aria-current='page'>
                Login
              </li>
            </ol>
          </div>
        </nav>
      </div>
      <section className='pro-content login-content'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='pro-heading-title'>
              <h1>Login Page</h1>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-12 col-sm-12 col-md-4 mb-5 px-0'>
              <Alert />
              <p>{errorMessage}</p>

              <ul className='nav nav-tabs' id='registerTab' role='tablist'>
                <li className='nav-item'>
                  <a
                    className='nav-link active'
                    id='login-tab'
                    data-toggle='tab'
                    href='#login'
                    role='tab'
                    aria-controls='login'
                    aria-selected='true'
                  >
                    Login
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link'
                    id='signup-tab'
                    data-toggle='tab'
                    href='#signup'
                    role='tab'
                    aria-controls='signup'
                    aria-selected='false'
                  >
                    New Customer
                  </a>
                </li>
              </ul>
              <div className='tab-content' id='registerTabContent'>
                <div
                  className='tab-pane fade show active'
                  id='login'
                  role='tabpanel'
                  aria-labelledby='login-tab'
                >
                  <div className='registration-process'>
                    <form onSubmit={e => onSubmitLoginForm(e)}>
                      <div className='from-group mb-3'>
                        <div className='col-12'>
                          <label htmlFor='inlineFormInputGroup2'>
                            Username or Email
                          </label>
                        </div>
                        <div className='input-group col-12'>
                          <input
                            type='email'
                            name='email'
                            className='form-control'
                            id='inlineFormInputGroup2'
                            placeholder='Enter Your Username or Email'
                            value={email}
                            onChange={e => onChange(e)}
                            required
                          />
                        </div>
                      </div>
                      <div className='from-group mb-3'>
                        <div className='col-12'>
                          <label htmlFor='inlineFormInputGroup3'>
                            Password
                          </label>
                        </div>
                        <div className='input-group col-12'>
                          <input
                            type='password'
                            name='password'
                            className='form-control'
                            id='inlineFormInputGroup3'
                            placeholder='Enter Your Password'
                            value={password}
                            onChange={e => onChange(e)}
                            minLength='6'
                          />
                        </div>
                      </div>
                      <div className='col-12 col-sm-12'>
                        <button
                          type='submit'
                          className='btn btn-secondary swipe-to-top'
                        >
                          Login
                        </button>
                        <Link to='/forgot-password' className='btn btn-link'>
                          Forgot Password
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  className='tab-pane fade'
                  id='signup'
                  role='tabpanel'
                  aria-labelledby='signup-tab'
                >
                  <div className='registration-process'>
                    <form onSubmit={e => onSubmitSignupForm(e)}>
                      <div className='from-group  mb-3'>
                        <div className='col-12'>
                          <label htmlFor='inlineFormInputGroup4'>
                            Fullname
                          </label>
                        </div>
                        <div className='input-group col-12'>
                          <input
                            type='text'
                            className='form-control'
                            id='inlineFormInputGroup4'
                            placeholder='Enter Your First-name'
                            name='customers_firstname'
                            value={customers_firstname}
                            onChange={e => onChange(e)}
                          />
                        </div>
                      </div>
                      <div className='from-group  mb-3'>
                        <div className='col-12'>
                          <label htmlFor='inlineFormInputGroup4'>
                            Lastname
                          </label>
                        </div>
                        <div className='input-group col-12'>
                          <input
                            type='text'
                            className='form-control'
                            id='inlineFormInputGroup4'
                            placeholder='Enter Your Last-name'
                            name='customers_lastname'
                            value={customers_lastname}
                            onChange={e => onChange(e)}
                          />
                        </div>
                      </div>
                      <div className='from-group mb-3'>
                        <div className='col-12'>
                          <label htmlFor='inlineFormInputGroup5'>
                            Email Address
                          </label>
                        </div>
                        <div className='input-group col-12'>
                          <input
                            type='email'
                            className='form-control'
                            id='inlineFormInputGroup5'
                            placeholder='Enter Your Username or Email'
                            name='email'
                            value={email}
                            onChange={e => onChange(e)}
                          />
                        </div>
                      </div>
                      <div className='from-group mb-3'>
                        <div className='col-12'>
                          <label htmlFor='inlineFormInputGroup6'>
                            Password
                          </label>
                        </div>
                        <div className='input-group col-12'>
                          <input
                            type='password'
                            className='form-control'
                            id='inlineFormInputGroup6'
                            placeholder='Enter Your Password'
                            name='password'
                            value={password}
                            onChange={e => onChange(e)}
                          />
                        </div>
                      </div>
                      <div className='from-group'>
                        <div className='col-12'>
                          <button
                            type='submit'
                            className='btn btn-light swipe-to-top'
                          >
                            Create Account
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='registration-socials'>
              <p className='mb-3 text-center'>
                Access Your Account Through Your Social Networks
              </p>
              <div className='from-group'>
                <button type='button' className='btn btn-google swipe-to-top'>
                  <i className='fab fa-google-plus-g' />
                  &nbsp;Google
                </button>
                <button type='button' className='btn btn-facebook swipe-to-top'>
                  <i className='fab fa-facebook-f' />
                  &nbsp;Facebook
                </button>
                <button type='button' className='btn btn-twitter swipe-to-top'>
                  <i className='fab fa-twitter' />
                  &nbsp;Twitter
                </button>
              </div>
            </div>
            <div className='col-12'>
              <p className='mt-3'>
                *Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vitae viverra nibh. Etiam a arcu sed mi suscipit rutrum. Sed a
                lorem pellentesque, dignissim risus in, feugiat ipsum. Nulla
                laoreet faucibus velit eget iaculis. Vivamus porttitor diam
                lectus, eu rhoncus lacus dignissim et.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Footer Mobile */}
      <Footer2 />
    </Fragment>
  );
};

LoginPage2.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  errorMessage: state.auth.error
});

export default connect(mapStateToProps, { login, setAlert, register })(
  LoginPage2
);
