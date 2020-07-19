/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { 'Hyren API Version': '0.1-ALPHA' }
})

Route
  .group(() => {
    Route.post('/generate', 'AuthController.store')
  })
  .prefix('/auth')

Route
  .group(() => {
    Route.get('/', 'UsersController.index')
    Route.get('/:id', 'UsersController.show')
  })
  .prefix('/users')
  .middleware('auth')

Route
  .group(() => {
    Route.get('/', 'CategoriesController.index')

    Route.post('/', 'CategoriesController.store')

    Route.put('/', 'CategoriesController.update')

    Route.delete('/', 'CategoriesController.delete')
  })
  .prefix('/categories')
  .middleware('auth')

Route
  .group(() => {
    Route.get('/', 'ForumsController.index')
    Route.get('/:id', 'ForumsController.show')

    Route.post('/', 'ForumsController.store')

    Route.put('/', 'ForumsController.update')

    Route.delete('/', 'ForumsController.delete')
  })
  .prefix('/forums')
  .middleware('auth')

Route
  .group(() => {
    Route.get('/', 'ThreadsController.index')
    Route.get('/:id', 'ThreadsController.show')

    Route.post('/', 'ThreadsController.store')

    Route.put('/', 'ThreadsController.update')

    Route.delete('/:id', 'ThreadsController.delete')
  })
  .prefix('/threads')
  .middleware('auth')
