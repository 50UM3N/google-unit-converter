/*var lengthUnit1, lengthUnit2, tempUnit1, tempUnit2, currentOpen;*/
var currentOpen = "area";
var input1 = false;
var input2 = false;
var unit1 = "square kilometres";
var unit2 = "square metres";

function swap() {
  let t;
  t = unit1;
  unit1 = unit2;
  unit2 = t;
  console.log(unit1 + ", " + unit2);
}

function round(x, y) {
  return ((Math.round(x * (10 ** y))) / (10 ** y));
}

function showConverter(current) {
  document.getElementById(currentOpen).style.display = "none";
  currentOpen = current;
  document.getElementById(currentOpen).style.display = "block";
  unit1 = document.getElementById(currentOpen).querySelectorAll(".inputselect")[0].querySelector(".contselect").querySelector(".select").value;
  unit2 = document.getElementById(currentOpen).querySelectorAll(".inputselect")[1].querySelector(".contselect").querySelector(".select").value;;
  console.log(unit1 + ", " + unit2);
}

function unitValidate(id1, id2) {
  let u1 = document.getElementById(id1).value;
  let u2 = document.getElementById(id2).value;
  if (u1 == u2) {
    document.getElementById(id1).value = unit2;
    document.getElementById(id2).value = unit1;
    unit1 = document.getElementById(id1).value;
    unit2 = document.getElementById(id2).value;
  }
  else {
    unit1 = document.getElementById(id1).value;
    unit2 = document.getElementById(id2).value;
  }
  input1 = true;
  callBack();
}

function callBack() {
  var a;
  if (currentOpen == "area")
    a = "";
  else if (currentOpen == "datatransfer")
    a = "";
  else if (currentOpen == "digitalstorage")
    a = "";
  else if (currentOpen == "energy")
    a = "";
  else if (currentOpen == "frequency")
    a = "";
  else if (currentOpen == "fueleconomy")
    toConvertFuel();
  else if (currentOpen == "length")
    toConvertLength();
  else if (currentOpen == "mass")
    toConvertMass();
  else if (currentOpen == "planeangle")
    toConvertAngle();
  else if (currentOpen == "pressure")
    toConvertPressure();
  else if (currentOpen == "speed")
    toConvertSpeed();
  else if (currentOpen == "temperature") {

    toConvertTemp();
  }
  else if (currentOpen == "time")
    toConvertTime();
  else if (currentOpen == "volume")
    toConvertVolume();
}

function script() {
  console.log("Hello World!!!");
}

function toConvertFuel() {
  var data = document.getElementById('fuelInput1').value;

  if (document.getElementById('fuelselect1').value == "Miles per US gallon")
    data = data;
  else if (document.getElementById('fuelselect1').value == "Miles per gallon")
    data = data / 1.201;
  else if (document.getElementById('fuelselect1').value == "Kilometre per litre")
    data = data * 2.352145835713852;
  else if (document.getElementById('fuelselect1').value == "Litres per 100 kilometres")
    data = 235.215 / data;

  if (document.getElementById('fuelselect2').value == "Miles per US gallon")
    data = data;
  else if (document.getElementById('fuelselect2').value == "Miles per gallon")
    data = data * 1.201;
  else if (document.getElementById('fuelselect2').value == "Kilometre per litre")
    data = data / 2.352145835713852;
  else if (document.getElementById('fuelselect2').value == "Litres per 100 kilometres")
    data = 235.215 / data;

  document.getElementById('fuelInput2').value = data;

}

