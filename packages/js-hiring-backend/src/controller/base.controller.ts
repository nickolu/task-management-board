import { connection } from "mongoose";

class BaseMongoExpressController {
    connection: any;
    constructor() {
        this.connection = connection;
    }
    makeSuccessfulResponse(response: any, sendArguments: object) {
        response.send(sendArguments).status(200);
    }
    makeBadRequestResponse(response: any, errorMessage: string) {
        response.status(400).send({ error: errorMessage });
    }
}

export { BaseMongoExpressController as BaseController };
