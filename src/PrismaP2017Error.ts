import { PrismaClientKnownRequestError } from '@prisma/client/runtime'
import { PrismaError } from './PrismaError'

export class PrismaP2017Error extends PrismaError {
  constructor (originalError: PrismaClientKnownRequestError) {
    super(originalError, 'The records for the relation are not connected')
  }
}
