# [2.0.0](https://github.com/mikaelkaron/prisma-errors/compare/v1.0.0...v2.0.0) (2022-05-09)


### Features

* introduce `canPrismaError` typeguard ([bbf3678](https://github.com/mikaelkaron/prisma-errors/commit/bbf367873406a6f3b910a1948b313e9a354dc995))


### BREAKING CHANGES

* Instead of having `toPrismaError` be generic and testing for `instanceof` we're introducing the `canPrismaError` typeguard. If you want the old functionality use `tryToPrismaError` that internally uses `canPrismaError`

# 1.0.0 (2022-02-10)


### Bug Fixes

* add build step ([b93290b](https://github.com/mikaelkaron/prisma-errors/commit/b93290b2004814bc08e4d1e0ab0dacaf16788e5e))
* added npm release ([03fa485](https://github.com/mikaelkaron/prisma-errors/commit/03fa485d0a94274a370f235f98c9a22318375b68))
* correct .releaserc config ([55e27c3](https://github.com/mikaelkaron/prisma-errors/commit/55e27c3d9930644b76697a1904338f87e8ad610c))
* release action to run manually ([d83e431](https://github.com/mikaelkaron/prisma-errors/commit/d83e431deae1f9134d03aaa0cc483a8f0ca3b8fe))
* remove `:` ([568b61c](https://github.com/mikaelkaron/prisma-errors/commit/568b61c2c1087cdf2f92b96455af2d676d240afe))


### Features

* add semantic release support ([3637edd](https://github.com/mikaelkaron/prisma-errors/commit/3637edde0e876e590d33dec5797868fa1b398156))
