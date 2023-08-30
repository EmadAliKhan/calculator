var inp = document.getElementById("inp");

function addVal(val) {
    const operators = ['+', '-', '*', '/'];
    const lastChar = inp.value.slice(-1);

    if (val === '%') {
        inp.value = (parseFloat(inp.value) / 100).toString();
    } else if (operators.includes(lastChar) && operators.includes(val)) {
        inp.value = inp.value.slice(0, -1) + val;
    } else {
        inp.value += val;
    }
}

function calculateVal(){
    inp.value = eval(inp.value);
}
function clearVal(){
    inp.value = " ";
}
function goBack(){
    inp.value = inp.value.slice(0,-1);
}