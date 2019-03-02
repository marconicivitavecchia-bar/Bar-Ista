<?php
// Creo un nuovo oggetto
$menuObj = new stdClass();
$menuObj->productList = array(new stdClass(),new stdClass(),new stdClass(),new stdClass());
$menuObj->productList[0]->product = "Pizza bianca";
$menuObj->productList[0]->price = 1;
$menuObj->productList[0]->like = 32;
$menuObj->productList[1]->product = "Pizza rossa";
$menuObj->productList[1]->price = 1.20;
$menuObj->productList[1]->like = 284;
$menuObj->productList[2]->product = "Caffè";
$menuObj->productList[2]->price = 0.600;
$menuObj->productList[2]->like = 375;
$menuObj->productList[3]->product = "Hot dog";
$menuObj->productList[3]->price = 2;
$menuObj->productList[3]->like = 184;
$menuJson = json_encode($menuObj);
echo $menuJson;
?>