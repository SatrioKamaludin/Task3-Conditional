function genap(input) {
    for (var i = 1; i <= input; i++) {
        {
            if (Number.isInteger(input)) {
                if(i % 2 == 0){
                    console.log(i);
                }
            } else {
                console.log('Input must be of integer')
            }
        }
        
    }
}