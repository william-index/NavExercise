(function() {/*
* Controller for the main navigation
* @class MainNavigation
*/
var MainNavigation = (function() {

  /**
  * Represents the MainNavigation
  * @constructs MainNavigation
  * @param {string} sel_string - css selector string of nav container
  */
  function MainNavigation(sel_string) {
    this.menu = $qs(sel_string);
  }

  /**
  * Toggle Open State for menu this should only affect style for mobile view
  * @method toggle_open
  * @memberof MainNavigation
  * @public
  */
  MainNavigation.prototype.toggle_open = function() {
    var _parent = this.menu.parentNode;
    _parent.classList.toggle('open');
    _parent.querySelector('.burger_menu')
      .classList.toggle('open');
    $qs('.content_wrapper').classList.toggle('open');
    $qs('.main_menu__blocker--small').classList.toggle('open');
  };

  /**
  * Toggles sub menu and closes any other open menus
  * @method open_sub
  * @memberof MainNavigation
  * @param {object} $subMenu - subMenu item
  * @public
  */
  MainNavigation.prototype.toggle_sub = function($subMenu) {
    _classList = $subMenu.classList;

    if(_classList.contains("open")){
      this.close_all_subs();
    }else{
      this.close_all_subs();
      _classList.add("open");
    }

  };

  /**
  * Closes out all open sub menus
  * @method close_all_subs
  * @memberof MainNavigation
  * @public
  */
  MainNavigation.prototype.close_all_subs = function(menu_link) {
    _$subs = this.menu.querySelectorAll(".main_menu__sub_menu");
    for (var i = 0; i < _$subs.length; i++){
      _$subs[i].classList.remove("open");
    }
  };

  return MainNavigation;

})();
/*
* Builds out menu links im DOM
* @class MenuBuilder
*/
var MenuBuilder = (function() {

  /**
  * Container class for methods that build out
  *   the DOM for the menu
  * @constructs MenuBuilder
  * @param {string} api_string - api call string for menu data
  * @param {string} parent_node - css selector for DOM node to parent menu
  */
  function MenuBuilder(api_str, parent_node){
    this.api_str = api_str;
    this.$parent_node = document.querySelector(parent_node);
    this.retrieve_menu();

  }

  /**
  * Retrieves JSON for menu data from the ET api
  * @method retrieve_menu
  * @memberof MenuBuilder
  */
  MenuBuilder.prototype.retrieve_menu = function() {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if (xhr.readyState==4 && xhr.status==200) {
       _menu_data = JSON.parse(xhr.responseText);
       this.build_menu();
      }
    }.bind(this);

    xhr.open("GET", this.api_str, true);
    xhr.send();
  };

  /**
  * Builds out a node list for the menu and
  * inserts it into the DOM
  * @method build_menu
  * @memberof MenuBuilder
  */
  MenuBuilder.prototype.build_menu = function() {
    _menu_data.items.forEach(function(){
      console.log(this);
    });
  };

  /**
  * Builds out a node list for a specific menu item and its subs
  * @method prep_menu_item
  * @memberof MenuBuilder
  * @return {object} - node for menu item
  */
  MenuBuilder.prototype.prep_menu_item = function() {
    return "";
  };

  return MenuBuilder;

})();


// Object Initializations
// ----------------------------------
var mainMenu = new MainNavigation(".main_menu");
var buildMenu = new MenuBuilder("/api/nav.json", ".main_menu");

// Event Listners
// ----------------------------------

// Toggle open and close for thin menu
$qs('.main_header__burger').addEventListener('click', function(e){
  e.preventDefault();
  mainMenu.toggle_open();
});
$qs('.main_menu__blocker--small').addEventListener('click', function(e){
  e.preventDefault();
  mainMenu.toggle_open();
});

// Event Delgation click listener for sub menus
$qs('.main_menu').addEventListener('click', function(e){
  _parent = e.target.parentNode;
  _has_subs = _parent.classList.contains("main_menu__sub_menu");
  _is_sub = e.target.classList.contains("main_menu__link--sub")

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
})();