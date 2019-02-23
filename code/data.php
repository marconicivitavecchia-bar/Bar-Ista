<?php
// Creo un nuovo oggetto
$menuObj = new stdClass();
$menuObj->productList = array(new stdClass(),new stdClass());
$menuObj->productList[0]->product = "Pizza bianca";
$menuObj->productList[0]->price = 1;
$menuObj->productList[0]->like = 0;
$menuObj->productList[1]->product = "caffè";
$menuObj->productList[1]->price = 0.60;
$menuObj->productList[1]->like = 273;
$menuObj->productList[2]->product = "Hot Dog";
$menuObj->productList[2]->price = 2;
$menuObj->productList[2]->like = 129;
$menuObj->productList[3]->product = "Pizza rossa";
$menuObj->productList[3]->price = 1,20;
$menuObj->productList[3]->like = 95;
$menuJson = json_encode($menuObj);
echo $menuJson;
?>