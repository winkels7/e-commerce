<?php
$data["email"] = "smachadonatalia@gmail.com";
$data["token"] = "1FC0AC8162704F08975104B4A63F19DB";
$data["currency"] = "BRL";
$data["itemId1"] = "1";
$data["itemDescription1"] = "Website desenvolvido pelos Cinco da Manhã";
$data["itemAmount1"] = "1000.00";
$data["itemQuantity1"] = "1";
$data["itemWeight1"] = "1";
$data["reference"] = "123456789";
$data["senderName"] = "Cinco da Manhã";
$data["senderAreaCode"] = "51";
$data["senderPhone"] = "999999999";
$data["senderEmail"] = "c50039963388138286264@sandbox.pagseguro.com.br";
$data["shippingType"] = "1";
$data["shippingAddressStreet"] = "Rodovia Imply Tecnologia";
$data["shippingAddressNumber"] = "1111";
$data["shippingAddressComplement"] = "Empresa";
$data["shippingAddressDistrict"] = "Renascença";
$data["shippingAddressPostalCode"] = "96815911";
$data["shippingAddressCity"] = "Santa Cruz do Sul";
$data["shippingAddressState"] = "RS";
$data["shippingAddressCountry"] = "ATA";

$buildQuery = http_build_query($data);
$url = "https://ws.sandbox.pagseguro.uol.com.br/v2/checkout";

$curl = curl_init($url);
curl_setopt($curl, CURLOPT_HTTPHEADER, array("Content-Type: application/x-www-form-urlencoded; charset=ISO-8859-1"));
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, true);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_POSTFIELDS, $buildQuery);

$retorno = curl_exec($curl);
curl_close($curl);

$xml = simplexml_load_string($retorno);
// var_dump($xml);
echo $xml->code;