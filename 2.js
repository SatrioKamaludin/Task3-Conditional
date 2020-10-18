function grade(angka) {
    if (angka >= 90 && angka <= 100){
        console.log(`Nilai anda adalah A`)
    }
    else if (angka >= 75 && angka <= 89){
        console.log(`Nilai anda adalah B`)
    }
    else if (angka >= 60 && angka <= 74){
        console.log(`Nilai anda adalah C`)
    }
    else if (angka >= 50 && angka <= 59){
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