import * as express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import bodyParser from 'body-parser';


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

    }

    private async connectToDB():Promise<void>{

    }

    private catchError():void{

    }
}

export default new App().express;