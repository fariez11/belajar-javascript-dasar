// global scope / window scope ----------------------------------------
    // var a = 1 ;

    // function tes(){
    //     var b = 2;      // block scope jika di panggil di luar function
    //     console.log(a); 
    // }

    // tes();
    // console.log(b);     // panggil block scope dan menghasilkna error

// name conflict ------------------------------------------------------
    // "use strict";       // agar javascript tidak otomatis membuat variable global
    var a = 1;

    function tes(){
        // name conflict;          // jadi tidak menimpa var a yang diatas
        var a = 2;
        // console.log(window.a)   // kecuali dengan ini jadi yang kita panggil var global bukan lokal
        // a = 2;                  // jika kita tanpa menggunakan var maka a tsb akan menimpa a yang ada diatasnya(yang diluar)
    }

    tes();
    console.log(a);         // var a akan menghasilkan = 1

 // contoh -------------------------------------------------------------
    var a = 1;              // variable global

    function tes(a){        // mengacu pada line 33   \
        console.log(a);     // mengacu pada line 29    > variable lokal
    }                       //                        /

    tes(a);                 // jika berisi (a) maka dia akan mengacu pada line 27 jika berisi(2) dia tidak mengacu kepada var apapun karena dia mempunyai variable sendiri
    console.log(a);         // mengacu pada line 27 karena mengambil dari variable global
