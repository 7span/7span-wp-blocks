<?php
// block.php

function my_plugin_render_block_latest_post( $attributes, $content ) {
    $posts = wp_get_recent_posts( array(
        'numberposts' => $attributes['noOfPosts'],
        'post_status' => 'publish',
    ) );
    if ( count( $posts ) === 0 ) {
        return 'No posts';
    }

    $postMarkup = '';

    foreach($posts as $post){
      $post_id = $post['ID'];
      $postMarkup .= '<h3>';
      $postMarkup .=get_the_title( $post_id );
      $postMarkup .= get_the_post_thumbnail( $post_id , 'blog-thumb' );
      $postMarkup .='</h3>';
    }
    return $postMarkup;
}

register_block_type( 'sevenspan/posts', array(
    'attributes' => array(
      'noOfPosts' => array(
          'type' => 'number',
      )
    ),
    'render_callback' => 'my_plugin_render_block_latest_post',
) );