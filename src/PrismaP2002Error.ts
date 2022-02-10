import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaError } from './PrismaError';

export class PrismaP2002Error extends PrismaError {
  constructor(originalError: PrismaClientKnownRequestError) {
    super(originalError, 'Unique constraint failed');
  }
}
