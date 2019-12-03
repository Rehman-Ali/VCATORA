exports.Css = url => {
  return new Promise((resolve, reject) => {
    // for (var i = 0; i < scripts.length; i++) {
    //   if (scripts[i].src) console.log(i, scripts[i].src)
    //   else console.log(i, scripts[i].innerHTML)
    // }

    let link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    link.onload = function() {
      resolve();
      console.log('style has loaded');
    };

    let headScript = document.querySelector('script');
    headScript.parentNode.insertBefore(link, headScript);
    // headScript.parentNode.removeChild(headScript);
    //document.body.removeChild(link);
  });
};

// for load scripts
exports.Script = src => {
  return new Promise(function(resolve, reject) {
    //document.body.removeChild(script);

    var script = document.createElement('script');
    script.src = src;
    script.addEventListener('load', function() {
      resolve();
      console.log('script has loaded');
    });
    script.addEventListener('error', function(e) {
      reject(e);
    });
    document.body.appendChild(script);
    //document.body.removeChild(script);
    let headLink = document.querySelector('link');
    // headLink.parentNode.insertAfter(script, headLink);
    // headLink.parentNode.removeChild(headLink);
  });
};
exports.loadCss = () => {
  //this.removeCss();

  this.Css('assets/css/style.css');
  this.Css('assets/revolution/css/settings.css');
  this.Css('assets/revolution/css/layers.css');
  this.Css('assets/revolution/css/navigation.css');
  this.Css('https://use.fontawesome.com/releases/v5.7.1/css/all.css');
};

exports.loadScript = () => {
  //this.removeJs();
  this.Script('assets/js/scripts.js');
  this.Script('assets/js/mc-validate.js');
  this.Script('assets/js/subscribe.js');
  this.Script('assets/revolution/js/jquery.themepunch.tools.min.js');
  this.Script('assets/revolution/js/jquery.themepunch.revolution.min.js');
  this.Script(
    'assets/revolution/js/extensions/revolution.extension.actions.min.js'
  );
  this.Script(
    'assets/revolution/js/extensions/revolution.extension.carousel.min.js'
  );
  this.Script(
    'assets/revolution/js/extensions/revolution.extension.kenburn.min.js'
  );
  this.Script(
    'assets/revolution/js/extensions/revolution.extension.layeranimation.min.js'
  );
  this.Script(
    'assets/revolution/js/extensions/revolution.extension.navigation.min.js'
  );
  this.Script(
    'assets/revolution/js/extensions/revolution.extension.parallax.min.js'
  );
  this.Script(
    'assets/revolution/js/extensions/revolution.extension.slideanims.min.js'
  );
  this.Script(
    'assets/revolution/js/extensions/revolution.extension.video.min.js'
  );
};

/// remove the css file on history changes
exports.removeCss = () => {
  var elements = document.querySelectorAll('link[rel=stylesheet]');

  for (var i = 0; i < elements.length; i++) {
    elements[i].parentNode.removeChild(elements[i]);
  }
};

exports.removeJs = () => {
  var selements = document.querySelectorAll('script');
  for (var i = 0; i < selements.length; i++) {
    selements[i].parentNode.removeChild(selements[i]);
  }
};

exports.addMobileCss = () => {
  this.Css('assets/css/style3.css');
  this.Css(
    'https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.css'
  );
};

exports.addMobileScript = () => {
  this.Script('https://code.jquery.com/jquery-3.3.1.slim.min.js');
  this.Script(
    'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js'
  );
  this.Script(
    'https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.concat.min.js'
  );
  this.Script('assets/js/mobile-navigation.js');
};

exports.MobileMenu = () => {
  this.Script('assets/js/mobileMenu.js');

  // this.Script('assets/js/mobileMenu.js');
};
