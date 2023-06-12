import { stat } from 'fs';
import { type } from 'os';
import { useReducer, useEffect } from 'react';
import { setTimeout } from 'timers/promises';

//interface para initialState
interface AuthState {
    validando: boolean;
    token: string | null;
    username: string;
    nombre: string;
}

const initialState: AuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
}

//Type para action se define como un objeto
type LoginPayLoad = {
    username: string;
    nombre: string;
}

type AuthAction = 
    | { type: 'logout' }
    | { type: 'login', payload: { username: string, nombre: string}}

//Jamas mutar el state
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                nombre: '',
                username: ''
            }
        case 'login':
            const { nombre, username } = action.payload;
            return {
                validando: false,
                token: 'ABC123',
                nombre,               
                username
            }

        default:
            return state;
    }
}

const Login = () => {

    const [{ validando, token, nombre }, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        dispatch({ type: 'logout' });
    }, []);

    const login = () => {
        dispatch({
            type: 'login',
            payload: {
                nombre: 'Fernando',
                username: 'Strider'
            }
        })
    }

    const logout = () => {
       dispatch({ type: 'logout'});
    }

    if (validando) {
        return (
            <>
                <h3>Login</h3>
                <div className="alert alert-info">
                    Validando...
                </div>
            </>
        )
    }


    return (
        <>
            <h3>Login</h3>

            {
                (token)
                    ? <div className="alert alert-success">Autenticado como: {nombre}</div>
                    : <div className="alert alert-danger">No autenticado</div>
            }

            {
                (token)
                    ? (
                        <button className="btn btn-danger" onClick={ logout }>
                            Log out
                        </button>
                    )
                    : (
                        <button className="btn btn-primary" onClick={ login }>
                            Login
                        </button>
                    )
            }


        </>
    )
}

export default Login
