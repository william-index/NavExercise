

// Object Initializations
// ----------------------------------
var mainMenu = new MainNavigation('.main_menu');
var buildMenu = new MenuBuilder('/api/nav.json', '.main_menu');

// Event Listners
// ----------------------------------

// Toggle open and close for thin menu
$qs('.main_header__burger').addEventListener('click', function(e){
  e.preventDefault();
  $qs('.site_footer').classList.toggle('open');
  mainMenu.toggle_open();
});
$qs('.main_menu__blocker--small').addEventListener('click', function(e){
  mainMenu.toggle_open();
  mainMenu.close_all_subs();
});
$qs('.main_menu__blocker--large').addEventListener('click', function(e){
  mainMenu.close_all_subs();
});

// Event Delgation click listener for sub menus
$qs('.main_menu').addEventListener('click', function(e){
  _parent = e.target.parentNode;
  _has_subs = _parent.classList.contains('main_menu__sub_menu');
  _is_sub = e.target.classList.contains('main_menu__link--sub')

  if(_has_subs && !_is_sub){
    e.preventDefault();
    mainMenu.toggle_sub( _parent );
  }
});

// Methods
// ----------------------------------
/**
* Abbreviation for document.querySelector
* @method $qs
* @param {string} selector
*/
function $qs(selector){
  return document.querySelector(selector);
}

/**
* Abbreviation for document.querySelectorAll
* @method $qsa
* @param {string} selector
*/
function $qsa(selector){
  return document.querySelectorAll(selector);
}
