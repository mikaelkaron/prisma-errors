import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaError } from './PrismaError';

export class PrismaP2016Error extends PrismaError {
  constructor(originalError: PrismaClientKnownRequestError) {
    super(originalError, 'Query interpretation error');
  }
}
