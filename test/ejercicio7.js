/**
 * 7) Crear un modulo .js que contenga una variable llamada base,
 * cuyo valor es el número 2 y tres funciones, 
 * las cual va a exportar cada vez que se requiera el archivo 
 * llamadas multiplicar , cambiarBase y consultarBase. 
 * La función multiplicar toma un valor como input de tipo Number o String
 *  y lo multiplica por el valor de la variable base. 
 * La función cambiarBase modifica el valor de la variable base 
 * el cual se mantiene para las próximas ejecuciones y consultarBase 
 * retorna el valor actual de la variable base
 */

const myModule = {
    base : 2,
    multiplicar(number) { 
        return number * this.base 
    },
    cambiarBase(newBase) {
        this.base = newBase
    },
    consultarBase() {
        return this.base
    }
}

 module.exports = myModule