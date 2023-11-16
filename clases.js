
class Libro {
    

    constructor(titulo, autor, genero, leido) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.leido =leido;
    }

    marcarLeido(){
        this.leido = true
        console.log("ha sido leido")
    }

    marcarNoLeido(){
        this.leido = false
        console.log("ha sido leido")
    }
   
    informacion() { 
        const estadoLeido = this.leido ? "Sí" : "No";
        console.log ( `Tiutlo: ${this.titulo}, Autor: ${this.autor}, Genero: ${this.genero}, Leido: ${estadoLeido}`)
    }
 }
    const libro1 = new Libro("Como", "Carlos Jaramillo", "Medicina Funcional");
    const libro2 = new Libro("La esposa perfecta", "Blake Pierce", "Thriller psicologico");

    libro1.marcarLeido();
    libro1.informacion();
    libro2.informacion();
    