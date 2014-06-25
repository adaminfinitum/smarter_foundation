<?php
/**
 * Jetpack Compatibility File
 * See: http://jetpack.me/
 *
 * @package smarter_foundation
 */

/**
 * Add theme support for Infinite Scroll.
 * See: http://jetpack.me/support/infinite-scroll/
 */
function smarter_foundation_jetpack_setup() {
	add_theme_support( 'infinite-scroll', array(
		'container' => 'main',
		'footer'    => 'page',
	) );
}
add_action( 'after_setup_theme', 'smarter_foundation_jetpack_setup' );
