import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Footer2 from '../layout/Footer_2';
import { setAlert } from '../../actions/alert';
import { updateUserInfo } from '../../actions/user';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Alert from '../layout/Alert';

const Profile = ({
  setAlert,
  updateUserInfo,
  isAuthenticated,
  errorMessage
}) => {
  // get user data from localhost
  const user = JSON.parse(localStorage.getItem('user'));

  const [formData, setFormData] = useState({
    customers_id: user.id,
    customers_firstname: user.first_name,
    customers_lastname: user.last_name,
    customers_gender: user.gender,
    email: user.email,
    customers_telephone: user.phone
  });

  const {
    customers_id,
    customers_firstname,
    customers_lastname,
    email,
    customers_telephone,
    customers_gender
  } = formData;

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
    } else {
      updateUserInfo({
        customers_id,
        customers_firstname,
        customers_lastname,
        email,
        customers_gender,
        customers_telephone
      });
    }
  };

  // Redirect user if not Authenticated
  // if (isAuthenticated || user) {
  //   return <Redirect to='/' />;
  // }

  return (
    <Fragment>
      {/* Paste this code after body tag */}
      {/* <div className="se-pre-con" /> */}
      {/* //Header Style One */}
      {/* Profile Content */}
      <div className='container-fuild'>
        <nav aria-label='breadcrumb'>
          <div className='container'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'>
                <Link to='#'>Home</Link>
              </li>
              <li className='breadcrumb-item active' aria-current='page'>
                Profile
              </li>
            </ol>
          </div>
        </nav>
      </div>
      <section className='pro-content profile-content'>
        <div className='container '>
          <div className='row'>
            <div className='pro-heading-title'>
              <h1>Profile Page</h1>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <div className='media'>
                <img
                  src='assets/images/miscellaneous/avatar.jpg'
                  alt='avatar'
                />
                <div className='media-body'>
                  <h5 className='mt-0'> {user.first_name}</h5>
                  <p>
                    E-mail:<Link to='#'> {user.email}</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='row '>
            <div className=' col-12 col-lg-3'>
              <ul className='list-group mb-4'>
                <li className='list-group-item'>
                  <Link className='nav-link' to='/profile'>
                    <i className='fas fa-user' />
                    Profile
                  </Link>
                </li>
                <li className='list-group-item'>
                  <Link className='nav-link' to='/wishlist'>
                    <i className='fas fa-heart' />
                    Wishlist
                  </Link>
                </li>
                <li className='list-group-item'>
                  <Link className='nav-link' to='/orders'>
                    <i className='fas fa-shopping-cart' />
                    Orders
                  </Link>
                </li>
                <li className='list-group-item'>
                  <Link className='nav-link' to='/shipping-address'>
                    <i className='fas fa-map-marker-alt' />
                    Shipping Address
                  </Link>
                </li>
                <li className='list-group-item'>
                  <Link className='nav-link' to='#'>
                    <i className='fas fa-power-off' />
                    Logout
                  </Link>
                </li>
                <li className='list-group-item'>
                  <Link className='nav-link' to='/change-password'>
                    <i className='fas fa-unlock-alt' />
                    Change Password
                  </Link>
                </li>
              </ul>
            </div>
            <div className='col-12 col-lg-9 '>
              <Alert />
              <p>{errorMessage}</p>

              <form onSubmit={e => onSubmit(e)}>
                <div className='row'>
                  <div className='col-12 col-md-7'>
                    <div className='from-group row mb-3'>
                      <div className='col-12'>
                        <input
                          type='hidden'
                          name='customers_id'
                          value={customers_id}
                        />
                        <label htmlFor='inlineFormInputGroup0'>
                          First Name
                        </label>
                      </div>
                      <div className='input-group col-12'>
                        <input
                          type='text'
                          className='form-control'
                          id='inlineFormInputGroup0'
                          placeholder='Enter Your First Name'
                          name='customers_firstname'
                          value={customers_firstname}
                          onChange={e => onChange(e)}
                        />
                      </div>
                    </div>
                    <div className='from-group row mb-3'>
                      <div className='col-12'>
                        <label htmlFor='inlineFormInputGroup1'>Last Name</label>
                      </div>
                      <div className='input-group col-12'>
                        <input
                          type='text'
                          className='form-control'
                          id='inlineFormInputGroup1'
                          placeholder='Enter Your Last Name'
                          name='customers_lastname'
                          value={customers_lastname}
                          onChange={e => onChange(e)}
                        />
                      </div>
                    </div>
                    <div className='from-group row mb-3'>
                      <div className='col-12'>
                        <label htmlFor='inlineFormInputGroup2'>Email</label>
                      </div>
                      <div className='input-group col-12'>
                        <input
                          type='email'
                          className='form-control'
                          id='inlineFormInputGroup2'
                          placeholder='Enter Your Email'
                          name='email'
                          value={email}
                          //onChange={e => onChange(e)}
                        />
                      </div>
                    </div>
                    <div className='from-group row mb-3'>
                      <div className='col-12'>
                        <label htmlFor='inlineFormInputGroup3'>Gender</label>
                      </div>
                      <div className='input-group col-12'>
                        <select
                          className='form-control'
                          id='inlineFormInputGroup3'
                          name='customers_gender'
                          value={customers_gender}
                          onChange={e => onChange(e)}
                        >
                          {
                            (user.gender = 'null' ? (
                              <>
                                <option selected>Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                              </>
                            ) : (
                              <>
                                {user.gender === 'male' &&
                                !user.gender === 'null' ? (
                                  <>
                                    <option selected>Male</option>
                                    <option>Female</option>
                                  </>
                                ) : (
                                  <>
                                    <option>Male</option>
                                    <option selected>Female</option>
                                  </>
                                )}
                              </>
                            ))
                          }
                        </select>
                      </div>
                    </div>
                    <div className='from-group row mb-3'>
                      <div className='col-12'>
                        <label htmlFor='inlineFormInputGroup4'>Phone</label>
                      </div>
                      <div className='input-group col-12'>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='Enter your phone number'
                          id='inlineFormInputGroup4'
                          name='customers_telephone'
                          value={customers_telephone}
                          onChange={e => onChange(e)}
                        />
                      </div>
                    </div>
                    <button
                      type='submit'
                      className='btn btn-secondary mt-3 swipe-to-top'
                    >
                      Update
                    </button>
                  </div>
                  <div className='col-12 col-md-5'>
                    <ul>
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </li>
                      <li>
                        Aliquam ac mi ultricies, congue ex vel, aliquam nisi.
                      </li>
                      <li>
                        Cras ultrices felis at elit luctus, eget venenatis lacus
                        luctus. Cras vel nisl non ligula euismod elementum.
                      </li>
                      <li>
                        Curabitur volutpat risus ornare justo eleifend, id
                        imperdiet neque iaculis. Etiam sagittis eros id rhoncus
                        bibendum. Phasellus et arcu in magna congue fermentum.
                      </li>
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </li>
                    </ul>
                  </div>
                </div>
              </form>
              {/* ............the end..... */}
            </div>
          </div>
        </div>
      </section>
      {/* Footer Mobile */}
      <Footer2 />
    </Fragment>
  );
};


Profile.propTypes = {
  setAlert: PropTypes.func.isRequired,
  updateUserInfo: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  errorMessage: PropTypes.string
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  errorMessage: state.user.message
});

export default connect(
  mapStateToProps,
  { setAlert, updateUserInfo }
)(Profile);


