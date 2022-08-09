import { PrismaClientKnownRequestError } from '@prisma/client/runtime'
import { PrismaError } from './PrismaError'

export class PrismaP2022Error extends PrismaError {
  constructor (originalError: PrismaClientKnownRequestError) {
    super(originalError, 'The column does not exist in the current database')
  }
}
