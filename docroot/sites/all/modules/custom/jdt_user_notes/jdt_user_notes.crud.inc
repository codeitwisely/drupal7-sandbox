<?php
/**
* Implementation of CRUD FUNCTIONS
*/

/**
* Function to Update, Edit
*/
function jdt_user_notes_update(){
  try {
    // DB_UPDATE - execute() returns number of rows updates
    $count = db_update('user_note')
      ->fields($entry)
      ->condition('pid', $entry['pid'])
      ->execute();
  }
  catch (Exception $e) {
      drupal_set_message(t('db_update failed. Message = %message, query= %query',
      array('%message' => $e->getMessage(), '%query' => $e->query_string)), 'error');
  }
  return $count;
}

/**
* Function to Delete
*/
function jdt_user_notes_delete(){
  db_delete('user_note')
    ->condition('pid', $entry['pid'])
    ->execute();
}

/**
* Function to Add Note
*/
function jdt_user_notes_insert($entry){
  $return_value = NULL;
  try{
    $return_value = db_insert('user_note')
                      ->fields($entry)
                      ->execute();
  }
  catch(Exception $e){
    drupal_set_message(t('db_insert failed. Message = %message, query= %query',
    array('%message' => $e->getMessage(), '%query' => $e->query_string)), 'error');
  }
return $return_value;
}

/**
* Function to Load entries from the DB
*/
function jdt_user_notes_entry_load($entry = array()){
  $select = db_select('user_note', 'drupal7_development');
  $select->fields('drupal7_development');
  // Add each field and value as a condition to this query
  foreach ($entry as $field => $value) {
    $select->condition($field, $value);
  }
  //Return result in object format
  return $select->execute()->fetchAll();
}