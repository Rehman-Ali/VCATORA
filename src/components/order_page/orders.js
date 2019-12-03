import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Footer2 from '../layout/Footer_2';
const Orders = () => {
  return (
    <Fragment>
      {/* Paste this code after body tag */}
      {/* <div className="se-pre-con" /> */}

      {/*My Order Content */}
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
      <section className='pro-content order-content'>
        <div className='container'>
          <div className='row'>
            <div className='pro-heading-title'>
              <h1>Order Page</h1>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-lg-3   d-block d-xl-block'>
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
              <table className='table order-table'>
                <thead>
                  <tr className='d-flex'>
                    <th className='col-12 d-block d-md-none' />
                    <th className='col-12 col-md-3'>Order ID</th>
                    <th className='col-12 col-md-3'>Order Date</th>
                    <th className='col-12 col-md-3'>Total Price</th>
                    <th className='col-12 col-md-3'>Order Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='d-flex'>
                    <td className='col-12 d-block d-md-none'>
                      <span>order# 1</span>
                    </td>
                    <td className='col-12 col-md-3'>
                      <Link to='/order-detail'>354365G4</Link>
                    </td>
                    <td className='col-12 col-md-3'>25th April 2019</td>
                    <td className='col-12 col-md-3'>$890.00</td>
                    <td className='col-12 col-md-3'>
                      <div className='text-secondary'>Pending</div>
                    </td>
                  </tr>
                  <tr className='d-flex'>
                    <td className='col-12 d-block d-md-none'>
                      <span>order#2</span>
                    </td>
                    <td className='col-12 col-md-3'>
                      <Link to='/order-detail'>845s5112</Link>
                    </td>
                    <td className='col-12 col-md-3'>25th Dec 2010</td>
                    <td className='col-12 col-md-3'>$896.00</td>
                    <td className='col-12 col-md-3'>
                      <div className='text-success'>Confirm</div>
                    </td>
                  </tr>
                  <tr className='d-flex'>
                    <td className='col-12 d-block d-md-none'>
                      <span>order#3</span>
                    </td>
                    <td className='col-12 col-md-3'>
                      <Link to='/order-detail'>se874142</Link>
                    </td>
                    <td className='col-12 col-md-3'>25th May 2009</td>
                    <td className='col-12 col-md-3'>$8580.00</td>
                    <td className='col-12 col-md-3'>
                      <div className='text-danger'>Cancel</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className='pagination justify-content-between '>
                <label className='col-form-label'>
                  Showing 1–<span className='showing_record'>1</span>
                  &nbsp;of&nbsp;<span className='showing_total_record'>23</span>
                  &nbsp;results.
                </label>
                <div className='col-12 col-sm-6'>
                  <ol className='loader-page'>
                    <li className='loader-page-item'>
                      <Link to='#'>
                        <i
                          className='fa fa-angle-double-left'
                          style={{ fontSize: 12 }}
                        />
                      </Link>
                    </li>
                    <li className='loader-page-item'>
                      <Link to='#'>1</Link>
                    </li>
                    <li className='loader-page-item'>
                      <Link to='#'>2</Link>
                    </li>
                    <li className='loader-page-item'>
                      <Link to='#'>3</Link>
                    </li>
                    <li className='loader-page-item'>
                      <Link to='#'>4</Link>
                    </li>
                    <li className='loader-page-item'>
                      <Link to='#'>
                        <i
                          className='fa fa-angle-double-right'
                          style={{ fontSize: 12 }}
                        />
                      </Link>
                    </li>
                  </ol>
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

export default Orders;
