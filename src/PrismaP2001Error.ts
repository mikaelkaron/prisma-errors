import { PrismaClientKnownRequestError } from '@prisma/client/runtime'
import { PrismaError } from './PrismaError'

export class PrismaP2001Error extends PrismaError {
  constructor (originalError: PrismaClientKnownRequestError) {
    super(
      originalError,
      'The record searched for in the where condition does not exist'
    )
  }
}
