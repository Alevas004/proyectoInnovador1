import { axiosInstance } from "../../api/axiosInstance"

export const login = async ({email, password}) => {
    try {
        // credentials, es el objeto que espera el backend para poder hacer la validacion del usuario
        const credentials = {email, password}
        const res = await axiosInstance.post('users/login', credentials)

        return res.data

    } catch (error) {
        console.error(error)
    }
}

