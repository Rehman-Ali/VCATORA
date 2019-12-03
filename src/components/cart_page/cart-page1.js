import React, { Fragment, useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Footer2 from '../layout/Footer_2';
import { SERVER_URI } from '../utils/config';
import { loadScript, loadCss } from '../utils/loadScripts';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeItemFromCart,
  increaseItemQuantity,
  decreaseItemQuantity
} from '../../actions/cart';
import { connect } from 'react-redux';

const CartPage1 = props => {
  const cartItem = JSON.parse(localStorage.getItem('cartItem'));
  const products = useSelector(state => state.cart.products);
  const total = useSelector(state => state.cart.total);
  const productTotal = useSelector(state => state.cart.productTotal);
  const dispatch = useDispatch();

  useEffect(() => {
    loadCss();
    loadScript();
  }, []);

  const [formData, setFormData] = useState({
    quantity: 0,
    products: cartItem,
    cart: [],
    total: 0,
    subTotal: 0
  });

  const onChange = (e, i) => {
    console.log(e, i);

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const confirmDelete = (index, item) => {
    props.removeItemFromCart(index, item);
  };

  const increaseQty = (index, product, quantity) => {
    props.increaseItemQuantity(index, product, quantity);
  };

  const decreaseQty = (index, product, quantity) => {
    props.decreaseItemQuantity(index, product, quantity);
  };

  return (
    <Fragment>
      {/* Paste this code after body tag */}
      {/* <div className="se-pre-con" /> */}
      {/* //Header Style One */}

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
            <div className='col-12 col-lg-9'>
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
                  {products !== undefined
                    ? products.map((item, index) => (
                        <tr className='d-flex' key={index}>
                          <td className='col-12 col-md-2'>
                            <img
                              className='img-fluid'
                              src={SERVER_URI + item.products_image}
                              alt='Product'
                            />
                          </td>
                          <td className='col-12 col-md-4'>
                            <div className='item-detail'>
                              <h4>
                                <Link to='#'>{item.products_name}</Link>
                                <br />
                                <small>
                                  {item.categories[0].categories_name}
                                </small>
                              </h4>
                              <div className='item-attributes' />
                              <div className='item-controls'>
                                <button type='button' className='btn'>
                                  <span className='fas fa-pencil-alt' />
                                </button>
                                <button
                                  type='button'
                                  className='btn'
                                  onClick={() => confirmDelete(index, item)}
                                >
                                  <span className='fas fa-times' />
                                </button>
                              </div>
                            </div>
                          </td>
                          <td className='col-12 col-md-2'>
                            <span className='item-price'>
                              ${item.products_price}
                            </span>
                          </td>
                          <td className='col-12 col-md-2'>
                            <div className='input-group item-quantity'>
                              <input
                                type='text'
                                id='quantity'
                                name='quantity'
                                className='form-control'
                                // value={quantity}
                                value={item.quantity}
                                //onChange={e => onChange(e)}
                                disabled
                              />
                              <span className='input-group-btn'>
                                <button
                                  type='button'
                                  //value='quantity1'
                                  className='quantity-plus btn'
                                  //data-type='add'
                                  //data-field
                                  onClick={() =>
                                    //dispatch(
                                    increaseQty(index, item, item.quantity + 1)
                                  }
                                >
                                  <span className='fas fa-plus' />
                                </button>
                                {item.quantity > 1 ? (
                                  <button
                                    type='button'
                                    // value='quantity1'
                                    className='quantity-minus btn'
                                    //data-type='plus'
                                    onClick={() =>
                                      decreaseQty(
                                        index,
                                        item,
                                        item.quantity - 1
                                      )
                                    }
                                    data-field
                                  >
                                    <span className='fas fa-minus' />
                                  </button>
                                ) : null}
                              </span>
                            </div>
                          </td>
                          <td className='col-12 col-md-2'>
                            <span className='item-price'>
                              ${item.quantity * item.products_price}
                            </span>
                          </td>
                        </tr>
                      ))
                    : null}
                </tbody>
              </table>
              <div className='col-12 col-lg-12 mb-4'>
                <div className='row justify-content-between'>
                  <div className='col-12 col-lg-4'>
                    <div className='row'>
                      <div className='input-group'>
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
              <table className='table right-table'>
                <thead>
                  <tr>
                    <th scope='col' colSpan={2}>
                      Order Summary
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope='row'>Subtotal</th>
                    <td>${total}</td>
                  </tr>
                  <tr>
                    <th scope='row'>Discount(Coupon)</th>
                    <td>$0</td>
                  </tr>
                  <tr className='item-price'>
                    <th scope='row'>Total</th>
                    <td>${total}</td>
                  </tr>
                </tbody>
              </table>
              <button className='btn btn-secondary btn-block swipe-to-top'>
                <Link to='/checkout'>Proceed to checkout</Link>
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

export default connect(null, {
  increaseItemQuantity,
  decreaseItemQuantity,
  removeItemFromCart
})(CartPage1);
