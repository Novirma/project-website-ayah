


let labelRupiah = document.getElementById("labelRupiah").innerHTML;
labelRupiah = Number(labelRupiah);

labelRupiah = labelRupiah.toLocaleString("id-ID", {style : "currency", currency : "IDR"});

document.getElementById("labelRupiah").innerHTML = labelRupiah;

console.log(labelRupiah);

let contoh = "2000";
contoh = Number(contoh);

contoh = contoh.toLocaleString("id-ID", {style : "currency", currency : "IDR"});

console.log(contoh);