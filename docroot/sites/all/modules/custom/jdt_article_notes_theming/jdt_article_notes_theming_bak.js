(function ($) {
// Prefill the search box with Search... text.
Drupal.behaviors.jdt_article_notes_theming = {
  attach: function (context) {
   $('#editme').click(function() {
     //alert('Yay');
     	// Add a div
     	var $div = $('<div />').appendTo('body');
		$div.attr('id', 'holdy');
		$("#holdy").dialog();
		var nodeid = Drupal.settings.jdt_article_notes_theming.nid;
		$('#holdy').load('/note/'+ nodeid);
  	});
  }
};
})(jQuery); 