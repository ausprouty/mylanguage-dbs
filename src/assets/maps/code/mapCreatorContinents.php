<?php
/*
Goal:
groups: [
  {
    id:"bo",
    continentCode:"BO",
    continentName:"Bolivia",
    class:"landxx bo",
    transform: "translate(-679.46348,-588.64099)",
    paths:[
      {
        id: "path2375",
        d:"m 772.086,79"
      }
      {
        id: "path2376",
        d:"m 772.086,79"
      }
    ]
  }
  */
$text = file_get_contents('../Continents.svg');
$lines = explode("\n", $text);
$continents = array();
$g = false;
$p= false;
$lineCount = 0;
foreach ($lines as $line){
  $lineCount++;
  if ($lineCount < 56){
    continue;
  }
  if (strpos($line, '<g') !== false){
    $continent = new stdClass();
    $continent->paths = array();
    $g = true;
    $p = false;
  }
  elseif (strpos($line, 'transform') !== false){
    $continent->transform = findTransform($line);
  }
  elseif (strpos($line, '</g') !== false) {
       $g = false;
       if (isset($path)){
        $continent->paths[] = $path;
        unset($path);
      }
       $continents[] = $continent;
       $continent = new stdClass();
       $continent->paths = array();
       $path = new stdClass;
  }
  elseif (strpos($line, '<path') !== false){
    if (isset($path)){
      if (isset($path->id)){
        $continent->paths[] = $path;
      }
    }
    $path = new stdClass;
    $p= true;
    if ($g == false){
      $continent = new stdClass();
      $continent->paths = array();
    }
  }
  elseif (strpos($line, '</path') !== false){
    if ($g == false){
      if (isset($path)){
        $continent->paths[] = $path;
        unset ($path);
      }
      $continents[] = $continent;
      $continent = new stdClass();
      $continent->paths = array();
      $path = new stdClass();
    }
    $p= false;
  }
  elseif (strpos($line, '/title>') !== false){
    $continent->continentName = findTitle($line);
  }
  elseif (strpos($line, 'id="') !== false){
    $id = findId($line);
    if (($g == true && $p== false) || ($g == false && $p== true)){
      if ($id){
        $continent->continentCode = strtoupper($id);
        $continent->id = $id;
        $continent->class = $id;
      }
    }
    if ($g == true && $p== true){
      $path->id = $id;
      $path->class = $continent->class;
    }
  }
  elseif (strpos($line, ' d="') !== false){
    $path->d = findD($line);
  }
}
print_r(json_encode($continents));

function findClass($line){
  $class = null;
  $pos_start = strpos($line, 'class="');
  if ($pos_start !== false){
    $pos_start = $pos_start + 7;
    $pos_end = strpos($line, '"', $pos_start);
    $str_len = $pos_end - $pos_start;
    $class = substr($line, $pos_start, $str_len );
  }
  return $class;
}

function findD($line){
  $pos_start = strpos($line, ' d="') + 4;
  $pos_end = strpos($line, '"', $pos_start);
  $str_len = $pos_end - $pos_start;
  $d = substr($line, $pos_start, $str_len );
  return $d;
}

function findId($line){
  $pos_start = strpos($line, 'id="') + 4;
  $pos_end = strpos($line, '"', $pos_start);
  $str_len = $pos_end - $pos_start;
  $id = substr($line, $pos_start, $str_len );
  return $id;
}
function findTitle($line){
  $bad = array('<title>', '</title>');
  $title = str_replace($bad, null, $line);
  if (strpos($title, '>') !== false){
    $pos_start = strpos($line, '>') + 1;
    $title = substr($title, $pos_start);
  }
  return $title;
}
function findTransform($line){
  $class = null;
  $pos_start = strpos($line, 'transform="');
  if ($pos_start !== false){
    $pos_start = $pos_start + 11;
    $pos_end = strpos($line, '"', $pos_start);
    $str_len = $pos_end - $pos_start;
    $transform = substr($line, $pos_start, $str_len );
  }
  return $transform;
}
