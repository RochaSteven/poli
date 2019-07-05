function verificarPaquidermo(valor){
    let val = valor.toString()
    let result = '';
    while (true) {
        result += (val%10).toString()
        val = (parseInt(val/10)).toString()
        if (parseInt(val) === 0) {
            break
    }
}
    return (valor == result)
}


function multiplicarValores(){
    multiplicators = []
    mostPaqui = 0
    initial = 100
    second = 100
    while(true){
    second = 100
    if (initial>=1000) {
        break
        }
        while(true) {
            if (second>=1000) {
               break
            }
            if (verificarPaquidermo(initial * second)){
                if ((initial*second) > mostPaqui) {
                    mostPaqui = initial*second
                    multiplicators = [initial, second]
                } 
            }
            second += 1
            
        }
        initial += 1
    }
    return {mostPaqui, multiplicators}
    
}
resultado =  multiplicarValores()
console.log('El paquidermo maximo es: ', resultado['mostPaqui'], 'de la multiplicacion entre: ', resultado['multiplicators'][0], 'x', resultado['multiplicators'][1])
