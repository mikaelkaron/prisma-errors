import { PrismaClientKnownRequestError } from '@prisma/client/runtime'
import { PrismaError } from './PrismaError'

export class PrismaP2023Error extends PrismaError {
  constructor (originalError: PrismaClientKnownRequestError) {
    super(originalError, 'Inconsistent column data')
  }
}