function toConvertLength() {
  var data, rule;
  if (input1 == true) {
    data = Number(document.getElementById('lengthInput1').value);
  }
  else if (input2 == true) {
    data = Number(document.getElementById('lengthInput2').value);
    swap();
  }

  if (unit1 == "Kilometer" && unit2 == "Meter") {
    data *= 1000;
    rule = "multiply the length value by 1000";
  }
  else if (unit1 == "Kilometer" && unit2 == "Centimeters") {
    data *= 100000;
    rule = "multiply the length value by 100000";
  }
  else if (unit1 == "Kilometer" && unit2 == "Milimeters") {
    data *= 1e+6;
    rule = "multiply the length value by 1e+6";
  }
  else if (unit1 == "Kilometer" && unit2 == "Micrometers") {
    data *= 1e+9;
    rule = "multiply the length value by 1e+9";
  }
  else if (unit1 == "Kilometer" && unit2 == "Nanometers") {
    data *= 1e+12;
    rule = "multiply the length value by 1e+12";
  }
  else if (unit1 == "Kilometer" && unit2 == "Mile") {
    data /= 1.609344;
    rule = "for an approximate result, divide the length value by 1.609";
  }
  else if (unit1 == "Kilometer" && unit2 == "Yard") {
    data *= 1093.613298337;
    rule = "for an approximate result, multiply the length value by 1094";
  }
  else if (unit1 == "Kilometer" && unit2 == "Foot") {
    data *= 3280.839895;
    rule = "for an approximate result, multiply the length value by 3281";
  }
  else if (unit1 == "Kilometer" && unit2 == "Inch") {
    data *= 39370.07874;
    rule = "or an approximate result, multiply the length value by 39370";
  }
  else if (unit1 == "Kilometer" && unit2 == "Nutical Mile") {
    data /= 1.852;
    rule = "divide the length value by 1.852";
  }
  else if (unit1 == "Meter" && unit2 == "Kilometer") {
    data /= 1000;
    rule = "divide the length value by 1000";
  }
  else if (unit1 == "Meter" && unit2 == "Centimeters") {
    data *= 100;
    rule = "multiply the length value by 100";
  }
  else if (unit1 == "Meter" && unit2 == "Milimeters") {
    data *= 1000;
    rule = "multiply the length value by 1000";
  }
  else if (unit1 == "Meter" && unit2 == "Micrometers") {
    data *= 1e+6;
    rule = "multiply the length value by 1e+6";
  }
  else if (unit1 == "Meter" && unit2 == "Nanometers") {
    data *= 1e+9;
    rule = "for an approximate result, multiply the length value by 1e+9";
  }
  else if (unit1 == "Meter" && unit2 == "Mile") {
    data /= 1609.344;
    rule = "for an approximate result, divide the length value by 1609";
  }
  else if (unit1 == "Meter" && unit2 == "Yard") {
    data *= 1.0936132983;
    rule = "for an approximate result, multiply the length value by 1.094";
  }
  else if (unit1 == "Meter" && unit2 == "Foot") {
    data *= 3.280839895;
    rule = "for an approximate result, multiply the length value by 3.281";
  }
  else if (unit1 == "Meter" && unit2 == "Inch") {
    data *= 39.3701;
    rule = "multiply the length value by 39.37";
  }
  else if (unit1 == "Meter" && unit2 == "Nutical Mile") {
    data /= 1852;
    rule = "divide the length value by 1852";
  }
  else if (unit1 == "Centimeters" && unit2 == "Kilometer") {
    data /= 100000;
    rule = "divide the length value by 100000";
  }
  else if (unit1 == "Centimeters" && unit2 == "Meter") {
    data /= 100;
    rule = "divide the length value by 100";
  }
  else if (unit1 == "Centimeters" && unit2 == "Milimeters") {
    data *= 10;
    rule = "multiply the length value by 10";
  }
  else if (unit1 == "Centimeters" && unit2 == "Micrometers") {
    data *= 10000;
    rule = "multiply the length value by 10000";
  }
  else if (unit1 == "Centimeters" && unit2 == "Nanometers") {
    data *= 1e+7;
    rule = "multiply the length value by 1e+7";
  }
  else if (unit1 == "Centimeters" && unit2 == "Mile") {
    data /= 160934.4;
    rule = "for an approximate result, divide the length value by 160934";
  }
  else if (unit1 == "Centimeters" && unit2 == "Yard") {
    data /= 91.44;
    rule = "divide the length value by 91.44";
  }
  else if (unit1 == "Centimeters" && unit2 == "Foot") {
    data /= 30.48;
    rule = "divide the length value by 30.48";
  }
  else if (unit1 == "Centimeters" && unit2 == "Inch") {
    data /= 2.54
    rule = "divide the length value by 2.54";
  }
  else if (unit1 == "Centimeters" && unit2 == "Nutical Mile") {
    data /= 185200;
    rule = "divide the length value by 185200";
  }
  else if (unit1 == "Milimeters" && unit2 == "Kilometer") {
    data /= 1e+6;
    rule = "divide the length value by 1e+6";
  }
  else if (unit1 == "Milimeters" && unit2 == "Meter") {
    data /= 1000;
    rule = "divide the length value by 1000";
  }
  else if (unit1 == "Milimeters" && unit2 == "Centimeters") {
    data /= 10;
    rule = "divide the length value by 10";
  }
  else if (unit1 == "Milimeters" && unit2 == "Micrometers") {
    data *= 1000;
    rule = "multiply the length value by 1000";
  }
  else if (unit1 == "Milimeters" && unit2 == "Nanometers") {
    data *= 1e+6;
    rule = "multiply the length value by 1e+6";
  }
  else if (unit1 == "Milimeters" && unit2 == "Mile") {
    data /= 1.609344e+6;
    rule = "for an approximate result, divide the length value by 1.609e+6";
  }
  else if (unit1 == "Milimeters" && unit2 == "Yard") {
    data /= 914.4;
    rule = "for an approximate result, divide the length value by 914";
  }
  else if (unit1 == "Milimeters" && unit2 == "Foot") {
    data /= 304.8;
    rule = "for an approximate result, divide the length value by 305";
  }
  else if (unit1 == "Milimeters" && unit2 == "Inch") {
    data /= 25.4;
    rule = "divide the length value by 25.4";
  }
  else if (unit1 == "Milimeters" && unit2 == "Nutical Mile") {
    data /= 1.852e+6;
    rule = "divide the length value by 1.852e+6";
  }
  else if (unit1 == "Micrometers" && unit2 == "Kilometer") {
    data /= 1e+9;
    rule = "divide the length value by 1e+9";
  }
  else if (unit1 == "Micrometers" && unit2 == "Meter") {
    data /= 1e+6;
    rule = "divide the length value by 1e+6";
  }
  else if (unit1 == "Micrometers" && unit2 == "Centimeters") {
    data /= 10000;
    rule = "divide the length value by 1e+6";
  }
  else if (unit1 == "Micrometers" && unit2 == "Milimeters") {
    data /= 1000;
    rule = "divide the length value by 1000";
  }
  else if (unit1 == "Micrometers" && unit2 == "Nanometers") {
    data *= 1000;
    rule = "multiply the length value by 1000";
  }
  else if (unit1 == "Micrometers" && unit2 == "Mile") {
    data /= 1.609344e+9;
    rule = "for an approximate result, divide the length value by 1.609e+9";
  }
  else if (unit1 == "Micrometers" && unit2 == "Yard") {
    data /= 914400;
    rule = "divide the length value by 914400";
  }
  else if (unit1 == "Micrometers" && unit2 == "Foot") {
    data /= 304800;
    rule = "divide the length value by 304800";
  }
  else if (unit1 == "Micrometers" && unit2 == "Inch") {
    data /= 25400;
    rule = "divide the length value by 25400";
  }
  else if (unit1 == "Micrometers" && unit2 == "Nutical Mile") {
    data /= 1.852e+9;
    rule = "divide the length value by 1.852e+9";
  }
  else if (unit1 == "Nanometers" && unit2 == "Kilometer") {
    data /= 1e+12;
    rule = "divide the length value by 1e+12";
  }
  else if (unit1 == "Nanometers" && unit2 == "Meter") {
    data /= 1e+9;
    rule = "for an approximate result, divide the length value by 1e+9";
  }
  else if (unit1 == "Nanometers" && unit2 == "Centimeters") {
    data / 1e+7;
    rule = "divide the length value by 1e+7";
  }
  else if (unit1 == "Nanometers" && unit2 == "Milimeters") {
    data /= 1e+6;
    rule = "divide the length value by 1e+6";
  }
  else if (unit1 == "Nanometers" && unit2 == "Micrometers") {
    data /= 1000;
    rule = "divide the length value by 1000";
  }
  else if (unit1 == "Nanometers" && unit2 == "Mile") {
    data /= 1.609344e+12;
    rule = "for an approximate result, divide the length value by 1.609e+12";
  }
  else if (unit1 == "Nanometers" && unit2 == "Yard") {
    data /= 9.144e+8;
    rule = "divide the length value by 9.144e+8";
  }
  else if (unit1 == "Nanometers" && unit2 == "Foot") {
    data /= 3.048e+8;
    rule = "divide the length value by 3.048e+8";
  }
  else if (unit1 == "Nanometers" && unit2 == "Inch") {
    data /= 2.54e+7
    rule = "divide the length value by 2.54e+7";
  }
  else if (unit1 == "Nanometers" && unit2 == "Nutical Mile") {
    data /= 1.852e+12;
    rule = "divide the length value by 1.852e+12";
  }
  else if (unit1 == "Mile" && unit2 == "Kilometer") {
    data *= 1.609344;
    rule = "for an approximate result, multiply the length value by 1.609";
  }
  else if (unit1 == "Mile" && unit2 == "Meter") {
    data *= 1609.344;
    rule = "for an approximate result, multiply the length value by 1609";
  }
  else if (unit1 == "Mile" && unit2 == "Centimeters") {
    data *= 160934.4
    rule = "for an approximate result, multiply the length value by 160934";
  }
  else if (unit1 == "Mile" && unit2 == "Milimeters") {
    data *= 1.609344e+6;
    rule = "for an approximate result, multiply the length value by 1.609e+6";
  }
  else if (unit1 == "Mile" && unit2 == "Micrometers") {
    data *= 1.609344e+9;
    rule = "for an approximate result, multiply the length value by 1.609e+9";
  }
  else if (unit1 == "Mile" && unit2 == "Nanometers") {
    data *= 1.609344e+12;
    rule = "for an approximate result, multiply the length value by 1.609e+12";
  }
  else if (unit1 == "Mile" && unit2 == "Yard") {
    data *= 1760;
    rule = "multiply the length value by 1760";
  }
  else if (unit1 == "Mile" && unit2 == "Foot") {
    data *= 5280;
    rule = "multiply the length value by 5280";
  }
  else if (unit1 == "Mile" && unit2 == "Inch") {
    data *= 63360;
    rule = "multiply the length value by 63360";
  }
  else if (unit1 == "Mile" && unit2 == "Nutical Mile") {
    data /= 1.150779448;
    rule = "for an approximate result, divide the length value by 1.151";
  }
  else if (unit1 == "Yard" && unit2 == "Kilometer") {
    data /= 1093.613298337;
    rule = "for an approximate result, divide the length value by 1094";
  }
  else if (unit1 == "Yard" && unit2 == "Meter") {
    data /= 1.093613298337;
    rule = "for an approximate result, divide the length value by 1.094";
  }
  else if (unit1 == "Yard" && unit2 == "Centimeters") {
    data *= 91.44;
    rule = "multiply the length value by 91.44";
  }
  else if (unit1 == "Yard" && unit2 == "Milimeters") {
    data *= 914.4;
    rule = "for an approximate result, multiply the length value by 914";
  }
  else if (unit1 == "Yard" && unit2 == "Micrometers") {
    data *= 914400;
    rule = "multiply the length value by 914400";
  }
  else if (unit1 == "Yard" && unit2 == "Nanometers") {
    data *= 9.144e+8;
    rule = "multiply the length value by 9.144e+8";
  }
  else if (unit1 == "Yard" && unit2 == "Mile") {
    data /= 1760;
    rule = "divide the length value by 1760";
  }
  else if (unit1 == "Yard" && unit2 == "Foot") {
    data *= 3;
    rule = "multiply the length value by 3";
  }
  else if (unit1 == "Yard" && unit2 == "Inch") {
    data *= 36;
    rule = "multiply the length value by 36";
  }
  else if (unit1 == "Yard" && unit2 == "Nutical Mile") {
    data /= 2025.3718285;
    rule = "for an approximate result, divide the length value by 2025";
  }
  else if (unit1 == "Foot" && unit2 == "Kilometer") {
    data /= 3280.839895;
    rule = "for an approximate result, divide the length value by 3281";
  }
  else if (unit1 == "Foot" && unit2 == "Meter") {
    data /= 3.280839895;
    rule = "for an approximate result, divide the length value by 3.281";
  }
  else if (unit1 == "Foot" && unit2 == "Centimeters") {
    data *= 30.48;
    rule = "multiply the length value by 30.48";
  }
  else if (unit1 == "Foot" && unit2 == "Milimeters") {
    data *= 304.8
    rule = "for an approximate result, multiply the length value by 305";
  }
  else if (unit1 == "Foot" && unit2 == "Micrometers") {
    data *= 304800;
    rule = "multiply the length value by 304800";
  }
  else if (unit1 == "Foot" && unit2 == "Nanometers") {
    data *= 3.048e+8;
    rule = "multiply the length value by 3.048e+8";
  }
  else if (unit1 == "Foot" && unit2 == "Mile") {
    data /= 5280;
    rule = "divide the length value by 5280";
  }
  else if (unit1 == "Foot" && unit2 == "Yard") {
    data /= 3;
    rule = "divide the length value by 3";
  }
  else if (unit1 == "Foot" && unit2 == "Inch") {
    data *= 12;
    rule = "multiply the length value by 12";
  }
  else if (unit1 == "Foot" && unit2 == "Nutical Mile") {
    data /= 6076.1154;
    rule = "for an approximate result, divide the length value by 6076";
  }
  else if (unit1 == "Inch" && unit2 == "Kilometer") {
    data /= 39370.7874;
    rule = "for an approximate result, divide the length value by 39370";
  }
  else if (unit1 == "Inch" && unit2 == "Meter") {
    data /= 39.37;
    rule = "divide the length value by 39.37";
  }
  else if (unit1 == "Inch" && unit2 == "Centimeters") {
    data *= 2.54;
    rule = "multiply the length value by 2.54";
  }
  else if (unit1 == "Inch" && unit2 == "Milimeters") {
    data *= 25.4;
    rule = "multiply the length value by 25.4";
  }
  else if (unit1 == "Inch" && unit2 == "Micrometers") {
    data *= 25400;
    rule = "multiply the length value by 25400";
  }
  else if (unit1 == "Inch" && unit2 == "Nanometers") {
    data *= 2.54e+7;
    rule = "multiply the length value by 2.54e+7";
  }
  else if (unit1 == "Inch" && unit2 == "Mile") {
    data /= 63360;
    rule = "divide the length value by 63360";
  }
  else if (unit1 == "Inch" && unit2 == "Yard") {
    data /= 36;
    rule = "divide the length value by 36";
  }
  else if (unit1 == "Inch" && unit2 == "Foot") {
    data /= 12;
    rule = "divide the length value by 12";
  }
  else if (unit1 == "Inch" && unit2 == "Nutical Mile") {
    data /= 72913;
    rule = "for an approximate result, divide the length value by 72913";
  }
  else if (unit1 == "Nutical Mile" && unit2 == "Kilometer") {
    data *= 1.852;
    rule = "multiply the length value by 1.852";
  }
  else if (unit1 == "Nutical Mile" && unit2 == "Meter") {
    data *= 1852;
    rule = "multiply the length value by 1852";
  }
  else if (unit1 == "Nutical Mile" && unit2 == "Centimeters") {
    data *= 185200;
    rule = "multiply the length value by 185200";
  }
  else if (unit1 == "Nutical Mile" && unit2 == "Milimeters") {
    data *= 1.852e+6;
    rule = "multiply the length value by 1.852e+6";
  }
  else if (unit1 == "Nutical Mile" && unit2 == "Micrometers") {
    data *= 1.852e+9;
    rule = "multiply the length value by 1.852e+9";
  }
  else if (unit1 == "Nutical Mile" && unit2 == "Nanometers") {
    data *= 1.852e+12;
    rule = "multiply the length value by 1.852e+12";
  }
  else if (unit1 == "Nutical Mile" && unit2 == "Mile") {
    data *= 1.15078;
    rule = "for an approximate result, multiply the length value by 1.151";
  }
  else if (unit1 == "Nutical Mile" && unit2 == "Yard") {
    data *= 2025.37
    rule = "for an approximate result, multiply the length value by 2025";
  }
  else if (unit1 == "Nutical Mile" && unit2 == "Foot") {
    data *= 6076.12;
    rule = "for an approximate result, multiply the length value by 6076";
  }
  else if (unit1 == "Nutical Mile" && unit2 == "Inch") {
    data *= 72913.4;
    rule = "for an approximate result, multiply the length value by 72913";
  }

  data = round(data, 4);

  if (input1) {
    document.getElementById('lengthInput2').value = data;
    input1 = false;
  }
  else if (input2) {
    document.getElementById('lengthInput1').value = data;
    input2 = false;
    swap();
  }
  document.getElementById('formula').innerHTML = rule;
}

