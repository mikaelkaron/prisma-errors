import { PrismaClientKnownRequestError } from '@prisma/client/runtime'

export class PrismaError extends Error {
  constructor (
    readonly originalError: PrismaClientKnownRequestError,
    message: string = originalError.message
  ) {
    super(message)
    this.name = this.constructor.name
  }

  get code (): string {
    return this.originalError.code
  }

  get meta (): object | undefined {
    return this.originalError.meta
  }

  get extensions (): object | undefined {
    const { code, meta } = this
    return { code, ...meta }
  }
}
