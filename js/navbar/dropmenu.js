  var drop_services_submenu = document .querySelectorAll ( ".dropdown" ) ;

  var sub_menu = document .getElementsByClassName ( "dropdown-menu" ) ;

  for ( var x = 0; x < drop_services_submenu .length; x++) {

    drop_services_submenu[x] .addListener ( "click", (  ) => {

      sub_menu[x] .classList .toggle ("show_services_sub_menu") ;

    } ) ;

  }