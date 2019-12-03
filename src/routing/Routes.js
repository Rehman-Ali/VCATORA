import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Not_Found from '../components/404.js';
import AboutPage1 from '../components/about_page/about-page1';
import AboutPage2 from '../components/about_page/about-page2';
import BlogPage1 from '../components/blog_page/blog-page1';
import BlogPage2 from '../components/blog_page/blog-page2';
import WhiteList from '../components/wishlist';
import CartPage1 from '../components/cart_page/cart-page1';
import CartPage2 from '../components/cart_page/cart-page2';
import Checkout from '../components/order_page/checkout';
import Home_2 from '../components/home/index-2';
import Home_3 from '../components/home/index-3';
import ProductPage1 from '../components/product_page/product-page1';
import ProductPage2 from '../components/product_page/product-page2';
import ProductPage3 from '../components/product_page/product-page3';
import ProductPage4 from '../components/product_page/product-page4';
import ProductPage5 from '../components/product_page/product-page5';
import ProductPage6 from '../components/product_page/product-page6';
import Compare from '../components/compare';
import ShopPage1 from '../components/shop_page/shop-page1';
import ShopPage2 from '../components/shop_page/shop-page2';
import ShopPage3 from '../components/shop_page/shop-page3';
import ShopPage4 from '../components/shop_page/shop-page4';
import ShopPage5 from '../components/shop_page/shop-page5';
import ContactPage1 from '../components/contact-page/contact-page1';
import ContactPage2 from '../components/contact-page/contact-page2';
import SignUp from '../components/login_registration/signup';
import LoginPage1 from '../components/login_registration/login_page/login-page1';
import LoginPage2 from '../components//login_registration/login_page/login-page2';
import Privacy from '../components/privacy';
import Orders from '../components/order_page/orders';
import Refund from '../components/refund';
import Term from '../components/term';
import ShippingAddress from '../components/order_page/shipping-address';
import ChangePassword from '../components/user_page/change-password';
import Profile from '../components/user_page/profile';
import Forgot_Password from '../components/user_page/forgot_password';
import Thankyou from '../components/thankyou';
// import New_arrival from '../components/email-templates/New_Arrival';
// import Amazing_Deal from '../components/email-templates/Amazing_Deals';
// import Forgot_password from '../components/email-templates/Forgot_Password';
// import Signup from '../components/email-templates/Signup';
// import Winter_sale from '../components/email-templates/Winter_Sale';
// import Overall_sale from '../components/email-templates/Overall_Sale';
//import PrivateRoute from './PrivateRoute';
const Routes = () => {
  return (
    <Switch>
      <Route exact path='/404' component={Not_Found} />
      <Route exact path='/thankyou' component={Thankyou} />
      <Route exact path='/about-page1' component={AboutPage1} />
      <Route exact path='/about-page2' component={AboutPage2} />
      <Route exact path='/blog-page1' component={BlogPage1} />
      <Route exact path='/blog-page2' component={BlogPage2} />
      <Route exact path='/wishlist' component={WhiteList} />
      <Route exact path='/cart-page1' component={CartPage1} />
      <Route exact path='/cart-page2' component={CartPage2} />
      <Route exact path='/checkout' component={Checkout} />
      <Route exact path='/index-2' component={Home_2} />
      <Route exact path='/index-3' component={Home_3} />
      <Route
        exact
        path='/product-page1/:products_id'
        component={ProductPage1}
      />
      <Route exact path='/product-page2' component={ProductPage2} />
      <Route exact path='/product-page3' component={ProductPage3} />
      <Route exact path='/product-page4' component={ProductPage4} />
      <Route exact path='/product-page5' component={ProductPage5} />
      <Route exact path='/product-page6' component={ProductPage6} />
      <Route exact path='/compare' component={Compare} />
      <Route exact path='/shop-page1' component={ShopPage1} />
      <Route exact path='/shop-page2' component={ShopPage2} />
      <Route exact path='/shop-page3' component={ShopPage3} />
      <Route exact path='/shop-page4' component={ShopPage4} />
      <Route exact path='/shop-page5' component={ShopPage5} />
      <Route exact path='/contact-page1' component={ContactPage1} />
      <Route exact path='/contact-page2' component={ContactPage2} />
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/login-page1' component={LoginPage1} />
      <Route exact path='/login-page2' component={LoginPage2} />
      <Route exact path='/privacy' component={Privacy} />
      <Route exact path='/refund' component={Refund} />
      <Route exact path='/term' component={Term} />
      <Route exact path='/orders' component={Orders} />
      <Route exact path='/shipping-address' component={ShippingAddress} />
      <Route exact path='/change-password' component={ChangePassword} />
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/forgot-password' component={Forgot_Password} />
      <Route exact path=' /thankyou' component={Thankyou} />

      {/* <Route exact path='/email-templates/amazing-deals' component={Amazing_Deal} />
        <Route exact path='/email-templates/new-arrival' component={New_arrival} />
        <Route exact path='/email-templates/overall-sale' component={Overall_sale} />
        <Route exact path='/email-templates/winter-sale' component={Winter_sale} />
        <Route exact path='/email-templates/signup' component={Signup} />
        <Route exact path='/email-templates/forgot-password' component={Forgot_password} /> */}
    </Switch>
  );
};

export default Routes;
