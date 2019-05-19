 const cursos = [
	 {id : 1
	 ,nombre:'fundamentos nodejs'
	 ,duracionhoras:36
	 ,valor:356000
	 },
	 {id : 2
	 ,nombre:'programacion funcional'
	 ,duracionhoras:25
	 ,valor:488000
	 },
	 {id : 3
	 ,nombre:'metodologia scrum'
	 ,duracionhoras:12
	 ,valor:156000
	 },
	 {id : 4
	 ,nombre:'javascript avanzado1'
	 ,duracionhoras:40
	 ,valor:444000
	 },
	 {id : 5
	 ,nombre:'javascriptavanzado2'
	 ,duracionhoras:36
	 ,valor:427000
	 }
 ];		



let viewCursos = (callback)=> {
	cursos.forEach((curso)=> {
		setTimeout(()=>{
			callback(curso)
		},2000)
	});	
};


viewCursos(function(curso){
	console.log(curso)
})

module.exports={
	viewCursos	
}




// console.log(
// 'BIENVENIDO, a los cursos de educación continua del TECNOLOGICO DE ANTIOQUIA'
// +'' +
// 'los cursos ofertados a la fecha' + '' + 'son: '
// +'' + 

// )	  
