function ganjil(input) {
    for (var i = 1; i <= input; i++) {
        {
            if (Number.isInteger(input)) {
                if(i % 2 == 1){
                    console.log(i);
                }
            } else {
                console.log('Input must be of integer')
            }
        }
        
    }
}