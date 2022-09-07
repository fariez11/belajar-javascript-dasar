// contoh rekursif ----------------------------------------------------
    function tampilAngka(n){              
        console.log(n);
        return tampilAngka(n-1);
    }

    tampilAngka(10);                // yang menghasilkan looping tidak berakhir(infinite loop) dan menghasilkan error
                                    // RangeError : Maximum call stack sizeexceeded 

// contoh memakai base case -------------------------------------------
    function cetakAngka(n){
        if( n === 0){                   // \
            return;                     //  > base case
        }                               // /
        // if( n === 0) return;         // pake ini juga bisa
        console.log(n);
        cetakAngka(n-1); 
    }

    cetakAngka(10);

// contoh (faktorial) --------------------------------------------------
    // 5! = 5 * 4 * 3 * 2 * 1
    
    // jika pake for ------------------- 
        function faktorial(n){
            var hasil = 1;
            for(var i = n; i > 0; i--){
                hasil *= i;
            }
            return hasil
        }
    
    // jika pake rekursif --------------
        function faktorial(n){
            if( n === 0) return 1;
            return n * faktorial(n-1);
        }

    // yang sama-sama menghasilkan: 
    
    // faktorial(5) 
    // 5 * faktorial(4)
    // 5 * (4 * faktorial(3))
    // 5 * (4 * (3 * faktorial(2)))
    // 5 * (4 * (3 * (2 * faktorial(1))))
    // 5 * (4 * (3 * (2 * 1)))
    // 5 * (4 * (3 * 2))
    // 5 * (4 * 6)
    // 5 * 24
    // = 120
