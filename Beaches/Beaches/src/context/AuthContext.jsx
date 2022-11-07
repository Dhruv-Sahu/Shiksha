import { createContext, useReducer } from 'react'

function authReducer(state, action) {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, isConnected: true, signer: action.payload._signer, provider: action.payload._provider, contract: action.payload._contract }

        default:
            return state
    }
}


export const AuthContext = createContext()

export function AuthProvider({ children }) {

    const [state, dispatch] = useReducer(authReducer, {
        isConnected: false,
        signer: "sign",
        provider: "provide",
        contract: "contract"
    })

    const userLogin = (_signer, _provider, _contract) => {
        dispatch({
            type: "LOGIN",
            payload: { _signer, _provider, _contract }
        })
    }

    return (
        <AuthContext.Provider value={{ ...state, userLogin }}>
            {children}
        </AuthContext.Provider>
    )
}
