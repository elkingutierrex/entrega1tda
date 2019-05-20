 const cursos = [{
 		id: 1,
 		nombre: 'fundamentos nodejs',
 		duracionhoras: 36,
 		valor: 356000
 	},
 	{
 		id: 2,
 		nombre: 'programacion funcional',
 		duracionhoras: 25,
 		valor: 488000
 	},
 	{
 		id: 3,
 		nombre: 'metodologia scrum',
 		duracionhoras: 12,
 		valor: 156000
 	},
 	{
 		id: 4,
 		nombre: 'javascript avanzado1',
 		duracionhoras: 40,
 		valor: 444000
 	},
 	{
 		id: 5,
 		nombre: 'javascriptavanzado2',
 		duracionhoras: 36,
 		valor: 427000
 	}
 ];

 

 let viewCursos = () => {
	console.log('Bienvenido al tecnologio de Antioquia, los cursos ofertados son:')
 	cursos.forEach((curso) => {
 		setTimeout(() => {
 			console.log(curso)
 		},2000)
 	});
 };


 module.exports = {
	 viewCursos
	 ,cursos
 }

 viewCursos()