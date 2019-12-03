import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Footer2 from '../layout/Footer_2';
const CartPage2 = () => {
  return (
    <Fragment>
      {/* Paste this code after body tag */}
      {/* <div className='se-pre-con' /> */}

      {/* cart Content */}
      <div className='container-fuild'>
        <nav aria-label='breadcrumb'>
          <div className='container'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'>
                <Link to='#'>Home</Link>
              </li>
              <li className='breadcrumb-item active' aria-current='page'>
                Cart Page
              </li>
            </ol>
          </div>
        </nav>
      </div>
      <section className='pro-content cart-content'>
        <div className='container'>
          <div className='row'>
            <div className='pro-heading-title'>
              <h1>Cart Page</h1>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-sm-12'>
              <table className='table top-table'>
                <thead>
                  <tr className='d-flex'>
                    <th className='col-12 col-md-2'>ITEM(S)</th>
                    <th className='col-12 col-md-3' />
                    <th className='col-12 col-md-2'>PRICE</th>
                    <th className='col-12 col-md-2'>QUANTITY</th>
                    <th className='col-12 col-md-1'>SUBTOTAL</th>
                    <th className='col-12 col-md-2 align-right'>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='d-flex'>
                    <td className='col-12 col-md-1'>
                      <img
                        className='img-fluid'
                        src='assets/images/product_images/product_image_02.jpg'
                        alt='Product'
                      />
                    </td>
                    <td className='col-12 col-md-4 '>
                      <div className='item-detail'>
                        <h4>
                          <Link to='#'>Crystal Water Drop Earrings</Link>
                          <br />
                          <small>Earrings</small>
                        </h4>
                        <div className='item-attributes' />
                      </div>
                    </td>
                    <td className='col-12 col-md-2 item-price'>$285</td>
                    <td className='col-12 col-md-2'>
                      <div className='input-group item-quantity'>
                        <input
                          type='text'
                          id='quantity1'
                          name='quantity'
                          className='form-control'
                          defaultValue={2}
                        />
                        <span className='input-group-btn'>
                          <button
                            type='button'
                            value='quantity1'
                            className='quantity-plus btn'
                            data-type='minus'
                            data-field
                          >
                            <span className='fas fa-plus' />
                          </button>
                          <button
                            type='button'
                            value='quantity1'
                            className='quantity-minus btn'
                            data-type='plus'
                            data-field
                          >
                            <span className='fas fa-minus' />
                          </button>
                        </span>
                      </div>
                    </td>
                    <td className='col-12 col-md-1 item-total'>$570</td>
                    <td className='col-12 col-md-2 align-right'>
                      <div className='item-controls'>
                        <button type='button' className='btn'>
                          <span className='fas fa-pencil-alt' />
                        </button>
                        <button type='button' className='btn'>
                          <span className='fas fa-times' />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className='d-flex'>
                    <td className='col-12 col-md-1'>
                      <img
                        className='img-fluid'
                        src='assets/images/product_images/product_image_03.jpg'
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
                      </div>
                    </td>
                    <td className='col-12 col-md-2 item-price'>$85</td>
                    <td className='col-12 col-md-2'>
                      <div className='input-group item-quantity'>
                        <input
                          type='text'
                          id='quantity2'
                          name='quantity'
                          className='form-control'
                          defaultValue={4}
                        />
                        <span className='input-group-btn'>
                          <button
                            type='button'
                            value='quantity2'
                            className='quantity-plus btn'
                            data-type='minus'
                            data-field
                          >
                            <span className='fas fa-plus' />
                          </button>
                          <button
                            type='button'
                            value='quantity2'
                            className='quantity-minus btn'
                            data-type='plus'
                            data-field
                          >
                            <span className='fas fa-minus' />
                          </button>
                        </span>
                      </div>
                    </td>
                    <td className='col-12 col-md-1 item-total'>$340</td>
                    <td className='col-12 col-md-2 align-right'>
                      <div className='item-controls'>
                        <button type='button' className='btn'>
                          <span className='fas fa-pencil-alt' />
                        </button>
                        <button type='button' className='btn'>
                          <span className='fas fa-times' />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-lg-9 '>
              <table className='table table-background'>
                <thead>
                  <tr>
                    <th scope='col' colSpan={4}>
                      CALCULATE SHIPPING
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='d-flex'>
                    <th scope='row'>
                      <input
                        type='text'
                        className='form-control'
                        id='city'
                        aria-describedby='city'
                        placeholder='City'
                      />
                    </th>
                    <td>
                      <input
                        type='text'
                        className='form-control'
                        id='country'
                        aria-describedby='country'
                        placeholder='Country'
                      />
                    </td>
                    <td>
                      <input
                        type='text'
                        className='form-control'
                        id='postcode'
                        aria-describedby='postcode'
                        placeholder='Post Code'
                      />
                    </td>
                    <td>
                      <button
                        className='btn btn-block btn-secondary swipe-to-top'
                        type='button'
                      >
                        Estimate
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className='col-12 col-sm-12 mb-4'>
                <div className='row justify-content-between '>
                  <div className='col-12 col-lg-5'>
                    <div className='row'>
                      <div className='input-group '>
                        <input
                          type='text'
                          className='form-control'
                          style={{ height: 38 }}
                          placeholder='Coupon Code'
                          aria-label='Coupon Code'
                          aria-describedby='coupon-code'
                        />
                        <div className='input-group-append'>
                          <button
                            className='btn btn-secondary swipe-to-top'
                            type='button'
                            id='coupon-code'
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-12 col-lg-7'>
                    <div className='row justify-content-end btn-res'>
                      <button type='button' className='btn btn-link'>
                        Continue Shopping
                      </button>
                      <button
                        type='button'
                        className='btn btn-light swipe-to-top'
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-lg-3'>
              <table className='table'>
                <thead className='d-none d-lg-block'>
                  <tr>
                    <th scope='col' colSpan={2}>
                      Order Summary
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Subtotal</th>
                    <td>$910</td>
                  </tr>
                  <tr>
                    <th>Discount(Coupon)</th>
                    <td>$20</td>
                  </tr>
                  <tr className='item-price'>
                    <th>Total</th>
                    <td>$890</td>
                  </tr>
                </tbody>
              </table>
              <button className='btn btn-secondary btn-block swipe-to-top'>
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Footer Mobile */}
      <Footer2 />
    </Fragment>
  );
};

export default CartPage2;
