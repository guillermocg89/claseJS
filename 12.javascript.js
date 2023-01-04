// CREAR UNA CLASE
class miClase {
    constructor(primero, segundo){
        this.uno = primero
        this.dos = segundo
        this.tres = 'hola a todos! ';
    };
    mimetodoUno(){
        return this.uno;
    };
    miMetodoDos(parametroUno, parametroDos){
        document.write(
            'el parametro UNO es: ' + parametroUno +
            '<br> el parametro DOS es: ' + parametroDos
        );
    };
}; 

class miClaseDos extends miClase{
    constructor(uno, dos, cuarto){
        super (uno, dos)
        this.cuatro = cuarto;
    }
};

var objetoTres = new miClaseDos('juan ', 'gonzales ', 55);
document.write(   objetoTres.uno, objetoTres.dos, objetoTres.cuatro   )

   /* //CREAR UN OBJETO - INSTANCIAR
    var objetoUno = new miClase('Aldo daniel', 55555);

    // RECUPERAR DATOS
    objetoUno.miMetodoDos('Juan Guillermo', 1010101010); */