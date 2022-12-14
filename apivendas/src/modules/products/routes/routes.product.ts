import { Router } from "express";
import router from "../../../routes";
import ProductController from "../controllers/ProductController";


// cria objeto para a rota
const routerProduct = Router()
// cria um objeto controller
const controllerProduct = new ProductController()

// está criada a rota para inserir um produto no banco de dados
routerProduct.post('/', controllerProduct.create)

routerProduct.get('/', controllerProduct.list)

routerProduct.get('/:id', controllerProduct.show)

routerProduct.get('/:id', controllerProduct.delete)

routerProduct.put('/:id', controllerProduct.update)

export default routerProduct