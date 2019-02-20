<?php

function sevenspan_block_posts( $attributes, $content ) {
    $posts = wp_get_recent_posts( array(
        'numberposts' => ($attributes['noOfPosts'])?:6,
        'post_status' => 'publish',
    ) );
    if ( count( $posts ) === 0 ) {
        return 'No posts';
    }

    $postMarkup = '<div class="ss-container">';
    $postMarkup .= '<div class="blog-list">';
    foreach($posts as $post){
        $post_id = $post['ID'];
        $postMarkup .= '<div class="blog-list__wrap">';
        $postMarkup .= '<a href="'.get_permalink($post_id).'" class="blog-box">';
        $postMarkup .= '<div class="blog-box__img">';
        $postMarkup .= get_the_post_thumbnail( $post_id , 'blog-thumb' );
        $postMarkup .= '</div>';
        $postMarkup .= '<h4>';
        $postMarkup .= get_the_title( $post_id );
        $postMarkup .= '</h4>';
        $postMarkup .= '</a>';
        $postMarkup .= '</div>';
    }
    $postMarkup .= '</div>';
    $postMarkup .= '</div>';
    return $postMarkup;
}

register_block_type( 'sevenspan/posts', array(
    'attributes' => array(
        'noOfPosts' => array(
            'type' => 'number',
            'default'=>6
        )
    ),
    'render_callback' => 'sevenspan_block_posts',
) );