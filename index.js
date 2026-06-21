// Registro de soluciones (Códigos de C++)
    const solucionesCplusplus = {
        ejercicio1: {
            titulo: "1. Sumar dos números enteros",
            codigo: `#include <iostream>
using namespace std;

int main() {
    int num1, num2, suma;
    cout << "Ingrese primer número: ";
    cin >> num1;
    cout << "Ingrese segundo número: ";
    cin >> num2;
    suma = num1 + num2;
    cout << "La suma es: " << suma << endl;
    return 0;
}`
        },
       // ¡AQUÍ AGREGAMOS EL SEGUNDO EJERCICIO! (No olvides la coma arriba)
        ejercicio2: {
            titulo: "2. Calcular el área de un cuadrado",
            codigo: `#include <iostream>
using namespace std;

int main() {
    float lado, area;
    cout << "Ingrese el valor del lado del cuadrado: ";
    cin >> lado;
    area = lado * lado;
    cout << "El área del cuadrado es: " << area << endl;
    return 0;
}`
        },ejercicio3: {
            titulo: "3. Convertir minutos a horas",
            codigo: `#include <iostream>
using namespace std;

int main() {
    float minutos, horas;
    cout << "Ingrese la cantidad de minutos: ";
    cin >> minutos;
    horas = minutos / 60;
    cout << minutos << " minutos equivalen a: " << horas << " horas" << endl;
    return 0;
}`
        },// ¡AQUÍ AGREGAMOS EL CUARTO EJERCICIO!
        ejercicio4: {
            titulo: "4. Promedio de 3 notas",
            codigo: `#include <iostream>
using namespace std;

int main() {
    float nota1, nota2, nota3, promedio;
    cout << "Ingrese la primera nota: ";
    cin >> nota1;
    cout << "Ingrese la segunda nota: ";
    cin >> nota2;
    cout << "Ingrese la tercera nota: ";
    cin >> nota3;
    promedio = (nota1 + nota2 + nota3) / 3;
    cout << "El promedio final es: " << promedio << endl;
    return 0;
}`
        },
        ejercicio5: {
            titulo: "5. Calcular precio final con IVA (16%)",
            codigo: `#include <iostream>
using namespace std;

int main() {
    float precioBase, iva, precioFinal;
    cout << "Ingrese el precio base del producto: ";
    cin >> precioBase;
    iva = precioBase * 0.16;
    precioFinal = precioBase + iva;
    cout << "El IVA (16%) es: " << iva << endl;
    cout << "El precio final a pagar es: " << precioFinal << endl;
    return 0;
}`
        },ejercicio6: {
            titulo: "6. Convertir dólares (USD) a bolívares (VES)",
            codigo: `#include <iostream>
using namespace std;

int main() {
    float dolares, tasaCambio, bolivares;
    cout << "Ingrese la cantidad en dolares (USD): ";
    cin >> dolares;
    cout << "Ingrese la tasa de cambio actual: ";
    cin >> tasaCambio;
    bolivares = dolares * tasaCambio;
    cout << dolares << " USD equivalen a: " << bolivares << " VES" << endl;
    return 0;
}`
        },ejercicio7: {
            titulo: "7. Calcular el área de un triángulo",
            codigo: `#include <iostream>
using namespace std;

int main() {
    float base, altura, area;
    cout << "Ingrese la base del triangulo: ";
    cin >> base;
    cout << "Ingrese la altura del triangulo: ";
    cin >> altura;
    area = (base * altura) / 2;
    cout << "El área del triángulo es: " << area << endl;
    return 0;
}`
        },ejercicio8: {
            titulo: "8. Determinar si un número es Par o Impar",
            codigo: `#include <iostream>
using namespace std;

int main() {
    int numero;
    cout << "Ingrese un número: ";
    cin >> numero;
    if (numero % 2 == 0) {
        cout << "El número es PAR" << endl;
    } else {
        cout << "El número es IMPAR" << endl;
    }
    return 0;
}`
        }, // <--- REVISA QUE ESTA COMA ESTÉ AQUÍ
        
        // ¡AQUÍ AGREGAMOS EL NOVENO EJERCICIO!
        ejercicio9: {
            titulo: "9. Determinar el mayor de dos números",
            codigo: `#include <iostream>
using namespace std;

int main() {
    int num1, num2;
    cout << "Ingrese el primer número: ";
    cin >> num1;
    cout << "Ingrese el segundo número: ";
    cin >> num2;
    
    if (num1 > num2) {
        cout << "El número mayor es: " << num1 << endl;
    } else if (num2 > num1) {
        cout << "El número mayor es: " << num2 << endl;
    } else {
        cout << "Ambos números son iguales" << endl;
    }
    return 0;
}`
        },ejercicio10: {
            titulo: "10. Verificar si es Mayor de Edad",
            codigo: `#include <iostream>
using namespace std;

int main() {
    int edad;
    cout << "Ingrese su edad actual: ";
    cin >> edad;
    
    if (edad >= 18) {
        cout << "Usted es MAYOR de edad." << endl;
        cout << "Tiene acceso permitido." << endl;
    } else {
        cout << "Usted es MENOR de edad." << endl;
        cout << "Acceso denegado." << endl;
    }
    return 0;
}`
        },ejercicio11: {
            titulo: "11. Número Positivo, Negativo o Cero",
            codigo: `#include <iostream>
using namespace std;

int main() {
    int numero;
    cout << "Ingrese un número: ";
    cin >> numero;
    
    if (numero > 0) {
        cout << "El número es POSITIVO." << endl;
    } else if (numero < 0) {
        cout << "El número es NEGATIVO." << endl;
    } else {
        cout << "El número es CERO." << endl;
    }
    return 0;
}`
        },ejercicio12: {
            titulo: "12. Calcular Descuento por Compra",
            codigo: `#include <iostream>
using namespace std;

int main() {
    float compra, descuento, total;
    cout << "Monto de la compra ($): ";
    cin >> compra;
    
    if (compra > 100) {
        descuento = compra * 0.10;
        total = compra - descuento;
        cout << "Descuento (10%): " << descuento << "$" << endl;
    } else {
        total = compra;
        cout << "No aplica descuento." << endl;
    }
    cout << "Total a pagar: " << total << "$" << endl;
    return 0;
}`
        },ejercicio13: {
            titulo: "13. Calcular Categoría del IMC",
            codigo: `#include <iostream>
using namespace std;

int main() {
    float peso, altura, imc;
    cout << "Ingrese peso en kg: ";
    cin >> peso;
    cout << "Ingrese altura en metros: ";
    cin >> altura;
    
    imc = peso / (altura * altura);
    cout << "Su IMC es: " << imc << endl;
    
    if (imc < 18.5) {
        cout << "Categoría: Bajo peso" << endl;
    } else if (imc >= 18.5 && imc <= 24.9) {
        cout << "Categoría: Peso normal" << endl;
    } else {
        cout << "Categoría: Sobrepeso" << endl;
    }
    return 0;
}`
        },ejercicio14: {
            titulo: "14. Mostrar Día de la Semana",
            codigo: `#include <iostream>
using namespace std;

int main() {
    int dia;
    cout << "Ingrese un número (1-7): ";
    cin >> dia;
    
    switch (dia) {
        case 1: cout << "Lunes" << endl; break;
        case 2: cout << "Martes" << endl; break;
        case 3: cout << "Miércoles" << endl; break;
        case 4: cout << "Jueves" << endl; break;
        case 5: cout << "Viernes" << endl; break;
        case 6: cout << "Sábado" << endl; break;
        case 7: cout << "Domingo" << endl; break;
        default: cout << "Número no válido." << endl;
    }
    return 0;
}`
        },ejercicio15: {
            titulo: "15. Mostrar números del 1 al 10 (Bucle)",
            codigo: `#include <iostream>
using namespace std;

int main() {
    // Usamos un bucle for clásico de algorítmica
    for (int i = 1; i <= 10; i++) {
        cout << "Número: " << i << endl;
    }
    return 0;
}`
        },ejercicio16: {
            titulo: "16. Suma de los primeros N números",
            codigo: `#include <iostream>
using namespace std;

int main() {
    int n, suma = 0;
    cout << "Ingrese un límite (N): ";
    cin >> n;
    
    for (int i = 1; i <= n; i++) {
        suma += i; // Acumula la suma
    }
    
    cout << "La suma total es: " << suma << endl;
    return 0;
}`
        },ejercicio17: {
            titulo: "17. Tabla de Multiplicar",
            codigo: `#include <iostream>
using namespace std;

int main() {
    int numero;
    cout << "Ingrese un número: ";
    cin >> numero;
    
    cout << "Tabla del " << numero << ":" << endl;
    for (int i = 1; i <= 10; i++) {
        cout << numero << " x " << i << " = " << numero * i << endl;
    }
    return 0;
}`
        },ejercicio18: {
            titulo: "18. Validar Entrada con Bucle While",
            codigo: `#include <iostream>
using namespace std;

int main() {
    int numero = 0;
    
    // El bucle se repite mientras el número sea inválido
    while (numero <= 0) {
        cout << "Ingrese un número positivo: ";
        cin >> numero;
        
        if (numero <= 0) {
            cout << "Error. Intente de nuevo." << endl;
        }
    }
    
    cout << "Número válido ingresado: " << numero << endl;
    return 0;
}`
        },ejercicio19: {
            titulo: "19. Menú Interactivo con Do-While",
            codigo: `#include <iostream>
using namespace std;

int main() {
    int opcion;
    
    do {
        cout << "-- MENU DE OPCIONES --" << endl;
        cout << "1. Saludar" << endl;
        cout << "2. Decir Adios" << endl;
        cout << "3. Salir del programa" << endl;
        cout << "Elija una opcion: ";
        cin >> opcion;
        
        switch(opcion) {
            case 1: cout << "¡Hola, estudiante!" << endl; break;
            case 2: cout << "¡Hasta luego!" << endl; break;
            case 3: cout << "Saliendo..." << endl; break;
            default: cout << "Opcion invalida." << endl;
        }
        cout << "--------------------" << endl;
    } while (opcion != 3);
    
    return 0;
}`
        },ejercicio20: {
            titulo: "20. Calcular el Factorial de un Número",
            codigo: `#include <iostream>
using namespace std;

int main() {
    int numero;
    long long factorial = 1; // Soporta números grandes
    cout << "Ingrese un número entero: ";
    cin >> numero;
    
    if (numero < 0) {
        cout << "No existe el factorial." << endl;
    } else {
        for (int i = 1; i <= numero; i++) {
            factorial *= i;
        }
        cout << "El factorial es: " << factorial << endl;
    }
    return 0;
}`
        }
    };
    

    function mostrarSolucion(idEjercicio) {
        const datos = solucionesCplusplus[idEjercicio];
        if (datos) {
            document.getElementById('modalTitulo').innerText = datos.titulo;
            document.getElementById('modalCodigo').innerText = datos.codigo;
            
            const modal = document.getElementById('miModalSolucion');
            const tarjeta = document.getElementById('modalTarjeta');
            
            modal.style.display = 'flex';
            
            setTimeout(() => {
                modal.style.backgroundColor = 'rgba(0,0,0,0.6)';
                modal.style.backdropFilter = 'blur(3px)';
                tarjeta.style.opacity = '1';
                tarjeta.style.transform = 'translateY(0)';
            }, 10);
        }
    }

    function cerrarModal() {
        const modal = document.getElementById('miModalSolucion');
        const tarjeta = document.getElementById('modalTarjeta');
        
        modal.style.backgroundColor = 'rgba(0,0,0,0)';
        modal.style.backdropFilter = 'blur(0px)';
        tarjeta.style.opacity = '0';
        tarjeta.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }

    // Cerrar si hace clic afuera de la tarjeta blanca
    window.onclick = function(event) {
        var modal = document.getElementById('miModalSolucion');
        if (event.target == modal) {
            cerrarModal();
        }
    }
      // --- FUNCIÓN DE LAS UNIDADES ---
    function toggleCard(header) {
        header.parentElement.classList.toggle('active');
    }

    function deslizarTarjetaDocente() {
    var contenedor = document.getElementById("contenedor-deslizable");
    var interior = document.getElementById("interior-docente");
    var flecha = document.getElementById("flecha-docente-icon");
    
    if (contenedor.style.height === "0px" || !contenedor.style.height) {
        var alturaReal = interior.scrollHeight; 
        
        contenedor.style.height = alturaReal + "px"; // Se estira con curva ease
        interior.style.opacity = "1";               
        flecha.style.transform = "rotate(180deg)";   
    } else {
        contenedor.style.height = "0px";            // Se encoge con curva ease
        interior.style.opacity = "0";               
        flecha.style.transform = "rotate(0deg)";     
    }
}

