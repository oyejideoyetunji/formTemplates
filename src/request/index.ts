import Axios, { AxiosError } from "axios";
const baseURL = "https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api";

const axios = Axios.create({ baseURL })

type RequestProps = {
    urn: string
}

export const fetchTemplates = async({ urn }: RequestProps) => {
    try {
        const response = await axios.get(urn)

        return {
            status:     response.status,
            statusText: response.statusText,
            data:       response.data,
        }
    } catch (e) {
        const { response } = e as AxiosError

        return {
            status:     response?.status,
            statusText: response?.statusText,
            data:       response?.data,
        }
    }
}
