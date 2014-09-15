Day 6 Tasks
============
Now that notes can be added and edited, there needs to be a way to see them. 
Using your api functions (select), get all of the notes associated with an article and list them out. Leverage a custom theme function/template correctly to display the notes using the DOM provided below.

Add a tab to the node page, labelled "My Notes". This tab should only be display if the user has notes for the given node.

The notes should show up using the following HTML:

<div class="note-container">
  <div class="note-text">NOTE_TEXT</div>
  <div class="node-title">NODE_TITLE</div>
  <div class="node-author">NODE_AUTHOR</div>
</div>

Where NOTE_TEXT is the body of the note.
Where NODE_TITLE is the title of the node the note is written for
Where NODE_AUTHOR is the author for the node the note is written for

The end goal is to be able to see all the notes for an article. 

./././././././././././././././././././.
Using the theme layer - https://drupal.org/node/933976

hook_theme - https://api.drupal.org/api/drupal/modules%21system%21system.api.php/function/hook_theme/7

To properly complete this task, you will need to learn how to accomplish this task using preprocessors.

https://drupal.org/node/341628

//_______________________________________________________________________________________________________
Using ctools, modal popups or ajax or any combination of these, add a link to your notes listing 
that allows notes to be edited in the popup. 

Once this is done, also add another link/entry point on the article node page that will 
allow a user to add notes to the article in a popup. 

In other words, your add and edit forms should be placed in modal popups and links 
should be placed in locations that make sense for the user to use them. Make sure 
there is a way to cancel/exit/end your ajax call or modal box elegantly.  