import * as express from 'express'
import * as cors from 'cors'
import * as morgan from 'morgan'
import * as bodyParser from 'body-parser';
import apiV1 from './api'


class App {
    public express:express.Application;
    constructor(){
        this.express = express();
        this.setMiddleware();
        this.setRoutes();
        this.connectToDB();
        this.catchError();
    }

    private setMiddleware():void{
        this.express.use(cors());
        this.express.use(bodyParser.json());
        this.express.use(morgan("dev"));
    }

    private setRoutes():void{
        this.express.use("/api/v1",apiV1)
    }

    private async connectToDB():Promise<void>{

    }

    private catchError():void{

    }
}

export default new App().express;