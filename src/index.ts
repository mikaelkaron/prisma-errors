import { PrismaClientKnownRequestError } from '@prisma/client/runtime'
import { PrismaError } from './PrismaError'
import { PrismaP2000Error } from './PrismaP2000Error'
import { PrismaP2001Error } from './PrismaP2001Error'
import { PrismaP2002Error } from './PrismaP2002Error'
import { PrismaP2003Error } from './PrismaP2003Error'
import { PrismaP2004Error } from './PrismaP2004Error'
import { PrismaP2005Error } from './PrismaP2005Error'
import { PrismaP2006Error } from './PrismaP2006Error'
import { PrismaP2007Error } from './PrismaP2007Error'
import { PrismaP2008Error } from './PrismaP2008Error'
import { PrismaP2009Error } from './PrismaP2009Error'
import { PrismaP2010Error } from './PrismaP2010Error'
import { PrismaP2011Error } from './PrismaP2011Error'
import { PrismaP2012Error } from './PrismaP2012Error'
import { PrismaP2013Error } from './PrismaP2013Error'
import { PrismaP2014Error } from './PrismaP2014Error'
import { PrismaP2015Error } from './PrismaP2015Error'
import { PrismaP2016Error } from './PrismaP2016Error'
import { PrismaP2017Error } from './PrismaP2017Error'
import { PrismaP2018Error } from './PrismaP2018Error'
import { PrismaP2019Error } from './PrismaP2019Error'
import { PrismaP2020Error } from './PrismaP2020Error'
import { PrismaP2021Error } from './PrismaP2021Error'
import { PrismaP2022Error } from './PrismaP2022Error'
import { PrismaP2023Error } from './PrismaP2023Error'
import { PrismaP2024Error } from './PrismaP2024Error'
import { PrismaP2025Error } from './PrismaP2025Error'
import { PrismaP2026Error } from './PrismaP2026Error'
import { PrismaP2027Error } from './PrismaP2027Error'
import { PrismaP2030Error } from './PrismaP2030Error'

export * from './PrismaError'
export * from './PrismaP2000Error'
export * from './PrismaP2001Error'
export * from './PrismaP2002Error'
export * from './PrismaP2003Error'
export * from './PrismaP2004Error'
export * from './PrismaP2005Error'
export * from './PrismaP2006Error'
export * from './PrismaP2007Error'
export * from './PrismaP2008Error'
export * from './PrismaP2009Error'
export * from './PrismaP2010Error'
export * from './PrismaP2011Error'
export * from './PrismaP2012Error'
export * from './PrismaP2013Error'
export * from './PrismaP2014Error'
export * from './PrismaP2015Error'
export * from './PrismaP2016Error'
export * from './PrismaP2017Error'
export * from './PrismaP2018Error'
export * from './PrismaP2019Error'
export * from './PrismaP2020Error'
export * from './PrismaP2021Error'
export * from './PrismaP2022Error'
export * from './PrismaP2023Error'
export * from './PrismaP2024Error'
export * from './PrismaP2025Error'
export * from './PrismaP2026Error'
export * from './PrismaP2027Error'
export * from './PrismaP2030Error'

export const canPrismaError = (
  error: any
): error is PrismaClientKnownRequestError =>
  error instanceof PrismaClientKnownRequestError

export const toPrismaError = (
  originalError: PrismaClientKnownRequestError
): PrismaError => {
  switch (originalError.code) {
    case 'P2000':
      return new PrismaP2000Error(originalError)
    case 'P2001':
      return new PrismaP2001Error(originalError)
    case 'P2002':
      return new PrismaP2002Error(originalError)
    case 'P2003':
      return new PrismaP2003Error(originalError)
    case 'P2004':
      return new PrismaP2004Error(originalError)
    case 'P2005':
      return new PrismaP2005Error(originalError)
    case 'P2006':
      return new PrismaP2006Error(originalError)
    case 'P2007':
      return new PrismaP2007Error(originalError)
    case 'P2008':
      return new PrismaP2008Error(originalError)
    case 'P2009':
      return new PrismaP2009Error(originalError)
    case 'P2010':
      return new PrismaP2010Error(originalError)
    case 'P2011':
      return new PrismaP2011Error(originalError)
    case 'P2012':
      return new PrismaP2012Error(originalError)
    case 'P2013':
      return new PrismaP2013Error(originalError)
    case 'P2014':
      return new PrismaP2014Error(originalError)
    case 'P2015':
      return new PrismaP2015Error(originalError)
    case 'P2016':
      return new PrismaP2016Error(originalError)
    case 'P2017':
      return new PrismaP2017Error(originalError)
    case 'P2018':
      return new PrismaP2018Error(originalError)
    case 'P2019':
      return new PrismaP2019Error(originalError)
    case 'P2020':
      return new PrismaP2020Error(originalError)
    case 'P2021':
      return new PrismaP2021Error(originalError)
    case 'P2022':
      return new PrismaP2022Error(originalError)
    case 'P2023':
      return new PrismaP2023Error(originalError)
    case 'P2024':
      return new PrismaP2024Error(originalError)
    case 'P2025':
      return new PrismaP2025Error(originalError)
    case 'P2026':
      return new PrismaP2026Error(originalError)
    case 'P2027':
      return new PrismaP2027Error(originalError)
    case 'P2030':
      return new PrismaP2030Error(originalError)
    default:
      return new PrismaError(originalError)
  }
}

export const tryToPrismaError = <T>(originalError: T): PrismaError | T =>
  canPrismaError(originalError) ? toPrismaError(originalError) : originalError
