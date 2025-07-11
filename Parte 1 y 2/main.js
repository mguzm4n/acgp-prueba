// Parte 1
function deleteDuplicatesAndSrt(arr) {
    var unique = new Set(arr);
    var sorted = Array
        .from(unique)
        .sort();
    return sorted;
}
;
console.log(deleteDuplicatesAndSrt([4, 2, 7, 2, 4, 9, 1]));
// Parte 2
// Implementación de cola que mantiene un registro del valor mínimo
// El valor mín. por defecto es Infinity ya que cualquier valor es menor a este
// Si el valor a desencolar es el valor mínimo, se busca si existe
// aún en la cola. Si no existe, entonces se resetea el mínimo al valor
// por defecto (Infinity).
var ColaMinimo = /** @class */ (function () {
    function ColaMinimo() {
        this.data = [];
        this.min = Infinity;
    }
    ColaMinimo.prototype.encolar = function (valor) {
        if (valor < this.min) {
            this.min = valor;
        }
        this.data.push(valor);
    };
    ColaMinimo.prototype.desencolar = function () {
        var item = this.data.shift();
        if (!item)
            throw new Error("cola vacía");
        if (item === this.min) {
            var found = false;
            for (var i = 0; i < this.data.length; i++) {
                if (this.data[i] === this.min) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                this.min = Infinity;
            }
        }
        return item;
    };
    ColaMinimo.prototype.minimo = function () {
        return this.min;
    };
    return ColaMinimo;
}());
var q = new ColaMinimo();
q.encolar(10); // [10]
q.encolar(5); // [10, 5]
q.desencolar(); // [5]
q.encolar(4);
q.encolar(8);
q.encolar(4); // [5, 4, 8, 4]
console.log(q.data, q.minimo());
