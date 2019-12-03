import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Footer2 from '../layout/Footer_2';
import { setAlert } from '../../actions/alert';
import { ForgotUserPassword } from '../../actions/user';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Alert from '../layout/Alert';

const ForgotPassword = ({ setAlert, ForgotUserPassword, isAuthenticated, errorMessage }) => {
  const [formData, setFormData] = useState({
    email: ''
  });

  const { email } = formData;
  const user = localStorage.getItem('user');
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // on submit form
  const onSubmit = async e => {
    e.preventDefault();
    if (!email) {
      setAlert('Please Enter Your Email!', 'danger');
    } else {
        ForgotUserPassword({ email });
    }
  };

  // Redirect user if not Authenticated
  // if (!isAuthenticated || !user) {
  //   return <Redirect to='/login-page1' />;
  // }

  return (
    <Fragment>
      {/* Paste this code after body tag */}
      {/* <div className='se-pre-con' /> */}
      {/* //Header Style One */}
      {/* login Content */}
      <div className='container-fuild'>
        <nav aria-label='breadcrumb'>
          <div className='container'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'>
                <Link to='#'>Home</Link>
              </li>
              <li className='breadcrumb-item active' aria-current='page'>
                Forgot Password
              </li>
            </ol>
          </div>
        </nav>
      </div>
      <section className='pro-content login-content'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='pro-heading-title'>
              <h1>Forgot Password</h1>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-12 col-sm-12 col-md-4 mb-5 px-0'>
              <Alert />
              <p>{errorMessage}</p>

              <div className='tab-content' id='registerTabContent'>
                <div className='tab-pane active'>
                  <div className='registration-process'>
                    <form onSubmit={e => onSubmit(e)}>
                      <div className='from-group mb-3'>
                        <div className='col-12'>
                          <label htmlFor='inlineFormInputGroup3'>
                            Your Email
                          </label>
                        </div>
                        <div className='input-group col-12'>
                          <input
                            type='Email'
                            className='form-control'
                            id='inlineFormInputGroup3'
                            placeholder='Enter Your Email'
                            name='email'
                            value={email}
                            onChange={e => onChange(e)}
                          />
                        </div>
                      </div>
                      <div className='col-12 col-sm-12'>
                        <button type="submit" className='btn btn-secondary swipe-to-top'>
                          Change
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='container'>
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
                lectus, eu rhoncus lacus dignissim et.{' '}
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



ForgotPassword.propTypes = {
  setAlert: PropTypes.func.isRequired,
  ForgotUserPassword: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  errorMessage: PropTypes.string
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  errorMessage: state.user.message
});

export default connect(
  mapStateToProps,
  { setAlert, ForgotUserPassword }
)(ForgotPassword);
