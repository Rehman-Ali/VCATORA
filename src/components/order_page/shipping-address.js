import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Footer2 from '../layout/Footer_2';
const ShippingAddress = () => {
  return (
    <Fragment>
      {/* Paste this code after body tag */}
      {/* <div className="se-pre-con" /> */}
      {/* //Header Style One */}
      {/*Shipping Content */}
      <div className='container-fuild'>
        <nav aria-label='breadcrumb'>
          <div className='container'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'>
                <Link to='#'>Home</Link>
              </li>
              <li className='breadcrumb-item active' aria-current='page'>
                Shipping Address
              </li>
            </ol>
          </div>
        </nav>
      </div>
      <section className='pro-content shipping-content'>
        <div className='container'>
          <div className='row'>
            <div className='pro-heading-title'>
              <h1>Shipping Address</h1>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-lg-3'>
              <ul className='list-group'>
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
              {/* <table className='table'>
                <thead>
                  <tr>
                    <th scope='col'>DEFAULT ADDRESS</th>
                    <th scope='col'>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className='form-check'>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='exampleRadios'
                          id='exampleRadios1'
                          defaultValue='option1'
                        />
                        <label
                          className='form-check-label'
                          htmlFor='exampleRadios1'
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </label>
                      </div>
                    </td>
                    <td className='controls'>
                      <ul>
                        <li>
                          <Link to='#'>
                            {' '}
                            <i className='fas fa-pen' /> Edit
                          </Link>
                        </li>
                        <li>
                          <Link to='#'>
                            {' '}
                            <i className='fas fa-trash-alt' /> Remove
                          </Link>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table> */}
              <div className='add-address'>
                <form action='/' name='general-form'>
                  <h4>Personal Information</h4>
                  <div className='form-row'>
                    <div className='from-group col-md-6 mb-3'>
                      <label htmlFor='inlineFormInputGroup0'>First Name</label>
                      <div className='input-group '>
                        <input
                          type='text'
                          name='firstname'
                          className='form-control'
                          id='inlineFormInputGroup0'
                          placeholder='First Name'
                        />
                      </div>
                    </div>
                    <div className='from-group col-md-6 mb-3'>
                      <label htmlFor='inlineFormInputGroup1'>Last Name</label>
                      <div className='input-group '>
                        <input
                          type='text'
                          name='lastname'
                          className='form-control'
                          id='inlineFormInputGroup1'
                          placeholder='Last Name'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='form-row'>
                    <div className='from-group col-md-6 mb-3'>
                      <label htmlFor='inlineFormInputGroup2'>
                        Company Name
                      </label>
                      <div className='input-group '>
                        <input
                          type='text'
                          className='form-control'
                          id='inlineFormInputGroup2'
                          placeholder='Company Name'
                        />
                      </div>
                    </div>
                    <div className='from-group col-md-6 mb-3'>
                      <label htmlFor='inlineFormInputGroup3'>Address</label>
                      <div className='input-group '>
                        <input
                          type='text'
                          name='address'
                          className='form-control'
                          id='inlineFormInputGroup3'
                          placeholder='Address'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='form-row'>
                    <div className='from-group col-md-6 mb-3'>
                      <label htmlFor='inlineFormInputGroup4'>Country</label>
                      <div className='input-group select-control'>
                        <select
                          className='form-control'
                          name='SelectName'
                          id='inlineFormInputGroup4'
                        >
                          <option value='default'>Select</option>
                          <option value={1}>Canada</option>
                          <option value={2}>United Kingdom</option>
                          <option value={3}>United States</option>
                        </select>
                      </div>
                    </div>
                    <div className='from-group col-md-6 mb-3'>
                      <label htmlFor='inlineFormInputGroup5'>State</label>
                      <div className='input-group select-control'>
                        <select
                          className='form-control'
                          name='SelectName'
                          id='inlineFormInputGroup5'
                        >
                          <option value='default'>Select</option>
                          <option value={1}>Alaska</option>
                          <option value={2}>New York</option>
                          <option value={3}>Taxes</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className='form-row'>
                    <div className='from-group col-md-6 mb-3'>
                      <label htmlFor='inlineFormInputGroup6'>City</label>
                      <div className='input-group select-control'>
                        <select
                          className='form-control'
                          id='inlineFormInputGroup6'
                        >
                          <option value='default'>Select</option>
                          <option value={1}>Alaska</option>
                          <option value={2}>New York</option>
                          <option value={3}>Taxes</option>
                        </select>
                      </div>
                    </div>
                    <div className='from-group col-md-6 mb-3'>
                      <label htmlFor='inlineFormInputGroup7'>Postal Code</label>
                      <div className='input-group'>
                        <input
                          type='text'
                          name='postcode'
                          className='form-control'
                          id='inlineFormInputGroup7'
                          placeholder='Postal Code'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='form-row'>
                    <div className='from-group col-md-6 mb-3'>
                      <label htmlFor='inlineFormInputGroup8'>Phone</label>
                      <div className='input-group'>
                        <input
                          type='text'
                          name='phone'
                          className='form-control'
                          id='inlineFormInputGroup8'
                          placeholder='Phone'
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    type='submit'
                    className='btn btn-secondary swipe-to-top'
                  >
                    Add Address
                  </button>
                </form>
              </div>
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

export default ShippingAddress;
