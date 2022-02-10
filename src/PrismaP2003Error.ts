import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaError } from './PrismaError';

export class PrismaP2003Error extends PrismaError {
  constructor(originalError: PrismaClientKnownRequestError) {
    super(originalError, 'Foreign key constraint failed');
  }
}
