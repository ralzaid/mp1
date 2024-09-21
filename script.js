function doAdd() {
    let sum = 0;
    let input1 = document.getElementById('box1').value;
    let input2 = document.getElementById('box2').value;
    let input3 = document.getElementById('box3');
    input1 = Number(input1);
    input2 = Number(input2);
    sum = input1 + input2;
    console.log(sum);
    document.getElementById('box3').value = sum;
    
    if (sum >= 0) {
        document.getElementById('box3').style.color = 'black';}
    else if (sum < 0){
            document.getElementById('box3').style.color = 'red';
            }
    }

    function doSubtract() {
    let diff = 0;
    let input1 = document.getElementById('box1').value;
    let input2 = document.getElementById('box2').value;
    let input3 = document.getElementById('box3');
    input1 = Number(input1);
    input2 = Number(input2);
    diff = input1 - input2;
    input3.value = diff;
    
    if (diff >= 0) {
        document.getElementById('box3').style.color = 'black';}
    else if (diff < 0){
            document.getElementById('box3').style.color = 'red';
            }
    }

    function doMultiply() {
    let product = 0;
    let input1 = document.getElementById('box1').value;
    let input2 = document.getElementById('box2').value;
    let input3 = document.getElementById('box3');
    input1 = Number(input1);
    input2 = Number(input2);
    product = (input1) * (input2);
    input3.value = product;
    
    if (product >= 0) {
        document.getElementById('box3').style.color = 'black';}
    else if (product < 0){
            document.getElementById('box3').style.color = 'red';
            }
    }

    function doDivide() {
    let quotient = 0;
    let input1 = document.getElementById('box1').value;
    let input2 = document.getElementById('box2').value;
    let input3 = document.getElementById('box3');
    input1 = Number(input1);
    input2 = Number(input2);
    quotient = (input1) / (input2);
    input3.value = quotient;
    
    if (quotient >= 0) {
        document.getElementById('box3').style.color = 'black';}
    else if (quotient < 0){
            document.getElementById('box3').style.color = 'red';
            }
    }

    function doPower() {
    let power;
    let input1;
    let input2;
    input1 = document.getElementById('box1').value;
    console.log(input1);
    input1 = Number(input1);
    input2 = document.getElementById('box2').value;
    console.log(input2);
    input2 = Number(input2);
    power=1;
    console.log(power);		
    for (let i = 1; i<= input2; i++) { 
        power = power * input1;
        }
    document.getElementById('box3').value=power;
    
    if (power >= 0) {
        document.getElementById('box3').style.color = 'black';}
    else if (power < 0){
            document.getElementById('box3').style.color = 'red';
            }
    }

    function doClear() {
    let sum = 0;
    let input1 = document.getElementById('box1').value='';
    let input2 = document.getElementById('box2').value='';
    let input3 = document.getElementById('box3').value='';
    }