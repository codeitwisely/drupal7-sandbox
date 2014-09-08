<?php
/**
 * @file
 * jdt_content_type_article.features.taxonomy.inc
 */

/**
 * Implements hook_taxonomy_default_vocabularies().
 */
function jdt_content_type_article_taxonomy_default_vocabularies() {
  return array(
    'articles' => array(
      'name' => 'Articles',
      'machine_name' => 'articles',
      'description' => '',
      'hierarchy' => 0,
      'module' => 'taxonomy',
      'weight' => 0,
    ),
    'user' => array(
      'name' => 'User',
      'machine_name' => 'user',
      'description' => '',
      'hierarchy' => 0,
      'module' => 'taxonomy',
      'weight' => 0,
    ),
  );
}
