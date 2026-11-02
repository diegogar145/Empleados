let informacionEmpleado = [];

function Empleados(nombre, apellido, cargo, edad, estatura, hobby){
    this.nombre = nombre;
    this.apellido = apellido;
    this.cargo = cargo;
    this.edad = edad;
    this.estatura = estatura;
    this.hobby = hobby;
    this.saludo = function(){
        console.log(`Hola soy ${nombre}`)
    }
}

function guardar(){
    informacionEmpleado.push(["Nombre: " + document.getElementById("nombre").value, "Apellido : " + document.getElementById("apellido").value, "Cargo:  " + document.getElementById("cargo").value, "Edad: " + document.getElementById("edad").value, "Estatura : " + document.getElementById("estatura").value + "cm", "Hobby: " + document.getElementById("hobby").value]);
    document.getElementById("formulario").reset();
}

function mostrar(){
    alert(`Datos del empleado: \n ${informacionEmpleado.join("\n")}`);
}