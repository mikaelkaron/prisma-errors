import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaError } from './PrismaError';

export class PrismaP2004Error extends PrismaError {
  constructor(originalError: PrismaClientKnownRequestError) {
    super(originalError, 'A constraint failed on the database');
  }
}
