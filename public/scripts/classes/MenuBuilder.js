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
      if (xhr.readyState===4 && xhr.status===200) {
       _menu_data = JSON.parse(xhr.responseText);
       this.build_menu(_menu_data);
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
  MenuBuilder.prototype.build_menu = function(menu_data) {
    var menu = document.createElement("DIV");
    menu_data.items.forEach(function(item){
      item = this.prep_menu_section(item);
      menu.appendChild(item);
    }.bind(this));
    this.$parent_node.appendChild(menu);
  };

  /**
  * Builds out a node list for a specific menu item and its subs
  * @method prep_menu_section
  * @memberof MenuBuilder
  * @return {object} - node for menu item
  */
  MenuBuilder.prototype.prep_menu_section = function(item) {
    var menuSection;
    if(item.items.length !== 0){
      var first_link = this.create_menu_item(item, "main_menu__link main_menu__link--main");

      menuSection = document.createElement("nav");
      menuSection.setAttribute("role", "menu");
      menuSection.setAttribute("aria-haspopup", "true");
      menuSection.setAttribute("class", "main_menu__sub_menu");

      menuSection.appendChild(first_link);

      var sub_sect = document.createElement("div");

      item.items.forEach(function(sub_item){
        sub_item = this.create_menu_item(sub_item, "main_menu__link main_menu__link--sub");
        sub_sect.appendChild(sub_item);
      }.bind(this));

      menuSection.appendChild(sub_sect);

    }else{
      menuSection = this.create_menu_item(item, "main_menu__link main_menu__link--main");
    }
    return menuSection;
  };

  /**
  * Builds out a single node for a link in the menu
  * @method create_menu_item
  * @memberof MenuBuilder
  * @param {object} item - json object to turn into link
  * @param {string} classes - css classlist to append
  * @return {object} - node for menu item
  */
  MenuBuilder.prototype.create_menu_item = function(item, classes) {
    var link = document.createElement("a");
    link.setAttribute("role", "menuitem");
    link.setAttribute("href", item.url);
    link.setAttribute("class", classes);
    link.innerHTML = item.label;
    return link;
  };

  return MenuBuilder;

})();
