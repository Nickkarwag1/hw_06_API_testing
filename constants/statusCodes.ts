interface StatusCodes {
    OK: number;
    CREATED: number;
    NO_CONTENT: number;
    BAD_REQUEST: number;
    NOT_FOUND: number;
}

export const STATUS_CODES: StatusCodes = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
};
