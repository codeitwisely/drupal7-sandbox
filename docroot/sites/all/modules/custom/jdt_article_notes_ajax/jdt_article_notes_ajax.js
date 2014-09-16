
(function ($) {
Drupal.behaviors.jdt_article_notes_ajax = {
  attach: function (context) {
   $('.send_message').click(function() {
     	var nodeid = Drupal.settings.jdt_article_notes_ajax.nid;
     	var $div = $('<div />').appendTo('body');
		$div.attr('id', 'holdy');
		$("#holdy").dialog();
		$('#holdy').load('/sendmessage/'+nodeid+'?ajax');
  	});
  }
};
})(jQuery); 