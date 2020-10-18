// var hari = prompt("Hari ini : ");

// if (hari = `minggu`){
//     alert(`senin`);
// } else if (hari = `senin`){
//     alert(`selasa`);
// } else if (hari = `selasa`){
//     alert(`rabu`);
// } else if (hari = `rabu`){
//     alert(`kamis`);
// } else if (hari = `kamis`){
//     alert(`jumat`);
// } else if (hari = `jumat`){
//     alert(`sabtu`);
// } else if (hari = `sabtu`){
//     alert(`minggu`);
// } else if (hari = `minggu`){
//     alert(`senin`);
// } else {
//     alert(`input salah`);
// }  doesn't work for some reason

function hari(besok){
    switch (besok.toLowerCase())
    {
        case `minggu`: console.log(`besok adalah hari senin`);
        break;
        case `senin`: console.log(`besok adalah hari selasa`);
        break;
        case `selasa`: console.log(`besok adalah hari rabu`);
        break;
        case `rabu`: console.log(`besok adalah hari kamis`);
        break;
        case `kamis`: console.log(`besok adalah hari jumat`);
        break;
        case `jumat`: console.log(`besok adalah hari sabtu`);
        break;
        case `sabtu`: console.log(`besok adalah hari minggu`);
        break;
        default: console.log(`input salah`);
        break;
    }
}

//how to run: hari('hari sekarang');