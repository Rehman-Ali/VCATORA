import React, { Fragment, useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Footer2 from '../layout/Footer_2';
import { loadScript, loadCss } from '../utils/loadScripts';
import { setAlert } from '../../actions/alert';
import { addOrder } from '../../actions/order';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Alert from '../layout/Alert';
import { SERVER_URI } from '../utils/config';
import order from '../../reducers/order';
import { useSelector } from 'react-redux';
import { clearCartContent } from '../../actions/cart';
const Checkout = props => {
  const cartproducts = useSelector(state => state.cart.products);
  const total = useSelector(state => state.cart.total);
  useEffect(() => {
    loadScript();
  }, []);
  const cartItem = JSON.parse(localStorage.getItem('cartItem'));
  const [error, setError] = useState('');
  const [defaultAdd, setDfaultAdd] = useState(false);
  const orderData = JSON.parse(localStorage.getItem('userOrderData'));

  const [formData, setFormData] = useState({
    shipAddressActive: true,
    billAddressActive: false,
    shipMethodActive: false,
    orderDetailActive: false,
    email: '',
    customers_id: '',
    customers_name: '',
    customers_telephone: '03167418077',
    delivery_firstname: '',
    delivery_lastname: '',
    delivery_street_address: '',
    delivery_country: '',
    delivery_country_id: '',
    delivery_state: '',
    delivery_city: '',
    delivery_postcode: '',
    delivery_phone: '',
    billing_firstname: '',
    billing_lastname: '',
    billing_street_address: '',
    billing_country: '',
    billing_country_id: '',
    billing_state: '',
    billing_city: '',
    billing_postcode: '',
    billing_phone: '',
    coupon_amount: '',
    is_coupon_applied: '',
    language_id: 1,
    payment_method: '',
    currency_code: 'usd',
    products: [],
    productsTotal: '23.99',
    shipping_cost: '130.0',
    shipping_method: '',
    totalPrice: 153.99,
    tax_zone_id: 182,
    total_tax: 0.0
  });

  const {
    shipAddressActive,
    shipMethodActive,
    billAddressActive,
    orderDetailActive,
    email,
    customers_id,
    customers_name,
    billing_country_id,
    customers_telephone,
    delivery_firstname,
    delivery_lastname,
    delivery_street_address,
    delivery_country,
    delivery_country_id,
    delivery_state,
    delivery_city,
    delivery_postcode,
    delivery_phone,
    billing_firstname,
    billing_lastname,
    billing_street_address,
    billing_country,
    billing_state,
    billing_city,
    billing_postcode,
    billing_phone,
    coupon_amount,
    is_coupon_applied,
    language_id,
    currency_code,
    payment_method,
    products,
    productsTotal,
    shipping_cost,
    shipping_method,
    totalPrice,
    tax_zone_id,
    total_tax
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const consleFuncton = () => {
    if (!delivery_firstname) {
      setError('First name is required!');
    } else if (!delivery_lastname) {
      setError(!'lastname is required!');
    } else {
      return true;
    }
    return;
  };

  const onSubmit = async e => {
    e.preventDefault();
    const orderData = JSON.parse(localStorage.getItem('userOrderData'));
    const user = JSON.parse(localStorage.getItem('user'));
    if (defaultAdd) {
      props.addOrder({
        billing_city: orderData.delivery_city,
        billing_country: orderData.delivery_country,
        billing_firstname: orderData.delivery_firstname,
        billing_lastname: orderData.delivery_lastname,
        billing_phone: orderData.delivery_phone,
        billing_postcode: orderData.delivery_postcode,
        billing_state: orderData.delivery_state,
        billing_street_address: orderData.delivery_street_address,
        billing_suburb: orderData.delivery_state,
        billing_zone: orderData.delivery_state,
        billing_zone_id: '182',
        comments: '',
        coupon_amount: 0.0,
        coupons: [],
        email: user.email,
        customers_id: user.id,
        customers_name: user.first_name,
        customers_telephone: '03167418077',
        delivery_city: orderData.delivery_city,
        delivery_country: orderData.delivery_country,
        delivery_country_id: '99',
        delivery_firstname: orderData.delivery_firstname,
        delivery_lastname: orderData.delivery_lastname,
        delivery_phone: orderData.delivery_phone,
        delivery_postcode: orderData.delivery_postcode,
        delivery_state: orderData.delivery_state,
        delivery_street_address: orderData.delivery_street_address,
        delivery_suburb: orderData.delivery_state,
        delivery_zone: orderData.delivery_state,
        delivery_zone_id: '182',
        delivery_cost: '$00.0',
        delivery_time: '2019-07-24 11:00 am to 01:00 pm',
        is_coupon_applied: 0,
        language_id: 1,
        latitude: '31.4132084',
        longitude: '73.105849',
        nonce: '',
        packing_charge_tax: '0',
        payment_method,
        currency_code: 'USD',
        products: [
          
        ],
        productsTotal: total,
        shipping_cost: 0,
        shipping_method,
        tax_zone_id: 0,
        totalPrice: total,
        total_tax: 0
      });

      props.clearCartContent();
    } else {
      props.addOrder({
        billing_city: orderData.delivery_city,
        billing_country: orderData.billing_country,
        billing_firstname: orderData.billing_firstname,
        billing_lastname: orderData.delivery_lastname,
        billing_phone: orderData.billing_phone,
        billing_postcode: orderData.billing_postcode,
        billing_state: orderData.billing_state,
        billing_street_address: orderData.billing_street_address,
        billing_suburb: orderData.billing_state,
        billing_zone: orderData.billing_state,
        billing_zone_id: '182',
        comments: '',
        coupon_amount: 0.0,
        coupons: [],
        email: user.email,
        customers_id: user.id,
        customers_name: user.first_name,
        customers_telephone: '03167418077',
        delivery_city: orderData.delivery_city,
        delivery_country: orderData.delivery_country,
        delivery_country_id: '99',
        delivery_firstname: orderData.delivery_firstname,
        delivery_lastname: orderData.delivery_lastname,
        delivery_phone: orderData.delivery_phone,
        delivery_postcode: orderData.delivery_postcode,
        delivery_state: orderData.delivery_state,
        delivery_street_address: orderData.delivery_street_address,
        delivery_suburb: orderData.delivery_state,
        delivery_zone: orderData.delivery_state,
        delivery_zone_id: '182',
        delivery_cost: '$00.0',
        delivery_time: '2019-07-24 11:00 am to 01:00 pm',
        is_coupon_applied: 0,
        language_id: 1,
        latitude: '31.4132084',
        longitude: '73.105849',
        nonce: '',
        packing_charge_tax: '0',
        payment_method,
        currency_code: 'USD',
        products: [
          // {
          //   attributes: [],
          //   categories_id: '',
          //   categories_name: '',
          //   // categories_id: cartproducts.categories[0].categories_id,
          //   // categories_name: cartproducts.categories[0].categories_name,
          //   customers_basket_quantity: cartproducts.quantity,
          //   final_price: cartproducts.products_price,
          //   image: SERVER_URI + cartproducts.products_image,
          //   model: '',
          //   on_sale: true,
          //   price: cartproducts.products_price,
          //   products_id: cartproducts.id,
          //   products_name: cartproducts.products_name,
          //   subtotal: cartproducts.quantity * cartproducts.products_price,
          //   total: cartproducts.quantity * cartproducts.products_price,
          //   unit: 'Gram',
          //   weight: '0.500'
          // }
        ],
        productsTotal: total,
        shipping_cost: 0,
        shipping_method: 'shiiping price',
        tax_zone_id: 0,
        totalPrice: total,
        total_tax: 0
      });
      props.clearCartContent();
    }
  };

  const onShipAddressClickHandler = e => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem('userOrderData'));
    setFormData({
      shipAddressActive: !shipAddressActive,
      delivery_firstname: data.delivery_firstname,
      delivery_lastname: data.delivery_lastname,
      delivery_street_address: data.delivery_street_address,
      delivery_country: data.delivery_country,
      delivery_state: data.delivery_state,
      delivery_city: data.delivery_city,
      delivery_postcode: data.delivery_postcode,
      delivery_phone: data.delivery_phone,
      billing_firstname: data.delivery_phone,
      billing_lastname: data.delivery_phone,
      billing_street_address: data.delivery_phone,
      billing_country: data.delivery_phone,
      billing_state: data.delivery_phone,
      billing_city: data.delivery_phone,
      billing_postcode: data.delivery_phone,
      billing_phone: data.delivery_phone
    });
  };
  const onBillAddressClickHandler = e => {
    e.preventDefault();

    const orderDate = {
      billing_firstname: billing_firstname,
      billing_lastname: billing_lastname,
      billing_street_address: billing_street_address,
      billing_country: billing_country,
      billing_state: billing_state,
      billing_city: billing_city,
      billing_postcode: billing_postcode,
      billing_phone: billing_phone,
      delivery_firstname: delivery_firstname,
      delivery_lastname: delivery_lastname,
      delivery_street_address: delivery_street_address,
      delivery_country: delivery_country,
      delivery_state: delivery_state,
      delivery_city: delivery_city,
      delivery_postcode: delivery_postcode,
      delivery_phone: delivery_phone
    };
    localStorage.setItem('userOrderData', JSON.stringify(orderDate));
    setFormData({
      billAddressActive: !billAddressActive,
      billing_firstname: billing_firstname,
      billing_lastname: billing_lastname,
      billing_street_address: billing_street_address,
      billing_country: billing_country,
      billing_state: billing_state,
      billing_city: billing_city,
      billing_postcode: billing_postcode,
      billing_phone: billing_phone,
      delivery_firstname: delivery_firstname,
      delivery_lastname: delivery_lastname,
      delivery_street_address: delivery_street_address,
      delivery_country: delivery_country,
      delivery_state: delivery_state,
      delivery_city: delivery_city,
      delivery_postcode: delivery_postcode,
      delivery_phone: delivery_phone
    });
  };

  const onShipMethodClickHandler = e => {
    e.preventDefault();

    const orderDate = {
      delivery_firstname: delivery_firstname,
      delivery_lastname: delivery_lastname,
      delivery_street_address: delivery_street_address,
      delivery_country: delivery_country,
      delivery_state: delivery_state,
      delivery_city: delivery_city,
      delivery_postcode: delivery_postcode,
      delivery_phone: delivery_phone,
      billing_firstname: billing_firstname,
      billing_lastname: billing_lastname,
      billing_street_address: billing_street_address,
      billing_country: billing_country,
      billing_state: billing_state,
      billing_city: billing_city,
      billing_postcode: billing_postcode,
      billing_phone: billing_phone
    };
    localStorage.setItem('userOrderData', JSON.stringify(orderDate));

    setFormData({
      shipMethodActive: !shipMethodActive,
      billing_firstname: billing_firstname,
      billing_lastname: billing_lastname,
      billing_street_address: billing_street_address,
      billing_country: billing_country,
      billing_state: billing_state,
      billing_city: billing_city,
      billing_postcode: billing_postcode,
      billing_phone: billing_phone,
      delivery_firstname: delivery_firstname,
      delivery_lastname: delivery_lastname,
      delivery_street_address: delivery_street_address,
      delivery_country: delivery_country,
      delivery_state: delivery_state,
      delivery_city: delivery_city,
      delivery_postcode: delivery_postcode,
      delivery_phone: delivery_phone
    });
  };
  const onOrderDetailClickHandler = e => {
    e.preventDefault();
    setFormData({
      orderDetailActive: !orderDetailActive
    });
  };

  if (props.success) {
    return <Redirect to='/thankyou' />;
  }

  return (
    <Fragment>
      {/* Paste this code after body tag */}
      {/* <div className='se-pre-con' /> */}

      {/* checkout Content */}
      <div className='container-fuild'>
        <nav aria-label='breadcrumb'>
          <div className='container'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'>
                <Link to='#'>Home</Link>
              </li>
              <li className='breadcrumb-item active' aria-current='page'>
                Checkout
              </li>
            </ol>
          </div>
        </nav>
      </div>
      <section className='pro-content checkout-content'>
        <div className='container'>
          <div className='row'>
            <Alert />
            <p>{props.errorMessage}</p>
            <p>{error}</p>

            <div className='pro-heading-title'>
              <h1>Checkout Page</h1>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-xl-9'>
              <div className='row'>
                <div className='checkout-module'>
                  <ul
                    className='nav nav-pills checkoutd-nav mb-3'
                    id='pills-tab'
                    role='tablist'
                  >
                    <li className='nav-item'>
                      <a
                        className={
                          shipAddressActive ? 'nav-link  active' : 'nav-link'
                        }
                        id='pills-shipping-tab'
                        data-toggle='pill'
                        href='#pills-shipping'
                        role='tab'
                        aria-controls='pills-shipping'
                        aria-selected='true'
                      >
                        <span className='d-flex d-lg-none'>1</span>
                        <span className='d-none d-lg-flex'>
                          Shipping Address
                        </span>
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a
                        className={
                          billAddressActive ? 'nav-link  active' : 'nav-link'
                        }
                        id='pills-billing-tab'
                        data-toggle='pill'
                        href='#pills-billing'
                        role='tab'
                        aria-controls='pills-billing'
                        aria-selected='false'
                      >
                        <span className='d-flex d-lg-none'>2</span>
                        <span className='d-none d-lg-flex'>
                          Billing Address
                        </span>
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a
                        className={
                          shipMethodActive ? 'nav-link  active' : 'nav-link'
                        }
                        id='pills-method-tab'
                        data-toggle='pill'
                        href='#pills-method'
                        role='tab'
                        aria-controls='pills-method'
                        aria-selected='false'
                      >
                        <span className='d-flex d-lg-none'>3</span>
                        <span className='d-none d-lg-flex'>
                          Shipping Methods
                        </span>
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a
                        className={
                          orderDetailActive ? 'nav-link  active' : 'nav-link'
                        }
                        id='pills-order-tab'
                        data-toggle='pill'
                        href='#pills-order'
                        role='tab'
                        aria-controls='pills-order'
                        aria-selected='false'
                      >
                        <span className='d-flex d-lg-none'>4</span>
                        <span className='d-none d-lg-flex'>Order Details</span>
                      </a>
                    </li>
                  </ul>
                  <div className='tab-content'>
                    <div
                      className='tab-pane fade show active'
                      id='pills-shipping'
                      role='tabpanel'
                      aria-labelledby='pills-shipping-tab'
                    >
                      <form>
                        <div className='form-row'>
                          <div className='from-group col-md-6 mb-3'>
                            <label htmlFor='inlineFormInputGroup0'>
                              First Name
                            </label>
                            <div className='input-group '>
                              <input
                                type='text'
                                className='form-control'
                                id='inlineFormInputGroup0'
                                placeholder='First Name'
                                name='delivery_firstname'
                                value={delivery_firstname}
                                onChange={e => onChange(e)}
                                required
                              />
                            </div>
                          </div>
                          <div className='from-group col-md-6 mb-3'>
                            <label htmlFor='inlineFormInputGroup1'>
                              Last Name
                            </label>
                            <div className='input-group '>
                              <input
                                type='text'
                                className='form-control'
                                id='inlineFormInputGroup1'
                                placeholder='Last Name'
                                name='delivery_lastname'
                                value={delivery_lastname}
                                onChange={e => onChange(e)}
                                required
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
                                // name='delivery_street_address'
                                // value={delivery_street_address}
                                // onChange={e => onChange(e)}
                                required
                              />
                            </div>
                          </div>
                          <div className='from-group col-md-6 mb-3'>
                            <label htmlFor='inlineFormInputGroup3'>
                              Address
                            </label>
                            <div className='input-group '>
                              <input
                                type='text'
                                className='form-control'
                                id='inlineFormInputGroup3'
                                placeholder='Address'
                                name='delivery_street_address'
                                value={delivery_street_address}
                                onChange={e => onChange(e)}
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className='form-row'>
                          <div className='from-group col-md-6 mb-3'>
                            <label htmlFor='inlineFormInputGroup4'>
                              <span className='star'>*</span>Country
                            </label>
                            <div className='input-group select-control'>
                              <select
                                className='form-control'
                                id='inlineFormInputGroup4'
                                name='delivery_country'
                                value={delivery_country}
                                onChange={e => onChange(e)}
                                required
                              >
                                <option selected>USA</option>
                                <option value={1}>Canada</option>
                              </select>
                            </div>
                          </div>
                          <div className='from-group col-md-6 mb-3'>
                            <label htmlFor='inlineFormInputGroup3'>State</label>
                            <div className='input-group '>
                              <input
                                type='text'
                                className='form-control'
                                id='inlineFormInputGroup3'
                                placeholder='Address'
                                name='delivery_state'
                                value={delivery_state}
                                onChange={e => onChange(e)}
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className='form-row'>
                          <div className='from-group col-md-6 mb-3'>
                            <label htmlFor='inlineFormInputGroup3'>City</label>
                            <div className='input-group '>
                              <input
                                type='text'
                                className='form-control'
                                id='inlineFormInputGroup3'
                                placeholder='Address'
                                name='delivery_city'
                                value={delivery_city}
                                onChange={e => onChange(e)}
                                required
                              />
                            </div>
                          </div>
                          <div className='from-group col-md-6 mb-3'>
                            <label htmlFor='inlineFormInputGroup7'>
                              <span className='star'>*</span>Postal Code
                            </label>
                            <div className='input-group'>
                              <input
                                type='text'
                                className='form-control'
                                id='inlineFormInputGroup7'
                                placeholder='Postal Code'
                                name='delivery_postcode'
                                value={delivery_postcode}
                                onChange={e => onChange(e)}
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className='form-row'>
                          <div className='from-group col-md-6 mb-3'>
                            <label htmlFor='inlineFormInputGroup8'>
                              <span className='star'>*</span>Phone
                            </label>
                            <div className='input-group'>
                              <input
                                type='text'
                                className='form-control'
                                id='inlineFormInputGroup8'
                                placeholder='Phone'
                                name='delivery_phone'
                                value={delivery_phone}
                                onChange={e => onChange(e)}
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <div className='col-12 col-sm-12'>
                          <div className='row'>
                            <a
                              data-toggle='pill'
                              //href={consleFuncton && '#pills-billing'}
                              className='btn btn-secondary swipe-to-top cta'
                              onClick={e => onBillAddressClickHandler(e)}
                            >
                              Continue
                            </a>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div
                      className='tab-pane fade'
                      id='pills-billing'
                      role='tabpanel'
                      aria-labelledby='pills-billing-tab'
                    >
                      <form>
                        <div className='form-row'>
                          <div className='from-group col-md-6 mb-3'>
                            <label htmlFor='inlineFormInputGroup01'>
                              First Name
                            </label>
                            <div className='input-group '>
                              <input
                                type='text'
                                className='form-control'
                                id='inlineFormInputGroup01'
                                placeholder='First Name'
                                name='billing_firstname'
                                value={
                                  defaultAdd
                                    ? orderData.delivery_firstname
                                    : billing_firstname
                                }
                                onChange={e => onChange(e)}
                              />
                            </div>
                          </div>
                          <div className='from-group col-md-6 mb-3'>
                            <label htmlFor='inlineFormInputGroup12'>
                              Last Name
                            </label>
                            <div className='input-group '>
                              <input
                                type='text'
                                className='form-control'
                                id='inlineFormInputGroup12'
                                placeholder='Last Name'
                                name='billing_lastname'
                                //value={billing_lastname}

                                value={
                                  defaultAdd
                                    ? orderData.delivery_lastname
                                    : billing_lastname
                                }
                                onChange={e => onChange(e)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className='form-row'>
                          <div className='from-group col-md-6 mb-3'>
                            <label htmlFor='inlineFormInputGroup23'>
                              Company Name
                            </label>
                            <div className='input-group '>
                              <input
                                type='text'
                                className='form-control'
                                id='inlineFormInputGroup23'
                                placeholder='Company Name'
                                // name='billing_street_address'
                                // value={billing_street_address}
                                // onChange={e => onChange(e)}
                              />
                            </div>
                          </div>
                          <div className='from-group col-md-6 mb-3'>
                            <label htmlFor='inlineFormInputGroup34'>
                              Address
                            </label>
                            <div className='input-group '>
                              <input
                                type='text'
                                className='form-control'
                                id='inlineFormInputGroup34'
                                placeholder='Address'
                                name='billing_street_address'
                                // value={billing_street_address}
                                onChange={e => onChange(e)}
                                value={
                                  defaultAdd
                                    ? orderData.delivery_street_address
                                    : billing_street_address
                                }
                              />
                            </div>
                          </div>
                        </div>
                        <div className='form-row'>
                          <div className='from-group col-md-6 mb-3'>
                            <label htmlFor='inlineFormInputGroup45'>
                              <span className='star'>*</span>Country
                            </label>
                            <div className='input-group select-control'>
                              <select
                                className='form-control'
                                id='inlineFormInputGroup45'
                                name='billing_country'
                                //value={billing_country}
                                onChange={e => onChange(e)}
                                value={
                                  defaultAdd
                                    ? orderData.delivery_country
                                    : billing_country
                                }
                              >
                                <option selected>USA</option>
                                <option value={1}>Canada</option>
                              </select>
                            </div>
                          </div>
                          <div className='from-group col-md-6 mb-3'>
                            <label htmlFor='inlineFormInputGroup34'>
                              State
                            </label>
                            <div className='input-group '>
                              <input
                                type='text'
                                className='form-control'
                                id='inlineFormInputGroup34'
                                placeholder='State'
                                name='billing_state'
                                //value={billing_state}

                                value={
                                  defaultAdd
                                    ? orderData.delivery_state
                                    : billing_state
                                }
                                onChange={e => onChange(e)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className='form-row'>
                          <div className='from-group col-md-6 mb-3'>
                            <label htmlFor='inlineFormInputGroup34'>City</label>
                            <div className='input-group '>
                              <input
                                type='text'
                                className='form-control'
                                id='inlineFormInputGroup34'
                                placeholder='City'
                                name='billing_city'
                                //value={billing_city}

                                value={
                                  defaultAdd
                                    ? orderData.delivery_city
                                    : billing_city
                                }
                                onChange={e => onChange(e)}
                              />
                            </div>
                          </div>
                          <div className='from-group col-md-6 mb-3'>
                            <label htmlFor='inlineFormInputGroup78'>
                              <span className='star'>*</span>Postal Code
                            </label>
                            <div className='input-group'>
                              <input
                                type='text'
                                className='form-control'
                                id='inlineFormInputGroup78'
                                placeholder='Postal Code'
                                name='billing_postcode'
                                //value={billing_postcode}

                                value={
                                  defaultAdd
                                    ? orderData.delivery_postcode
                                    : billing_postcode
                                }
                                onChange={e => onChange(e)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className='form-row'>
                          <div className='from-group col-md-6 mb-3'>
                            <label htmlFor='inlineFormInputGroup89'>
                              <span className='star'>*</span>Phone
                            </label>
                            <div className='input-group'>
                              <input
                                type='text'
                                className='form-control'
                                id='inlineFormInputGroup89'
                                placeholder='Phone'
                                name='billing_phone'
                                // value={billing_phone}
                                value={
                                  defaultAdd
                                    ? orderData.delivery_phone
                                    : billing_phone
                                }
                                onChange={e => onChange(e)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className='form-group'>
                          <div className='form-check'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              defaultValue
                              id='defaultCheck0'
                              onChange={() => setDfaultAdd(!defaultAdd)}
                            />
                            <label
                              className='form-check-label'
                              htmlFor='defaultCheck0'
                            >
                              Same shipping and billing address.
                            </label>
                            <small
                              id='checkboxHelp'
                              className='form-text text-muted'
                            />
                          </div>
                        </div>
                        <div className='col-12 col-sm-12'>
                          <div className='row'>
                            {/* <a
                              data-toggle='pill'
                              href='#pills-shipping'
                              className='btn btn-light swipe-to-top cta'
                              onClick={e => onShipAddressClickHandler(e)}
                            >
                              Back
                            </a> */}
                            <a
                              data-toggle='pill'
                              href='#pills-method'
                              className='btn btn-secondary swipe-to-top cta'
                              onClick={e => onShipMethodClickHandler(e)}
                            >
                              Continue
                            </a>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div
                      className='tab-pane fade'
                      id='pills-method'
                      role='tabpanel'
                      aria-labelledby='pills-method-tab'
                    >
                      <div className='col-12 col-sm-12 '>
                        <div className='row'>
                          <p>
                            Please select a prefered shipping method to use on
                            this order
                          </p>
                        </div>
                      </div>
                      <div className='col-12 col-sm-12 '>
                        <div className='row'>
                          <div className='col-12 col-sm-6 mb-4'>
                            <h4>Flate Rate</h4>
                            <div className='form-check'>
                              <input
                                className='form-check-input'
                                type='checkbox'
                                defaultValue
                                id='defaultCheck1'
                              />
                              <label
                                className='form-check-label'
                                htmlFor='defaultCheck1'
                                value='11'
                                name='shipping_method'
                                onChange={e => onChange(e)}
                              >
                                Flat Rate --- $11
                              </label>
                              <small
                                id='emailHelp'
                                className='form-text text-muted'
                              />
                            </div>
                          </div>
                          <div className='col-12 col-sm-6'>
                            <h4>UPS Shipping</h4>
                            <div className='form-check mb-2'>
                              <input
                                className='form-check-input'
                                type='checkbox'
                                defaultValue
                                id='defaultCheck2'
                                value='15'
                                name='shipping_method'
                                onChange={e => onChange(e)}
                              />
                              <label
                                className='form-check-label'
                                htmlFor='defaultCheck2'
                              >
                                24 hours --- $15
                              </label>
                            </div>
                            <div className='form-check mb-2'>
                              <input
                                className='form-check-input'
                                type='checkbox'
                                defaultValue
                                id='defaultCheck3'
                                value='10'
                                name='shipping_method'
                                onChange={e => onChange(e)}
                              />
                              <label
                                className='form-check-label'
                                htmlFor='defaultCheck3'
                              >
                                48 hours --- $10
                              </label>
                            </div>
                            <div className='form-check mb-4'>
                              <input
                                className='form-check-input'
                                type='checkbox'
                                defaultValue
                                id='defaultCheck4'
                                value='5'
                                name='shipping_method'
                                onChange={e => onChange(e)}
                              />
                              <label
                                className='form-check-label'
                                htmlFor='defaultCheck4'
                              >
                                72 hours --- $5
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-sm-12'>
                        <div className='row'>
                          {/* <a
                            data-toggle='pill'
                            href='#pills-billing'
                            className='btn btn-light swipe-to-top cta'
                            onClick={e => onBillAddressClickHandler(e)}
                          >
                            Back
                          </a> */}
                          <a
                            data-toggle='pill'
                            href='#pills-order'
                            className='btn btn-secondary swipe-to-top cta'
                            onClick={e => onOrderDetailClickHandler(e)}
                          >
                            Continue
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className='tab-pane fade'
                      id='pills-order'
                      role='tabpanel'
                      aria-labelledby='pills-order-tab'
                    >
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
                          {cartproducts !== undefined
                            ? cartproducts.map((item, i) => (
                                <tr className='d-flex' key={i}>
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
                                        {item.products_name}
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
                                        <button type='button' className='btn'>
                                          <span className='fas fa-times' />
                                        </button>
                                      </div>
                                    </div>
                                  </td>
                                  <td className='item-price col-12 col-md-2'>
                                    ${item.products_price}
                                  </td>
                                  <td className='col-12 col-md-2'>
                                    <div className='input-group item-quantity'>
                                      <input
                                        type='text'
                                        id='quantity1'
                                        name='quantity'
                                        className='form-control '
                                        value={item.quantity}
                                        disabled
                                      />
                                      <span className='input-group-btn'>
                                        {/* <button
                                          type='button'
                                          value='quantity1'
                                          className='quantity-plus btn'
                                          data-type='plus'
                                          data-field
                                        >
                                          <span className='fas fa-plus' />
                                        </button>
                                        <button
                                          type='button'
                                          value='quantity1'
                                          className='quantity-minus btn'
                                          data-type='minus'
                                          data-field
                                        >
                                          <span className='fas fa-minus' />
                                        </button> */}
                                      </span>
                                    </div>
                                  </td>
                                  <td className='align-middle item-total col-12 col-md-2'>
                                    ${item.products_price * item.quantity}
                                  </td>
                                </tr>
                              ))
                            : null}
                        </tbody>
                      </table>
                      <div className='col-12 col-sm-12'>
                        <div className='row'>
                          <div className='heading'>
                            <h4>Order Notes &amp; Summary</h4>
                          </div>
                          <div
                            className='form-group'
                            style={{ width: '100%', padding: 0 }}
                          >
                            <label htmlFor='exampleFormControlTextarea1'>
                              Please write notes of your order
                            </label>
                            <textarea
                              className='form-control'
                              id='exampleFormControlTextarea1'
                              rows={3}
                              defaultValue={''}
                            />
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-sm-12 mb-3'>
                        <div className='row'>
                          <div className='heading'>
                            <h4>Payment Methods</h4>
                          </div>
                          <div
                            className='form-group'
                            style={{ width: '100%', padding: 0 }}
                          >
                            <label
                              htmlFor='exampleFormControlTextarea1'
                              style={{ width: '100%', marginBottom: 30 }}
                            >
                              Please select a prefered payment method to use on
                              this order.
                            </label>
                            <div className='form-check form-check-inline'>
                              <input
                                className='form-check-input'
                                type='radio'
                                id='inlineCheckbox1'
                                value='paypal'
                                name='payment_method'
                                onChange={e => onChange(e)}
                              />
                              <label
                                className='form-check-label'
                                htmlFor='inlineCheckbox1'
                              >
                                <img
                                  src='assets/images/miscellaneous/paypal.png'
                                  alt='paypal'
                                />
                              </label>
                            </div>
                            <div className='form-check form-check-inline'>
                              <input
                                className='form-check-input'
                                type='radio'
                                id='inlineCheckbox2'
                                value='braintree'
                                name='payment_method'
                                onChange={e => onChange(e)}
                              />
                              <label
                                className='form-check-label'
                                htmlFor='inlineCheckbox2'
                              >
                                <img
                                  src='assets/images/miscellaneous/braintree.png'
                                  alt='braintree'
                                />
                              </label>
                            </div>
                            <div className='form-check form-check-inline'>
                              <input
                                className='form-check-input'
                                type='radio'
                                id='inlineCheckbox3'
                                value='stripe'
                                name='payment_method'
                                onChange={e => onChange(e)}
                              />
                              <label
                                className='form-check-label'
                                htmlFor='inlineCheckbox3'
                              >
                                <img
                                  src='assets/images/miscellaneous/stripe.png'
                                  alt='stripe'
                                />
                              </label>
                            </div>
                            <div className='form-check form-check-inline'>
                              <input
                                className='form-check-input'
                                type='radio'
                                id='inlineCheckbox4'
                                value='cod'
                                name='payment_method'
                                onChange={e => onChange(e)}
                              />
                              <label
                                className='form-check-label'
                                htmlFor='inlineCheckbox4'
                              >
                                <img
                                  src='assets/images/miscellaneous/cod.png'
                                  alt='cod'
                                />
                              </label>
                            </div>
                            <div className='form-check form-check-inline'>
                              <input
                                className='form-check-input'
                                type='radio'
                                id='inlineCheckbox5'
                                value='instamojo'
                                name='payment_method'
                                onChange={e => onChange(e)}
                              />
                              <label
                                className='form-check-label'
                                htmlFor='inlineCheckbox5'
                              >
                                <img
                                  src='assets/images/miscellaneous/instamojo.png'
                                  alt='instamojo'
                                />
                              </label>
                            </div>
                            <div className='form-check form-check-inline'>
                              <input
                                className='form-check-input'
                                type='radio'
                                id='inlineCheckbox6'
                                value='hyperpay'
                                name='payment_method'
                                onChange={e => onChange(e)}
                              />
                              <label
                                className='form-check-label'
                                htmlFor='inlineCheckbox6'
                              >
                                <img
                                  src='assets/images/miscellaneous/hyperpay.png'
                                  alt='hyperpay'
                                />
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-sm-12'>
                        <div className='row'>
                          {/* <a
                            data-toggle='pill'
                            href='#pills-method'
                            className='btn btn-light swipe-to-top cta'
                            onClick={e => onShipMethodClickHandler(e)}
                          >
                            Back
                          </a> */}
                          <button
                            className='btn btn-secondary swipe-to-top'
                            type='submit'
                            onClick={e => onSubmit(e)}
                          >
                            {/* <Link onClick={e => onSubmit(e)} to='/thankyou'> */}
                            Continue
                            {/* </Link> */}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-xl-3'>
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
                    <td>$00.00</td>
                  </tr>
                  <tr>
                    <th scope='row'>TAX</th>
                    <td>$00.00</td>
                  </tr>
                  {/* <tr>
                    <th scope='row'>FLat Rate Shipping</th>
                    <td>$11.00</td>
                  </tr> */}
                  <tr className='item-price'>
                    <th scope='row'>Total</th>
                    <td>${total}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      {/* Footer Mobile */}
      <Footer2 />
    </Fragment>
  );
};

Checkout.propTypes = {
  setAlert: PropTypes.func.isRequired,
  addOrder: PropTypes.func.isRequired,
  //isAuthenticated: PropTypes.bool,
  errorMessage: PropTypes.string,
  success: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  //isAuthenticated: state.auth.isAuthenticated,
  errorMessage: state.order.message,
  success: state.order.success
});

export default connect(mapStateToProps, {
  setAlert,
  addOrder,
  clearCartContent
})(Checkout);
