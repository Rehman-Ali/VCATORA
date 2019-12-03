import PropTypes from 'prop-types';
import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect, withRouter } from 'react-router-dom';
//import { getAllProducts, AddToCart } from '../../actions/product';
import Footer from '../layout/Footer';
import { loadCss, loadScript } from '../utils/loadScripts';
import { SERVER_URI } from '../utils/config';

import { useSelector, useDispatch } from 'react-redux';
import { increaseItemQuantity, addItemToCart } from '../../actions/cart';
import { getAllProducts } from '../../actions/product';
import Alert from '../layout/Alert';
import { setAlert } from '../../actions/alert';

const Landing = props => {
  // componentWillMount() {
  //   loadCss();
  // }
  // componentDidMount() {
  //   loadScript();

  // }
  const products = useSelector(state => state.cart.products);
  const total = useSelector(state => state.cart.total);
  const dispatch = useDispatch();

  const user = localStorage.getItem('user');
  const cartItem = localStorage.getItem('cartItem');

  const [formData, setFormData] = useState({
    page_number: 1,
    language_id: 1,
    currency_code: 'usd'
  });

  const { page_number, language_id, currency_code } = formData;

  useEffect(() => {
    props.getAllProducts({ page_number, language_id, currency_code });
    setTimeout(() => {
      loadCss();
    }, 500);
    setTimeout(() => {
      loadScript();
    }, 1000);
    // console.log('use effect run');
  }, []);
  console.log(props);
  console.log(
    props.allProduct !== undefined && props.allProduct.length > 0
      ? props.allProduct[0].currency
      : 'null'
  );

  const addProductToCart = item => {
    const product = Object.assign({}, item, { quantity: 1 });
    let itemQty = product.quantity;
    let productExists = false;
    let productIndex = -1;
    products.forEach((p, idx) => {
      if (product.id === p.id) {
        productExists = true;
        productIndex = idx;
      }
    });
    if (productExists) {
      if (itemQty == undefined) {
        itemQty = 1;
      } else {
        itemQty = product.quantity;
      }
      props.setAlert(
        `${product.products_name} is already in cart! Quantity increased by 1.`,
        'success'
      );

      props.increaseItemQuantity(
        productIndex,
        product,
        (itemQty = itemQty + 1)
      );
    } else {
      props.addItemToCart(product);
      props.setAlert(
        `${product.products_name} has been added to cart`,
        'success'
      );
    }
  };

  return (
    <Fragment>
      {/* Paste this code after body tag */}
      {/* <div className="se-pre-con"></div> */}

      {/* Revolution Layer Slider */}
      <div className='carousel-content'>
        <div className='container-fuild'>
          <div
            id='rev_slider_1077_1_wrapper'
            className='rev_slider_wrapper fullscreen-container'
            data-alias='scroll-effect136'
            data-source='gallery'
            style={{ padding: '0px' }}
          >
            {/* START REVOLUTION SLIDER 5.4.1 fullscreen mode */}
            <div
              id='rev_slider_1077_1'
              className='rev_slider fullscreenbanner'
              style={{ display: 'none' }}
              data-version='5.4.1'
            >
              <ul>
                {' '}
                {/* SLIDE  */}
                <li
                  data-index='rs-3042'
                  data-transition='slideoverhorizontal'
                  data-slotamount='default'
                  data-hideafterloop='0'
                  data-hideslideonmobile='off'
                  data-easein='Power4.easeInOut'
                  data-easeout='Power4.easeInOut'
                  data-masterspeed='1000'
                  data-thumb=''
                  data-rotate='0'
                  data-fstransition='fade'
                  data-fsmasterspeed='1500'
                  data-fsslotamount='7'
                  data-saveperformance='off'
                  data-title='Big &amp; Bold'
                  data-param1=''
                  data-param2=''
                  data-param3=''
                  data-param4=''
                  data-param5=''
                  data-param6=''
                  data-param7=''
                  data-param8=''
                  data-param9=''
                  data-param10=''
                  data-description=''
                >
                  {/* MAIN IMAGE */}
                  <img
                    src='assets/images/revolution_layer_slider/Slider_01_01.jpg'
                    alt=''
                    data-bgposition='center center'
                    data-bgfit='cover'
                    data-bgrepeat='no-repeat'
                    data-bgparallax='10'
                    className='rev-slidebg'
                    data-no-retina
                  />
                  {/* LAYERS */}

                  <div className='container' style={{ position: 'relative' }}>
                    {/* LAYER NR. 1 */}
                    <div
                      className='tp-caption BigBold-Title  tp-resizeme'
                      id='slide-3042-layer-1'
                      data-x="['left','left','left','left']"
                      data-hoffset="['23','23','18','20']"
                      data-y="['top','top','top','top']"
                      data-voffset="['110','40','30','20']"
                      data-fontsize="['70','50','40','30']"
                      data-lineheight="['120','90','60','30']"
                      data-width="['none','none','none','400']"
                      data-height='none'
                      data-whitespace="['nowrap','nowrap','nowrap','normal']"
                      data-type='text'
                      data-basealign='slide'
                      data-responsive_offset='off'
                      data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];","speed":1500,"to":"o:1;","delay":500,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;","ease":"Power2.easeInOut"}]'
                      data-textAlign="['left','left','left','left']"
                      data-paddingtop='[10,10,10,10]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingbottom='[0,0,10,10]'
                      data-paddingleft='[0,0,0,0]'
                      style={{
                        zIndex: '6',
                        color: '#fff',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      IT'S TIME TO SAVE
                    </div>

                    {/* LAYER NR. 2 */}
                    <div
                      className='tp-caption BigBold-SubTitle  '
                      id='slide-3042-layer-2'
                      data-x="['left','left','left','left']"
                      data-hoffset="['23','23','18','20']"
                      data-y="['top','top','top','top']"
                      data-voffset="['230','110','110','60']"
                      data-fontsize="['22','20','18','16']"
                      data-lineheight="['24','24','24','20']"
                      data-width="['410','410','410','280']"
                      data-height="['60','100','100','50']"
                      data-whitespace='normal'
                      data-type='text'
                      data-basealign='slide'
                      data-responsive_offset='off'
                      data-responsive='off'
                      data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","speed":1500,"to":"o:1;","delay":650,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"y:50px;opacity:0;","ease":"Power2.easeInOut"}]'
                      data-textAlign="['left','left','left','left']"
                      data-paddingtop='[0,0,0,0]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingbottom='[0,0,0,0]'
                      data-paddingleft='[0,0,0,0]'
                      style={{
                        zIndex: '7',
                        whiteSpace: 'normal',
                        color: '#fff'
                      }}
                    >
                      Upto 50% off Fashion Jewelry
                    </div>

                    {/* LAYER NR. 3 */}
                    <div
                      className='tp-caption BigBold-Button rev-btn swipe-to-top'
                      id='slide-3042-layer-3'
                      data-x="['left','left','left','left']"
                      data-hoffset="['23','23','18','20']"
                      data-y="['top','top','top','top']"
                      data-voffset="['300','170','170','120']"
                      data-width="['180','none','none','none']"
                      data-height='none'
                      data-whitespace='nowrap'
                      data-type='button'
                      data-actions='[{"event":"click","action":"simplelink","target": "_self","url":"shop-page2"}]'
                      data-basealign='slide'
                      data-responsive_offset='off'
                      data-responsive='off'
                      data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","speed":1500,"to":"o:1;","delay":650,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"y:50px;opacity:0;","ease":"Power2.easeInOut"},{"frame":"hover","speed":"300","ease":"Power1.easeInOut","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);bw:1px 1px 1px 1px;"}]'
                      data-textAlign="['center','left','left','left']"
                      data-paddingtop='[15,15,15,15]'
                      data-paddingright='[50,50,50,50]'
                      data-paddingbottom='[15,15,15,15]'
                      data-paddingleft='[50,50,50,50]'
                      style={{
                        zIndex: '8',
                        whiteSpace: 'nowrap',
                        outline: 'none',
                        boxSizing: 'border-box',
                        cursor: 'pointer'
                      }}
                    >
                      Shop Now
                    </div>
                  </div>
                </li>
                {/* SLIDE  */}
                <li
                  data-index='rs-3043'
                  data-transition='slideoverhorizontal'
                  data-slotamount='default'
                  data-hideafterloop='0'
                  data-hideslideonmobile='off'
                  data-easein='Power4.easeInOut'
                  data-easeout='Power4.easeInOut'
                  data-masterspeed='1000'
                  data-thumb=''
                  data-rotate='0'
                  data-saveperformance='off'
                  data-title='NEW ELEGENCE'
                  data-param1=''
                  data-param2=''
                  data-param3=''
                  data-param4=''
                  data-param5=''
                  data-param6=''
                  data-param7=''
                  data-param8=''
                  data-param9=''
                  data-param10=''
                  data-description=''
                >
                  {/* MAIN IMAGE */}
                  <img
                    src='assets/images/revolution_layer_slider/Slider_01_02.jpg'
                    alt=''
                    data-bgposition='center center'
                    data-bgfit='cover'
                    data-bgparallax='10'
                    className='rev-slidebg'
                    data-no-retina
                  />
                  {/* LAYERS */}

                  <div className='container' style={{ position: 'relative' }}>
                    {/* LAYER NR. 4 */}
                    <div
                      className='tp-caption BigBold-Title   tp-resizeme'
                      id='slide-3043-layer-1'
                      data-x="['left','center','left','left']"
                      data-hoffset="['0','0','0','0']"
                      data-y="['top','top','top','top']"
                      data-voffset="['110','40','30','20']"
                      data-fontsize="['70','50','40','30']"
                      data-lineheight="['120','90','60','30']"
                      data-width="['100%','410','100%','100%']"
                      data-height='none'
                      data-whitespace="['nowrap','nowrap','nowrap','normal']"
                      data-type='text'
                      data-basealign='slide'
                      data-responsive_offset='off'
                      data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":500,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
                      data-textAlign="['center','center','center','center']"
                      data-paddingtop='[10,10,10,10]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingbottom='[10,10,10,10]'
                      data-paddingleft='[0,0,0,0]'
                      style={{
                        zIndex: '11',
                        whiteSpace: 'nowrap',
                        color: '#fff'
                      }}
                    >
                      NEW ELEGENCE
                    </div>

                    {/* LAYER NR. 5 */}
                    <div
                      className='tp-caption BigBold-SubTitle  '
                      id='slide-3043-layer-2'
                      data-x="['left','left','left','left']"
                      data-hoffset="['0','0','0','0']"
                      data-y="['top','top','top','top']"
                      data-voffset="['230','110','110','60']"
                      data-fontsize="['22','20','18','16']"
                      data-lineheight="['24','24','24','20']"
                      data-width="['100%','100%','100%','100%']"
                      data-height="['60','100','100','50']"
                      data-whitespace='normal'
                      data-type='text'
                      data-basealign='slide'
                      data-responsive_offset='off'
                      data-responsive='off'
                      data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","speed":1500,"to":"o:1;","delay":650,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"y:50px;opacity:0;","ease":"Power2.easeInOut"}]'
                      data-textAlign="['center','center','center','center']"
                      data-paddingtop='[0,0,0,0]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingbottom='[0,0,0,0]'
                      data-paddingleft='[0,0,0,0]'
                      style={{
                        zIndex: '12',
                        whiteSpace: 'normal',
                        color: '#fff'
                      }}
                    >
                      Where your custom design comes to life
                    </div>

                    {/* LAYER NR. 6 */}
                    <div
                      className='tp-caption BigBold-Button rev-btn swipe-to-top'
                      id='slide-3043-layer-3'
                      data-x="['left','center','left','left'] "
                      data-hoffset="['0','0','0','0']"
                      data-y="['top','top','top','top']"
                      data-voffset="['300','170','170','120']"
                      data-width="['180','none','none','none']"
                      data-height='none'
                      data-whitespace='nowrap'
                      data-type='button'
                      data-actions='[{"event":"click","action":"simplelink","target": "_self","url":"shop-page2"}]'
                      data-basealign='slide'
                      data-responsive_offset='off'
                      data-responsive='off'
                      data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","speed":1500,"to":"o:1;","delay":650,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"y:50px;opacity:0;","ease":"Power2.easeInOut"},{"frame":"hover","speed":"300","ease":"Power1.easeInOut","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);bw:1px 1px 1px 1px;"}]'
                      data-textAlign="['center','right','center','center']"
                      data-paddingtop='[15,15,15,15]'
                      data-paddingright='[50,50,50,50]'
                      data-paddingbottom='[15,15,15,15]'
                      data-paddingleft='[50,50,50,50]'
                      style={{
                        zIndex: '13',
                        whiteSpace: 'nowrap',
                        outline: 'none',
                        boxSizing: 'border-box',
                        cursor: 'pointer'
                      }}
                    >
                      Shop Now
                    </div>
                  </div>
                </li>
                {/* SLIDE  */}
                <li
                  data-index='rs-3044'
                  data-transition='slideoverhorizontal'
                  data-slotamount='default'
                  data-hideafterloop='0'
                  data-hideslideonmobile='off'
                  data-easein='Power4.easeInOut'
                  data-easeout='Power4.easeInOut'
                  data-masterspeed='1000'
                  data-thumb=''
                  data-rotate='0'
                  data-saveperformance='off'
                  data-title='Beauty Here'
                  data-param1=''
                  data-param2=''
                  data-param3=''
                  data-param4=''
                  data-param5=''
                  data-param6=''
                  data-param7=''
                  data-param8=''
                  data-param9=''
                  data-param10=''
                  data-description=''
                >
                  {/* MAIN IMAGE */}
                  <img
                    src='assets/images/revolution_layer_slider/Slider_01_03.jpg'
                    alt=''
                    data-bgposition='center center'
                    data-bgfit='cover'
                    data-bgrepeat='no-repeat'
                    data-bgparallax='10'
                    className='rev-slidebg'
                    data-no-retina
                  />
                  {/* LAYERS */}

                  <div className='container' style={{ position: 'relative' }}>
                    {/* LAYER NR. 7 */}
                    <div
                      className='tp-caption BigBold-Title   tp-resizeme'
                      id='slide-3044-layer-1'
                      data-x="['left','left','left','right']"
                      data-hoffset="['500','300','300','20']"
                      data-y="['top','top','top','top']"
                      data-voffset="['110','40','30','20']"
                      data-fontsize="['70','50','40','30']"
                      data-lineheight="['120','90','60','30']"
                      data-width="['none','none','none','400']"
                      data-height='none'
                      data-whitespace="['nowrap','nowrap','nowrap','normal']"
                      data-type='text'
                      data-basealign='slide'
                      data-responsive_offset='off'
                      data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];","speed":1500,"to":"o:1;","delay":500,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;","ease":"Power2.easeInOut"}]'
                      data-textAlign="['left','left','left','right']"
                      data-paddingtop='[10,10,10,10]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingbottom='[0,0,10,10]'
                      data-paddingleft='[0,0,0,0]'
                      style={{
                        zIndex: '6',
                        color: '#212121',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      Jewelry Collections
                    </div>

                    {/* LAYER NR. 8 */}
                    <div
                      className='tp-caption BigBold-SubTitle  '
                      id='slide-3044-layer-2'
                      data-x="['left','left','left','right']"
                      data-hoffset="['500','300','300','20']"
                      data-y="['top','top','top','top']"
                      data-voffset="['230','110','110','60']"
                      data-fontsize="['22','15','18','16']"
                      data-lineheight="['24','24','24','20']"
                      data-width="['610','410','410','280']"
                      data-height="['60','100','100','50']"
                      data-whitespace='normal'
                      data-type='text'
                      data-basealign='slide'
                      data-responsive_offset='off'
                      data-responsive='off'
                      data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","speed":1500,"to":"o:1;","delay":650,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"y:50px;opacity:0;","ease":"Power2.easeInOut"}]'
                      data-textAlign="['left','left','left','right']"
                      data-paddingtop='[0,0,0,0]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingbottom='[0,0,0,0]'
                      data-paddingleft='[0,0,0,0]'
                      style={{
                        zIndex: '7',
                        whiteSpace: 'normal',
                        color: '#555'
                      }}
                    >
                      The wedding season fall in love with jewellery
                    </div>

                    {/* LAYER NR. 9 */}
                    <div
                      className='tp-caption BigBold-Button rev-btn swipe-to-top'
                      id='slide-3044-layer-3'
                      data-x="['left','left','left','right']"
                      data-hoffset="['500','300','300','20']"
                      data-y="['top','top','top','top']"
                      data-voffset="['300','170','170','120']"
                      data-width="['180','none','none','none']"
                      data-height='none'
                      data-whitespace='nowrap'
                      data-type='button'
                      data-actions='[{"event":"click","action":"simplelink","target": "_self","url":"shop-page2"}]'
                      data-basealign='slide'
                      data-responsive_offset='off'
                      data-responsive='off'
                      data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","speed":1500,"to":"o:1;","delay":650,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"y:50px;opacity:0;","ease":"Power2.easeInOut"},{"frame":"hover","speed":"300","ease":"Power1.easeInOut","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);bw:1px 1px 1px 1px;"}]'
                      data-textAlign="['center','left','left','right']"
                      data-paddingtop='[15,15,15,15]'
                      data-paddingright='[50,50,50,50]'
                      data-paddingbottom='[15,15,15,15]'
                      data-paddingleft='[50,50,50,50]'
                      style={{
                        zIndex: '8',
                        whiteSpace: 'nowrap',
                        outline: 'none',
                        boxSizing: 'border-box',
                        cursor: 'pointer'
                      }}
                    >
                      Shop Now
                    </div>
                  </div>
                </li>
              </ul>
              <div
                className='tp-bannertimer tp-bottom'
                style={{ visibility: 'hidden !important' }}
              ></div>{' '}
            </div>
          </div>
          {/* END REVOLUTION SLIDER */}
        </div>
      </div>
      {/* Banners */}
      <section className='banners-content'>
        {/* //banner twelve */}
        <div className='banner-twelve'>
          <div className='container-fluid'>
            <div className='group-banners'>
              <div className='row'>
                <div className='col-12 col-md-6 '>
                  <figure className='banner-image swipe-to-top'>
                    <img
                      className='img-fluid '
                      src='assets/images/banners/banner_1.jpg'
                      alt='Banner '
                    />
                    <div className='banner-caption right-caption'>
                      <h2>
                        HANDCRAFTED
                        <small>
                          <br />
                          Designer Jewelry
                        </small>
                      </h2>

                      <Link
                        to='/shop-page1'
                        className='btn btn-secondary swipe-to-top'
                      >
                        View All Range
                      </Link>
                    </div>
                  </figure>
                </div>
                <div className='col-12 col-md-3'>
                  <figure className='banner-image swipe-to-top'>
                    <img
                      className='img-fluid'
                      src='assets/images/banners/banner_2.jpg'
                      alt='Banner '
                    />
                    <div className='banner-caption top-caption'>
                      <h2>
                        LATEST
                        <br />
                        <small>Great Deal</small>
                      </h2>
                      <Link
                        to='/shop-page1'
                        className='btn btn-secondary swipe-to-top'
                      >
                        Shop Now
                      </Link>
                    </div>
                  </figure>

                  <figure className='banner-image swipe-to-top mt-image'>
                    <img
                      className='img-fluid'
                      src='assets/images/banners/banner_3.jpg'
                      alt='Banner '
                    />
                    <div className='banner-caption left-caption'>
                      <h2>
                        LIKED
                        <br />
                        <small>Best Match</small>
                      </h2>

                      <Link
                        to='/shop-page1'
                        className='btn btn-secondary swipe-to-top'
                      >
                        View All Range
                      </Link>
                    </div>
                  </figure>
                </div>
                <div className='col-12 col-md-3'>
                  <figure className='banner-image swipe-to-top'>
                    <img
                      className='img-fluid'
                      src='assets/images/banners/banner_4.jpg'
                      alt='Banner '
                    />
                    <div className='banner-caption bottom-caption'>
                      <h2>
                        Gifts
                        <br />
                        <small>Step Out In Style</small>
                      </h2>

                      <Link
                        to='/shop-page1'
                        className='btn btn-secondary swipe-to-top'
                      >
                        Shop Now
                      </Link>
                    </div>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Alert />
      {/* Products Tabs */}
      <section className='pro-content pro-tab-content'>
        <div className='container'>
          <div className='products-area'>
            <div className='row justify-content-center'>
              <div className='col-12 col-lg-6'>
                <div className='pro-heading-title'>
                  <h1> Welcome to store</h1>
                </div>
              </div>
            </div>

            {/* ..........tabs start ......... */}
            <div className='row '>
              <div className='col-md-12'>
                <div className='nav' role='tablist' id='tabCarousel'>
                  <a
                    className='nav-link  active'
                    data-toggle='tab'
                    href='#featured'
                    role='tab'
                  >
                    Top Sales
                  </a>

                  <a
                    className='nav-link'
                    data-toggle='tab'
                    // href='#special'
                    href='#featured'
                    role='tab'
                    aria-controls='special'
                    aria-selected='true'
                  >
                    Tranding
                  </a>

                  <a
                    className='nav-link'
                    data-toggle='tab'
                    // href='#liked'
                    href='#featured'
                    role='tab'
                    aria-controls='liked'
                    aria-selected='true'
                  >
                    Winter Sale
                  </a>
                </div>
                {/* Tab panes */}
                <div className='tab-content'>
                  <div
                    role='tabpanel'
                    className='tab-pane fade active show'
                    id='featured'
                  >
                    <div className='tab-carousel-js row'>
                      {/* {props.allProduct.product_data.map((product, index) =>( */}

                      {props.allProduct !== undefined &&
                      props.allProduct.length > 0
                        ? props.allProduct.slice(0, 8).map((product, index) => {
                            return (
                              <div
                                className='col-12 col-sm-6 col-md-4 col-lg-3'
                                key={index}
                              >
                                <div className='product'>
                                  <article>
                                    <div className='pro-icons mobile-pro-icons d-lg-none d-xl-none'>
                                      <Link
                                        to='/wishlist'
                                        className='icon active swipe-to-top'
                                      >
                                        <i className='fas fa-heart'></i>
                                      </Link>
                                      <div
                                        className='icon swipe-to-top'
                                        data-toggle='modal'
                                        data-target='#quickViewModal'
                                      >
                                        <i className='fas fa-eye'></i>
                                      </div>
                                      <Link
                                        to='/compare'
                                        className='icon swipe-to-top'
                                      >
                                        <i
                                          className='fas fa-align-right'
                                          data-fa-transform='rotate-90'
                                        ></i>
                                      </Link>
                                    </div>

                                    <div className='pro-thumb '>
                                      <div className='pro-tag bg-primary'>
                                        Featured
                                      </div>
                                      <Link
                                        to={
                                          '/product-page1/' +
                                          product.products_id
                                        }
                                      >
                                        <span className='pro-image'>
                                          <img
                                            className='img-fluid'
                                            src={
                                              SERVER_URI +
                                              product.products_image
                                            }
                                            alt='Product '
                                          />
                                        </span>
                                        <span className='pro-image-hover swipe-to-top  d-none d-lg-block d-xl-block'>
                                          <img
                                            className='img-fluid'
                                            src={
                                              SERVER_URI +
                                              product.products_image
                                            }
                                            alt='Product '
                                          />
                                        </span>
                                      </Link>
                                      <div className='pro-buttons d-none d-lg-block d-xl-block'>
                                        <div className='pro-icons'>
                                          <Link
                                            to='/wishlist'
                                            className='icon active swipe-to-top'
                                          >
                                            <i className='fas fa-heart'></i>
                                          </Link>
                                          <div
                                            className='icon swipe-to-top'
                                            data-toggle='modal'
                                            data-target='#quickViewModal'
                                          >
                                            <i className='fas fa-eye'></i>
                                          </div>
                                          <Link
                                            to='/compare'
                                            className='icon swipe-to-top'
                                          >
                                            <i
                                              className='fas fa-align-right'
                                              data-fa-transform='rotate-90'
                                            ></i>
                                          </Link>
                                        </div>

                                        <button
                                          type='button'
                                          className='btn btn-secondary btn-block swipe-to-top'
                                          onClick={() =>
                                            addProductToCart(product)
                                          }
                                        >
                                          Add to Cart
                                        </button>
                                      </div>
                                    </div>
                                    <div className='pro-description'>
                                      <span className='pro-info'>
                                        {product.categories[0].categories_name}
                                      </span>
                                      <h2 className='pro-title'>
                                        <Link
                                          to={
                                            '/product-page1/' +
                                            product.products_id
                                          }
                                        >
                                          {product.products_name}
                                        </Link>
                                      </h2>

                                      <div className='pro-price'>
                                        <ins>${product.products_price}</ins>
                                      </div>
                                      <div className='pro-mobile-buttons d-lg-none d-xl-none'>
                                        <button
                                          type='button'
                                          className='btn btn-secondary btn-block swipe-to-top'
                                          onClick={() =>
                                            addProductToCart(product)
                                          }
                                        >
                                          Add to Cart
                                        </button>
                                      </div>
                                    </div>
                                  </article>
                                </div>
                              </div>
                            );
                          })
                        : 'null'}

                      {/* ))}   */}
                    </div>
                    {/* 1st tab */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Popular Products */}
      <section
        className='pro-content pro-pl-content'
        style={{ backgroundColor: '#f8f9fa', height: '650px' }}
      >
        <div className='container'>
          <div className='products-area'>
            <div className='row justify-content-center'>
              <div className='col-12 col-lg-6'>
                <div className='pro-heading-title'>
                  <h2> Popular Products</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className='popular-carousel-js row'>
              {props.allProduct !== undefined && props.allProduct.length > 0
                ? props.allProduct.slice(0, 4).map((product, index) => {
                    return (
                      <div className='col-6 col-md-6 col-lg-6'>
                        <div className='popular-product'>
                          <article>
                            <div className='pro-thumb'>
                              <div className='pro-icons mobile-pro-icons d-lg-none d-xl-none'>
                                <Link
                                  to='/wishlist'
                                  className='icon active swipe-to-top'
                                >
                                  <i className='fas fa-heart'></i>
                                </Link>
                                <div
                                  className='icon swipe-to-top'
                                  data-toggle='modal'
                                  data-target='#quickViewModal'
                                >
                                  <i className='fas fa-eye'></i>
                                </div>
                                <Link
                                  to='/compare'
                                  className='icon swipe-to-top'
                                >
                                  <i
                                    className='fas fa-align-right'
                                    data-fa-transform='rotate-90'
                                  ></i>
                                </Link>
                              </div>
                              <Link
                                to={'/product-page1/' + product.products_id}
                              >
                                <span className='pro-image'>
                                  <img
                                    className='img-fluid'
                                    src={SERVER_URI + product.products_image}
                                    alt='Product '
                                  />
                                </span>
                                <span className='pro-image-hover swipe-to-top'>
                                  <img
                                    className='img-fluid'
                                    src={SERVER_URI + product.products_image}
                                    alt='Product '
                                  />
                                </span>
                              </Link>
                              <div className='pro-buttons d-none d-lg-block d-xl-block'>
                                <div className='pro-icons'>
                                  <Link
                                    to='/wishlist'
                                    className='icon active swipe-to-top'
                                  >
                                    <i className='fas fa-heart'></i>
                                  </Link>
                                  <div
                                    className='icon swipe-to-top'
                                    data-toggle='modal'
                                    data-target='#quickViewModal'
                                  >
                                    <i className='fas fa-eye'></i>
                                  </div>
                                  <Link
                                    to='/compare'
                                    className='icon swipe-to-top'
                                  >
                                    <i
                                      className='fas fa-align-right'
                                      data-fa-transform='rotate-90'
                                    ></i>
                                  </Link>
                                </div>
                              </div>
                              <div className='pro-tag'>Sale</div>
                            </div>
                            <div className='pro-description'>
                              <div>
                                <span className='pro-info'>
                                  {product.categories[0].categories_name}
                                </span>
                                <h2 className='pro-title'>
                                  <Link
                                    to={'/product-page1/' + product.products_id}
                                  >
                                    {product.products_name}
                                  </Link>
                                </h2>

                                <div className='pro-price'>
                                  <del>$220</del>
                                  <ins>{product.products_price}</ins>
                                </div>
                                <div className='pro-options'>
                                  <div className='color-selection'>
                                    <h4>
                                      Color: <span>Silver</span>
                                    </h4>
                                    <ul>
                                      <li className='active'>
                                        <a
                                          className='green '
                                          href='javascript:void(0)'
                                        ></a>
                                      </li>
                                      <li>
                                        <a
                                          className='red '
                                          href='javascript:void(0)'
                                        ></a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <button
                                  type='button'
                                  className='btn btn-secondary btn-block swipe-to-top'
                                  onClick={() => addProductToCart(product)}
                                >
                                  Add to Cart
                                </button>
                              </div>
                            </div>
                          </article>
                        </div>
                      </div>
                    );
                  })
                : 'null'}
            </div>
          </div>
        </div>
      </section>
      {/* Special Offer */}
      <section className='pro-content pro-tr-content'>
        <div className='container'>
          <div className='products-area '>
            <div className='row justify-content-center'>
              <div className='col-12 col-lg-6'>
                <div className='pro-heading-title'>
                  <h2>Special Offers</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>

            <div className='tab-carousel-js row'>
              {props.allProduct !== undefined && props.allProduct.length > 0
                ? props.allProduct.slice(0, 8).map((product, index) => {
                    return (
                      <div className='col-6 col-md-4 col-lg-3 ' key={index}>
                        <div className='product aos-init aos-animate '>
                          <article>
                            <div className='pro-thumb '>
                              <Link
                                to={'/product-page1/' + product.products_id}
                              >
                                <span className='pro-image'>
                                  <img
                                    className='img-fluid'
                                    src={SERVER_URI + product.products_image}
                                    alt='Product '
                                  />
                                </span>
                                <span className='pro-image-hover swipe-to-top'>
                                  <img
                                    className='img-fluid'
                                    src={SERVER_URI + product.products_image}
                                    alt='Product '
                                  />
                                </span>
                              </Link>

                              <div className='countdown pro-timer'>
                                <span className='days'></span>
                                <span className='hours'></span>
                                <span className='mintues'></span>
                                <span className='seconds'></span>
                              </div>
                            </div>

                            <div className='pro-description'>
                              <span className='pro-info'>
                                {product.categories[0].categories_name}
                              </span>
                              <h2 className='pro-title'>
                                <Link
                                  to={'/product-page1/' + product.products_id}
                                >
                                  {product.products_name}
                                </Link>
                              </h2>

                              <div className='pro-btns'>
                                <button
                                  type='button'
                                  className='btn btn-secondary swipe-to-top'
                                  onClick={() => addProductToCart(product)}
                                >
                                  Add to Cart
                                </button>
                                <div className='pro-price'>
                                  <ins>${product.products_price}</ins>
                                </div>
                              </div>
                            </div>
                          </article>
                        </div>
                      </div>
                    );
                  })
                : 'null'}
            </div>
          </div>
        </div>
      </section>
      {/* Blogs */}
      <section className='pro-content blog-content'>
        <div className='container'>
          {/* heading */}

          <div className='row justify-content-center'>
            <div className='col-12 col-lg-6'>
              <div className='pro-heading-title'>
                <h2> From the blog</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  venenatis felis tempus feugiat maximus. Aliquam erat volutpat.
                  Aenean eget viverra mi. Duis pulvinar elit massa, vitae
                  posuere urna blandit sed. Praesent ut dignissim risus.{' '}
                </p>
              </div>
            </div>
          </div>
          <div className='blog-carousel-js row'>
            <div className='col-6 col-md-4 pro-blog'>
              <div className='pro-thumb'>
                <div className='blog-date'>
                  30
                  <small>Dec</small>
                </div>

                <img
                  className='img-fluid swipe-to-top'
                  src='assets/images/blogs/blog_post_1.jpg'
                  alt='Product'
                />
              </div>
              <div className='pro-detail'>
                <h2>
                  <Link to='/blog-page1'>
                    Woman wearing Silver-colore ring pendant necklaces
                  </Link>
                </h2>

                <p>
                  Lorem ipsum dolor sit amet, sed do eiusmod tempor incdidunt ut
                  labore et dolore magna aliqua [....]
                </p>
                <Link to='/blog-page1' className='pro-readmore' tabindex='0'>
                  Read more
                </Link>
              </div>
            </div>
            <div className='col-6 col-md-4 pro-blog'>
              <div className='pro-thumb'>
                <div className='blog-date'>
                  18
                  <small>aug</small>
                </div>

                <img
                  className='img-fluid'
                  src='assets/images/blogs/blog_post_2.jpg'
                  alt='Product'
                />
              </div>
              <div className='pro-detail'>
                <h2>
                  <Link to='/blog-page1'>
                    White gold engagement rings for couples
                  </Link>
                </h2>

                <p>
                  Lorem ipsum dolor sit amet, sed do eiusmod tempor incdidunt ut
                  labore et dolore magna aliqua [....]
                </p>
                <Link to='/blog-page1' className='pro-readmore' tabindex='0'>
                  Read more
                </Link>
              </div>
            </div>
            <div className='col-6 col-md-4 pro-blog'>
              <div className='pro-thumb'>
                <div className='blog-date'>
                  01
                  <small>Sep</small>
                </div>

                <img
                  className='img-fluid'
                  src='assets/images/blogs/blog_post_3.jpg'
                  alt='Product'
                />
              </div>
              <div className='pro-detail'>
                <h2>
                  <Link to='/blog-page1'>
                    Shallow focus photo of person putting gold-colored ring
                  </Link>
                </h2>

                <p>
                  Lorem ipsum dolor sit amet, sed do eiusmod tempor incdidunt ut
                  labore et dolore magna aliqua [....]
                </p>
                <Link to='/blog-page1' className='pro-readmore' tabindex='0'>
                  Read more
                </Link>
              </div>
            </div>
            <div className='col-6 col-md-4 pro-blog'>
              <div className='pro-thumb'>
                <div className='blog-date'>
                  22
                  <small>Oct</small>
                </div>

                <img
                  className='img-fluid'
                  src='assets/images/blogs/blog_post_4.jpg'
                  alt='Product'
                />
              </div>
              <div className='pro-detail'>
                <h2>
                  <Link to='/blog-page1'>
                    Pearl necklace jewelry treasure box
                  </Link>
                </h2>

                <p>
                  Lorem ipsum dolor sit amet, sed do eiusmod tempor incdidunt ut
                  labore et dolore magna aliqua [....]
                </p>
                <Link to='/blog-page1' className='pro-readmore' tabindex='0'>
                  Read more
                </Link>
              </div>
            </div>
            <div className='col-6 col-md-4 pro-blog'>
              <div className='pro-thumb'>
                <div className='blog-date'>
                  22
                  <small>Jan</small>
                </div>

                <img
                  className='img-fluid'
                  src='assets/images/blogs/blog_post_5.jpg'
                  alt='Product'
                />
              </div>
              <div className='pro-detail'>
                <h2>
                  <Link to='/blog-page1'>
                    Woman wearing all kind of silver colore jewelery
                  </Link>
                </h2>

                <p>
                  Lorem ipsum dolor sit amet, sed do eiusmod tempor incdidunt ut
                  labore et dolore magna aliqua [....]
                </p>
                <Link to='/blog-page1' className='pro-readmore' tabindex='0'>
                  Read more
                </Link>
              </div>
            </div>
            <div className='col-6 col-md-4 pro-blog'>
              <div className='pro-thumb'>
                <div className='blog-date'>
                  12
                  <small>Mar</small>
                </div>

                <img
                  className='img-fluid'
                  src='assets/images/blogs/blog_post_6.jpg'
                  alt='Product'
                />
              </div>
              <div className='pro-detail'>
                <h2>
                  <Link to='/blog-page1'>
                    Gold bangle is worn on top of the engagement band
                  </Link>
                </h2>

                <p>
                  Lorem ipsum dolor sit amet, sed do eiusmod tempor incdidunt ut
                  labore et dolore magna aliqua [....]
                </p>
                <Link to='/blog-page1' className='pro-readmore' tabindex='0'>
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Modal */}
      <div
        className='modal fade'
        id='quickViewModal'
        tabindex='-1'
        role='dialog'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-lg' role='document'>
          <div className='modal-content'>
            <div className='modal-body'>
              <div className='container'>
                <div className='row align-items-center'>
                  <div className='col-12 col-md-6'>
                    <div className='row '>
                      <div
                        id='quickViewCarousel'
                        className='carousel slide'
                        data-ride='carousel'
                      >
                        {/* The slideshow */}
                        <div className='carousel-inner'>
                          <div className='carousel-item active'>
                            <img
                              className='img-fluid'
                              src='assets/images/gallery/preview/Product_image_01.jpg'
                              alt='Product'
                            />
                          </div>
                          <div className='carousel-item'>
                            <img
                              className='img-fluid'
                              src='assets/images/gallery/preview/Product_image_02.jpg'
                              alt='Product'
                            />
                          </div>
                          <div className='carousel-item'>
                            <img
                              className='img-fluid'
                              src='assets/images/gallery/preview/Product_image_03.jpg'
                              alt='Product'
                            />
                          </div>
                          <div className='carousel-item'>
                            <img
                              className='img-fluid'
                              src='assets/images/gallery/preview/Product_image_04.jpg'
                              alt='Product'
                            />
                          </div>
                        </div>
                        {/* Left and right controls */}
                        <Link
                          className='carousel-control-prev'
                          to='#quickViewCarousel'
                          data-slide='prev'
                        >
                          <span className='fas fa-angle-left '></span>
                        </Link>
                        <Link
                          className='carousel-control-next'
                          to='#quickViewCarousel'
                          data-slide='next'
                        >
                          <span className='fas fa-angle-right '></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className='col-12 col-md-6'>
                    <div className='pro-description'>
                      <h2 className='pro-title'>
                        Stylish Necklace Women Kolye Heart
                      </h2>

                      <div className='pro-price'>
                        <del>$120</del>
                        <ins>$110</ins>
                      </div>

                      <div className='pro-infos'>
                        <div className='pro-single-info'>
                          <b>Product ID :</b>1004
                        </div>
                        <div className='pro-single-info'>
                          <b>Categroy :</b>
                          <Link to='#'>Rings</Link>
                        </div>
                        <div className='pro-single-info'>
                          <b>Tags :</b>
                          <ul>
                            <li>
                              <Link to='#'>bracelets</Link>
                            </li>
                            <li>
                              <Link to='#'>diamond</Link>
                            </li>
                            <li>
                              <Link to='#'>ring</Link>
                            </li>
                          </ul>
                        </div>
                        <div className='pro-single-info'>
                          <b />
                          Available :<b />
                          <span className='text-secondary'>InStock</span>
                        </div>
                      </div>

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore.
                      </p>
                      <div className='pro-counter'>
                        <div className='input-group item-quantity'>
                          <input
                            type='text'
                            id='quantity1'
                            name='quantity'
                            className='form-control '
                            value='10'
                          />

                          <span className='input-group-btn'>
                            <button
                              type='button'
                              value='quantity1'
                              className='quantity-plus btn'
                              data-type='plus'
                              data-field=''
                            >
                              <i className='fas fa-plus'></i>
                            </button>

                            <button
                              type='button'
                              value='quantity1'
                              className='quantity-minus btn'
                              data-type='minus'
                              data-field=''
                            >
                              <i className='fas fa-minus'></i>
                            </button>
                          </span>
                        </div>
                        <button
                          type='button'
                          className='btn btn-secondary btn-lg swipe-to-top'
                          onClick='notificationCart();'
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Mobile */}
      <Footer />
    </Fragment>
  );
};
//}
Landing.propTypes = {
  //setAlert: PropTypes.func.isRequired,
  increaseItemQuantity: PropTypes.func.isRequired,
  getAllProducts: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  Message: PropTypes.string,
  allProduct: PropTypes.array.isRequired,
  cartProduct: PropTypes.array.isRequired,
  addItemToCart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  Message: state.product.message,
  allProduct: state.product.allProduct,
  cartProduct: state.product.cartProduct
});

export default withRouter(
  connect(mapStateToProps, {
    increaseItemQuantity,
    addItemToCart,
    getAllProducts,
    setAlert
  })(Landing)
);
