import { useQuery } from "@tanstack/react-query"
import { getEnterprises } from "../../services/enterprises/getEnterprises"


export const useGetEnterprises = () => {
    const query = useQuery({queryKey: ['enterprises'], queryFn: getEnterprises  })
    return query
}