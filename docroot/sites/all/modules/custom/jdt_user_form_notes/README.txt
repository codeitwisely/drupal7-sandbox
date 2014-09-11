Day 5 Tasks
============

Hook_menu, Form API
Custom Theme
....................

Use form api to create a custom form that allows users to add notes. 
Use form api to create a custom form that allows users to edit an existing note which belongs to the user. 
-->
Use hook_menu to create separate custom menu entries to pages that displays each form. 
-->
Ensure that only users with correct permissions can access these pages. 

If you have completed task #10 correctly, you can leverage your custom api functions on form submission to manipulate the database accordingly. 
=============================================================
You do not need to display links anywhere on the page to add or edit notes. Your reviewer will manually type URL's to add/edit notes.

Helpful links

Form Generation -https://api.drupal.org/api/drupal/includes%21form.inc/group/form_api/7

Form API Reference - https://api.drupal.org/api/drupal/developer%21topics%21forms_api_reference.html/7
=============================================================

- Download any existing theme, save it to the sites/all/themes directory, 
- Modify the info file so the theme performs like a "custom" theme. (Change the theme name to "DT Custom") 
- Install, configure and then script the enable process.
Moving forward, this will serve as the theme for your site. 

Learn the structure of a theme and read up on how to use it. 

======>
The module should start with the following:
1. Create a custom database table (hook_schema)
    - table should have the following columns (note_id, article_nid, author_uid, note_text)
    - ensure the column types make sense (int, string, float etc.)
2. Create standard permissions for working with these notes (hook_permission) (ie adding notes, deleting notes etc) 
3. Include a separate file that has CRUD (Create, Read, Update, Delete) functions to manipulate your new database table, leveraging drupals database abstraction layer / classes.