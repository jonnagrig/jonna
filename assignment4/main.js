
// translating words binary and changing font color
$("#heading").mouseover(function(){
  $(this).html("01011010 01100101 01110010 01101111 01100101 01110011 00100000 01100001 01101110 01100100 00100000 01101111 01101110 01100101 01110011 00101100 00100000 01010011 01100001 01100100 01101001 01100101 00100000 01010000 01101100 01100001 01101110 01110100");
  $(this).css({"color": "white"});
});
$("#heading").mouseout(function(){
  $(this).html("Zeroes and Ones, Sadie Plant");
  $(this).css({"color": "black"});
});
$("#sub").mouseover(function(){
  $(this).html("01110100 01100101 01101110 01110011 01101001 01101111 01101110 01110011");
  $(this).css({"color": "white"});
});
$("#sub").mouseout(function(){
  $(this).html("tensions");
  $(this).css({"color": "black"});
});
$("#quote").mouseover(function(){
  $(this).html("00100010 01000010 01100101 01100110 01101111 01110010 01100101 00100000 01111001 01101111 01110101 00100000 01110010 01110101 01101110 00100000 01101111 01110101 01110100 00100000 01110100 01101000 01100101 00100000 01100100 01101111 01101111 01110010 00101100 00100000 01100011 01101111 01101110 01110011 01101001 01100100 01100101 01110010 00100000 01110100 01110111 01101111 00100000 01110100 01101000 01101001 01101110 01100111 01110011 00111010 00100000 01110100 01101000 01100101 00100000 01100110 01110101 01110100 01110101 01110010 01100101 00100000 01101001 01110011 00100000 01100001 01101100 01110010 01100101 01100001 01100100 01111001 00100000 01110011 01100101 01110100 00101100 00100000 01101111 01101110 01101100 01111001 00100000 01110100 01101000 01100101 00100000 01110000 01100001 01110011 01110100 00100000 01100011 01100001 01101110 00100000 01100010 01100101 00100000 01100011 01101000 01100001 01101110 01100111 01100101 01100100 00101100 00100000 01100001 01101110 01100100 00100000 01101001 01100110 00100000 01101001 01110100 00100000 01110111 01100001 01110011 00100000 01110111 01101111 01110010 01110100 01101000 00100000 01100110 01101111 01110010 01100111 01100101 01110100 01110100 01101001 01101110 01100111 00101100 00100000 01101001 01110100 00100111 01110011 00100000 01101110 01101111 01110100 00100000 01110111 01101111 01110010 01110100 01101000 00100000 01110010 01100101 01101101 01100101 01101101 01100010 01100101 01110010 01101001 01101110 01100111 00100010 00001101 00001010 01010000 01100001 01110100 00100000 01000011 01100001 01100100 01101001 01100111 01100001 01101110 00101100 00100000 01000110 01101111 01101111 01101100 01110011");
  $(this).css({"font-size": "13px"});
  $(this).css({"color": "white"});
});
$("#quote").mouseout(function(){
  $(this).html("Before you run out the door, consider two things: the future is already set, only the past can be changed, and if it was worth forgetting, it's not worth remembering -Pat Cadigan, Fools");
  $(this).css({"font-size": "16px"});
  $(this).css({"font-weight": "bold"});
  $(this).css({"color": "black"});
});


// increasing font paragraph font sixe on hover
$("p").mouseover(function(){
  $(this).css({"font-size": "22px"});
});
$("p").mouseout(function(){
  $(this).css({"font-size": "16px"});
});


// changing background colors on click
$("#heading").click(function(){
  $("body").css("background-image", "url('binary.png')");
});

$("#sub").click(function(){
  $("#firstpara").css({"background-color": "#0aff54"});
});

$("#firstpara").click(function(){
  $("#heading").css({"background-color": "#ff05cd"});
});

$("#secondpara").click(function(){
  $("#fourthpara").css({"background-color": "#b62eff"});
  $("#quote").css({"background-color": "#00ffff"});
});

$("#thirdpara").click(function(){
  $("#thirdpara").css({"background-color": "#ffa83d"});
});

$("#fourthpara").click(function(){
  $("#sub").css({"background-color": "#3da8ff"});
});

$("#quote").click(function(){
  $("#secondpara").css({"background-color": "#e8eb34"});
});


// making elements monospace on hover
$("p, h1, h2, blockquote").mouseover(function(){
  $(this).css({"font-family": "monospace"});
});
$("p, h1, h2, blockquote").mouseout(function(){
  $(this).css({"font-family": "times"});
});
