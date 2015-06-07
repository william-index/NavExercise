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
      $qs('.main_menu__blocker--large').classList.remove('open');
    }else{
      this.close_all_subs();
      _classList.add("open");
      $qs('.main_menu__blocker--large').classList.add('open');
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
    $qs('.main_menu__blocker--large').classList.remove('open');
    for (var i = 0; i < _$subs.length; i++){
      _$subs[i].classList.remove("open");
    }
  };

  return MainNavigation;

})();
