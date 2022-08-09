import { PrismaClientKnownRequestError } from '@prisma/client/runtime'
import { PrismaError } from './PrismaError'

export class PrismaP2014Error extends PrismaError {
  constructor (originalError: PrismaClientKnownRequestError) {
    super(
      originalError,
      'The change you are trying to make would violate the required relation'
    )
  }
}
