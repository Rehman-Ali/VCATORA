import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Footer2 from '../layout/Footer_2';

const OrderDetail = () => {
  return (
    <Fragment>
      {/* Paste this code after body tag */}
      {/* <div className="se-pre-con" /> */}
      {/*My Order Content */}
      <section className='pro-content order-detail-content'>
        <div className='container'>
          <div className='row'>
            <div className='pro-heading-title'>
              <h1>Order Information</h1>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-lg-3 '>
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
              <div className='row'>
                <div className='col-12 col-md-5'>
                  <h4>Order ID 35468430</h4>
                  <table className='table order-id'>
                    <tbody>
                      <tr className='d-flex'>
                        <td className='col-6 col-md-6'>Order Status</td>
                        <td className='pending col-6 col-md-6'>
                          <p>Pending</p>
                        </td>
                      </tr>
                      <tr className='d-flex'>
                        <td className='col-6 col-md-6'>Order Date</td>
                        <td className='col-6 col-md-6'>28/04/2019</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className='col-12 col-md-7'>
                  <h4>Shipping Details</h4>
                  <table className='table order-id'>
                    <tbody>
                      <tr className='d-flex'>
                        <td className='address col-12 col-md-6'>
                          Shipping Address
                        </td>
                      </tr>
                      <tr className='d-flex'>
                        <td className='address col-12 col-md-12'>
                          Address Details, Near, City Name, Country Name
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className='row'>
                <div className='col-12 col-md-5'>
                  <h4>Billing Details</h4>
                  <table className='table order-id'>
                    <tbody>
                      <tr className='d-flex'>
                        <td className='address col-12'>Shipping Address</td>
                      </tr>
                      <tr className='d-flex'>
                        <td className='address col-12'>
                          Address Details, Near, City Name, Country Name
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className='col-12 col-md-7'>
                  <h4>Payment Methods</h4>
                  <table className='table order-id'>
                    <tbody>
                      <tr className='d-flex'>
                        <td className='col-6'>Shipping Method</td>
                        <td className='col-6'>Flat Rate</td>
                      </tr>
                      <tr className='d-flex'>
                        <td className='col-6'>Payment Method</td>
                        <td className='underline col-6'>Cash on Delivery</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <table className='table top-table'>
                <thead>
                  <tr className='d-flex'>
                    <th className='col-12 col-md-2'>ITEM(S)</th>
                    <th className='col-12 col-md-4' />
                    <th className='col-12 col-md-2'>PRICE</th>
                    <th className='col-12 col-md-2'>QTY</th>
                    <th className='col-12 col-md-2'>SUBTOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='d-flex'>
                    <td className='col-12 col-md-2'>
                      <img
                        className='img-fluid'
                        src='assets/images/product_images/product_image_02.jpg'
                        alt='Product '
                      />
                    </td>
                    <td className='col-12 col-md-4'>
                      <div className='item-detail'>
                        <h4>
                          <Link to='#'>Crystal Water Drop Earrings</Link>
                          <br />
                          <small>Earrings</small>
                        </h4>
                        <div className='item-attributes' />
                        <div className='item-controls'>
                          <button type='button' className='btn'>
                            <span className='fas fa-pencil-alt' />
                          </button>
                          <button type='button' className='btn'>
                            <span className='fas fa-times' />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className='col-12 col-md-2'>
                      <span className='item-price'>$285</span>
                    </td>
                    <td className='col-12 col-md-2'>
                      <div className='input-group item-quantity'>
                        <input
                          type='text'
                          name='quantity'
                          className='form-control'
                          defaultValue={2}
                          readOnly
                        />
                      </div>
                    </td>
                    <td className='col-12 col-md-2'>
                      <span className='item-price'>$540</span>
                    </td>
                  </tr>
                  <tr className='d-flex'>
                    <td className='col-12 col-md-2'>
                      <img
                        className='img-fluid'
                        src='assets/images/product_images/product_image_02.jpg'
                        alt='Product'
                      />
                    </td>
                    <td className='col-12 col-md-4'>
                      <div className='item-detail'>
                        <h4>
                          <Link to='#'>Crytal Wedding Engagement Rings</Link>
                          <br />
                          <small>Ring Collection</small>
                        </h4>
                        <div className='item-attributes' />
                        <div className='item-controls'>
                          <button type='button' className='btn'>
                            <span className='fas fa-pencil-alt' />
                          </button>
                          <button type='button' className='btn'>
                            <span className='fas fa-times' />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className='col-12 col-md-2'>
                      <span className='item-price'>$85</span>
                    </td>
                    <td className='col-12 col-md-2'>
                      <div className='input-group item-quantity'>
                        <input
                          type='text'
                          name='quantity'
                          className='form-control'
                          defaultValue={4}
                          readOnly
                        />
                      </div>
                    </td>
                    <td className='col-12 col-md-2'>
                      <span className='item-price'>$370</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className='row'>
                <div className='col-12 col-sm-12'>
                  <div className='comments-area'>
                    <h4>Order Comments</h4>
                    <textarea
                      className='form-control'
                      id='exampleFormControlTextarea1'
                      rows={3}
                      placeholder='Give Your Comments here'
                      defaultValue={''}
                    />
                  </div>
                </div>
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

export default OrderDetail;