function toggleMenuPrincipal() {
    var cuerpo = document.getElementById("cuerpo-principal");
    var interior = document.getElementById("interior-principal");
    var flecha = document.getElementById("flecha-principal");
    
    if (cuerpo.style.maxHeight === "0px" || !cuerpo.style.maxHeight) {
        cuerpo.style.maxHeight = interior.scrollHeight + "px";
        flecha.style.transform = "rotate(180deg)";
        
        setTimeout(function() {
            if (cuerpo.style.maxHeight !== "0px") {
                cuerpo.style.maxHeight = "none";
            }
        }, 350);
    } else {
        cuerpo.style.maxHeight = interior.scrollHeight + "px";
        
        setTimeout(function() {
            cuerpo.style.maxHeight = "0px";
            flecha.style.transform = "rotate(0deg)";
        }, 10);
    }
}

function toggleEjercicio(idContenedor, idFlecha) {
    var ejercicio = document.getElementById(idContenedor);
    var flecha = document.getElementById(idFlecha);
    
    if (ejercicio.style.maxHeight === "0px" || !ejercicio.style.maxHeight) {
        ejercicio.style.maxHeight = ejercicio.scrollHeight + "px";
        flecha.style.transform = "rotate(180deg)";
    } else {
        ejercicio.style.maxHeight = "0px";
        flecha.style.transform = "rotate(0deg)";
    }
}

    // --- FUNCIONES DE LA CALCULADORA ---
    function openCalc() {
        const modal = document.getElementById('calcModal');
        if (modal) modal.style.display = 'flex';
    }

    function closeCalc() {
        const modal = document.getElementById('calcModal');
        if (modal) modal.style.display = 'none';
    }

    function press(valor) {
        const pantalla = document.getElementById('display');
        if (!pantalla) return;
        if (pantalla.innerText === '0' || pantalla.innerText === 'Error') {
            pantalla.innerText = valor;
        } else {
            pantalla.innerText += valor;
        }
    }

    function clearD() {
        const pantalla = document.getElementById('display');
        if (pantalla) pantalla.innerText = '0';
    }

    function del() {
        const pantalla = document.getElementById('display');
        if (!pantalla) return;
        pantalla.innerText = pantalla.innerText.slice(0, -1) || '0';
    }

    function solve() {
        const pantalla = document.getElementById('display');
        if (!pantalla) return;
        try {
            let resultado = eval(pantalla.innerText);
            pantalla.innerText = Number.isInteger(resultado) ? resultado : resultado.toFixed(2);
        } catch (e) {
            pantalla.innerText = "Error";
        }
    }
