
console.log('Calculator App');

function add(){
    const form = document.getElementById('form');
    let operandA = form['operandA'];
    let operandB = form['operandB'];
    let result = parseFloat(operandA.value) + parseFloat(operandB.value);
    if(isNaN(result)){
        result = "Insert a number, please."
    }

    document.getElementById('result').innerHTML = `Answer: ${result} `;
}