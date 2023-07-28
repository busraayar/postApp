const fs = require('fs');

//Dosya oluştur ve içerisine yazdır.
fs.writeFile('employees.json', '{"name": "Busra", "salary": 7000}', 'utf8', (err)=> {
    if(err) console.log(err);
    else console.log('Dosya oluşturuldu');
});

// Veriyi oku
fs.readFile('employees.json', 'utf8', (err,data)=> {
    if(err) console.log(err);
    else console.log(data);
});

// Veriyi güncelle
fs.appendFile('employees.json', '\n{"name": "Gizem", "salary": 5000}', 'utf8', (err,data)=> {
    if(err) console.log(err);
    console.log(data);
    console.log('Güncelleme tamamlandı');

});

// Dosyayı sil
fs.unlink('employees.json', (err)=> {
    if(err) console.log(err);
    console.log('Dosya silindi');
});