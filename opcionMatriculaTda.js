const opcCurso = require('./EducacionContinuaTda');
const fs = require('fs');

const opciones = {
    matricula: {
        default: 0,
        alias: 'm'
    },
    curso: {
        default: 0,
        alias: 'i'
    },
    nombre: {
        default: 0,
        alias: 'n',
    },
    cedula: {
        default: 0,
        alias: 'c',
    }

};

console.log('Si desea generar matricula digite: ' + "\n" +
    '-m=1' + "\n" +
    '-i=(EL ID DEL CURSO)' + "\n" +
    '-n=(SU NOMBRE)' + "\n" +
    '-cc=(SU CEDULA)' + "\n");


const argv = require('yargs')
    .command('generarMatricula', 'generar Matricula', opciones)
    .argv

let generarMatricula = (argv) => {
    if (argv.m == 1) {

        let cursoX;

        opcCurso.cursos.forEach((x) => {
            if (x.id = argv.i) {
                cursoX = x
            }
        })

        if (!cursoX) {
            console.log('El ID del curso que ingresastes NO EXISTE');
            return;
        } else {
            texto = ('El nombre del estudiante es: ' + argv.n + '\n' +
                ' Con cédula de ciudadania # :' + argv.c + '\n' +
                ' se ha matriculado en el curso con id  : (' + argv.i + ')-' + cursoX.nombre + '\n' +
                ' Tiene una duracion de de : '+cursoX.duracionhoras +' horas' + '\n' +
                ' valor a cancelar de la matricula : $ ' + cursoX.valor);
            fs.writeFile(argv.n + argv.c + 'promedio2.txt', texto, (err) => {
                if (err) throw (err);
                console.log('Se ha creado el archivo, y la matricula se ha generado correctamente, bienvenido al curso de ' + cursoX.nombre )
            })

        }



    } else {
        console.log('Cuando decidas matricularte no te olvides que en el TDA siempre tenemos una educación Continua!')
    }

}

generarMatricula(argv);

// //	Destructuracion
// let {idCurso, nombre, curso: { matematicas, ingles, programacion}}	= estudiante;



// console.log('El Nombre del estudiante ganador es '+ nombre);
// console.log('El promedio del estudiante es: ' + optenerPromedio(matematicas,ingles,programacion));
// console.log('la edad del estudiante es: ' + anos);

//crear archivo

// let crearArchivo = (estudiante) => {
// 	texto = ('El nombre del estudiante es ' + nombre +  '\n'
// 			+ 'ha optenido un promedios de ' + optenerPromedio(matematicas,ingles,programacion));
// 	fs.writeFile(nombre+'promedio2.txt', texto,(err)=> {
// 		if(err) throw(err);
// 		console.log('se ha creado el archivo')
// 	})

// } 

// crearArchivo(estudiante);