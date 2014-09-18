
(function ($) {
Drupal.behaviors.jdt_article_notes_ajax = {
  attach: function (context) {
   $('.send_message').click(function() {
     	var nodeid = Drupal.settings.jdt_article_notes_ajax.nid;
      var id1;
     	var $div = $('<div />').appendTo('body');
      $div.attr('id', 'holdy');
		$("#holdy").dialog({
      height: 300,
      width: 600,
      modal: true,
      closeOnEscape: true,
      resizable: false,
      buttons: {
        'Save Values': function() {
          //alert('save');
          // Grab value typed in the textbox
          var notetext = $('#edit-note-textfield').val();
          // Populate the Note Textfield with that value
          $('.note-text').text(notetext);

          //$.get(
            //node/%node/note
           // "drupal7.dev/node/"+nodeid+'/note/'+notetext
            //"http://drupal7.dev/sendmessage/"+notetext
          //);
          $.ajax({
            //url: node/%node/note
            url: 'sendmessage/'+id1,
            //url: '/vacancies_manage/status_callback/' + id1 + '/' + 'id2',
            data: {'arg1': notetext},
            //data: {'arg1': nodeid, 'arg2': notetext},
            success : function(data) {
              alert(data);
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
