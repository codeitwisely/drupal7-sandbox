Create a new module called jdt_user_notes. 

The purpose of this module is to allow users to add their own notes to an article. These notes are NOT another content type, you will use a combination of hooks to fulfill this functionality. 

The module should start with the following:
1. Create a custom database table (hook_schema)
    - table should have the following columns (note_id, article_nid, author_uid, note_text)
    - ensure the column types make sense (int, string, float etc.)
2. Create standard permissions for working with these notes (hook_permission) (ie adding notes, deleting notes etc) 
3. Include a separate file that has CRUD (Create, Read, Update, Delete) functions to manipulate your new database table, leveraging drupals database abstraction layer / classes.

Create unit tests with the SimpleTest moudule to test that your CRUD functions work properly.

https://drupal.org/node/811254