import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaError } from './PrismaError';

export class PrismaP2006Error extends PrismaError {
  constructor(originalError: PrismaClientKnownRequestError) {
    super(originalError, 'The provided value is not valid');
  }
}
