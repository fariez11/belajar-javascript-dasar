// contoh saja  ----------------------------------------------------
// Built-in Function (String) 
var nama = "Fariez Ilham";
console.log(nama.charAt(5));

// Built-in Function (Math)
var bil = Math.random();
console.log(bil);

// Function Decalaration
function jumlahDuaBilangan(a,b){        // keyword, nama function, parameter
    var total;                          // |
    total = a + b;                      //  \
                                        //   >  function body
    return total;                       //  /                      // nilai kembalian / return value
}                                       // |
// memanggil / menjalan kan function diatas 
    alert(jumlahDuaBilangan(1,2));
    alert(jumlahDuaBilangan(25,30));
    alert(jumlahDuaBilangan(1500,17.5));

// Function expression
var jumlahDuaBilangan = function(a, b){
    var total;
    total = a + b;

    return total;
}