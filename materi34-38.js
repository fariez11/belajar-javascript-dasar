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

    // var arr = [];
    // arr[0] = "Fariez";
    // arr[1] = "Ilham";
    // arr[2] = "Sandyas";
    // arr[6] = "Farah";
    // console.log(arr);

// 2. Menghapus isi array 
    // arr = ['Fariez', 'Ilham', 'Alvian', 'Syach'];
    // arr[1] = undefined;
    // console.log(arr);

// 3. Menampilkan isi array 
    // for(i = 0; i < arr.length; i++){
    //     console.log('mahasiswa ke-' + (i+1) + ' adalah ' + arr[i]);
    // }

// Method pada array ----------------------------------------------
// 1.join \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    // var arr1  = ['Fariez', 'Ilham', 'Alvian'];
    // console.log(arr1.join(' - ') + '  ~> join');
    
// 2.push & pop \\\\\\\\\\\\\\\\\\\\\\\\\
    // arr1.push('Syach');                     // menambah 1 atau lebih di akhir
    // arr1.pop();                             // menghapus 1 per 1  di akhir
    // console.log(arr1.join(' - ') + '  ~> pop');

// 3.unshift & shift \\\\\\\\\\\\\\\\\\\\
    // arr1.unshift('Fariez','Adnan');             // menambah 1 atau lebih di awal
    // arr1.shift();                               // menghapus 1 per 1  di awal  
    // console.log(arr1.join(' - ') + '  ~> unshift');

// 4.splice \\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)       // Rumus
    // arr1.splice(2,0, 'Sheren','Putri');
    // console.log(arr1.join(' - ') + '  ~> splice1');
    // arr1.splice(1,2, 'Sheren','Putri');
    // console.log(arr1.join(' - ') + '  ~> splice2');

// 5.slice \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// slice(awal, akhir);                                                      // Rumus
    // var arr2 = arr1.slice(1,3);
    // console.log(arr2.join(' - ')); 
    
// 6.foreach \\\\\\\\\\\\\\\\\\\\\\\\\\\\
    // var angka = [1,2,3,4,5,6,7,8];
    // var nama  = ['fariez','ilham','alvian'];
    // for(var i = 0; i < angka; i++){
    //     console.log(angka[1]);
    // }

    // angka.forEach(function(e){                   \
    //     console.log(e);                           > jika menggunakan function expression
    // })                                           /

    // var cetak = function(e){
    //     console.log(e);
    // }
    // angka.forEach(cetak);

    // nama.forEach(function(e, i){
    //     console.log('Mahasiswa ke-'+ i + ' adalah : '+ e);
    // })

// 7.map \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    // var angka2 = [1,2,5,3,6,8,4];
    // var angka3 = angka2.map(function(e){
    //     return e * 2;
    // });
    // console.log(angka3.join('-'));

// 8.sort \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    var angka = [1,2,10,5,20,3,6,8,4];
    // angka.sort(function(a,b){
    //     return a-b;
    // });
    // console.log(angka.join('-'));

// 9.filter \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    var angka2 = angka.filter(function(x){
        return x > 5;                       // kelebihan filter yang menampilkan semua bilangan yang lebih dari 5
    });
    console.log(angka2.join(','));          // dan menampilkannya lagi dalam bentuk array
// 10.find \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    var angka2 = angka.find(function(x){
        return x > 5;                       // hanya menampilkan 1 bilangan yang lebih dari 5
    });
    console.log(angka2);                    // dan tidak bisa menampilkan dengan array
