import { PrismaClientKnownRequestError } from '@prisma/client/runtime'
import { PrismaError } from './PrismaError'

export class PrismaP2025Error extends PrismaError {
  constructor (originalError: PrismaClientKnownRequestError) {
    super(
      originalError,
      'An operation failed because it depends on one or more records that were required but not found'
    )
  }
}
