import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Footer2 from '../layout/Footer_2';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Alert from '../layout/Alert';

const Signup = ({ setAlert, register, isAuthenticated, errorMessage }) => {
  const [formData, setFormData] = useState({
    customers_firstname: '',
    customers_lastname: '',
    email: '',
    password: ''
  });

  const { customers_firstname, customers_lastname, email, password } = formData;
  const user = localStorage.getItem('user');
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // on submit form
  const onSubmit = async e => {
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

  // Redirect user if not Authenticated
  if (isAuthenticated || user) {
    return <Redirect to='/' />;
  }

  return (
    <Fragment>
      {/* Paste this code after body tag */}
      {/* <div className="se-pre-con" /> */}

      {/* login Content */}
      <div className='container-fuild'>
        <nav aria-label='breadcrumb'>
          <div className='container'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'>
                <Link to='#'>Home</Link>
              </li>
              <li className='breadcrumb-item active' aria-current='page'>
                Signup
              </li>
            </ol>
          </div>
        </nav>
      </div>
      <section className='pro-content login-content'>
        <div className='container'>
          <div className='row'>
            <div className='pro-heading-title'>
              <h1>Signup Page</h1>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-sm-12 col-md-4'>
              <Alert />
              <p>{errorMessage}</p>
              <div className='registration-process'>
                <h2>New Customer</h2>
                <form onSubmit={e => onSubmit(e)}>
                  <div className='from-group row mb-3'>
                    <div className='col-12'>
                      <label htmlFor='inlineFormInputGroup00'>First-name</label>
                    </div>
                    <div className='input-group col-12'>
                      <input
                        type='text'
                        className='form-control'
                        id='inlineFormInputGroup00'
                        placeholder='Enter Your Fullname'
                        name='customers_firstname'
                        value={customers_firstname}
                        onChange={e => onChange(e)}
                      />
                    </div>
                  </div>
                  <div className='from-group row mb-3'>
                    <div className='col-12'>
                      <label htmlFor='inlineFormInputGroup00'>Last-name</label>
                    </div>
                    <div className='input-group col-12'>
                      <input
                        type='text'
                        className='form-control'
                        id='inlineFormInputGroup00'
                        placeholder='Enter Your Lastname'
                        name='customers_lastname'
                        value={customers_lastname}
                        onChange={e => onChange(e)}
                      />
                    </div>
                  </div>
                  <div className='from-group row mb-3'>
                    <div className='col-12'>
                      <label htmlFor='inlineFormInputGroup0'>Email</label>
                    </div>
                    <div className='input-group col-12'>
                      <input
                        type='email'
                        className='form-control'
                        id='inlineFormInputGroup0'
                        placeholder='Enter Your Email'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                      />
                    </div>
                  </div>
                  <div className='from-group row mb-3'>
                    <div className='col-12'>
                      <label htmlFor='inlineFormInputGroup1'>Password</label>
                    </div>
                    <div className='input-group col-12'>
                      <input
                        type='password'
                        className='form-control'
                        id='inlineFormInputGroup1'
                        placeholder='Enter Your Password'
                        name='password'
                        value={password}
                        onChange={e => onChange(e)}
                      />
                    </div>
                  </div>
                  <div className='from-group'>
                    <button type='submit' className='btn btn-secondary'>
                      Create Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className='col-12 col-sm-12 col-md-8'>
              <h2>Already Registered?</h2>
              <div className='registration-process'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  vitae viverra nibh. Etiam a arcu sed mi suscipit rutrum. Sed a
                  lorem pellentesque, dignissim risus in, feugiat ipsum. Nulla
                  laoreet faucibus velit eget iaculis. Vivamus porttitor diam
                  lectus, eu rhoncus lacus dignissim et.
                </p>
                <form>
                  <div className='from-group'>
                    <Link
                      to='/login-page1'
                      className='btn btn-light swipe-to-top'
                    >
                      Login
                    </Link>
                  </div>
                </form>
              </div>
            </div>
            <div className='col-12 col-sm-12 my-5'>
              <div className='registration-socials'>
                <p className='mb-3 text-center'>
                  Access Your Account Through Your Social Networks
                </p>
                <div className='from-group'>
                  <button type='button' className='btn btn-google swipe-to-top'>
                    <i className='fab fa-google-plus-g' />
                    &nbsp;Google
                  </button>
                  <button
                    type='button'
                    className='btn btn-facebook swipe-to-top'
                  >
                    <i className='fab fa-facebook-f' />
                    &nbsp;Facebook
                  </button>
                  <button
                    type='button'
                    className='btn btn-twitter swipe-to-top'
                  >
                    <i className='fab fa-twitter' />
                    &nbsp;Twitter
                  </button>
                </div>
              </div>
              <p>
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
Signup.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  errorMessage: PropTypes.string
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  errorMessage: state.auth.error
});

export default connect(mapStateToProps, { setAlert, register })(Signup);