function toConvertMass() {
  var data, rule;
  if (input1 == true) {
    data = Number(document.getElementById('massInput1').value);
  }
  else if (input2 == true) {
    data = Number(document.getElementById('massInput2').value);
    swap();
  }

  if (unit1 == "Tonnes" && unit2 == "Kilogram") {
    data *= 1000;
    rule = "multiply the mass value by 1000";
  }
  else if (unit1 == "Tonnes" && unit2 == "Gram") {
    data *= 1e+6;
    rule = "multiply the mass value by 1e+6";
  }
  else if (unit1 == "Tonnes" && unit2 == "Milligram") {
    data *= 1e+9;
    rule = "multiply the mass value by 1e+9";
  }
  else if (unit1 == "Tonnes" && unit2 == "Microgram") {
    data *= 1e+12;
    rule = "for an approximate result, multiply the mass value by 1e+12";
  }
  else if (unit1 == "Tonnes" && unit2 == "Imperial ton") {
    data /= 1.016;
    rule = "divide the mass value by 1.016";
  }
  else if (unit1 == "Tonnes" && unit2 == "US ton") {
    data *= 1.102311310;
    rule = "for an approximate result, multiply the mass value by 1.102";
  }
  else if (unit1 == "Tonnes" && unit2 == "Stone") {
    data *= 157.4730444;
    rule = "for an approximate result, multiply the mass value by 157";
  }
  else if (unit1 == "Tonnes" && unit2 == "Pound") {
    data *= 2204.622621;
    rule = "for an approximate result, multiply the mass value by 2205";
  }
  else if (unit1 == "Tonnes" && unit2 == "Ounce") {
    data *= 35274;
    rule = "for an approximate result, multiply the mass value by 35274";
  }
  else if (unit1 == "Kilogram" && unit2 == "Tonnes") {
    data /= 1000;
    rule = "divide the mass value by 1000";
  }
  else if (unit1 == "Kilogram" && unit2 == "Gram") {
    data *= 1000;
    rule = "multiply the mass value by 1000";
  }
  else if (unit1 == "Kilogram" && unit2 == "Milligram") {
    data *= 1e+6;
    rule = "multiply the mass value by 1e+6";
  }
  else if (unit1 == "Kilogram" && unit2 == "Microgram") {
    data *= 1e+9
    rule = "multiply the mass value by 1e+9";
  }
  else if (unit1 == "Kilogram" && unit2 == "Imperial ton") {
    data /= 1016.046916657;
    rule = "";
  }
  else if (unit1 == "Kilogram" && unit2 == "US ton") {
    data /= 907.18474;
    rule = "for an approximate result, divide the mass value by 907";
  }
  else if (unit1 == "Kilogram" && unit2 == "Stone") {
    data /= 350293181;
    rule = "for an approximate result, divide the mass value by 6.35";
  }
  else if (unit1 == "Kilogram" && unit2 == "Pound") {
    data *= 2.20462262
    rule = "for an approximate result, multiply the mass value by 2.205";
  }
  else if (unit1 == "Kilogram" && unit2 == "Ounce") {
    data *= 35.274;
    rule = "multiply the mass value by 35.274";
  }
  else if (unit1 == "Gram" && unit2 == "Tonnes") {
    data /= 1e+6;
    rule = "divide the mass value by 1e+6";
  }
  else if (unit1 == "Gram" && unit2 == "Kilogram") {
    data /= 1000;
    rule = "divide the mass value by 1000";
  }
  else if (unit1 == "Gram" && unit2 == "Milligram") {
    data *= 1000;
    rule = "multiply the mass value by 1000";
  }
  else if (unit1 == "Gram" && unit2 == "Microgram") {
    data *= 1e+6;
    rule = "multiply the mass value by 1e+6";
  }
  else if (unit1 == "Gram" && unit2 == "Imperial ton") {
    data /= 1.016e+6;
    rule = "divide the mass value by 1.016e+6";
  }
  else if (unit1 == "Gram" && unit2 == "US ton") {
    data /= 907184.74;
    rule = "for an approximate result, divide the mass value by 907185";
  }
  else if (unit1 == "Gram" && unit2 == "Stone") {
    data /= 6350;
    rule = "for an approximate result, divide the mass value by 6350";
  }
  else if (unit1 == "Gram" && unit2 == "Pound") {
    data /= 453.592374495;
    rule = "for an approximate result, divide the mass value by 454";
  }
  else if (unit1 == "Gram" && unit2 == "Ounce") {
    data /= 28.349523125;
    rule = "for an approximate result, divide the mass value by 28.35";
  }
  else if (unit1 == "Milligram" && unit2 == "Tonnes") {
    data /= 1e+9;
    rule = "divide the mass value by 1e+9";
  }
  else if (unit1 == "Milligram" && unit2 == "Kilogram") {
    data /= 1e+6;
    rule = "divide the mass value by 1e+6";
  }
  else if (unit1 == "Milligram" && unit2 == "Gram") {
    data /= 1000;
    rule = "divide the mass value by 1000";
  }
  else if (unit1 == "Milligram" && unit2 == "Microgram") {
    data *= 1000;
    rule = "multiply the mass value by 1000";
  }
  else if (unit1 == "Milligram" && unit2 == "Imperial ton") {
    data /= 1.016e+9;
    rule = "divide the mass value by 1.016e+9";
  }
  else if (unit1 == "Milligram" && unit2 == "US ton") {
    data /= 9.0718474e+8;
    rule = "for an approximate result, divide the mass value by 9.072e+8";
  }
  else if (unit1 == "Milligram" && unit2 == "Stone") {
    data /= 6.35e+6;
    rule = "for an approximate result, divide the mass value by 6.35e+6";
  }
  else if (unit1 == "Milligram" && unit2 == "Pound") {
    data /= 453592.37;
    rule = "for an approximate result, divide the mass value by 453592";
  }
  else if (unit1 == "Milligram" && unit2 == "Ounce") {
    data /= 28350;
    rule = "for an approximate result, divide the mass value by 28350";
  }
  else if (unit1 == "Microgram" && unit2 == "Tonnes") {
    data /= 1e+12;
    rule = "divide the mass value by 1e+12";
  }
  else if (unit1 == "Microgram" && unit2 == "Kilogram") {
    data /= 1e+9;
    rule = "divide the mass value by 1e+9";
  }
  else if (unit1 == "Microgram" && unit2 == "Gram") {
    data /= 1e+6;
    rule = "divide the mass value by 1e+6";
  }
  else if (unit1 == "Microgram" && unit2 == "Milligram") {
    data /= 1000;
    rule = "divide the mass value by 1000";
  }
  else if (unit1 == "Microgram" && unit2 == "Imperial ton") {
    data /= 1.016e+12;
    rule = "divide the mass value by 1.016e+12";
  }
  else if (unit1 == "Microgram" && unit2 == "US ton") {
    data /= 9.0718474e+11;
    rule = "for an approximate result, divide the mass value by 9.072e+11";
  }
  else if (unit1 == "Microgram" && unit2 == "Stone") {
    data /= 6.35e+9;
    rule = "for an approximate result, divide the mass value by 6.35e+9";
  }
  else if (unit1 == "Microgram" && unit2 == "Pound") {
    data /= 4.536e+8;
    rule = "divide the mass value by 4.536e+8";
  }
  else if (unit1 == "Microgram" && unit2 == "Ounce") {
    data /= 2.835e+7;
    rule = "divide the mass value by 2.835e+7";
  }
  else if (unit1 == "Imperial ton" && unit2 == "Tonnes") {
    data *= 1.0165;
    rule = "multiply the mass value by 1.016";
  }
  else if (unit1 == "Imperial ton" && unit2 == "Kilogram") {
    data *= 1016.046;
    rule = "for an approximate result, multiply the mass value by 1016";
  }
  else if (unit1 == "Imperial ton" && unit2 == "Gram") {
    data *= 1.016e+6;
    rule = "multiply the mass value by 1.016e+6";
  }
  else if (unit1 == "Imperial ton" && unit2 == "Milligram") {
    data *= 1.016e+9;
    rule = "multiply the mass value by 1.016e+9";
  }
  else if (unit1 == "Imperial ton" && unit2 == "Microgram") {
    data *= 1.016e+12;
    rule = "multiply the mass value by 1.016e+12";
  }
  else if (unit1 == "Imperial ton" && unit2 == "US ton") {
    data *= 1.12;
    rule = "multiply the mass value by 1.12";
  }
  else if (unit1 == "Imperial ton" && unit2 == "Stone") {
    data *= 160;
    rule = "multiply the mass value by 160";
  }
  else if (unit1 == "Imperial ton" && unit2 == "Pound") {
    data *= 2240;
    rule = "multiply the mass value by 2240";
  }
  else if (unit1 == "Imperial ton" && unit2 == "Ounce") {
    data *= 35840;
    rule = "multiply the mass value by 35840";
  }
  else if (unit1 == "US ton" && unit2 == "Tonnes") {
    data /= 1.102311372;
    rule = "for an approximate result, divide the mass value by 1.102";
  }
  else if (unit1 == "US ton" && unit2 == "Kilogram") {
    data *= 907.18474;
    rule = "for an approximate result, multiply the mass value by 907";
  }
  else if (unit1 == "US ton" && unit2 == "Gram") {
    data *= 907184.74;
    rule = "for an approximate result, multiply the mass value by 907185";
  }
  else if (unit1 == "US ton" && unit2 == "Milligram") {
    data *= 9.0718474e+8;
    rule = "for an approximate result, multiply the mass value by 9.072e+8";
  }
  else if (unit1 == "US ton" && unit2 == "Microgram") {
    data *= 9.0718474e+11;
    rule = "for an approximate result, multiply the mass value by 9.072e+11";
  }
  else if (unit1 == "US ton" && unit2 == "Imperial ton") {
    data /= 1.12;
    rule = "divide the mass value by 1.12";
  }
  else if (unit1 == "US ton" && unit2 == "Stone") {
    data *= 142.857142857;
    rule = "for an approximate result, multiply the mass value by 143";
  }
  else if (unit1 == "US ton" && unit2 == "Pound") {
    data *= 2000;
    rule = "multiply the mass value by 2000";
  }
  else if (unit1 == "US ton" && unit2 == "Ounce") {
    data *= 32000;
    rule = "multiply the mass value by 32000";
  }
  else if (unit1 == "Stone" && unit2 == "Tonnes") {
    data /= 157.4730444;
    rule = "for an approximate result, divide the mass value by 157";
  }
  else if (unit1 == "Stone" && unit2 == "Kilogram") {
    data *= 6.35029318;
    rule = "for an approximate result, multiply the mass value by 6.35";
  }
  else if (unit1 == "Stone" && unit2 == "Gram") {
    data *= 6350.29318;
    rule = "for an approximate result, multiply the mass value by 6350";
  }
  else if (unit1 == "Stone" && unit2 == "Milligram") {
    data *= 6.35029318e+6;
    rule = "for an approximate result, multiply the mass value by 6.35e+6";
  }
  else if (unit1 == "Stone" && unit2 == "Microgram") {
    data *= 6.35029318e+9;
    rule = "for an approximate result, multiply the mass value by 6.35e+9";
  }
  else if (unit1 == "Stone" && unit2 == "Imperial ton") {
    data /= 160;
    rule = "divide the mass value by 160";
  }
  else if (unit1 == "Stone" && unit2 == "US ton") {
    data /= 142.857142857
    rule = "for an approximate result, divide the mass value by 143";
  }
  else if (unit1 == "Stone" && unit2 == "Pound") {
    data *= 14;
    rule = "multiply the mass value by 14";
  }
  else if (unit1 == "Stone" && unit2 == "Ounce") {
    data *= 224;
    rule = "multiply the mass value by 224";
  }
  else if (unit1 == "Pound" && unit2 == "Tonnes") {
    data /= 2204.622621;
    rule = "for an approximate result, divide the mass value by 2205";
  }
  else if (unit1 == "Pound" && unit2 == "Kilogram") {
    data /= 2.204622621
    rule = "for an approximate result, divide the mass value by 2.205";
  }
  else if (unit1 == "Pound" && unit2 == "Gram") {
    data *= 453.592;
    rule = "for an approximate result, multiply the mass value by 454";
  }
  else if (unit1 == "Pound" && unit2 == "Milligram") {
    data *= 453592.37;
    rule = "for an approximate result, multiply the mass value by 453592";
  }
  else if (unit1 == "Pound" && unit2 == "Microgram") {
    data *= 4.536e+8;
    rule = "multiply the mass value by 4.536e+8";
  }
  else if (unit1 == "Pound" && unit2 == "Imperial ton") {
    data /= 2240;
    rule = "divide the mass value by 2240";
  }
  else if (unit1 == "Pound" && unit2 == "US ton") {
    data /= 2000;
    rule = "divide the mass value by 2000";
  }
  else if (unit1 == "Pound" && unit2 == "Stone") {
    data /= 14;
    rule = "divide the mass value by 14";
  }
  else if (unit1 == "Pound" && unit2 == "Ounce") {
    data *= 16;
    rule = "multiply the mass value by 16";
  }
  else if (unit1 == "Ounce" && unit2 == "Tonnes") {
    data /= 35274;
    rule = "for an approximate result, divide the mass value by 35274";
  }
  else if (unit1 == "Ounce" && unit2 == "Kilogram") {
    data /= 35.274;
    rule = "divide the mass value by 35.274";
  }
  else if (unit1 == "Ounce" && unit2 == "Gram") {
    data *= 28.349523125;
    rule = "for an approximate result, multiply the mass value by 28.35";
  }
  else if (unit1 == "Ounce" && unit2 == "Milligram") {
    data *= 28349.523125;
    rule = "for an approximate result, multiply the mass value by 28350";
  }
  else if (unit1 == "Ounce" && unit2 == "Microgram") {
    data *= 2.834952e+7;
    rule = "multiply the mass value by 2.835e+7";
  }
  else if (unit1 == "Ounce" && unit2 == "Imperial ton") {
    data /= 35840;
    rule = "divide the mass value by 35840";
  }
  else if (unit1 == "Ounce" && unit2 == "US ton") {
    data /= 32000;
    rule = "divide the mass value by 32000";
  }
  else if (unit1 == "Ounce" && unit2 == "Stone") {
    data /= 224;
    rule = "divide the mass value by 224";
  }
  else if (unit1 == "Ounce" && unit2 == "Pound") {
    data /= 16;
    rule = "divide the mass value by 16";
  }


  data = round(data, 4);
  if (input1) {
    document.getElementById('massInput2').value = data;
    input1 = false;
  }
  else if (input2) {
    document.getElementById('massInput1').value = data;
    input2 = false;
    swap();
  }
  document.getElementById('formula').innerHTML = rule;
}

