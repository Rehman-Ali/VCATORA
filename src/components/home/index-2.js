import React, { Fragment, useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { loadCss, loadScript } from '../utils/loadScripts';
import Footer from '../layout/Footer';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllProducts } from '../../actions/product';
import { SERVER_URI } from '../utils/config';

const Home_2 = props => {
  const [formData, setFormData] = useState({
    page_number: 0,
    language_id: 1,
    currency_code: 'usd'
  });

  useEffect(() => {
    props.getAllProducts({ page_number, language_id, currency_code });
    setTimeout(() => {
      loadCss();
      loadScript();
    }, 500);
    // setTimeout(() => {
    // }, 1500);

    console.log('use effect run');
  }, []);
  const { page_number, language_id, currency_code } = formData;

  console.log('console server URI', SERVER_URI);
  // componentWillMount() {
  //   loadCss();
  // }
  // componentDidMount() {
  //   loadScript();
  // }

  // render() {
  return (
    <Fragment>
      {/* Paste this code after body tag */}
      {/* <div className="se-pre-con" /> */}

      {/* Revolution Layer Slider */}
      <div className='carousel-content carousel-content-home-page-2'>
        <div className='container-fuild'>
          <div
            id='rev_slider_1077_1_wrapper'
            className='rev_slider_wrapper fullscreen-container'
            data-alias='scroll-effect136'
            data-source='gallery'
            style={{ padding: 0 }}
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
                  data-hideafterloop={0}
                  data-hideslideonmobile='off'
                  data-easein='Power4.easeInOut'
                  data-easeout='Power4.easeInOut'
                  data-masterspeed={1000}
                  data-thumb
                  data-rotate={0}
                  data-fstransition='fade'
                  data-fsmasterspeed={1500}
                  data-fsslotamount={7}
                  data-saveperformance='off'
                  data-title='Big & Bold'
                  data-param1
                  data-param2
                  data-param3
                  data-param4
                  data-param5
                  data-param6
                  data-param7
                  data-param8
                  data-param9
                  data-param10
                  data-description
                >
                  {/* MAIN IMAGE */}
                  <img
                    src='assets/images/revolution_layer_slider_demo_2/Slider_01_01.jpg'
                    alt='slider'
                    data-bgposition='center center'
                    data-bgfit='cover'
                    data-bgrepeat='no-repeat'
                    data-bgparallax={10}
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
                      data-textalign="['left','left','left','left']"
                      data-paddingtop='[10,10,10,10]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingbottom='[0,0,10,10]'
                      data-paddingleft='[0,0,0,0]'
                      style={{
                        zIndex: 6,
                        color: '#212121',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      iMac Refresh Arriving
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
                      data-textalign="['left','left','left','left']"
                      data-paddingtop='[0,0,0,0]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingbottom='[0,0,0,0]'
                      data-paddingleft='[0,0,0,0]'
                      style={{
                        zIndex: 7,
                        whiteSpace: 'normal',
                        color: '#212121'
                      }}
                    >
                      Crystal Clear Photos, sharp Text{' '}
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
                      data-actions='[{"event":"click","action":"simplelink","target": "_self","url":"shop-page2.html"}]'
                      data-basealign='slide'
                      data-responsive_offset='off'
                      data-responsive='off'
                      data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","speed":1500,"to":"o:1;","delay":650,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"y:50px;opacity:0;","ease":"Power2.easeInOut"},{"frame":"hover","speed":"300","ease":"Power1.easeInOut","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);bw:1px 1px 1px 1px;"}]'
                      data-textalign="['center','left','left','left']"
                      data-paddingtop='[15,15,15,15]'
                      data-paddingright='[50,50,50,50]'
                      data-paddingbottom='[15,15,15,15]'
                      data-paddingleft='[50,50,50,50]'
                      style={{
                        zIndex: 8,
                        whiteSpace: 'nowrap',
                        outline: 'none',
                        boxSizing: 'border-box',
                        MozBoxSizing: 'border-box',
                        WebkitBoxSizing: 'border-box',
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
                  data-hideafterloop={0}
                  data-hideslideonmobile='off'
                  data-easein='Power4.easeInOut'
                  data-easeout='Power4.easeInOut'
                  data-masterspeed={1000}
                  data-thumb
                  data-rotate={0}
                  data-saveperformance='off'
                  data-title='NEW ELEGENCE'
                  data-param1
                  data-param2
                  data-param3
                  data-param4
                  data-param5
                  data-param6
                  data-param7
                  data-param8
                  data-param9
                  data-param10
                  data-description
                >
                  {/* MAIN IMAGE */}
                  <img
                    src='assets/images/revolution_layer_slider_demo_2/Slider_01_02.jpg'
                    alt='Slider'
                    data-bgposition='center center'
                    data-bgfit='cover'
                    data-bgparallax={10}
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
                      data-textalign="['center','center','center','center']"
                      data-paddingtop='[10,10,10,10]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingbottom='[10,10,10,10]'
                      data-paddingleft='[0,0,0,0]'
                      style={{
                        zIndex: 11,
                        whiteSpace: 'nowrap',
                        color: '#fff'
                      }}
                    >
                      Split Air Conditioners
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
                      data-textalign="['center','center','center','center']"
                      data-paddingtop='[0,0,0,0]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingbottom='[0,0,0,0]'
                      data-paddingleft='[0,0,0,0]'
                      style={{
                        zIndex: 12,
                        whiteSpace: 'normal',
                        color: '#fff'
                      }}
                    >
                      Fine weather all year round
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
                      data-actions='[{"event":"click","action":"simplelink","target": "_self","url":"shop-page2.html"}]'
                      data-basealign='slide'
                      data-responsive_offset='off'
                      data-responsive='off'
                      data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","speed":1500,"to":"o:1;","delay":650,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"y:50px;opacity:0;","ease":"Power2.easeInOut"},{"frame":"hover","speed":"300","ease":"Power1.easeInOut","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);bw:1px 1px 1px 1px;"}]'
                      data-textalign="['center','right','center','center']"
                      data-paddingtop='[15,15,15,15]'
                      data-paddingright='[50,50,50,50]'
                      data-paddingbottom='[15,15,15,15]'
                      data-paddingleft='[50,50,50,50]'
                      style={{
                        zIndex: 13,
                        whiteSpace: 'nowrap',
                        outline: 'none',
                        boxSizing: 'border-box',
                        MozBoxSizing: 'border-box',
                        WebkitBoxSizing: 'border-box',
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
                  data-hideafterloop={0}
                  data-hideslideonmobile='off'
                  data-easein='Power4.easeInOut'
                  data-easeout='Power4.easeInOut'
                  data-masterspeed={1000}
                  data-thumb
                  data-rotate={0}
                  data-saveperformance='off'
                  data-title='Beauty Here'
                  data-param1
                  data-param2
                  data-param3
                  data-param4
                  data-param5
                  data-param6
                  data-param7
                  data-param8
                  data-param9
                  data-param10
                  data-description
                >
                  {/* MAIN IMAGE */}
                  <img
                    src='assets/images/revolution_layer_slider_demo_2/Slider_01_03.jpg'
                    alt='Slider'
                    data-bgposition='center center'
                    data-bgfit='cover'
                    data-bgrepeat='no-repeat'
                    data-bgparallax={10}
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
                      data-hoffset="['550','300','300','20']"
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
                      data-textalign="['left','left','left','right']"
                      data-paddingtop='[10,10,10,10]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingbottom='[0,0,10,10]'
                      data-paddingleft='[0,0,0,0]'
                      style={{
                        zIndex: 6,
                        color: '#212121',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      Samsung Galaxy A50
                    </div>
                    {/* LAYER NR. 8 */}
                    <div
                      className='tp-caption BigBold-SubTitle  '
                      id='slide-3044-layer-2'
                      data-x="['left','left','left','right']"
                      data-hoffset="['550','300','300','20']"
                      data-y="['top','top','top','top']"
                      data-voffset="['230','110','110','60']"
                      data-fontsize="['22','15','18','16']"
                      data-lineheight="['24','24','24','20']"
                      data-width="['410','410','410','280']"
                      data-height="['60','100','100','50']"
                      data-whitespace='normal'
                      data-type='text'
                      data-basealign='slide'
                      data-responsive_offset='off'
                      data-responsive='off'
                      data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","speed":1500,"to":"o:1;","delay":650,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"y:50px;opacity:0;","ease":"Power2.easeInOut"}]'
                      data-textalign="['left','left','left','right']"
                      data-paddingtop='[0,0,0,0]'
                      data-paddingright='[0,0,0,0]'
                      data-paddingbottom='[0,0,0,0]'
                      data-paddingleft='[0,0,0,0]'
                      style={{
                        zIndex: 7,
                        whiteSpace: 'normal',
                        color: '#212121'
                      }}
                    >
                      Meet a New Generation Galaxy Phones
                    </div>
                    {/* LAYER NR. 9 */}
                    <div
                      className='tp-caption BigBold-Button rev-btn swipe-to-top'
                      id='slide-3044-layer-3'
                      data-x="['left','left','left','right']"
                      data-hoffset="['550','300','300','20']"
                      data-y="['top','top','top','top']"
                      data-voffset="['300','170','170','120']"
                      data-width="['180','none','none','none']"
                      data-height='none'
                      data-whitespace='nowrap'
                      data-type='button'
                      data-actions='[{"event":"click","action":"simplelink","target": "_self","url":"shop-page2.html"}]'
                      data-basealign='slide'
                      data-responsive_offset='off'
                      data-responsive='off'
                      data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","speed":1500,"to":"o:1;","delay":650,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"y:50px;opacity:0;","ease":"Power2.easeInOut"},{"frame":"hover","speed":"300","ease":"Power1.easeInOut","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);bw:1px 1px 1px 1px;"}]'
                      data-textalign="['left','left','left','right']"
                      data-paddingtop='[15,15,15,15]'
                      data-paddingright='[50,50,50,50]'
                      data-paddingbottom='[15,15,15,15]'
                      data-paddingleft='[50,50,50,50]'
                      style={{
                        zIndex: 8,
                        whiteSpace: 'nowrap',
                        outline: 'none',
                        boxSizing: 'border-box',
                        MozBoxSizing: 'border-box',
                        WebkitBoxSizing: 'border-box',
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
              />{' '}
            </div>
          </div>
          {/* END REVOLUTION SLIDER */}
        </div>
      </div>
      {/* Categories */}
      <div className='pro-content categories-content'>
        <div className='container-fluid'>
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-6'>
              <div className='pro-heading-title'>
                <h1> Welcome to store</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  venenatis felis tempus feugiat maximus. Aliquam erat volutpat.
                  Aenean eget viverra mi. Duis pulvinar elit massa, vitae
                  posuere urna blandit sed. Praesent ut dignissim risus.{' '}
                </p>
              </div>
            </div>
          </div>
          {/* Categories */}
          <div className='tab-category-carousel-js row'>
            <div className='col-6 col-md-3'>
              <div className='pro-Categories'>
                <div className='pro-Categories-thumb swipe-to-top'>
                  <div className='pro-Categories-title'>
                    <Link to='#'>Mobiles and Tablets</Link>
                  </div>
                  <img
                    className='img-fluid '
                    src='assets/images/categories/category_image_1.jpg'
                    alt='Category'
                  />
                </div>
                <div className='pro-Categories-detail'>
                  <h2>
                    <Link to='#'>Mobiles and Tablets</Link>
                  </h2>
                  <ul className='pro-Categories-meta'>
                    <li>
                      <Link to='#' tabIndex={0}>
                        Apple{' '}
                      </Link>
                    </li>
                    <li>
                      <Link to='#' tabIndex={0}>
                        Samsung
                      </Link>
                    </li>
                    <li>
                      <Link to='#' tabIndex={0}>
                        PowerBank{' '}
                      </Link>
                    </li>
                    <li>
                      <Link to='/shop-page1' tabIndex={0}>
                        See all categories
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-6 col-md-3'>
              <div className='pro-Categories'>
                <div className='pro-Categories-thumb'>
                  <div className='pro-Categories-title'>
                    <Link to='#'>Computers &amp; Accessories</Link>
                  </div>
                  <img
                    className='img-fluid swipe-to-top'
                    src='assets/images/categories/category_image_2.jpg'
                    alt='Category'
                  />
                </div>
                <div className='pro-Categories-detail'>
                  <h2>
                    <Link to='#'>Computers &amp; Accessories</Link>
                  </h2>
                  <ul className='pro-Categories-meta'>
                    <li>
                      <Link to='#' tabIndex={0}>
                        Computers{' '}
                      </Link>
                    </li>
                    <li>
                      <Link to='#' tabIndex={0}>
                        Laptops
                      </Link>
                    </li>
                    <li>
                      <Link to='#' tabIndex={0}>
                        Monitors{' '}
                      </Link>
                    </li>
                    <li>
                      <Link to='/shop-page1' tabIndex={0}>
                        See all categories
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-6 col-md-3'>
              <div className='pro-Categories'>
                <div className='pro-Categories-thumb'>
                  <div className='pro-Categories-title'>
                    <Link to='#'>Cameras, Audio &amp; Video</Link>
                  </div>
                  <img
                    className='img-fluid swipe-to-top'
                    src='assets/images/categories/category_image_3.jpg'
                    alt='Category'
                  />
                </div>
                <div className='pro-Categories-detail'>
                  <h2>
                    <Link to='#'>Cameras, Audio &amp; Video</Link>
                  </h2>
                  <ul className='pro-Categories-meta'>
                    <li>
                      <Link to='#' tabIndex={0}>
                        Audio{' '}
                      </Link>
                    </li>
                    <li>
                      <Link to='#' tabIndex={0}>
                        Video
                      </Link>
                    </li>
                    <li>
                      <Link to='#' tabIndex={0}>
                        Headphones{' '}
                      </Link>
                    </li>
                    <li>
                      <Link to='/shop-page1' tabIndex={0}>
                        See all categories
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-6 col-md-3'>
              <div className='pro-Categories'>
                <div className='pro-Categories-thumb'>
                  <div className='pro-Categories-title'>
                    <Link to='#'>Home appliances</Link>
                  </div>
                  <img
                    className='img-fluid swipe-to-top'
                    src='assets/images/categories/category_image_4.jpg'
                    alt='Category'
                  />
                </div>
                <div className='pro-Categories-detail'>
                  <h2>
                    <Link to='#'>Home appliances</Link>
                  </h2>
                  <ul className='pro-Categories-meta'>
                    <li>
                      <Link to='#' tabIndex={0}>
                        TV Accessories
                      </Link>
                    </li>
                    <li>
                      <Link to='#' tabIndex={0}>
                        Air Conditioner{' '}
                      </Link>
                    </li>
                    <li>
                      <Link to='#' tabIndex={0}>
                        Dryer{' '}
                      </Link>
                    </li>
                    <li>
                      <Link to='/shop-page1' tabIndex={0}>
                        See all categories
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-6 col-md-3'>
              <div className='pro-Categories'>
                <div className='pro-Categories-thumb'>
                  <div className='pro-Categories-title'>
                    <Link to='#'>Kitchen Appliances</Link>
                  </div>
                  <img
                    className='img-fluid swipe-to-top'
                    src='assets/images/categories/category_image_5.jpg'
                    alt='Category'
                  />
                </div>
                <div className='pro-Categories-detail'>
                  <h2>
                    <Link to='#'>Kitchen Appliances</Link>
                  </h2>
                  <ul className='pro-Categories-meta'>
                    <li>
                      <Link to='#' tabIndex={0}>
                        Bakeware
                      </Link>
                    </li>
                    <li>
                      <Link to='#' tabIndex={0}>
                        Cookware
                      </Link>
                    </li>
                    <li>
                      <Link to='#' tabIndex={0}>
                        Gas Stoves
                      </Link>
                    </li>
                    <li>
                      <Link to='/shop-page1' tabIndex={0}>
                        See all categories
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-6 col-md-3'>
              <div className='pro-Categories'>
                <div className='pro-Categories-thumb'>
                  <div className='pro-Categories-title'>
                    <Link to='#'>Music and video games</Link>
                  </div>
                  <img
                    className='img-fluid swipe-to-top'
                    src='assets/images/categories/category_image_6.jpg'
                    alt='Category'
                  />
                </div>
                <div className='pro-Categories-detail'>
                  <h2>
                    <Link to='#'>Music and video games</Link>
                  </h2>
                  <ul className='pro-Categories-meta'>
                    <li>
                      <Link to='#' tabIndex={0}>
                        TV &amp; Video Devices{' '}
                      </Link>
                    </li>
                    <li>
                      <Link to='#' tabIndex={0}>
                        TV Accessories
                      </Link>
                    </li>
                    <li>
                      <Link to='#' tabIndex={0}>
                        Air Conditioner{' '}
                      </Link>
                    </li>
                    <li>
                      <Link to='/shop-page1' tabIndex={0}>
                        See all categories
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Popular Products */}
      <section className='pro-content pro-pl-content '>
        <div className='container'>
          <div className='products-area'>
            <div className='row justify-content-center'>
              <div className='col-12 col-lg-6'>
                <div className='pro-heading-title'>
                  <h2>Popular Products</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className=' row'>
              {props.allProduct !== undefined && props.allProduct.length > 0
                ? props.allProduct.slice(0, 8).map((product, index) => {
                    return (
                      <div className='col-6 col-md-4 col-lg-3' key={index}>
                        <div className='product'>
                          <article>
                            <div className='pro-thumb '>
                              <Link
                                to={'/product-page1/' + product.products_id}
                              >
                                <span className='pro-image'>
                                  <img
                                    className='img-fluid'
                                    src={SERVER_URI + product.products_image}
                                    alt='Product'
                                  />
                                </span>
                                <span className='pro-image-hover swipe-to-top'>
                                  <img
                                    className='img-fluid'
                                    src={SERVER_URI + product.products_image}
                                    alt='Product'
                                  />
                                </span>
                              </Link>
                              <div className='pro-buttons'>
                                <div className='pro-icons'>
                                  <Link
                                    to='/wishlist'
                                    className='icon active swipe-to-top'
                                  >
                                    <i className='fas fa-heart' />
                                  </Link>
                                  <div
                                    className='icon swipe-to-top'
                                    data-toggle='modal'
                                    data-target='#quickViewModal'
                                  >
                                    <i className='fas fa-eye' />
                                  </div>
                                  <Link
                                    to='/compare'
                                    className='icon swipe-to-top'
                                  >
                                    <i
                                      className='fas fa-align-right'
                                      data-fa-transform='rotate-90'
                                    />
                                  </Link>
                                </div>
                                <Link
                                  to='/shop-page1'
                                  className='btn btn-secondary btn-block swipe-to-top'
                                >
                                  Add to Cart
                                </Link>
                              </div>
                              <div className='pro-tag'>Sale</div>
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
                              <div className='pro-price'>
                                <del>$999</del>
                                <ins>${product.products_price}</ins>
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
      <section className='pro-content pro-mini-content'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-4'>
              <div className='pro-banner-text'>
                <div className='pro-banner-thumb'>
                  <img
                    className='img-fluid '
                    src='assets/images/categories/category_image_6.jpg'
                    alt='Category'
                  />
                </div>
                <div className='pro-image-text'>
                  <h4>Game Accessories</h4>
                  <Link to='#' className='btn btn-secondary swipe-to-top'>
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-4'>
              <div className='pro-banner-text'>
                <div className='pro-banner-thumb'>
                  <img
                    className='img-fluid '
                    src='assets/images/categories/category_image_3.jpg'
                    alt='Category'
                  />
                </div>
                <div className='pro-image-text'>
                  <h4>Multimedia Devices</h4>
                  <Link to='#' className='btn btn-secondary swipe-to-top'>
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-4'>
              <div className='pro-banner-text'>
                <div className='pro-banner-thumb'>
                  <img
                    className='img-fluid '
                    src='assets/images/categories/category_image_2.jpg'
                    alt='Category'
                  />
                </div>
                <div className='pro-image-text'>
                  <h4>Computers Accessories</h4>
                  <Link to='#' className='btn btn-secondary swipe-to-top'>
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Special Offer */}
      <section className='pro-content pro-sp-content'>
        <div className='container'>
          <div className='products-area '>
            <div className='row'>
              <div className='col-12 col-md-8 col-lg-8'>
                <div className='pro-description'>
                  <span className='pro-info'>Super deal of the Month</span>
                  <h2 className='pro-title'>
                    <Link to='/product-page1'>
                      SMARTWATCH / MOTOROLA MOTO 360 Now Only
                      <ins>$250</ins>
                    </Link>
                  </h2>
                  <div className='countdown pro-timer'>
                    <span className='days' />
                    <span className='hours' />
                    <span className='mintues' />
                    <span className='seconds' />
                  </div>
                  <div className='pro-btns'>
                    <button
                      type='button'
                      className='btn btn-secondary swipe-to-top'
                      onclick='notificationCart();'
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
              <div className='col-12 col-md-4 col-lg-4'>
                <div className='pro-thumb '>
                  <Link to='/product-page1'>
                    <span className='pro-image'>
                      <img
                        className='img-fluid'
                        src='assets/images/product_images_demo_2/deals_of_month.png'
                        alt='Product'
                      />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='pro-content pro-category-content'>
        <div className='container'>
          {/* heading */}
          <div className='row'>
            <div className='col-12 col-md-4'>
              <div className='row justify-content-center'>
                <div className='pro-heading-subtitle'>
                  <h4>Mobiles and Tablets</h4>
                </div>
              </div>
              <div className='pro-category-carousel-js-1 '>
                <div className='pro-category-items'>
                  {props.allProduct !== undefined && props.allProduct.length > 0
                    ? props.allProduct.slice(0, 3).map((product, index) => {
                        return (
                          <div className='pro-single-item'>
                            <div className='pro-thumb'>
                              <Link
                                to={'/product-page1/' + product.products_id}
                              >
                                <span className='pro-image'>
                                  <img
                                    className='img-fluid'
                                    src={SERVER_URI + product.products_image}
                                    alt='Product'
                                  />
                                </span>
                                <span className='pro-image-hover swipe-to-top'>
                                  <img
                                    className='img-fluid'
                                    src={SERVER_URI + product.products_image}
                                    alt='Product'
                                  />
                                </span>
                              </Link>
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
                              <div className='pro-price'>
                                <del>$999</del>
                                <ins>${product.products_price}</ins>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    : 'null'}
                </div>

                <div className='pro-category-items'>
                  {props.allProduct !== undefined && props.allProduct.length > 0
                    ? props.allProduct.slice(0, 3).map((product, index) => {
                        return (
                          <div className='pro-single-item'>
                            <div className='pro-thumb'>
                              <Link
                                to={'/product-page1/' + product.products_id}
                              >
                                <span className='pro-image'>
                                  <img
                                    className='img-fluid'
                                    src={SERVER_URI + product.products_image}
                                    alt='Product'
                                  />
                                </span>
                                <span className='pro-image-hover swipe-to-top'>
                                  <img
                                    className='img-fluid'
                                    src={SERVER_URI + product.products_image}
                                    alt='Product'
                                  />
                                </span>
                              </Link>
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
                              <div className='pro-price'>
                                <del>$999</del>
                                <ins>${product.products_price} </ins>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    : 'null'}
                </div>
                <div className='pro-category-items'>
                  {props.allProduct !== undefined && props.allProduct.length > 0
                    ? props.allProduct.slice(0, 3).map((product, index) => {
                        return (
                          <div className='pro-single-item'>
                            <div className='pro-thumb'>
                              <Link
                                to={'/product-page1/' + product.products_id}
                              >
                                <span className='pro-image'>
                                  <img
                                    className='img-fluid'
                                    src={SERVER_URI + product.products_image}
                                    alt='Product'
                                  />
                                </span>
                                <span className='pro-image-hover swipe-to-top'>
                                  <img
                                    className='img-fluid'
                                    src={SERVER_URI + product.products_image}
                                    alt='Product'
                                  />
                                </span>
                              </Link>
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
                              <div className='pro-price'>
                                <del>$999</del>
                                <ins>${product.products_price}</ins>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    : 'null'}
                </div>
              </div>
            </div>
            <div className='col-12 col-md-4'>
              <div className='row justify-content-center'>
                <div className='pro-heading-subtitle'>
                  <h4>Computers &amp; Accessories</h4>
                </div>
              </div>
              <div className='pro-category-carousel-js-1 '>
                <div className='pro-category-items'>
                  {props.allProduct !== undefined && props.allProduct.length > 0
                    ? props.allProduct.slice(4, 7).map((product, index) => {
                        return (
                          <div className='pro-single-item'>
                            <div className='pro-thumb'>
                              <Link
                                to={'/product-page1/' + product.products_id}
                              >
                                <span className='pro-image'>
                                  <img
                                    className='img-fluid'
                                    src={SERVER_URI + product.products_image}
                                    alt='Product'
                                  />
                                </span>
                                <span className='pro-image-hover swipe-to-top'>
                                  <img
                                    className='img-fluid'
                                    src={SERVER_URI + product.products_image}
                                    alt='Product'
                                  />
                                </span>
                              </Link>
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
                              <div className='pro-price'>
                                <del>$999</del>
                                <ins>${product.products_price}</ins>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    : 'null'}
                </div>

                <div className='pro-category-items'>
                  {props.allProduct !== undefined && props.allProduct.length > 0
                    ? props.allProduct.slice(4, 7).map((product, index) => {
                        return (
                          <div className='pro-single-item'>
                            <div className='pro-thumb'>
                              <Link
                                to={'/product-page1/' + product.products_id}
                              >
                                <span className='pro-image'>
                                  <img
                                    className='img-fluid'
                                    src={SERVER_URI + product.products_image}
                                    alt='Product'
                                  />
                                </span>
                                <span className='pro-image-hover swipe-to-top'>
                                  <img
                                    className='img-fluid'
                                    src={SERVER_URI + product.products_image}
                                    alt='Product'
                                  />
                                </span>
                              </Link>
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
                              <div className='pro-price'>
                                <del>$999</del>
                                <ins>${product.products_price} </ins>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    : 'null'}
                </div>
                <div className='pro-category-items'>
                  {props.allProduct !== undefined && props.allProduct.length > 0
                    ? props.allProduct.slice(4, 7).map((product, index) => {
                        return (
                          <div className='pro-single-item'>
                            <div className='pro-thumb'>
                              <Link
                                to={'/product-page1/' + product.products_id}
                              >
                                <span className='pro-image'>
                                  <img
                                    className='img-fluid'
                                    src={SERVER_URI + product.products_image}
                                    alt='Product'
                                  />
                                </span>
                                <span className='pro-image-hover swipe-to-top'>
                                  <img
                                    className='img-fluid'
                                    src={SERVER_URI + product.products_image}
                                    alt='Product'
                                  />
                                </span>
                              </Link>
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
                              <div className='pro-price'>
                                <del>$999</del>
                                <ins>${product.products_price}</ins>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    : 'null'}
                </div>
              </div>
            </div>

            <div className='col-12 col-md-4'>
              <div className='row justify-content-center'>
                <div className='pro-heading-subtitle'>
                  <h4>Cameras, Audio &amp; Video</h4>
                </div>
              </div>
              <div className='pro-category-carousel-js-1 '>
                <div className='pro-category-items'>
                  {props.allProduct !== undefined && props.allProduct.length > 0
                    ? props.allProduct.slice(6, 9).map((product, index) => {
                        return (
                          <div className='pro-single-item'>
                            <div className='pro-thumb'>
                              <Link
                                to={'/product-page1/' + product.products_id}
                              >
                                <span className='pro-image'>
                                  <img
                                    className='img-fluid'
                                    src={SERVER_URI + product.products_image}
                                    alt='Product'
                                  />
                                </span>
                                <span className='pro-image-hover swipe-to-top'>
                                  <img
                                    className='img-fluid'
                                    src={SERVER_URI + product.products_image}
                                    alt='Product'
                                  />
                                </span>
                              </Link>
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
                              <div className='pro-price'>
                                <del>$999</del>
                                <ins>${product.products_price}</ins>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    : 'null'}
                </div>

                <div className='pro-category-items'>
                  {props.allProduct !== undefined && props.allProduct.length > 0
                    ? props.allProduct.slice(6, 9).map((product, index) => {
                        return (
                          <div className='pro-single-item'>
                            <div className='pro-thumb'>
                              <Link
                                to={'/product-page1/' + product.products_id}
                              >
                                <span className='pro-image'>
                                  <img
                                    className='img-fluid'
                                    src={SERVER_URI + product.products_image}
                                    alt='Product'
                                  />
                                </span>
                                <span className='pro-image-hover swipe-to-top'>
                                  <img
                                    className='img-fluid'
                                    src={SERVER_URI + product.products_image}
                                    alt='Product'
                                  />
                                </span>
                              </Link>
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
                              <div className='pro-price'>
                                <del>$999</del>
                                <ins>${product.products_price} </ins>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    : 'null'}
                </div>
                <div className='pro-category-items'>
                  {props.allProduct !== undefined && props.allProduct.length > 0
                    ? props.allProduct.slice(6, 9).map((product, index) => {
                        return (
                          <div className='pro-single-item'>
                            <div className='pro-thumb'>
                              <Link
                                to={'/product-page1/' + product.products_id}
                              >
                                <span className='pro-image'>
                                  <img
                                    className='img-fluid'
                                    src={SERVER_URI + product.products_image}
                                    alt='Product'
                                  />
                                </span>
                                <span className='pro-image-hover swipe-to-top'>
                                  <img
                                    className='img-fluid'
                                    src={SERVER_URI + product.products_image}
                                    alt='Product'
                                  />
                                </span>
                              </Link>
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
                              <div className='pro-price'>
                                <del>$999</del>
                                <ins>${product.products_price}</ins>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    : 'null'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='info-boxes-content'>
        <div className='container'>
          <div className='info-box-full bg-info-boxes-content'>
            <div className='row'>
              <div className='col-12 col-md-6 col-lg-4 pl-xl-0'>
                <div className='info-box'>
                  <i className='fas fa-truck' />
                  <div className='block'>
                    <h4 className='title'>Free Shipping</h4>
                    <p>We provide free shipping for all order over $200.00</p>
                  </div>
                </div>
              </div>
              <div className='col-12 col-md-6 col-lg-4 pl-xl-0'>
                <div className='info-box'>
                  <i className='fas fa-life-ring' />
                  <div className='block'>
                    <h4 className='title'>Support 24/7</h4>
                    <p>We provide support to our customers within 24 hours.</p>
                  </div>
                </div>
              </div>
              <div className='col-12 col-md-6 col-lg-4 pl-xl-0'>
                <div className='info-box last'>
                  <i className='fas fa-credit-card' />
                  <div className='block'>
                    <h4 className='title'>Safe Payment</h4>
                    <p>We provide always safe payment methods.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Modal */}
      <div
        className='modal fade'
        id='quickViewModal'
        tabIndex={-1}
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
                              src='assets/images/gallery_demo_2/preview/Product_image_01.jpg'
                              alt='product'
                            />
                          </div>
                          <div className='carousel-item'>
                            <img
                              className='img-fluid'
                              src='assets/images/gallery_demo_2/preview/Product_image_02.jpg'
                              alt='product'
                            />
                          </div>
                          <div className='carousel-item'>
                            <img
                              className='img-fluid'
                              src='assets/images/gallery_demo_2/preview/Product_image_03.jpg'
                              alt='product'
                            />
                          </div>
                          <div className='carousel-item'>
                            <img
                              className='img-fluid'
                              src='assets/images/gallery_demo_2/preview/Product_image_04.jpg'
                              alt='product'
                            />
                          </div>
                        </div>
                        {/* Left and right controls */}
                        <Link
                          className='carousel-control-prev'
                          to='#quickViewCarousel'
                          data-slide='prev'
                        >
                          <span className='fas fa-angle-left ' />
                        </Link>
                        <Link
                          className='carousel-control-next'
                          to='#quickViewCarousel'
                          data-slide='next'
                        >
                          <span className='fas fa-angle-right ' />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className='col-12 col-md-6'>
                    <div className='pro-description'>
                      <h2 className='pro-title'>Teclast X22 Air LCD Screen </h2>
                      <div className='pro-price'>
                        <ins>$1100</ins>
                      </div>
                      <div className='pro-infos'>
                        <div className='pro-single-info'>
                          <b>Product ID :</b>1004
                        </div>
                        <div className='pro-single-info'>
                          <b>Categroy :</b>
                          <Link to='#'>Slim LCD Touch Screen</Link>
                        </div>
                        <div className='pro-single-info'>
                          <b>Tags :</b>
                          <ul>
                            <li>
                              <Link to='#'>LCD</Link>
                            </li>
                            <li>
                              <Link to='#'>Monitor</Link>
                            </li>
                            <li>
                              <Link to='#'>Accessories</Link>
                            </li>
                          </ul>
                        </div>
                        <div className='pro-single-info'>
                          <b>Available :</b>
                          <span className='text-secondary'>InStock</span>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor.
                      </p>
                      <div className='pro-counter'>
                        <div className='input-group item-quantity'>
                          <input
                            type='text'
                            id='quantity1'
                            name='quantity'
                            className='form-control quantity '
                            defaultValue={10}
                          />
                          <span className='input-group-btn'>
                            <button
                              type='button'
                              value='quantity1'
                              className='quantity-plus btn'
                              data-type='plus'
                              data-field
                            >
                              <i className='fas fa-plus' />
                            </button>
                            <button
                              type='button'
                              value='quantity1'
                              className='quantity-minus btn'
                              data-type='minus'
                              data-field
                            >
                              <i className='fas fa-minus' />
                            </button>
                          </span>
                        </div>
                        <button
                          type='button'
                          className='btn btn-secondary btn-lg swipe-to-top'
                          onclick='notificationCart();'
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
                <span aria-hidden='true'>×</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};
// }

Home_2.propTypes = {
  //setAlert: PropTypes.func.isRequired,
  getAllProducts: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  Message: PropTypes.string,
  allProduct: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  Message: state.product.message,
  allProduct: state.product.allProduct
});

export default connect(
  mapStateToProps,
  { getAllProducts }
)(withRouter(Home_2));
