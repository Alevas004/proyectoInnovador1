import { axiosInstance } from "../../api/axiosInstance"


export const getEnterprises = async () => {
    try {
        const res = await axiosInstance.get('products/')

        return res.data
    } catch (error) {
            console.log(error)
    }
}