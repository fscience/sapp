<?php

/**
 * 基础函数库
 * @copyright (c) blog All Rights Reserved
 */
function __autoload($class) {
	$class = strtolower($class);
	if (file_exists(BLOG_ROOT . '/lib/' . $class . '.php')) {
		require_once(BLOG_ROOT . '/lib/' . $class . '.php');
	} else {
		echo '加载失败。';
	}
}

?>