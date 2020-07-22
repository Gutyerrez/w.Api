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
    Route.post('/', 'MojangController.store')

    Route.post('/generate', 'AuthController.store')
  })
  .prefix('/auth')

Route
  .group(() => {
    Route.get('/', 'UsersController.index')
    Route.get('/:id', 'UsersController.show')

    Route.get('/punishments/:user_id', 'UsersPunishmentsController.show')

    Route.get('/groups/:user_id', 'UsersGroupsDueController.index')
    Route.get('/groups/:user_id/:server', 'UsersGroupsDueController.show')
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

Route
  .group(() => {
    Route.get('/', 'PostsController.index')

    Route.post('/', 'PostsController.store')

    Route.put('/', 'PostsController.update')

    Route.delete('/:id', 'PostsController.delete')
  })
  .prefix('/posts')
  .middleware('auth')

Route
  .group(() => {
    Route.get('/', 'ChangelogsController.index')

    Route.post('/', 'ChangelogsController.store')

    Route.delete('/:id', 'ChangelogsController.delete')
  })
  .prefix('/changelogs')
  .middleware('auth')

Route.post('/discord', 'DiscordController.store')
  .middleware('auth')

Route.get('/staff', 'StaffController.index')
  .middleware('auth')

Route
  .group(() => {
    Route.get('/', 'PunishmentsController.index')

    Route.get('/:id', 'PunishmentsController.show')
  })
  .prefix('/punishments')
