import { PrismaClientKnownRequestError } from '@prisma/client/runtime'
import { PrismaError } from './PrismaError'

export class PrismaP2013Error extends PrismaError {
  constructor (originalError: PrismaClientKnownRequestError) {
    super(originalError, 'Missing the required argument')
  }
}
