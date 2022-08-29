// control flow ------------------------------
var angka = prompt('masukkan angka :');

if(angka % 2 === 0){
    alert(angka + 'adalah bilangan GENAP');
}else{
    alert(angka + 'adalah bilangan GANJIL');
}

// while -------------------------------------
// nilai awal                                 // Rumus ----
// while(kondisi terminasi){
//     aksi

//     increment / decrement
// }

var ulang = true;
while(ulang){   
    console.log('hello world');
    ulang = confirm('lagi?');
}

var nilaiAwal = 1;
while(nilaiAwal <= 5){
    console.log('Hello World! ' + nilaiAwal + 'x');
    nilaiAwal++ ;
}


