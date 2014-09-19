(function ($) {
// Prefill the search box with Search... text.
Drupal.behaviors.jdt_article_notes_ajax = {
  attach: function (context) {
   $('#editme').click(function() {
     	// Add a div
     	var $div = $('<div />').appendTo('body');
		$div.attr('id', 'holdy');
		$("#holdy").dialog();
		var nodeid = Drupal.settings.jdt_article_notes_theming.nid;
    $("#holdy").load('/sendmessage/'+nodeid+'?ajax');
  	});
  }
};
})(jQuery);
