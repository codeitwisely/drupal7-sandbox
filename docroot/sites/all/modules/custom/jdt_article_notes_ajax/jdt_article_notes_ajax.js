(function ($) {
Drupal.behaviors.jdt_article_notes_ajax = {
  attach: function (context) {
   $('.send_message').click(function() {
     	var nodeid = Drupal.settings.jdt_article_notes_ajax.nid;
      var id1;
     	var $div = $('<div />').appendTo('body');
      $div.attr('id', 'holdy');
    // Launch the div dialog containing the form
		$("#holdy").dialog({
      height: 300,
      width: 600,
      modal: true,
      closeOnEscape: true,
      resizable: false,
      buttons: {
        // Buttons
        'Save Values': function() {
          // Grab value typed in the textbox
          var notetext = $('#edit-note-textfield').val();
          // Populate the Note Textfield with that value
          $('.note-text').text(notetext);
          jQuery.ajax({
            type: 'POST',
            //url: '/sendmessage/',
            url:'/sendmessage/'+nodeid+'/',
            dataType: 'json',
            data: "name="+$('#edit-note-textfield').val(),
            success: function(msg){
              eval(msg);
            }
          });
          $(this).dialog('close');
        },
        Cancel: function() {
          $(this).dialog('close');
        }
      },
      close: function() {
        $(this).dialog('close');
      }
    });
		$("#holdy").load('/sendmessage/'+nodeid+'?ajax');
  	});
  }
};
})(jQuery);
