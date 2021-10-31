var bilangan1;
var bilangan2;
var hasil;
var operator;
var opr_seleksi;
var tombol = document.querySelector('.box');
var output = document.querySelector('.output');



// cara pertama
// function btn(angka) {
//     if(output.value == "0"){
//         output.value = angka;
//     }else {
//         output.value += angka;
//     }
//     document.querySelector('.output').value = output.value;

// }

// function clr(){
//     opr_seleksi = false;
//     bilangan1 = 0;
//     bilangan2=0;
//     output.value = "";
// }

// function koma(){
//     if(output.value.includes(".") == false){
//         output.value += ".";
//     }
//     document.querySelector('.output').value = output.value;
// }

// function del(){
//     output.value = output.value.slice("0", -1);
// }

// function btn_opr(opr) {
//     bilangan1 = parseFloat(output.value);
//     operator = opr;
//     opr_seleksi = true;
//     document.querySelector('.output').value = 0;
// }


// function hitung(){
//     if(opr_seleksi == true){
//         bilangan2 = parseFloat(output.value);
//         switch(operator){
//             case "*":
//                 hasil = bilangan1 * bilangan2;
//                 output.value = hasil;
//                 break;
//             case "/":
//                 hasil = bilangan1 / bilangan2;
//                 output.value = hasil;
//                 break;
//             case "+":
//                 hasil = bilangan1 + bilangan2;
//                 output.value = hasil;
//                 break;
//             case "-":
//                 hasil = bilangan1 - bilangan2;
//                 output.value = hasil;
//                 break;
//         }

//         bilangan1=0;
//         bilangan2=0;
//         opr_seleksi = false;
//         hasil = 0;
//     }
// }


//  cara kedua

tombol.addEventListener("click", function(data){
    var klik = data.target;
    var isiKlik = klik.innerText;

    if(isiKlik == 'C'){
        output.value = "";
    }else if(isiKlik == 'Del'){
        output.value = output.value.slice("0", -1);
    }else if(isiKlik == '='){
        output.value = eval(output.value);
    }else {
        output.value += isiKlik;
    }
})