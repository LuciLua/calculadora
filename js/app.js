function cal(){
    var v1 = document.formu.v1.value;
    var v2 = document.formu.v2.value;
    var v3 = document.formu.v3.value;

    var v3 = parseInt(v1) + parseInt(v2);

    document.formu.v1.value = v1;
    document.formu.v2.value = v2;
    document.formu.v3.value = v3;
}

function cal2(){
    var v1 = document.formu.v1.value;
    var v2 = document.formu.v2.value;
    var v3 = document.formu.v3.value;

    var v3 = parseInt(v1) - parseInt(v2);

    document.formu.v1.value = v1;
    document.formu.v2.value = v2;
    document.formu.v3.value = v3;
}

function cal3(){
    var v1 = document.formu.v1.value;
    var v2 = document.formu.v2.value;
    var v3 = document.formu.v3.value;

    var v3 = parseInt(v1) * parseInt(v2);

    document.formu.v1.value = v1;
    document.formu.v2.value = v2;
    document.formu.v3.value = v3;
}

function reset(){
    document.formu.reset();
}