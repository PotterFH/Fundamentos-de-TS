//Interfaces: Son las que mandan sobre la definicion de los objetos, no sirven para crear instancias, solo sirven para poner reglas de validacion a los objetos 
interface Persona {
  nombreCompleto: string;
  edad: number;
  direccion: Direccion;
}

//Objetos se definen en su propia interfaz
interface Direccion{
  pais: string;
  casaNo: number;
}


export const ObjetosLiterales = () => {

  const persona: Persona = {
    nombreCompleto: 'Joaquin',
    edad: 35,
    direccion: {
      pais: 'Canada',
      casaNo: 615
    }


  }
  return (
    <div>
      <h3>Objetos Literales</h3>
      <code>
          <pre>
            { JSON.stringify( persona, null, 2 ) }
          </pre>
      </code>
    </div>
  )
}

export default ObjetosLiterales