function toConvertAngle() {
  var data, rule;
  if (input1 == true) {
    data = Number(document.getElementById('angleInput1').value);
  }
  else if (input2 == true) {
    data = Number(document.getElementById('angleInput2').value);
    swap();
  }

  if (unit1 == "Degree" && unit2 == "Gradian") {
    data *= (200 / 180);
    rule = "1Deg × 200/180 = 1.111Grad";
  }
  else if (unit1 == "Degree" && unit2 == "Milliradian") {
    data *= ((1000 * Math.PI) / 180);
    rule = "1Deg × 1000π/180 = 17.453mRad";
  }
  else if (unit1 == "Degree" && unit2 == "Minute of arc") {
    data *= 60;
    rule = "multiply the plane angle value by 60";
  }
  else if (unit1 == "Degree" && unit2 == "Radian") {
    data *= (Math.PI / 180);
    rule = "1Deg × π/180 = 0.01745Rad";
  }
  else if (unit1 == "Degree" && unit2 == "Second of arc") {
    data *= 3600;
    rule = "multiply the plane angle value by 3600";
  }
  else if (unit1 == "Gradian" && unit2 == "Degree") {
    data *= (180 / 200);
    rule = "1Grad × 180/200 = 0.9Deg";
  }
  else if (unit1 == "Gradian" && unit2 == "Milliradian") {
    data *= ((100 * Math.PI) / 200);
    rule = "1Grad × 1000π/200 = 15.708mRad";
  }
  else if (unit1 == "Gradian" && unit2 == "Minute of arc") {
    data *= 54;
    rule = "multiply the plane angle value by 54";
  }
  else if (unit1 == "Gradian" && unit2 == "Radian") {
    data *= (Math.PI / 200);
    rule = "1Grad × π/200 = 0.01571Rad";
  }
  else if (unit1 == "Gradian" && unit2 == "Second of arc") {
    data *= 3240;
    rule = "multiply the plane angle value by 3240";
  }
  else if (unit1 == "Milliradian" && unit2 == "Degree") {
    data *= (180 / (1000 * Math.PI));
    rule = "1mRad × 180/1000π = 0.0573Deg";
  }
  else if (unit1 == "Milliradian" && unit2 == "Gradian") {
    data *= (200 / (1000 * Math.PI));
    rule = "1mRad × 200/1000π = 0.06366Grad";
  }
  else if (unit1 == "Milliradian" && unit2 == "Minute of arc") {
    data *= ((60 * 180) / (1000 * Math.PI));
    rule = "1mRad × (60 × 180)/1000π = 3.438'";
  }
  else if (unit1 == "Milliradian" && unit2 == "Radian") {
    data /= 1000;
    rule = "divide the plane angle value by 1000";
  }
  else if (unit1 == "Milliradian" && unit2 == "Second of arc") {
    data *= ((3600 * 180) / (1000 * Math.PI));
    rule = '1mRad × (3600 × 180)/1000π = 206.265"';
  }
  else if (unit1 == "Minute of arc" && unit2 == "Degree") {
    data /= 60;
    rule = "divide the plane angle value by 60";
  }
  else if (unit1 == "Minute of arc" && unit2 == "Gradian") {
    data /= 54;
    rule = "divide the plane angle value by 54";
  }
  else if (unit1 == "Minute of arc" && unit2 == "Milliradian") {
    data *= ((1000 * Math.PI) / (60 * 180));
    rule = "1' × 1000π/(60 × 180) = 0.2909mRad";
  }
  else if (unit1 == "Minute of arc" && unit2 == "Radian") {
    data *= (Math.PI / (60 * 180));
    rule = "1' × π/(60 × 180) = 0.0002909Rad";
  }
  else if (unit1 == "Minute of arc" && unit2 == "Second of arc") {
    data *= 60;
    rule = "multiply the plane angle value by 60";
  }
  else if (unit1 == "Radian" && unit2 == "Degree") {
    data *= (180 / Math.PI);
    rule = "1Rad × 180/π = 57.296Deg";
  }
  else if (unit1 == "Radian" && unit2 == "Gradian") {
    data *= (200 / Math.PI);
    rule = "1Rad × 200/π = 63.662Grad";
  }
  else if (unit1 == "Radian" && unit2 == "Milliradian") {
    data *= 1000;
    rule = "multiply the plane angle value by 1000";
  }
  else if (unit1 == "Radian" && unit2 == "Minute of arc") {
    data *= ((180 * 60) / Math.PI);
    rule = "1Rad × (60 × 180)/π = 3437.747'";
  }
  else if (unit1 == "Radian" && unit2 == "Second of arc") {
    data *= ((3600 * 180) / Math.PI);
    rule = '1Rad × (3600 × 180)/π = 206264.806"';
  }
  else if (unit1 == "Second of arc" && unit2 == "Degree") {
    data /= 3600;
    rule = "divide the plane angle value by 3600";
  }
  else if (unit1 == "Second of arc" && unit2 == "Gradian") {
    data /= 3240;
    rule = "divide the plane angle value by 3240";
  }
  else if (unit1 == "Second of arc" && unit2 == "Milliradian") {
    data *= ((1000 * Math.PI) / (180 * 3600));
    rule = '1" × 1000π/(180 × 3600) = 0.004848mRad';
  }
  else if (unit1 == "Second of arc" && unit2 == "Minute of arc") {
    data /= 60;
    rule = "divide the plane angle value by 60";
  }
  else if (unit1 == "Second of arc" && unit2 == "Radian") {
    data *= (Math.PI / (3600 * 180));
    rule = '1" × π/(180 × 3600) = 4.848e-6Rad';
  }

  data = round(data, 4);
  if (input1) {
    document.getElementById('angleInput2').value = data;
    input1 = false;
  }
  else if (input2) {
    document.getElementById('angleInput1').value = data;
    input2 = false;
    swap();
  }
  document.getElementById('formula').innerHTML = rule;

}

function toConvertPressure() {
  var data, rule;
  if (input1 == true) {
    data = Number(document.getElementById('pressureInput1').value);
  }
  else if (input2 == true) {
    data = Number(document.getElementById('pressureInput2').value);
    swap();
  }

  if (unit1 == "Bar" && unit2 == "Pascal") {
    data *= 100000;
    rule = "multiply the pressure value by 100000";
  }
  else if (unit1 == "Bar" && unit2 == "Pound-force per square inch") {
    data *= 14.5037737;
    rule = "for an approximate result, multiply the pressure value by 14.504";
  }
  else if (unit1 == "Bar" && unit2 == "Standard atmosphere") {
    data /= 1.01325;
    rule = "for an approximate result, divide the pressure value by 1.013";
  }
  else if (unit1 == "Bar" && unit2 == "Torr") {
    data *= 750.0616828;
    rule = "for an approximate result, multiply the pressure value by 750";
  }
  else if (unit1 == "Pascal" && unit2 == "Bar") {
    data /= 100000;
    rule = "divide the pressure value by 100000";
  }
  else if (unit1 == "Pascal" && unit2 == "Pound-force per square inch") {
    data / 6894.757294604;
    rule = "for an approximate result, divide the pressure value by 6895";
  }
  else if (unit1 == "Pascal" && unit2 == "Standard atmosphere") {
    data /= 101325;
    rule = "divide the pressure value by 101325";
  }
  else if (unit1 == "Pascal" && unit2 == "Torr") {
    data /= 133.322383122;
    rule = "for an approximate result, divide the pressure value by 133";
  }
  else if (unit1 == "Pound-force per square inch" && unit2 == "Bar") {
    data /= 14.503773969;
    rule = "for an approximate result, divide the pressure value by 14.504";
  }
  else if (unit1 == "Pound-force per square inch" && unit2 == "Pascal") {
    data *= 6894.7573;
    rule = "for an approximate result, multiply the pressure value by 6895";
  }
  else if (unit1 == "Pound-force per square inch" && unit2 == "Standard atmosphere") {
    data /= 14.696;
    rule = "divide the pressure value by 14.696";
  }
  else if (unit1 == "Pound-force per square inch" && unit2 == "Torr") {
    data *= 51.715;
    rule = "multiply the pressure value by 51.715";
  }
  else if (unit1 == "Standard atmosphere" && unit2 == "Bar") {
    data *= 1.01325;
    rule = "multiply the pressure value by 1.01325";
  }
  else if (unit1 == "Standard atmosphere" && unit2 == "Pascal") {
    data *= 101325;
    rule = "multiply the pressure value by 101325";
  }
  else if (unit1 == "Standard atmosphere" && unit2 == "Pound-force per square inch") {
    data *= 14.6959;
    rule = "multiply the pressure value by 14.696";
  }
  else if (unit1 == "Standard atmosphere" && unit2 == "Torr") {
    data *= 760;
    rule = "multiply the pressure value by 760";
  }
  else if (unit1 == "Torr" && unit2 == "Bar") {
    data /= 750.061682823;
    rule = "for an approximate result, divide the pressure value by 750";
  }
  else if (unit1 == "Torr" && unit2 == "Pascal") {
    data *= 133.3223684;
    rule = "for an approximate result, multiply the pressure value by 133";
  }
  else if (unit1 == "Torr" && unit2 == "Pound-force per square inch") {
    data /= 51.715;
    rule = "divide the pressure value by 51.715";
  }
  else if (unit1 == "Torr" && unit2 == "Standard atmosphere") {
    data /= 760;
    rule = "divide the pressure value by 760";
  }

  data = round(data, 4);

  if (input1) {
    document.getElementById('pressureInput2').value = data;
    input1 = false;
  }
  else if (input2) {
    document.getElementById('pressureInput1').value = data;
    input2 = false;
    swap();
  }
  document.getElementById('formula').innerHTML = rule;

}

