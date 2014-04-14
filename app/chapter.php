<?php
//error_reporting(E_ALL);
//ini_set('display_errors', '1');
//ini_set('error_log', dirname(__FILE__) . '/error_log.txt');

//ob_start();
//header('Content-Type: text/html; charset=UTF-8');

define('BLOG_ROOT', dirname(__FILE__));

require_once BLOG_ROOT . '/lib/function.php';

//phpinfo();


function getList($db, $page) {
	$retArray = $db->query("SELECT gid, title, content FROM emlog_blog ORDER BY date DESC");
	if ($retArray != FALSE) {
		$jsonArray = array();
		foreach ($retArray as $row) {
			$jsonArray[] = array('href' => '#/chapter/' . $row[0], 'title' => $row[1], 'content' => $row[2]);
		}
		echo json_encode($jsonArray);
	}
}

function getChapter($db, $chapter) {
	$retArray = $db->query("SELECT gid, title, content FROM emlog_blog WHERE gid = " . $chapter->{"chapterid"});
	if ($retArray != FALSE) {
		$row = $retArray[0];
		$jsonArray = array('title' => $row[1], 'content' => $row[2]);
		echo json_encode($jsonArray);
	}
}

$db = new DBManager();
$db->connect();

switch ($_GET['_method']) {
 	case 'list':
 	getList($db, $_POST['pageid']);
 		break;
 	case 'query':
 	getChapter($db, json_decode(file_get_contents("php://input")));
 		break;

 	default:
	getList($db, 1);
 		break;
}

$db->close();

?>