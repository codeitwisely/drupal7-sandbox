<?php

/**
  * @file
  * CRUD Operations
  */

/**
  * Insert Operation
  */
function jdt_user_form_notes_insert($entry) {
  $return_value = NULL;
  try {
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
  * Update Operation
  */
function jdt_user_form_notes_update($entry) {
    $return_value = NULL;
    try {
    	$return_value = db_update('user_note')
          ->fields($entry)
          ->condition('note_id', $entry['note_id'])
          ->execute();
    }
    catch (Exception $e) {
       drupal_set_message(t('db_update failed. Message = %message, query= %query',
          array('%message' => $e->getMessage(), '%query' => $e->query_string)), 'error');
    }
}