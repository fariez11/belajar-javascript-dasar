// array -----------------------------------------------------
    var binatang = ['Kucing', 'Kelinci','Monyet','Panda','Koala','Sapi'];
    // atau
    var binatang = [];
        binatang = ['Kucing', 'Kelinci','Monyet','Panda','Koala','Sapi'];
    
    console.log(binatang[4]);
    console.log(typeof(binatang));                              // maka akan selalu keluar object
    console.log(binatang.length);

    var myArr = ['teks',2,false];
    var myFunc = function(){
        alert('hello world');
    }
    var myArr2 = ['teks',2,false,myFunc];
    var myArr3 = ['teks',2,false,myFunc, [3,4,5]];              // array multidimensi / array bersarang
        console.log(myArr3[4][1]);                              // untuk memanggil angka 4 yang di line 16