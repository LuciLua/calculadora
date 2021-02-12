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


document.querySelector('.out').addEventListener('click', function(){
    function mk(length){
            var res = '';
            var ch = '0123456789';
            var contCh = ch.length;
            
            for (var i = 0; i < length; i++){
                res += ch.charAt(Math.floor(Math.random() * contCh));
                  }
    
            return res;
                }
        document.formu.v1.value = v1;
        var v1 = document.formu.v1.value = mk(2);
        
        document.formu.v2.value = v2;
        var v2 = document.formu.v2.value = mk(2);
        });