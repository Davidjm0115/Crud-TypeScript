class Persona{
id:number = 0;
nombreCompleto:string = '';
edad:number = 0;
peso:number =0;

arrayPersona:Array<any>=[]; 
}

interface Inombre extends Persona{

getAll():void;
getById(id:number):void;
getByName(nombre:string):void;
create(id:number, nombreCompleto:string ,edad:number, peso:number):void;
update(id:number, nombreCompleto:string ,edad:number, peso:number):void;
eliminar(id:number):void;
}

class Repository implements Inombre{

id:number = 0;
nombreCompleto:string = '';
edad:number = 0;
peso:number =0;

arrayPersona = 
[
    {id: 1, nombreCompleto: 'David Jm', edad:20, peso:50},
    {id: 2,nombreCompleto: 'Peter Parker', edad:20, peso:50},
    {id: 3,nombreCompleto: 'Clark kent', edad:20, peso:50}
]
//--- Mostrar Todo --//

    getAll():void{
        
        console.log(this.arrayPersona)
    }

 //--- Mostrar por ID --//

    getById(id:number):void{
        for(let datos of this.arrayPersona){
            if(datos.id== id){
                console.log(datos.id,datos.nombreCompleto,datos.edad,datos.peso)
            }
        }

    }


//--- Mostrar por Nombre --//

    getByName(nombre:string):void{
        for(let datos of this.arrayPersona){
            if(datos.nombreCompleto == nombre){
                console.log(datos.id,datos.nombreCompleto,datos.edad,datos.peso)
            }
        }
    }


 //--- Crear --//            

    create(id:number, nombreCompleto:string ,edad:number, peso:number):void{

    this.arrayPersona.push({id: id,nombreCompleto: nombreCompleto, edad: edad, peso: peso});
      alert('creado')
      console.log(this.arrayPersona)  
    }


//--- Actualizar--//

    update(id:number, nombreCompleto:string ,edad:number, peso:number):void{

    var id = id
    var elementIndex

    if(id == null){
        alert('no hay nada que buscar');
    }

    else{

        var nombreCompleto = nombreCompleto;
        var edad = edad;
        var peso = peso;
        elementIndex= this.arrayPersona.findIndex(obj => obj.id == id);
        this.arrayPersona[elementIndex].nombreCompleto = nombreCompleto;
        this.arrayPersona[elementIndex].edad = edad;
        this.arrayPersona[elementIndex].peso = peso;
        alert('registro ha sido actualizado')
        console.log(this.arrayPersona)
    }

    }


//--- Eliminar --//
    eliminar(id:number):void{
        for(let datos of this.arrayPersona){
            if(datos.id== id){

                    delete  datos.id; 
                    delete  datos.nombreCompleto;  
                    delete  datos.edad; 
                    delete  datos.peso; 
                    alert('El cliente '+ id +' Fue eliminado')
                    console.log(this.arrayPersona)
                    break;
            }
            else{
            alert('usuario no encontrado')
        }
        }

    }

}

let mostrar = new Repository();
let opc = Number(window.prompt("DIGITE LA OPCIÓN QUE DESEA REALIZAR \n 1.Motrar\n 2.MostrarxId\n 3.Mostrarxnombre\n 4.Crear\n 5.Editar\n 6.Eliminar"))
    switch(opc)
            {

                case 1:{

                mostrar.getAll();
                break;

                } 

                case 2:{

                let id:number = Number(window.prompt("Introduzca id"))
                mostrar.getById(id)
                break;

                } 

                case 3:{

                let nombre:string = String(window.prompt("Introduzca Nombre"))
                mostrar.getByName(nombre)
                break;

                }

                case 4:{

                let id:number = Number(window.prompt("Introduzca Id"))
                let nombreCompleto:string = String(window.prompt("Introduzca Nombre completo"))
                let edad:number = Number( window.prompt("Introduzca edad"))
                let peso:number = Number(window.prompt("Introduzca peso"))
                mostrar.create(id, nombreCompleto, edad, peso)
                break;

                } 

                case 5:{
                let id:number = Number(window.prompt("Introduzca Id"))
                let nombreCompleto:string = String(window.prompt("Introduzca Nombre completo"))
                let edad:number = Number( window.prompt("Introduzca edad"))
                let peso:number = Number(window.prompt("Introduzca peso"))
                mostrar.update(id, nombreCompleto, edad, peso)                    
                break;

                }

                case 6:{

                let id:number = Number(window.prompt("Introduzca id"))
                mostrar.eliminar(id)
                break;

                }


            }
