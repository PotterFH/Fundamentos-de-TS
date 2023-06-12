import { useEffect } from "react"
import { reqResApi } from "./api/reqRes"

const Usuarios = () => {

    useEffect( () => {
        //Llamado al API
        reqResApi.get('/users')
            .then( resp => {
                console.log(resp.data.data);
            })
            // .catch( err => console.log( err ))
            .catch( console.log )
    }, [])

    return (
        <>
            <h3>Usuarios: </h3>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>AVATAR</th>
                        <th>NOMBRE</th>
                        <th>EMAIL</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </>
    )
}

export default Usuarios
