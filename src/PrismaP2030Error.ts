import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaError } from './PrismaError';

export class PrismaP2030Error extends PrismaError {
  constructor(originalError: PrismaClientKnownRequestError) {
    super(
      originalError,
      'Cannot find a fulltext index to use for the search, try adding a @@fulltext([Fields...]) to your schema'
    );
  }
}
