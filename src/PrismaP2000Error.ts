import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaError } from './PrismaError';

export class PrismaP2000Error extends PrismaError {
  constructor(originalError: PrismaClientKnownRequestError) {
    super(
      originalError,
      "The provided value for the column is too long for the column's type."
    );
  }
}