function toConvertSpeed() {
  var data, rule;
  if (input1 == true) {
    data = Number(document.getElementById('speedInput1').value);
  }
  else if (input2 == true) {
    data = Number(document.getElementById('speedInput2').value);
    swap();
  }

  if (unit1 == "Miles per hour" && unit2 == "Foot per second") {
    data *= 1.4666666666;
    rule = "for an approximate result, multiply the speed value by 1.467";
  }
  else if (unit1 == "Miles per hour" && unit2 == "Metres per second") {
    data /= 2.237;
    rule = "divide the speed value by 2.237";
  }
  else if (unit1 == "Miles per hour" && unit2 == "Kilometres per hour") {
    data *= 1.609344;
    rule = "for an approximate result, multiply the speed value by 1.609";
  }
  else if (unit1 == "Miles per hour" && unit2 == "Knot") {
    data /= 1.150779447;
    rule = "for an approximate result, divide the speed value by 1.151";
  }
  else if (unit1 == "Foot per second" && unit2 == "Miles per hour") {
    data /= 1.466666668;
    rule = "for an approximate result, divide the speed value by 1.467";
  }
  else if (unit1 == "Foot per second" && unit2 == "Metres per second") {
    data /= 3.280839895;
    rule = "for an approximate result, divide the speed value by 3.281";
  }
  else if (unit1 == "Foot per second" && unit2 == "Kilometres per hour") {
    data *= 1.09728;
    rule = "for an approximate result, multiply the speed value by 1.097";
  }
  else if (unit1 == "Foot per second" && unit2 == "Knot") {
    data /= 1.687809291;
    unit = "for an approximate result, divide the speed value by 1.688";
  }
  else if (unit1 == "Metres per second" && unit2 == "Miles per hour") {
    data *= 2.2369362;
    rule = "multiply the speed value by 2.237";
  }
  else if (unit1 == "Metres per second" && unit2 == "Foot per second") {
    data *= 3.28084;
    rule = "for an approximate result, multiply the speed value by 3.281";
  }
  else if (unit1 == "Metres per second" && unit2 == "Kilometres per hour") {
    data *= 3.6;
    rule = "multiply the speed value by 3.6";
  }
  else if (unit1 == "Metres per second" && unit2 == "Knot") {
    data *= 1.9438444;
    rule = "for an approximate result, multiply the speed value by 1.944";
  }
  else if (unit1 == "Kilometres per hour" && unit2 == "Miles per hour") {
    data /= 1.609344239;
    rule = "for an approximate result, divide the speed value by 1.609";
  }
  else if (unit1 == "Kilometres per hour" && unit2 == "Foot per second") {
    data /= 097280006;
    unit1 = "for an approximate result, divide the speed value by 1.097";
  }
  else if (unit1 == "Kilometres per hour" && unit2 == "Metres per second") {
    data /= 3.6;
    rule = "divide the speed value by 3.6";
  }
  else if (unit1 == "Kilometres per hour" && unit2 == "Knot") {
    data /= 1.852;
    rule = "divide the speed value by 1.852";
  }
  else if (unit1 == "Knot" && unit2 == "Miles per hour") {
    data *= 1.15077009;
    rule = "for an approximate result, multiply the speed value by 1.151";
  }
  else if (unit1 == "Knot" && unit2 == "Foot per second") {
    data *= 1.68781;
    rule = "for an approximate result, multiply the speed value by 1.688";
  }
  else if (unit1 == "Knot" && unit2 == "Metres per second") {
    data /= 1.943844494;
    rule = "for an approximate result, divide the speed value by 1.944";
  }
  else if (unit1 == "Knot" && unit2 == "Kilometres per hour") {
    data *= 1.852;
    rule = "multiply the speed value by 1.852";
  }


  data = round(data, 4);

  if (input1) {
    document.getElementById('speedInput2').value = data;
    input1 = false;
  }
  else if (input2) {
    document.getElementById('speedInput1').value = data;
    input2 = false;
    swap();
  }
  document.getElementById('formula').innerHTML = rule;
}

function toConvertTemp() {
  var data, rule;
  if (input1 == true) {
    data = Number(document.getElementById('tempInput1').value);
  }
  else if (input2 == true) {
    data = Number(document.getElementById('tempInput2').value);
    swap();
  }

  if (unit1 == "Celsius" && unit2 == "Fahrenhite") {
    data = ((data * 9 / 5) + 32);
    rule = "(1<b>°C</b> × 9/5) + 32 = 33.8<b>°F</b>";
  }
  else if (unit1 == "Celsius" && unit2 == "Kelvin") {
    data += 273.15;
    rule = "1°<b>C</b> + 273.15 = 274.15<b>K</b>";
  }
  else if (unit1 == "Fahrenhite" && unit2 == "Celsius") {
    data = ((data - 32) * 5 / 9);
    rule = "(1<b>°F</b> − 32) × 5/9 = -17.22<b>°C</b>";
  }
  else if (unit1 == "Fahrenhite" && unit2 == "Kelvin") {
    data = (((data - 32) * 5 / 9) + 273.15);
    rule = "(1<b>°F</b> − 32) × 5/9 + 273.15 = 255.928<b>K</b>";
  }
  else if (unit1 == "Kelvin" && unit2 == "Celsius") {
    data = data - 273.15;
    rule = "1<b>K</b> − 273.15 = -272.1<b>°C</b>";
  }
  else if (unit1 == "Kelvin" && unit2 == "Fahrenhite") {
    data = ((data - 273.15) * 9 / 5) + 32;
    rule = "(1<b>K</b> − 273.15) × 9/5 + 32 = -457.9<b>°F</b>";
  }


  data = round(data, 4);

  if (input1) {
    document.getElementById('tempInput2').value = data;
    input1 = false;
  }
  else if (input2) {
    document.getElementById('tempInput1').value = data;
    input2 = false;
    swap();
  }
  document.getElementById('formula').innerHTML = rule;
}

function toConvertTime() {
  var data, rule;
  if (input1 == true) {
    data = Number(document.getElementById('timeInput1').value);
  }
  else if (input2 == true) {
    data = Number(document.getElementById('timeInput2').value);
    swap();
  }

  if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }
  else if (unit1 == "" && unit2 == "") {

    rule = "";
  }


  data = round(data, 4);

  if (input1) {
    document.getElementById('timeInput2').value = data;
    input1 = false;
  }
  else if (input2) {
    document.getElementById('timeInput1').value = data;
    input2 = false;
    swap();
  }
  document.getElementById('formula').innerHTML = rule;
}

