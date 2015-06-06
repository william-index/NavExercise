/*
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
    this.menu = document.querySelector(sel_string);
    console.log(sel_string);
  }

  /**
  * Toggle Open State for menu this should only affect style for mobile view
  * @method toggle_open
  * @memberof MainNavigation
  * @public
  */
  MainNavigation.prototype.toggle_open = function() {

  };

  /**
  * Opens Sub Menu
  * @method open_sub
  * @memberof MainNavigation
  * @param {object} menu_link - link in menu that activates sub
  * @public
  */
  MainNavigation.prototype.open_sub = function(menu_link) {

  };

  /**
  * Closes out all open sub menus
  * @method close_all_subs
  * @memberof MainNavigation
  * @public
  */
  MainNavigation.prototype.close_all_subs = function(menu_link) {

  };

  return MainNavigation;

})();
