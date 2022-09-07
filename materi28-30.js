// menghitung luas kubus ----------------------------------------

    // var a = 8;
    // var b = 3;
    // var volumeA;
    // var volumeB;
    // var total;

    // volumeA = a * a * a;
    // volumeB = b * b * b;


    // total = volumeA + volumeB;

    // console.log(total);

// menggunakan function ------------------------------------------
    // function jumlahVolumeDuaKubus(a,b){          
    //     var volumeA, volumeB, total;

    //     volumeA = a * a * a;
    //     volumeB = b * b * b;

    //     total = volumeA + volumeB;

    //     return total;
    // }

    // alert(jumlahVolumeDuaKubus(8,3));
    // alert(jumlahVolumeDuaKubus(10,12));              // refactoring* di bawah

// parameter & argument --------------------------------------------

    // function tambah(a,b){
    //     return a + b;
    // }

    // var a = parseInt(prompt('Masukkan nilai 1;'));
    // var b = parseInt(prompt('Masukkan nilai 2;'));

    // // var coba = tambah(a*2,b*2);          // ini juga bisa
    // var coba = tambah(a,b);
    // console.log(coba);

// contoh2 ----------------------------------------------------------
    // function tambah(a,b){
    //     return a + b;
    // }

    // function kali(a,b){
    //     return a * b;
    // }

    // var hasil = kali(tambah(1,2), tambah(3,4));
    // console.log(hasil);

// contoh arguments -------------------------------------------------
    // function tambah(){
    //     var hasil = 0;
    //     for(var i = 0; i < arguments.length; i++){
    //         hasil += arguments[i];
    //     }
    //     return hasil
    // }

    // var coba = tambah(1,2,3,4);
    // console.log(coba);

// refactoring ------------------------------------------------------
    function jumlahVolumeDuaKubus(a, b){
        return a*a*a + b*b*b;    
    }

    alert(jumlahVolumeDuaKubus(8,3));