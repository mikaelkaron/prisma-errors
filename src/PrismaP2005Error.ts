import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaError } from './PrismaError';

export class PrismaP2005Error extends PrismaError {
  constructor(originalError: PrismaClientKnownRequestError) {
    super(
      originalError,
      "The value stored in the database is invalid for the field's type"
    );
  }
}
