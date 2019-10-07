function myFunction(){
    
    var fNum = parseInt(document.getElementById("fNumber1").value);
    
    var sNum = parseInt(document.getElementById("fNumber2").value);

    var tNum = parseInt(document.getElementById("fNumber3").value);


    
    var x = fNum + sNum + tNum;

    if (x % 2 === 0) {

        document.getElementById("textMsg").innerHTML="This number is even";
        document.getElementById("outPut").innerHTML=x;

    } else {

        document.getElementById("textMsg").innerHTML="This number is an odd number";
        document.getElementById("outPut").innerHTML=x;

    }
}