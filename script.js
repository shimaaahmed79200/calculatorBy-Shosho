function backspace(){
    let exp= document.form1.textview.value;
    let newExp = exp.substring(0, exp.length -1);
    document.form1.textview.value = newExp;
}
function insert(num){
    document.form1.textview.value = document.form1.textview.value + num;
}
function equal(){
    let exp = document.form1.textview.value;
    if(exp){
        document.form1.textview.value = eval(exp);
    }
    
}