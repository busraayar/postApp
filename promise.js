/* const asenkronFonksiyon = function(sayi, callback) {
    const sonuc = sayi + 2;
    callback(sonuc);
};

asenkronFonksiyon(2, function (sonuc) {
   console.log(sonuc); 
   asenkronFonksiyon(4, function (sonuc) {
        console.log(sonuc); 
        asenkronFonksiyon(6, function (sonuc) {
            console.log(sonuc);
            asenkronFonksiyon(8, function (sonuc) {
                console.log(sonuc);
            });
        });
    });
}); */


const asenkronFonksiyon = (sayi) => {
    return new Promise((resolve, reject) => {
       if (sayi === 6) {
        resolve("Islemler basari ile sonuclandi!");
       } 
       else{
        reject("bir sorun var");
       }
    });
};

asenkronFonksiyon(6)
    .then((data) => {
        console.log(data);
        return 1;
    })
    .then( (data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });