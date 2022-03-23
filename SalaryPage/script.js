let btnClear = document.querySelector('button');
let inputs = document.querySelectorAll('input');
let gol=document.getElementById("golongan");
let nik=document.getElementById("nik");

btnClear.addEventListener('click',()=>{
    inputs.forEach(input=>input.value='')
    gol.selectedIndex=0;
});

function golongan(){
     switch (gol.selectedIndex) {
         case 0:
            document.getElementById("gapok").value="";     
             break;
         case 1:
             document.getElementById("gapok").value="6000000";
             break;
         case 2:
             document.getElementById("gapok").value="5000000";
             break;
         case 3:
             document.getElementById("gapok").value="4250000";
             break;
         default:
            document.getElementById("gapok").value="3500000";
             break;
     }
}

function hitung(){

    var gapok = parseInt(document.getElementById('gapok').value);
    var tunjangan = parseInt(document.getElementById('tunjangan').value);
    var potong = parseInt(document.getElementById('potong').value);

    if(document.getElementById('tunjangan').value ==''){
        document.getElementById('tunjangan').value="0";
    }
    if(document.getElementById('potong').value ==''){
        document.getElementById('potong').value="0";
    }

    else{
    parseInt(document.getElementById('total').value = (gapok+tunjangan)-potong);
    }
}