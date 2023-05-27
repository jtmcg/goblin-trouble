import logger from "../../dev/logger";
import headers from "./headers";

type HttpMethods = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface FetchApiProps {
    url: string;
    method: HttpMethods;
    body?: any;
}

const fetchApi = async ({url, method, body}: FetchApiProps) => {
    try {
        const response = await fetch(url, {
            method,
            headers: headers,
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            throw Error(`Bad response: ${{status: response.status, body: response.body}}`);
        };
        return await response.json();
    } catch (error) {
        logger.log(error);
        throw error;
    };
}

export default fetchApi;