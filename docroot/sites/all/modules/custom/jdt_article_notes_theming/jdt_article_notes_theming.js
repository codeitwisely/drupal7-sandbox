(function ($) {
// Prefill the search box with Search... text.
Drupal.behaviors.jdt_article_notes_theming = {
  attach: function (context) {
   //--------------------------------------------------------
   $('#editme').click(function() {
     //alert('Yay');
     	// Add a div
     	var $div = $('<div />').appendTo('body');
		$div.attr('id', 'holdy');
		$("#holdy").dialog();
		var nodeid = Drupal.settings.jdt_article_notes_theming.nid;
		//$("#holdy .dialog-content").load('/note/'+ nodeid);
		$("#holdy").load('/note/'+ nodeid);
		//var form = Drupal.settings.jdt_article_notes_theming.form;
		//console.log(form);
		//$('#holdy').load('/note/'+ nodeid);
		//('#holdy').load('/note/'+ nodeid+ '?ajax');
		//('#holdy').load('/note/'+ nodeid+ '/ajax-form');
  	});
   //--------------------------------------------------------
  }
};
})(jQuery); 