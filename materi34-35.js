// array -------------------------------------------------------------------------------------------------
    // var binatang = ['Kucing', 'Kelinci','Monyet','Panda','Koala','Sapi'];
    // // atau
    // var binatang = [];
    //     binatang = ['Kucing', 'Kelinci','Monyet','Panda','Koala','Sapi'];
    
    // console.log(binatang[4]);
    // console.log(typeof(binatang));                              // maka akan selalu keluar object
    // console.log(binatang.length);

    // var myArr = ['teks',2,false];
    // var myFunc = function(){
    //     alert('hello world');
    // }
    // var myArr2 = ['teks',2,false,myFunc];
    // var myArr3 = ['teks',2,false,myFunc, [3,4,5]];              // array multidimensi / array bersarang
    //     console.log(myArr3[4][1]);                              // untuk memanggil angka 4 yang di line 16
    
// manipulasi array --------------------------------------------------------------------------------------
// 1. Menambah isi array
    // var arr =  ["a",1,true];
    // console.log(arr); 
    // ---------------------------

    var arr = [];
    // arr[0] = "Fariez";
    // arr[1] = "Ilham";
    // arr[2] = "Sandyas";
    // arr[6] = "Farah";
    // console.log(arr);

// 2. Menghapus isi array 
    arr = ['Fariez', 'Ilham', 'Alvian', 'Syach'];
    arr[1] = undefined;
    console.log(arr);

// 3. Menampilkan isi array 
    for(i = 0; i < arr.length; i++){
        console.log('mahasiswa ke-' + (i+1) + ' adalah ' + arr[i]);
    }

// Method pada array ----------------------------------------------
// 1.join
    var arr1  = ['Fariez', 'Ilham', 'Alvian'];
    console.log(arr1.join(' - '));
// 2.push & pop
    // arr1.push('Syach');                     // menambah 1 atau lebih di akhir
    arr1.pop();                                // menghapus 1 per 1  di akhir
    console.log(arr1.join(' - '));
// 3.unshift & shift
    arr.unshift('Fariez','Adnan');             // menambah 1 atau lebih di awal
    arr1.shif();                               // menghapus 1 per 1  di awal  
    console.log(arr.join(' - '));