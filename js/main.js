//Enter action for sum output

function myFunction(){

    //Set variables

    //Collect input values
    
    var fNum = parseInt(document.getElementById("fNumber1").value);
    
    var sNum = parseInt(document.getElementById("fNumber2").value);

    var tNum = parseInt(document.getElementById("fNumber3").value);

    //Result variables

    var textMsg = document.getElementById("textMsg");

    var outPut = document.getElementById("outPut");

    //Mathmatics variable

    var x = fNum + sNum + tNum;

    //Show sum result and whether it is odd or even

    if ( isNaN(x)) {

        textMsg.innerHTML="You must only use numbers";
        outPut.innerHTML=""; 

    } else if (x % 2 === 0) {

        //Even number output

        textMsg.innerHTML="This number is even";
        outPut.innerHTML=x;

    } else {

        //Odd number output

        textMsg.innerHTML="This number is odd";
        outPut.innerHTML=x;
 
    }
}

// Reset button action

function myReset(){

    var resultMsg = "Result Here!";

    // Reset three input values to zero

    document.getElementById("fNumber1").value = "";
    document.getElementById("fNumber2").value = "";
    document.getElementById("fNumber3").value = "";

    // Reset result and odd or even message

    textMsg.innerHTML = "";
    outPut.innerHTML= resultMsg;

}
