$( document ).ready(function() {
  
  // wrap the collapsible elements
  $(".secondary .filters nav").each(function(){
    $(this).next(".module-footer").addBack().wrapAll("<div class='collapse' />");
  });

  $(".secondary .filters .empty").wrap("<div class='collapse' />").closest(".module").addClass("nothing-to-reveal");

  // if we have a selected facet, expand it and ignore other settings
  // URL GET params like _vocab_FACET_NAME_limit are selected
  var selected_facets = [];
  var url = document.location.href;
  var qs = url.substring(url.indexOf('?') + 1).split('&');
  for(var i = 0, result = {}; i < qs.length; i++){
      qs[i] = qs[i].split('=');
      param = qs[i][0];
      if ( param.startsWith('_vocab_') && param.endsWith('_limit') ) {
        // expand the selected facet
        custom_class = 'h2' + param.slice(0, -6);  // drop the "_limit" at the end
        selected_facets.push(custom_class);
      }
  }

  // add collapsed class to modules
  $(".secondary .filters .collapse:not(.in)").parent().addClass("collapsed");

  if (selected_facets.length == 0) {
    // if set as default state, expand first nav
    $(".secondary .filters[data-collapse-default='expand-first'] nav").first().parent().addClass("in").parent().addClass("expanded");

    // if set as default state, expand all navs
    $(".secondary .filters[data-collapse-default='expand-navs'] nav").parent().addClass("in").parent().addClass("expanded");

    // if set as default state, expand all modules
    $(".secondary .filters[data-collapse-default='expand-all'] .collapse").addClass("in").parent().addClass("expanded");

  } else {
    for (var i = 0; i < selected_facets.length; i++) {
      // $('.' + selected_facets[i]).parent().addClass("in").parent().addClass("expanded");
      $this = $('.' + selected_facets[i]);
      $this.next().collapse('toggle');
      $this.parent().toggleClass("collapsed expanded");
      $this.children(".toggle-icon").toggleClass( "fa-caret-square-o-right fa-caret-square-o-down" );
    }
  }

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
