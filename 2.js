function grade(angka) {
    if (90 <= angka && angka <= 100){
        console.log(`Nilai anda adalah A`)
    }
    else if (75 <= angka && angka <= 89){
        console.log(`Nilai anda adalah B`)
    }
    else if (60 <= angka && angka <= 74){
        console.log(`Nilai anda adalah C`)
    }
    else if (50 <= angka && angka <= 59){
        console.log(`Nilai anda adalah D`)
    }
    else if (angka < 50){
        console.log(`Nilai anda adalah E`)
    }
    else if (angka > 100){
        console.log(`overvalue`)
    }
    else if (angka < 0){
        console.log(`Undervalue`)
    }
    else {
        console.log(`Incorrect input`)
    }
}