import { connection } from "mongoose";
import { Request } from "express";

interface MongoQueryInterface {
    [key: string]: any;
}

class BaseMongoExpressController {
    connection: any;
    constructor() {
        this.connection = connection;
    }
    makeSuccessfulResponse(response: any, sendArguments: object) {
        response.status(200).send(sendArguments);
    }
    makeBadRequestResponse(response: any, errorMessage: string) {
        response.status(400).send({ error: errorMessage });
    }
    buildMongoQuery(requestQuery: Request["query"]) {
        const mongoQuery: MongoQueryInterface = {};
        Object.entries(requestQuery).forEach((entry: any[]) => {
            mongoQuery[entry[0]] = entry[1];
        });

        return mongoQuery;
    }
}

export { BaseMongoExpressController as BaseController };
