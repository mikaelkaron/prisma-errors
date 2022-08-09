import { PrismaClientKnownRequestError } from '@prisma/client/runtime'
import { PrismaError } from './PrismaError'

export class PrismaP2015Error extends PrismaError {
  constructor (originalError: PrismaClientKnownRequestError) {
    super(originalError, 'A related record could not be found')
  }
}
