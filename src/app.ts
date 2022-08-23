import express, { Request, Response, Application, NextFunction } from 'express'
//const app: Application = express()

/* app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello Typescript with Node.js!!')
})
 */
class App {
  public express: Application
  constructor() {
    this.express = express()
    this.mountRoutes()
  }

  private mountRoutes(): void {
    const router = express.Router()
    router.get('/', (req: Request, res: Response, next: NextFunction): void => {
      res.json({
        message: 'Hello Typescript with Node.js!!',
      })
    })
    this.express.use('/', router)
  }
}

export default new App().express
