import { Exception } from '@poppinss/utils'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

/*
|--------------------------------------------------------------------------
| Exception
|--------------------------------------------------------------------------
|
| The Exception class imported from `@poppinss/utils` allows defining
| a status code and error code for every exception.
|
| @example
| new InvalidApplicationException('message', 500, 'E_RUNTIME_EXCEPTION')
|
*/
export class InvalidApplicationException extends Exception {
  /**
   * Raise exception with message
   */
  constructor(message: string, code: string) {
    super(message, 401, code)
  }

  /**
   * Self handle exception and attempt to make the best response based
   * upon the type of request
   */
  public async handle (_: InvalidApplicationException, { response }: HttpContextContract) {
    response.status(this.status).send({
      code: this.code,
      message: this.message,
    })
  }
}
