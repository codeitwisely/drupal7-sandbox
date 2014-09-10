<?php

/*
* CRUD FUNCTIONS
*/
// EDIT Function
function jdt_user_notes_update(){
  try {
    // db_update()...->execute() returns the number of rows updated.
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

// DELETE Function
function jdt_user_notes_delete(){
  db_delete('user_note')
    ->condition('pid', $entry['pid'])
    ->execute();
}

// ADD Function
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

// READ Function
function jdt_user_notes_entry_load($entry = array()){
  $select = db_select('user_note', 'drupal7_development');
  $select->fields('drupal7_development');
	  // Add each field and value as a condition to this query.
    foreach ($entry as $field => $value) {
      $select->condition($field, $value);
  	}
  	// Return the result in object format.
  	return $select->execute()->fetchAll();
}
