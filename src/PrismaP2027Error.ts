import { PrismaClientKnownRequestError } from '@prisma/client/runtime'
import { PrismaError } from './PrismaError'

export class PrismaP2027Error extends PrismaError {
  constructor (originalError: PrismaClientKnownRequestError) {
    super(
      originalError,
      'Multiple errors occurred on the database during query execution'
    )
  }
}
