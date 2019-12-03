import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Footer2 from '../../layout/Footer_2';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../../actions/auth';
import { setAlert } from '../../../actions/alert';
import Alert from '../../layout/Alert';

const LoginPage1 = ({ login, isAuthenticated, errorMessage, setAlert }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;
  const user = localStorage.getItem('user');

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // on submit form
  const onSubmit = async e => {
    e.preventDefault();
    if (!email) {
      setAlert('Please Enter Your Email!', 'danger');
    } else if (!password) {
      setAlert('Please Enter Your Password!', 'danger');
    } else {
      login(email, password);
    }
  };

  // Redirect user if not authenticated
  if (isAuthenticated || user) {
    return <Redirect to='/' />;
  }

  return (
    <Fragment>
      {/* Paste this code after body tag */}
      {/* <div className='se-pre-con' /> */}
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
          <div className='row'>
            <div className='pro-heading-title'>
              <h1>Login Page</h1>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-sm-12 col-md-4'>
              <Alert />
              <p>{errorMessage}</p>

              <div className='registration-process'>
                <h2>Already Registered?</h2>
                <form onSubmit={e => onSubmit(e)}>
                  <div className='from-group row mb-3'>
                    <div className='col-12'>
                      <label htmlFor='inlineFormInputGroup0'>
                        Username or Email
                      </label>
                    </div>
                    <div className='input-group col-12'>
                      <input
                        type='email'
                        name='email'
                        className='form-control'
                        id='inlineFormInputGroup0'
                        placeholder='Enter Your Email or Username'
                        value={email}
                        onChange={e => onChange(e)}
                        required
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
                        name='password'
                        className='form-control'
                        id='inlineFormInputGroup1'
                        placeholder='Enter Your Password'
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='6'
                      />
                    </div>
                  </div>
                  <div className='from-group'>
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
            <div className='col-12 col-sm-12 col-md-8'>
              <h2>New Customer</h2>
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
                    <Link to='/signup' className='btn btn-light swipe-to-top'>
                      Create an Account
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

LoginPage1.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  setAlert: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  errorMessage: state.auth.error
});

export default connect(mapStateToProps, { login, setAlert })(LoginPage1);