function toConvertVolume() {
  var data, rule;
  if (input1 == true) {
    data = Number(document.getElementById('volumeInput1').value);
  }
  else if (input2 == true) {
    data = Number(document.getElementById('volumeInput2').value);
    swap();
  }

  if (unit1 == "US liquid gallon" && unit2 == "US liquid quart") {
    data *= 4;
    rule = "multiply the volume value by 4";
  }
  else if (unit1 == "US liquid gallon" && unit2 == "US liquid pint") {
    data *= 8;
    rule = "multiply the volume value by 8";
  }
  else if (unit1 == "US liquid gallon" && unit2 == "US legal cup") {
    data *= 15.7725;
    rule = "for an approximate result, multiply the volume value by 15.773";
  }
  else if (unit1 == "US liquid gallon" && unit2 == "US fluid ounces") {
    data *= 128;
    rule = "multiply the volume value by 128";
  }
  else if (unit1 == "US liquid gallon" && unit2 == "US tablespoon") {
    data *= 256;
    rule = "multiply the volume value by 256";
  }
  else if (unit1 == "US liquid gallon" && unit2 == "US teaspoon") {
    data *= 768;
    rule = "for an approximate result, multiply the volume value by 768";
  }
  else if (unit1 == "US liquid gallon" && unit2 == "Cubic metres") {
    data /= 264;
    rule = "for an approximate result, divide the volume value by 264";
  }
  else if (unit1 == "US liquid gallon" && unit2 == "Litres") {
    data *= 3.78541;
    rule = "for an approximate result, multiply the volume value by 3.785";
  }
  else if (unit1 == "US liquid gallon" && unit2 == "Millilitres") {
    data *= 3785.41;
    rule = "for an approximate result, multiply the volume value by 3785";
  }
  else if (unit1 == "US liquid gallon" && unit2 == "Gallons") {
    data /= 1.201;
    rule = "divide the volume value by 1.201";
  }
  else if (unit1 == "US liquid gallon" && unit2 == "Imperial quart") {
    data *= 3.3307;
    rule = "for an approximate result, multiply the volume value by 3.331";
  }
  else if (unit1 == "US liquid gallon" && unit2 == "Imperial pint") {
    data *= 6.66139;
    rule = "for an approximate result, multiply the volume value by 6.661";
  }
  else if (unit1 == "US liquid gallon" && unit2 == "Imperial cup") {
    data *= 13.3228;
    rule = "for an approximate result, multiply the volume value by 13.323";
  }
  else if (unit1 == "US liquid gallon" && unit2 == "Imperial fluid ounces") {
    data *= 133.228;
    rule = "for an approximate result, multiply the volume value by 133";
  }
  else if (unit1 == "US liquid gallon" && unit2 == "Imperial tablespoon") {
    data *= 213.165;
    rule = "for an approximate result, multiply the volume value by 213";
  }
  else if (unit1 == "US liquid gallon" && unit2 == "Imperial teaspoon") {
    data *= 639.494;
    rule = "for an approximate result, multiply the volume value by 639";
  }
  else if (unit1 == "US liquid gallon" && unit2 == "Cubic foot") {
    data /= 7.481;
    rule = "for an approximate result, divide the volume value by 7.481";
  }
  else if (unit1 == "US liquid gallon" && unit2 == "Cubic inch") {
    data *= 231;
    rule = "multiply the volume value by 231";
  }
  else if (unit1 == "US liquid quart" && unit2 == "US liquid gallon") {
    data /= 4;
    rule = "divide the volume value by 4";
  }
  else if (unit1 == "US liquid quart" && unit2 == "US liquid pint") {
    data *= 2;
    rule = "multiply the volume value by 2";
  }
  else if (unit1 == "US liquid quart" && unit2 == "US legal cup") {
    data *= 3.94314;
    rule = "for an approximate result, multiply the volume value by 3.943";
  }
  else if (unit1 == "US liquid quart" && unit2 == "US fluid ounces") {
    data *= 32;
    rule = "multiply the volume value by 32";
  }
  else if (unit1 == "US liquid quart" && unit2 == "US tablespoon") {
    d *= 64;
    rule = "multiply the volume value by 64";
  }
  else if (unit1 == "US liquid quart" && unit2 == "US teaspoon") {
    data *= 192;
    rule = "multiply the volume value by 192";
  }
  else if (unit1 == "US liquid quart" && unit2 == "Cubic metres") {
    data /= 1057;
    rule = "for an approximate result, divide the volume value by 1057";
  }
  else if (unit1 == "US liquid quart" && unit2 == "Litres") {
    data /= 1.057;
    rule = "for an approximate result, divide the volume value by 1.057";
  }
  else if (unit1 == "US liquid quart" && unit2 == "Millilitres") {
    data *= 946.353;
    rule = "for an approximate result, multiply the volume value by 946";
  }
  else if (unit1 == "US liquid quart" && unit2 == "Gallons") {
    data /= 4.804;
    rule = "for an approximate result, divide the volume value by 4.804";
  }
  else if (unit1 == "US liquid quart" && unit2 == "Imperial quart") {
    data /= 1.201;
    rule = "divide the volume value by 1.201";
  }
  else if (unit1 == "US liquid quart" && unit2 == "Imperial pint") {
    data *= 1.66535;
    rule = "for an approximate result, multiply the volume value by 1.665";
  }
  else if (unit1 == "US liquid quart" && unit2 == "Imperial cup") {
    data *= 3.3307;
    rule = "for an approximate result, multiply the volume value by 3.331";
  }
  else if (unit1 == "US liquid quart" && unit2 == "Imperial fluid ounces") {
    data *= 33.307;
    rule = "multiply the volume value by 33.307";
  }
  else if (unit1 == "US liquid quart" && unit2 == "Imperial tablespoon") {
    data *= 53.2911;
    rule = "for an approximate result, multiply the volume value by 53.291";
  }
  else if (unit1 == "US liquid quart" && unit2 == "Imperial teaspoon") {
    data *= 159.873;
    rule = "for an approximate result, multiply the volume value by 160";
  }
  else if (unit1 == "US liquid quart" && unit2 == "Cubic foot") {
    data /= 29.922;
    rule = "divide the volume value by 29.922";
  }
  else if (unit1 == "US liquid quart" && unit2 == "Cubic inch") {
    data *= 57.75;
    rule = "multiply the volume value by 57.75";
  }
  else if (unit1 == "US liquid pint" && unit2 == "US liquid gallon") {
    data /= 8;
    rule = "divide the volume value by 8";
  }
  else if (unit1 == "US liquid pint" && unit2 == "US liquid quart") {
    data /= 2;
    rule = "divide the volume value by 2";
  }
  else if (unit1 == "US liquid pint" && unit2 == "US legal cup") {
    data *= 1.97157;
    rule = "for an approximate result, multiply the volume value by 1.972";
  }
  else if (unit1 == "US liquid pint" && unit2 == "US fluid ounces") {
    data *= 16;
    rule = "multiply the volume value by 16";
  }
  else if (unit1 == "US liquid pint" && unit2 == "US tablespoon") {
    data *= 32;
    rule = "multiply the volume value by 32";
  }
  else if (unit1 == "US liquid pint" && unit2 == "US teaspoon") {
    data *= 96;
    rule = "multiply the volume value by 96";
  }
  else if (unit1 == "US liquid pint" && unit2 == "Cubic metres") {
    data /= 2113;
    rule = "for an approximate result, divide the volume value by 2113";
  }
  else if (unit1 == "US liquid pint" && unit2 == "Litres") {
    data /= 2.113;
    rule = "for an approximate result, divide the volume value by 2.113";
  }
  else if (unit1 == "US liquid pint" && unit2 == "Millilitres") {
    data *= 473.176;
    rule = "for an approximate result, multiply the volume value by 473";
  }
  else if (unit1 == "US liquid pint" && unit2 == "Gallons") {
    data /= 9.608;
    rule = "for an approximate result, divide the volume value by 9.608";
  }
  else if (unit1 == "US liquid pint" && unit2 == "Imperial quart") {
    data /= 2.402;
    rule = "divide the volume value by 2.402";
  }
  else if (unit1 == "US liquid pint" && unit2 == "Imperial pint") {
    data /= 1.201;
    rule = "divide the volume value by 1.201";
  }
  else if (unit1 == "US liquid pint" && unit2 == "Imperial cup") {
    data *= 1.66535;
    rule = "for an approximate result, multiply the volume value by 1.665";
  }
  else if (unit1 == "US liquid pint" && unit2 == "Imperial fluid ounces") {
    data *= 16.6535;
    rule = "for an approximate result, multiply the volume value by 16.653";
  }
  else if (unit1 == "US liquid pint" && unit2 == "Imperial tablespoon") {
    data *= 26.6456;
    rule = "for an approximate result, multiply the volume value by 26.646";
  }
  else if (unit1 == "US liquid pint" && unit2 == "Imperial teaspoon") {
    data *= 79.9367;
    rule = "for an approximate result, multiply the volume value by 79.937";
  }
  else if (unit1 == "US liquid pint" && unit2 == "Cubic foot") {
    data /= 59.844;
    rule = "for an approximate result, divide the volume value by 59.844";
  }
  else if (unit1 == "US liquid pint" && unit2 == "Cubic inch") {
    data *= 28.875;
    rule = "multiply the volume value by 28.875";
  }
  else if (unit1 == "US legal cup" && unit2 == "US liquid gallon") {
    data /= 15.773;
    rule = "for an approximate result, divide the volume value by 15.773";
  }
  else if (unit1 == "US legal cup" && unit2 == "US liquid quart") {
    data /= 3.943;
    rule = "for an approximate result, divide the volume value by 3.943";
  }
  else if (unit1 == "US legal cup" && unit2 == "US liquid pint") {
    data /= 1.972;
    rule = "for an approximate result, divide the volume value by 1.972";
  }
  else if (unit1 == "US legal cup" && unit2 == "US fluid ounces") {
    data *= 8.11537;
    rule = "for an approximate result, multiply the volume value by 8.115";
  }
  else if (unit1 == "US legal cup" && unit2 == "US tablespoon") {
    data *= 16.2307;
    rule = "for an approximate result, multiply the volume value by 16.231";
  }
  else if (unit1 == "US legal cup" && unit2 == "US teaspoon") {
    data *= 48.6922;
    rule = "for an approximate result, multiply the volume value by 48.692";
  }
  else if (unit1 == "US legal cup" && unit2 == "Cubic metres") {
    data /= 4167;
    rule = "for an approximate result, divide the volume value by 4167";
  }
  else if (unit1 == "US legal cup" && unit2 == "Litres") {
    data /= 4.167;
    rule = "for an approximate result, divide the volume value by 4.167";
  }
  else if (unit1 == "US legal cup" && unit2 == "Millilitres") {
    data *= 240;
    rule = "multiply the volume value by 240";
  }
  else if (unit1 == "US legal cup" && unit2 == "Gallons") {
    data /= 18.942;
    rule = "divide the volume value by 18.942";
  }
  else if (unit1 == "US legal cup" && unit2 == "Imperial quart") {
    data /= 4.736;
    rule = "for an approximate result, divide the volume value by 4.736";
  }
  else if (unit1 == "US legal cup" && unit2 == "Imperial pint") {
    data /= 2.368;
    rule = "for an approximate result, divide the volume value by 2.368";
  }
  else if (unit1 == "US legal cup" && unit2 == "Imperial cup") {
    data /= 1.184;
    rule = "for an approximate result, divide the volume value by 1.184";
  }
  else if (unit1 == "US legal cup" && unit2 == "Imperial fluid ounces") {
    data *= 8.44682;
    rule = "for an approximate result, multiply the volume value by 8.447";
  }
  else if (unit1 == "US legal cup" && unit2 == "Imperial tablespoon") {
    data *= 13.515;
    rule = "multiply the volume value by 13.515";
  }
  else if (unit1 == "US legal cup" && unit2 == "Imperial teaspoon") {
    data *= 40.5447;
    rule = "for an approximate result, multiply the volume value by 40.545";
  }
  else if (unit1 == "US legal cup" && unit2 == "Cubic foot") {
    data /= 118;
    rule = "for an approximate result, divide the volume value by 118";
  }
  else if (unit1 == "US legal cup" && unit2 == "Cubic inch") {
    data *= 14.6457;
    rule = "for an approximate result, multiply the volume value by 14.646";
  }
  else if (unit1 == "US fluid ounces" && unit2 == "US liquid gallon") {
    data /= 128;
    rule = "divide the volume value by 128";
  }
  else if (unit1 == "US fluid ounces" && unit2 == "US liquid quart") {
    data /= 32;
    rule = "divide the volume value by 32";
  }
  else if (unit1 == "US fluid ounces" && unit2 == "US liquid pint") {
    data /= 16;
    rule = "divide the volume value by 16";
  }
  else if (unit1 == "US fluid ounces" && unit2 == "US legal cup") {
    data /= 8.115;
    rule = "for an approximate result, divide the volume value by 8.115";
  }
  else if (unit1 == "US fluid ounces" && unit2 == "US tablespoon") {
    data *= 2;
    rule = "multiply the volume value by 2";
  }
  else if (unit1 == "US fluid ounces" && unit2 == "US teaspoon") {
    data *= 6;
    rule = "multiply the volume value by 6";
  }
  else if (unit1 == "US fluid ounces" && unit2 == "Cubic metres") {
    data /= 33814;
    rule = "for an approximate result, divide the volume value by 33814";
  }
  else if (unit1 == "US fluid ounces" && unit2 == "Litres") {
    data /= 33.814;
    rule = "divide the volume value by 33.814";
  }
  else if (unit1 == "US fluid ounces" && unit2 == "Millilitres") {
    data *= 29.5735;
    rule = "for an approximate result, multiply the volume value by 29.574";
  }
  else if (unit1 == "US fluid ounces" && unit2 == "Gallons") {
    data /= 154;
    rule = "for an approximate result, divide the volume value by 154";
  }
  else if (unit1 == "US fluid ounces" && unit2 == "Imperial quart") {
    data /= 38.43;
    rule = "for an approximate result, divide the volume value by 38.43";
  }
  else if (unit1 == "US fluid ounces" && unit2 == "Imperial pint") {
    data /= 19.215;
    rule = "for an approximate result, divide the volume value by 19.215";
  }
  else if (unit1 == "US fluid ounces" && unit2 == "Imperial cup") {
    data /= 9.608;
    rule = "for an approximate result, divide the volume value by 9.608";
  }
  else if (unit1 == "US fluid ounces" && unit2 == "Imperial fluid ounces") {
    data *= 1.04084;
    rule = "for an approximate result, multiply the volume value by 1.041";
  }
  else if (unit1 == "US fluid ounces" && unit2 == "Imperial tablespoon") {
    data *= 1.66535;
    rule = "for an approximate result, multiply the volume value by 1.665";
  }
  else if (unit1 == "US fluid ounces" && unit2 == "Imperial teaspoon") {
    data *= 4.99604;
    rule = "multiply the volume value by 4.996";
  }
  else if (unit1 == "US fluid ounces" && unit2 == "Cubic foot") {
    data /= 958;
    rule = "for an approximate result, divide the volume value by 958";
  }
  else if (unit1 == "US fluid ounces" && unit2 == "Cubic inch") {
    data *= 1.80469;
    rule = "for an approximate result, multiply the volume value by 1.805";
  }
  else if (unit1 == "US tablespoon" && unit2 == "US liquid gallon") {

    rule = "";
  }
  else if (unit1 == "US tablespoon" && unit2 == "US liquid quart") {

    rule = "";
  }
  else if (unit1 == "US tablespoon" && unit2 == "US liquid pint") {

    rule = "";
  }
  else if (unit1 == "US tablespoon" && unit2 == "US legal cup") {

    rule = "";
  }
  else if (unit1 == "US tablespoon" && unit2 == "US fluid ounces") {

    rule = "";
  }
  else if (unit1 == "US tablespoon" && unit2 == "US teaspoon") {

    rule = "";
  }
  else if (unit1 == "US tablespoon" && unit2 == "Cubic metres") {

    rule = "";
  }
  else if (unit1 == "US tablespoon" && unit2 == "Litres") {

    rule = "";
  }
  else if (unit1 == "US tablespoon" && unit2 == "Millilitres") {

    rule = "";
  }
  else if (unit1 == "US tablespoon" && unit2 == "Gallons") {

    rule = "";
  }
  else if (unit1 == "US tablespoon" && unit2 == "Imperial quart") {

    rule = "";
  }
  else if (unit1 == "US tablespoon" && unit2 == "Imperial pint") {

    rule = "";
  }
  else if (unit1 == "US tablespoon" && unit2 == "Imperial cup") {

    rule = "";
  }
  else if (unit1 == "US tablespoon" && unit2 == "Imperial fluid ounces") {

    rule = "";
  }
  else if (unit1 == "US tablespoon" && unit2 == "Imperial tablespoon") {

    rule = "";
  }
  else if (unit1 == "US tablespoon" && unit2 == "Imperial teaspoon") {

    rule = "";
  }
  else if (unit1 == "US tablespoon" && unit2 == "Cubic foot") {

    rule = "";
  }
  else if (unit1 == "US tablespoon" && unit2 == "Cubic inch") {

    rule = "";
  }
  else if (unit1 == "US teaspoon" && unit2 == "US liquid gallon") {

    rule = "";
  }
  else if (unit1 == "US teaspoon" && unit2 == "US liquid quart") {

    rule = "";
  }
  else if (unit1 == "US teaspoon" && unit2 == "US liquid pint") {

    rule = "";
  }
  else if (unit1 == "US teaspoon" && unit2 == "US legal cup") {

    rule = "";
  }
  else if (unit1 == "US teaspoon" && unit2 == "US fluid ounces") {

    rule = "";
  }
  else if (unit1 == "US teaspoon" && unit2 == "US tablespoon") {

    rule = "";
  }
  else if (unit1 == "US teaspoon" && unit2 == "Cubic metres") {

    rule = "";
  }
  else if (unit1 == "US teaspoon" && unit2 == "Litres") {

    rule = "";
  }
  else if (unit1 == "US teaspoon" && unit2 == "Millilitres") {

    rule = "";
  }
  else if (unit1 == "US teaspoon" && unit2 == "Gallons") {

    rule = "";
  }
  else if (unit1 == "US teaspoon" && unit2 == "Imperial quart") {

    rule = "";
  }
  else if (unit1 == "US teaspoon" && unit2 == "Imperial pint") {

    rule = "";
  }
  else if (unit1 == "US teaspoon" && unit2 == "Imperial cup") {

    rule = "";
  }
  else if (unit1 == "US teaspoon" && unit2 == "Imperial fluid ounces") {

    rule = "";
  }
  else if (unit1 == "US teaspoon" && unit2 == "Imperial tablespoon") {

    rule = "";
  }
  else if (unit1 == "US teaspoon" && unit2 == "Imperial teaspoon") {

    rule = "";
  }
  else if (unit1 == "US teaspoon" && unit2 == "Cubic foot") {

    rule = "";
  }
  else if (unit1 == "US teaspoon" && unit2 == "Cubic inch") {

    rule = "";
  }
  else if (unit1 == "Cubic metres" && unit2 == "US liquid gallon") {

    rule = "";
  }
  else if (unit1 == "Cubic metres" && unit2 == "US liquid quart") {

    rule = "";
  }
  else if (unit1 == "Cubic metres" && unit2 == "US liquid pint") {

    rule = "";
  }
  else if (unit1 == "Cubic metres" && unit2 == "US legal cup") {

    rule = "";
  }
  else if (unit1 == "Cubic metres" && unit2 == "US fluid ounces") {

    rule = "";
  }
  else if (unit1 == "Cubic metres" && unit2 == "US tablespoon") {

    rule = "";
  }
  else if (unit1 == "Cubic metres" && unit2 == "US teaspoon") {

    rule = "";
  }
  else if (unit1 == "Cubic metres" && unit2 == "Litres") {

    rule = "";
  }
  else if (unit1 == "Cubic metres" && unit2 == "Millilitres") {

    rule = "";
  }
  else if (unit1 == "Cubic metres" && unit2 == "Gallons") {

    rule = "";
  }
  else if (unit1 == "Cubic metres" && unit2 == "Imperial quart") {

    rule = "";
  }
  else if (unit1 == "Cubic metres" && unit2 == "Imperial pint") {

    rule = "";
  }
  else if (unit1 == "Cubic metres" && unit2 == "Imperial cup") {

    rule = "";
  }
  else if (unit1 == "Cubic metres" && unit2 == "Imperial fluid ounces") {

    rule = "";
  }
  else if (unit1 == "Cubic metres" && unit2 == "Imperial tablespoon") {

    rule = "";
  }
  else if (unit1 == "Cubic metres" && unit2 == "Imperial teaspoon") {

    rule = "";
  }
  else if (unit1 == "Cubic metres" && unit2 == "Cubic foot") {

    rule = "";
  }
  else if (unit1 == "Cubic metres" && unit2 == "Cubic inch") {

    rule = "";
  }
  else if (unit1 == "Litres" && unit2 == "US liquid gallon") {

    rule = "";
  }
  else if (unit1 == "Litres" && unit2 == "US liquid quart") {

    rule = "";
  }
  else if (unit1 == "Litres" && unit2 == "US liquid pint") {

    rule = "";
  }
  else if (unit1 == "Litres" && unit2 == "US legal cup") {

    rule = "";
  }
  else if (unit1 == "Litres" && unit2 == "US fluid ounces") {

    rule = "";
  }
  else if (unit1 == "Litres" && unit2 == "US tablespoon") {

    rule = "";
  }
  else if (unit1 == "Litres" && unit2 == "US teaspoon") {

    rule = "";
  }
  else if (unit1 == "Litres" && unit2 == "Cubic metres") {

    rule = "";
  }
  else if (unit1 == "Litres" && unit2 == "Millilitres") {

    rule = "";
  }
  else if (unit1 == "Litres" && unit2 == "Gallons") {

    rule = "";
  }
  else if (unit1 == "Litres" && unit2 == "Imperial quart") {

    rule = "";
  }
  else if (unit1 == "Litres" && unit2 == "Imperial pint") {

    rule = "";
  }
  else if (unit1 == "Litres" && unit2 == "Imperial cup") {

    rule = "";
  }
  else if (unit1 == "Litres" && unit2 == "Imperial fluid ounces") {

    rule = "";
  }
  else if (unit1 == "Litres" && unit2 == "Imperial tablespoon") {

    rule = "";
  }
  else if (unit1 == "Litres" && unit2 == "Imperial teaspoon") {

    rule = "";
  }
  else if (unit1 == "Litres" && unit2 == "Cubic foot") {

    rule = "";
  }
  else if (unit1 == "Litres" && unit2 == "Cubic inch") {

    rule = "";
  }
  else if (unit1 == "Millilitres" && unit2 == "US liquid gallon") {

    rule = "";
  }
  else if (unit1 == "Millilitres" && unit2 == "US liquid quart") {

    rule = "";
  }
  else if (unit1 == "Millilitres" && unit2 == "US liquid pint") {

    rule = "";
  }
  else if (unit1 == "Millilitres" && unit2 == "US legal cup") {

    rule = "";
  }
  else if (unit1 == "Millilitres" && unit2 == "US fluid ounces") {

    rule = "";
  }
  else if (unit1 == "Millilitres" && unit2 == "US tablespoon") {

    rule = "";
  }
  else if (unit1 == "Millilitres" && unit2 == "US teaspoon") {

    rule = "";
  }
  else if (unit1 == "Millilitres" && unit2 == "Cubic metres") {

    rule = "";
  }
  else if (unit1 == "Millilitres" && unit2 == "Litres") {

    rule = "";
  }
  else if (unit1 == "Millilitres" && unit2 == "Gallons") {

    rule = "";
  }
  else if (unit1 == "Millilitres" && unit2 == "Imperial quart") {

    rule = "";
  }
  else if (unit1 == "Millilitres" && unit2 == "Imperial pint") {

    rule = "";
  }
  else if (unit1 == "Millilitres" && unit2 == "Imperial cup") {

    rule = "";
  }
  else if (unit1 == "Millilitres" && unit2 == "Imperial fluid ounces") {

    rule = "";
  }
  else if (unit1 == "Millilitres" && unit2 == "Imperial tablespoon") {

    rule = "";
  }
  else if (unit1 == "Millilitres" && unit2 == "Imperial teaspoon") {

    rule = "";
  }
  else if (unit1 == "Millilitres" && unit2 == "Cubic foot") {

    rule = "";
  }
  else if (unit1 == "Millilitres" && unit2 == "Cubic inch") {

    rule = "";
  }
  else if (unit1 == "Gallons" && unit2 == "US liquid gallon") {

    rule = "";
  }
  else if (unit1 == "Gallons" && unit2 == "US liquid quart") {

    rule = "";
  }
  else if (unit1 == "Gallons" && unit2 == "US liquid pint") {

    rule = "";
  }
  else if (unit1 == "Gallons" && unit2 == "US legal cup") {

    rule = "";
  }
  else if (unit1 == "Gallons" && unit2 == "US fluid ounces") {

    rule = "";
  }
  else if (unit1 == "Gallons" && unit2 == "US tablespoon") {

    rule = "";
  }
  else if (unit1 == "Gallons" && unit2 == "US teaspoon") {

    rule = "";
  }
  else if (unit1 == "Gallons" && unit2 == "Cubic metres") {

    rule = "";
  }
  else if (unit1 == "Gallons" && unit2 == "Litres") {

    rule = "";
  }
  else if (unit1 == "Gallons" && unit2 == "Millilitres") {

    rule = "";
  }
  else if (unit1 == "Gallons" && unit2 == "Imperial quart") {

    rule = "";
  }
  else if (unit1 == "Gallons" && unit2 == "Imperial pint") {

    rule = "";
  }
  else if (unit1 == "Gallons" && unit2 == "Imperial cup") {

    rule = "";
  }
  else if (unit1 == "Gallons" && unit2 == "Imperial fluid ounces") {

    rule = "";
  }
  else if (unit1 == "Gallons" && unit2 == "Imperial tablespoon") {

    rule = "";
  }
  else if (unit1 == "Gallons" && unit2 == "Imperial teaspoon") {

    rule = "";
  }
  else if (unit1 == "Gallons" && unit2 == "Cubic foot") {

    rule = "";
  }
  else if (unit1 == "Gallons" && unit2 == "Cubic inch") {

    rule = "";
  }
  else if (unit1 == "Imperial quart" && unit2 == "US liquid gallon") {

    rule = "";
  }
  else if (unit1 == "Imperial quart" && unit2 == "US liquid quart") {

    rule = "";
  }
  else if (unit1 == "Imperial quart" && unit2 == "US liquid pint") {

    rule = "";
  }
  else if (unit1 == "Imperial quart" && unit2 == "US legal cup") {

    rule = "";
  }
  else if (unit1 == "Imperial quart" && unit2 == "US fluid ounces") {

    rule = "";
  }
  else if (unit1 == "Imperial quart" && unit2 == "US tablespoon") {

    rule = "";
  }
  else if (unit1 == "Imperial quart" && unit2 == "US teaspoon") {

    rule = "";
  }
  else if (unit1 == "Imperial quart" && unit2 == "Cubic metres") {

    rule = "";
  }
  else if (unit1 == "Imperial quart" && unit2 == "Litres") {

    rule = "";
  }
  else if (unit1 == "Imperial quart" && unit2 == "Millilitres") {

    rule = "";
  }
  else if (unit1 == "Imperial quart" && unit2 == "Gallons") {

    rule = "";
  }
  else if (unit1 == "Imperial quart" && unit2 == "Imperial pint") {

    rule = "";
  }
  else if (unit1 == "Imperial quart" && unit2 == "Imperial cup") {

    rule = "";
  }
  else if (unit1 == "Imperial quart" && unit2 == "Imperial fluid ounces") {

    rule = "";
  }
  else if (unit1 == "Imperial quart" && unit2 == "Imperial tablespoon") {

    rule = "";
  }
  else if (unit1 == "Imperial quart" && unit2 == "Imperial teaspoon") {

    rule = "";
  }
  else if (unit1 == "Imperial quart" && unit2 == "Cubic foot") {

    rule = "";
  }
  else if (unit1 == "Imperial quart" && unit2 == "Cubic inch") {

    rule = "";
  }
  else if (unit1 == "Imperial pint" && unit2 == "US liquid gallon") {

    rule = "";
  }
  else if (unit1 == "Imperial pint" && unit2 == "US liquid quart") {

    rule = "";
  }
  else if (unit1 == "Imperial pint" && unit2 == "US liquid pint") {

    rule = "";
  }
  else if (unit1 == "Imperial pint" && unit2 == "US legal cup") {

    rule = "";
  }
  else if (unit1 == "Imperial pint" && unit2 == "US fluid ounces") {

    rule = "";
  }
  else if (unit1 == "Imperial pint" && unit2 == "US tablespoon") {

    rule = "";
  }
  else if (unit1 == "Imperial pint" && unit2 == "US teaspoon") {

    rule = "";
  }
  else if (unit1 == "Imperial pint" && unit2 == "Cubic metres") {

    rule = "";
  }
  else if (unit1 == "Imperial pint" && unit2 == "Litres") {

    rule = "";
  }
  else if (unit1 == "Imperial pint" && unit2 == "Millilitres") {

    rule = "";
  }
  else if (unit1 == "Imperial pint" && unit2 == "Gallons") {

    rule = "";
  }
  else if (unit1 == "Imperial pint" && unit2 == "Imperial quart") {

    rule = "";
  }
  else if (unit1 == "Imperial pint" && unit2 == "Imperial cup") {

    rule = "";
  }
  else if (unit1 == "Imperial pint" && unit2 == "Imperial fluid ounces") {

    rule = "";
  }
  else if (unit1 == "Imperial pint" && unit2 == "Imperial tablespoon") {

    rule = "";
  }
  else if (unit1 == "Imperial pint" && unit2 == "Imperial teaspoon") {

    rule = "";
  }
  else if (unit1 == "Imperial pint" && unit2 == "Cubic foot") {

    rule = "";
  }
  else if (unit1 == "Imperial pint" && unit2 == "Cubic inch") {

    rule = "";
  }
  else if (unit1 == "Imperial cup" && unit2 == "US liquid gallon") {

    rule = "";
  }
  else if (unit1 == "Imperial cup" && unit2 == "US liquid quart") {

    rule = "";
  }
  else if (unit1 == "Imperial cup" && unit2 == "US liquid pint") {

    rule = "";
  }
  else if (unit1 == "Imperial cup" && unit2 == "US legal cup") {

    rule = "";
  }
  else if (unit1 == "Imperial cup" && unit2 == "US fluid ounces") {

    rule = "";
  }
  else if (unit1 == "Imperial cup" && unit2 == "US tablespoon") {

    rule = "";
  }
  else if (unit1 == "Imperial cup" && unit2 == "US teaspoon") {

    rule = "";
  }
  else if (unit1 == "Imperial cup" && unit2 == "Cubic metres") {

    rule = "";
  }
  else if (unit1 == "Imperial cup" && unit2 == "Litres") {

    rule = "";
  }
  else if (unit1 == "Imperial cup" && unit2 == "Millilitres") {

    rule = "";
  }
  else if (unit1 == "Imperial cup" && unit2 == "Gallons") {

    rule = "";
  }
  else if (unit1 == "Imperial cup" && unit2 == "Imperial quart") {

    rule = "";
  }
  else if (unit1 == "Imperial cup" && unit2 == "Imperial pint") {

    rule = "";
  }
  else if (unit1 == "Imperial cup" && unit2 == "Imperial fluid ounces") {

    rule = "";
  }
  else if (unit1 == "Imperial cup" && unit2 == "Imperial tablespoon") {

    rule = "";
  }
  else if (unit1 == "Imperial cup" && unit2 == "Imperial teaspoon") {

    rule = "";
  }
  else if (unit1 == "Imperial cup" && unit2 == "Cubic foot") {

    rule = "";
  }
  else if (unit1 == "Imperial cup" && unit2 == "Cubic inch") {

    rule = "";
  }
  else if (unit1 == "Imperial fluid ounces" && unit2 == "US liquid gallon") {

    rule = "";
  }
  else if (unit1 == "Imperial fluid ounces" && unit2 == "US liquid quart") {

    rule = "";
  }
  else if (unit1 == "Imperial fluid ounces" && unit2 == "US liquid pint") {

    rule = "";
  }
  else if (unit1 == "Imperial fluid ounces" && unit2 == "US legal cup") {

    rule = "";
  }
  else if (unit1 == "Imperial fluid ounces" && unit2 == "US fluid ounces") {

    rule = "";
  }
  else if (unit1 == "Imperial fluid ounces" && unit2 == "US tablespoon") {

    rule = "";
  }
  else if (unit1 == "Imperial fluid ounces" && unit2 == "US teaspoon") {

    rule = "";
  }
  else if (unit1 == "Imperial fluid ounces" && unit2 == "Cubic metres") {

    rule = "";
  }
  else if (unit1 == "Imperial fluid ounces" && unit2 == "Litres") {

    rule = "";
  }
  else if (unit1 == "Imperial fluid ounces" && unit2 == "Millilitres") {

    rule = "";
  }
  else if (unit1 == "Imperial fluid ounces" && unit2 == "Gallons") {

    rule = "";
  }
  else if (unit1 == "Imperial fluid ounces" && unit2 == "Imperial quart") {

    rule = "";
  }
  else if (unit1 == "Imperial fluid ounces" && unit2 == "Imperial pint") {

    rule = "";
  }
  else if (unit1 == "Imperial fluid ounces" && unit2 == "Imperial cup") {

    rule = "";
  }
  else if (unit1 == "Imperial fluid ounces" && unit2 == "Imperial tablespoon") {

    rule = "";
  }
  else if (unit1 == "Imperial fluid ounces" && unit2 == "Imperial teaspoon") {

    rule = "";
  }
  else if (unit1 == "Imperial fluid ounces" && unit2 == "Cubic foot") {

    rule = "";
  }
  else if (unit1 == "Imperial fluid ounces" && unit2 == "Cubic inch") {

    rule = "";
  }
  else if (unit1 == "Imperial tablespoon" && unit2 == "US liquid gallon") {

    rule = "";
  }
  else if (unit1 == "Imperial tablespoon" && unit2 == "US liquid quart") {

    rule = "";
  }
  else if (unit1 == "Imperial tablespoon" && unit2 == "US liquid pint") {

    rule = "";
  }
  else if (unit1 == "Imperial tablespoon" && unit2 == "US legal cup") {

    rule = "";
  }
  else if (unit1 == "Imperial tablespoon" && unit2 == "US fluid ounces") {

    rule = "";
  }
  else if (unit1 == "Imperial tablespoon" && unit2 == "US tablespoon") {

    rule = "";
  }
  else if (unit1 == "Imperial tablespoon" && unit2 == "US teaspoon") {

    rule = "";
  }
  else if (unit1 == "Imperial tablespoon" && unit2 == "Cubic metres") {

    rule = "";
  }
  else if (unit1 == "Imperial tablespoon" && unit2 == "Litres") {

    rule = "";
  }
  else if (unit1 == "Imperial tablespoon" && unit2 == "Millilitres") {

    rule = "";
  }
  else if (unit1 == "Imperial tablespoon" && unit2 == "Gallons") {

    rule = "";
  }
  else if (unit1 == "Imperial tablespoon" && unit2 == "Imperial quart") {

    rule = "";
  }
  else if (unit1 == "Imperial tablespoon" && unit2 == "Imperial pint") {

    rule = "";
  }
  else if (unit1 == "Imperial tablespoon" && unit2 == "Imperial cup") {

    rule = "";
  }
  else if (unit1 == "Imperial tablespoon" && unit2 == "Imperial fluid ounces") {

    rule = "";
  }
  else if (unit1 == "Imperial tablespoon" && unit2 == "Imperial teaspoon") {

    rule = "";
  }
  else if (unit1 == "Imperial tablespoon" && unit2 == "Cubic foot") {

    rule = "";
  }
  else if (unit1 == "Imperial tablespoon" && unit2 == "Cubic inch") {

    rule = "";
  }
  else if (unit1 == "Imperial teaspoon" && unit2 == "US liquid gallon") {

    rule = "";
  }
  else if (unit1 == "Imperial teaspoon" && unit2 == "US liquid quart") {

    rule = "";
  }
  else if (unit1 == "Imperial teaspoon" && unit2 == "US liquid pint") {

    rule = "";
  }
  else if (unit1 == "Imperial teaspoon" && unit2 == "US legal cup") {

    rule = "";
  }
  else if (unit1 == "Imperial teaspoon" && unit2 == "US fluid ounces") {

    rule = "";
  }
  else if (unit1 == "Imperial teaspoon" && unit2 == "US tablespoon") {

    rule = "";
  }
  else if (unit1 == "Imperial teaspoon" && unit2 == "US teaspoon") {

    rule = "";
  }
  else if (unit1 == "Imperial teaspoon" && unit2 == "Cubic metres") {

    rule = "";
  }
  else if (unit1 == "Imperial teaspoon" && unit2 == "Litres") {

    rule = "";
  }
  else if (unit1 == "Imperial teaspoon" && unit2 == "Millilitres") {

    rule = "";
  }
  else if (unit1 == "Imperial teaspoon" && unit2 == "Gallons") {

    rule = "";
  }
  else if (unit1 == "Imperial teaspoon" && unit2 == "Imperial quart") {

    rule = "";
  }
  else if (unit1 == "Imperial teaspoon" && unit2 == "Imperial pint") {

    rule = "";
  }
  else if (unit1 == "Imperial teaspoon" && unit2 == "Imperial cup") {

    rule = "";
  }
  else if (unit1 == "Imperial teaspoon" && unit2 == "Imperial fluid ounces") {

    rule = "";
  }
  else if (unit1 == "Imperial teaspoon" && unit2 == "Imperial tablespoon") {

    rule = "";
  }
  else if (unit1 == "Imperial teaspoon" && unit2 == "Cubic foot") {

    rule = "";
  }
  else if (unit1 == "Imperial teaspoon" && unit2 == "Cubic inch") {

    rule = "";
  }
  else if (unit1 == "Cubic foot" && unit2 == "US liquid gallon") {

    rule = "";
  }
  else if (unit1 == "Cubic foot" && unit2 == "US liquid quart") {

    rule = "";
  }
  else if (unit1 == "Cubic foot" && unit2 == "US liquid pint") {

    rule = "";
  }
  else if (unit1 == "Cubic foot" && unit2 == "US legal cup") {

    rule = "";
  }
  else if (unit1 == "Cubic foot" && unit2 == "US fluid ounces") {

    rule = "";
  }
  else if (unit1 == "Cubic foot" && unit2 == "US tablespoon") {

    rule = "";
  }
  else if (unit1 == "Cubic foot" && unit2 == "US teaspoon") {

    rule = "";
  }
  else if (unit1 == "Cubic foot" && unit2 == "Cubic metres") {

    rule = "";
  }
  else if (unit1 == "Cubic foot" && unit2 == "Litres") {

    rule = "";
  }
  else if (unit1 == "Cubic foot" && unit2 == "Millilitres") {

    rule = "";
  }
  else if (unit1 == "Cubic foot" && unit2 == "Gallons") {

    rule = "";
  }
  else if (unit1 == "Cubic foot" && unit2 == "Imperial quart") {

    rule = "";
  }
  else if (unit1 == "Cubic foot" && unit2 == "Imperial pint") {

    rule = "";
  }
  else if (unit1 == "Cubic foot" && unit2 == "Imperial cup") {

    rule = "";
  }
  else if (unit1 == "Cubic foot" && unit2 == "Imperial fluid ounces") {

    rule = "";
  }
  else if (unit1 == "Cubic foot" && unit2 == "Imperial tablespoon") {

    rule = "";
  }
  else if (unit1 == "Cubic foot" && unit2 == "Imperial teaspoon") {

    rule = "";
  }
  else if (unit1 == "Cubic foot" && unit2 == "Cubic inch") {

    rule = "";
  }
  else if (unit1 == "Cubic inch" && unit2 == "US liquid gallon") {

    rule = "";
  }
  else if (unit1 == "Cubic inch" && unit2 == "US liquid quart") {

    rule = "";
  }
  else if (unit1 == "Cubic inch" && unit2 == "US liquid pint") {

    rule = "";
  }
  else if (unit1 == "Cubic inch" && unit2 == "US legal cup") {

    rule = "";
  }
  else if (unit1 == "Cubic inch" && unit2 == "US fluid ounces") {

    rule = "";
  }
  else if (unit1 == "Cubic inch" && unit2 == "US tablespoon") {

    rule = "";
  }
  else if (unit1 == "Cubic inch" && unit2 == "US teaspoon") {

    rule = "";
  }
  else if (unit1 == "Cubic inch" && unit2 == "Cubic metres") {

    rule = "";
  }
  else if (unit1 == "Cubic inch" && unit2 == "Litres") {

    rule = "";
  }
  else if (unit1 == "Cubic inch" && unit2 == "Millilitres") {

    rule = "";
  }
  else if (unit1 == "Cubic inch" && unit2 == "Gallons") {

    rule = "";
  }
  else if (unit1 == "Cubic inch" && unit2 == "Imperial quart") {

    rule = "";
  }
  else if (unit1 == "Cubic inch" && unit2 == "Imperial pint") {

    rule = "";
  }
  else if (unit1 == "Cubic inch" && unit2 == "Imperial cup") {

    rule = "";
  }
  else if (unit1 == "Cubic inch" && unit2 == "Imperial fluid ounces") {

    rule = "";
  }
  else if (unit1 == "Cubic inch" && unit2 == "Imperial tablespoon") {

    rule = "";
  }
  else if (unit1 == "Cubic inch" && unit2 == "Imperial teaspoon") {

    rule = "";
  }
  else if (unit1 == "Cubic inch" && unit2 == "Cubic foot") {

    rule = "";
  }

  data = round(data, 4);

  if (input1) {
    document.getElementById('volumeInput2').value = data;
    input1 = false;
  }
  else if (input2) {
    document.getElementById('volumeInput1').value = data;
    input2 = false;
    swap();
  }
  document.getElementById('formula').innerHTML = rule;
}

function onInput1() {
  input1 = true;
  callBack();
}
function onInput2() {
  input2 = true;
  callBack();
}
