import * as express from "express";
import * as bodyParser from "body-parser";
import Controller from "./interfaces/controller.interface";


 

class App {
  public app: express.Application;

  constructor(controllers: Controller[]) {
    this.app = express();

    //this.connectToTheDatabase();
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }


  public listen() {
    this.app.listen(process.env.PORT || 5000, () => {
      console.log(`App listening on the port ${process.env.PORT || 5000}`);
    });
  }

  private initializeMiddlewares() {
    this.app.use(express.json());
  }

  private initializeControllers(controllers) {
    controllers.forEach((controller) => {
      this.app.use("/api", controller.router);
    });
  }

  private connectToTheDatabase() {
    
  }
}

export default App;
