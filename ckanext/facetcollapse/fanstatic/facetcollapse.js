$( document ).ready(function() {

  // wrap the collapsible elements
  $(".secondary .filters nav").each(function(){
    $(this).next(".module-footer").andSelf().wrapAll("<div class='collapse' />");
  });

  // if set as default state, expand first nav
  $(".secondary .filters[data-collapse-default='expand-first'] nav").first().parent().addClass("in").parent().addClass("expanded");

  // if set as default state, expand all navs
  $(".secondary .filters[data-collapse-default='expand-all'] nav").parent().addClass("in").parent().addClass("expanded");

  // add collapsed class to modules
  $(".secondary .filters .collapse:not(.in)").parent().addClass("collapsed");

  // add toggle icons
  $( ".secondary .filters .collapsed .module-heading" ).append( '<i class="toggle-icon fa fa-caret-square-o-right" aria-hidden="true"></i>' );

  $( ".secondary .filters .expanded .module-heading" ).append( '<i class="toggle-icon fa fa-caret-square-o-down" aria-hidden="true"></i>' );

  // toggle with heading click
  $( ".secondary .filters .module-heading" ).css( 'cursor', 'pointer' );
  $( ".secondary .filters .module-heading" ).click(function() {
    $(this).next().collapse('toggle');
    $(this).parent().toggleClass( "collapsed expanded" );
    $(this).children(".toggle-icon").toggleClass( "fa-caret-square-o-right fa-caret-square-o-down" );
  });

});
