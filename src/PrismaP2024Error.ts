import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaError } from './PrismaError';

export class PrismaP2024Error extends PrismaError {
  constructor(originalError: PrismaClientKnownRequestError) {
    super(
      originalError,
      'Timed out fetching a new connection from the connection pool'
    );
  }
}
