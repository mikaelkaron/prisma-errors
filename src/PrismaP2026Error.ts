import { PrismaClientKnownRequestError } from '@prisma/client/runtime'
import { PrismaError } from './PrismaError'

export class PrismaP2026Error extends PrismaError {
  constructor (originalError: PrismaClientKnownRequestError) {
    super(
      originalError,
      "The current database provider doesn't support a feature that the query used"
    )
  }
}
