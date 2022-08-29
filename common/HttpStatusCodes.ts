export enum HttpStatusCode {
    // Successful Response
    OK = 200,
    CREATED = 201,
    ACCEPTED = 202,

    // Client Error
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    CONFLICT = 409,
    IM_A_TEAPOT = 418,
    TOO_MANY_REQUESTS = 429,

    // Server Error
    INTERNAL_SERVER_ERROR = 500,
    NOT_IMPLEMENTED = 501,
    BAD_GATEWAY = 502,
    SERVICE_UNAVAILABLE = 503,
    GATEWAY_TIMEOUT = 504,
}