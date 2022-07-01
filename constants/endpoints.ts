const BASE_URL = "https://reqres.in/api/";

function fullPath(endpoint: string): string {
    return BASE_URL + endpoint;
}

interface Endpoints {
    GET: {
        LIST_USERS: string;
        SINGLE_USER: string;
        LIST_RESOURCE: string;
        SINGLE_RESOURCE: string;
    };
    POST: {
        CREATE: string;
        REGISTER_SUCCESSFUL: string;
        REGISTER_UNSUCCESSFUL: string;
    };
    PUT: {
        UPDATE: string;
    };
    PATCH: {
        UPDATE: string;
    };
    DELETE: string;
}

export const ENDPOINTS: Endpoints = {
    GET: {
        LIST_USERS: fullPath("users?page=2"),
        SINGLE_USER: fullPath("users/2"),
        LIST_RESOURCE: fullPath("unknown"),
        SINGLE_RESOURCE: fullPath("unknown/2"),
    },
    POST: {
        CREATE: fullPath("users"),
        REGISTER_SUCCESSFUL: fullPath("register"),
        REGISTER_UNSUCCESSFUL: fullPath("register"),
    },
    PUT: {
        UPDATE: fullPath("users/2"),
    },
    PATCH: {
        UPDATE: fullPath("users/2"),
    },
    DELETE: fullPath("users/2"),
};
