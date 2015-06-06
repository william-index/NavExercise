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
