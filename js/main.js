function myFunction(){
    
    var z = parseInt(document.getElementById("fNumber1").value);
    
    var y = parseInt(document.getElementById("fNumber2").value);
    
    var x = z + y;

    if (x % 2 === 0) {

        document.getElementById("textMsg").innerHTML="This number is even";
        document.getElementById("outPut").innerHTML=x;

    } else {

        document.getElementById("textMsg").innerHTML="This number is an odd number";
        document.getElementById("outPut").innerHTML=x;

    }
    
}