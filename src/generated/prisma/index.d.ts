
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Scan
 * 
 */
export type Scan = $Result.DefaultSelection<Prisma.$ScanPayload>
/**
 * Model Analyzer
 * 
 */
export type Analyzer = $Result.DefaultSelection<Prisma.$AnalyzerPayload>
/**
 * Model AnalyzerPackage
 * 
 */
export type AnalyzerPackage = $Result.DefaultSelection<Prisma.$AnalyzerPackagePayload>
/**
 * Model PackageAuthor
 * 
 */
export type PackageAuthor = $Result.DefaultSelection<Prisma.$PackageAuthorPayload>
/**
 * Model DeclaredLicenses
 * 
 */
export type DeclaredLicenses = $Result.DefaultSelection<Prisma.$DeclaredLicensesPayload>
/**
 * Model DeclaredLicensesProcessed
 * 
 */
export type DeclaredLicensesProcessed = $Result.DefaultSelection<Prisma.$DeclaredLicensesProcessedPayload>
/**
 * Model BinaryArtifact
 * 
 */
export type BinaryArtifact = $Result.DefaultSelection<Prisma.$BinaryArtifactPayload>
/**
 * Model SourceArtifact
 * 
 */
export type SourceArtifact = $Result.DefaultSelection<Prisma.$SourceArtifactPayload>
/**
 * Model Vcs
 * 
 */
export type Vcs = $Result.DefaultSelection<Prisma.$VcsPayload>
/**
 * Model VcsProcessed
 * 
 */
export type VcsProcessed = $Result.DefaultSelection<Prisma.$VcsProcessedPayload>
/**
 * Model Scanner
 * 
 */
export type Scanner = $Result.DefaultSelection<Prisma.$ScannerPayload>
/**
 * Model Licenses
 * 
 */
export type Licenses = $Result.DefaultSelection<Prisma.$LicensesPayload>
/**
 * Model Copyrights
 * 
 */
export type Copyrights = $Result.DefaultSelection<Prisma.$CopyrightsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scan`: Exposes CRUD operations for the **Scan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Scans
    * const scans = await prisma.scan.findMany()
    * ```
    */
  get scan(): Prisma.ScanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.analyzer`: Exposes CRUD operations for the **Analyzer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Analyzers
    * const analyzers = await prisma.analyzer.findMany()
    * ```
    */
  get analyzer(): Prisma.AnalyzerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.analyzerPackage`: Exposes CRUD operations for the **AnalyzerPackage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnalyzerPackages
    * const analyzerPackages = await prisma.analyzerPackage.findMany()
    * ```
    */
  get analyzerPackage(): Prisma.AnalyzerPackageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.packageAuthor`: Exposes CRUD operations for the **PackageAuthor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PackageAuthors
    * const packageAuthors = await prisma.packageAuthor.findMany()
    * ```
    */
  get packageAuthor(): Prisma.PackageAuthorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.declaredLicenses`: Exposes CRUD operations for the **DeclaredLicenses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeclaredLicenses
    * const declaredLicenses = await prisma.declaredLicenses.findMany()
    * ```
    */
  get declaredLicenses(): Prisma.DeclaredLicensesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.declaredLicensesProcessed`: Exposes CRUD operations for the **DeclaredLicensesProcessed** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeclaredLicensesProcesseds
    * const declaredLicensesProcesseds = await prisma.declaredLicensesProcessed.findMany()
    * ```
    */
  get declaredLicensesProcessed(): Prisma.DeclaredLicensesProcessedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.binaryArtifact`: Exposes CRUD operations for the **BinaryArtifact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BinaryArtifacts
    * const binaryArtifacts = await prisma.binaryArtifact.findMany()
    * ```
    */
  get binaryArtifact(): Prisma.BinaryArtifactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sourceArtifact`: Exposes CRUD operations for the **SourceArtifact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SourceArtifacts
    * const sourceArtifacts = await prisma.sourceArtifact.findMany()
    * ```
    */
  get sourceArtifact(): Prisma.SourceArtifactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vcs`: Exposes CRUD operations for the **Vcs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vcs
    * const vcs = await prisma.vcs.findMany()
    * ```
    */
  get vcs(): Prisma.VcsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vcsProcessed`: Exposes CRUD operations for the **VcsProcessed** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VcsProcesseds
    * const vcsProcesseds = await prisma.vcsProcessed.findMany()
    * ```
    */
  get vcsProcessed(): Prisma.VcsProcessedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scanner`: Exposes CRUD operations for the **Scanner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Scanners
    * const scanners = await prisma.scanner.findMany()
    * ```
    */
  get scanner(): Prisma.ScannerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.licenses`: Exposes CRUD operations for the **Licenses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Licenses
    * const licenses = await prisma.licenses.findMany()
    * ```
    */
  get licenses(): Prisma.LicensesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.copyrights`: Exposes CRUD operations for the **Copyrights** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Copyrights
    * const copyrights = await prisma.copyrights.findMany()
    * ```
    */
  get copyrights(): Prisma.CopyrightsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Project: 'Project',
    Scan: 'Scan',
    Analyzer: 'Analyzer',
    AnalyzerPackage: 'AnalyzerPackage',
    PackageAuthor: 'PackageAuthor',
    DeclaredLicenses: 'DeclaredLicenses',
    DeclaredLicensesProcessed: 'DeclaredLicensesProcessed',
    BinaryArtifact: 'BinaryArtifact',
    SourceArtifact: 'SourceArtifact',
    Vcs: 'Vcs',
    VcsProcessed: 'VcsProcessed',
    Scanner: 'Scanner',
    Licenses: 'Licenses',
    Copyrights: 'Copyrights'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "project" | "scan" | "analyzer" | "analyzerPackage" | "packageAuthor" | "declaredLicenses" | "declaredLicensesProcessed" | "binaryArtifact" | "sourceArtifact" | "vcs" | "vcsProcessed" | "scanner" | "licenses" | "copyrights"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Scan: {
        payload: Prisma.$ScanPayload<ExtArgs>
        fields: Prisma.ScanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanPayload>
          }
          findFirst: {
            args: Prisma.ScanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanPayload>
          }
          findMany: {
            args: Prisma.ScanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanPayload>[]
          }
          create: {
            args: Prisma.ScanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanPayload>
          }
          createMany: {
            args: Prisma.ScanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ScanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanPayload>
          }
          update: {
            args: Prisma.ScanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanPayload>
          }
          deleteMany: {
            args: Prisma.ScanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ScanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanPayload>
          }
          aggregate: {
            args: Prisma.ScanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScan>
          }
          groupBy: {
            args: Prisma.ScanGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScanGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScanCountArgs<ExtArgs>
            result: $Utils.Optional<ScanCountAggregateOutputType> | number
          }
        }
      }
      Analyzer: {
        payload: Prisma.$AnalyzerPayload<ExtArgs>
        fields: Prisma.AnalyzerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnalyzerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyzerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnalyzerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyzerPayload>
          }
          findFirst: {
            args: Prisma.AnalyzerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyzerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnalyzerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyzerPayload>
          }
          findMany: {
            args: Prisma.AnalyzerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyzerPayload>[]
          }
          create: {
            args: Prisma.AnalyzerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyzerPayload>
          }
          createMany: {
            args: Prisma.AnalyzerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AnalyzerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyzerPayload>
          }
          update: {
            args: Prisma.AnalyzerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyzerPayload>
          }
          deleteMany: {
            args: Prisma.AnalyzerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnalyzerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AnalyzerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyzerPayload>
          }
          aggregate: {
            args: Prisma.AnalyzerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnalyzer>
          }
          groupBy: {
            args: Prisma.AnalyzerGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnalyzerGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnalyzerCountArgs<ExtArgs>
            result: $Utils.Optional<AnalyzerCountAggregateOutputType> | number
          }
        }
      }
      AnalyzerPackage: {
        payload: Prisma.$AnalyzerPackagePayload<ExtArgs>
        fields: Prisma.AnalyzerPackageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnalyzerPackageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyzerPackagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnalyzerPackageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyzerPackagePayload>
          }
          findFirst: {
            args: Prisma.AnalyzerPackageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyzerPackagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnalyzerPackageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyzerPackagePayload>
          }
          findMany: {
            args: Prisma.AnalyzerPackageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyzerPackagePayload>[]
          }
          create: {
            args: Prisma.AnalyzerPackageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyzerPackagePayload>
          }
          createMany: {
            args: Prisma.AnalyzerPackageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AnalyzerPackageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyzerPackagePayload>
          }
          update: {
            args: Prisma.AnalyzerPackageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyzerPackagePayload>
          }
          deleteMany: {
            args: Prisma.AnalyzerPackageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnalyzerPackageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AnalyzerPackageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyzerPackagePayload>
          }
          aggregate: {
            args: Prisma.AnalyzerPackageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnalyzerPackage>
          }
          groupBy: {
            args: Prisma.AnalyzerPackageGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnalyzerPackageGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnalyzerPackageCountArgs<ExtArgs>
            result: $Utils.Optional<AnalyzerPackageCountAggregateOutputType> | number
          }
        }
      }
      PackageAuthor: {
        payload: Prisma.$PackageAuthorPayload<ExtArgs>
        fields: Prisma.PackageAuthorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PackageAuthorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageAuthorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PackageAuthorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageAuthorPayload>
          }
          findFirst: {
            args: Prisma.PackageAuthorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageAuthorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PackageAuthorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageAuthorPayload>
          }
          findMany: {
            args: Prisma.PackageAuthorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageAuthorPayload>[]
          }
          create: {
            args: Prisma.PackageAuthorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageAuthorPayload>
          }
          createMany: {
            args: Prisma.PackageAuthorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PackageAuthorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageAuthorPayload>
          }
          update: {
            args: Prisma.PackageAuthorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageAuthorPayload>
          }
          deleteMany: {
            args: Prisma.PackageAuthorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PackageAuthorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PackageAuthorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageAuthorPayload>
          }
          aggregate: {
            args: Prisma.PackageAuthorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePackageAuthor>
          }
          groupBy: {
            args: Prisma.PackageAuthorGroupByArgs<ExtArgs>
            result: $Utils.Optional<PackageAuthorGroupByOutputType>[]
          }
          count: {
            args: Prisma.PackageAuthorCountArgs<ExtArgs>
            result: $Utils.Optional<PackageAuthorCountAggregateOutputType> | number
          }
        }
      }
      DeclaredLicenses: {
        payload: Prisma.$DeclaredLicensesPayload<ExtArgs>
        fields: Prisma.DeclaredLicensesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeclaredLicensesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclaredLicensesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeclaredLicensesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclaredLicensesPayload>
          }
          findFirst: {
            args: Prisma.DeclaredLicensesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclaredLicensesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeclaredLicensesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclaredLicensesPayload>
          }
          findMany: {
            args: Prisma.DeclaredLicensesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclaredLicensesPayload>[]
          }
          create: {
            args: Prisma.DeclaredLicensesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclaredLicensesPayload>
          }
          createMany: {
            args: Prisma.DeclaredLicensesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DeclaredLicensesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclaredLicensesPayload>
          }
          update: {
            args: Prisma.DeclaredLicensesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclaredLicensesPayload>
          }
          deleteMany: {
            args: Prisma.DeclaredLicensesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeclaredLicensesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DeclaredLicensesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclaredLicensesPayload>
          }
          aggregate: {
            args: Prisma.DeclaredLicensesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeclaredLicenses>
          }
          groupBy: {
            args: Prisma.DeclaredLicensesGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeclaredLicensesGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeclaredLicensesCountArgs<ExtArgs>
            result: $Utils.Optional<DeclaredLicensesCountAggregateOutputType> | number
          }
        }
      }
      DeclaredLicensesProcessed: {
        payload: Prisma.$DeclaredLicensesProcessedPayload<ExtArgs>
        fields: Prisma.DeclaredLicensesProcessedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeclaredLicensesProcessedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclaredLicensesProcessedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeclaredLicensesProcessedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclaredLicensesProcessedPayload>
          }
          findFirst: {
            args: Prisma.DeclaredLicensesProcessedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclaredLicensesProcessedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeclaredLicensesProcessedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclaredLicensesProcessedPayload>
          }
          findMany: {
            args: Prisma.DeclaredLicensesProcessedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclaredLicensesProcessedPayload>[]
          }
          create: {
            args: Prisma.DeclaredLicensesProcessedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclaredLicensesProcessedPayload>
          }
          createMany: {
            args: Prisma.DeclaredLicensesProcessedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DeclaredLicensesProcessedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclaredLicensesProcessedPayload>
          }
          update: {
            args: Prisma.DeclaredLicensesProcessedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclaredLicensesProcessedPayload>
          }
          deleteMany: {
            args: Prisma.DeclaredLicensesProcessedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeclaredLicensesProcessedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DeclaredLicensesProcessedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeclaredLicensesProcessedPayload>
          }
          aggregate: {
            args: Prisma.DeclaredLicensesProcessedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeclaredLicensesProcessed>
          }
          groupBy: {
            args: Prisma.DeclaredLicensesProcessedGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeclaredLicensesProcessedGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeclaredLicensesProcessedCountArgs<ExtArgs>
            result: $Utils.Optional<DeclaredLicensesProcessedCountAggregateOutputType> | number
          }
        }
      }
      BinaryArtifact: {
        payload: Prisma.$BinaryArtifactPayload<ExtArgs>
        fields: Prisma.BinaryArtifactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BinaryArtifactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BinaryArtifactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BinaryArtifactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BinaryArtifactPayload>
          }
          findFirst: {
            args: Prisma.BinaryArtifactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BinaryArtifactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BinaryArtifactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BinaryArtifactPayload>
          }
          findMany: {
            args: Prisma.BinaryArtifactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BinaryArtifactPayload>[]
          }
          create: {
            args: Prisma.BinaryArtifactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BinaryArtifactPayload>
          }
          createMany: {
            args: Prisma.BinaryArtifactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BinaryArtifactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BinaryArtifactPayload>
          }
          update: {
            args: Prisma.BinaryArtifactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BinaryArtifactPayload>
          }
          deleteMany: {
            args: Prisma.BinaryArtifactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BinaryArtifactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BinaryArtifactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BinaryArtifactPayload>
          }
          aggregate: {
            args: Prisma.BinaryArtifactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBinaryArtifact>
          }
          groupBy: {
            args: Prisma.BinaryArtifactGroupByArgs<ExtArgs>
            result: $Utils.Optional<BinaryArtifactGroupByOutputType>[]
          }
          count: {
            args: Prisma.BinaryArtifactCountArgs<ExtArgs>
            result: $Utils.Optional<BinaryArtifactCountAggregateOutputType> | number
          }
        }
      }
      SourceArtifact: {
        payload: Prisma.$SourceArtifactPayload<ExtArgs>
        fields: Prisma.SourceArtifactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SourceArtifactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceArtifactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SourceArtifactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceArtifactPayload>
          }
          findFirst: {
            args: Prisma.SourceArtifactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceArtifactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SourceArtifactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceArtifactPayload>
          }
          findMany: {
            args: Prisma.SourceArtifactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceArtifactPayload>[]
          }
          create: {
            args: Prisma.SourceArtifactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceArtifactPayload>
          }
          createMany: {
            args: Prisma.SourceArtifactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SourceArtifactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceArtifactPayload>
          }
          update: {
            args: Prisma.SourceArtifactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceArtifactPayload>
          }
          deleteMany: {
            args: Prisma.SourceArtifactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SourceArtifactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SourceArtifactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceArtifactPayload>
          }
          aggregate: {
            args: Prisma.SourceArtifactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSourceArtifact>
          }
          groupBy: {
            args: Prisma.SourceArtifactGroupByArgs<ExtArgs>
            result: $Utils.Optional<SourceArtifactGroupByOutputType>[]
          }
          count: {
            args: Prisma.SourceArtifactCountArgs<ExtArgs>
            result: $Utils.Optional<SourceArtifactCountAggregateOutputType> | number
          }
        }
      }
      Vcs: {
        payload: Prisma.$VcsPayload<ExtArgs>
        fields: Prisma.VcsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VcsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VcsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VcsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VcsPayload>
          }
          findFirst: {
            args: Prisma.VcsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VcsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VcsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VcsPayload>
          }
          findMany: {
            args: Prisma.VcsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VcsPayload>[]
          }
          create: {
            args: Prisma.VcsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VcsPayload>
          }
          createMany: {
            args: Prisma.VcsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VcsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VcsPayload>
          }
          update: {
            args: Prisma.VcsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VcsPayload>
          }
          deleteMany: {
            args: Prisma.VcsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VcsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VcsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VcsPayload>
          }
          aggregate: {
            args: Prisma.VcsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVcs>
          }
          groupBy: {
            args: Prisma.VcsGroupByArgs<ExtArgs>
            result: $Utils.Optional<VcsGroupByOutputType>[]
          }
          count: {
            args: Prisma.VcsCountArgs<ExtArgs>
            result: $Utils.Optional<VcsCountAggregateOutputType> | number
          }
        }
      }
      VcsProcessed: {
        payload: Prisma.$VcsProcessedPayload<ExtArgs>
        fields: Prisma.VcsProcessedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VcsProcessedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VcsProcessedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VcsProcessedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VcsProcessedPayload>
          }
          findFirst: {
            args: Prisma.VcsProcessedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VcsProcessedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VcsProcessedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VcsProcessedPayload>
          }
          findMany: {
            args: Prisma.VcsProcessedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VcsProcessedPayload>[]
          }
          create: {
            args: Prisma.VcsProcessedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VcsProcessedPayload>
          }
          createMany: {
            args: Prisma.VcsProcessedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VcsProcessedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VcsProcessedPayload>
          }
          update: {
            args: Prisma.VcsProcessedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VcsProcessedPayload>
          }
          deleteMany: {
            args: Prisma.VcsProcessedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VcsProcessedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VcsProcessedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VcsProcessedPayload>
          }
          aggregate: {
            args: Prisma.VcsProcessedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVcsProcessed>
          }
          groupBy: {
            args: Prisma.VcsProcessedGroupByArgs<ExtArgs>
            result: $Utils.Optional<VcsProcessedGroupByOutputType>[]
          }
          count: {
            args: Prisma.VcsProcessedCountArgs<ExtArgs>
            result: $Utils.Optional<VcsProcessedCountAggregateOutputType> | number
          }
        }
      }
      Scanner: {
        payload: Prisma.$ScannerPayload<ExtArgs>
        fields: Prisma.ScannerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScannerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScannerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScannerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScannerPayload>
          }
          findFirst: {
            args: Prisma.ScannerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScannerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScannerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScannerPayload>
          }
          findMany: {
            args: Prisma.ScannerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScannerPayload>[]
          }
          create: {
            args: Prisma.ScannerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScannerPayload>
          }
          createMany: {
            args: Prisma.ScannerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ScannerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScannerPayload>
          }
          update: {
            args: Prisma.ScannerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScannerPayload>
          }
          deleteMany: {
            args: Prisma.ScannerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScannerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ScannerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScannerPayload>
          }
          aggregate: {
            args: Prisma.ScannerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScanner>
          }
          groupBy: {
            args: Prisma.ScannerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScannerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScannerCountArgs<ExtArgs>
            result: $Utils.Optional<ScannerCountAggregateOutputType> | number
          }
        }
      }
      Licenses: {
        payload: Prisma.$LicensesPayload<ExtArgs>
        fields: Prisma.LicensesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LicensesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LicensesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensesPayload>
          }
          findFirst: {
            args: Prisma.LicensesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LicensesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensesPayload>
          }
          findMany: {
            args: Prisma.LicensesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensesPayload>[]
          }
          create: {
            args: Prisma.LicensesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensesPayload>
          }
          createMany: {
            args: Prisma.LicensesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LicensesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensesPayload>
          }
          update: {
            args: Prisma.LicensesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensesPayload>
          }
          deleteMany: {
            args: Prisma.LicensesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LicensesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LicensesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensesPayload>
          }
          aggregate: {
            args: Prisma.LicensesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLicenses>
          }
          groupBy: {
            args: Prisma.LicensesGroupByArgs<ExtArgs>
            result: $Utils.Optional<LicensesGroupByOutputType>[]
          }
          count: {
            args: Prisma.LicensesCountArgs<ExtArgs>
            result: $Utils.Optional<LicensesCountAggregateOutputType> | number
          }
        }
      }
      Copyrights: {
        payload: Prisma.$CopyrightsPayload<ExtArgs>
        fields: Prisma.CopyrightsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CopyrightsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CopyrightsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CopyrightsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CopyrightsPayload>
          }
          findFirst: {
            args: Prisma.CopyrightsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CopyrightsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CopyrightsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CopyrightsPayload>
          }
          findMany: {
            args: Prisma.CopyrightsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CopyrightsPayload>[]
          }
          create: {
            args: Prisma.CopyrightsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CopyrightsPayload>
          }
          createMany: {
            args: Prisma.CopyrightsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CopyrightsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CopyrightsPayload>
          }
          update: {
            args: Prisma.CopyrightsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CopyrightsPayload>
          }
          deleteMany: {
            args: Prisma.CopyrightsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CopyrightsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CopyrightsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CopyrightsPayload>
          }
          aggregate: {
            args: Prisma.CopyrightsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCopyrights>
          }
          groupBy: {
            args: Prisma.CopyrightsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CopyrightsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CopyrightsCountArgs<ExtArgs>
            result: $Utils.Optional<CopyrightsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    project?: ProjectOmit
    scan?: ScanOmit
    analyzer?: AnalyzerOmit
    analyzerPackage?: AnalyzerPackageOmit
    packageAuthor?: PackageAuthorOmit
    declaredLicenses?: DeclaredLicensesOmit
    declaredLicensesProcessed?: DeclaredLicensesProcessedOmit
    binaryArtifact?: BinaryArtifactOmit
    sourceArtifact?: SourceArtifactOmit
    vcs?: VcsOmit
    vcsProcessed?: VcsProcessedOmit
    scanner?: ScannerOmit
    licenses?: LicensesOmit
    copyrights?: CopyrightsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    projects: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | UserCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    scans: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scans?: boolean | ProjectCountOutputTypeCountScansArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountScansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScanWhereInput
  }


  /**
   * Count Type AnalyzerCountOutputType
   */

  export type AnalyzerCountOutputType = {
    packages: number
  }

  export type AnalyzerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    packages?: boolean | AnalyzerCountOutputTypeCountPackagesArgs
  }

  // Custom InputTypes
  /**
   * AnalyzerCountOutputType without action
   */
  export type AnalyzerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyzerCountOutputType
     */
    select?: AnalyzerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnalyzerCountOutputType without action
   */
  export type AnalyzerCountOutputTypeCountPackagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalyzerPackageWhereInput
  }


  /**
   * Count Type AnalyzerPackageCountOutputType
   */

  export type AnalyzerPackageCountOutputType = {
    authors: number
    declaredLicenses: number
    declaredLicensesProcessed: number
    binaries: number
    sources: number
    vcsList: number
    vcsProcessed: number
  }

  export type AnalyzerPackageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authors?: boolean | AnalyzerPackageCountOutputTypeCountAuthorsArgs
    declaredLicenses?: boolean | AnalyzerPackageCountOutputTypeCountDeclaredLicensesArgs
    declaredLicensesProcessed?: boolean | AnalyzerPackageCountOutputTypeCountDeclaredLicensesProcessedArgs
    binaries?: boolean | AnalyzerPackageCountOutputTypeCountBinariesArgs
    sources?: boolean | AnalyzerPackageCountOutputTypeCountSourcesArgs
    vcsList?: boolean | AnalyzerPackageCountOutputTypeCountVcsListArgs
    vcsProcessed?: boolean | AnalyzerPackageCountOutputTypeCountVcsProcessedArgs
  }

  // Custom InputTypes
  /**
   * AnalyzerPackageCountOutputType without action
   */
  export type AnalyzerPackageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyzerPackageCountOutputType
     */
    select?: AnalyzerPackageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnalyzerPackageCountOutputType without action
   */
  export type AnalyzerPackageCountOutputTypeCountAuthorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageAuthorWhereInput
  }

  /**
   * AnalyzerPackageCountOutputType without action
   */
  export type AnalyzerPackageCountOutputTypeCountDeclaredLicensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeclaredLicensesWhereInput
  }

  /**
   * AnalyzerPackageCountOutputType without action
   */
  export type AnalyzerPackageCountOutputTypeCountDeclaredLicensesProcessedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeclaredLicensesProcessedWhereInput
  }

  /**
   * AnalyzerPackageCountOutputType without action
   */
  export type AnalyzerPackageCountOutputTypeCountBinariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BinaryArtifactWhereInput
  }

  /**
   * AnalyzerPackageCountOutputType without action
   */
  export type AnalyzerPackageCountOutputTypeCountSourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SourceArtifactWhereInput
  }

  /**
   * AnalyzerPackageCountOutputType without action
   */
  export type AnalyzerPackageCountOutputTypeCountVcsListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VcsWhereInput
  }

  /**
   * AnalyzerPackageCountOutputType without action
   */
  export type AnalyzerPackageCountOutputTypeCountVcsProcessedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VcsProcessedWhereInput
  }


  /**
   * Count Type ScannerCountOutputType
   */

  export type ScannerCountOutputType = {
    licenses: number
    copyrights: number
  }

  export type ScannerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    licenses?: boolean | ScannerCountOutputTypeCountLicensesArgs
    copyrights?: boolean | ScannerCountOutputTypeCountCopyrightsArgs
  }

  // Custom InputTypes
  /**
   * ScannerCountOutputType without action
   */
  export type ScannerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScannerCountOutputType
     */
    select?: ScannerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScannerCountOutputType without action
   */
  export type ScannerCountOutputTypeCountLicensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicensesWhereInput
  }

  /**
   * ScannerCountOutputType without action
   */
  export type ScannerCountOutputTypeCountCopyrightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CopyrightsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    userId: string | null
    userName: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    userId: string | null
    userName: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    userId: number
    userName: number
    email: number
    password: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    userId?: true
    userName?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    userId?: true
    userName?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    userId?: true
    userName?: true
    email?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    userId: string
    userName: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    userName?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    projects?: boolean | User$projectsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    userId?: boolean
    userName?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "userName" | "email" | "password" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | User$projectsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      projects: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      userName: string | null
      email: string | null
      password: string | null
      createdAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userWithUserIdOnly = await prisma.user.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends User$projectsArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly userId: FieldRef<"User", 'String'>
    readonly userName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.projects
   */
  export type User$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    userId: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    userId?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    userId?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    userId: string
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    scans?: boolean | Project$scansArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>



  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "userId", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    scans?: boolean | Project$scansArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      scans: Prisma.$ScanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      userId: string
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    scans<T extends Project$scansArgs<ExtArgs> = {}>(args?: Subset<T, Project$scansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly userId: FieldRef<"Project", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.scans
   */
  export type Project$scansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null
    where?: ScanWhereInput
    orderBy?: ScanOrderByWithRelationInput | ScanOrderByWithRelationInput[]
    cursor?: ScanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScanScalarFieldEnum | ScanScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Scan
   */

  export type AggregateScan = {
    _count: ScanCountAggregateOutputType | null
    _avg: ScanAvgAggregateOutputType | null
    _sum: ScanSumAggregateOutputType | null
    _min: ScanMinAggregateOutputType | null
    _max: ScanMaxAggregateOutputType | null
  }

  export type ScanAvgAggregateOutputType = {
    id: number | null
  }

  export type ScanSumAggregateOutputType = {
    id: number | null
  }

  export type ScanMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    gitRunId: string | null
    projectId: string | null
  }

  export type ScanMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    gitRunId: string | null
    projectId: string | null
  }

  export type ScanCountAggregateOutputType = {
    id: number
    createdAt: number
    gitRunId: number
    projectId: number
    _all: number
  }


  export type ScanAvgAggregateInputType = {
    id?: true
  }

  export type ScanSumAggregateInputType = {
    id?: true
  }

  export type ScanMinAggregateInputType = {
    id?: true
    createdAt?: true
    gitRunId?: true
    projectId?: true
  }

  export type ScanMaxAggregateInputType = {
    id?: true
    createdAt?: true
    gitRunId?: true
    projectId?: true
  }

  export type ScanCountAggregateInputType = {
    id?: true
    createdAt?: true
    gitRunId?: true
    projectId?: true
    _all?: true
  }

  export type ScanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scan to aggregate.
     */
    where?: ScanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scans to fetch.
     */
    orderBy?: ScanOrderByWithRelationInput | ScanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Scans
    **/
    _count?: true | ScanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScanMaxAggregateInputType
  }

  export type GetScanAggregateType<T extends ScanAggregateArgs> = {
        [P in keyof T & keyof AggregateScan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScan[P]>
      : GetScalarType<T[P], AggregateScan[P]>
  }




  export type ScanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScanWhereInput
    orderBy?: ScanOrderByWithAggregationInput | ScanOrderByWithAggregationInput[]
    by: ScanScalarFieldEnum[] | ScanScalarFieldEnum
    having?: ScanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScanCountAggregateInputType | true
    _avg?: ScanAvgAggregateInputType
    _sum?: ScanSumAggregateInputType
    _min?: ScanMinAggregateInputType
    _max?: ScanMaxAggregateInputType
  }

  export type ScanGroupByOutputType = {
    id: number
    createdAt: Date
    gitRunId: string
    projectId: string
    _count: ScanCountAggregateOutputType | null
    _avg: ScanAvgAggregateOutputType | null
    _sum: ScanSumAggregateOutputType | null
    _min: ScanMinAggregateOutputType | null
    _max: ScanMaxAggregateOutputType | null
  }

  type GetScanGroupByPayload<T extends ScanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScanGroupByOutputType[P]>
            : GetScalarType<T[P], ScanGroupByOutputType[P]>
        }
      >
    >


  export type ScanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    gitRunId?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    analyzer?: boolean | Scan$analyzerArgs<ExtArgs>
    scanner?: boolean | Scan$scannerArgs<ExtArgs>
  }, ExtArgs["result"]["scan"]>



  export type ScanSelectScalar = {
    id?: boolean
    createdAt?: boolean
    gitRunId?: boolean
    projectId?: boolean
  }

  export type ScanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "gitRunId" | "projectId", ExtArgs["result"]["scan"]>
  export type ScanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    analyzer?: boolean | Scan$analyzerArgs<ExtArgs>
    scanner?: boolean | Scan$scannerArgs<ExtArgs>
  }

  export type $ScanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Scan"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      analyzer: Prisma.$AnalyzerPayload<ExtArgs> | null
      scanner: Prisma.$ScannerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      gitRunId: string
      projectId: string
    }, ExtArgs["result"]["scan"]>
    composites: {}
  }

  type ScanGetPayload<S extends boolean | null | undefined | ScanDefaultArgs> = $Result.GetResult<Prisma.$ScanPayload, S>

  type ScanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScanCountAggregateInputType | true
    }

  export interface ScanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Scan'], meta: { name: 'Scan' } }
    /**
     * Find zero or one Scan that matches the filter.
     * @param {ScanFindUniqueArgs} args - Arguments to find a Scan
     * @example
     * // Get one Scan
     * const scan = await prisma.scan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScanFindUniqueArgs>(args: SelectSubset<T, ScanFindUniqueArgs<ExtArgs>>): Prisma__ScanClient<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Scan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScanFindUniqueOrThrowArgs} args - Arguments to find a Scan
     * @example
     * // Get one Scan
     * const scan = await prisma.scan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScanFindUniqueOrThrowArgs>(args: SelectSubset<T, ScanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScanClient<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanFindFirstArgs} args - Arguments to find a Scan
     * @example
     * // Get one Scan
     * const scan = await prisma.scan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScanFindFirstArgs>(args?: SelectSubset<T, ScanFindFirstArgs<ExtArgs>>): Prisma__ScanClient<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanFindFirstOrThrowArgs} args - Arguments to find a Scan
     * @example
     * // Get one Scan
     * const scan = await prisma.scan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScanFindFirstOrThrowArgs>(args?: SelectSubset<T, ScanFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScanClient<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Scans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Scans
     * const scans = await prisma.scan.findMany()
     * 
     * // Get first 10 Scans
     * const scans = await prisma.scan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scanWithIdOnly = await prisma.scan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScanFindManyArgs>(args?: SelectSubset<T, ScanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Scan.
     * @param {ScanCreateArgs} args - Arguments to create a Scan.
     * @example
     * // Create one Scan
     * const Scan = await prisma.scan.create({
     *   data: {
     *     // ... data to create a Scan
     *   }
     * })
     * 
     */
    create<T extends ScanCreateArgs>(args: SelectSubset<T, ScanCreateArgs<ExtArgs>>): Prisma__ScanClient<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Scans.
     * @param {ScanCreateManyArgs} args - Arguments to create many Scans.
     * @example
     * // Create many Scans
     * const scan = await prisma.scan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScanCreateManyArgs>(args?: SelectSubset<T, ScanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Scan.
     * @param {ScanDeleteArgs} args - Arguments to delete one Scan.
     * @example
     * // Delete one Scan
     * const Scan = await prisma.scan.delete({
     *   where: {
     *     // ... filter to delete one Scan
     *   }
     * })
     * 
     */
    delete<T extends ScanDeleteArgs>(args: SelectSubset<T, ScanDeleteArgs<ExtArgs>>): Prisma__ScanClient<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Scan.
     * @param {ScanUpdateArgs} args - Arguments to update one Scan.
     * @example
     * // Update one Scan
     * const scan = await prisma.scan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScanUpdateArgs>(args: SelectSubset<T, ScanUpdateArgs<ExtArgs>>): Prisma__ScanClient<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Scans.
     * @param {ScanDeleteManyArgs} args - Arguments to filter Scans to delete.
     * @example
     * // Delete a few Scans
     * const { count } = await prisma.scan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScanDeleteManyArgs>(args?: SelectSubset<T, ScanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Scans
     * const scan = await prisma.scan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScanUpdateManyArgs>(args: SelectSubset<T, ScanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Scan.
     * @param {ScanUpsertArgs} args - Arguments to update or create a Scan.
     * @example
     * // Update or create a Scan
     * const scan = await prisma.scan.upsert({
     *   create: {
     *     // ... data to create a Scan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Scan we want to update
     *   }
     * })
     */
    upsert<T extends ScanUpsertArgs>(args: SelectSubset<T, ScanUpsertArgs<ExtArgs>>): Prisma__ScanClient<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Scans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanCountArgs} args - Arguments to filter Scans to count.
     * @example
     * // Count the number of Scans
     * const count = await prisma.scan.count({
     *   where: {
     *     // ... the filter for the Scans we want to count
     *   }
     * })
    **/
    count<T extends ScanCountArgs>(
      args?: Subset<T, ScanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Scan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScanAggregateArgs>(args: Subset<T, ScanAggregateArgs>): Prisma.PrismaPromise<GetScanAggregateType<T>>

    /**
     * Group by Scan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScanGroupByArgs['orderBy'] }
        : { orderBy?: ScanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Scan model
   */
  readonly fields: ScanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Scan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    analyzer<T extends Scan$analyzerArgs<ExtArgs> = {}>(args?: Subset<T, Scan$analyzerArgs<ExtArgs>>): Prisma__AnalyzerClient<$Result.GetResult<Prisma.$AnalyzerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    scanner<T extends Scan$scannerArgs<ExtArgs> = {}>(args?: Subset<T, Scan$scannerArgs<ExtArgs>>): Prisma__ScannerClient<$Result.GetResult<Prisma.$ScannerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Scan model
   */
  interface ScanFieldRefs {
    readonly id: FieldRef<"Scan", 'Int'>
    readonly createdAt: FieldRef<"Scan", 'DateTime'>
    readonly gitRunId: FieldRef<"Scan", 'String'>
    readonly projectId: FieldRef<"Scan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Scan findUnique
   */
  export type ScanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null
    /**
     * Filter, which Scan to fetch.
     */
    where: ScanWhereUniqueInput
  }

  /**
   * Scan findUniqueOrThrow
   */
  export type ScanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null
    /**
     * Filter, which Scan to fetch.
     */
    where: ScanWhereUniqueInput
  }

  /**
   * Scan findFirst
   */
  export type ScanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null
    /**
     * Filter, which Scan to fetch.
     */
    where?: ScanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scans to fetch.
     */
    orderBy?: ScanOrderByWithRelationInput | ScanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scans.
     */
    cursor?: ScanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scans.
     */
    distinct?: ScanScalarFieldEnum | ScanScalarFieldEnum[]
  }

  /**
   * Scan findFirstOrThrow
   */
  export type ScanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null
    /**
     * Filter, which Scan to fetch.
     */
    where?: ScanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scans to fetch.
     */
    orderBy?: ScanOrderByWithRelationInput | ScanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scans.
     */
    cursor?: ScanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scans.
     */
    distinct?: ScanScalarFieldEnum | ScanScalarFieldEnum[]
  }

  /**
   * Scan findMany
   */
  export type ScanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null
    /**
     * Filter, which Scans to fetch.
     */
    where?: ScanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scans to fetch.
     */
    orderBy?: ScanOrderByWithRelationInput | ScanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Scans.
     */
    cursor?: ScanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scans.
     */
    skip?: number
    distinct?: ScanScalarFieldEnum | ScanScalarFieldEnum[]
  }

  /**
   * Scan create
   */
  export type ScanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null
    /**
     * The data needed to create a Scan.
     */
    data: XOR<ScanCreateInput, ScanUncheckedCreateInput>
  }

  /**
   * Scan createMany
   */
  export type ScanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Scans.
     */
    data: ScanCreateManyInput | ScanCreateManyInput[]
  }

  /**
   * Scan update
   */
  export type ScanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null
    /**
     * The data needed to update a Scan.
     */
    data: XOR<ScanUpdateInput, ScanUncheckedUpdateInput>
    /**
     * Choose, which Scan to update.
     */
    where: ScanWhereUniqueInput
  }

  /**
   * Scan updateMany
   */
  export type ScanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Scans.
     */
    data: XOR<ScanUpdateManyMutationInput, ScanUncheckedUpdateManyInput>
    /**
     * Filter which Scans to update
     */
    where?: ScanWhereInput
    /**
     * Limit how many Scans to update.
     */
    limit?: number
  }

  /**
   * Scan upsert
   */
  export type ScanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null
    /**
     * The filter to search for the Scan to update in case it exists.
     */
    where: ScanWhereUniqueInput
    /**
     * In case the Scan found by the `where` argument doesn't exist, create a new Scan with this data.
     */
    create: XOR<ScanCreateInput, ScanUncheckedCreateInput>
    /**
     * In case the Scan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScanUpdateInput, ScanUncheckedUpdateInput>
  }

  /**
   * Scan delete
   */
  export type ScanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null
    /**
     * Filter which Scan to delete.
     */
    where: ScanWhereUniqueInput
  }

  /**
   * Scan deleteMany
   */
  export type ScanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scans to delete
     */
    where?: ScanWhereInput
    /**
     * Limit how many Scans to delete.
     */
    limit?: number
  }

  /**
   * Scan.analyzer
   */
  export type Scan$analyzerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analyzer
     */
    select?: AnalyzerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analyzer
     */
    omit?: AnalyzerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyzerInclude<ExtArgs> | null
    where?: AnalyzerWhereInput
  }

  /**
   * Scan.scanner
   */
  export type Scan$scannerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scanner
     */
    select?: ScannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scanner
     */
    omit?: ScannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScannerInclude<ExtArgs> | null
    where?: ScannerWhereInput
  }

  /**
   * Scan without action
   */
  export type ScanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null
  }


  /**
   * Model Analyzer
   */

  export type AggregateAnalyzer = {
    _count: AnalyzerCountAggregateOutputType | null
    _avg: AnalyzerAvgAggregateOutputType | null
    _sum: AnalyzerSumAggregateOutputType | null
    _min: AnalyzerMinAggregateOutputType | null
    _max: AnalyzerMaxAggregateOutputType | null
  }

  export type AnalyzerAvgAggregateOutputType = {
    id: number | null
    scanId: number | null
  }

  export type AnalyzerSumAggregateOutputType = {
    id: number | null
    scanId: number | null
  }

  export type AnalyzerMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    scanId: number | null
  }

  export type AnalyzerMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    scanId: number | null
  }

  export type AnalyzerCountAggregateOutputType = {
    id: number
    createdAt: number
    scanId: number
    _all: number
  }


  export type AnalyzerAvgAggregateInputType = {
    id?: true
    scanId?: true
  }

  export type AnalyzerSumAggregateInputType = {
    id?: true
    scanId?: true
  }

  export type AnalyzerMinAggregateInputType = {
    id?: true
    createdAt?: true
    scanId?: true
  }

  export type AnalyzerMaxAggregateInputType = {
    id?: true
    createdAt?: true
    scanId?: true
  }

  export type AnalyzerCountAggregateInputType = {
    id?: true
    createdAt?: true
    scanId?: true
    _all?: true
  }

  export type AnalyzerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Analyzer to aggregate.
     */
    where?: AnalyzerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analyzers to fetch.
     */
    orderBy?: AnalyzerOrderByWithRelationInput | AnalyzerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnalyzerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analyzers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analyzers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Analyzers
    **/
    _count?: true | AnalyzerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnalyzerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnalyzerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnalyzerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnalyzerMaxAggregateInputType
  }

  export type GetAnalyzerAggregateType<T extends AnalyzerAggregateArgs> = {
        [P in keyof T & keyof AggregateAnalyzer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnalyzer[P]>
      : GetScalarType<T[P], AggregateAnalyzer[P]>
  }




  export type AnalyzerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalyzerWhereInput
    orderBy?: AnalyzerOrderByWithAggregationInput | AnalyzerOrderByWithAggregationInput[]
    by: AnalyzerScalarFieldEnum[] | AnalyzerScalarFieldEnum
    having?: AnalyzerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnalyzerCountAggregateInputType | true
    _avg?: AnalyzerAvgAggregateInputType
    _sum?: AnalyzerSumAggregateInputType
    _min?: AnalyzerMinAggregateInputType
    _max?: AnalyzerMaxAggregateInputType
  }

  export type AnalyzerGroupByOutputType = {
    id: number
    createdAt: Date
    scanId: number
    _count: AnalyzerCountAggregateOutputType | null
    _avg: AnalyzerAvgAggregateOutputType | null
    _sum: AnalyzerSumAggregateOutputType | null
    _min: AnalyzerMinAggregateOutputType | null
    _max: AnalyzerMaxAggregateOutputType | null
  }

  type GetAnalyzerGroupByPayload<T extends AnalyzerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnalyzerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnalyzerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnalyzerGroupByOutputType[P]>
            : GetScalarType<T[P], AnalyzerGroupByOutputType[P]>
        }
      >
    >


  export type AnalyzerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    scanId?: boolean
    scan?: boolean | ScanDefaultArgs<ExtArgs>
    packages?: boolean | Analyzer$packagesArgs<ExtArgs>
    _count?: boolean | AnalyzerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analyzer"]>



  export type AnalyzerSelectScalar = {
    id?: boolean
    createdAt?: boolean
    scanId?: boolean
  }

  export type AnalyzerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "scanId", ExtArgs["result"]["analyzer"]>
  export type AnalyzerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scan?: boolean | ScanDefaultArgs<ExtArgs>
    packages?: boolean | Analyzer$packagesArgs<ExtArgs>
    _count?: boolean | AnalyzerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AnalyzerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Analyzer"
    objects: {
      scan: Prisma.$ScanPayload<ExtArgs>
      packages: Prisma.$AnalyzerPackagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      scanId: number
    }, ExtArgs["result"]["analyzer"]>
    composites: {}
  }

  type AnalyzerGetPayload<S extends boolean | null | undefined | AnalyzerDefaultArgs> = $Result.GetResult<Prisma.$AnalyzerPayload, S>

  type AnalyzerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnalyzerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnalyzerCountAggregateInputType | true
    }

  export interface AnalyzerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Analyzer'], meta: { name: 'Analyzer' } }
    /**
     * Find zero or one Analyzer that matches the filter.
     * @param {AnalyzerFindUniqueArgs} args - Arguments to find a Analyzer
     * @example
     * // Get one Analyzer
     * const analyzer = await prisma.analyzer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnalyzerFindUniqueArgs>(args: SelectSubset<T, AnalyzerFindUniqueArgs<ExtArgs>>): Prisma__AnalyzerClient<$Result.GetResult<Prisma.$AnalyzerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Analyzer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnalyzerFindUniqueOrThrowArgs} args - Arguments to find a Analyzer
     * @example
     * // Get one Analyzer
     * const analyzer = await prisma.analyzer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnalyzerFindUniqueOrThrowArgs>(args: SelectSubset<T, AnalyzerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnalyzerClient<$Result.GetResult<Prisma.$AnalyzerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Analyzer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyzerFindFirstArgs} args - Arguments to find a Analyzer
     * @example
     * // Get one Analyzer
     * const analyzer = await prisma.analyzer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnalyzerFindFirstArgs>(args?: SelectSubset<T, AnalyzerFindFirstArgs<ExtArgs>>): Prisma__AnalyzerClient<$Result.GetResult<Prisma.$AnalyzerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Analyzer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyzerFindFirstOrThrowArgs} args - Arguments to find a Analyzer
     * @example
     * // Get one Analyzer
     * const analyzer = await prisma.analyzer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnalyzerFindFirstOrThrowArgs>(args?: SelectSubset<T, AnalyzerFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnalyzerClient<$Result.GetResult<Prisma.$AnalyzerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Analyzers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyzerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Analyzers
     * const analyzers = await prisma.analyzer.findMany()
     * 
     * // Get first 10 Analyzers
     * const analyzers = await prisma.analyzer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const analyzerWithIdOnly = await prisma.analyzer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnalyzerFindManyArgs>(args?: SelectSubset<T, AnalyzerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyzerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Analyzer.
     * @param {AnalyzerCreateArgs} args - Arguments to create a Analyzer.
     * @example
     * // Create one Analyzer
     * const Analyzer = await prisma.analyzer.create({
     *   data: {
     *     // ... data to create a Analyzer
     *   }
     * })
     * 
     */
    create<T extends AnalyzerCreateArgs>(args: SelectSubset<T, AnalyzerCreateArgs<ExtArgs>>): Prisma__AnalyzerClient<$Result.GetResult<Prisma.$AnalyzerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Analyzers.
     * @param {AnalyzerCreateManyArgs} args - Arguments to create many Analyzers.
     * @example
     * // Create many Analyzers
     * const analyzer = await prisma.analyzer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnalyzerCreateManyArgs>(args?: SelectSubset<T, AnalyzerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Analyzer.
     * @param {AnalyzerDeleteArgs} args - Arguments to delete one Analyzer.
     * @example
     * // Delete one Analyzer
     * const Analyzer = await prisma.analyzer.delete({
     *   where: {
     *     // ... filter to delete one Analyzer
     *   }
     * })
     * 
     */
    delete<T extends AnalyzerDeleteArgs>(args: SelectSubset<T, AnalyzerDeleteArgs<ExtArgs>>): Prisma__AnalyzerClient<$Result.GetResult<Prisma.$AnalyzerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Analyzer.
     * @param {AnalyzerUpdateArgs} args - Arguments to update one Analyzer.
     * @example
     * // Update one Analyzer
     * const analyzer = await prisma.analyzer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnalyzerUpdateArgs>(args: SelectSubset<T, AnalyzerUpdateArgs<ExtArgs>>): Prisma__AnalyzerClient<$Result.GetResult<Prisma.$AnalyzerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Analyzers.
     * @param {AnalyzerDeleteManyArgs} args - Arguments to filter Analyzers to delete.
     * @example
     * // Delete a few Analyzers
     * const { count } = await prisma.analyzer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnalyzerDeleteManyArgs>(args?: SelectSubset<T, AnalyzerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Analyzers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyzerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Analyzers
     * const analyzer = await prisma.analyzer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnalyzerUpdateManyArgs>(args: SelectSubset<T, AnalyzerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Analyzer.
     * @param {AnalyzerUpsertArgs} args - Arguments to update or create a Analyzer.
     * @example
     * // Update or create a Analyzer
     * const analyzer = await prisma.analyzer.upsert({
     *   create: {
     *     // ... data to create a Analyzer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Analyzer we want to update
     *   }
     * })
     */
    upsert<T extends AnalyzerUpsertArgs>(args: SelectSubset<T, AnalyzerUpsertArgs<ExtArgs>>): Prisma__AnalyzerClient<$Result.GetResult<Prisma.$AnalyzerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Analyzers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyzerCountArgs} args - Arguments to filter Analyzers to count.
     * @example
     * // Count the number of Analyzers
     * const count = await prisma.analyzer.count({
     *   where: {
     *     // ... the filter for the Analyzers we want to count
     *   }
     * })
    **/
    count<T extends AnalyzerCountArgs>(
      args?: Subset<T, AnalyzerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnalyzerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Analyzer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyzerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnalyzerAggregateArgs>(args: Subset<T, AnalyzerAggregateArgs>): Prisma.PrismaPromise<GetAnalyzerAggregateType<T>>

    /**
     * Group by Analyzer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyzerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnalyzerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnalyzerGroupByArgs['orderBy'] }
        : { orderBy?: AnalyzerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnalyzerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalyzerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Analyzer model
   */
  readonly fields: AnalyzerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Analyzer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnalyzerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    scan<T extends ScanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScanDefaultArgs<ExtArgs>>): Prisma__ScanClient<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    packages<T extends Analyzer$packagesArgs<ExtArgs> = {}>(args?: Subset<T, Analyzer$packagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyzerPackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Analyzer model
   */
  interface AnalyzerFieldRefs {
    readonly id: FieldRef<"Analyzer", 'Int'>
    readonly createdAt: FieldRef<"Analyzer", 'DateTime'>
    readonly scanId: FieldRef<"Analyzer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Analyzer findUnique
   */
  export type AnalyzerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analyzer
     */
    select?: AnalyzerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analyzer
     */
    omit?: AnalyzerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyzerInclude<ExtArgs> | null
    /**
     * Filter, which Analyzer to fetch.
     */
    where: AnalyzerWhereUniqueInput
  }

  /**
   * Analyzer findUniqueOrThrow
   */
  export type AnalyzerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analyzer
     */
    select?: AnalyzerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analyzer
     */
    omit?: AnalyzerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyzerInclude<ExtArgs> | null
    /**
     * Filter, which Analyzer to fetch.
     */
    where: AnalyzerWhereUniqueInput
  }

  /**
   * Analyzer findFirst
   */
  export type AnalyzerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analyzer
     */
    select?: AnalyzerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analyzer
     */
    omit?: AnalyzerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyzerInclude<ExtArgs> | null
    /**
     * Filter, which Analyzer to fetch.
     */
    where?: AnalyzerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analyzers to fetch.
     */
    orderBy?: AnalyzerOrderByWithRelationInput | AnalyzerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Analyzers.
     */
    cursor?: AnalyzerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analyzers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analyzers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Analyzers.
     */
    distinct?: AnalyzerScalarFieldEnum | AnalyzerScalarFieldEnum[]
  }

  /**
   * Analyzer findFirstOrThrow
   */
  export type AnalyzerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analyzer
     */
    select?: AnalyzerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analyzer
     */
    omit?: AnalyzerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyzerInclude<ExtArgs> | null
    /**
     * Filter, which Analyzer to fetch.
     */
    where?: AnalyzerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analyzers to fetch.
     */
    orderBy?: AnalyzerOrderByWithRelationInput | AnalyzerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Analyzers.
     */
    cursor?: AnalyzerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analyzers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analyzers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Analyzers.
     */
    distinct?: AnalyzerScalarFieldEnum | AnalyzerScalarFieldEnum[]
  }

  /**
   * Analyzer findMany
   */
  export type AnalyzerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analyzer
     */
    select?: AnalyzerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analyzer
     */
    omit?: AnalyzerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyzerInclude<ExtArgs> | null
    /**
     * Filter, which Analyzers to fetch.
     */
    where?: AnalyzerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analyzers to fetch.
     */
    orderBy?: AnalyzerOrderByWithRelationInput | AnalyzerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Analyzers.
     */
    cursor?: AnalyzerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analyzers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analyzers.
     */
    skip?: number
    distinct?: AnalyzerScalarFieldEnum | AnalyzerScalarFieldEnum[]
  }

  /**
   * Analyzer create
   */
  export type AnalyzerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analyzer
     */
    select?: AnalyzerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analyzer
     */
    omit?: AnalyzerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyzerInclude<ExtArgs> | null
    /**
     * The data needed to create a Analyzer.
     */
    data: XOR<AnalyzerCreateInput, AnalyzerUncheckedCreateInput>
  }

  /**
   * Analyzer createMany
   */
  export type AnalyzerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Analyzers.
     */
    data: AnalyzerCreateManyInput | AnalyzerCreateManyInput[]
  }

  /**
   * Analyzer update
   */
  export type AnalyzerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analyzer
     */
    select?: AnalyzerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analyzer
     */
    omit?: AnalyzerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyzerInclude<ExtArgs> | null
    /**
     * The data needed to update a Analyzer.
     */
    data: XOR<AnalyzerUpdateInput, AnalyzerUncheckedUpdateInput>
    /**
     * Choose, which Analyzer to update.
     */
    where: AnalyzerWhereUniqueInput
  }

  /**
   * Analyzer updateMany
   */
  export type AnalyzerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Analyzers.
     */
    data: XOR<AnalyzerUpdateManyMutationInput, AnalyzerUncheckedUpdateManyInput>
    /**
     * Filter which Analyzers to update
     */
    where?: AnalyzerWhereInput
    /**
     * Limit how many Analyzers to update.
     */
    limit?: number
  }

  /**
   * Analyzer upsert
   */
  export type AnalyzerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analyzer
     */
    select?: AnalyzerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analyzer
     */
    omit?: AnalyzerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyzerInclude<ExtArgs> | null
    /**
     * The filter to search for the Analyzer to update in case it exists.
     */
    where: AnalyzerWhereUniqueInput
    /**
     * In case the Analyzer found by the `where` argument doesn't exist, create a new Analyzer with this data.
     */
    create: XOR<AnalyzerCreateInput, AnalyzerUncheckedCreateInput>
    /**
     * In case the Analyzer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnalyzerUpdateInput, AnalyzerUncheckedUpdateInput>
  }

  /**
   * Analyzer delete
   */
  export type AnalyzerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analyzer
     */
    select?: AnalyzerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analyzer
     */
    omit?: AnalyzerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyzerInclude<ExtArgs> | null
    /**
     * Filter which Analyzer to delete.
     */
    where: AnalyzerWhereUniqueInput
  }

  /**
   * Analyzer deleteMany
   */
  export type AnalyzerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Analyzers to delete
     */
    where?: AnalyzerWhereInput
    /**
     * Limit how many Analyzers to delete.
     */
    limit?: number
  }

  /**
   * Analyzer.packages
   */
  export type Analyzer$packagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyzerPackage
     */
    select?: AnalyzerPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyzerPackage
     */
    omit?: AnalyzerPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyzerPackageInclude<ExtArgs> | null
    where?: AnalyzerPackageWhereInput
    orderBy?: AnalyzerPackageOrderByWithRelationInput | AnalyzerPackageOrderByWithRelationInput[]
    cursor?: AnalyzerPackageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnalyzerPackageScalarFieldEnum | AnalyzerPackageScalarFieldEnum[]
  }

  /**
   * Analyzer without action
   */
  export type AnalyzerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analyzer
     */
    select?: AnalyzerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analyzer
     */
    omit?: AnalyzerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyzerInclude<ExtArgs> | null
  }


  /**
   * Model AnalyzerPackage
   */

  export type AggregateAnalyzerPackage = {
    _count: AnalyzerPackageCountAggregateOutputType | null
    _avg: AnalyzerPackageAvgAggregateOutputType | null
    _sum: AnalyzerPackageSumAggregateOutputType | null
    _min: AnalyzerPackageMinAggregateOutputType | null
    _max: AnalyzerPackageMaxAggregateOutputType | null
  }

  export type AnalyzerPackageAvgAggregateOutputType = {
    id: number | null
    analyzerId: number | null
  }

  export type AnalyzerPackageSumAggregateOutputType = {
    id: number | null
    analyzerId: number | null
  }

  export type AnalyzerPackageMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    packId: string | null
    purl: string | null
    description: string | null
    homepageUrl: string | null
    analyzerId: number | null
  }

  export type AnalyzerPackageMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    packId: string | null
    purl: string | null
    description: string | null
    homepageUrl: string | null
    analyzerId: number | null
  }

  export type AnalyzerPackageCountAggregateOutputType = {
    id: number
    createdAt: number
    packId: number
    purl: number
    description: number
    homepageUrl: number
    analyzerId: number
    _all: number
  }


  export type AnalyzerPackageAvgAggregateInputType = {
    id?: true
    analyzerId?: true
  }

  export type AnalyzerPackageSumAggregateInputType = {
    id?: true
    analyzerId?: true
  }

  export type AnalyzerPackageMinAggregateInputType = {
    id?: true
    createdAt?: true
    packId?: true
    purl?: true
    description?: true
    homepageUrl?: true
    analyzerId?: true
  }

  export type AnalyzerPackageMaxAggregateInputType = {
    id?: true
    createdAt?: true
    packId?: true
    purl?: true
    description?: true
    homepageUrl?: true
    analyzerId?: true
  }

  export type AnalyzerPackageCountAggregateInputType = {
    id?: true
    createdAt?: true
    packId?: true
    purl?: true
    description?: true
    homepageUrl?: true
    analyzerId?: true
    _all?: true
  }

  export type AnalyzerPackageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalyzerPackage to aggregate.
     */
    where?: AnalyzerPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyzerPackages to fetch.
     */
    orderBy?: AnalyzerPackageOrderByWithRelationInput | AnalyzerPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnalyzerPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyzerPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyzerPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnalyzerPackages
    **/
    _count?: true | AnalyzerPackageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnalyzerPackageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnalyzerPackageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnalyzerPackageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnalyzerPackageMaxAggregateInputType
  }

  export type GetAnalyzerPackageAggregateType<T extends AnalyzerPackageAggregateArgs> = {
        [P in keyof T & keyof AggregateAnalyzerPackage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnalyzerPackage[P]>
      : GetScalarType<T[P], AggregateAnalyzerPackage[P]>
  }




  export type AnalyzerPackageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalyzerPackageWhereInput
    orderBy?: AnalyzerPackageOrderByWithAggregationInput | AnalyzerPackageOrderByWithAggregationInput[]
    by: AnalyzerPackageScalarFieldEnum[] | AnalyzerPackageScalarFieldEnum
    having?: AnalyzerPackageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnalyzerPackageCountAggregateInputType | true
    _avg?: AnalyzerPackageAvgAggregateInputType
    _sum?: AnalyzerPackageSumAggregateInputType
    _min?: AnalyzerPackageMinAggregateInputType
    _max?: AnalyzerPackageMaxAggregateInputType
  }

  export type AnalyzerPackageGroupByOutputType = {
    id: number
    createdAt: Date
    packId: string
    purl: string
    description: string
    homepageUrl: string
    analyzerId: number
    _count: AnalyzerPackageCountAggregateOutputType | null
    _avg: AnalyzerPackageAvgAggregateOutputType | null
    _sum: AnalyzerPackageSumAggregateOutputType | null
    _min: AnalyzerPackageMinAggregateOutputType | null
    _max: AnalyzerPackageMaxAggregateOutputType | null
  }

  type GetAnalyzerPackageGroupByPayload<T extends AnalyzerPackageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnalyzerPackageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnalyzerPackageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnalyzerPackageGroupByOutputType[P]>
            : GetScalarType<T[P], AnalyzerPackageGroupByOutputType[P]>
        }
      >
    >


  export type AnalyzerPackageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    packId?: boolean
    purl?: boolean
    description?: boolean
    homepageUrl?: boolean
    analyzerId?: boolean
    analyzer?: boolean | AnalyzerDefaultArgs<ExtArgs>
    authors?: boolean | AnalyzerPackage$authorsArgs<ExtArgs>
    declaredLicenses?: boolean | AnalyzerPackage$declaredLicensesArgs<ExtArgs>
    declaredLicensesProcessed?: boolean | AnalyzerPackage$declaredLicensesProcessedArgs<ExtArgs>
    binaries?: boolean | AnalyzerPackage$binariesArgs<ExtArgs>
    sources?: boolean | AnalyzerPackage$sourcesArgs<ExtArgs>
    vcsList?: boolean | AnalyzerPackage$vcsListArgs<ExtArgs>
    vcsProcessed?: boolean | AnalyzerPackage$vcsProcessedArgs<ExtArgs>
    _count?: boolean | AnalyzerPackageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analyzerPackage"]>



  export type AnalyzerPackageSelectScalar = {
    id?: boolean
    createdAt?: boolean
    packId?: boolean
    purl?: boolean
    description?: boolean
    homepageUrl?: boolean
    analyzerId?: boolean
  }

  export type AnalyzerPackageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "packId" | "purl" | "description" | "homepageUrl" | "analyzerId", ExtArgs["result"]["analyzerPackage"]>
  export type AnalyzerPackageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    analyzer?: boolean | AnalyzerDefaultArgs<ExtArgs>
    authors?: boolean | AnalyzerPackage$authorsArgs<ExtArgs>
    declaredLicenses?: boolean | AnalyzerPackage$declaredLicensesArgs<ExtArgs>
    declaredLicensesProcessed?: boolean | AnalyzerPackage$declaredLicensesProcessedArgs<ExtArgs>
    binaries?: boolean | AnalyzerPackage$binariesArgs<ExtArgs>
    sources?: boolean | AnalyzerPackage$sourcesArgs<ExtArgs>
    vcsList?: boolean | AnalyzerPackage$vcsListArgs<ExtArgs>
    vcsProcessed?: boolean | AnalyzerPackage$vcsProcessedArgs<ExtArgs>
    _count?: boolean | AnalyzerPackageCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AnalyzerPackagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnalyzerPackage"
    objects: {
      analyzer: Prisma.$AnalyzerPayload<ExtArgs>
      authors: Prisma.$PackageAuthorPayload<ExtArgs>[]
      declaredLicenses: Prisma.$DeclaredLicensesPayload<ExtArgs>[]
      declaredLicensesProcessed: Prisma.$DeclaredLicensesProcessedPayload<ExtArgs>[]
      binaries: Prisma.$BinaryArtifactPayload<ExtArgs>[]
      sources: Prisma.$SourceArtifactPayload<ExtArgs>[]
      vcsList: Prisma.$VcsPayload<ExtArgs>[]
      vcsProcessed: Prisma.$VcsProcessedPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      packId: string
      purl: string
      description: string
      homepageUrl: string
      analyzerId: number
    }, ExtArgs["result"]["analyzerPackage"]>
    composites: {}
  }

  type AnalyzerPackageGetPayload<S extends boolean | null | undefined | AnalyzerPackageDefaultArgs> = $Result.GetResult<Prisma.$AnalyzerPackagePayload, S>

  type AnalyzerPackageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnalyzerPackageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnalyzerPackageCountAggregateInputType | true
    }

  export interface AnalyzerPackageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnalyzerPackage'], meta: { name: 'AnalyzerPackage' } }
    /**
     * Find zero or one AnalyzerPackage that matches the filter.
     * @param {AnalyzerPackageFindUniqueArgs} args - Arguments to find a AnalyzerPackage
     * @example
     * // Get one AnalyzerPackage
     * const analyzerPackage = await prisma.analyzerPackage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnalyzerPackageFindUniqueArgs>(args: SelectSubset<T, AnalyzerPackageFindUniqueArgs<ExtArgs>>): Prisma__AnalyzerPackageClient<$Result.GetResult<Prisma.$AnalyzerPackagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnalyzerPackage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnalyzerPackageFindUniqueOrThrowArgs} args - Arguments to find a AnalyzerPackage
     * @example
     * // Get one AnalyzerPackage
     * const analyzerPackage = await prisma.analyzerPackage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnalyzerPackageFindUniqueOrThrowArgs>(args: SelectSubset<T, AnalyzerPackageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnalyzerPackageClient<$Result.GetResult<Prisma.$AnalyzerPackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnalyzerPackage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyzerPackageFindFirstArgs} args - Arguments to find a AnalyzerPackage
     * @example
     * // Get one AnalyzerPackage
     * const analyzerPackage = await prisma.analyzerPackage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnalyzerPackageFindFirstArgs>(args?: SelectSubset<T, AnalyzerPackageFindFirstArgs<ExtArgs>>): Prisma__AnalyzerPackageClient<$Result.GetResult<Prisma.$AnalyzerPackagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnalyzerPackage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyzerPackageFindFirstOrThrowArgs} args - Arguments to find a AnalyzerPackage
     * @example
     * // Get one AnalyzerPackage
     * const analyzerPackage = await prisma.analyzerPackage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnalyzerPackageFindFirstOrThrowArgs>(args?: SelectSubset<T, AnalyzerPackageFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnalyzerPackageClient<$Result.GetResult<Prisma.$AnalyzerPackagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnalyzerPackages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyzerPackageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnalyzerPackages
     * const analyzerPackages = await prisma.analyzerPackage.findMany()
     * 
     * // Get first 10 AnalyzerPackages
     * const analyzerPackages = await prisma.analyzerPackage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const analyzerPackageWithIdOnly = await prisma.analyzerPackage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnalyzerPackageFindManyArgs>(args?: SelectSubset<T, AnalyzerPackageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyzerPackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnalyzerPackage.
     * @param {AnalyzerPackageCreateArgs} args - Arguments to create a AnalyzerPackage.
     * @example
     * // Create one AnalyzerPackage
     * const AnalyzerPackage = await prisma.analyzerPackage.create({
     *   data: {
     *     // ... data to create a AnalyzerPackage
     *   }
     * })
     * 
     */
    create<T extends AnalyzerPackageCreateArgs>(args: SelectSubset<T, AnalyzerPackageCreateArgs<ExtArgs>>): Prisma__AnalyzerPackageClient<$Result.GetResult<Prisma.$AnalyzerPackagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnalyzerPackages.
     * @param {AnalyzerPackageCreateManyArgs} args - Arguments to create many AnalyzerPackages.
     * @example
     * // Create many AnalyzerPackages
     * const analyzerPackage = await prisma.analyzerPackage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnalyzerPackageCreateManyArgs>(args?: SelectSubset<T, AnalyzerPackageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AnalyzerPackage.
     * @param {AnalyzerPackageDeleteArgs} args - Arguments to delete one AnalyzerPackage.
     * @example
     * // Delete one AnalyzerPackage
     * const AnalyzerPackage = await prisma.analyzerPackage.delete({
     *   where: {
     *     // ... filter to delete one AnalyzerPackage
     *   }
     * })
     * 
     */
    delete<T extends AnalyzerPackageDeleteArgs>(args: SelectSubset<T, AnalyzerPackageDeleteArgs<ExtArgs>>): Prisma__AnalyzerPackageClient<$Result.GetResult<Prisma.$AnalyzerPackagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnalyzerPackage.
     * @param {AnalyzerPackageUpdateArgs} args - Arguments to update one AnalyzerPackage.
     * @example
     * // Update one AnalyzerPackage
     * const analyzerPackage = await prisma.analyzerPackage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnalyzerPackageUpdateArgs>(args: SelectSubset<T, AnalyzerPackageUpdateArgs<ExtArgs>>): Prisma__AnalyzerPackageClient<$Result.GetResult<Prisma.$AnalyzerPackagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnalyzerPackages.
     * @param {AnalyzerPackageDeleteManyArgs} args - Arguments to filter AnalyzerPackages to delete.
     * @example
     * // Delete a few AnalyzerPackages
     * const { count } = await prisma.analyzerPackage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnalyzerPackageDeleteManyArgs>(args?: SelectSubset<T, AnalyzerPackageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalyzerPackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyzerPackageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnalyzerPackages
     * const analyzerPackage = await prisma.analyzerPackage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnalyzerPackageUpdateManyArgs>(args: SelectSubset<T, AnalyzerPackageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AnalyzerPackage.
     * @param {AnalyzerPackageUpsertArgs} args - Arguments to update or create a AnalyzerPackage.
     * @example
     * // Update or create a AnalyzerPackage
     * const analyzerPackage = await prisma.analyzerPackage.upsert({
     *   create: {
     *     // ... data to create a AnalyzerPackage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnalyzerPackage we want to update
     *   }
     * })
     */
    upsert<T extends AnalyzerPackageUpsertArgs>(args: SelectSubset<T, AnalyzerPackageUpsertArgs<ExtArgs>>): Prisma__AnalyzerPackageClient<$Result.GetResult<Prisma.$AnalyzerPackagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnalyzerPackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyzerPackageCountArgs} args - Arguments to filter AnalyzerPackages to count.
     * @example
     * // Count the number of AnalyzerPackages
     * const count = await prisma.analyzerPackage.count({
     *   where: {
     *     // ... the filter for the AnalyzerPackages we want to count
     *   }
     * })
    **/
    count<T extends AnalyzerPackageCountArgs>(
      args?: Subset<T, AnalyzerPackageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnalyzerPackageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnalyzerPackage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyzerPackageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnalyzerPackageAggregateArgs>(args: Subset<T, AnalyzerPackageAggregateArgs>): Prisma.PrismaPromise<GetAnalyzerPackageAggregateType<T>>

    /**
     * Group by AnalyzerPackage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyzerPackageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnalyzerPackageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnalyzerPackageGroupByArgs['orderBy'] }
        : { orderBy?: AnalyzerPackageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnalyzerPackageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalyzerPackageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnalyzerPackage model
   */
  readonly fields: AnalyzerPackageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnalyzerPackage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnalyzerPackageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    analyzer<T extends AnalyzerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnalyzerDefaultArgs<ExtArgs>>): Prisma__AnalyzerClient<$Result.GetResult<Prisma.$AnalyzerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    authors<T extends AnalyzerPackage$authorsArgs<ExtArgs> = {}>(args?: Subset<T, AnalyzerPackage$authorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackageAuthorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    declaredLicenses<T extends AnalyzerPackage$declaredLicensesArgs<ExtArgs> = {}>(args?: Subset<T, AnalyzerPackage$declaredLicensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeclaredLicensesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    declaredLicensesProcessed<T extends AnalyzerPackage$declaredLicensesProcessedArgs<ExtArgs> = {}>(args?: Subset<T, AnalyzerPackage$declaredLicensesProcessedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeclaredLicensesProcessedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    binaries<T extends AnalyzerPackage$binariesArgs<ExtArgs> = {}>(args?: Subset<T, AnalyzerPackage$binariesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BinaryArtifactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sources<T extends AnalyzerPackage$sourcesArgs<ExtArgs> = {}>(args?: Subset<T, AnalyzerPackage$sourcesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourceArtifactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vcsList<T extends AnalyzerPackage$vcsListArgs<ExtArgs> = {}>(args?: Subset<T, AnalyzerPackage$vcsListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VcsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vcsProcessed<T extends AnalyzerPackage$vcsProcessedArgs<ExtArgs> = {}>(args?: Subset<T, AnalyzerPackage$vcsProcessedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VcsProcessedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AnalyzerPackage model
   */
  interface AnalyzerPackageFieldRefs {
    readonly id: FieldRef<"AnalyzerPackage", 'Int'>
    readonly createdAt: FieldRef<"AnalyzerPackage", 'DateTime'>
    readonly packId: FieldRef<"AnalyzerPackage", 'String'>
    readonly purl: FieldRef<"AnalyzerPackage", 'String'>
    readonly description: FieldRef<"AnalyzerPackage", 'String'>
    readonly homepageUrl: FieldRef<"AnalyzerPackage", 'String'>
    readonly analyzerId: FieldRef<"AnalyzerPackage", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AnalyzerPackage findUnique
   */
  export type AnalyzerPackageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyzerPackage
     */
    select?: AnalyzerPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyzerPackage
     */
    omit?: AnalyzerPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyzerPackageInclude<ExtArgs> | null
    /**
     * Filter, which AnalyzerPackage to fetch.
     */
    where: AnalyzerPackageWhereUniqueInput
  }

  /**
   * AnalyzerPackage findUniqueOrThrow
   */
  export type AnalyzerPackageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyzerPackage
     */
    select?: AnalyzerPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyzerPackage
     */
    omit?: AnalyzerPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyzerPackageInclude<ExtArgs> | null
    /**
     * Filter, which AnalyzerPackage to fetch.
     */
    where: AnalyzerPackageWhereUniqueInput
  }

  /**
   * AnalyzerPackage findFirst
   */
  export type AnalyzerPackageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyzerPackage
     */
    select?: AnalyzerPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyzerPackage
     */
    omit?: AnalyzerPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyzerPackageInclude<ExtArgs> | null
    /**
     * Filter, which AnalyzerPackage to fetch.
     */
    where?: AnalyzerPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyzerPackages to fetch.
     */
    orderBy?: AnalyzerPackageOrderByWithRelationInput | AnalyzerPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalyzerPackages.
     */
    cursor?: AnalyzerPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyzerPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyzerPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalyzerPackages.
     */
    distinct?: AnalyzerPackageScalarFieldEnum | AnalyzerPackageScalarFieldEnum[]
  }

  /**
   * AnalyzerPackage findFirstOrThrow
   */
  export type AnalyzerPackageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyzerPackage
     */
    select?: AnalyzerPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyzerPackage
     */
    omit?: AnalyzerPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyzerPackageInclude<ExtArgs> | null
    /**
     * Filter, which AnalyzerPackage to fetch.
     */
    where?: AnalyzerPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyzerPackages to fetch.
     */
    orderBy?: AnalyzerPackageOrderByWithRelationInput | AnalyzerPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalyzerPackages.
     */
    cursor?: AnalyzerPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyzerPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyzerPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalyzerPackages.
     */
    distinct?: AnalyzerPackageScalarFieldEnum | AnalyzerPackageScalarFieldEnum[]
  }

  /**
   * AnalyzerPackage findMany
   */
  export type AnalyzerPackageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyzerPackage
     */
    select?: AnalyzerPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyzerPackage
     */
    omit?: AnalyzerPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyzerPackageInclude<ExtArgs> | null
    /**
     * Filter, which AnalyzerPackages to fetch.
     */
    where?: AnalyzerPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyzerPackages to fetch.
     */
    orderBy?: AnalyzerPackageOrderByWithRelationInput | AnalyzerPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnalyzerPackages.
     */
    cursor?: AnalyzerPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyzerPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyzerPackages.
     */
    skip?: number
    distinct?: AnalyzerPackageScalarFieldEnum | AnalyzerPackageScalarFieldEnum[]
  }

  /**
   * AnalyzerPackage create
   */
  export type AnalyzerPackageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyzerPackage
     */
    select?: AnalyzerPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyzerPackage
     */
    omit?: AnalyzerPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyzerPackageInclude<ExtArgs> | null
    /**
     * The data needed to create a AnalyzerPackage.
     */
    data: XOR<AnalyzerPackageCreateInput, AnalyzerPackageUncheckedCreateInput>
  }

  /**
   * AnalyzerPackage createMany
   */
  export type AnalyzerPackageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnalyzerPackages.
     */
    data: AnalyzerPackageCreateManyInput | AnalyzerPackageCreateManyInput[]
  }

  /**
   * AnalyzerPackage update
   */
  export type AnalyzerPackageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyzerPackage
     */
    select?: AnalyzerPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyzerPackage
     */
    omit?: AnalyzerPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyzerPackageInclude<ExtArgs> | null
    /**
     * The data needed to update a AnalyzerPackage.
     */
    data: XOR<AnalyzerPackageUpdateInput, AnalyzerPackageUncheckedUpdateInput>
    /**
     * Choose, which AnalyzerPackage to update.
     */
    where: AnalyzerPackageWhereUniqueInput
  }

  /**
   * AnalyzerPackage updateMany
   */
  export type AnalyzerPackageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnalyzerPackages.
     */
    data: XOR<AnalyzerPackageUpdateManyMutationInput, AnalyzerPackageUncheckedUpdateManyInput>
    /**
     * Filter which AnalyzerPackages to update
     */
    where?: AnalyzerPackageWhereInput
    /**
     * Limit how many AnalyzerPackages to update.
     */
    limit?: number
  }

  /**
   * AnalyzerPackage upsert
   */
  export type AnalyzerPackageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyzerPackage
     */
    select?: AnalyzerPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyzerPackage
     */
    omit?: AnalyzerPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyzerPackageInclude<ExtArgs> | null
    /**
     * The filter to search for the AnalyzerPackage to update in case it exists.
     */
    where: AnalyzerPackageWhereUniqueInput
    /**
     * In case the AnalyzerPackage found by the `where` argument doesn't exist, create a new AnalyzerPackage with this data.
     */
    create: XOR<AnalyzerPackageCreateInput, AnalyzerPackageUncheckedCreateInput>
    /**
     * In case the AnalyzerPackage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnalyzerPackageUpdateInput, AnalyzerPackageUncheckedUpdateInput>
  }

  /**
   * AnalyzerPackage delete
   */
  export type AnalyzerPackageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyzerPackage
     */
    select?: AnalyzerPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyzerPackage
     */
    omit?: AnalyzerPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyzerPackageInclude<ExtArgs> | null
    /**
     * Filter which AnalyzerPackage to delete.
     */
    where: AnalyzerPackageWhereUniqueInput
  }

  /**
   * AnalyzerPackage deleteMany
   */
  export type AnalyzerPackageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalyzerPackages to delete
     */
    where?: AnalyzerPackageWhereInput
    /**
     * Limit how many AnalyzerPackages to delete.
     */
    limit?: number
  }

  /**
   * AnalyzerPackage.authors
   */
  export type AnalyzerPackage$authorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageAuthor
     */
    select?: PackageAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageAuthor
     */
    omit?: PackageAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageAuthorInclude<ExtArgs> | null
    where?: PackageAuthorWhereInput
    orderBy?: PackageAuthorOrderByWithRelationInput | PackageAuthorOrderByWithRelationInput[]
    cursor?: PackageAuthorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PackageAuthorScalarFieldEnum | PackageAuthorScalarFieldEnum[]
  }

  /**
   * AnalyzerPackage.declaredLicenses
   */
  export type AnalyzerPackage$declaredLicensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclaredLicenses
     */
    select?: DeclaredLicensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclaredLicenses
     */
    omit?: DeclaredLicensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeclaredLicensesInclude<ExtArgs> | null
    where?: DeclaredLicensesWhereInput
    orderBy?: DeclaredLicensesOrderByWithRelationInput | DeclaredLicensesOrderByWithRelationInput[]
    cursor?: DeclaredLicensesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeclaredLicensesScalarFieldEnum | DeclaredLicensesScalarFieldEnum[]
  }

  /**
   * AnalyzerPackage.declaredLicensesProcessed
   */
  export type AnalyzerPackage$declaredLicensesProcessedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclaredLicensesProcessed
     */
    select?: DeclaredLicensesProcessedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclaredLicensesProcessed
     */
    omit?: DeclaredLicensesProcessedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeclaredLicensesProcessedInclude<ExtArgs> | null
    where?: DeclaredLicensesProcessedWhereInput
    orderBy?: DeclaredLicensesProcessedOrderByWithRelationInput | DeclaredLicensesProcessedOrderByWithRelationInput[]
    cursor?: DeclaredLicensesProcessedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeclaredLicensesProcessedScalarFieldEnum | DeclaredLicensesProcessedScalarFieldEnum[]
  }

  /**
   * AnalyzerPackage.binaries
   */
  export type AnalyzerPackage$binariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BinaryArtifact
     */
    select?: BinaryArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BinaryArtifact
     */
    omit?: BinaryArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinaryArtifactInclude<ExtArgs> | null
    where?: BinaryArtifactWhereInput
    orderBy?: BinaryArtifactOrderByWithRelationInput | BinaryArtifactOrderByWithRelationInput[]
    cursor?: BinaryArtifactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BinaryArtifactScalarFieldEnum | BinaryArtifactScalarFieldEnum[]
  }

  /**
   * AnalyzerPackage.sources
   */
  export type AnalyzerPackage$sourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceArtifact
     */
    select?: SourceArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceArtifact
     */
    omit?: SourceArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceArtifactInclude<ExtArgs> | null
    where?: SourceArtifactWhereInput
    orderBy?: SourceArtifactOrderByWithRelationInput | SourceArtifactOrderByWithRelationInput[]
    cursor?: SourceArtifactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SourceArtifactScalarFieldEnum | SourceArtifactScalarFieldEnum[]
  }

  /**
   * AnalyzerPackage.vcsList
   */
  export type AnalyzerPackage$vcsListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vcs
     */
    select?: VcsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vcs
     */
    omit?: VcsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VcsInclude<ExtArgs> | null
    where?: VcsWhereInput
    orderBy?: VcsOrderByWithRelationInput | VcsOrderByWithRelationInput[]
    cursor?: VcsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VcsScalarFieldEnum | VcsScalarFieldEnum[]
  }

  /**
   * AnalyzerPackage.vcsProcessed
   */
  export type AnalyzerPackage$vcsProcessedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VcsProcessed
     */
    select?: VcsProcessedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VcsProcessed
     */
    omit?: VcsProcessedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VcsProcessedInclude<ExtArgs> | null
    where?: VcsProcessedWhereInput
    orderBy?: VcsProcessedOrderByWithRelationInput | VcsProcessedOrderByWithRelationInput[]
    cursor?: VcsProcessedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VcsProcessedScalarFieldEnum | VcsProcessedScalarFieldEnum[]
  }

  /**
   * AnalyzerPackage without action
   */
  export type AnalyzerPackageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyzerPackage
     */
    select?: AnalyzerPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyzerPackage
     */
    omit?: AnalyzerPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyzerPackageInclude<ExtArgs> | null
  }


  /**
   * Model PackageAuthor
   */

  export type AggregatePackageAuthor = {
    _count: PackageAuthorCountAggregateOutputType | null
    _avg: PackageAuthorAvgAggregateOutputType | null
    _sum: PackageAuthorSumAggregateOutputType | null
    _min: PackageAuthorMinAggregateOutputType | null
    _max: PackageAuthorMaxAggregateOutputType | null
  }

  export type PackageAuthorAvgAggregateOutputType = {
    id: number | null
    packageId: number | null
  }

  export type PackageAuthorSumAggregateOutputType = {
    id: number | null
    packageId: number | null
  }

  export type PackageAuthorMinAggregateOutputType = {
    id: number | null
    name: string | null
    packageId: number | null
  }

  export type PackageAuthorMaxAggregateOutputType = {
    id: number | null
    name: string | null
    packageId: number | null
  }

  export type PackageAuthorCountAggregateOutputType = {
    id: number
    name: number
    packageId: number
    _all: number
  }


  export type PackageAuthorAvgAggregateInputType = {
    id?: true
    packageId?: true
  }

  export type PackageAuthorSumAggregateInputType = {
    id?: true
    packageId?: true
  }

  export type PackageAuthorMinAggregateInputType = {
    id?: true
    name?: true
    packageId?: true
  }

  export type PackageAuthorMaxAggregateInputType = {
    id?: true
    name?: true
    packageId?: true
  }

  export type PackageAuthorCountAggregateInputType = {
    id?: true
    name?: true
    packageId?: true
    _all?: true
  }

  export type PackageAuthorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PackageAuthor to aggregate.
     */
    where?: PackageAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackageAuthors to fetch.
     */
    orderBy?: PackageAuthorOrderByWithRelationInput | PackageAuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PackageAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackageAuthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackageAuthors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PackageAuthors
    **/
    _count?: true | PackageAuthorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PackageAuthorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PackageAuthorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PackageAuthorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PackageAuthorMaxAggregateInputType
  }

  export type GetPackageAuthorAggregateType<T extends PackageAuthorAggregateArgs> = {
        [P in keyof T & keyof AggregatePackageAuthor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePackageAuthor[P]>
      : GetScalarType<T[P], AggregatePackageAuthor[P]>
  }




  export type PackageAuthorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageAuthorWhereInput
    orderBy?: PackageAuthorOrderByWithAggregationInput | PackageAuthorOrderByWithAggregationInput[]
    by: PackageAuthorScalarFieldEnum[] | PackageAuthorScalarFieldEnum
    having?: PackageAuthorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PackageAuthorCountAggregateInputType | true
    _avg?: PackageAuthorAvgAggregateInputType
    _sum?: PackageAuthorSumAggregateInputType
    _min?: PackageAuthorMinAggregateInputType
    _max?: PackageAuthorMaxAggregateInputType
  }

  export type PackageAuthorGroupByOutputType = {
    id: number
    name: string
    packageId: number
    _count: PackageAuthorCountAggregateOutputType | null
    _avg: PackageAuthorAvgAggregateOutputType | null
    _sum: PackageAuthorSumAggregateOutputType | null
    _min: PackageAuthorMinAggregateOutputType | null
    _max: PackageAuthorMaxAggregateOutputType | null
  }

  type GetPackageAuthorGroupByPayload<T extends PackageAuthorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PackageAuthorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PackageAuthorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PackageAuthorGroupByOutputType[P]>
            : GetScalarType<T[P], PackageAuthorGroupByOutputType[P]>
        }
      >
    >


  export type PackageAuthorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    packageId?: boolean
    analyzerPackage?: boolean | AnalyzerPackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["packageAuthor"]>



  export type PackageAuthorSelectScalar = {
    id?: boolean
    name?: boolean
    packageId?: boolean
  }

  export type PackageAuthorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "packageId", ExtArgs["result"]["packageAuthor"]>
  export type PackageAuthorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    analyzerPackage?: boolean | AnalyzerPackageDefaultArgs<ExtArgs>
  }

  export type $PackageAuthorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PackageAuthor"
    objects: {
      analyzerPackage: Prisma.$AnalyzerPackagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      packageId: number
    }, ExtArgs["result"]["packageAuthor"]>
    composites: {}
  }

  type PackageAuthorGetPayload<S extends boolean | null | undefined | PackageAuthorDefaultArgs> = $Result.GetResult<Prisma.$PackageAuthorPayload, S>

  type PackageAuthorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PackageAuthorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PackageAuthorCountAggregateInputType | true
    }

  export interface PackageAuthorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PackageAuthor'], meta: { name: 'PackageAuthor' } }
    /**
     * Find zero or one PackageAuthor that matches the filter.
     * @param {PackageAuthorFindUniqueArgs} args - Arguments to find a PackageAuthor
     * @example
     * // Get one PackageAuthor
     * const packageAuthor = await prisma.packageAuthor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PackageAuthorFindUniqueArgs>(args: SelectSubset<T, PackageAuthorFindUniqueArgs<ExtArgs>>): Prisma__PackageAuthorClient<$Result.GetResult<Prisma.$PackageAuthorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PackageAuthor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PackageAuthorFindUniqueOrThrowArgs} args - Arguments to find a PackageAuthor
     * @example
     * // Get one PackageAuthor
     * const packageAuthor = await prisma.packageAuthor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PackageAuthorFindUniqueOrThrowArgs>(args: SelectSubset<T, PackageAuthorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PackageAuthorClient<$Result.GetResult<Prisma.$PackageAuthorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PackageAuthor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageAuthorFindFirstArgs} args - Arguments to find a PackageAuthor
     * @example
     * // Get one PackageAuthor
     * const packageAuthor = await prisma.packageAuthor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PackageAuthorFindFirstArgs>(args?: SelectSubset<T, PackageAuthorFindFirstArgs<ExtArgs>>): Prisma__PackageAuthorClient<$Result.GetResult<Prisma.$PackageAuthorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PackageAuthor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageAuthorFindFirstOrThrowArgs} args - Arguments to find a PackageAuthor
     * @example
     * // Get one PackageAuthor
     * const packageAuthor = await prisma.packageAuthor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PackageAuthorFindFirstOrThrowArgs>(args?: SelectSubset<T, PackageAuthorFindFirstOrThrowArgs<ExtArgs>>): Prisma__PackageAuthorClient<$Result.GetResult<Prisma.$PackageAuthorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PackageAuthors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageAuthorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PackageAuthors
     * const packageAuthors = await prisma.packageAuthor.findMany()
     * 
     * // Get first 10 PackageAuthors
     * const packageAuthors = await prisma.packageAuthor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const packageAuthorWithIdOnly = await prisma.packageAuthor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PackageAuthorFindManyArgs>(args?: SelectSubset<T, PackageAuthorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackageAuthorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PackageAuthor.
     * @param {PackageAuthorCreateArgs} args - Arguments to create a PackageAuthor.
     * @example
     * // Create one PackageAuthor
     * const PackageAuthor = await prisma.packageAuthor.create({
     *   data: {
     *     // ... data to create a PackageAuthor
     *   }
     * })
     * 
     */
    create<T extends PackageAuthorCreateArgs>(args: SelectSubset<T, PackageAuthorCreateArgs<ExtArgs>>): Prisma__PackageAuthorClient<$Result.GetResult<Prisma.$PackageAuthorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PackageAuthors.
     * @param {PackageAuthorCreateManyArgs} args - Arguments to create many PackageAuthors.
     * @example
     * // Create many PackageAuthors
     * const packageAuthor = await prisma.packageAuthor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PackageAuthorCreateManyArgs>(args?: SelectSubset<T, PackageAuthorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PackageAuthor.
     * @param {PackageAuthorDeleteArgs} args - Arguments to delete one PackageAuthor.
     * @example
     * // Delete one PackageAuthor
     * const PackageAuthor = await prisma.packageAuthor.delete({
     *   where: {
     *     // ... filter to delete one PackageAuthor
     *   }
     * })
     * 
     */
    delete<T extends PackageAuthorDeleteArgs>(args: SelectSubset<T, PackageAuthorDeleteArgs<ExtArgs>>): Prisma__PackageAuthorClient<$Result.GetResult<Prisma.$PackageAuthorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PackageAuthor.
     * @param {PackageAuthorUpdateArgs} args - Arguments to update one PackageAuthor.
     * @example
     * // Update one PackageAuthor
     * const packageAuthor = await prisma.packageAuthor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PackageAuthorUpdateArgs>(args: SelectSubset<T, PackageAuthorUpdateArgs<ExtArgs>>): Prisma__PackageAuthorClient<$Result.GetResult<Prisma.$PackageAuthorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PackageAuthors.
     * @param {PackageAuthorDeleteManyArgs} args - Arguments to filter PackageAuthors to delete.
     * @example
     * // Delete a few PackageAuthors
     * const { count } = await prisma.packageAuthor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PackageAuthorDeleteManyArgs>(args?: SelectSubset<T, PackageAuthorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PackageAuthors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageAuthorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PackageAuthors
     * const packageAuthor = await prisma.packageAuthor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PackageAuthorUpdateManyArgs>(args: SelectSubset<T, PackageAuthorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PackageAuthor.
     * @param {PackageAuthorUpsertArgs} args - Arguments to update or create a PackageAuthor.
     * @example
     * // Update or create a PackageAuthor
     * const packageAuthor = await prisma.packageAuthor.upsert({
     *   create: {
     *     // ... data to create a PackageAuthor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PackageAuthor we want to update
     *   }
     * })
     */
    upsert<T extends PackageAuthorUpsertArgs>(args: SelectSubset<T, PackageAuthorUpsertArgs<ExtArgs>>): Prisma__PackageAuthorClient<$Result.GetResult<Prisma.$PackageAuthorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PackageAuthors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageAuthorCountArgs} args - Arguments to filter PackageAuthors to count.
     * @example
     * // Count the number of PackageAuthors
     * const count = await prisma.packageAuthor.count({
     *   where: {
     *     // ... the filter for the PackageAuthors we want to count
     *   }
     * })
    **/
    count<T extends PackageAuthorCountArgs>(
      args?: Subset<T, PackageAuthorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PackageAuthorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PackageAuthor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageAuthorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PackageAuthorAggregateArgs>(args: Subset<T, PackageAuthorAggregateArgs>): Prisma.PrismaPromise<GetPackageAuthorAggregateType<T>>

    /**
     * Group by PackageAuthor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageAuthorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PackageAuthorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PackageAuthorGroupByArgs['orderBy'] }
        : { orderBy?: PackageAuthorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PackageAuthorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPackageAuthorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PackageAuthor model
   */
  readonly fields: PackageAuthorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PackageAuthor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PackageAuthorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    analyzerPackage<T extends AnalyzerPackageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnalyzerPackageDefaultArgs<ExtArgs>>): Prisma__AnalyzerPackageClient<$Result.GetResult<Prisma.$AnalyzerPackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PackageAuthor model
   */
  interface PackageAuthorFieldRefs {
    readonly id: FieldRef<"PackageAuthor", 'Int'>
    readonly name: FieldRef<"PackageAuthor", 'String'>
    readonly packageId: FieldRef<"PackageAuthor", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PackageAuthor findUnique
   */
  export type PackageAuthorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageAuthor
     */
    select?: PackageAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageAuthor
     */
    omit?: PackageAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageAuthorInclude<ExtArgs> | null
    /**
     * Filter, which PackageAuthor to fetch.
     */
    where: PackageAuthorWhereUniqueInput
  }

  /**
   * PackageAuthor findUniqueOrThrow
   */
  export type PackageAuthorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageAuthor
     */
    select?: PackageAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageAuthor
     */
    omit?: PackageAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageAuthorInclude<ExtArgs> | null
    /**
     * Filter, which PackageAuthor to fetch.
     */
    where: PackageAuthorWhereUniqueInput
  }

  /**
   * PackageAuthor findFirst
   */
  export type PackageAuthorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageAuthor
     */
    select?: PackageAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageAuthor
     */
    omit?: PackageAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageAuthorInclude<ExtArgs> | null
    /**
     * Filter, which PackageAuthor to fetch.
     */
    where?: PackageAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackageAuthors to fetch.
     */
    orderBy?: PackageAuthorOrderByWithRelationInput | PackageAuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PackageAuthors.
     */
    cursor?: PackageAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackageAuthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackageAuthors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PackageAuthors.
     */
    distinct?: PackageAuthorScalarFieldEnum | PackageAuthorScalarFieldEnum[]
  }

  /**
   * PackageAuthor findFirstOrThrow
   */
  export type PackageAuthorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageAuthor
     */
    select?: PackageAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageAuthor
     */
    omit?: PackageAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageAuthorInclude<ExtArgs> | null
    /**
     * Filter, which PackageAuthor to fetch.
     */
    where?: PackageAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackageAuthors to fetch.
     */
    orderBy?: PackageAuthorOrderByWithRelationInput | PackageAuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PackageAuthors.
     */
    cursor?: PackageAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackageAuthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackageAuthors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PackageAuthors.
     */
    distinct?: PackageAuthorScalarFieldEnum | PackageAuthorScalarFieldEnum[]
  }

  /**
   * PackageAuthor findMany
   */
  export type PackageAuthorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageAuthor
     */
    select?: PackageAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageAuthor
     */
    omit?: PackageAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageAuthorInclude<ExtArgs> | null
    /**
     * Filter, which PackageAuthors to fetch.
     */
    where?: PackageAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackageAuthors to fetch.
     */
    orderBy?: PackageAuthorOrderByWithRelationInput | PackageAuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PackageAuthors.
     */
    cursor?: PackageAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackageAuthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackageAuthors.
     */
    skip?: number
    distinct?: PackageAuthorScalarFieldEnum | PackageAuthorScalarFieldEnum[]
  }

  /**
   * PackageAuthor create
   */
  export type PackageAuthorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageAuthor
     */
    select?: PackageAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageAuthor
     */
    omit?: PackageAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageAuthorInclude<ExtArgs> | null
    /**
     * The data needed to create a PackageAuthor.
     */
    data: XOR<PackageAuthorCreateInput, PackageAuthorUncheckedCreateInput>
  }

  /**
   * PackageAuthor createMany
   */
  export type PackageAuthorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PackageAuthors.
     */
    data: PackageAuthorCreateManyInput | PackageAuthorCreateManyInput[]
  }

  /**
   * PackageAuthor update
   */
  export type PackageAuthorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageAuthor
     */
    select?: PackageAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageAuthor
     */
    omit?: PackageAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageAuthorInclude<ExtArgs> | null
    /**
     * The data needed to update a PackageAuthor.
     */
    data: XOR<PackageAuthorUpdateInput, PackageAuthorUncheckedUpdateInput>
    /**
     * Choose, which PackageAuthor to update.
     */
    where: PackageAuthorWhereUniqueInput
  }

  /**
   * PackageAuthor updateMany
   */
  export type PackageAuthorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PackageAuthors.
     */
    data: XOR<PackageAuthorUpdateManyMutationInput, PackageAuthorUncheckedUpdateManyInput>
    /**
     * Filter which PackageAuthors to update
     */
    where?: PackageAuthorWhereInput
    /**
     * Limit how many PackageAuthors to update.
     */
    limit?: number
  }

  /**
   * PackageAuthor upsert
   */
  export type PackageAuthorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageAuthor
     */
    select?: PackageAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageAuthor
     */
    omit?: PackageAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageAuthorInclude<ExtArgs> | null
    /**
     * The filter to search for the PackageAuthor to update in case it exists.
     */
    where: PackageAuthorWhereUniqueInput
    /**
     * In case the PackageAuthor found by the `where` argument doesn't exist, create a new PackageAuthor with this data.
     */
    create: XOR<PackageAuthorCreateInput, PackageAuthorUncheckedCreateInput>
    /**
     * In case the PackageAuthor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PackageAuthorUpdateInput, PackageAuthorUncheckedUpdateInput>
  }

  /**
   * PackageAuthor delete
   */
  export type PackageAuthorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageAuthor
     */
    select?: PackageAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageAuthor
     */
    omit?: PackageAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageAuthorInclude<ExtArgs> | null
    /**
     * Filter which PackageAuthor to delete.
     */
    where: PackageAuthorWhereUniqueInput
  }

  /**
   * PackageAuthor deleteMany
   */
  export type PackageAuthorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PackageAuthors to delete
     */
    where?: PackageAuthorWhereInput
    /**
     * Limit how many PackageAuthors to delete.
     */
    limit?: number
  }

  /**
   * PackageAuthor without action
   */
  export type PackageAuthorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageAuthor
     */
    select?: PackageAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageAuthor
     */
    omit?: PackageAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageAuthorInclude<ExtArgs> | null
  }


  /**
   * Model DeclaredLicenses
   */

  export type AggregateDeclaredLicenses = {
    _count: DeclaredLicensesCountAggregateOutputType | null
    _avg: DeclaredLicensesAvgAggregateOutputType | null
    _sum: DeclaredLicensesSumAggregateOutputType | null
    _min: DeclaredLicensesMinAggregateOutputType | null
    _max: DeclaredLicensesMaxAggregateOutputType | null
  }

  export type DeclaredLicensesAvgAggregateOutputType = {
    id: number | null
    packageId: number | null
  }

  export type DeclaredLicensesSumAggregateOutputType = {
    id: number | null
    packageId: number | null
  }

  export type DeclaredLicensesMinAggregateOutputType = {
    id: number | null
    name: string | null
    packageId: number | null
  }

  export type DeclaredLicensesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    packageId: number | null
  }

  export type DeclaredLicensesCountAggregateOutputType = {
    id: number
    name: number
    packageId: number
    _all: number
  }


  export type DeclaredLicensesAvgAggregateInputType = {
    id?: true
    packageId?: true
  }

  export type DeclaredLicensesSumAggregateInputType = {
    id?: true
    packageId?: true
  }

  export type DeclaredLicensesMinAggregateInputType = {
    id?: true
    name?: true
    packageId?: true
  }

  export type DeclaredLicensesMaxAggregateInputType = {
    id?: true
    name?: true
    packageId?: true
  }

  export type DeclaredLicensesCountAggregateInputType = {
    id?: true
    name?: true
    packageId?: true
    _all?: true
  }

  export type DeclaredLicensesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeclaredLicenses to aggregate.
     */
    where?: DeclaredLicensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeclaredLicenses to fetch.
     */
    orderBy?: DeclaredLicensesOrderByWithRelationInput | DeclaredLicensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeclaredLicensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeclaredLicenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeclaredLicenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeclaredLicenses
    **/
    _count?: true | DeclaredLicensesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeclaredLicensesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeclaredLicensesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeclaredLicensesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeclaredLicensesMaxAggregateInputType
  }

  export type GetDeclaredLicensesAggregateType<T extends DeclaredLicensesAggregateArgs> = {
        [P in keyof T & keyof AggregateDeclaredLicenses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeclaredLicenses[P]>
      : GetScalarType<T[P], AggregateDeclaredLicenses[P]>
  }




  export type DeclaredLicensesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeclaredLicensesWhereInput
    orderBy?: DeclaredLicensesOrderByWithAggregationInput | DeclaredLicensesOrderByWithAggregationInput[]
    by: DeclaredLicensesScalarFieldEnum[] | DeclaredLicensesScalarFieldEnum
    having?: DeclaredLicensesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeclaredLicensesCountAggregateInputType | true
    _avg?: DeclaredLicensesAvgAggregateInputType
    _sum?: DeclaredLicensesSumAggregateInputType
    _min?: DeclaredLicensesMinAggregateInputType
    _max?: DeclaredLicensesMaxAggregateInputType
  }

  export type DeclaredLicensesGroupByOutputType = {
    id: number
    name: string
    packageId: number
    _count: DeclaredLicensesCountAggregateOutputType | null
    _avg: DeclaredLicensesAvgAggregateOutputType | null
    _sum: DeclaredLicensesSumAggregateOutputType | null
    _min: DeclaredLicensesMinAggregateOutputType | null
    _max: DeclaredLicensesMaxAggregateOutputType | null
  }

  type GetDeclaredLicensesGroupByPayload<T extends DeclaredLicensesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeclaredLicensesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeclaredLicensesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeclaredLicensesGroupByOutputType[P]>
            : GetScalarType<T[P], DeclaredLicensesGroupByOutputType[P]>
        }
      >
    >


  export type DeclaredLicensesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    packageId?: boolean
    analyzerPackage?: boolean | AnalyzerPackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["declaredLicenses"]>



  export type DeclaredLicensesSelectScalar = {
    id?: boolean
    name?: boolean
    packageId?: boolean
  }

  export type DeclaredLicensesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "packageId", ExtArgs["result"]["declaredLicenses"]>
  export type DeclaredLicensesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    analyzerPackage?: boolean | AnalyzerPackageDefaultArgs<ExtArgs>
  }

  export type $DeclaredLicensesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeclaredLicenses"
    objects: {
      analyzerPackage: Prisma.$AnalyzerPackagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      packageId: number
    }, ExtArgs["result"]["declaredLicenses"]>
    composites: {}
  }

  type DeclaredLicensesGetPayload<S extends boolean | null | undefined | DeclaredLicensesDefaultArgs> = $Result.GetResult<Prisma.$DeclaredLicensesPayload, S>

  type DeclaredLicensesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeclaredLicensesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeclaredLicensesCountAggregateInputType | true
    }

  export interface DeclaredLicensesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeclaredLicenses'], meta: { name: 'DeclaredLicenses' } }
    /**
     * Find zero or one DeclaredLicenses that matches the filter.
     * @param {DeclaredLicensesFindUniqueArgs} args - Arguments to find a DeclaredLicenses
     * @example
     * // Get one DeclaredLicenses
     * const declaredLicenses = await prisma.declaredLicenses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeclaredLicensesFindUniqueArgs>(args: SelectSubset<T, DeclaredLicensesFindUniqueArgs<ExtArgs>>): Prisma__DeclaredLicensesClient<$Result.GetResult<Prisma.$DeclaredLicensesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeclaredLicenses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeclaredLicensesFindUniqueOrThrowArgs} args - Arguments to find a DeclaredLicenses
     * @example
     * // Get one DeclaredLicenses
     * const declaredLicenses = await prisma.declaredLicenses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeclaredLicensesFindUniqueOrThrowArgs>(args: SelectSubset<T, DeclaredLicensesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeclaredLicensesClient<$Result.GetResult<Prisma.$DeclaredLicensesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeclaredLicenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclaredLicensesFindFirstArgs} args - Arguments to find a DeclaredLicenses
     * @example
     * // Get one DeclaredLicenses
     * const declaredLicenses = await prisma.declaredLicenses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeclaredLicensesFindFirstArgs>(args?: SelectSubset<T, DeclaredLicensesFindFirstArgs<ExtArgs>>): Prisma__DeclaredLicensesClient<$Result.GetResult<Prisma.$DeclaredLicensesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeclaredLicenses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclaredLicensesFindFirstOrThrowArgs} args - Arguments to find a DeclaredLicenses
     * @example
     * // Get one DeclaredLicenses
     * const declaredLicenses = await prisma.declaredLicenses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeclaredLicensesFindFirstOrThrowArgs>(args?: SelectSubset<T, DeclaredLicensesFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeclaredLicensesClient<$Result.GetResult<Prisma.$DeclaredLicensesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeclaredLicenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclaredLicensesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeclaredLicenses
     * const declaredLicenses = await prisma.declaredLicenses.findMany()
     * 
     * // Get first 10 DeclaredLicenses
     * const declaredLicenses = await prisma.declaredLicenses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const declaredLicensesWithIdOnly = await prisma.declaredLicenses.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeclaredLicensesFindManyArgs>(args?: SelectSubset<T, DeclaredLicensesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeclaredLicensesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeclaredLicenses.
     * @param {DeclaredLicensesCreateArgs} args - Arguments to create a DeclaredLicenses.
     * @example
     * // Create one DeclaredLicenses
     * const DeclaredLicenses = await prisma.declaredLicenses.create({
     *   data: {
     *     // ... data to create a DeclaredLicenses
     *   }
     * })
     * 
     */
    create<T extends DeclaredLicensesCreateArgs>(args: SelectSubset<T, DeclaredLicensesCreateArgs<ExtArgs>>): Prisma__DeclaredLicensesClient<$Result.GetResult<Prisma.$DeclaredLicensesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeclaredLicenses.
     * @param {DeclaredLicensesCreateManyArgs} args - Arguments to create many DeclaredLicenses.
     * @example
     * // Create many DeclaredLicenses
     * const declaredLicenses = await prisma.declaredLicenses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeclaredLicensesCreateManyArgs>(args?: SelectSubset<T, DeclaredLicensesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DeclaredLicenses.
     * @param {DeclaredLicensesDeleteArgs} args - Arguments to delete one DeclaredLicenses.
     * @example
     * // Delete one DeclaredLicenses
     * const DeclaredLicenses = await prisma.declaredLicenses.delete({
     *   where: {
     *     // ... filter to delete one DeclaredLicenses
     *   }
     * })
     * 
     */
    delete<T extends DeclaredLicensesDeleteArgs>(args: SelectSubset<T, DeclaredLicensesDeleteArgs<ExtArgs>>): Prisma__DeclaredLicensesClient<$Result.GetResult<Prisma.$DeclaredLicensesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeclaredLicenses.
     * @param {DeclaredLicensesUpdateArgs} args - Arguments to update one DeclaredLicenses.
     * @example
     * // Update one DeclaredLicenses
     * const declaredLicenses = await prisma.declaredLicenses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeclaredLicensesUpdateArgs>(args: SelectSubset<T, DeclaredLicensesUpdateArgs<ExtArgs>>): Prisma__DeclaredLicensesClient<$Result.GetResult<Prisma.$DeclaredLicensesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeclaredLicenses.
     * @param {DeclaredLicensesDeleteManyArgs} args - Arguments to filter DeclaredLicenses to delete.
     * @example
     * // Delete a few DeclaredLicenses
     * const { count } = await prisma.declaredLicenses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeclaredLicensesDeleteManyArgs>(args?: SelectSubset<T, DeclaredLicensesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeclaredLicenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclaredLicensesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeclaredLicenses
     * const declaredLicenses = await prisma.declaredLicenses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeclaredLicensesUpdateManyArgs>(args: SelectSubset<T, DeclaredLicensesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DeclaredLicenses.
     * @param {DeclaredLicensesUpsertArgs} args - Arguments to update or create a DeclaredLicenses.
     * @example
     * // Update or create a DeclaredLicenses
     * const declaredLicenses = await prisma.declaredLicenses.upsert({
     *   create: {
     *     // ... data to create a DeclaredLicenses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeclaredLicenses we want to update
     *   }
     * })
     */
    upsert<T extends DeclaredLicensesUpsertArgs>(args: SelectSubset<T, DeclaredLicensesUpsertArgs<ExtArgs>>): Prisma__DeclaredLicensesClient<$Result.GetResult<Prisma.$DeclaredLicensesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DeclaredLicenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclaredLicensesCountArgs} args - Arguments to filter DeclaredLicenses to count.
     * @example
     * // Count the number of DeclaredLicenses
     * const count = await prisma.declaredLicenses.count({
     *   where: {
     *     // ... the filter for the DeclaredLicenses we want to count
     *   }
     * })
    **/
    count<T extends DeclaredLicensesCountArgs>(
      args?: Subset<T, DeclaredLicensesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeclaredLicensesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeclaredLicenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclaredLicensesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeclaredLicensesAggregateArgs>(args: Subset<T, DeclaredLicensesAggregateArgs>): Prisma.PrismaPromise<GetDeclaredLicensesAggregateType<T>>

    /**
     * Group by DeclaredLicenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclaredLicensesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeclaredLicensesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeclaredLicensesGroupByArgs['orderBy'] }
        : { orderBy?: DeclaredLicensesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeclaredLicensesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeclaredLicensesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeclaredLicenses model
   */
  readonly fields: DeclaredLicensesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeclaredLicenses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeclaredLicensesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    analyzerPackage<T extends AnalyzerPackageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnalyzerPackageDefaultArgs<ExtArgs>>): Prisma__AnalyzerPackageClient<$Result.GetResult<Prisma.$AnalyzerPackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DeclaredLicenses model
   */
  interface DeclaredLicensesFieldRefs {
    readonly id: FieldRef<"DeclaredLicenses", 'Int'>
    readonly name: FieldRef<"DeclaredLicenses", 'String'>
    readonly packageId: FieldRef<"DeclaredLicenses", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DeclaredLicenses findUnique
   */
  export type DeclaredLicensesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclaredLicenses
     */
    select?: DeclaredLicensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclaredLicenses
     */
    omit?: DeclaredLicensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeclaredLicensesInclude<ExtArgs> | null
    /**
     * Filter, which DeclaredLicenses to fetch.
     */
    where: DeclaredLicensesWhereUniqueInput
  }

  /**
   * DeclaredLicenses findUniqueOrThrow
   */
  export type DeclaredLicensesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclaredLicenses
     */
    select?: DeclaredLicensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclaredLicenses
     */
    omit?: DeclaredLicensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeclaredLicensesInclude<ExtArgs> | null
    /**
     * Filter, which DeclaredLicenses to fetch.
     */
    where: DeclaredLicensesWhereUniqueInput
  }

  /**
   * DeclaredLicenses findFirst
   */
  export type DeclaredLicensesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclaredLicenses
     */
    select?: DeclaredLicensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclaredLicenses
     */
    omit?: DeclaredLicensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeclaredLicensesInclude<ExtArgs> | null
    /**
     * Filter, which DeclaredLicenses to fetch.
     */
    where?: DeclaredLicensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeclaredLicenses to fetch.
     */
    orderBy?: DeclaredLicensesOrderByWithRelationInput | DeclaredLicensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeclaredLicenses.
     */
    cursor?: DeclaredLicensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeclaredLicenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeclaredLicenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeclaredLicenses.
     */
    distinct?: DeclaredLicensesScalarFieldEnum | DeclaredLicensesScalarFieldEnum[]
  }

  /**
   * DeclaredLicenses findFirstOrThrow
   */
  export type DeclaredLicensesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclaredLicenses
     */
    select?: DeclaredLicensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclaredLicenses
     */
    omit?: DeclaredLicensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeclaredLicensesInclude<ExtArgs> | null
    /**
     * Filter, which DeclaredLicenses to fetch.
     */
    where?: DeclaredLicensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeclaredLicenses to fetch.
     */
    orderBy?: DeclaredLicensesOrderByWithRelationInput | DeclaredLicensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeclaredLicenses.
     */
    cursor?: DeclaredLicensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeclaredLicenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeclaredLicenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeclaredLicenses.
     */
    distinct?: DeclaredLicensesScalarFieldEnum | DeclaredLicensesScalarFieldEnum[]
  }

  /**
   * DeclaredLicenses findMany
   */
  export type DeclaredLicensesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclaredLicenses
     */
    select?: DeclaredLicensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclaredLicenses
     */
    omit?: DeclaredLicensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeclaredLicensesInclude<ExtArgs> | null
    /**
     * Filter, which DeclaredLicenses to fetch.
     */
    where?: DeclaredLicensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeclaredLicenses to fetch.
     */
    orderBy?: DeclaredLicensesOrderByWithRelationInput | DeclaredLicensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeclaredLicenses.
     */
    cursor?: DeclaredLicensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeclaredLicenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeclaredLicenses.
     */
    skip?: number
    distinct?: DeclaredLicensesScalarFieldEnum | DeclaredLicensesScalarFieldEnum[]
  }

  /**
   * DeclaredLicenses create
   */
  export type DeclaredLicensesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclaredLicenses
     */
    select?: DeclaredLicensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclaredLicenses
     */
    omit?: DeclaredLicensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeclaredLicensesInclude<ExtArgs> | null
    /**
     * The data needed to create a DeclaredLicenses.
     */
    data: XOR<DeclaredLicensesCreateInput, DeclaredLicensesUncheckedCreateInput>
  }

  /**
   * DeclaredLicenses createMany
   */
  export type DeclaredLicensesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeclaredLicenses.
     */
    data: DeclaredLicensesCreateManyInput | DeclaredLicensesCreateManyInput[]
  }

  /**
   * DeclaredLicenses update
   */
  export type DeclaredLicensesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclaredLicenses
     */
    select?: DeclaredLicensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclaredLicenses
     */
    omit?: DeclaredLicensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeclaredLicensesInclude<ExtArgs> | null
    /**
     * The data needed to update a DeclaredLicenses.
     */
    data: XOR<DeclaredLicensesUpdateInput, DeclaredLicensesUncheckedUpdateInput>
    /**
     * Choose, which DeclaredLicenses to update.
     */
    where: DeclaredLicensesWhereUniqueInput
  }

  /**
   * DeclaredLicenses updateMany
   */
  export type DeclaredLicensesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeclaredLicenses.
     */
    data: XOR<DeclaredLicensesUpdateManyMutationInput, DeclaredLicensesUncheckedUpdateManyInput>
    /**
     * Filter which DeclaredLicenses to update
     */
    where?: DeclaredLicensesWhereInput
    /**
     * Limit how many DeclaredLicenses to update.
     */
    limit?: number
  }

  /**
   * DeclaredLicenses upsert
   */
  export type DeclaredLicensesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclaredLicenses
     */
    select?: DeclaredLicensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclaredLicenses
     */
    omit?: DeclaredLicensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeclaredLicensesInclude<ExtArgs> | null
    /**
     * The filter to search for the DeclaredLicenses to update in case it exists.
     */
    where: DeclaredLicensesWhereUniqueInput
    /**
     * In case the DeclaredLicenses found by the `where` argument doesn't exist, create a new DeclaredLicenses with this data.
     */
    create: XOR<DeclaredLicensesCreateInput, DeclaredLicensesUncheckedCreateInput>
    /**
     * In case the DeclaredLicenses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeclaredLicensesUpdateInput, DeclaredLicensesUncheckedUpdateInput>
  }

  /**
   * DeclaredLicenses delete
   */
  export type DeclaredLicensesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclaredLicenses
     */
    select?: DeclaredLicensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclaredLicenses
     */
    omit?: DeclaredLicensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeclaredLicensesInclude<ExtArgs> | null
    /**
     * Filter which DeclaredLicenses to delete.
     */
    where: DeclaredLicensesWhereUniqueInput
  }

  /**
   * DeclaredLicenses deleteMany
   */
  export type DeclaredLicensesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeclaredLicenses to delete
     */
    where?: DeclaredLicensesWhereInput
    /**
     * Limit how many DeclaredLicenses to delete.
     */
    limit?: number
  }

  /**
   * DeclaredLicenses without action
   */
  export type DeclaredLicensesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclaredLicenses
     */
    select?: DeclaredLicensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclaredLicenses
     */
    omit?: DeclaredLicensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeclaredLicensesInclude<ExtArgs> | null
  }


  /**
   * Model DeclaredLicensesProcessed
   */

  export type AggregateDeclaredLicensesProcessed = {
    _count: DeclaredLicensesProcessedCountAggregateOutputType | null
    _avg: DeclaredLicensesProcessedAvgAggregateOutputType | null
    _sum: DeclaredLicensesProcessedSumAggregateOutputType | null
    _min: DeclaredLicensesProcessedMinAggregateOutputType | null
    _max: DeclaredLicensesProcessedMaxAggregateOutputType | null
  }

  export type DeclaredLicensesProcessedAvgAggregateOutputType = {
    id: number | null
    packageId: number | null
  }

  export type DeclaredLicensesProcessedSumAggregateOutputType = {
    id: number | null
    packageId: number | null
  }

  export type DeclaredLicensesProcessedMinAggregateOutputType = {
    id: number | null
    spdxExpression: string | null
    packageId: number | null
  }

  export type DeclaredLicensesProcessedMaxAggregateOutputType = {
    id: number | null
    spdxExpression: string | null
    packageId: number | null
  }

  export type DeclaredLicensesProcessedCountAggregateOutputType = {
    id: number
    spdxExpression: number
    packageId: number
    _all: number
  }


  export type DeclaredLicensesProcessedAvgAggregateInputType = {
    id?: true
    packageId?: true
  }

  export type DeclaredLicensesProcessedSumAggregateInputType = {
    id?: true
    packageId?: true
  }

  export type DeclaredLicensesProcessedMinAggregateInputType = {
    id?: true
    spdxExpression?: true
    packageId?: true
  }

  export type DeclaredLicensesProcessedMaxAggregateInputType = {
    id?: true
    spdxExpression?: true
    packageId?: true
  }

  export type DeclaredLicensesProcessedCountAggregateInputType = {
    id?: true
    spdxExpression?: true
    packageId?: true
    _all?: true
  }

  export type DeclaredLicensesProcessedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeclaredLicensesProcessed to aggregate.
     */
    where?: DeclaredLicensesProcessedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeclaredLicensesProcesseds to fetch.
     */
    orderBy?: DeclaredLicensesProcessedOrderByWithRelationInput | DeclaredLicensesProcessedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeclaredLicensesProcessedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeclaredLicensesProcesseds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeclaredLicensesProcesseds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeclaredLicensesProcesseds
    **/
    _count?: true | DeclaredLicensesProcessedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeclaredLicensesProcessedAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeclaredLicensesProcessedSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeclaredLicensesProcessedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeclaredLicensesProcessedMaxAggregateInputType
  }

  export type GetDeclaredLicensesProcessedAggregateType<T extends DeclaredLicensesProcessedAggregateArgs> = {
        [P in keyof T & keyof AggregateDeclaredLicensesProcessed]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeclaredLicensesProcessed[P]>
      : GetScalarType<T[P], AggregateDeclaredLicensesProcessed[P]>
  }




  export type DeclaredLicensesProcessedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeclaredLicensesProcessedWhereInput
    orderBy?: DeclaredLicensesProcessedOrderByWithAggregationInput | DeclaredLicensesProcessedOrderByWithAggregationInput[]
    by: DeclaredLicensesProcessedScalarFieldEnum[] | DeclaredLicensesProcessedScalarFieldEnum
    having?: DeclaredLicensesProcessedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeclaredLicensesProcessedCountAggregateInputType | true
    _avg?: DeclaredLicensesProcessedAvgAggregateInputType
    _sum?: DeclaredLicensesProcessedSumAggregateInputType
    _min?: DeclaredLicensesProcessedMinAggregateInputType
    _max?: DeclaredLicensesProcessedMaxAggregateInputType
  }

  export type DeclaredLicensesProcessedGroupByOutputType = {
    id: number
    spdxExpression: string
    packageId: number
    _count: DeclaredLicensesProcessedCountAggregateOutputType | null
    _avg: DeclaredLicensesProcessedAvgAggregateOutputType | null
    _sum: DeclaredLicensesProcessedSumAggregateOutputType | null
    _min: DeclaredLicensesProcessedMinAggregateOutputType | null
    _max: DeclaredLicensesProcessedMaxAggregateOutputType | null
  }

  type GetDeclaredLicensesProcessedGroupByPayload<T extends DeclaredLicensesProcessedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeclaredLicensesProcessedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeclaredLicensesProcessedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeclaredLicensesProcessedGroupByOutputType[P]>
            : GetScalarType<T[P], DeclaredLicensesProcessedGroupByOutputType[P]>
        }
      >
    >


  export type DeclaredLicensesProcessedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    spdxExpression?: boolean
    packageId?: boolean
    analyzerPackage?: boolean | AnalyzerPackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["declaredLicensesProcessed"]>



  export type DeclaredLicensesProcessedSelectScalar = {
    id?: boolean
    spdxExpression?: boolean
    packageId?: boolean
  }

  export type DeclaredLicensesProcessedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "spdxExpression" | "packageId", ExtArgs["result"]["declaredLicensesProcessed"]>
  export type DeclaredLicensesProcessedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    analyzerPackage?: boolean | AnalyzerPackageDefaultArgs<ExtArgs>
  }

  export type $DeclaredLicensesProcessedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeclaredLicensesProcessed"
    objects: {
      analyzerPackage: Prisma.$AnalyzerPackagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      spdxExpression: string
      packageId: number
    }, ExtArgs["result"]["declaredLicensesProcessed"]>
    composites: {}
  }

  type DeclaredLicensesProcessedGetPayload<S extends boolean | null | undefined | DeclaredLicensesProcessedDefaultArgs> = $Result.GetResult<Prisma.$DeclaredLicensesProcessedPayload, S>

  type DeclaredLicensesProcessedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeclaredLicensesProcessedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeclaredLicensesProcessedCountAggregateInputType | true
    }

  export interface DeclaredLicensesProcessedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeclaredLicensesProcessed'], meta: { name: 'DeclaredLicensesProcessed' } }
    /**
     * Find zero or one DeclaredLicensesProcessed that matches the filter.
     * @param {DeclaredLicensesProcessedFindUniqueArgs} args - Arguments to find a DeclaredLicensesProcessed
     * @example
     * // Get one DeclaredLicensesProcessed
     * const declaredLicensesProcessed = await prisma.declaredLicensesProcessed.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeclaredLicensesProcessedFindUniqueArgs>(args: SelectSubset<T, DeclaredLicensesProcessedFindUniqueArgs<ExtArgs>>): Prisma__DeclaredLicensesProcessedClient<$Result.GetResult<Prisma.$DeclaredLicensesProcessedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeclaredLicensesProcessed that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeclaredLicensesProcessedFindUniqueOrThrowArgs} args - Arguments to find a DeclaredLicensesProcessed
     * @example
     * // Get one DeclaredLicensesProcessed
     * const declaredLicensesProcessed = await prisma.declaredLicensesProcessed.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeclaredLicensesProcessedFindUniqueOrThrowArgs>(args: SelectSubset<T, DeclaredLicensesProcessedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeclaredLicensesProcessedClient<$Result.GetResult<Prisma.$DeclaredLicensesProcessedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeclaredLicensesProcessed that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclaredLicensesProcessedFindFirstArgs} args - Arguments to find a DeclaredLicensesProcessed
     * @example
     * // Get one DeclaredLicensesProcessed
     * const declaredLicensesProcessed = await prisma.declaredLicensesProcessed.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeclaredLicensesProcessedFindFirstArgs>(args?: SelectSubset<T, DeclaredLicensesProcessedFindFirstArgs<ExtArgs>>): Prisma__DeclaredLicensesProcessedClient<$Result.GetResult<Prisma.$DeclaredLicensesProcessedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeclaredLicensesProcessed that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclaredLicensesProcessedFindFirstOrThrowArgs} args - Arguments to find a DeclaredLicensesProcessed
     * @example
     * // Get one DeclaredLicensesProcessed
     * const declaredLicensesProcessed = await prisma.declaredLicensesProcessed.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeclaredLicensesProcessedFindFirstOrThrowArgs>(args?: SelectSubset<T, DeclaredLicensesProcessedFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeclaredLicensesProcessedClient<$Result.GetResult<Prisma.$DeclaredLicensesProcessedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeclaredLicensesProcesseds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclaredLicensesProcessedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeclaredLicensesProcesseds
     * const declaredLicensesProcesseds = await prisma.declaredLicensesProcessed.findMany()
     * 
     * // Get first 10 DeclaredLicensesProcesseds
     * const declaredLicensesProcesseds = await prisma.declaredLicensesProcessed.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const declaredLicensesProcessedWithIdOnly = await prisma.declaredLicensesProcessed.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeclaredLicensesProcessedFindManyArgs>(args?: SelectSubset<T, DeclaredLicensesProcessedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeclaredLicensesProcessedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeclaredLicensesProcessed.
     * @param {DeclaredLicensesProcessedCreateArgs} args - Arguments to create a DeclaredLicensesProcessed.
     * @example
     * // Create one DeclaredLicensesProcessed
     * const DeclaredLicensesProcessed = await prisma.declaredLicensesProcessed.create({
     *   data: {
     *     // ... data to create a DeclaredLicensesProcessed
     *   }
     * })
     * 
     */
    create<T extends DeclaredLicensesProcessedCreateArgs>(args: SelectSubset<T, DeclaredLicensesProcessedCreateArgs<ExtArgs>>): Prisma__DeclaredLicensesProcessedClient<$Result.GetResult<Prisma.$DeclaredLicensesProcessedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeclaredLicensesProcesseds.
     * @param {DeclaredLicensesProcessedCreateManyArgs} args - Arguments to create many DeclaredLicensesProcesseds.
     * @example
     * // Create many DeclaredLicensesProcesseds
     * const declaredLicensesProcessed = await prisma.declaredLicensesProcessed.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeclaredLicensesProcessedCreateManyArgs>(args?: SelectSubset<T, DeclaredLicensesProcessedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DeclaredLicensesProcessed.
     * @param {DeclaredLicensesProcessedDeleteArgs} args - Arguments to delete one DeclaredLicensesProcessed.
     * @example
     * // Delete one DeclaredLicensesProcessed
     * const DeclaredLicensesProcessed = await prisma.declaredLicensesProcessed.delete({
     *   where: {
     *     // ... filter to delete one DeclaredLicensesProcessed
     *   }
     * })
     * 
     */
    delete<T extends DeclaredLicensesProcessedDeleteArgs>(args: SelectSubset<T, DeclaredLicensesProcessedDeleteArgs<ExtArgs>>): Prisma__DeclaredLicensesProcessedClient<$Result.GetResult<Prisma.$DeclaredLicensesProcessedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeclaredLicensesProcessed.
     * @param {DeclaredLicensesProcessedUpdateArgs} args - Arguments to update one DeclaredLicensesProcessed.
     * @example
     * // Update one DeclaredLicensesProcessed
     * const declaredLicensesProcessed = await prisma.declaredLicensesProcessed.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeclaredLicensesProcessedUpdateArgs>(args: SelectSubset<T, DeclaredLicensesProcessedUpdateArgs<ExtArgs>>): Prisma__DeclaredLicensesProcessedClient<$Result.GetResult<Prisma.$DeclaredLicensesProcessedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeclaredLicensesProcesseds.
     * @param {DeclaredLicensesProcessedDeleteManyArgs} args - Arguments to filter DeclaredLicensesProcesseds to delete.
     * @example
     * // Delete a few DeclaredLicensesProcesseds
     * const { count } = await prisma.declaredLicensesProcessed.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeclaredLicensesProcessedDeleteManyArgs>(args?: SelectSubset<T, DeclaredLicensesProcessedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeclaredLicensesProcesseds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclaredLicensesProcessedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeclaredLicensesProcesseds
     * const declaredLicensesProcessed = await prisma.declaredLicensesProcessed.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeclaredLicensesProcessedUpdateManyArgs>(args: SelectSubset<T, DeclaredLicensesProcessedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DeclaredLicensesProcessed.
     * @param {DeclaredLicensesProcessedUpsertArgs} args - Arguments to update or create a DeclaredLicensesProcessed.
     * @example
     * // Update or create a DeclaredLicensesProcessed
     * const declaredLicensesProcessed = await prisma.declaredLicensesProcessed.upsert({
     *   create: {
     *     // ... data to create a DeclaredLicensesProcessed
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeclaredLicensesProcessed we want to update
     *   }
     * })
     */
    upsert<T extends DeclaredLicensesProcessedUpsertArgs>(args: SelectSubset<T, DeclaredLicensesProcessedUpsertArgs<ExtArgs>>): Prisma__DeclaredLicensesProcessedClient<$Result.GetResult<Prisma.$DeclaredLicensesProcessedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DeclaredLicensesProcesseds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclaredLicensesProcessedCountArgs} args - Arguments to filter DeclaredLicensesProcesseds to count.
     * @example
     * // Count the number of DeclaredLicensesProcesseds
     * const count = await prisma.declaredLicensesProcessed.count({
     *   where: {
     *     // ... the filter for the DeclaredLicensesProcesseds we want to count
     *   }
     * })
    **/
    count<T extends DeclaredLicensesProcessedCountArgs>(
      args?: Subset<T, DeclaredLicensesProcessedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeclaredLicensesProcessedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeclaredLicensesProcessed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclaredLicensesProcessedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeclaredLicensesProcessedAggregateArgs>(args: Subset<T, DeclaredLicensesProcessedAggregateArgs>): Prisma.PrismaPromise<GetDeclaredLicensesProcessedAggregateType<T>>

    /**
     * Group by DeclaredLicensesProcessed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclaredLicensesProcessedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeclaredLicensesProcessedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeclaredLicensesProcessedGroupByArgs['orderBy'] }
        : { orderBy?: DeclaredLicensesProcessedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeclaredLicensesProcessedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeclaredLicensesProcessedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeclaredLicensesProcessed model
   */
  readonly fields: DeclaredLicensesProcessedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeclaredLicensesProcessed.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeclaredLicensesProcessedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    analyzerPackage<T extends AnalyzerPackageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnalyzerPackageDefaultArgs<ExtArgs>>): Prisma__AnalyzerPackageClient<$Result.GetResult<Prisma.$AnalyzerPackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DeclaredLicensesProcessed model
   */
  interface DeclaredLicensesProcessedFieldRefs {
    readonly id: FieldRef<"DeclaredLicensesProcessed", 'Int'>
    readonly spdxExpression: FieldRef<"DeclaredLicensesProcessed", 'String'>
    readonly packageId: FieldRef<"DeclaredLicensesProcessed", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DeclaredLicensesProcessed findUnique
   */
  export type DeclaredLicensesProcessedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclaredLicensesProcessed
     */
    select?: DeclaredLicensesProcessedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclaredLicensesProcessed
     */
    omit?: DeclaredLicensesProcessedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeclaredLicensesProcessedInclude<ExtArgs> | null
    /**
     * Filter, which DeclaredLicensesProcessed to fetch.
     */
    where: DeclaredLicensesProcessedWhereUniqueInput
  }

  /**
   * DeclaredLicensesProcessed findUniqueOrThrow
   */
  export type DeclaredLicensesProcessedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclaredLicensesProcessed
     */
    select?: DeclaredLicensesProcessedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclaredLicensesProcessed
     */
    omit?: DeclaredLicensesProcessedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeclaredLicensesProcessedInclude<ExtArgs> | null
    /**
     * Filter, which DeclaredLicensesProcessed to fetch.
     */
    where: DeclaredLicensesProcessedWhereUniqueInput
  }

  /**
   * DeclaredLicensesProcessed findFirst
   */
  export type DeclaredLicensesProcessedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclaredLicensesProcessed
     */
    select?: DeclaredLicensesProcessedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclaredLicensesProcessed
     */
    omit?: DeclaredLicensesProcessedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeclaredLicensesProcessedInclude<ExtArgs> | null
    /**
     * Filter, which DeclaredLicensesProcessed to fetch.
     */
    where?: DeclaredLicensesProcessedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeclaredLicensesProcesseds to fetch.
     */
    orderBy?: DeclaredLicensesProcessedOrderByWithRelationInput | DeclaredLicensesProcessedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeclaredLicensesProcesseds.
     */
    cursor?: DeclaredLicensesProcessedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeclaredLicensesProcesseds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeclaredLicensesProcesseds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeclaredLicensesProcesseds.
     */
    distinct?: DeclaredLicensesProcessedScalarFieldEnum | DeclaredLicensesProcessedScalarFieldEnum[]
  }

  /**
   * DeclaredLicensesProcessed findFirstOrThrow
   */
  export type DeclaredLicensesProcessedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclaredLicensesProcessed
     */
    select?: DeclaredLicensesProcessedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclaredLicensesProcessed
     */
    omit?: DeclaredLicensesProcessedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeclaredLicensesProcessedInclude<ExtArgs> | null
    /**
     * Filter, which DeclaredLicensesProcessed to fetch.
     */
    where?: DeclaredLicensesProcessedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeclaredLicensesProcesseds to fetch.
     */
    orderBy?: DeclaredLicensesProcessedOrderByWithRelationInput | DeclaredLicensesProcessedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeclaredLicensesProcesseds.
     */
    cursor?: DeclaredLicensesProcessedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeclaredLicensesProcesseds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeclaredLicensesProcesseds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeclaredLicensesProcesseds.
     */
    distinct?: DeclaredLicensesProcessedScalarFieldEnum | DeclaredLicensesProcessedScalarFieldEnum[]
  }

  /**
   * DeclaredLicensesProcessed findMany
   */
  export type DeclaredLicensesProcessedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclaredLicensesProcessed
     */
    select?: DeclaredLicensesProcessedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclaredLicensesProcessed
     */
    omit?: DeclaredLicensesProcessedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeclaredLicensesProcessedInclude<ExtArgs> | null
    /**
     * Filter, which DeclaredLicensesProcesseds to fetch.
     */
    where?: DeclaredLicensesProcessedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeclaredLicensesProcesseds to fetch.
     */
    orderBy?: DeclaredLicensesProcessedOrderByWithRelationInput | DeclaredLicensesProcessedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeclaredLicensesProcesseds.
     */
    cursor?: DeclaredLicensesProcessedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeclaredLicensesProcesseds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeclaredLicensesProcesseds.
     */
    skip?: number
    distinct?: DeclaredLicensesProcessedScalarFieldEnum | DeclaredLicensesProcessedScalarFieldEnum[]
  }

  /**
   * DeclaredLicensesProcessed create
   */
  export type DeclaredLicensesProcessedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclaredLicensesProcessed
     */
    select?: DeclaredLicensesProcessedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclaredLicensesProcessed
     */
    omit?: DeclaredLicensesProcessedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeclaredLicensesProcessedInclude<ExtArgs> | null
    /**
     * The data needed to create a DeclaredLicensesProcessed.
     */
    data: XOR<DeclaredLicensesProcessedCreateInput, DeclaredLicensesProcessedUncheckedCreateInput>
  }

  /**
   * DeclaredLicensesProcessed createMany
   */
  export type DeclaredLicensesProcessedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeclaredLicensesProcesseds.
     */
    data: DeclaredLicensesProcessedCreateManyInput | DeclaredLicensesProcessedCreateManyInput[]
  }

  /**
   * DeclaredLicensesProcessed update
   */
  export type DeclaredLicensesProcessedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclaredLicensesProcessed
     */
    select?: DeclaredLicensesProcessedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclaredLicensesProcessed
     */
    omit?: DeclaredLicensesProcessedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeclaredLicensesProcessedInclude<ExtArgs> | null
    /**
     * The data needed to update a DeclaredLicensesProcessed.
     */
    data: XOR<DeclaredLicensesProcessedUpdateInput, DeclaredLicensesProcessedUncheckedUpdateInput>
    /**
     * Choose, which DeclaredLicensesProcessed to update.
     */
    where: DeclaredLicensesProcessedWhereUniqueInput
  }

  /**
   * DeclaredLicensesProcessed updateMany
   */
  export type DeclaredLicensesProcessedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeclaredLicensesProcesseds.
     */
    data: XOR<DeclaredLicensesProcessedUpdateManyMutationInput, DeclaredLicensesProcessedUncheckedUpdateManyInput>
    /**
     * Filter which DeclaredLicensesProcesseds to update
     */
    where?: DeclaredLicensesProcessedWhereInput
    /**
     * Limit how many DeclaredLicensesProcesseds to update.
     */
    limit?: number
  }

  /**
   * DeclaredLicensesProcessed upsert
   */
  export type DeclaredLicensesProcessedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclaredLicensesProcessed
     */
    select?: DeclaredLicensesProcessedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclaredLicensesProcessed
     */
    omit?: DeclaredLicensesProcessedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeclaredLicensesProcessedInclude<ExtArgs> | null
    /**
     * The filter to search for the DeclaredLicensesProcessed to update in case it exists.
     */
    where: DeclaredLicensesProcessedWhereUniqueInput
    /**
     * In case the DeclaredLicensesProcessed found by the `where` argument doesn't exist, create a new DeclaredLicensesProcessed with this data.
     */
    create: XOR<DeclaredLicensesProcessedCreateInput, DeclaredLicensesProcessedUncheckedCreateInput>
    /**
     * In case the DeclaredLicensesProcessed was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeclaredLicensesProcessedUpdateInput, DeclaredLicensesProcessedUncheckedUpdateInput>
  }

  /**
   * DeclaredLicensesProcessed delete
   */
  export type DeclaredLicensesProcessedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclaredLicensesProcessed
     */
    select?: DeclaredLicensesProcessedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclaredLicensesProcessed
     */
    omit?: DeclaredLicensesProcessedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeclaredLicensesProcessedInclude<ExtArgs> | null
    /**
     * Filter which DeclaredLicensesProcessed to delete.
     */
    where: DeclaredLicensesProcessedWhereUniqueInput
  }

  /**
   * DeclaredLicensesProcessed deleteMany
   */
  export type DeclaredLicensesProcessedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeclaredLicensesProcesseds to delete
     */
    where?: DeclaredLicensesProcessedWhereInput
    /**
     * Limit how many DeclaredLicensesProcesseds to delete.
     */
    limit?: number
  }

  /**
   * DeclaredLicensesProcessed without action
   */
  export type DeclaredLicensesProcessedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeclaredLicensesProcessed
     */
    select?: DeclaredLicensesProcessedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeclaredLicensesProcessed
     */
    omit?: DeclaredLicensesProcessedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeclaredLicensesProcessedInclude<ExtArgs> | null
  }


  /**
   * Model BinaryArtifact
   */

  export type AggregateBinaryArtifact = {
    _count: BinaryArtifactCountAggregateOutputType | null
    _avg: BinaryArtifactAvgAggregateOutputType | null
    _sum: BinaryArtifactSumAggregateOutputType | null
    _min: BinaryArtifactMinAggregateOutputType | null
    _max: BinaryArtifactMaxAggregateOutputType | null
  }

  export type BinaryArtifactAvgAggregateOutputType = {
    id: number | null
    packageId: number | null
  }

  export type BinaryArtifactSumAggregateOutputType = {
    id: number | null
    packageId: number | null
  }

  export type BinaryArtifactMinAggregateOutputType = {
    id: number | null
    url: string | null
    packageId: number | null
  }

  export type BinaryArtifactMaxAggregateOutputType = {
    id: number | null
    url: string | null
    packageId: number | null
  }

  export type BinaryArtifactCountAggregateOutputType = {
    id: number
    url: number
    packageId: number
    _all: number
  }


  export type BinaryArtifactAvgAggregateInputType = {
    id?: true
    packageId?: true
  }

  export type BinaryArtifactSumAggregateInputType = {
    id?: true
    packageId?: true
  }

  export type BinaryArtifactMinAggregateInputType = {
    id?: true
    url?: true
    packageId?: true
  }

  export type BinaryArtifactMaxAggregateInputType = {
    id?: true
    url?: true
    packageId?: true
  }

  export type BinaryArtifactCountAggregateInputType = {
    id?: true
    url?: true
    packageId?: true
    _all?: true
  }

  export type BinaryArtifactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BinaryArtifact to aggregate.
     */
    where?: BinaryArtifactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BinaryArtifacts to fetch.
     */
    orderBy?: BinaryArtifactOrderByWithRelationInput | BinaryArtifactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BinaryArtifactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BinaryArtifacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BinaryArtifacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BinaryArtifacts
    **/
    _count?: true | BinaryArtifactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BinaryArtifactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BinaryArtifactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BinaryArtifactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BinaryArtifactMaxAggregateInputType
  }

  export type GetBinaryArtifactAggregateType<T extends BinaryArtifactAggregateArgs> = {
        [P in keyof T & keyof AggregateBinaryArtifact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBinaryArtifact[P]>
      : GetScalarType<T[P], AggregateBinaryArtifact[P]>
  }




  export type BinaryArtifactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BinaryArtifactWhereInput
    orderBy?: BinaryArtifactOrderByWithAggregationInput | BinaryArtifactOrderByWithAggregationInput[]
    by: BinaryArtifactScalarFieldEnum[] | BinaryArtifactScalarFieldEnum
    having?: BinaryArtifactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BinaryArtifactCountAggregateInputType | true
    _avg?: BinaryArtifactAvgAggregateInputType
    _sum?: BinaryArtifactSumAggregateInputType
    _min?: BinaryArtifactMinAggregateInputType
    _max?: BinaryArtifactMaxAggregateInputType
  }

  export type BinaryArtifactGroupByOutputType = {
    id: number
    url: string
    packageId: number
    _count: BinaryArtifactCountAggregateOutputType | null
    _avg: BinaryArtifactAvgAggregateOutputType | null
    _sum: BinaryArtifactSumAggregateOutputType | null
    _min: BinaryArtifactMinAggregateOutputType | null
    _max: BinaryArtifactMaxAggregateOutputType | null
  }

  type GetBinaryArtifactGroupByPayload<T extends BinaryArtifactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BinaryArtifactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BinaryArtifactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BinaryArtifactGroupByOutputType[P]>
            : GetScalarType<T[P], BinaryArtifactGroupByOutputType[P]>
        }
      >
    >


  export type BinaryArtifactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    packageId?: boolean
    analyzerPackage?: boolean | AnalyzerPackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["binaryArtifact"]>



  export type BinaryArtifactSelectScalar = {
    id?: boolean
    url?: boolean
    packageId?: boolean
  }

  export type BinaryArtifactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "packageId", ExtArgs["result"]["binaryArtifact"]>
  export type BinaryArtifactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    analyzerPackage?: boolean | AnalyzerPackageDefaultArgs<ExtArgs>
  }

  export type $BinaryArtifactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BinaryArtifact"
    objects: {
      analyzerPackage: Prisma.$AnalyzerPackagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      packageId: number
    }, ExtArgs["result"]["binaryArtifact"]>
    composites: {}
  }

  type BinaryArtifactGetPayload<S extends boolean | null | undefined | BinaryArtifactDefaultArgs> = $Result.GetResult<Prisma.$BinaryArtifactPayload, S>

  type BinaryArtifactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BinaryArtifactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BinaryArtifactCountAggregateInputType | true
    }

  export interface BinaryArtifactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BinaryArtifact'], meta: { name: 'BinaryArtifact' } }
    /**
     * Find zero or one BinaryArtifact that matches the filter.
     * @param {BinaryArtifactFindUniqueArgs} args - Arguments to find a BinaryArtifact
     * @example
     * // Get one BinaryArtifact
     * const binaryArtifact = await prisma.binaryArtifact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BinaryArtifactFindUniqueArgs>(args: SelectSubset<T, BinaryArtifactFindUniqueArgs<ExtArgs>>): Prisma__BinaryArtifactClient<$Result.GetResult<Prisma.$BinaryArtifactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BinaryArtifact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BinaryArtifactFindUniqueOrThrowArgs} args - Arguments to find a BinaryArtifact
     * @example
     * // Get one BinaryArtifact
     * const binaryArtifact = await prisma.binaryArtifact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BinaryArtifactFindUniqueOrThrowArgs>(args: SelectSubset<T, BinaryArtifactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BinaryArtifactClient<$Result.GetResult<Prisma.$BinaryArtifactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BinaryArtifact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinaryArtifactFindFirstArgs} args - Arguments to find a BinaryArtifact
     * @example
     * // Get one BinaryArtifact
     * const binaryArtifact = await prisma.binaryArtifact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BinaryArtifactFindFirstArgs>(args?: SelectSubset<T, BinaryArtifactFindFirstArgs<ExtArgs>>): Prisma__BinaryArtifactClient<$Result.GetResult<Prisma.$BinaryArtifactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BinaryArtifact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinaryArtifactFindFirstOrThrowArgs} args - Arguments to find a BinaryArtifact
     * @example
     * // Get one BinaryArtifact
     * const binaryArtifact = await prisma.binaryArtifact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BinaryArtifactFindFirstOrThrowArgs>(args?: SelectSubset<T, BinaryArtifactFindFirstOrThrowArgs<ExtArgs>>): Prisma__BinaryArtifactClient<$Result.GetResult<Prisma.$BinaryArtifactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BinaryArtifacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinaryArtifactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BinaryArtifacts
     * const binaryArtifacts = await prisma.binaryArtifact.findMany()
     * 
     * // Get first 10 BinaryArtifacts
     * const binaryArtifacts = await prisma.binaryArtifact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const binaryArtifactWithIdOnly = await prisma.binaryArtifact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BinaryArtifactFindManyArgs>(args?: SelectSubset<T, BinaryArtifactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BinaryArtifactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BinaryArtifact.
     * @param {BinaryArtifactCreateArgs} args - Arguments to create a BinaryArtifact.
     * @example
     * // Create one BinaryArtifact
     * const BinaryArtifact = await prisma.binaryArtifact.create({
     *   data: {
     *     // ... data to create a BinaryArtifact
     *   }
     * })
     * 
     */
    create<T extends BinaryArtifactCreateArgs>(args: SelectSubset<T, BinaryArtifactCreateArgs<ExtArgs>>): Prisma__BinaryArtifactClient<$Result.GetResult<Prisma.$BinaryArtifactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BinaryArtifacts.
     * @param {BinaryArtifactCreateManyArgs} args - Arguments to create many BinaryArtifacts.
     * @example
     * // Create many BinaryArtifacts
     * const binaryArtifact = await prisma.binaryArtifact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BinaryArtifactCreateManyArgs>(args?: SelectSubset<T, BinaryArtifactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BinaryArtifact.
     * @param {BinaryArtifactDeleteArgs} args - Arguments to delete one BinaryArtifact.
     * @example
     * // Delete one BinaryArtifact
     * const BinaryArtifact = await prisma.binaryArtifact.delete({
     *   where: {
     *     // ... filter to delete one BinaryArtifact
     *   }
     * })
     * 
     */
    delete<T extends BinaryArtifactDeleteArgs>(args: SelectSubset<T, BinaryArtifactDeleteArgs<ExtArgs>>): Prisma__BinaryArtifactClient<$Result.GetResult<Prisma.$BinaryArtifactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BinaryArtifact.
     * @param {BinaryArtifactUpdateArgs} args - Arguments to update one BinaryArtifact.
     * @example
     * // Update one BinaryArtifact
     * const binaryArtifact = await prisma.binaryArtifact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BinaryArtifactUpdateArgs>(args: SelectSubset<T, BinaryArtifactUpdateArgs<ExtArgs>>): Prisma__BinaryArtifactClient<$Result.GetResult<Prisma.$BinaryArtifactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BinaryArtifacts.
     * @param {BinaryArtifactDeleteManyArgs} args - Arguments to filter BinaryArtifacts to delete.
     * @example
     * // Delete a few BinaryArtifacts
     * const { count } = await prisma.binaryArtifact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BinaryArtifactDeleteManyArgs>(args?: SelectSubset<T, BinaryArtifactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BinaryArtifacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinaryArtifactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BinaryArtifacts
     * const binaryArtifact = await prisma.binaryArtifact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BinaryArtifactUpdateManyArgs>(args: SelectSubset<T, BinaryArtifactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BinaryArtifact.
     * @param {BinaryArtifactUpsertArgs} args - Arguments to update or create a BinaryArtifact.
     * @example
     * // Update or create a BinaryArtifact
     * const binaryArtifact = await prisma.binaryArtifact.upsert({
     *   create: {
     *     // ... data to create a BinaryArtifact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BinaryArtifact we want to update
     *   }
     * })
     */
    upsert<T extends BinaryArtifactUpsertArgs>(args: SelectSubset<T, BinaryArtifactUpsertArgs<ExtArgs>>): Prisma__BinaryArtifactClient<$Result.GetResult<Prisma.$BinaryArtifactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BinaryArtifacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinaryArtifactCountArgs} args - Arguments to filter BinaryArtifacts to count.
     * @example
     * // Count the number of BinaryArtifacts
     * const count = await prisma.binaryArtifact.count({
     *   where: {
     *     // ... the filter for the BinaryArtifacts we want to count
     *   }
     * })
    **/
    count<T extends BinaryArtifactCountArgs>(
      args?: Subset<T, BinaryArtifactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BinaryArtifactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BinaryArtifact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinaryArtifactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BinaryArtifactAggregateArgs>(args: Subset<T, BinaryArtifactAggregateArgs>): Prisma.PrismaPromise<GetBinaryArtifactAggregateType<T>>

    /**
     * Group by BinaryArtifact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinaryArtifactGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BinaryArtifactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BinaryArtifactGroupByArgs['orderBy'] }
        : { orderBy?: BinaryArtifactGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BinaryArtifactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBinaryArtifactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BinaryArtifact model
   */
  readonly fields: BinaryArtifactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BinaryArtifact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BinaryArtifactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    analyzerPackage<T extends AnalyzerPackageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnalyzerPackageDefaultArgs<ExtArgs>>): Prisma__AnalyzerPackageClient<$Result.GetResult<Prisma.$AnalyzerPackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BinaryArtifact model
   */
  interface BinaryArtifactFieldRefs {
    readonly id: FieldRef<"BinaryArtifact", 'Int'>
    readonly url: FieldRef<"BinaryArtifact", 'String'>
    readonly packageId: FieldRef<"BinaryArtifact", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BinaryArtifact findUnique
   */
  export type BinaryArtifactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BinaryArtifact
     */
    select?: BinaryArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BinaryArtifact
     */
    omit?: BinaryArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinaryArtifactInclude<ExtArgs> | null
    /**
     * Filter, which BinaryArtifact to fetch.
     */
    where: BinaryArtifactWhereUniqueInput
  }

  /**
   * BinaryArtifact findUniqueOrThrow
   */
  export type BinaryArtifactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BinaryArtifact
     */
    select?: BinaryArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BinaryArtifact
     */
    omit?: BinaryArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinaryArtifactInclude<ExtArgs> | null
    /**
     * Filter, which BinaryArtifact to fetch.
     */
    where: BinaryArtifactWhereUniqueInput
  }

  /**
   * BinaryArtifact findFirst
   */
  export type BinaryArtifactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BinaryArtifact
     */
    select?: BinaryArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BinaryArtifact
     */
    omit?: BinaryArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinaryArtifactInclude<ExtArgs> | null
    /**
     * Filter, which BinaryArtifact to fetch.
     */
    where?: BinaryArtifactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BinaryArtifacts to fetch.
     */
    orderBy?: BinaryArtifactOrderByWithRelationInput | BinaryArtifactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BinaryArtifacts.
     */
    cursor?: BinaryArtifactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BinaryArtifacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BinaryArtifacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BinaryArtifacts.
     */
    distinct?: BinaryArtifactScalarFieldEnum | BinaryArtifactScalarFieldEnum[]
  }

  /**
   * BinaryArtifact findFirstOrThrow
   */
  export type BinaryArtifactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BinaryArtifact
     */
    select?: BinaryArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BinaryArtifact
     */
    omit?: BinaryArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinaryArtifactInclude<ExtArgs> | null
    /**
     * Filter, which BinaryArtifact to fetch.
     */
    where?: BinaryArtifactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BinaryArtifacts to fetch.
     */
    orderBy?: BinaryArtifactOrderByWithRelationInput | BinaryArtifactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BinaryArtifacts.
     */
    cursor?: BinaryArtifactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BinaryArtifacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BinaryArtifacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BinaryArtifacts.
     */
    distinct?: BinaryArtifactScalarFieldEnum | BinaryArtifactScalarFieldEnum[]
  }

  /**
   * BinaryArtifact findMany
   */
  export type BinaryArtifactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BinaryArtifact
     */
    select?: BinaryArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BinaryArtifact
     */
    omit?: BinaryArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinaryArtifactInclude<ExtArgs> | null
    /**
     * Filter, which BinaryArtifacts to fetch.
     */
    where?: BinaryArtifactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BinaryArtifacts to fetch.
     */
    orderBy?: BinaryArtifactOrderByWithRelationInput | BinaryArtifactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BinaryArtifacts.
     */
    cursor?: BinaryArtifactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BinaryArtifacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BinaryArtifacts.
     */
    skip?: number
    distinct?: BinaryArtifactScalarFieldEnum | BinaryArtifactScalarFieldEnum[]
  }

  /**
   * BinaryArtifact create
   */
  export type BinaryArtifactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BinaryArtifact
     */
    select?: BinaryArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BinaryArtifact
     */
    omit?: BinaryArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinaryArtifactInclude<ExtArgs> | null
    /**
     * The data needed to create a BinaryArtifact.
     */
    data: XOR<BinaryArtifactCreateInput, BinaryArtifactUncheckedCreateInput>
  }

  /**
   * BinaryArtifact createMany
   */
  export type BinaryArtifactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BinaryArtifacts.
     */
    data: BinaryArtifactCreateManyInput | BinaryArtifactCreateManyInput[]
  }

  /**
   * BinaryArtifact update
   */
  export type BinaryArtifactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BinaryArtifact
     */
    select?: BinaryArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BinaryArtifact
     */
    omit?: BinaryArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinaryArtifactInclude<ExtArgs> | null
    /**
     * The data needed to update a BinaryArtifact.
     */
    data: XOR<BinaryArtifactUpdateInput, BinaryArtifactUncheckedUpdateInput>
    /**
     * Choose, which BinaryArtifact to update.
     */
    where: BinaryArtifactWhereUniqueInput
  }

  /**
   * BinaryArtifact updateMany
   */
  export type BinaryArtifactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BinaryArtifacts.
     */
    data: XOR<BinaryArtifactUpdateManyMutationInput, BinaryArtifactUncheckedUpdateManyInput>
    /**
     * Filter which BinaryArtifacts to update
     */
    where?: BinaryArtifactWhereInput
    /**
     * Limit how many BinaryArtifacts to update.
     */
    limit?: number
  }

  /**
   * BinaryArtifact upsert
   */
  export type BinaryArtifactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BinaryArtifact
     */
    select?: BinaryArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BinaryArtifact
     */
    omit?: BinaryArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinaryArtifactInclude<ExtArgs> | null
    /**
     * The filter to search for the BinaryArtifact to update in case it exists.
     */
    where: BinaryArtifactWhereUniqueInput
    /**
     * In case the BinaryArtifact found by the `where` argument doesn't exist, create a new BinaryArtifact with this data.
     */
    create: XOR<BinaryArtifactCreateInput, BinaryArtifactUncheckedCreateInput>
    /**
     * In case the BinaryArtifact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BinaryArtifactUpdateInput, BinaryArtifactUncheckedUpdateInput>
  }

  /**
   * BinaryArtifact delete
   */
  export type BinaryArtifactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BinaryArtifact
     */
    select?: BinaryArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BinaryArtifact
     */
    omit?: BinaryArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinaryArtifactInclude<ExtArgs> | null
    /**
     * Filter which BinaryArtifact to delete.
     */
    where: BinaryArtifactWhereUniqueInput
  }

  /**
   * BinaryArtifact deleteMany
   */
  export type BinaryArtifactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BinaryArtifacts to delete
     */
    where?: BinaryArtifactWhereInput
    /**
     * Limit how many BinaryArtifacts to delete.
     */
    limit?: number
  }

  /**
   * BinaryArtifact without action
   */
  export type BinaryArtifactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BinaryArtifact
     */
    select?: BinaryArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BinaryArtifact
     */
    omit?: BinaryArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinaryArtifactInclude<ExtArgs> | null
  }


  /**
   * Model SourceArtifact
   */

  export type AggregateSourceArtifact = {
    _count: SourceArtifactCountAggregateOutputType | null
    _avg: SourceArtifactAvgAggregateOutputType | null
    _sum: SourceArtifactSumAggregateOutputType | null
    _min: SourceArtifactMinAggregateOutputType | null
    _max: SourceArtifactMaxAggregateOutputType | null
  }

  export type SourceArtifactAvgAggregateOutputType = {
    id: number | null
    packageId: number | null
  }

  export type SourceArtifactSumAggregateOutputType = {
    id: number | null
    packageId: number | null
  }

  export type SourceArtifactMinAggregateOutputType = {
    id: number | null
    url: string | null
    packageId: number | null
  }

  export type SourceArtifactMaxAggregateOutputType = {
    id: number | null
    url: string | null
    packageId: number | null
  }

  export type SourceArtifactCountAggregateOutputType = {
    id: number
    url: number
    packageId: number
    _all: number
  }


  export type SourceArtifactAvgAggregateInputType = {
    id?: true
    packageId?: true
  }

  export type SourceArtifactSumAggregateInputType = {
    id?: true
    packageId?: true
  }

  export type SourceArtifactMinAggregateInputType = {
    id?: true
    url?: true
    packageId?: true
  }

  export type SourceArtifactMaxAggregateInputType = {
    id?: true
    url?: true
    packageId?: true
  }

  export type SourceArtifactCountAggregateInputType = {
    id?: true
    url?: true
    packageId?: true
    _all?: true
  }

  export type SourceArtifactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SourceArtifact to aggregate.
     */
    where?: SourceArtifactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourceArtifacts to fetch.
     */
    orderBy?: SourceArtifactOrderByWithRelationInput | SourceArtifactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SourceArtifactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourceArtifacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourceArtifacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SourceArtifacts
    **/
    _count?: true | SourceArtifactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SourceArtifactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SourceArtifactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SourceArtifactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SourceArtifactMaxAggregateInputType
  }

  export type GetSourceArtifactAggregateType<T extends SourceArtifactAggregateArgs> = {
        [P in keyof T & keyof AggregateSourceArtifact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSourceArtifact[P]>
      : GetScalarType<T[P], AggregateSourceArtifact[P]>
  }




  export type SourceArtifactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SourceArtifactWhereInput
    orderBy?: SourceArtifactOrderByWithAggregationInput | SourceArtifactOrderByWithAggregationInput[]
    by: SourceArtifactScalarFieldEnum[] | SourceArtifactScalarFieldEnum
    having?: SourceArtifactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SourceArtifactCountAggregateInputType | true
    _avg?: SourceArtifactAvgAggregateInputType
    _sum?: SourceArtifactSumAggregateInputType
    _min?: SourceArtifactMinAggregateInputType
    _max?: SourceArtifactMaxAggregateInputType
  }

  export type SourceArtifactGroupByOutputType = {
    id: number
    url: string
    packageId: number
    _count: SourceArtifactCountAggregateOutputType | null
    _avg: SourceArtifactAvgAggregateOutputType | null
    _sum: SourceArtifactSumAggregateOutputType | null
    _min: SourceArtifactMinAggregateOutputType | null
    _max: SourceArtifactMaxAggregateOutputType | null
  }

  type GetSourceArtifactGroupByPayload<T extends SourceArtifactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SourceArtifactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SourceArtifactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SourceArtifactGroupByOutputType[P]>
            : GetScalarType<T[P], SourceArtifactGroupByOutputType[P]>
        }
      >
    >


  export type SourceArtifactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    packageId?: boolean
    analyzerPackage?: boolean | AnalyzerPackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sourceArtifact"]>



  export type SourceArtifactSelectScalar = {
    id?: boolean
    url?: boolean
    packageId?: boolean
  }

  export type SourceArtifactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "packageId", ExtArgs["result"]["sourceArtifact"]>
  export type SourceArtifactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    analyzerPackage?: boolean | AnalyzerPackageDefaultArgs<ExtArgs>
  }

  export type $SourceArtifactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SourceArtifact"
    objects: {
      analyzerPackage: Prisma.$AnalyzerPackagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      packageId: number
    }, ExtArgs["result"]["sourceArtifact"]>
    composites: {}
  }

  type SourceArtifactGetPayload<S extends boolean | null | undefined | SourceArtifactDefaultArgs> = $Result.GetResult<Prisma.$SourceArtifactPayload, S>

  type SourceArtifactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SourceArtifactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SourceArtifactCountAggregateInputType | true
    }

  export interface SourceArtifactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SourceArtifact'], meta: { name: 'SourceArtifact' } }
    /**
     * Find zero or one SourceArtifact that matches the filter.
     * @param {SourceArtifactFindUniqueArgs} args - Arguments to find a SourceArtifact
     * @example
     * // Get one SourceArtifact
     * const sourceArtifact = await prisma.sourceArtifact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SourceArtifactFindUniqueArgs>(args: SelectSubset<T, SourceArtifactFindUniqueArgs<ExtArgs>>): Prisma__SourceArtifactClient<$Result.GetResult<Prisma.$SourceArtifactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SourceArtifact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SourceArtifactFindUniqueOrThrowArgs} args - Arguments to find a SourceArtifact
     * @example
     * // Get one SourceArtifact
     * const sourceArtifact = await prisma.sourceArtifact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SourceArtifactFindUniqueOrThrowArgs>(args: SelectSubset<T, SourceArtifactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SourceArtifactClient<$Result.GetResult<Prisma.$SourceArtifactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SourceArtifact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceArtifactFindFirstArgs} args - Arguments to find a SourceArtifact
     * @example
     * // Get one SourceArtifact
     * const sourceArtifact = await prisma.sourceArtifact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SourceArtifactFindFirstArgs>(args?: SelectSubset<T, SourceArtifactFindFirstArgs<ExtArgs>>): Prisma__SourceArtifactClient<$Result.GetResult<Prisma.$SourceArtifactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SourceArtifact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceArtifactFindFirstOrThrowArgs} args - Arguments to find a SourceArtifact
     * @example
     * // Get one SourceArtifact
     * const sourceArtifact = await prisma.sourceArtifact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SourceArtifactFindFirstOrThrowArgs>(args?: SelectSubset<T, SourceArtifactFindFirstOrThrowArgs<ExtArgs>>): Prisma__SourceArtifactClient<$Result.GetResult<Prisma.$SourceArtifactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SourceArtifacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceArtifactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SourceArtifacts
     * const sourceArtifacts = await prisma.sourceArtifact.findMany()
     * 
     * // Get first 10 SourceArtifacts
     * const sourceArtifacts = await prisma.sourceArtifact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sourceArtifactWithIdOnly = await prisma.sourceArtifact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SourceArtifactFindManyArgs>(args?: SelectSubset<T, SourceArtifactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourceArtifactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SourceArtifact.
     * @param {SourceArtifactCreateArgs} args - Arguments to create a SourceArtifact.
     * @example
     * // Create one SourceArtifact
     * const SourceArtifact = await prisma.sourceArtifact.create({
     *   data: {
     *     // ... data to create a SourceArtifact
     *   }
     * })
     * 
     */
    create<T extends SourceArtifactCreateArgs>(args: SelectSubset<T, SourceArtifactCreateArgs<ExtArgs>>): Prisma__SourceArtifactClient<$Result.GetResult<Prisma.$SourceArtifactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SourceArtifacts.
     * @param {SourceArtifactCreateManyArgs} args - Arguments to create many SourceArtifacts.
     * @example
     * // Create many SourceArtifacts
     * const sourceArtifact = await prisma.sourceArtifact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SourceArtifactCreateManyArgs>(args?: SelectSubset<T, SourceArtifactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SourceArtifact.
     * @param {SourceArtifactDeleteArgs} args - Arguments to delete one SourceArtifact.
     * @example
     * // Delete one SourceArtifact
     * const SourceArtifact = await prisma.sourceArtifact.delete({
     *   where: {
     *     // ... filter to delete one SourceArtifact
     *   }
     * })
     * 
     */
    delete<T extends SourceArtifactDeleteArgs>(args: SelectSubset<T, SourceArtifactDeleteArgs<ExtArgs>>): Prisma__SourceArtifactClient<$Result.GetResult<Prisma.$SourceArtifactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SourceArtifact.
     * @param {SourceArtifactUpdateArgs} args - Arguments to update one SourceArtifact.
     * @example
     * // Update one SourceArtifact
     * const sourceArtifact = await prisma.sourceArtifact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SourceArtifactUpdateArgs>(args: SelectSubset<T, SourceArtifactUpdateArgs<ExtArgs>>): Prisma__SourceArtifactClient<$Result.GetResult<Prisma.$SourceArtifactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SourceArtifacts.
     * @param {SourceArtifactDeleteManyArgs} args - Arguments to filter SourceArtifacts to delete.
     * @example
     * // Delete a few SourceArtifacts
     * const { count } = await prisma.sourceArtifact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SourceArtifactDeleteManyArgs>(args?: SelectSubset<T, SourceArtifactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SourceArtifacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceArtifactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SourceArtifacts
     * const sourceArtifact = await prisma.sourceArtifact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SourceArtifactUpdateManyArgs>(args: SelectSubset<T, SourceArtifactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SourceArtifact.
     * @param {SourceArtifactUpsertArgs} args - Arguments to update or create a SourceArtifact.
     * @example
     * // Update or create a SourceArtifact
     * const sourceArtifact = await prisma.sourceArtifact.upsert({
     *   create: {
     *     // ... data to create a SourceArtifact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SourceArtifact we want to update
     *   }
     * })
     */
    upsert<T extends SourceArtifactUpsertArgs>(args: SelectSubset<T, SourceArtifactUpsertArgs<ExtArgs>>): Prisma__SourceArtifactClient<$Result.GetResult<Prisma.$SourceArtifactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SourceArtifacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceArtifactCountArgs} args - Arguments to filter SourceArtifacts to count.
     * @example
     * // Count the number of SourceArtifacts
     * const count = await prisma.sourceArtifact.count({
     *   where: {
     *     // ... the filter for the SourceArtifacts we want to count
     *   }
     * })
    **/
    count<T extends SourceArtifactCountArgs>(
      args?: Subset<T, SourceArtifactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SourceArtifactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SourceArtifact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceArtifactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SourceArtifactAggregateArgs>(args: Subset<T, SourceArtifactAggregateArgs>): Prisma.PrismaPromise<GetSourceArtifactAggregateType<T>>

    /**
     * Group by SourceArtifact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceArtifactGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SourceArtifactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SourceArtifactGroupByArgs['orderBy'] }
        : { orderBy?: SourceArtifactGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SourceArtifactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSourceArtifactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SourceArtifact model
   */
  readonly fields: SourceArtifactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SourceArtifact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SourceArtifactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    analyzerPackage<T extends AnalyzerPackageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnalyzerPackageDefaultArgs<ExtArgs>>): Prisma__AnalyzerPackageClient<$Result.GetResult<Prisma.$AnalyzerPackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SourceArtifact model
   */
  interface SourceArtifactFieldRefs {
    readonly id: FieldRef<"SourceArtifact", 'Int'>
    readonly url: FieldRef<"SourceArtifact", 'String'>
    readonly packageId: FieldRef<"SourceArtifact", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SourceArtifact findUnique
   */
  export type SourceArtifactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceArtifact
     */
    select?: SourceArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceArtifact
     */
    omit?: SourceArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceArtifactInclude<ExtArgs> | null
    /**
     * Filter, which SourceArtifact to fetch.
     */
    where: SourceArtifactWhereUniqueInput
  }

  /**
   * SourceArtifact findUniqueOrThrow
   */
  export type SourceArtifactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceArtifact
     */
    select?: SourceArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceArtifact
     */
    omit?: SourceArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceArtifactInclude<ExtArgs> | null
    /**
     * Filter, which SourceArtifact to fetch.
     */
    where: SourceArtifactWhereUniqueInput
  }

  /**
   * SourceArtifact findFirst
   */
  export type SourceArtifactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceArtifact
     */
    select?: SourceArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceArtifact
     */
    omit?: SourceArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceArtifactInclude<ExtArgs> | null
    /**
     * Filter, which SourceArtifact to fetch.
     */
    where?: SourceArtifactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourceArtifacts to fetch.
     */
    orderBy?: SourceArtifactOrderByWithRelationInput | SourceArtifactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SourceArtifacts.
     */
    cursor?: SourceArtifactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourceArtifacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourceArtifacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SourceArtifacts.
     */
    distinct?: SourceArtifactScalarFieldEnum | SourceArtifactScalarFieldEnum[]
  }

  /**
   * SourceArtifact findFirstOrThrow
   */
  export type SourceArtifactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceArtifact
     */
    select?: SourceArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceArtifact
     */
    omit?: SourceArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceArtifactInclude<ExtArgs> | null
    /**
     * Filter, which SourceArtifact to fetch.
     */
    where?: SourceArtifactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourceArtifacts to fetch.
     */
    orderBy?: SourceArtifactOrderByWithRelationInput | SourceArtifactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SourceArtifacts.
     */
    cursor?: SourceArtifactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourceArtifacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourceArtifacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SourceArtifacts.
     */
    distinct?: SourceArtifactScalarFieldEnum | SourceArtifactScalarFieldEnum[]
  }

  /**
   * SourceArtifact findMany
   */
  export type SourceArtifactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceArtifact
     */
    select?: SourceArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceArtifact
     */
    omit?: SourceArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceArtifactInclude<ExtArgs> | null
    /**
     * Filter, which SourceArtifacts to fetch.
     */
    where?: SourceArtifactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourceArtifacts to fetch.
     */
    orderBy?: SourceArtifactOrderByWithRelationInput | SourceArtifactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SourceArtifacts.
     */
    cursor?: SourceArtifactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourceArtifacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourceArtifacts.
     */
    skip?: number
    distinct?: SourceArtifactScalarFieldEnum | SourceArtifactScalarFieldEnum[]
  }

  /**
   * SourceArtifact create
   */
  export type SourceArtifactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceArtifact
     */
    select?: SourceArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceArtifact
     */
    omit?: SourceArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceArtifactInclude<ExtArgs> | null
    /**
     * The data needed to create a SourceArtifact.
     */
    data: XOR<SourceArtifactCreateInput, SourceArtifactUncheckedCreateInput>
  }

  /**
   * SourceArtifact createMany
   */
  export type SourceArtifactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SourceArtifacts.
     */
    data: SourceArtifactCreateManyInput | SourceArtifactCreateManyInput[]
  }

  /**
   * SourceArtifact update
   */
  export type SourceArtifactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceArtifact
     */
    select?: SourceArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceArtifact
     */
    omit?: SourceArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceArtifactInclude<ExtArgs> | null
    /**
     * The data needed to update a SourceArtifact.
     */
    data: XOR<SourceArtifactUpdateInput, SourceArtifactUncheckedUpdateInput>
    /**
     * Choose, which SourceArtifact to update.
     */
    where: SourceArtifactWhereUniqueInput
  }

  /**
   * SourceArtifact updateMany
   */
  export type SourceArtifactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SourceArtifacts.
     */
    data: XOR<SourceArtifactUpdateManyMutationInput, SourceArtifactUncheckedUpdateManyInput>
    /**
     * Filter which SourceArtifacts to update
     */
    where?: SourceArtifactWhereInput
    /**
     * Limit how many SourceArtifacts to update.
     */
    limit?: number
  }

  /**
   * SourceArtifact upsert
   */
  export type SourceArtifactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceArtifact
     */
    select?: SourceArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceArtifact
     */
    omit?: SourceArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceArtifactInclude<ExtArgs> | null
    /**
     * The filter to search for the SourceArtifact to update in case it exists.
     */
    where: SourceArtifactWhereUniqueInput
    /**
     * In case the SourceArtifact found by the `where` argument doesn't exist, create a new SourceArtifact with this data.
     */
    create: XOR<SourceArtifactCreateInput, SourceArtifactUncheckedCreateInput>
    /**
     * In case the SourceArtifact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SourceArtifactUpdateInput, SourceArtifactUncheckedUpdateInput>
  }

  /**
   * SourceArtifact delete
   */
  export type SourceArtifactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceArtifact
     */
    select?: SourceArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceArtifact
     */
    omit?: SourceArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceArtifactInclude<ExtArgs> | null
    /**
     * Filter which SourceArtifact to delete.
     */
    where: SourceArtifactWhereUniqueInput
  }

  /**
   * SourceArtifact deleteMany
   */
  export type SourceArtifactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SourceArtifacts to delete
     */
    where?: SourceArtifactWhereInput
    /**
     * Limit how many SourceArtifacts to delete.
     */
    limit?: number
  }

  /**
   * SourceArtifact without action
   */
  export type SourceArtifactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceArtifact
     */
    select?: SourceArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceArtifact
     */
    omit?: SourceArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceArtifactInclude<ExtArgs> | null
  }


  /**
   * Model Vcs
   */

  export type AggregateVcs = {
    _count: VcsCountAggregateOutputType | null
    _avg: VcsAvgAggregateOutputType | null
    _sum: VcsSumAggregateOutputType | null
    _min: VcsMinAggregateOutputType | null
    _max: VcsMaxAggregateOutputType | null
  }

  export type VcsAvgAggregateOutputType = {
    id: number | null
    packageId: number | null
  }

  export type VcsSumAggregateOutputType = {
    id: number | null
    packageId: number | null
  }

  export type VcsMinAggregateOutputType = {
    id: number | null
    type: string | null
    url: string | null
    revision: string | null
    path: string | null
    packageId: number | null
  }

  export type VcsMaxAggregateOutputType = {
    id: number | null
    type: string | null
    url: string | null
    revision: string | null
    path: string | null
    packageId: number | null
  }

  export type VcsCountAggregateOutputType = {
    id: number
    type: number
    url: number
    revision: number
    path: number
    packageId: number
    _all: number
  }


  export type VcsAvgAggregateInputType = {
    id?: true
    packageId?: true
  }

  export type VcsSumAggregateInputType = {
    id?: true
    packageId?: true
  }

  export type VcsMinAggregateInputType = {
    id?: true
    type?: true
    url?: true
    revision?: true
    path?: true
    packageId?: true
  }

  export type VcsMaxAggregateInputType = {
    id?: true
    type?: true
    url?: true
    revision?: true
    path?: true
    packageId?: true
  }

  export type VcsCountAggregateInputType = {
    id?: true
    type?: true
    url?: true
    revision?: true
    path?: true
    packageId?: true
    _all?: true
  }

  export type VcsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vcs to aggregate.
     */
    where?: VcsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vcs to fetch.
     */
    orderBy?: VcsOrderByWithRelationInput | VcsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VcsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vcs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vcs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vcs
    **/
    _count?: true | VcsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VcsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VcsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VcsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VcsMaxAggregateInputType
  }

  export type GetVcsAggregateType<T extends VcsAggregateArgs> = {
        [P in keyof T & keyof AggregateVcs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVcs[P]>
      : GetScalarType<T[P], AggregateVcs[P]>
  }




  export type VcsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VcsWhereInput
    orderBy?: VcsOrderByWithAggregationInput | VcsOrderByWithAggregationInput[]
    by: VcsScalarFieldEnum[] | VcsScalarFieldEnum
    having?: VcsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VcsCountAggregateInputType | true
    _avg?: VcsAvgAggregateInputType
    _sum?: VcsSumAggregateInputType
    _min?: VcsMinAggregateInputType
    _max?: VcsMaxAggregateInputType
  }

  export type VcsGroupByOutputType = {
    id: number
    type: string
    url: string
    revision: string
    path: string
    packageId: number
    _count: VcsCountAggregateOutputType | null
    _avg: VcsAvgAggregateOutputType | null
    _sum: VcsSumAggregateOutputType | null
    _min: VcsMinAggregateOutputType | null
    _max: VcsMaxAggregateOutputType | null
  }

  type GetVcsGroupByPayload<T extends VcsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VcsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VcsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VcsGroupByOutputType[P]>
            : GetScalarType<T[P], VcsGroupByOutputType[P]>
        }
      >
    >


  export type VcsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    url?: boolean
    revision?: boolean
    path?: boolean
    packageId?: boolean
    analyzerPackage?: boolean | AnalyzerPackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vcs"]>



  export type VcsSelectScalar = {
    id?: boolean
    type?: boolean
    url?: boolean
    revision?: boolean
    path?: boolean
    packageId?: boolean
  }

  export type VcsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "url" | "revision" | "path" | "packageId", ExtArgs["result"]["vcs"]>
  export type VcsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    analyzerPackage?: boolean | AnalyzerPackageDefaultArgs<ExtArgs>
  }

  export type $VcsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vcs"
    objects: {
      analyzerPackage: Prisma.$AnalyzerPackagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string
      url: string
      revision: string
      path: string
      packageId: number
    }, ExtArgs["result"]["vcs"]>
    composites: {}
  }

  type VcsGetPayload<S extends boolean | null | undefined | VcsDefaultArgs> = $Result.GetResult<Prisma.$VcsPayload, S>

  type VcsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VcsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VcsCountAggregateInputType | true
    }

  export interface VcsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vcs'], meta: { name: 'Vcs' } }
    /**
     * Find zero or one Vcs that matches the filter.
     * @param {VcsFindUniqueArgs} args - Arguments to find a Vcs
     * @example
     * // Get one Vcs
     * const vcs = await prisma.vcs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VcsFindUniqueArgs>(args: SelectSubset<T, VcsFindUniqueArgs<ExtArgs>>): Prisma__VcsClient<$Result.GetResult<Prisma.$VcsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vcs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VcsFindUniqueOrThrowArgs} args - Arguments to find a Vcs
     * @example
     * // Get one Vcs
     * const vcs = await prisma.vcs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VcsFindUniqueOrThrowArgs>(args: SelectSubset<T, VcsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VcsClient<$Result.GetResult<Prisma.$VcsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vcs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VcsFindFirstArgs} args - Arguments to find a Vcs
     * @example
     * // Get one Vcs
     * const vcs = await prisma.vcs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VcsFindFirstArgs>(args?: SelectSubset<T, VcsFindFirstArgs<ExtArgs>>): Prisma__VcsClient<$Result.GetResult<Prisma.$VcsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vcs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VcsFindFirstOrThrowArgs} args - Arguments to find a Vcs
     * @example
     * // Get one Vcs
     * const vcs = await prisma.vcs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VcsFindFirstOrThrowArgs>(args?: SelectSubset<T, VcsFindFirstOrThrowArgs<ExtArgs>>): Prisma__VcsClient<$Result.GetResult<Prisma.$VcsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vcs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VcsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vcs
     * const vcs = await prisma.vcs.findMany()
     * 
     * // Get first 10 Vcs
     * const vcs = await prisma.vcs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vcsWithIdOnly = await prisma.vcs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VcsFindManyArgs>(args?: SelectSubset<T, VcsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VcsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vcs.
     * @param {VcsCreateArgs} args - Arguments to create a Vcs.
     * @example
     * // Create one Vcs
     * const Vcs = await prisma.vcs.create({
     *   data: {
     *     // ... data to create a Vcs
     *   }
     * })
     * 
     */
    create<T extends VcsCreateArgs>(args: SelectSubset<T, VcsCreateArgs<ExtArgs>>): Prisma__VcsClient<$Result.GetResult<Prisma.$VcsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vcs.
     * @param {VcsCreateManyArgs} args - Arguments to create many Vcs.
     * @example
     * // Create many Vcs
     * const vcs = await prisma.vcs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VcsCreateManyArgs>(args?: SelectSubset<T, VcsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vcs.
     * @param {VcsDeleteArgs} args - Arguments to delete one Vcs.
     * @example
     * // Delete one Vcs
     * const Vcs = await prisma.vcs.delete({
     *   where: {
     *     // ... filter to delete one Vcs
     *   }
     * })
     * 
     */
    delete<T extends VcsDeleteArgs>(args: SelectSubset<T, VcsDeleteArgs<ExtArgs>>): Prisma__VcsClient<$Result.GetResult<Prisma.$VcsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vcs.
     * @param {VcsUpdateArgs} args - Arguments to update one Vcs.
     * @example
     * // Update one Vcs
     * const vcs = await prisma.vcs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VcsUpdateArgs>(args: SelectSubset<T, VcsUpdateArgs<ExtArgs>>): Prisma__VcsClient<$Result.GetResult<Prisma.$VcsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vcs.
     * @param {VcsDeleteManyArgs} args - Arguments to filter Vcs to delete.
     * @example
     * // Delete a few Vcs
     * const { count } = await prisma.vcs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VcsDeleteManyArgs>(args?: SelectSubset<T, VcsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vcs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VcsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vcs
     * const vcs = await prisma.vcs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VcsUpdateManyArgs>(args: SelectSubset<T, VcsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vcs.
     * @param {VcsUpsertArgs} args - Arguments to update or create a Vcs.
     * @example
     * // Update or create a Vcs
     * const vcs = await prisma.vcs.upsert({
     *   create: {
     *     // ... data to create a Vcs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vcs we want to update
     *   }
     * })
     */
    upsert<T extends VcsUpsertArgs>(args: SelectSubset<T, VcsUpsertArgs<ExtArgs>>): Prisma__VcsClient<$Result.GetResult<Prisma.$VcsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vcs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VcsCountArgs} args - Arguments to filter Vcs to count.
     * @example
     * // Count the number of Vcs
     * const count = await prisma.vcs.count({
     *   where: {
     *     // ... the filter for the Vcs we want to count
     *   }
     * })
    **/
    count<T extends VcsCountArgs>(
      args?: Subset<T, VcsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VcsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vcs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VcsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VcsAggregateArgs>(args: Subset<T, VcsAggregateArgs>): Prisma.PrismaPromise<GetVcsAggregateType<T>>

    /**
     * Group by Vcs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VcsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VcsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VcsGroupByArgs['orderBy'] }
        : { orderBy?: VcsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VcsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVcsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vcs model
   */
  readonly fields: VcsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vcs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VcsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    analyzerPackage<T extends AnalyzerPackageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnalyzerPackageDefaultArgs<ExtArgs>>): Prisma__AnalyzerPackageClient<$Result.GetResult<Prisma.$AnalyzerPackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vcs model
   */
  interface VcsFieldRefs {
    readonly id: FieldRef<"Vcs", 'Int'>
    readonly type: FieldRef<"Vcs", 'String'>
    readonly url: FieldRef<"Vcs", 'String'>
    readonly revision: FieldRef<"Vcs", 'String'>
    readonly path: FieldRef<"Vcs", 'String'>
    readonly packageId: FieldRef<"Vcs", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Vcs findUnique
   */
  export type VcsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vcs
     */
    select?: VcsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vcs
     */
    omit?: VcsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VcsInclude<ExtArgs> | null
    /**
     * Filter, which Vcs to fetch.
     */
    where: VcsWhereUniqueInput
  }

  /**
   * Vcs findUniqueOrThrow
   */
  export type VcsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vcs
     */
    select?: VcsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vcs
     */
    omit?: VcsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VcsInclude<ExtArgs> | null
    /**
     * Filter, which Vcs to fetch.
     */
    where: VcsWhereUniqueInput
  }

  /**
   * Vcs findFirst
   */
  export type VcsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vcs
     */
    select?: VcsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vcs
     */
    omit?: VcsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VcsInclude<ExtArgs> | null
    /**
     * Filter, which Vcs to fetch.
     */
    where?: VcsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vcs to fetch.
     */
    orderBy?: VcsOrderByWithRelationInput | VcsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vcs.
     */
    cursor?: VcsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vcs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vcs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vcs.
     */
    distinct?: VcsScalarFieldEnum | VcsScalarFieldEnum[]
  }

  /**
   * Vcs findFirstOrThrow
   */
  export type VcsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vcs
     */
    select?: VcsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vcs
     */
    omit?: VcsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VcsInclude<ExtArgs> | null
    /**
     * Filter, which Vcs to fetch.
     */
    where?: VcsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vcs to fetch.
     */
    orderBy?: VcsOrderByWithRelationInput | VcsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vcs.
     */
    cursor?: VcsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vcs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vcs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vcs.
     */
    distinct?: VcsScalarFieldEnum | VcsScalarFieldEnum[]
  }

  /**
   * Vcs findMany
   */
  export type VcsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vcs
     */
    select?: VcsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vcs
     */
    omit?: VcsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VcsInclude<ExtArgs> | null
    /**
     * Filter, which Vcs to fetch.
     */
    where?: VcsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vcs to fetch.
     */
    orderBy?: VcsOrderByWithRelationInput | VcsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vcs.
     */
    cursor?: VcsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vcs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vcs.
     */
    skip?: number
    distinct?: VcsScalarFieldEnum | VcsScalarFieldEnum[]
  }

  /**
   * Vcs create
   */
  export type VcsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vcs
     */
    select?: VcsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vcs
     */
    omit?: VcsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VcsInclude<ExtArgs> | null
    /**
     * The data needed to create a Vcs.
     */
    data: XOR<VcsCreateInput, VcsUncheckedCreateInput>
  }

  /**
   * Vcs createMany
   */
  export type VcsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vcs.
     */
    data: VcsCreateManyInput | VcsCreateManyInput[]
  }

  /**
   * Vcs update
   */
  export type VcsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vcs
     */
    select?: VcsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vcs
     */
    omit?: VcsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VcsInclude<ExtArgs> | null
    /**
     * The data needed to update a Vcs.
     */
    data: XOR<VcsUpdateInput, VcsUncheckedUpdateInput>
    /**
     * Choose, which Vcs to update.
     */
    where: VcsWhereUniqueInput
  }

  /**
   * Vcs updateMany
   */
  export type VcsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vcs.
     */
    data: XOR<VcsUpdateManyMutationInput, VcsUncheckedUpdateManyInput>
    /**
     * Filter which Vcs to update
     */
    where?: VcsWhereInput
    /**
     * Limit how many Vcs to update.
     */
    limit?: number
  }

  /**
   * Vcs upsert
   */
  export type VcsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vcs
     */
    select?: VcsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vcs
     */
    omit?: VcsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VcsInclude<ExtArgs> | null
    /**
     * The filter to search for the Vcs to update in case it exists.
     */
    where: VcsWhereUniqueInput
    /**
     * In case the Vcs found by the `where` argument doesn't exist, create a new Vcs with this data.
     */
    create: XOR<VcsCreateInput, VcsUncheckedCreateInput>
    /**
     * In case the Vcs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VcsUpdateInput, VcsUncheckedUpdateInput>
  }

  /**
   * Vcs delete
   */
  export type VcsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vcs
     */
    select?: VcsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vcs
     */
    omit?: VcsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VcsInclude<ExtArgs> | null
    /**
     * Filter which Vcs to delete.
     */
    where: VcsWhereUniqueInput
  }

  /**
   * Vcs deleteMany
   */
  export type VcsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vcs to delete
     */
    where?: VcsWhereInput
    /**
     * Limit how many Vcs to delete.
     */
    limit?: number
  }

  /**
   * Vcs without action
   */
  export type VcsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vcs
     */
    select?: VcsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vcs
     */
    omit?: VcsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VcsInclude<ExtArgs> | null
  }


  /**
   * Model VcsProcessed
   */

  export type AggregateVcsProcessed = {
    _count: VcsProcessedCountAggregateOutputType | null
    _avg: VcsProcessedAvgAggregateOutputType | null
    _sum: VcsProcessedSumAggregateOutputType | null
    _min: VcsProcessedMinAggregateOutputType | null
    _max: VcsProcessedMaxAggregateOutputType | null
  }

  export type VcsProcessedAvgAggregateOutputType = {
    id: number | null
    packageId: number | null
  }

  export type VcsProcessedSumAggregateOutputType = {
    id: number | null
    packageId: number | null
  }

  export type VcsProcessedMinAggregateOutputType = {
    id: number | null
    type: string | null
    url: string | null
    revision: string | null
    path: string | null
    packageId: number | null
  }

  export type VcsProcessedMaxAggregateOutputType = {
    id: number | null
    type: string | null
    url: string | null
    revision: string | null
    path: string | null
    packageId: number | null
  }

  export type VcsProcessedCountAggregateOutputType = {
    id: number
    type: number
    url: number
    revision: number
    path: number
    packageId: number
    _all: number
  }


  export type VcsProcessedAvgAggregateInputType = {
    id?: true
    packageId?: true
  }

  export type VcsProcessedSumAggregateInputType = {
    id?: true
    packageId?: true
  }

  export type VcsProcessedMinAggregateInputType = {
    id?: true
    type?: true
    url?: true
    revision?: true
    path?: true
    packageId?: true
  }

  export type VcsProcessedMaxAggregateInputType = {
    id?: true
    type?: true
    url?: true
    revision?: true
    path?: true
    packageId?: true
  }

  export type VcsProcessedCountAggregateInputType = {
    id?: true
    type?: true
    url?: true
    revision?: true
    path?: true
    packageId?: true
    _all?: true
  }

  export type VcsProcessedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VcsProcessed to aggregate.
     */
    where?: VcsProcessedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VcsProcesseds to fetch.
     */
    orderBy?: VcsProcessedOrderByWithRelationInput | VcsProcessedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VcsProcessedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VcsProcesseds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VcsProcesseds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VcsProcesseds
    **/
    _count?: true | VcsProcessedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VcsProcessedAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VcsProcessedSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VcsProcessedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VcsProcessedMaxAggregateInputType
  }

  export type GetVcsProcessedAggregateType<T extends VcsProcessedAggregateArgs> = {
        [P in keyof T & keyof AggregateVcsProcessed]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVcsProcessed[P]>
      : GetScalarType<T[P], AggregateVcsProcessed[P]>
  }




  export type VcsProcessedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VcsProcessedWhereInput
    orderBy?: VcsProcessedOrderByWithAggregationInput | VcsProcessedOrderByWithAggregationInput[]
    by: VcsProcessedScalarFieldEnum[] | VcsProcessedScalarFieldEnum
    having?: VcsProcessedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VcsProcessedCountAggregateInputType | true
    _avg?: VcsProcessedAvgAggregateInputType
    _sum?: VcsProcessedSumAggregateInputType
    _min?: VcsProcessedMinAggregateInputType
    _max?: VcsProcessedMaxAggregateInputType
  }

  export type VcsProcessedGroupByOutputType = {
    id: number
    type: string
    url: string
    revision: string
    path: string
    packageId: number
    _count: VcsProcessedCountAggregateOutputType | null
    _avg: VcsProcessedAvgAggregateOutputType | null
    _sum: VcsProcessedSumAggregateOutputType | null
    _min: VcsProcessedMinAggregateOutputType | null
    _max: VcsProcessedMaxAggregateOutputType | null
  }

  type GetVcsProcessedGroupByPayload<T extends VcsProcessedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VcsProcessedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VcsProcessedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VcsProcessedGroupByOutputType[P]>
            : GetScalarType<T[P], VcsProcessedGroupByOutputType[P]>
        }
      >
    >


  export type VcsProcessedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    url?: boolean
    revision?: boolean
    path?: boolean
    packageId?: boolean
    analyzerPackage?: boolean | AnalyzerPackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vcsProcessed"]>



  export type VcsProcessedSelectScalar = {
    id?: boolean
    type?: boolean
    url?: boolean
    revision?: boolean
    path?: boolean
    packageId?: boolean
  }

  export type VcsProcessedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "url" | "revision" | "path" | "packageId", ExtArgs["result"]["vcsProcessed"]>
  export type VcsProcessedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    analyzerPackage?: boolean | AnalyzerPackageDefaultArgs<ExtArgs>
  }

  export type $VcsProcessedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VcsProcessed"
    objects: {
      analyzerPackage: Prisma.$AnalyzerPackagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string
      url: string
      revision: string
      path: string
      packageId: number
    }, ExtArgs["result"]["vcsProcessed"]>
    composites: {}
  }

  type VcsProcessedGetPayload<S extends boolean | null | undefined | VcsProcessedDefaultArgs> = $Result.GetResult<Prisma.$VcsProcessedPayload, S>

  type VcsProcessedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VcsProcessedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VcsProcessedCountAggregateInputType | true
    }

  export interface VcsProcessedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VcsProcessed'], meta: { name: 'VcsProcessed' } }
    /**
     * Find zero or one VcsProcessed that matches the filter.
     * @param {VcsProcessedFindUniqueArgs} args - Arguments to find a VcsProcessed
     * @example
     * // Get one VcsProcessed
     * const vcsProcessed = await prisma.vcsProcessed.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VcsProcessedFindUniqueArgs>(args: SelectSubset<T, VcsProcessedFindUniqueArgs<ExtArgs>>): Prisma__VcsProcessedClient<$Result.GetResult<Prisma.$VcsProcessedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VcsProcessed that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VcsProcessedFindUniqueOrThrowArgs} args - Arguments to find a VcsProcessed
     * @example
     * // Get one VcsProcessed
     * const vcsProcessed = await prisma.vcsProcessed.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VcsProcessedFindUniqueOrThrowArgs>(args: SelectSubset<T, VcsProcessedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VcsProcessedClient<$Result.GetResult<Prisma.$VcsProcessedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VcsProcessed that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VcsProcessedFindFirstArgs} args - Arguments to find a VcsProcessed
     * @example
     * // Get one VcsProcessed
     * const vcsProcessed = await prisma.vcsProcessed.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VcsProcessedFindFirstArgs>(args?: SelectSubset<T, VcsProcessedFindFirstArgs<ExtArgs>>): Prisma__VcsProcessedClient<$Result.GetResult<Prisma.$VcsProcessedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VcsProcessed that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VcsProcessedFindFirstOrThrowArgs} args - Arguments to find a VcsProcessed
     * @example
     * // Get one VcsProcessed
     * const vcsProcessed = await prisma.vcsProcessed.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VcsProcessedFindFirstOrThrowArgs>(args?: SelectSubset<T, VcsProcessedFindFirstOrThrowArgs<ExtArgs>>): Prisma__VcsProcessedClient<$Result.GetResult<Prisma.$VcsProcessedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VcsProcesseds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VcsProcessedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VcsProcesseds
     * const vcsProcesseds = await prisma.vcsProcessed.findMany()
     * 
     * // Get first 10 VcsProcesseds
     * const vcsProcesseds = await prisma.vcsProcessed.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vcsProcessedWithIdOnly = await prisma.vcsProcessed.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VcsProcessedFindManyArgs>(args?: SelectSubset<T, VcsProcessedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VcsProcessedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VcsProcessed.
     * @param {VcsProcessedCreateArgs} args - Arguments to create a VcsProcessed.
     * @example
     * // Create one VcsProcessed
     * const VcsProcessed = await prisma.vcsProcessed.create({
     *   data: {
     *     // ... data to create a VcsProcessed
     *   }
     * })
     * 
     */
    create<T extends VcsProcessedCreateArgs>(args: SelectSubset<T, VcsProcessedCreateArgs<ExtArgs>>): Prisma__VcsProcessedClient<$Result.GetResult<Prisma.$VcsProcessedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VcsProcesseds.
     * @param {VcsProcessedCreateManyArgs} args - Arguments to create many VcsProcesseds.
     * @example
     * // Create many VcsProcesseds
     * const vcsProcessed = await prisma.vcsProcessed.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VcsProcessedCreateManyArgs>(args?: SelectSubset<T, VcsProcessedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VcsProcessed.
     * @param {VcsProcessedDeleteArgs} args - Arguments to delete one VcsProcessed.
     * @example
     * // Delete one VcsProcessed
     * const VcsProcessed = await prisma.vcsProcessed.delete({
     *   where: {
     *     // ... filter to delete one VcsProcessed
     *   }
     * })
     * 
     */
    delete<T extends VcsProcessedDeleteArgs>(args: SelectSubset<T, VcsProcessedDeleteArgs<ExtArgs>>): Prisma__VcsProcessedClient<$Result.GetResult<Prisma.$VcsProcessedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VcsProcessed.
     * @param {VcsProcessedUpdateArgs} args - Arguments to update one VcsProcessed.
     * @example
     * // Update one VcsProcessed
     * const vcsProcessed = await prisma.vcsProcessed.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VcsProcessedUpdateArgs>(args: SelectSubset<T, VcsProcessedUpdateArgs<ExtArgs>>): Prisma__VcsProcessedClient<$Result.GetResult<Prisma.$VcsProcessedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VcsProcesseds.
     * @param {VcsProcessedDeleteManyArgs} args - Arguments to filter VcsProcesseds to delete.
     * @example
     * // Delete a few VcsProcesseds
     * const { count } = await prisma.vcsProcessed.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VcsProcessedDeleteManyArgs>(args?: SelectSubset<T, VcsProcessedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VcsProcesseds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VcsProcessedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VcsProcesseds
     * const vcsProcessed = await prisma.vcsProcessed.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VcsProcessedUpdateManyArgs>(args: SelectSubset<T, VcsProcessedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VcsProcessed.
     * @param {VcsProcessedUpsertArgs} args - Arguments to update or create a VcsProcessed.
     * @example
     * // Update or create a VcsProcessed
     * const vcsProcessed = await prisma.vcsProcessed.upsert({
     *   create: {
     *     // ... data to create a VcsProcessed
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VcsProcessed we want to update
     *   }
     * })
     */
    upsert<T extends VcsProcessedUpsertArgs>(args: SelectSubset<T, VcsProcessedUpsertArgs<ExtArgs>>): Prisma__VcsProcessedClient<$Result.GetResult<Prisma.$VcsProcessedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VcsProcesseds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VcsProcessedCountArgs} args - Arguments to filter VcsProcesseds to count.
     * @example
     * // Count the number of VcsProcesseds
     * const count = await prisma.vcsProcessed.count({
     *   where: {
     *     // ... the filter for the VcsProcesseds we want to count
     *   }
     * })
    **/
    count<T extends VcsProcessedCountArgs>(
      args?: Subset<T, VcsProcessedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VcsProcessedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VcsProcessed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VcsProcessedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VcsProcessedAggregateArgs>(args: Subset<T, VcsProcessedAggregateArgs>): Prisma.PrismaPromise<GetVcsProcessedAggregateType<T>>

    /**
     * Group by VcsProcessed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VcsProcessedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VcsProcessedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VcsProcessedGroupByArgs['orderBy'] }
        : { orderBy?: VcsProcessedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VcsProcessedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVcsProcessedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VcsProcessed model
   */
  readonly fields: VcsProcessedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VcsProcessed.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VcsProcessedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    analyzerPackage<T extends AnalyzerPackageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnalyzerPackageDefaultArgs<ExtArgs>>): Prisma__AnalyzerPackageClient<$Result.GetResult<Prisma.$AnalyzerPackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VcsProcessed model
   */
  interface VcsProcessedFieldRefs {
    readonly id: FieldRef<"VcsProcessed", 'Int'>
    readonly type: FieldRef<"VcsProcessed", 'String'>
    readonly url: FieldRef<"VcsProcessed", 'String'>
    readonly revision: FieldRef<"VcsProcessed", 'String'>
    readonly path: FieldRef<"VcsProcessed", 'String'>
    readonly packageId: FieldRef<"VcsProcessed", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * VcsProcessed findUnique
   */
  export type VcsProcessedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VcsProcessed
     */
    select?: VcsProcessedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VcsProcessed
     */
    omit?: VcsProcessedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VcsProcessedInclude<ExtArgs> | null
    /**
     * Filter, which VcsProcessed to fetch.
     */
    where: VcsProcessedWhereUniqueInput
  }

  /**
   * VcsProcessed findUniqueOrThrow
   */
  export type VcsProcessedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VcsProcessed
     */
    select?: VcsProcessedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VcsProcessed
     */
    omit?: VcsProcessedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VcsProcessedInclude<ExtArgs> | null
    /**
     * Filter, which VcsProcessed to fetch.
     */
    where: VcsProcessedWhereUniqueInput
  }

  /**
   * VcsProcessed findFirst
   */
  export type VcsProcessedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VcsProcessed
     */
    select?: VcsProcessedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VcsProcessed
     */
    omit?: VcsProcessedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VcsProcessedInclude<ExtArgs> | null
    /**
     * Filter, which VcsProcessed to fetch.
     */
    where?: VcsProcessedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VcsProcesseds to fetch.
     */
    orderBy?: VcsProcessedOrderByWithRelationInput | VcsProcessedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VcsProcesseds.
     */
    cursor?: VcsProcessedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VcsProcesseds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VcsProcesseds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VcsProcesseds.
     */
    distinct?: VcsProcessedScalarFieldEnum | VcsProcessedScalarFieldEnum[]
  }

  /**
   * VcsProcessed findFirstOrThrow
   */
  export type VcsProcessedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VcsProcessed
     */
    select?: VcsProcessedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VcsProcessed
     */
    omit?: VcsProcessedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VcsProcessedInclude<ExtArgs> | null
    /**
     * Filter, which VcsProcessed to fetch.
     */
    where?: VcsProcessedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VcsProcesseds to fetch.
     */
    orderBy?: VcsProcessedOrderByWithRelationInput | VcsProcessedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VcsProcesseds.
     */
    cursor?: VcsProcessedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VcsProcesseds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VcsProcesseds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VcsProcesseds.
     */
    distinct?: VcsProcessedScalarFieldEnum | VcsProcessedScalarFieldEnum[]
  }

  /**
   * VcsProcessed findMany
   */
  export type VcsProcessedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VcsProcessed
     */
    select?: VcsProcessedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VcsProcessed
     */
    omit?: VcsProcessedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VcsProcessedInclude<ExtArgs> | null
    /**
     * Filter, which VcsProcesseds to fetch.
     */
    where?: VcsProcessedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VcsProcesseds to fetch.
     */
    orderBy?: VcsProcessedOrderByWithRelationInput | VcsProcessedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VcsProcesseds.
     */
    cursor?: VcsProcessedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VcsProcesseds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VcsProcesseds.
     */
    skip?: number
    distinct?: VcsProcessedScalarFieldEnum | VcsProcessedScalarFieldEnum[]
  }

  /**
   * VcsProcessed create
   */
  export type VcsProcessedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VcsProcessed
     */
    select?: VcsProcessedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VcsProcessed
     */
    omit?: VcsProcessedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VcsProcessedInclude<ExtArgs> | null
    /**
     * The data needed to create a VcsProcessed.
     */
    data: XOR<VcsProcessedCreateInput, VcsProcessedUncheckedCreateInput>
  }

  /**
   * VcsProcessed createMany
   */
  export type VcsProcessedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VcsProcesseds.
     */
    data: VcsProcessedCreateManyInput | VcsProcessedCreateManyInput[]
  }

  /**
   * VcsProcessed update
   */
  export type VcsProcessedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VcsProcessed
     */
    select?: VcsProcessedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VcsProcessed
     */
    omit?: VcsProcessedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VcsProcessedInclude<ExtArgs> | null
    /**
     * The data needed to update a VcsProcessed.
     */
    data: XOR<VcsProcessedUpdateInput, VcsProcessedUncheckedUpdateInput>
    /**
     * Choose, which VcsProcessed to update.
     */
    where: VcsProcessedWhereUniqueInput
  }

  /**
   * VcsProcessed updateMany
   */
  export type VcsProcessedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VcsProcesseds.
     */
    data: XOR<VcsProcessedUpdateManyMutationInput, VcsProcessedUncheckedUpdateManyInput>
    /**
     * Filter which VcsProcesseds to update
     */
    where?: VcsProcessedWhereInput
    /**
     * Limit how many VcsProcesseds to update.
     */
    limit?: number
  }

  /**
   * VcsProcessed upsert
   */
  export type VcsProcessedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VcsProcessed
     */
    select?: VcsProcessedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VcsProcessed
     */
    omit?: VcsProcessedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VcsProcessedInclude<ExtArgs> | null
    /**
     * The filter to search for the VcsProcessed to update in case it exists.
     */
    where: VcsProcessedWhereUniqueInput
    /**
     * In case the VcsProcessed found by the `where` argument doesn't exist, create a new VcsProcessed with this data.
     */
    create: XOR<VcsProcessedCreateInput, VcsProcessedUncheckedCreateInput>
    /**
     * In case the VcsProcessed was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VcsProcessedUpdateInput, VcsProcessedUncheckedUpdateInput>
  }

  /**
   * VcsProcessed delete
   */
  export type VcsProcessedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VcsProcessed
     */
    select?: VcsProcessedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VcsProcessed
     */
    omit?: VcsProcessedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VcsProcessedInclude<ExtArgs> | null
    /**
     * Filter which VcsProcessed to delete.
     */
    where: VcsProcessedWhereUniqueInput
  }

  /**
   * VcsProcessed deleteMany
   */
  export type VcsProcessedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VcsProcesseds to delete
     */
    where?: VcsProcessedWhereInput
    /**
     * Limit how many VcsProcesseds to delete.
     */
    limit?: number
  }

  /**
   * VcsProcessed without action
   */
  export type VcsProcessedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VcsProcessed
     */
    select?: VcsProcessedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VcsProcessed
     */
    omit?: VcsProcessedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VcsProcessedInclude<ExtArgs> | null
  }


  /**
   * Model Scanner
   */

  export type AggregateScanner = {
    _count: ScannerCountAggregateOutputType | null
    _avg: ScannerAvgAggregateOutputType | null
    _sum: ScannerSumAggregateOutputType | null
    _min: ScannerMinAggregateOutputType | null
    _max: ScannerMaxAggregateOutputType | null
  }

  export type ScannerAvgAggregateOutputType = {
    id: number | null
    scanId: number | null
  }

  export type ScannerSumAggregateOutputType = {
    id: number | null
    scanId: number | null
  }

  export type ScannerMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    scanId: number | null
  }

  export type ScannerMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    scanId: number | null
  }

  export type ScannerCountAggregateOutputType = {
    id: number
    createdAt: number
    scanId: number
    _all: number
  }


  export type ScannerAvgAggregateInputType = {
    id?: true
    scanId?: true
  }

  export type ScannerSumAggregateInputType = {
    id?: true
    scanId?: true
  }

  export type ScannerMinAggregateInputType = {
    id?: true
    createdAt?: true
    scanId?: true
  }

  export type ScannerMaxAggregateInputType = {
    id?: true
    createdAt?: true
    scanId?: true
  }

  export type ScannerCountAggregateInputType = {
    id?: true
    createdAt?: true
    scanId?: true
    _all?: true
  }

  export type ScannerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scanner to aggregate.
     */
    where?: ScannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scanners to fetch.
     */
    orderBy?: ScannerOrderByWithRelationInput | ScannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scanners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scanners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Scanners
    **/
    _count?: true | ScannerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScannerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScannerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScannerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScannerMaxAggregateInputType
  }

  export type GetScannerAggregateType<T extends ScannerAggregateArgs> = {
        [P in keyof T & keyof AggregateScanner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScanner[P]>
      : GetScalarType<T[P], AggregateScanner[P]>
  }




  export type ScannerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScannerWhereInput
    orderBy?: ScannerOrderByWithAggregationInput | ScannerOrderByWithAggregationInput[]
    by: ScannerScalarFieldEnum[] | ScannerScalarFieldEnum
    having?: ScannerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScannerCountAggregateInputType | true
    _avg?: ScannerAvgAggregateInputType
    _sum?: ScannerSumAggregateInputType
    _min?: ScannerMinAggregateInputType
    _max?: ScannerMaxAggregateInputType
  }

  export type ScannerGroupByOutputType = {
    id: number
    createdAt: Date
    scanId: number
    _count: ScannerCountAggregateOutputType | null
    _avg: ScannerAvgAggregateOutputType | null
    _sum: ScannerSumAggregateOutputType | null
    _min: ScannerMinAggregateOutputType | null
    _max: ScannerMaxAggregateOutputType | null
  }

  type GetScannerGroupByPayload<T extends ScannerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScannerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScannerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScannerGroupByOutputType[P]>
            : GetScalarType<T[P], ScannerGroupByOutputType[P]>
        }
      >
    >


  export type ScannerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    scanId?: boolean
    scan?: boolean | ScanDefaultArgs<ExtArgs>
    licenses?: boolean | Scanner$licensesArgs<ExtArgs>
    copyrights?: boolean | Scanner$copyrightsArgs<ExtArgs>
    _count?: boolean | ScannerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scanner"]>



  export type ScannerSelectScalar = {
    id?: boolean
    createdAt?: boolean
    scanId?: boolean
  }

  export type ScannerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "scanId", ExtArgs["result"]["scanner"]>
  export type ScannerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scan?: boolean | ScanDefaultArgs<ExtArgs>
    licenses?: boolean | Scanner$licensesArgs<ExtArgs>
    copyrights?: boolean | Scanner$copyrightsArgs<ExtArgs>
    _count?: boolean | ScannerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ScannerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Scanner"
    objects: {
      scan: Prisma.$ScanPayload<ExtArgs>
      licenses: Prisma.$LicensesPayload<ExtArgs>[]
      copyrights: Prisma.$CopyrightsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      scanId: number
    }, ExtArgs["result"]["scanner"]>
    composites: {}
  }

  type ScannerGetPayload<S extends boolean | null | undefined | ScannerDefaultArgs> = $Result.GetResult<Prisma.$ScannerPayload, S>

  type ScannerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScannerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScannerCountAggregateInputType | true
    }

  export interface ScannerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Scanner'], meta: { name: 'Scanner' } }
    /**
     * Find zero or one Scanner that matches the filter.
     * @param {ScannerFindUniqueArgs} args - Arguments to find a Scanner
     * @example
     * // Get one Scanner
     * const scanner = await prisma.scanner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScannerFindUniqueArgs>(args: SelectSubset<T, ScannerFindUniqueArgs<ExtArgs>>): Prisma__ScannerClient<$Result.GetResult<Prisma.$ScannerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Scanner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScannerFindUniqueOrThrowArgs} args - Arguments to find a Scanner
     * @example
     * // Get one Scanner
     * const scanner = await prisma.scanner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScannerFindUniqueOrThrowArgs>(args: SelectSubset<T, ScannerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScannerClient<$Result.GetResult<Prisma.$ScannerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scanner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScannerFindFirstArgs} args - Arguments to find a Scanner
     * @example
     * // Get one Scanner
     * const scanner = await prisma.scanner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScannerFindFirstArgs>(args?: SelectSubset<T, ScannerFindFirstArgs<ExtArgs>>): Prisma__ScannerClient<$Result.GetResult<Prisma.$ScannerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scanner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScannerFindFirstOrThrowArgs} args - Arguments to find a Scanner
     * @example
     * // Get one Scanner
     * const scanner = await prisma.scanner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScannerFindFirstOrThrowArgs>(args?: SelectSubset<T, ScannerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScannerClient<$Result.GetResult<Prisma.$ScannerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Scanners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScannerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Scanners
     * const scanners = await prisma.scanner.findMany()
     * 
     * // Get first 10 Scanners
     * const scanners = await prisma.scanner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scannerWithIdOnly = await prisma.scanner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScannerFindManyArgs>(args?: SelectSubset<T, ScannerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScannerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Scanner.
     * @param {ScannerCreateArgs} args - Arguments to create a Scanner.
     * @example
     * // Create one Scanner
     * const Scanner = await prisma.scanner.create({
     *   data: {
     *     // ... data to create a Scanner
     *   }
     * })
     * 
     */
    create<T extends ScannerCreateArgs>(args: SelectSubset<T, ScannerCreateArgs<ExtArgs>>): Prisma__ScannerClient<$Result.GetResult<Prisma.$ScannerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Scanners.
     * @param {ScannerCreateManyArgs} args - Arguments to create many Scanners.
     * @example
     * // Create many Scanners
     * const scanner = await prisma.scanner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScannerCreateManyArgs>(args?: SelectSubset<T, ScannerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Scanner.
     * @param {ScannerDeleteArgs} args - Arguments to delete one Scanner.
     * @example
     * // Delete one Scanner
     * const Scanner = await prisma.scanner.delete({
     *   where: {
     *     // ... filter to delete one Scanner
     *   }
     * })
     * 
     */
    delete<T extends ScannerDeleteArgs>(args: SelectSubset<T, ScannerDeleteArgs<ExtArgs>>): Prisma__ScannerClient<$Result.GetResult<Prisma.$ScannerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Scanner.
     * @param {ScannerUpdateArgs} args - Arguments to update one Scanner.
     * @example
     * // Update one Scanner
     * const scanner = await prisma.scanner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScannerUpdateArgs>(args: SelectSubset<T, ScannerUpdateArgs<ExtArgs>>): Prisma__ScannerClient<$Result.GetResult<Prisma.$ScannerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Scanners.
     * @param {ScannerDeleteManyArgs} args - Arguments to filter Scanners to delete.
     * @example
     * // Delete a few Scanners
     * const { count } = await prisma.scanner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScannerDeleteManyArgs>(args?: SelectSubset<T, ScannerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scanners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScannerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Scanners
     * const scanner = await prisma.scanner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScannerUpdateManyArgs>(args: SelectSubset<T, ScannerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Scanner.
     * @param {ScannerUpsertArgs} args - Arguments to update or create a Scanner.
     * @example
     * // Update or create a Scanner
     * const scanner = await prisma.scanner.upsert({
     *   create: {
     *     // ... data to create a Scanner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Scanner we want to update
     *   }
     * })
     */
    upsert<T extends ScannerUpsertArgs>(args: SelectSubset<T, ScannerUpsertArgs<ExtArgs>>): Prisma__ScannerClient<$Result.GetResult<Prisma.$ScannerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Scanners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScannerCountArgs} args - Arguments to filter Scanners to count.
     * @example
     * // Count the number of Scanners
     * const count = await prisma.scanner.count({
     *   where: {
     *     // ... the filter for the Scanners we want to count
     *   }
     * })
    **/
    count<T extends ScannerCountArgs>(
      args?: Subset<T, ScannerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScannerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Scanner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScannerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScannerAggregateArgs>(args: Subset<T, ScannerAggregateArgs>): Prisma.PrismaPromise<GetScannerAggregateType<T>>

    /**
     * Group by Scanner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScannerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScannerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScannerGroupByArgs['orderBy'] }
        : { orderBy?: ScannerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScannerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScannerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Scanner model
   */
  readonly fields: ScannerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Scanner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScannerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    scan<T extends ScanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScanDefaultArgs<ExtArgs>>): Prisma__ScanClient<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    licenses<T extends Scanner$licensesArgs<ExtArgs> = {}>(args?: Subset<T, Scanner$licensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicensesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    copyrights<T extends Scanner$copyrightsArgs<ExtArgs> = {}>(args?: Subset<T, Scanner$copyrightsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CopyrightsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Scanner model
   */
  interface ScannerFieldRefs {
    readonly id: FieldRef<"Scanner", 'Int'>
    readonly createdAt: FieldRef<"Scanner", 'DateTime'>
    readonly scanId: FieldRef<"Scanner", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Scanner findUnique
   */
  export type ScannerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scanner
     */
    select?: ScannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scanner
     */
    omit?: ScannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScannerInclude<ExtArgs> | null
    /**
     * Filter, which Scanner to fetch.
     */
    where: ScannerWhereUniqueInput
  }

  /**
   * Scanner findUniqueOrThrow
   */
  export type ScannerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scanner
     */
    select?: ScannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scanner
     */
    omit?: ScannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScannerInclude<ExtArgs> | null
    /**
     * Filter, which Scanner to fetch.
     */
    where: ScannerWhereUniqueInput
  }

  /**
   * Scanner findFirst
   */
  export type ScannerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scanner
     */
    select?: ScannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scanner
     */
    omit?: ScannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScannerInclude<ExtArgs> | null
    /**
     * Filter, which Scanner to fetch.
     */
    where?: ScannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scanners to fetch.
     */
    orderBy?: ScannerOrderByWithRelationInput | ScannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scanners.
     */
    cursor?: ScannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scanners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scanners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scanners.
     */
    distinct?: ScannerScalarFieldEnum | ScannerScalarFieldEnum[]
  }

  /**
   * Scanner findFirstOrThrow
   */
  export type ScannerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scanner
     */
    select?: ScannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scanner
     */
    omit?: ScannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScannerInclude<ExtArgs> | null
    /**
     * Filter, which Scanner to fetch.
     */
    where?: ScannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scanners to fetch.
     */
    orderBy?: ScannerOrderByWithRelationInput | ScannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scanners.
     */
    cursor?: ScannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scanners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scanners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scanners.
     */
    distinct?: ScannerScalarFieldEnum | ScannerScalarFieldEnum[]
  }

  /**
   * Scanner findMany
   */
  export type ScannerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scanner
     */
    select?: ScannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scanner
     */
    omit?: ScannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScannerInclude<ExtArgs> | null
    /**
     * Filter, which Scanners to fetch.
     */
    where?: ScannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scanners to fetch.
     */
    orderBy?: ScannerOrderByWithRelationInput | ScannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Scanners.
     */
    cursor?: ScannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scanners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scanners.
     */
    skip?: number
    distinct?: ScannerScalarFieldEnum | ScannerScalarFieldEnum[]
  }

  /**
   * Scanner create
   */
  export type ScannerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scanner
     */
    select?: ScannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scanner
     */
    omit?: ScannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScannerInclude<ExtArgs> | null
    /**
     * The data needed to create a Scanner.
     */
    data: XOR<ScannerCreateInput, ScannerUncheckedCreateInput>
  }

  /**
   * Scanner createMany
   */
  export type ScannerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Scanners.
     */
    data: ScannerCreateManyInput | ScannerCreateManyInput[]
  }

  /**
   * Scanner update
   */
  export type ScannerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scanner
     */
    select?: ScannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scanner
     */
    omit?: ScannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScannerInclude<ExtArgs> | null
    /**
     * The data needed to update a Scanner.
     */
    data: XOR<ScannerUpdateInput, ScannerUncheckedUpdateInput>
    /**
     * Choose, which Scanner to update.
     */
    where: ScannerWhereUniqueInput
  }

  /**
   * Scanner updateMany
   */
  export type ScannerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Scanners.
     */
    data: XOR<ScannerUpdateManyMutationInput, ScannerUncheckedUpdateManyInput>
    /**
     * Filter which Scanners to update
     */
    where?: ScannerWhereInput
    /**
     * Limit how many Scanners to update.
     */
    limit?: number
  }

  /**
   * Scanner upsert
   */
  export type ScannerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scanner
     */
    select?: ScannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scanner
     */
    omit?: ScannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScannerInclude<ExtArgs> | null
    /**
     * The filter to search for the Scanner to update in case it exists.
     */
    where: ScannerWhereUniqueInput
    /**
     * In case the Scanner found by the `where` argument doesn't exist, create a new Scanner with this data.
     */
    create: XOR<ScannerCreateInput, ScannerUncheckedCreateInput>
    /**
     * In case the Scanner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScannerUpdateInput, ScannerUncheckedUpdateInput>
  }

  /**
   * Scanner delete
   */
  export type ScannerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scanner
     */
    select?: ScannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scanner
     */
    omit?: ScannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScannerInclude<ExtArgs> | null
    /**
     * Filter which Scanner to delete.
     */
    where: ScannerWhereUniqueInput
  }

  /**
   * Scanner deleteMany
   */
  export type ScannerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scanners to delete
     */
    where?: ScannerWhereInput
    /**
     * Limit how many Scanners to delete.
     */
    limit?: number
  }

  /**
   * Scanner.licenses
   */
  export type Scanner$licensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Licenses
     */
    select?: LicensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Licenses
     */
    omit?: LicensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicensesInclude<ExtArgs> | null
    where?: LicensesWhereInput
    orderBy?: LicensesOrderByWithRelationInput | LicensesOrderByWithRelationInput[]
    cursor?: LicensesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LicensesScalarFieldEnum | LicensesScalarFieldEnum[]
  }

  /**
   * Scanner.copyrights
   */
  export type Scanner$copyrightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Copyrights
     */
    select?: CopyrightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Copyrights
     */
    omit?: CopyrightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CopyrightsInclude<ExtArgs> | null
    where?: CopyrightsWhereInput
    orderBy?: CopyrightsOrderByWithRelationInput | CopyrightsOrderByWithRelationInput[]
    cursor?: CopyrightsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CopyrightsScalarFieldEnum | CopyrightsScalarFieldEnum[]
  }

  /**
   * Scanner without action
   */
  export type ScannerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scanner
     */
    select?: ScannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scanner
     */
    omit?: ScannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScannerInclude<ExtArgs> | null
  }


  /**
   * Model Licenses
   */

  export type AggregateLicenses = {
    _count: LicensesCountAggregateOutputType | null
    _avg: LicensesAvgAggregateOutputType | null
    _sum: LicensesSumAggregateOutputType | null
    _min: LicensesMinAggregateOutputType | null
    _max: LicensesMaxAggregateOutputType | null
  }

  export type LicensesAvgAggregateOutputType = {
    id: number | null
    startLine: number | null
    endLine: number | null
    score: number | null
    scannerId: number | null
  }

  export type LicensesSumAggregateOutputType = {
    id: number | null
    startLine: number | null
    endLine: number | null
    score: number | null
    scannerId: number | null
  }

  export type LicensesMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    licenseName: string | null
    path: string | null
    startLine: number | null
    endLine: number | null
    score: number | null
    scannerId: number | null
  }

  export type LicensesMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    licenseName: string | null
    path: string | null
    startLine: number | null
    endLine: number | null
    score: number | null
    scannerId: number | null
  }

  export type LicensesCountAggregateOutputType = {
    id: number
    createdAt: number
    licenseName: number
    path: number
    startLine: number
    endLine: number
    score: number
    scannerId: number
    _all: number
  }


  export type LicensesAvgAggregateInputType = {
    id?: true
    startLine?: true
    endLine?: true
    score?: true
    scannerId?: true
  }

  export type LicensesSumAggregateInputType = {
    id?: true
    startLine?: true
    endLine?: true
    score?: true
    scannerId?: true
  }

  export type LicensesMinAggregateInputType = {
    id?: true
    createdAt?: true
    licenseName?: true
    path?: true
    startLine?: true
    endLine?: true
    score?: true
    scannerId?: true
  }

  export type LicensesMaxAggregateInputType = {
    id?: true
    createdAt?: true
    licenseName?: true
    path?: true
    startLine?: true
    endLine?: true
    score?: true
    scannerId?: true
  }

  export type LicensesCountAggregateInputType = {
    id?: true
    createdAt?: true
    licenseName?: true
    path?: true
    startLine?: true
    endLine?: true
    score?: true
    scannerId?: true
    _all?: true
  }

  export type LicensesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Licenses to aggregate.
     */
    where?: LicensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licenses to fetch.
     */
    orderBy?: LicensesOrderByWithRelationInput | LicensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LicensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Licenses
    **/
    _count?: true | LicensesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LicensesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LicensesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LicensesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LicensesMaxAggregateInputType
  }

  export type GetLicensesAggregateType<T extends LicensesAggregateArgs> = {
        [P in keyof T & keyof AggregateLicenses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLicenses[P]>
      : GetScalarType<T[P], AggregateLicenses[P]>
  }




  export type LicensesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicensesWhereInput
    orderBy?: LicensesOrderByWithAggregationInput | LicensesOrderByWithAggregationInput[]
    by: LicensesScalarFieldEnum[] | LicensesScalarFieldEnum
    having?: LicensesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LicensesCountAggregateInputType | true
    _avg?: LicensesAvgAggregateInputType
    _sum?: LicensesSumAggregateInputType
    _min?: LicensesMinAggregateInputType
    _max?: LicensesMaxAggregateInputType
  }

  export type LicensesGroupByOutputType = {
    id: number
    createdAt: Date
    licenseName: string
    path: string
    startLine: number
    endLine: number
    score: number
    scannerId: number
    _count: LicensesCountAggregateOutputType | null
    _avg: LicensesAvgAggregateOutputType | null
    _sum: LicensesSumAggregateOutputType | null
    _min: LicensesMinAggregateOutputType | null
    _max: LicensesMaxAggregateOutputType | null
  }

  type GetLicensesGroupByPayload<T extends LicensesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LicensesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LicensesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LicensesGroupByOutputType[P]>
            : GetScalarType<T[P], LicensesGroupByOutputType[P]>
        }
      >
    >


  export type LicensesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    licenseName?: boolean
    path?: boolean
    startLine?: boolean
    endLine?: boolean
    score?: boolean
    scannerId?: boolean
    scanner?: boolean | ScannerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["licenses"]>



  export type LicensesSelectScalar = {
    id?: boolean
    createdAt?: boolean
    licenseName?: boolean
    path?: boolean
    startLine?: boolean
    endLine?: boolean
    score?: boolean
    scannerId?: boolean
  }

  export type LicensesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "licenseName" | "path" | "startLine" | "endLine" | "score" | "scannerId", ExtArgs["result"]["licenses"]>
  export type LicensesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scanner?: boolean | ScannerDefaultArgs<ExtArgs>
  }

  export type $LicensesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Licenses"
    objects: {
      scanner: Prisma.$ScannerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      licenseName: string
      path: string
      startLine: number
      endLine: number
      score: number
      scannerId: number
    }, ExtArgs["result"]["licenses"]>
    composites: {}
  }

  type LicensesGetPayload<S extends boolean | null | undefined | LicensesDefaultArgs> = $Result.GetResult<Prisma.$LicensesPayload, S>

  type LicensesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LicensesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LicensesCountAggregateInputType | true
    }

  export interface LicensesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Licenses'], meta: { name: 'Licenses' } }
    /**
     * Find zero or one Licenses that matches the filter.
     * @param {LicensesFindUniqueArgs} args - Arguments to find a Licenses
     * @example
     * // Get one Licenses
     * const licenses = await prisma.licenses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LicensesFindUniqueArgs>(args: SelectSubset<T, LicensesFindUniqueArgs<ExtArgs>>): Prisma__LicensesClient<$Result.GetResult<Prisma.$LicensesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Licenses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LicensesFindUniqueOrThrowArgs} args - Arguments to find a Licenses
     * @example
     * // Get one Licenses
     * const licenses = await prisma.licenses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LicensesFindUniqueOrThrowArgs>(args: SelectSubset<T, LicensesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LicensesClient<$Result.GetResult<Prisma.$LicensesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Licenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicensesFindFirstArgs} args - Arguments to find a Licenses
     * @example
     * // Get one Licenses
     * const licenses = await prisma.licenses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LicensesFindFirstArgs>(args?: SelectSubset<T, LicensesFindFirstArgs<ExtArgs>>): Prisma__LicensesClient<$Result.GetResult<Prisma.$LicensesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Licenses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicensesFindFirstOrThrowArgs} args - Arguments to find a Licenses
     * @example
     * // Get one Licenses
     * const licenses = await prisma.licenses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LicensesFindFirstOrThrowArgs>(args?: SelectSubset<T, LicensesFindFirstOrThrowArgs<ExtArgs>>): Prisma__LicensesClient<$Result.GetResult<Prisma.$LicensesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Licenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicensesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Licenses
     * const licenses = await prisma.licenses.findMany()
     * 
     * // Get first 10 Licenses
     * const licenses = await prisma.licenses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const licensesWithIdOnly = await prisma.licenses.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LicensesFindManyArgs>(args?: SelectSubset<T, LicensesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicensesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Licenses.
     * @param {LicensesCreateArgs} args - Arguments to create a Licenses.
     * @example
     * // Create one Licenses
     * const Licenses = await prisma.licenses.create({
     *   data: {
     *     // ... data to create a Licenses
     *   }
     * })
     * 
     */
    create<T extends LicensesCreateArgs>(args: SelectSubset<T, LicensesCreateArgs<ExtArgs>>): Prisma__LicensesClient<$Result.GetResult<Prisma.$LicensesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Licenses.
     * @param {LicensesCreateManyArgs} args - Arguments to create many Licenses.
     * @example
     * // Create many Licenses
     * const licenses = await prisma.licenses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LicensesCreateManyArgs>(args?: SelectSubset<T, LicensesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Licenses.
     * @param {LicensesDeleteArgs} args - Arguments to delete one Licenses.
     * @example
     * // Delete one Licenses
     * const Licenses = await prisma.licenses.delete({
     *   where: {
     *     // ... filter to delete one Licenses
     *   }
     * })
     * 
     */
    delete<T extends LicensesDeleteArgs>(args: SelectSubset<T, LicensesDeleteArgs<ExtArgs>>): Prisma__LicensesClient<$Result.GetResult<Prisma.$LicensesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Licenses.
     * @param {LicensesUpdateArgs} args - Arguments to update one Licenses.
     * @example
     * // Update one Licenses
     * const licenses = await prisma.licenses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LicensesUpdateArgs>(args: SelectSubset<T, LicensesUpdateArgs<ExtArgs>>): Prisma__LicensesClient<$Result.GetResult<Prisma.$LicensesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Licenses.
     * @param {LicensesDeleteManyArgs} args - Arguments to filter Licenses to delete.
     * @example
     * // Delete a few Licenses
     * const { count } = await prisma.licenses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LicensesDeleteManyArgs>(args?: SelectSubset<T, LicensesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Licenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicensesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Licenses
     * const licenses = await prisma.licenses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LicensesUpdateManyArgs>(args: SelectSubset<T, LicensesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Licenses.
     * @param {LicensesUpsertArgs} args - Arguments to update or create a Licenses.
     * @example
     * // Update or create a Licenses
     * const licenses = await prisma.licenses.upsert({
     *   create: {
     *     // ... data to create a Licenses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Licenses we want to update
     *   }
     * })
     */
    upsert<T extends LicensesUpsertArgs>(args: SelectSubset<T, LicensesUpsertArgs<ExtArgs>>): Prisma__LicensesClient<$Result.GetResult<Prisma.$LicensesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Licenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicensesCountArgs} args - Arguments to filter Licenses to count.
     * @example
     * // Count the number of Licenses
     * const count = await prisma.licenses.count({
     *   where: {
     *     // ... the filter for the Licenses we want to count
     *   }
     * })
    **/
    count<T extends LicensesCountArgs>(
      args?: Subset<T, LicensesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LicensesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Licenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicensesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LicensesAggregateArgs>(args: Subset<T, LicensesAggregateArgs>): Prisma.PrismaPromise<GetLicensesAggregateType<T>>

    /**
     * Group by Licenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicensesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LicensesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LicensesGroupByArgs['orderBy'] }
        : { orderBy?: LicensesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LicensesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLicensesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Licenses model
   */
  readonly fields: LicensesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Licenses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LicensesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    scanner<T extends ScannerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScannerDefaultArgs<ExtArgs>>): Prisma__ScannerClient<$Result.GetResult<Prisma.$ScannerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Licenses model
   */
  interface LicensesFieldRefs {
    readonly id: FieldRef<"Licenses", 'Int'>
    readonly createdAt: FieldRef<"Licenses", 'DateTime'>
    readonly licenseName: FieldRef<"Licenses", 'String'>
    readonly path: FieldRef<"Licenses", 'String'>
    readonly startLine: FieldRef<"Licenses", 'Int'>
    readonly endLine: FieldRef<"Licenses", 'Int'>
    readonly score: FieldRef<"Licenses", 'Float'>
    readonly scannerId: FieldRef<"Licenses", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Licenses findUnique
   */
  export type LicensesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Licenses
     */
    select?: LicensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Licenses
     */
    omit?: LicensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicensesInclude<ExtArgs> | null
    /**
     * Filter, which Licenses to fetch.
     */
    where: LicensesWhereUniqueInput
  }

  /**
   * Licenses findUniqueOrThrow
   */
  export type LicensesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Licenses
     */
    select?: LicensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Licenses
     */
    omit?: LicensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicensesInclude<ExtArgs> | null
    /**
     * Filter, which Licenses to fetch.
     */
    where: LicensesWhereUniqueInput
  }

  /**
   * Licenses findFirst
   */
  export type LicensesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Licenses
     */
    select?: LicensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Licenses
     */
    omit?: LicensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicensesInclude<ExtArgs> | null
    /**
     * Filter, which Licenses to fetch.
     */
    where?: LicensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licenses to fetch.
     */
    orderBy?: LicensesOrderByWithRelationInput | LicensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Licenses.
     */
    cursor?: LicensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Licenses.
     */
    distinct?: LicensesScalarFieldEnum | LicensesScalarFieldEnum[]
  }

  /**
   * Licenses findFirstOrThrow
   */
  export type LicensesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Licenses
     */
    select?: LicensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Licenses
     */
    omit?: LicensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicensesInclude<ExtArgs> | null
    /**
     * Filter, which Licenses to fetch.
     */
    where?: LicensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licenses to fetch.
     */
    orderBy?: LicensesOrderByWithRelationInput | LicensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Licenses.
     */
    cursor?: LicensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Licenses.
     */
    distinct?: LicensesScalarFieldEnum | LicensesScalarFieldEnum[]
  }

  /**
   * Licenses findMany
   */
  export type LicensesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Licenses
     */
    select?: LicensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Licenses
     */
    omit?: LicensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicensesInclude<ExtArgs> | null
    /**
     * Filter, which Licenses to fetch.
     */
    where?: LicensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licenses to fetch.
     */
    orderBy?: LicensesOrderByWithRelationInput | LicensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Licenses.
     */
    cursor?: LicensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licenses.
     */
    skip?: number
    distinct?: LicensesScalarFieldEnum | LicensesScalarFieldEnum[]
  }

  /**
   * Licenses create
   */
  export type LicensesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Licenses
     */
    select?: LicensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Licenses
     */
    omit?: LicensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicensesInclude<ExtArgs> | null
    /**
     * The data needed to create a Licenses.
     */
    data: XOR<LicensesCreateInput, LicensesUncheckedCreateInput>
  }

  /**
   * Licenses createMany
   */
  export type LicensesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Licenses.
     */
    data: LicensesCreateManyInput | LicensesCreateManyInput[]
  }

  /**
   * Licenses update
   */
  export type LicensesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Licenses
     */
    select?: LicensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Licenses
     */
    omit?: LicensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicensesInclude<ExtArgs> | null
    /**
     * The data needed to update a Licenses.
     */
    data: XOR<LicensesUpdateInput, LicensesUncheckedUpdateInput>
    /**
     * Choose, which Licenses to update.
     */
    where: LicensesWhereUniqueInput
  }

  /**
   * Licenses updateMany
   */
  export type LicensesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Licenses.
     */
    data: XOR<LicensesUpdateManyMutationInput, LicensesUncheckedUpdateManyInput>
    /**
     * Filter which Licenses to update
     */
    where?: LicensesWhereInput
    /**
     * Limit how many Licenses to update.
     */
    limit?: number
  }

  /**
   * Licenses upsert
   */
  export type LicensesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Licenses
     */
    select?: LicensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Licenses
     */
    omit?: LicensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicensesInclude<ExtArgs> | null
    /**
     * The filter to search for the Licenses to update in case it exists.
     */
    where: LicensesWhereUniqueInput
    /**
     * In case the Licenses found by the `where` argument doesn't exist, create a new Licenses with this data.
     */
    create: XOR<LicensesCreateInput, LicensesUncheckedCreateInput>
    /**
     * In case the Licenses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LicensesUpdateInput, LicensesUncheckedUpdateInput>
  }

  /**
   * Licenses delete
   */
  export type LicensesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Licenses
     */
    select?: LicensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Licenses
     */
    omit?: LicensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicensesInclude<ExtArgs> | null
    /**
     * Filter which Licenses to delete.
     */
    where: LicensesWhereUniqueInput
  }

  /**
   * Licenses deleteMany
   */
  export type LicensesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Licenses to delete
     */
    where?: LicensesWhereInput
    /**
     * Limit how many Licenses to delete.
     */
    limit?: number
  }

  /**
   * Licenses without action
   */
  export type LicensesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Licenses
     */
    select?: LicensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Licenses
     */
    omit?: LicensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicensesInclude<ExtArgs> | null
  }


  /**
   * Model Copyrights
   */

  export type AggregateCopyrights = {
    _count: CopyrightsCountAggregateOutputType | null
    _avg: CopyrightsAvgAggregateOutputType | null
    _sum: CopyrightsSumAggregateOutputType | null
    _min: CopyrightsMinAggregateOutputType | null
    _max: CopyrightsMaxAggregateOutputType | null
  }

  export type CopyrightsAvgAggregateOutputType = {
    id: number | null
    startLine: number | null
    endLine: number | null
    scannerId: number | null
  }

  export type CopyrightsSumAggregateOutputType = {
    id: number | null
    startLine: number | null
    endLine: number | null
    scannerId: number | null
  }

  export type CopyrightsMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    statement: string | null
    path: string | null
    startLine: number | null
    endLine: number | null
    scannerId: number | null
  }

  export type CopyrightsMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    statement: string | null
    path: string | null
    startLine: number | null
    endLine: number | null
    scannerId: number | null
  }

  export type CopyrightsCountAggregateOutputType = {
    id: number
    createdAt: number
    statement: number
    path: number
    startLine: number
    endLine: number
    scannerId: number
    _all: number
  }


  export type CopyrightsAvgAggregateInputType = {
    id?: true
    startLine?: true
    endLine?: true
    scannerId?: true
  }

  export type CopyrightsSumAggregateInputType = {
    id?: true
    startLine?: true
    endLine?: true
    scannerId?: true
  }

  export type CopyrightsMinAggregateInputType = {
    id?: true
    createdAt?: true
    statement?: true
    path?: true
    startLine?: true
    endLine?: true
    scannerId?: true
  }

  export type CopyrightsMaxAggregateInputType = {
    id?: true
    createdAt?: true
    statement?: true
    path?: true
    startLine?: true
    endLine?: true
    scannerId?: true
  }

  export type CopyrightsCountAggregateInputType = {
    id?: true
    createdAt?: true
    statement?: true
    path?: true
    startLine?: true
    endLine?: true
    scannerId?: true
    _all?: true
  }

  export type CopyrightsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Copyrights to aggregate.
     */
    where?: CopyrightsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Copyrights to fetch.
     */
    orderBy?: CopyrightsOrderByWithRelationInput | CopyrightsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CopyrightsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Copyrights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Copyrights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Copyrights
    **/
    _count?: true | CopyrightsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CopyrightsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CopyrightsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CopyrightsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CopyrightsMaxAggregateInputType
  }

  export type GetCopyrightsAggregateType<T extends CopyrightsAggregateArgs> = {
        [P in keyof T & keyof AggregateCopyrights]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCopyrights[P]>
      : GetScalarType<T[P], AggregateCopyrights[P]>
  }




  export type CopyrightsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CopyrightsWhereInput
    orderBy?: CopyrightsOrderByWithAggregationInput | CopyrightsOrderByWithAggregationInput[]
    by: CopyrightsScalarFieldEnum[] | CopyrightsScalarFieldEnum
    having?: CopyrightsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CopyrightsCountAggregateInputType | true
    _avg?: CopyrightsAvgAggregateInputType
    _sum?: CopyrightsSumAggregateInputType
    _min?: CopyrightsMinAggregateInputType
    _max?: CopyrightsMaxAggregateInputType
  }

  export type CopyrightsGroupByOutputType = {
    id: number
    createdAt: Date
    statement: string
    path: string
    startLine: number
    endLine: number
    scannerId: number
    _count: CopyrightsCountAggregateOutputType | null
    _avg: CopyrightsAvgAggregateOutputType | null
    _sum: CopyrightsSumAggregateOutputType | null
    _min: CopyrightsMinAggregateOutputType | null
    _max: CopyrightsMaxAggregateOutputType | null
  }

  type GetCopyrightsGroupByPayload<T extends CopyrightsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CopyrightsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CopyrightsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CopyrightsGroupByOutputType[P]>
            : GetScalarType<T[P], CopyrightsGroupByOutputType[P]>
        }
      >
    >


  export type CopyrightsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    statement?: boolean
    path?: boolean
    startLine?: boolean
    endLine?: boolean
    scannerId?: boolean
    scanner?: boolean | ScannerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["copyrights"]>



  export type CopyrightsSelectScalar = {
    id?: boolean
    createdAt?: boolean
    statement?: boolean
    path?: boolean
    startLine?: boolean
    endLine?: boolean
    scannerId?: boolean
  }

  export type CopyrightsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "statement" | "path" | "startLine" | "endLine" | "scannerId", ExtArgs["result"]["copyrights"]>
  export type CopyrightsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scanner?: boolean | ScannerDefaultArgs<ExtArgs>
  }

  export type $CopyrightsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Copyrights"
    objects: {
      scanner: Prisma.$ScannerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      statement: string
      path: string
      startLine: number
      endLine: number
      scannerId: number
    }, ExtArgs["result"]["copyrights"]>
    composites: {}
  }

  type CopyrightsGetPayload<S extends boolean | null | undefined | CopyrightsDefaultArgs> = $Result.GetResult<Prisma.$CopyrightsPayload, S>

  type CopyrightsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CopyrightsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CopyrightsCountAggregateInputType | true
    }

  export interface CopyrightsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Copyrights'], meta: { name: 'Copyrights' } }
    /**
     * Find zero or one Copyrights that matches the filter.
     * @param {CopyrightsFindUniqueArgs} args - Arguments to find a Copyrights
     * @example
     * // Get one Copyrights
     * const copyrights = await prisma.copyrights.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CopyrightsFindUniqueArgs>(args: SelectSubset<T, CopyrightsFindUniqueArgs<ExtArgs>>): Prisma__CopyrightsClient<$Result.GetResult<Prisma.$CopyrightsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Copyrights that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CopyrightsFindUniqueOrThrowArgs} args - Arguments to find a Copyrights
     * @example
     * // Get one Copyrights
     * const copyrights = await prisma.copyrights.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CopyrightsFindUniqueOrThrowArgs>(args: SelectSubset<T, CopyrightsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CopyrightsClient<$Result.GetResult<Prisma.$CopyrightsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Copyrights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CopyrightsFindFirstArgs} args - Arguments to find a Copyrights
     * @example
     * // Get one Copyrights
     * const copyrights = await prisma.copyrights.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CopyrightsFindFirstArgs>(args?: SelectSubset<T, CopyrightsFindFirstArgs<ExtArgs>>): Prisma__CopyrightsClient<$Result.GetResult<Prisma.$CopyrightsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Copyrights that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CopyrightsFindFirstOrThrowArgs} args - Arguments to find a Copyrights
     * @example
     * // Get one Copyrights
     * const copyrights = await prisma.copyrights.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CopyrightsFindFirstOrThrowArgs>(args?: SelectSubset<T, CopyrightsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CopyrightsClient<$Result.GetResult<Prisma.$CopyrightsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Copyrights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CopyrightsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Copyrights
     * const copyrights = await prisma.copyrights.findMany()
     * 
     * // Get first 10 Copyrights
     * const copyrights = await prisma.copyrights.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const copyrightsWithIdOnly = await prisma.copyrights.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CopyrightsFindManyArgs>(args?: SelectSubset<T, CopyrightsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CopyrightsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Copyrights.
     * @param {CopyrightsCreateArgs} args - Arguments to create a Copyrights.
     * @example
     * // Create one Copyrights
     * const Copyrights = await prisma.copyrights.create({
     *   data: {
     *     // ... data to create a Copyrights
     *   }
     * })
     * 
     */
    create<T extends CopyrightsCreateArgs>(args: SelectSubset<T, CopyrightsCreateArgs<ExtArgs>>): Prisma__CopyrightsClient<$Result.GetResult<Prisma.$CopyrightsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Copyrights.
     * @param {CopyrightsCreateManyArgs} args - Arguments to create many Copyrights.
     * @example
     * // Create many Copyrights
     * const copyrights = await prisma.copyrights.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CopyrightsCreateManyArgs>(args?: SelectSubset<T, CopyrightsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Copyrights.
     * @param {CopyrightsDeleteArgs} args - Arguments to delete one Copyrights.
     * @example
     * // Delete one Copyrights
     * const Copyrights = await prisma.copyrights.delete({
     *   where: {
     *     // ... filter to delete one Copyrights
     *   }
     * })
     * 
     */
    delete<T extends CopyrightsDeleteArgs>(args: SelectSubset<T, CopyrightsDeleteArgs<ExtArgs>>): Prisma__CopyrightsClient<$Result.GetResult<Prisma.$CopyrightsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Copyrights.
     * @param {CopyrightsUpdateArgs} args - Arguments to update one Copyrights.
     * @example
     * // Update one Copyrights
     * const copyrights = await prisma.copyrights.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CopyrightsUpdateArgs>(args: SelectSubset<T, CopyrightsUpdateArgs<ExtArgs>>): Prisma__CopyrightsClient<$Result.GetResult<Prisma.$CopyrightsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Copyrights.
     * @param {CopyrightsDeleteManyArgs} args - Arguments to filter Copyrights to delete.
     * @example
     * // Delete a few Copyrights
     * const { count } = await prisma.copyrights.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CopyrightsDeleteManyArgs>(args?: SelectSubset<T, CopyrightsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Copyrights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CopyrightsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Copyrights
     * const copyrights = await prisma.copyrights.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CopyrightsUpdateManyArgs>(args: SelectSubset<T, CopyrightsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Copyrights.
     * @param {CopyrightsUpsertArgs} args - Arguments to update or create a Copyrights.
     * @example
     * // Update or create a Copyrights
     * const copyrights = await prisma.copyrights.upsert({
     *   create: {
     *     // ... data to create a Copyrights
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Copyrights we want to update
     *   }
     * })
     */
    upsert<T extends CopyrightsUpsertArgs>(args: SelectSubset<T, CopyrightsUpsertArgs<ExtArgs>>): Prisma__CopyrightsClient<$Result.GetResult<Prisma.$CopyrightsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Copyrights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CopyrightsCountArgs} args - Arguments to filter Copyrights to count.
     * @example
     * // Count the number of Copyrights
     * const count = await prisma.copyrights.count({
     *   where: {
     *     // ... the filter for the Copyrights we want to count
     *   }
     * })
    **/
    count<T extends CopyrightsCountArgs>(
      args?: Subset<T, CopyrightsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CopyrightsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Copyrights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CopyrightsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CopyrightsAggregateArgs>(args: Subset<T, CopyrightsAggregateArgs>): Prisma.PrismaPromise<GetCopyrightsAggregateType<T>>

    /**
     * Group by Copyrights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CopyrightsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CopyrightsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CopyrightsGroupByArgs['orderBy'] }
        : { orderBy?: CopyrightsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CopyrightsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCopyrightsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Copyrights model
   */
  readonly fields: CopyrightsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Copyrights.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CopyrightsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    scanner<T extends ScannerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScannerDefaultArgs<ExtArgs>>): Prisma__ScannerClient<$Result.GetResult<Prisma.$ScannerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Copyrights model
   */
  interface CopyrightsFieldRefs {
    readonly id: FieldRef<"Copyrights", 'Int'>
    readonly createdAt: FieldRef<"Copyrights", 'DateTime'>
    readonly statement: FieldRef<"Copyrights", 'String'>
    readonly path: FieldRef<"Copyrights", 'String'>
    readonly startLine: FieldRef<"Copyrights", 'Int'>
    readonly endLine: FieldRef<"Copyrights", 'Int'>
    readonly scannerId: FieldRef<"Copyrights", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Copyrights findUnique
   */
  export type CopyrightsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Copyrights
     */
    select?: CopyrightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Copyrights
     */
    omit?: CopyrightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CopyrightsInclude<ExtArgs> | null
    /**
     * Filter, which Copyrights to fetch.
     */
    where: CopyrightsWhereUniqueInput
  }

  /**
   * Copyrights findUniqueOrThrow
   */
  export type CopyrightsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Copyrights
     */
    select?: CopyrightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Copyrights
     */
    omit?: CopyrightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CopyrightsInclude<ExtArgs> | null
    /**
     * Filter, which Copyrights to fetch.
     */
    where: CopyrightsWhereUniqueInput
  }

  /**
   * Copyrights findFirst
   */
  export type CopyrightsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Copyrights
     */
    select?: CopyrightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Copyrights
     */
    omit?: CopyrightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CopyrightsInclude<ExtArgs> | null
    /**
     * Filter, which Copyrights to fetch.
     */
    where?: CopyrightsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Copyrights to fetch.
     */
    orderBy?: CopyrightsOrderByWithRelationInput | CopyrightsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Copyrights.
     */
    cursor?: CopyrightsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Copyrights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Copyrights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Copyrights.
     */
    distinct?: CopyrightsScalarFieldEnum | CopyrightsScalarFieldEnum[]
  }

  /**
   * Copyrights findFirstOrThrow
   */
  export type CopyrightsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Copyrights
     */
    select?: CopyrightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Copyrights
     */
    omit?: CopyrightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CopyrightsInclude<ExtArgs> | null
    /**
     * Filter, which Copyrights to fetch.
     */
    where?: CopyrightsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Copyrights to fetch.
     */
    orderBy?: CopyrightsOrderByWithRelationInput | CopyrightsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Copyrights.
     */
    cursor?: CopyrightsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Copyrights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Copyrights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Copyrights.
     */
    distinct?: CopyrightsScalarFieldEnum | CopyrightsScalarFieldEnum[]
  }

  /**
   * Copyrights findMany
   */
  export type CopyrightsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Copyrights
     */
    select?: CopyrightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Copyrights
     */
    omit?: CopyrightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CopyrightsInclude<ExtArgs> | null
    /**
     * Filter, which Copyrights to fetch.
     */
    where?: CopyrightsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Copyrights to fetch.
     */
    orderBy?: CopyrightsOrderByWithRelationInput | CopyrightsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Copyrights.
     */
    cursor?: CopyrightsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Copyrights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Copyrights.
     */
    skip?: number
    distinct?: CopyrightsScalarFieldEnum | CopyrightsScalarFieldEnum[]
  }

  /**
   * Copyrights create
   */
  export type CopyrightsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Copyrights
     */
    select?: CopyrightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Copyrights
     */
    omit?: CopyrightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CopyrightsInclude<ExtArgs> | null
    /**
     * The data needed to create a Copyrights.
     */
    data: XOR<CopyrightsCreateInput, CopyrightsUncheckedCreateInput>
  }

  /**
   * Copyrights createMany
   */
  export type CopyrightsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Copyrights.
     */
    data: CopyrightsCreateManyInput | CopyrightsCreateManyInput[]
  }

  /**
   * Copyrights update
   */
  export type CopyrightsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Copyrights
     */
    select?: CopyrightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Copyrights
     */
    omit?: CopyrightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CopyrightsInclude<ExtArgs> | null
    /**
     * The data needed to update a Copyrights.
     */
    data: XOR<CopyrightsUpdateInput, CopyrightsUncheckedUpdateInput>
    /**
     * Choose, which Copyrights to update.
     */
    where: CopyrightsWhereUniqueInput
  }

  /**
   * Copyrights updateMany
   */
  export type CopyrightsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Copyrights.
     */
    data: XOR<CopyrightsUpdateManyMutationInput, CopyrightsUncheckedUpdateManyInput>
    /**
     * Filter which Copyrights to update
     */
    where?: CopyrightsWhereInput
    /**
     * Limit how many Copyrights to update.
     */
    limit?: number
  }

  /**
   * Copyrights upsert
   */
  export type CopyrightsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Copyrights
     */
    select?: CopyrightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Copyrights
     */
    omit?: CopyrightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CopyrightsInclude<ExtArgs> | null
    /**
     * The filter to search for the Copyrights to update in case it exists.
     */
    where: CopyrightsWhereUniqueInput
    /**
     * In case the Copyrights found by the `where` argument doesn't exist, create a new Copyrights with this data.
     */
    create: XOR<CopyrightsCreateInput, CopyrightsUncheckedCreateInput>
    /**
     * In case the Copyrights was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CopyrightsUpdateInput, CopyrightsUncheckedUpdateInput>
  }

  /**
   * Copyrights delete
   */
  export type CopyrightsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Copyrights
     */
    select?: CopyrightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Copyrights
     */
    omit?: CopyrightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CopyrightsInclude<ExtArgs> | null
    /**
     * Filter which Copyrights to delete.
     */
    where: CopyrightsWhereUniqueInput
  }

  /**
   * Copyrights deleteMany
   */
  export type CopyrightsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Copyrights to delete
     */
    where?: CopyrightsWhereInput
    /**
     * Limit how many Copyrights to delete.
     */
    limit?: number
  }

  /**
   * Copyrights without action
   */
  export type CopyrightsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Copyrights
     */
    select?: CopyrightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Copyrights
     */
    omit?: CopyrightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CopyrightsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
    Snapshot: 'Snapshot'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    userId: 'userId',
    userName: 'userName',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ScanScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    gitRunId: 'gitRunId',
    projectId: 'projectId'
  };

  export type ScanScalarFieldEnum = (typeof ScanScalarFieldEnum)[keyof typeof ScanScalarFieldEnum]


  export const AnalyzerScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    scanId: 'scanId'
  };

  export type AnalyzerScalarFieldEnum = (typeof AnalyzerScalarFieldEnum)[keyof typeof AnalyzerScalarFieldEnum]


  export const AnalyzerPackageScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    packId: 'packId',
    purl: 'purl',
    description: 'description',
    homepageUrl: 'homepageUrl',
    analyzerId: 'analyzerId'
  };

  export type AnalyzerPackageScalarFieldEnum = (typeof AnalyzerPackageScalarFieldEnum)[keyof typeof AnalyzerPackageScalarFieldEnum]


  export const PackageAuthorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    packageId: 'packageId'
  };

  export type PackageAuthorScalarFieldEnum = (typeof PackageAuthorScalarFieldEnum)[keyof typeof PackageAuthorScalarFieldEnum]


  export const DeclaredLicensesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    packageId: 'packageId'
  };

  export type DeclaredLicensesScalarFieldEnum = (typeof DeclaredLicensesScalarFieldEnum)[keyof typeof DeclaredLicensesScalarFieldEnum]


  export const DeclaredLicensesProcessedScalarFieldEnum: {
    id: 'id',
    spdxExpression: 'spdxExpression',
    packageId: 'packageId'
  };

  export type DeclaredLicensesProcessedScalarFieldEnum = (typeof DeclaredLicensesProcessedScalarFieldEnum)[keyof typeof DeclaredLicensesProcessedScalarFieldEnum]


  export const BinaryArtifactScalarFieldEnum: {
    id: 'id',
    url: 'url',
    packageId: 'packageId'
  };

  export type BinaryArtifactScalarFieldEnum = (typeof BinaryArtifactScalarFieldEnum)[keyof typeof BinaryArtifactScalarFieldEnum]


  export const SourceArtifactScalarFieldEnum: {
    id: 'id',
    url: 'url',
    packageId: 'packageId'
  };

  export type SourceArtifactScalarFieldEnum = (typeof SourceArtifactScalarFieldEnum)[keyof typeof SourceArtifactScalarFieldEnum]


  export const VcsScalarFieldEnum: {
    id: 'id',
    type: 'type',
    url: 'url',
    revision: 'revision',
    path: 'path',
    packageId: 'packageId'
  };

  export type VcsScalarFieldEnum = (typeof VcsScalarFieldEnum)[keyof typeof VcsScalarFieldEnum]


  export const VcsProcessedScalarFieldEnum: {
    id: 'id',
    type: 'type',
    url: 'url',
    revision: 'revision',
    path: 'path',
    packageId: 'packageId'
  };

  export type VcsProcessedScalarFieldEnum = (typeof VcsProcessedScalarFieldEnum)[keyof typeof VcsProcessedScalarFieldEnum]


  export const ScannerScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    scanId: 'scanId'
  };

  export type ScannerScalarFieldEnum = (typeof ScannerScalarFieldEnum)[keyof typeof ScannerScalarFieldEnum]


  export const LicensesScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    licenseName: 'licenseName',
    path: 'path',
    startLine: 'startLine',
    endLine: 'endLine',
    score: 'score',
    scannerId: 'scannerId'
  };

  export type LicensesScalarFieldEnum = (typeof LicensesScalarFieldEnum)[keyof typeof LicensesScalarFieldEnum]


  export const CopyrightsScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    statement: 'statement',
    path: 'path',
    startLine: 'startLine',
    endLine: 'endLine',
    scannerId: 'scannerId'
  };

  export type CopyrightsScalarFieldEnum = (typeof CopyrightsScalarFieldEnum)[keyof typeof CopyrightsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userId?: StringFilter<"User"> | string
    userName?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeNullableFilter<"User"> | Date | string | null
    projects?: ProjectListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    userId?: SortOrder
    userName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    projects?: ProjectOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userName?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeNullableFilter<"User"> | Date | string | null
    projects?: ProjectListRelationFilter
  }, "userId" | "email">

  export type UserOrderByWithAggregationInput = {
    userId?: SortOrder
    userName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"User"> | string
    userName?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    userId?: StringFilter<"Project"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    scans?: ScanListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    scans?: ScanOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_name?: ProjectUserId_nameCompoundUniqueInput
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    userId?: StringFilter<"Project"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    scans?: ScanListRelationFilter
  }, "id" | "userId_name">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    userId?: StringWithAggregatesFilter<"Project"> | string
  }

  export type ScanWhereInput = {
    AND?: ScanWhereInput | ScanWhereInput[]
    OR?: ScanWhereInput[]
    NOT?: ScanWhereInput | ScanWhereInput[]
    id?: IntFilter<"Scan"> | number
    createdAt?: DateTimeFilter<"Scan"> | Date | string
    gitRunId?: StringFilter<"Scan"> | string
    projectId?: StringFilter<"Scan"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    analyzer?: XOR<AnalyzerNullableScalarRelationFilter, AnalyzerWhereInput> | null
    scanner?: XOR<ScannerNullableScalarRelationFilter, ScannerWhereInput> | null
  }

  export type ScanOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    gitRunId?: SortOrder
    projectId?: SortOrder
    project?: ProjectOrderByWithRelationInput
    analyzer?: AnalyzerOrderByWithRelationInput
    scanner?: ScannerOrderByWithRelationInput
  }

  export type ScanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    gitRunId?: string
    AND?: ScanWhereInput | ScanWhereInput[]
    OR?: ScanWhereInput[]
    NOT?: ScanWhereInput | ScanWhereInput[]
    createdAt?: DateTimeFilter<"Scan"> | Date | string
    projectId?: StringFilter<"Scan"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    analyzer?: XOR<AnalyzerNullableScalarRelationFilter, AnalyzerWhereInput> | null
    scanner?: XOR<ScannerNullableScalarRelationFilter, ScannerWhereInput> | null
  }, "id" | "gitRunId">

  export type ScanOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    gitRunId?: SortOrder
    projectId?: SortOrder
    _count?: ScanCountOrderByAggregateInput
    _avg?: ScanAvgOrderByAggregateInput
    _max?: ScanMaxOrderByAggregateInput
    _min?: ScanMinOrderByAggregateInput
    _sum?: ScanSumOrderByAggregateInput
  }

  export type ScanScalarWhereWithAggregatesInput = {
    AND?: ScanScalarWhereWithAggregatesInput | ScanScalarWhereWithAggregatesInput[]
    OR?: ScanScalarWhereWithAggregatesInput[]
    NOT?: ScanScalarWhereWithAggregatesInput | ScanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Scan"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Scan"> | Date | string
    gitRunId?: StringWithAggregatesFilter<"Scan"> | string
    projectId?: StringWithAggregatesFilter<"Scan"> | string
  }

  export type AnalyzerWhereInput = {
    AND?: AnalyzerWhereInput | AnalyzerWhereInput[]
    OR?: AnalyzerWhereInput[]
    NOT?: AnalyzerWhereInput | AnalyzerWhereInput[]
    id?: IntFilter<"Analyzer"> | number
    createdAt?: DateTimeFilter<"Analyzer"> | Date | string
    scanId?: IntFilter<"Analyzer"> | number
    scan?: XOR<ScanScalarRelationFilter, ScanWhereInput>
    packages?: AnalyzerPackageListRelationFilter
  }

  export type AnalyzerOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    scanId?: SortOrder
    scan?: ScanOrderByWithRelationInput
    packages?: AnalyzerPackageOrderByRelationAggregateInput
  }

  export type AnalyzerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    scanId?: number
    AND?: AnalyzerWhereInput | AnalyzerWhereInput[]
    OR?: AnalyzerWhereInput[]
    NOT?: AnalyzerWhereInput | AnalyzerWhereInput[]
    createdAt?: DateTimeFilter<"Analyzer"> | Date | string
    scan?: XOR<ScanScalarRelationFilter, ScanWhereInput>
    packages?: AnalyzerPackageListRelationFilter
  }, "id" | "scanId">

  export type AnalyzerOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    scanId?: SortOrder
    _count?: AnalyzerCountOrderByAggregateInput
    _avg?: AnalyzerAvgOrderByAggregateInput
    _max?: AnalyzerMaxOrderByAggregateInput
    _min?: AnalyzerMinOrderByAggregateInput
    _sum?: AnalyzerSumOrderByAggregateInput
  }

  export type AnalyzerScalarWhereWithAggregatesInput = {
    AND?: AnalyzerScalarWhereWithAggregatesInput | AnalyzerScalarWhereWithAggregatesInput[]
    OR?: AnalyzerScalarWhereWithAggregatesInput[]
    NOT?: AnalyzerScalarWhereWithAggregatesInput | AnalyzerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Analyzer"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Analyzer"> | Date | string
    scanId?: IntWithAggregatesFilter<"Analyzer"> | number
  }

  export type AnalyzerPackageWhereInput = {
    AND?: AnalyzerPackageWhereInput | AnalyzerPackageWhereInput[]
    OR?: AnalyzerPackageWhereInput[]
    NOT?: AnalyzerPackageWhereInput | AnalyzerPackageWhereInput[]
    id?: IntFilter<"AnalyzerPackage"> | number
    createdAt?: DateTimeFilter<"AnalyzerPackage"> | Date | string
    packId?: StringFilter<"AnalyzerPackage"> | string
    purl?: StringFilter<"AnalyzerPackage"> | string
    description?: StringFilter<"AnalyzerPackage"> | string
    homepageUrl?: StringFilter<"AnalyzerPackage"> | string
    analyzerId?: IntFilter<"AnalyzerPackage"> | number
    analyzer?: XOR<AnalyzerScalarRelationFilter, AnalyzerWhereInput>
    authors?: PackageAuthorListRelationFilter
    declaredLicenses?: DeclaredLicensesListRelationFilter
    declaredLicensesProcessed?: DeclaredLicensesProcessedListRelationFilter
    binaries?: BinaryArtifactListRelationFilter
    sources?: SourceArtifactListRelationFilter
    vcsList?: VcsListRelationFilter
    vcsProcessed?: VcsProcessedListRelationFilter
  }

  export type AnalyzerPackageOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    packId?: SortOrder
    purl?: SortOrder
    description?: SortOrder
    homepageUrl?: SortOrder
    analyzerId?: SortOrder
    analyzer?: AnalyzerOrderByWithRelationInput
    authors?: PackageAuthorOrderByRelationAggregateInput
    declaredLicenses?: DeclaredLicensesOrderByRelationAggregateInput
    declaredLicensesProcessed?: DeclaredLicensesProcessedOrderByRelationAggregateInput
    binaries?: BinaryArtifactOrderByRelationAggregateInput
    sources?: SourceArtifactOrderByRelationAggregateInput
    vcsList?: VcsOrderByRelationAggregateInput
    vcsProcessed?: VcsProcessedOrderByRelationAggregateInput
  }

  export type AnalyzerPackageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AnalyzerPackageWhereInput | AnalyzerPackageWhereInput[]
    OR?: AnalyzerPackageWhereInput[]
    NOT?: AnalyzerPackageWhereInput | AnalyzerPackageWhereInput[]
    createdAt?: DateTimeFilter<"AnalyzerPackage"> | Date | string
    packId?: StringFilter<"AnalyzerPackage"> | string
    purl?: StringFilter<"AnalyzerPackage"> | string
    description?: StringFilter<"AnalyzerPackage"> | string
    homepageUrl?: StringFilter<"AnalyzerPackage"> | string
    analyzerId?: IntFilter<"AnalyzerPackage"> | number
    analyzer?: XOR<AnalyzerScalarRelationFilter, AnalyzerWhereInput>
    authors?: PackageAuthorListRelationFilter
    declaredLicenses?: DeclaredLicensesListRelationFilter
    declaredLicensesProcessed?: DeclaredLicensesProcessedListRelationFilter
    binaries?: BinaryArtifactListRelationFilter
    sources?: SourceArtifactListRelationFilter
    vcsList?: VcsListRelationFilter
    vcsProcessed?: VcsProcessedListRelationFilter
  }, "id">

  export type AnalyzerPackageOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    packId?: SortOrder
    purl?: SortOrder
    description?: SortOrder
    homepageUrl?: SortOrder
    analyzerId?: SortOrder
    _count?: AnalyzerPackageCountOrderByAggregateInput
    _avg?: AnalyzerPackageAvgOrderByAggregateInput
    _max?: AnalyzerPackageMaxOrderByAggregateInput
    _min?: AnalyzerPackageMinOrderByAggregateInput
    _sum?: AnalyzerPackageSumOrderByAggregateInput
  }

  export type AnalyzerPackageScalarWhereWithAggregatesInput = {
    AND?: AnalyzerPackageScalarWhereWithAggregatesInput | AnalyzerPackageScalarWhereWithAggregatesInput[]
    OR?: AnalyzerPackageScalarWhereWithAggregatesInput[]
    NOT?: AnalyzerPackageScalarWhereWithAggregatesInput | AnalyzerPackageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AnalyzerPackage"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AnalyzerPackage"> | Date | string
    packId?: StringWithAggregatesFilter<"AnalyzerPackage"> | string
    purl?: StringWithAggregatesFilter<"AnalyzerPackage"> | string
    description?: StringWithAggregatesFilter<"AnalyzerPackage"> | string
    homepageUrl?: StringWithAggregatesFilter<"AnalyzerPackage"> | string
    analyzerId?: IntWithAggregatesFilter<"AnalyzerPackage"> | number
  }

  export type PackageAuthorWhereInput = {
    AND?: PackageAuthorWhereInput | PackageAuthorWhereInput[]
    OR?: PackageAuthorWhereInput[]
    NOT?: PackageAuthorWhereInput | PackageAuthorWhereInput[]
    id?: IntFilter<"PackageAuthor"> | number
    name?: StringFilter<"PackageAuthor"> | string
    packageId?: IntFilter<"PackageAuthor"> | number
    analyzerPackage?: XOR<AnalyzerPackageScalarRelationFilter, AnalyzerPackageWhereInput>
  }

  export type PackageAuthorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    packageId?: SortOrder
    analyzerPackage?: AnalyzerPackageOrderByWithRelationInput
  }

  export type PackageAuthorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PackageAuthorWhereInput | PackageAuthorWhereInput[]
    OR?: PackageAuthorWhereInput[]
    NOT?: PackageAuthorWhereInput | PackageAuthorWhereInput[]
    name?: StringFilter<"PackageAuthor"> | string
    packageId?: IntFilter<"PackageAuthor"> | number
    analyzerPackage?: XOR<AnalyzerPackageScalarRelationFilter, AnalyzerPackageWhereInput>
  }, "id">

  export type PackageAuthorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    packageId?: SortOrder
    _count?: PackageAuthorCountOrderByAggregateInput
    _avg?: PackageAuthorAvgOrderByAggregateInput
    _max?: PackageAuthorMaxOrderByAggregateInput
    _min?: PackageAuthorMinOrderByAggregateInput
    _sum?: PackageAuthorSumOrderByAggregateInput
  }

  export type PackageAuthorScalarWhereWithAggregatesInput = {
    AND?: PackageAuthorScalarWhereWithAggregatesInput | PackageAuthorScalarWhereWithAggregatesInput[]
    OR?: PackageAuthorScalarWhereWithAggregatesInput[]
    NOT?: PackageAuthorScalarWhereWithAggregatesInput | PackageAuthorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PackageAuthor"> | number
    name?: StringWithAggregatesFilter<"PackageAuthor"> | string
    packageId?: IntWithAggregatesFilter<"PackageAuthor"> | number
  }

  export type DeclaredLicensesWhereInput = {
    AND?: DeclaredLicensesWhereInput | DeclaredLicensesWhereInput[]
    OR?: DeclaredLicensesWhereInput[]
    NOT?: DeclaredLicensesWhereInput | DeclaredLicensesWhereInput[]
    id?: IntFilter<"DeclaredLicenses"> | number
    name?: StringFilter<"DeclaredLicenses"> | string
    packageId?: IntFilter<"DeclaredLicenses"> | number
    analyzerPackage?: XOR<AnalyzerPackageScalarRelationFilter, AnalyzerPackageWhereInput>
  }

  export type DeclaredLicensesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    packageId?: SortOrder
    analyzerPackage?: AnalyzerPackageOrderByWithRelationInput
  }

  export type DeclaredLicensesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DeclaredLicensesWhereInput | DeclaredLicensesWhereInput[]
    OR?: DeclaredLicensesWhereInput[]
    NOT?: DeclaredLicensesWhereInput | DeclaredLicensesWhereInput[]
    name?: StringFilter<"DeclaredLicenses"> | string
    packageId?: IntFilter<"DeclaredLicenses"> | number
    analyzerPackage?: XOR<AnalyzerPackageScalarRelationFilter, AnalyzerPackageWhereInput>
  }, "id">

  export type DeclaredLicensesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    packageId?: SortOrder
    _count?: DeclaredLicensesCountOrderByAggregateInput
    _avg?: DeclaredLicensesAvgOrderByAggregateInput
    _max?: DeclaredLicensesMaxOrderByAggregateInput
    _min?: DeclaredLicensesMinOrderByAggregateInput
    _sum?: DeclaredLicensesSumOrderByAggregateInput
  }

  export type DeclaredLicensesScalarWhereWithAggregatesInput = {
    AND?: DeclaredLicensesScalarWhereWithAggregatesInput | DeclaredLicensesScalarWhereWithAggregatesInput[]
    OR?: DeclaredLicensesScalarWhereWithAggregatesInput[]
    NOT?: DeclaredLicensesScalarWhereWithAggregatesInput | DeclaredLicensesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DeclaredLicenses"> | number
    name?: StringWithAggregatesFilter<"DeclaredLicenses"> | string
    packageId?: IntWithAggregatesFilter<"DeclaredLicenses"> | number
  }

  export type DeclaredLicensesProcessedWhereInput = {
    AND?: DeclaredLicensesProcessedWhereInput | DeclaredLicensesProcessedWhereInput[]
    OR?: DeclaredLicensesProcessedWhereInput[]
    NOT?: DeclaredLicensesProcessedWhereInput | DeclaredLicensesProcessedWhereInput[]
    id?: IntFilter<"DeclaredLicensesProcessed"> | number
    spdxExpression?: StringFilter<"DeclaredLicensesProcessed"> | string
    packageId?: IntFilter<"DeclaredLicensesProcessed"> | number
    analyzerPackage?: XOR<AnalyzerPackageScalarRelationFilter, AnalyzerPackageWhereInput>
  }

  export type DeclaredLicensesProcessedOrderByWithRelationInput = {
    id?: SortOrder
    spdxExpression?: SortOrder
    packageId?: SortOrder
    analyzerPackage?: AnalyzerPackageOrderByWithRelationInput
  }

  export type DeclaredLicensesProcessedWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DeclaredLicensesProcessedWhereInput | DeclaredLicensesProcessedWhereInput[]
    OR?: DeclaredLicensesProcessedWhereInput[]
    NOT?: DeclaredLicensesProcessedWhereInput | DeclaredLicensesProcessedWhereInput[]
    spdxExpression?: StringFilter<"DeclaredLicensesProcessed"> | string
    packageId?: IntFilter<"DeclaredLicensesProcessed"> | number
    analyzerPackage?: XOR<AnalyzerPackageScalarRelationFilter, AnalyzerPackageWhereInput>
  }, "id">

  export type DeclaredLicensesProcessedOrderByWithAggregationInput = {
    id?: SortOrder
    spdxExpression?: SortOrder
    packageId?: SortOrder
    _count?: DeclaredLicensesProcessedCountOrderByAggregateInput
    _avg?: DeclaredLicensesProcessedAvgOrderByAggregateInput
    _max?: DeclaredLicensesProcessedMaxOrderByAggregateInput
    _min?: DeclaredLicensesProcessedMinOrderByAggregateInput
    _sum?: DeclaredLicensesProcessedSumOrderByAggregateInput
  }

  export type DeclaredLicensesProcessedScalarWhereWithAggregatesInput = {
    AND?: DeclaredLicensesProcessedScalarWhereWithAggregatesInput | DeclaredLicensesProcessedScalarWhereWithAggregatesInput[]
    OR?: DeclaredLicensesProcessedScalarWhereWithAggregatesInput[]
    NOT?: DeclaredLicensesProcessedScalarWhereWithAggregatesInput | DeclaredLicensesProcessedScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DeclaredLicensesProcessed"> | number
    spdxExpression?: StringWithAggregatesFilter<"DeclaredLicensesProcessed"> | string
    packageId?: IntWithAggregatesFilter<"DeclaredLicensesProcessed"> | number
  }

  export type BinaryArtifactWhereInput = {
    AND?: BinaryArtifactWhereInput | BinaryArtifactWhereInput[]
    OR?: BinaryArtifactWhereInput[]
    NOT?: BinaryArtifactWhereInput | BinaryArtifactWhereInput[]
    id?: IntFilter<"BinaryArtifact"> | number
    url?: StringFilter<"BinaryArtifact"> | string
    packageId?: IntFilter<"BinaryArtifact"> | number
    analyzerPackage?: XOR<AnalyzerPackageScalarRelationFilter, AnalyzerPackageWhereInput>
  }

  export type BinaryArtifactOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    packageId?: SortOrder
    analyzerPackage?: AnalyzerPackageOrderByWithRelationInput
  }

  export type BinaryArtifactWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BinaryArtifactWhereInput | BinaryArtifactWhereInput[]
    OR?: BinaryArtifactWhereInput[]
    NOT?: BinaryArtifactWhereInput | BinaryArtifactWhereInput[]
    url?: StringFilter<"BinaryArtifact"> | string
    packageId?: IntFilter<"BinaryArtifact"> | number
    analyzerPackage?: XOR<AnalyzerPackageScalarRelationFilter, AnalyzerPackageWhereInput>
  }, "id">

  export type BinaryArtifactOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    packageId?: SortOrder
    _count?: BinaryArtifactCountOrderByAggregateInput
    _avg?: BinaryArtifactAvgOrderByAggregateInput
    _max?: BinaryArtifactMaxOrderByAggregateInput
    _min?: BinaryArtifactMinOrderByAggregateInput
    _sum?: BinaryArtifactSumOrderByAggregateInput
  }

  export type BinaryArtifactScalarWhereWithAggregatesInput = {
    AND?: BinaryArtifactScalarWhereWithAggregatesInput | BinaryArtifactScalarWhereWithAggregatesInput[]
    OR?: BinaryArtifactScalarWhereWithAggregatesInput[]
    NOT?: BinaryArtifactScalarWhereWithAggregatesInput | BinaryArtifactScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BinaryArtifact"> | number
    url?: StringWithAggregatesFilter<"BinaryArtifact"> | string
    packageId?: IntWithAggregatesFilter<"BinaryArtifact"> | number
  }

  export type SourceArtifactWhereInput = {
    AND?: SourceArtifactWhereInput | SourceArtifactWhereInput[]
    OR?: SourceArtifactWhereInput[]
    NOT?: SourceArtifactWhereInput | SourceArtifactWhereInput[]
    id?: IntFilter<"SourceArtifact"> | number
    url?: StringFilter<"SourceArtifact"> | string
    packageId?: IntFilter<"SourceArtifact"> | number
    analyzerPackage?: XOR<AnalyzerPackageScalarRelationFilter, AnalyzerPackageWhereInput>
  }

  export type SourceArtifactOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    packageId?: SortOrder
    analyzerPackage?: AnalyzerPackageOrderByWithRelationInput
  }

  export type SourceArtifactWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SourceArtifactWhereInput | SourceArtifactWhereInput[]
    OR?: SourceArtifactWhereInput[]
    NOT?: SourceArtifactWhereInput | SourceArtifactWhereInput[]
    url?: StringFilter<"SourceArtifact"> | string
    packageId?: IntFilter<"SourceArtifact"> | number
    analyzerPackage?: XOR<AnalyzerPackageScalarRelationFilter, AnalyzerPackageWhereInput>
  }, "id">

  export type SourceArtifactOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    packageId?: SortOrder
    _count?: SourceArtifactCountOrderByAggregateInput
    _avg?: SourceArtifactAvgOrderByAggregateInput
    _max?: SourceArtifactMaxOrderByAggregateInput
    _min?: SourceArtifactMinOrderByAggregateInput
    _sum?: SourceArtifactSumOrderByAggregateInput
  }

  export type SourceArtifactScalarWhereWithAggregatesInput = {
    AND?: SourceArtifactScalarWhereWithAggregatesInput | SourceArtifactScalarWhereWithAggregatesInput[]
    OR?: SourceArtifactScalarWhereWithAggregatesInput[]
    NOT?: SourceArtifactScalarWhereWithAggregatesInput | SourceArtifactScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SourceArtifact"> | number
    url?: StringWithAggregatesFilter<"SourceArtifact"> | string
    packageId?: IntWithAggregatesFilter<"SourceArtifact"> | number
  }

  export type VcsWhereInput = {
    AND?: VcsWhereInput | VcsWhereInput[]
    OR?: VcsWhereInput[]
    NOT?: VcsWhereInput | VcsWhereInput[]
    id?: IntFilter<"Vcs"> | number
    type?: StringFilter<"Vcs"> | string
    url?: StringFilter<"Vcs"> | string
    revision?: StringFilter<"Vcs"> | string
    path?: StringFilter<"Vcs"> | string
    packageId?: IntFilter<"Vcs"> | number
    analyzerPackage?: XOR<AnalyzerPackageScalarRelationFilter, AnalyzerPackageWhereInput>
  }

  export type VcsOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    url?: SortOrder
    revision?: SortOrder
    path?: SortOrder
    packageId?: SortOrder
    analyzerPackage?: AnalyzerPackageOrderByWithRelationInput
  }

  export type VcsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VcsWhereInput | VcsWhereInput[]
    OR?: VcsWhereInput[]
    NOT?: VcsWhereInput | VcsWhereInput[]
    type?: StringFilter<"Vcs"> | string
    url?: StringFilter<"Vcs"> | string
    revision?: StringFilter<"Vcs"> | string
    path?: StringFilter<"Vcs"> | string
    packageId?: IntFilter<"Vcs"> | number
    analyzerPackage?: XOR<AnalyzerPackageScalarRelationFilter, AnalyzerPackageWhereInput>
  }, "id">

  export type VcsOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    url?: SortOrder
    revision?: SortOrder
    path?: SortOrder
    packageId?: SortOrder
    _count?: VcsCountOrderByAggregateInput
    _avg?: VcsAvgOrderByAggregateInput
    _max?: VcsMaxOrderByAggregateInput
    _min?: VcsMinOrderByAggregateInput
    _sum?: VcsSumOrderByAggregateInput
  }

  export type VcsScalarWhereWithAggregatesInput = {
    AND?: VcsScalarWhereWithAggregatesInput | VcsScalarWhereWithAggregatesInput[]
    OR?: VcsScalarWhereWithAggregatesInput[]
    NOT?: VcsScalarWhereWithAggregatesInput | VcsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Vcs"> | number
    type?: StringWithAggregatesFilter<"Vcs"> | string
    url?: StringWithAggregatesFilter<"Vcs"> | string
    revision?: StringWithAggregatesFilter<"Vcs"> | string
    path?: StringWithAggregatesFilter<"Vcs"> | string
    packageId?: IntWithAggregatesFilter<"Vcs"> | number
  }

  export type VcsProcessedWhereInput = {
    AND?: VcsProcessedWhereInput | VcsProcessedWhereInput[]
    OR?: VcsProcessedWhereInput[]
    NOT?: VcsProcessedWhereInput | VcsProcessedWhereInput[]
    id?: IntFilter<"VcsProcessed"> | number
    type?: StringFilter<"VcsProcessed"> | string
    url?: StringFilter<"VcsProcessed"> | string
    revision?: StringFilter<"VcsProcessed"> | string
    path?: StringFilter<"VcsProcessed"> | string
    packageId?: IntFilter<"VcsProcessed"> | number
    analyzerPackage?: XOR<AnalyzerPackageScalarRelationFilter, AnalyzerPackageWhereInput>
  }

  export type VcsProcessedOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    url?: SortOrder
    revision?: SortOrder
    path?: SortOrder
    packageId?: SortOrder
    analyzerPackage?: AnalyzerPackageOrderByWithRelationInput
  }

  export type VcsProcessedWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VcsProcessedWhereInput | VcsProcessedWhereInput[]
    OR?: VcsProcessedWhereInput[]
    NOT?: VcsProcessedWhereInput | VcsProcessedWhereInput[]
    type?: StringFilter<"VcsProcessed"> | string
    url?: StringFilter<"VcsProcessed"> | string
    revision?: StringFilter<"VcsProcessed"> | string
    path?: StringFilter<"VcsProcessed"> | string
    packageId?: IntFilter<"VcsProcessed"> | number
    analyzerPackage?: XOR<AnalyzerPackageScalarRelationFilter, AnalyzerPackageWhereInput>
  }, "id">

  export type VcsProcessedOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    url?: SortOrder
    revision?: SortOrder
    path?: SortOrder
    packageId?: SortOrder
    _count?: VcsProcessedCountOrderByAggregateInput
    _avg?: VcsProcessedAvgOrderByAggregateInput
    _max?: VcsProcessedMaxOrderByAggregateInput
    _min?: VcsProcessedMinOrderByAggregateInput
    _sum?: VcsProcessedSumOrderByAggregateInput
  }

  export type VcsProcessedScalarWhereWithAggregatesInput = {
    AND?: VcsProcessedScalarWhereWithAggregatesInput | VcsProcessedScalarWhereWithAggregatesInput[]
    OR?: VcsProcessedScalarWhereWithAggregatesInput[]
    NOT?: VcsProcessedScalarWhereWithAggregatesInput | VcsProcessedScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VcsProcessed"> | number
    type?: StringWithAggregatesFilter<"VcsProcessed"> | string
    url?: StringWithAggregatesFilter<"VcsProcessed"> | string
    revision?: StringWithAggregatesFilter<"VcsProcessed"> | string
    path?: StringWithAggregatesFilter<"VcsProcessed"> | string
    packageId?: IntWithAggregatesFilter<"VcsProcessed"> | number
  }

  export type ScannerWhereInput = {
    AND?: ScannerWhereInput | ScannerWhereInput[]
    OR?: ScannerWhereInput[]
    NOT?: ScannerWhereInput | ScannerWhereInput[]
    id?: IntFilter<"Scanner"> | number
    createdAt?: DateTimeFilter<"Scanner"> | Date | string
    scanId?: IntFilter<"Scanner"> | number
    scan?: XOR<ScanScalarRelationFilter, ScanWhereInput>
    licenses?: LicensesListRelationFilter
    copyrights?: CopyrightsListRelationFilter
  }

  export type ScannerOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    scanId?: SortOrder
    scan?: ScanOrderByWithRelationInput
    licenses?: LicensesOrderByRelationAggregateInput
    copyrights?: CopyrightsOrderByRelationAggregateInput
  }

  export type ScannerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    scanId?: number
    AND?: ScannerWhereInput | ScannerWhereInput[]
    OR?: ScannerWhereInput[]
    NOT?: ScannerWhereInput | ScannerWhereInput[]
    createdAt?: DateTimeFilter<"Scanner"> | Date | string
    scan?: XOR<ScanScalarRelationFilter, ScanWhereInput>
    licenses?: LicensesListRelationFilter
    copyrights?: CopyrightsListRelationFilter
  }, "id" | "scanId">

  export type ScannerOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    scanId?: SortOrder
    _count?: ScannerCountOrderByAggregateInput
    _avg?: ScannerAvgOrderByAggregateInput
    _max?: ScannerMaxOrderByAggregateInput
    _min?: ScannerMinOrderByAggregateInput
    _sum?: ScannerSumOrderByAggregateInput
  }

  export type ScannerScalarWhereWithAggregatesInput = {
    AND?: ScannerScalarWhereWithAggregatesInput | ScannerScalarWhereWithAggregatesInput[]
    OR?: ScannerScalarWhereWithAggregatesInput[]
    NOT?: ScannerScalarWhereWithAggregatesInput | ScannerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Scanner"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Scanner"> | Date | string
    scanId?: IntWithAggregatesFilter<"Scanner"> | number
  }

  export type LicensesWhereInput = {
    AND?: LicensesWhereInput | LicensesWhereInput[]
    OR?: LicensesWhereInput[]
    NOT?: LicensesWhereInput | LicensesWhereInput[]
    id?: IntFilter<"Licenses"> | number
    createdAt?: DateTimeFilter<"Licenses"> | Date | string
    licenseName?: StringFilter<"Licenses"> | string
    path?: StringFilter<"Licenses"> | string
    startLine?: IntFilter<"Licenses"> | number
    endLine?: IntFilter<"Licenses"> | number
    score?: FloatFilter<"Licenses"> | number
    scannerId?: IntFilter<"Licenses"> | number
    scanner?: XOR<ScannerScalarRelationFilter, ScannerWhereInput>
  }

  export type LicensesOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    licenseName?: SortOrder
    path?: SortOrder
    startLine?: SortOrder
    endLine?: SortOrder
    score?: SortOrder
    scannerId?: SortOrder
    scanner?: ScannerOrderByWithRelationInput
  }

  export type LicensesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LicensesWhereInput | LicensesWhereInput[]
    OR?: LicensesWhereInput[]
    NOT?: LicensesWhereInput | LicensesWhereInput[]
    createdAt?: DateTimeFilter<"Licenses"> | Date | string
    licenseName?: StringFilter<"Licenses"> | string
    path?: StringFilter<"Licenses"> | string
    startLine?: IntFilter<"Licenses"> | number
    endLine?: IntFilter<"Licenses"> | number
    score?: FloatFilter<"Licenses"> | number
    scannerId?: IntFilter<"Licenses"> | number
    scanner?: XOR<ScannerScalarRelationFilter, ScannerWhereInput>
  }, "id">

  export type LicensesOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    licenseName?: SortOrder
    path?: SortOrder
    startLine?: SortOrder
    endLine?: SortOrder
    score?: SortOrder
    scannerId?: SortOrder
    _count?: LicensesCountOrderByAggregateInput
    _avg?: LicensesAvgOrderByAggregateInput
    _max?: LicensesMaxOrderByAggregateInput
    _min?: LicensesMinOrderByAggregateInput
    _sum?: LicensesSumOrderByAggregateInput
  }

  export type LicensesScalarWhereWithAggregatesInput = {
    AND?: LicensesScalarWhereWithAggregatesInput | LicensesScalarWhereWithAggregatesInput[]
    OR?: LicensesScalarWhereWithAggregatesInput[]
    NOT?: LicensesScalarWhereWithAggregatesInput | LicensesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Licenses"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Licenses"> | Date | string
    licenseName?: StringWithAggregatesFilter<"Licenses"> | string
    path?: StringWithAggregatesFilter<"Licenses"> | string
    startLine?: IntWithAggregatesFilter<"Licenses"> | number
    endLine?: IntWithAggregatesFilter<"Licenses"> | number
    score?: FloatWithAggregatesFilter<"Licenses"> | number
    scannerId?: IntWithAggregatesFilter<"Licenses"> | number
  }

  export type CopyrightsWhereInput = {
    AND?: CopyrightsWhereInput | CopyrightsWhereInput[]
    OR?: CopyrightsWhereInput[]
    NOT?: CopyrightsWhereInput | CopyrightsWhereInput[]
    id?: IntFilter<"Copyrights"> | number
    createdAt?: DateTimeFilter<"Copyrights"> | Date | string
    statement?: StringFilter<"Copyrights"> | string
    path?: StringFilter<"Copyrights"> | string
    startLine?: IntFilter<"Copyrights"> | number
    endLine?: IntFilter<"Copyrights"> | number
    scannerId?: IntFilter<"Copyrights"> | number
    scanner?: XOR<ScannerScalarRelationFilter, ScannerWhereInput>
  }

  export type CopyrightsOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    statement?: SortOrder
    path?: SortOrder
    startLine?: SortOrder
    endLine?: SortOrder
    scannerId?: SortOrder
    scanner?: ScannerOrderByWithRelationInput
  }

  export type CopyrightsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CopyrightsWhereInput | CopyrightsWhereInput[]
    OR?: CopyrightsWhereInput[]
    NOT?: CopyrightsWhereInput | CopyrightsWhereInput[]
    createdAt?: DateTimeFilter<"Copyrights"> | Date | string
    statement?: StringFilter<"Copyrights"> | string
    path?: StringFilter<"Copyrights"> | string
    startLine?: IntFilter<"Copyrights"> | number
    endLine?: IntFilter<"Copyrights"> | number
    scannerId?: IntFilter<"Copyrights"> | number
    scanner?: XOR<ScannerScalarRelationFilter, ScannerWhereInput>
  }, "id">

  export type CopyrightsOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    statement?: SortOrder
    path?: SortOrder
    startLine?: SortOrder
    endLine?: SortOrder
    scannerId?: SortOrder
    _count?: CopyrightsCountOrderByAggregateInput
    _avg?: CopyrightsAvgOrderByAggregateInput
    _max?: CopyrightsMaxOrderByAggregateInput
    _min?: CopyrightsMinOrderByAggregateInput
    _sum?: CopyrightsSumOrderByAggregateInput
  }

  export type CopyrightsScalarWhereWithAggregatesInput = {
    AND?: CopyrightsScalarWhereWithAggregatesInput | CopyrightsScalarWhereWithAggregatesInput[]
    OR?: CopyrightsScalarWhereWithAggregatesInput[]
    NOT?: CopyrightsScalarWhereWithAggregatesInput | CopyrightsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Copyrights"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Copyrights"> | Date | string
    statement?: StringWithAggregatesFilter<"Copyrights"> | string
    path?: StringWithAggregatesFilter<"Copyrights"> | string
    startLine?: IntWithAggregatesFilter<"Copyrights"> | number
    endLine?: IntWithAggregatesFilter<"Copyrights"> | number
    scannerId?: IntWithAggregatesFilter<"Copyrights"> | number
  }

  export type UserCreateInput = {
    userId: string
    userName?: string | null
    email?: string | null
    password?: string | null
    createdAt?: Date | string | null
    projects?: ProjectCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    userId: string
    userName?: string | null
    email?: string | null
    password?: string | null
    createdAt?: Date | string | null
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projects?: ProjectUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    userId: string
    userName?: string | null
    email?: string | null
    password?: string | null
    createdAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProjectCreateInput = {
    id: string
    name: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutProjectsInput
    scans?: ScanCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id: string
    name: string
    createdAt?: Date | string
    userId: string
    scans?: ScanUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    scans?: ScanUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    scans?: ScanUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id: string
    name: string
    createdAt?: Date | string
    userId: string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ScanCreateInput = {
    createdAt?: Date | string
    gitRunId: string
    project: ProjectCreateNestedOneWithoutScansInput
    analyzer?: AnalyzerCreateNestedOneWithoutScanInput
    scanner?: ScannerCreateNestedOneWithoutScanInput
  }

  export type ScanUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    gitRunId: string
    projectId: string
    analyzer?: AnalyzerUncheckedCreateNestedOneWithoutScanInput
    scanner?: ScannerUncheckedCreateNestedOneWithoutScanInput
  }

  export type ScanUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gitRunId?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneRequiredWithoutScansNestedInput
    analyzer?: AnalyzerUpdateOneWithoutScanNestedInput
    scanner?: ScannerUpdateOneWithoutScanNestedInput
  }

  export type ScanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gitRunId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    analyzer?: AnalyzerUncheckedUpdateOneWithoutScanNestedInput
    scanner?: ScannerUncheckedUpdateOneWithoutScanNestedInput
  }

  export type ScanCreateManyInput = {
    createdAt?: Date | string
    gitRunId: string
    projectId: string
  }

  export type ScanUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gitRunId?: StringFieldUpdateOperationsInput | string
  }

  export type ScanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gitRunId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type AnalyzerCreateInput = {
    createdAt?: Date | string
    scan: ScanCreateNestedOneWithoutAnalyzerInput
    packages?: AnalyzerPackageCreateNestedManyWithoutAnalyzerInput
  }

  export type AnalyzerUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    scanId: number
    packages?: AnalyzerPackageUncheckedCreateNestedManyWithoutAnalyzerInput
  }

  export type AnalyzerUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scan?: ScanUpdateOneRequiredWithoutAnalyzerNestedInput
    packages?: AnalyzerPackageUpdateManyWithoutAnalyzerNestedInput
  }

  export type AnalyzerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scanId?: IntFieldUpdateOperationsInput | number
    packages?: AnalyzerPackageUncheckedUpdateManyWithoutAnalyzerNestedInput
  }

  export type AnalyzerCreateManyInput = {
    createdAt?: Date | string
    scanId: number
  }

  export type AnalyzerUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyzerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scanId?: IntFieldUpdateOperationsInput | number
  }

  export type AnalyzerPackageCreateInput = {
    createdAt?: Date | string
    packId: string
    purl: string
    description: string
    homepageUrl: string
    analyzer: AnalyzerCreateNestedOneWithoutPackagesInput
    authors?: PackageAuthorCreateNestedManyWithoutAnalyzerPackageInput
    declaredLicenses?: DeclaredLicensesCreateNestedManyWithoutAnalyzerPackageInput
    declaredLicensesProcessed?: DeclaredLicensesProcessedCreateNestedManyWithoutAnalyzerPackageInput
    binaries?: BinaryArtifactCreateNestedManyWithoutAnalyzerPackageInput
    sources?: SourceArtifactCreateNestedManyWithoutAnalyzerPackageInput
    vcsList?: VcsCreateNestedManyWithoutAnalyzerPackageInput
    vcsProcessed?: VcsProcessedCreateNestedManyWithoutAnalyzerPackageInput
  }

  export type AnalyzerPackageUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    packId: string
    purl: string
    description: string
    homepageUrl: string
    analyzerId: number
    authors?: PackageAuthorUncheckedCreateNestedManyWithoutAnalyzerPackageInput
    declaredLicenses?: DeclaredLicensesUncheckedCreateNestedManyWithoutAnalyzerPackageInput
    declaredLicensesProcessed?: DeclaredLicensesProcessedUncheckedCreateNestedManyWithoutAnalyzerPackageInput
    binaries?: BinaryArtifactUncheckedCreateNestedManyWithoutAnalyzerPackageInput
    sources?: SourceArtifactUncheckedCreateNestedManyWithoutAnalyzerPackageInput
    vcsList?: VcsUncheckedCreateNestedManyWithoutAnalyzerPackageInput
    vcsProcessed?: VcsProcessedUncheckedCreateNestedManyWithoutAnalyzerPackageInput
  }

  export type AnalyzerPackageUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packId?: StringFieldUpdateOperationsInput | string
    purl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    homepageUrl?: StringFieldUpdateOperationsInput | string
    analyzer?: AnalyzerUpdateOneRequiredWithoutPackagesNestedInput
    authors?: PackageAuthorUpdateManyWithoutAnalyzerPackageNestedInput
    declaredLicenses?: DeclaredLicensesUpdateManyWithoutAnalyzerPackageNestedInput
    declaredLicensesProcessed?: DeclaredLicensesProcessedUpdateManyWithoutAnalyzerPackageNestedInput
    binaries?: BinaryArtifactUpdateManyWithoutAnalyzerPackageNestedInput
    sources?: SourceArtifactUpdateManyWithoutAnalyzerPackageNestedInput
    vcsList?: VcsUpdateManyWithoutAnalyzerPackageNestedInput
    vcsProcessed?: VcsProcessedUpdateManyWithoutAnalyzerPackageNestedInput
  }

  export type AnalyzerPackageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packId?: StringFieldUpdateOperationsInput | string
    purl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    homepageUrl?: StringFieldUpdateOperationsInput | string
    analyzerId?: IntFieldUpdateOperationsInput | number
    authors?: PackageAuthorUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
    declaredLicenses?: DeclaredLicensesUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
    declaredLicensesProcessed?: DeclaredLicensesProcessedUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
    binaries?: BinaryArtifactUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
    sources?: SourceArtifactUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
    vcsList?: VcsUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
    vcsProcessed?: VcsProcessedUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
  }

  export type AnalyzerPackageCreateManyInput = {
    createdAt?: Date | string
    packId: string
    purl: string
    description: string
    homepageUrl: string
    analyzerId: number
  }

  export type AnalyzerPackageUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packId?: StringFieldUpdateOperationsInput | string
    purl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    homepageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type AnalyzerPackageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packId?: StringFieldUpdateOperationsInput | string
    purl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    homepageUrl?: StringFieldUpdateOperationsInput | string
    analyzerId?: IntFieldUpdateOperationsInput | number
  }

  export type PackageAuthorCreateInput = {
    name: string
    analyzerPackage: AnalyzerPackageCreateNestedOneWithoutAuthorsInput
  }

  export type PackageAuthorUncheckedCreateInput = {
    id?: number
    name: string
    packageId: number
  }

  export type PackageAuthorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    analyzerPackage?: AnalyzerPackageUpdateOneRequiredWithoutAuthorsNestedInput
  }

  export type PackageAuthorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    packageId?: IntFieldUpdateOperationsInput | number
  }

  export type PackageAuthorCreateManyInput = {
    name: string
    packageId: number
  }

  export type PackageAuthorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PackageAuthorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    packageId?: IntFieldUpdateOperationsInput | number
  }

  export type DeclaredLicensesCreateInput = {
    name: string
    analyzerPackage: AnalyzerPackageCreateNestedOneWithoutDeclaredLicensesInput
  }

  export type DeclaredLicensesUncheckedCreateInput = {
    id?: number
    name: string
    packageId: number
  }

  export type DeclaredLicensesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    analyzerPackage?: AnalyzerPackageUpdateOneRequiredWithoutDeclaredLicensesNestedInput
  }

  export type DeclaredLicensesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    packageId?: IntFieldUpdateOperationsInput | number
  }

  export type DeclaredLicensesCreateManyInput = {
    name: string
    packageId: number
  }

  export type DeclaredLicensesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DeclaredLicensesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    packageId?: IntFieldUpdateOperationsInput | number
  }

  export type DeclaredLicensesProcessedCreateInput = {
    spdxExpression: string
    analyzerPackage: AnalyzerPackageCreateNestedOneWithoutDeclaredLicensesProcessedInput
  }

  export type DeclaredLicensesProcessedUncheckedCreateInput = {
    id?: number
    spdxExpression: string
    packageId: number
  }

  export type DeclaredLicensesProcessedUpdateInput = {
    spdxExpression?: StringFieldUpdateOperationsInput | string
    analyzerPackage?: AnalyzerPackageUpdateOneRequiredWithoutDeclaredLicensesProcessedNestedInput
  }

  export type DeclaredLicensesProcessedUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    spdxExpression?: StringFieldUpdateOperationsInput | string
    packageId?: IntFieldUpdateOperationsInput | number
  }

  export type DeclaredLicensesProcessedCreateManyInput = {
    spdxExpression: string
    packageId: number
  }

  export type DeclaredLicensesProcessedUpdateManyMutationInput = {
    spdxExpression?: StringFieldUpdateOperationsInput | string
  }

  export type DeclaredLicensesProcessedUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    spdxExpression?: StringFieldUpdateOperationsInput | string
    packageId?: IntFieldUpdateOperationsInput | number
  }

  export type BinaryArtifactCreateInput = {
    url: string
    analyzerPackage: AnalyzerPackageCreateNestedOneWithoutBinariesInput
  }

  export type BinaryArtifactUncheckedCreateInput = {
    id?: number
    url: string
    packageId: number
  }

  export type BinaryArtifactUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    analyzerPackage?: AnalyzerPackageUpdateOneRequiredWithoutBinariesNestedInput
  }

  export type BinaryArtifactUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    packageId?: IntFieldUpdateOperationsInput | number
  }

  export type BinaryArtifactCreateManyInput = {
    url: string
    packageId: number
  }

  export type BinaryArtifactUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type BinaryArtifactUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    packageId?: IntFieldUpdateOperationsInput | number
  }

  export type SourceArtifactCreateInput = {
    url: string
    analyzerPackage: AnalyzerPackageCreateNestedOneWithoutSourcesInput
  }

  export type SourceArtifactUncheckedCreateInput = {
    id?: number
    url: string
    packageId: number
  }

  export type SourceArtifactUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    analyzerPackage?: AnalyzerPackageUpdateOneRequiredWithoutSourcesNestedInput
  }

  export type SourceArtifactUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    packageId?: IntFieldUpdateOperationsInput | number
  }

  export type SourceArtifactCreateManyInput = {
    url: string
    packageId: number
  }

  export type SourceArtifactUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type SourceArtifactUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    packageId?: IntFieldUpdateOperationsInput | number
  }

  export type VcsCreateInput = {
    type: string
    url: string
    revision: string
    path: string
    analyzerPackage: AnalyzerPackageCreateNestedOneWithoutVcsListInput
  }

  export type VcsUncheckedCreateInput = {
    id?: number
    type: string
    url: string
    revision: string
    path: string
    packageId: number
  }

  export type VcsUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    revision?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    analyzerPackage?: AnalyzerPackageUpdateOneRequiredWithoutVcsListNestedInput
  }

  export type VcsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    revision?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    packageId?: IntFieldUpdateOperationsInput | number
  }

  export type VcsCreateManyInput = {
    type: string
    url: string
    revision: string
    path: string
    packageId: number
  }

  export type VcsUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    revision?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
  }

  export type VcsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    revision?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    packageId?: IntFieldUpdateOperationsInput | number
  }

  export type VcsProcessedCreateInput = {
    type: string
    url: string
    revision: string
    path: string
    analyzerPackage: AnalyzerPackageCreateNestedOneWithoutVcsProcessedInput
  }

  export type VcsProcessedUncheckedCreateInput = {
    id?: number
    type: string
    url: string
    revision: string
    path: string
    packageId: number
  }

  export type VcsProcessedUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    revision?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    analyzerPackage?: AnalyzerPackageUpdateOneRequiredWithoutVcsProcessedNestedInput
  }

  export type VcsProcessedUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    revision?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    packageId?: IntFieldUpdateOperationsInput | number
  }

  export type VcsProcessedCreateManyInput = {
    type: string
    url: string
    revision: string
    path: string
    packageId: number
  }

  export type VcsProcessedUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    revision?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
  }

  export type VcsProcessedUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    revision?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    packageId?: IntFieldUpdateOperationsInput | number
  }

  export type ScannerCreateInput = {
    createdAt?: Date | string
    scan: ScanCreateNestedOneWithoutScannerInput
    licenses?: LicensesCreateNestedManyWithoutScannerInput
    copyrights?: CopyrightsCreateNestedManyWithoutScannerInput
  }

  export type ScannerUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    scanId: number
    licenses?: LicensesUncheckedCreateNestedManyWithoutScannerInput
    copyrights?: CopyrightsUncheckedCreateNestedManyWithoutScannerInput
  }

  export type ScannerUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scan?: ScanUpdateOneRequiredWithoutScannerNestedInput
    licenses?: LicensesUpdateManyWithoutScannerNestedInput
    copyrights?: CopyrightsUpdateManyWithoutScannerNestedInput
  }

  export type ScannerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scanId?: IntFieldUpdateOperationsInput | number
    licenses?: LicensesUncheckedUpdateManyWithoutScannerNestedInput
    copyrights?: CopyrightsUncheckedUpdateManyWithoutScannerNestedInput
  }

  export type ScannerCreateManyInput = {
    createdAt?: Date | string
    scanId: number
  }

  export type ScannerUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScannerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scanId?: IntFieldUpdateOperationsInput | number
  }

  export type LicensesCreateInput = {
    createdAt?: Date | string
    licenseName: string
    path: string
    startLine: number
    endLine: number
    score: number
    scanner: ScannerCreateNestedOneWithoutLicensesInput
  }

  export type LicensesUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    licenseName: string
    path: string
    startLine: number
    endLine: number
    score: number
    scannerId: number
  }

  export type LicensesUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseName?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    startLine?: IntFieldUpdateOperationsInput | number
    endLine?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    scanner?: ScannerUpdateOneRequiredWithoutLicensesNestedInput
  }

  export type LicensesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseName?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    startLine?: IntFieldUpdateOperationsInput | number
    endLine?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    scannerId?: IntFieldUpdateOperationsInput | number
  }

  export type LicensesCreateManyInput = {
    createdAt?: Date | string
    licenseName: string
    path: string
    startLine: number
    endLine: number
    score: number
    scannerId: number
  }

  export type LicensesUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseName?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    startLine?: IntFieldUpdateOperationsInput | number
    endLine?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
  }

  export type LicensesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseName?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    startLine?: IntFieldUpdateOperationsInput | number
    endLine?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    scannerId?: IntFieldUpdateOperationsInput | number
  }

  export type CopyrightsCreateInput = {
    createdAt?: Date | string
    statement: string
    path: string
    startLine: number
    endLine: number
    scanner: ScannerCreateNestedOneWithoutCopyrightsInput
  }

  export type CopyrightsUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    statement: string
    path: string
    startLine: number
    endLine: number
    scannerId: number
  }

  export type CopyrightsUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statement?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    startLine?: IntFieldUpdateOperationsInput | number
    endLine?: IntFieldUpdateOperationsInput | number
    scanner?: ScannerUpdateOneRequiredWithoutCopyrightsNestedInput
  }

  export type CopyrightsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statement?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    startLine?: IntFieldUpdateOperationsInput | number
    endLine?: IntFieldUpdateOperationsInput | number
    scannerId?: IntFieldUpdateOperationsInput | number
  }

  export type CopyrightsCreateManyInput = {
    createdAt?: Date | string
    statement: string
    path: string
    startLine: number
    endLine: number
    scannerId: number
  }

  export type CopyrightsUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statement?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    startLine?: IntFieldUpdateOperationsInput | number
    endLine?: IntFieldUpdateOperationsInput | number
  }

  export type CopyrightsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statement?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    startLine?: IntFieldUpdateOperationsInput | number
    endLine?: IntFieldUpdateOperationsInput | number
    scannerId?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    userId?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    userId?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    userId?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ScanListRelationFilter = {
    every?: ScanWhereInput
    some?: ScanWhereInput
    none?: ScanWhereInput
  }

  export type ScanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectUserId_nameCompoundUniqueInput = {
    userId: string
    name: string
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type AnalyzerNullableScalarRelationFilter = {
    is?: AnalyzerWhereInput | null
    isNot?: AnalyzerWhereInput | null
  }

  export type ScannerNullableScalarRelationFilter = {
    is?: ScannerWhereInput | null
    isNot?: ScannerWhereInput | null
  }

  export type ScanCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    gitRunId?: SortOrder
    projectId?: SortOrder
  }

  export type ScanAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ScanMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    gitRunId?: SortOrder
    projectId?: SortOrder
  }

  export type ScanMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    gitRunId?: SortOrder
    projectId?: SortOrder
  }

  export type ScanSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ScanScalarRelationFilter = {
    is?: ScanWhereInput
    isNot?: ScanWhereInput
  }

  export type AnalyzerPackageListRelationFilter = {
    every?: AnalyzerPackageWhereInput
    some?: AnalyzerPackageWhereInput
    none?: AnalyzerPackageWhereInput
  }

  export type AnalyzerPackageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnalyzerCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    scanId?: SortOrder
  }

  export type AnalyzerAvgOrderByAggregateInput = {
    id?: SortOrder
    scanId?: SortOrder
  }

  export type AnalyzerMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    scanId?: SortOrder
  }

  export type AnalyzerMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    scanId?: SortOrder
  }

  export type AnalyzerSumOrderByAggregateInput = {
    id?: SortOrder
    scanId?: SortOrder
  }

  export type AnalyzerScalarRelationFilter = {
    is?: AnalyzerWhereInput
    isNot?: AnalyzerWhereInput
  }

  export type PackageAuthorListRelationFilter = {
    every?: PackageAuthorWhereInput
    some?: PackageAuthorWhereInput
    none?: PackageAuthorWhereInput
  }

  export type DeclaredLicensesListRelationFilter = {
    every?: DeclaredLicensesWhereInput
    some?: DeclaredLicensesWhereInput
    none?: DeclaredLicensesWhereInput
  }

  export type DeclaredLicensesProcessedListRelationFilter = {
    every?: DeclaredLicensesProcessedWhereInput
    some?: DeclaredLicensesProcessedWhereInput
    none?: DeclaredLicensesProcessedWhereInput
  }

  export type BinaryArtifactListRelationFilter = {
    every?: BinaryArtifactWhereInput
    some?: BinaryArtifactWhereInput
    none?: BinaryArtifactWhereInput
  }

  export type SourceArtifactListRelationFilter = {
    every?: SourceArtifactWhereInput
    some?: SourceArtifactWhereInput
    none?: SourceArtifactWhereInput
  }

  export type VcsListRelationFilter = {
    every?: VcsWhereInput
    some?: VcsWhereInput
    none?: VcsWhereInput
  }

  export type VcsProcessedListRelationFilter = {
    every?: VcsProcessedWhereInput
    some?: VcsProcessedWhereInput
    none?: VcsProcessedWhereInput
  }

  export type PackageAuthorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeclaredLicensesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeclaredLicensesProcessedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BinaryArtifactOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SourceArtifactOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VcsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VcsProcessedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnalyzerPackageCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    packId?: SortOrder
    purl?: SortOrder
    description?: SortOrder
    homepageUrl?: SortOrder
    analyzerId?: SortOrder
  }

  export type AnalyzerPackageAvgOrderByAggregateInput = {
    id?: SortOrder
    analyzerId?: SortOrder
  }

  export type AnalyzerPackageMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    packId?: SortOrder
    purl?: SortOrder
    description?: SortOrder
    homepageUrl?: SortOrder
    analyzerId?: SortOrder
  }

  export type AnalyzerPackageMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    packId?: SortOrder
    purl?: SortOrder
    description?: SortOrder
    homepageUrl?: SortOrder
    analyzerId?: SortOrder
  }

  export type AnalyzerPackageSumOrderByAggregateInput = {
    id?: SortOrder
    analyzerId?: SortOrder
  }

  export type AnalyzerPackageScalarRelationFilter = {
    is?: AnalyzerPackageWhereInput
    isNot?: AnalyzerPackageWhereInput
  }

  export type PackageAuthorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    packageId?: SortOrder
  }

  export type PackageAuthorAvgOrderByAggregateInput = {
    id?: SortOrder
    packageId?: SortOrder
  }

  export type PackageAuthorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    packageId?: SortOrder
  }

  export type PackageAuthorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    packageId?: SortOrder
  }

  export type PackageAuthorSumOrderByAggregateInput = {
    id?: SortOrder
    packageId?: SortOrder
  }

  export type DeclaredLicensesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    packageId?: SortOrder
  }

  export type DeclaredLicensesAvgOrderByAggregateInput = {
    id?: SortOrder
    packageId?: SortOrder
  }

  export type DeclaredLicensesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    packageId?: SortOrder
  }

  export type DeclaredLicensesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    packageId?: SortOrder
  }

  export type DeclaredLicensesSumOrderByAggregateInput = {
    id?: SortOrder
    packageId?: SortOrder
  }

  export type DeclaredLicensesProcessedCountOrderByAggregateInput = {
    id?: SortOrder
    spdxExpression?: SortOrder
    packageId?: SortOrder
  }

  export type DeclaredLicensesProcessedAvgOrderByAggregateInput = {
    id?: SortOrder
    packageId?: SortOrder
  }

  export type DeclaredLicensesProcessedMaxOrderByAggregateInput = {
    id?: SortOrder
    spdxExpression?: SortOrder
    packageId?: SortOrder
  }

  export type DeclaredLicensesProcessedMinOrderByAggregateInput = {
    id?: SortOrder
    spdxExpression?: SortOrder
    packageId?: SortOrder
  }

  export type DeclaredLicensesProcessedSumOrderByAggregateInput = {
    id?: SortOrder
    packageId?: SortOrder
  }

  export type BinaryArtifactCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    packageId?: SortOrder
  }

  export type BinaryArtifactAvgOrderByAggregateInput = {
    id?: SortOrder
    packageId?: SortOrder
  }

  export type BinaryArtifactMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    packageId?: SortOrder
  }

  export type BinaryArtifactMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    packageId?: SortOrder
  }

  export type BinaryArtifactSumOrderByAggregateInput = {
    id?: SortOrder
    packageId?: SortOrder
  }

  export type SourceArtifactCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    packageId?: SortOrder
  }

  export type SourceArtifactAvgOrderByAggregateInput = {
    id?: SortOrder
    packageId?: SortOrder
  }

  export type SourceArtifactMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    packageId?: SortOrder
  }

  export type SourceArtifactMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    packageId?: SortOrder
  }

  export type SourceArtifactSumOrderByAggregateInput = {
    id?: SortOrder
    packageId?: SortOrder
  }

  export type VcsCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    url?: SortOrder
    revision?: SortOrder
    path?: SortOrder
    packageId?: SortOrder
  }

  export type VcsAvgOrderByAggregateInput = {
    id?: SortOrder
    packageId?: SortOrder
  }

  export type VcsMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    url?: SortOrder
    revision?: SortOrder
    path?: SortOrder
    packageId?: SortOrder
  }

  export type VcsMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    url?: SortOrder
    revision?: SortOrder
    path?: SortOrder
    packageId?: SortOrder
  }

  export type VcsSumOrderByAggregateInput = {
    id?: SortOrder
    packageId?: SortOrder
  }

  export type VcsProcessedCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    url?: SortOrder
    revision?: SortOrder
    path?: SortOrder
    packageId?: SortOrder
  }

  export type VcsProcessedAvgOrderByAggregateInput = {
    id?: SortOrder
    packageId?: SortOrder
  }

  export type VcsProcessedMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    url?: SortOrder
    revision?: SortOrder
    path?: SortOrder
    packageId?: SortOrder
  }

  export type VcsProcessedMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    url?: SortOrder
    revision?: SortOrder
    path?: SortOrder
    packageId?: SortOrder
  }

  export type VcsProcessedSumOrderByAggregateInput = {
    id?: SortOrder
    packageId?: SortOrder
  }

  export type LicensesListRelationFilter = {
    every?: LicensesWhereInput
    some?: LicensesWhereInput
    none?: LicensesWhereInput
  }

  export type CopyrightsListRelationFilter = {
    every?: CopyrightsWhereInput
    some?: CopyrightsWhereInput
    none?: CopyrightsWhereInput
  }

  export type LicensesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CopyrightsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScannerCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    scanId?: SortOrder
  }

  export type ScannerAvgOrderByAggregateInput = {
    id?: SortOrder
    scanId?: SortOrder
  }

  export type ScannerMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    scanId?: SortOrder
  }

  export type ScannerMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    scanId?: SortOrder
  }

  export type ScannerSumOrderByAggregateInput = {
    id?: SortOrder
    scanId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ScannerScalarRelationFilter = {
    is?: ScannerWhereInput
    isNot?: ScannerWhereInput
  }

  export type LicensesCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    licenseName?: SortOrder
    path?: SortOrder
    startLine?: SortOrder
    endLine?: SortOrder
    score?: SortOrder
    scannerId?: SortOrder
  }

  export type LicensesAvgOrderByAggregateInput = {
    id?: SortOrder
    startLine?: SortOrder
    endLine?: SortOrder
    score?: SortOrder
    scannerId?: SortOrder
  }

  export type LicensesMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    licenseName?: SortOrder
    path?: SortOrder
    startLine?: SortOrder
    endLine?: SortOrder
    score?: SortOrder
    scannerId?: SortOrder
  }

  export type LicensesMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    licenseName?: SortOrder
    path?: SortOrder
    startLine?: SortOrder
    endLine?: SortOrder
    score?: SortOrder
    scannerId?: SortOrder
  }

  export type LicensesSumOrderByAggregateInput = {
    id?: SortOrder
    startLine?: SortOrder
    endLine?: SortOrder
    score?: SortOrder
    scannerId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CopyrightsCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    statement?: SortOrder
    path?: SortOrder
    startLine?: SortOrder
    endLine?: SortOrder
    scannerId?: SortOrder
  }

  export type CopyrightsAvgOrderByAggregateInput = {
    id?: SortOrder
    startLine?: SortOrder
    endLine?: SortOrder
    scannerId?: SortOrder
  }

  export type CopyrightsMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    statement?: SortOrder
    path?: SortOrder
    startLine?: SortOrder
    endLine?: SortOrder
    scannerId?: SortOrder
  }

  export type CopyrightsMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    statement?: SortOrder
    path?: SortOrder
    startLine?: SortOrder
    endLine?: SortOrder
    scannerId?: SortOrder
  }

  export type CopyrightsSumOrderByAggregateInput = {
    id?: SortOrder
    startLine?: SortOrder
    endLine?: SortOrder
    scannerId?: SortOrder
  }

  export type ProjectCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ProjectUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProjectsInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type ScanCreateNestedManyWithoutProjectInput = {
    create?: XOR<ScanCreateWithoutProjectInput, ScanUncheckedCreateWithoutProjectInput> | ScanCreateWithoutProjectInput[] | ScanUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ScanCreateOrConnectWithoutProjectInput | ScanCreateOrConnectWithoutProjectInput[]
    createMany?: ScanCreateManyProjectInputEnvelope
    connect?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
  }

  export type ScanUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ScanCreateWithoutProjectInput, ScanUncheckedCreateWithoutProjectInput> | ScanCreateWithoutProjectInput[] | ScanUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ScanCreateOrConnectWithoutProjectInput | ScanCreateOrConnectWithoutProjectInput[]
    createMany?: ScanCreateManyProjectInputEnvelope
    connect?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    upsert?: UserUpsertWithoutProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectsInput, UserUpdateWithoutProjectsInput>, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type ScanUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ScanCreateWithoutProjectInput, ScanUncheckedCreateWithoutProjectInput> | ScanCreateWithoutProjectInput[] | ScanUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ScanCreateOrConnectWithoutProjectInput | ScanCreateOrConnectWithoutProjectInput[]
    upsert?: ScanUpsertWithWhereUniqueWithoutProjectInput | ScanUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ScanCreateManyProjectInputEnvelope
    set?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
    disconnect?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
    delete?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
    connect?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
    update?: ScanUpdateWithWhereUniqueWithoutProjectInput | ScanUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ScanUpdateManyWithWhereWithoutProjectInput | ScanUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ScanScalarWhereInput | ScanScalarWhereInput[]
  }

  export type ScanUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ScanCreateWithoutProjectInput, ScanUncheckedCreateWithoutProjectInput> | ScanCreateWithoutProjectInput[] | ScanUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ScanCreateOrConnectWithoutProjectInput | ScanCreateOrConnectWithoutProjectInput[]
    upsert?: ScanUpsertWithWhereUniqueWithoutProjectInput | ScanUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ScanCreateManyProjectInputEnvelope
    set?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
    disconnect?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
    delete?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
    connect?: ScanWhereUniqueInput | ScanWhereUniqueInput[]
    update?: ScanUpdateWithWhereUniqueWithoutProjectInput | ScanUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ScanUpdateManyWithWhereWithoutProjectInput | ScanUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ScanScalarWhereInput | ScanScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutScansInput = {
    create?: XOR<ProjectCreateWithoutScansInput, ProjectUncheckedCreateWithoutScansInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutScansInput
    connect?: ProjectWhereUniqueInput
  }

  export type AnalyzerCreateNestedOneWithoutScanInput = {
    create?: XOR<AnalyzerCreateWithoutScanInput, AnalyzerUncheckedCreateWithoutScanInput>
    connectOrCreate?: AnalyzerCreateOrConnectWithoutScanInput
    connect?: AnalyzerWhereUniqueInput
  }

  export type ScannerCreateNestedOneWithoutScanInput = {
    create?: XOR<ScannerCreateWithoutScanInput, ScannerUncheckedCreateWithoutScanInput>
    connectOrCreate?: ScannerCreateOrConnectWithoutScanInput
    connect?: ScannerWhereUniqueInput
  }

  export type AnalyzerUncheckedCreateNestedOneWithoutScanInput = {
    create?: XOR<AnalyzerCreateWithoutScanInput, AnalyzerUncheckedCreateWithoutScanInput>
    connectOrCreate?: AnalyzerCreateOrConnectWithoutScanInput
    connect?: AnalyzerWhereUniqueInput
  }

  export type ScannerUncheckedCreateNestedOneWithoutScanInput = {
    create?: XOR<ScannerCreateWithoutScanInput, ScannerUncheckedCreateWithoutScanInput>
    connectOrCreate?: ScannerCreateOrConnectWithoutScanInput
    connect?: ScannerWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutScansNestedInput = {
    create?: XOR<ProjectCreateWithoutScansInput, ProjectUncheckedCreateWithoutScansInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutScansInput
    upsert?: ProjectUpsertWithoutScansInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutScansInput, ProjectUpdateWithoutScansInput>, ProjectUncheckedUpdateWithoutScansInput>
  }

  export type AnalyzerUpdateOneWithoutScanNestedInput = {
    create?: XOR<AnalyzerCreateWithoutScanInput, AnalyzerUncheckedCreateWithoutScanInput>
    connectOrCreate?: AnalyzerCreateOrConnectWithoutScanInput
    upsert?: AnalyzerUpsertWithoutScanInput
    disconnect?: AnalyzerWhereInput | boolean
    delete?: AnalyzerWhereInput | boolean
    connect?: AnalyzerWhereUniqueInput
    update?: XOR<XOR<AnalyzerUpdateToOneWithWhereWithoutScanInput, AnalyzerUpdateWithoutScanInput>, AnalyzerUncheckedUpdateWithoutScanInput>
  }

  export type ScannerUpdateOneWithoutScanNestedInput = {
    create?: XOR<ScannerCreateWithoutScanInput, ScannerUncheckedCreateWithoutScanInput>
    connectOrCreate?: ScannerCreateOrConnectWithoutScanInput
    upsert?: ScannerUpsertWithoutScanInput
    disconnect?: ScannerWhereInput | boolean
    delete?: ScannerWhereInput | boolean
    connect?: ScannerWhereUniqueInput
    update?: XOR<XOR<ScannerUpdateToOneWithWhereWithoutScanInput, ScannerUpdateWithoutScanInput>, ScannerUncheckedUpdateWithoutScanInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AnalyzerUncheckedUpdateOneWithoutScanNestedInput = {
    create?: XOR<AnalyzerCreateWithoutScanInput, AnalyzerUncheckedCreateWithoutScanInput>
    connectOrCreate?: AnalyzerCreateOrConnectWithoutScanInput
    upsert?: AnalyzerUpsertWithoutScanInput
    disconnect?: AnalyzerWhereInput | boolean
    delete?: AnalyzerWhereInput | boolean
    connect?: AnalyzerWhereUniqueInput
    update?: XOR<XOR<AnalyzerUpdateToOneWithWhereWithoutScanInput, AnalyzerUpdateWithoutScanInput>, AnalyzerUncheckedUpdateWithoutScanInput>
  }

  export type ScannerUncheckedUpdateOneWithoutScanNestedInput = {
    create?: XOR<ScannerCreateWithoutScanInput, ScannerUncheckedCreateWithoutScanInput>
    connectOrCreate?: ScannerCreateOrConnectWithoutScanInput
    upsert?: ScannerUpsertWithoutScanInput
    disconnect?: ScannerWhereInput | boolean
    delete?: ScannerWhereInput | boolean
    connect?: ScannerWhereUniqueInput
    update?: XOR<XOR<ScannerUpdateToOneWithWhereWithoutScanInput, ScannerUpdateWithoutScanInput>, ScannerUncheckedUpdateWithoutScanInput>
  }

  export type ScanCreateNestedOneWithoutAnalyzerInput = {
    create?: XOR<ScanCreateWithoutAnalyzerInput, ScanUncheckedCreateWithoutAnalyzerInput>
    connectOrCreate?: ScanCreateOrConnectWithoutAnalyzerInput
    connect?: ScanWhereUniqueInput
  }

  export type AnalyzerPackageCreateNestedManyWithoutAnalyzerInput = {
    create?: XOR<AnalyzerPackageCreateWithoutAnalyzerInput, AnalyzerPackageUncheckedCreateWithoutAnalyzerInput> | AnalyzerPackageCreateWithoutAnalyzerInput[] | AnalyzerPackageUncheckedCreateWithoutAnalyzerInput[]
    connectOrCreate?: AnalyzerPackageCreateOrConnectWithoutAnalyzerInput | AnalyzerPackageCreateOrConnectWithoutAnalyzerInput[]
    createMany?: AnalyzerPackageCreateManyAnalyzerInputEnvelope
    connect?: AnalyzerPackageWhereUniqueInput | AnalyzerPackageWhereUniqueInput[]
  }

  export type AnalyzerPackageUncheckedCreateNestedManyWithoutAnalyzerInput = {
    create?: XOR<AnalyzerPackageCreateWithoutAnalyzerInput, AnalyzerPackageUncheckedCreateWithoutAnalyzerInput> | AnalyzerPackageCreateWithoutAnalyzerInput[] | AnalyzerPackageUncheckedCreateWithoutAnalyzerInput[]
    connectOrCreate?: AnalyzerPackageCreateOrConnectWithoutAnalyzerInput | AnalyzerPackageCreateOrConnectWithoutAnalyzerInput[]
    createMany?: AnalyzerPackageCreateManyAnalyzerInputEnvelope
    connect?: AnalyzerPackageWhereUniqueInput | AnalyzerPackageWhereUniqueInput[]
  }

  export type ScanUpdateOneRequiredWithoutAnalyzerNestedInput = {
    create?: XOR<ScanCreateWithoutAnalyzerInput, ScanUncheckedCreateWithoutAnalyzerInput>
    connectOrCreate?: ScanCreateOrConnectWithoutAnalyzerInput
    upsert?: ScanUpsertWithoutAnalyzerInput
    connect?: ScanWhereUniqueInput
    update?: XOR<XOR<ScanUpdateToOneWithWhereWithoutAnalyzerInput, ScanUpdateWithoutAnalyzerInput>, ScanUncheckedUpdateWithoutAnalyzerInput>
  }

  export type AnalyzerPackageUpdateManyWithoutAnalyzerNestedInput = {
    create?: XOR<AnalyzerPackageCreateWithoutAnalyzerInput, AnalyzerPackageUncheckedCreateWithoutAnalyzerInput> | AnalyzerPackageCreateWithoutAnalyzerInput[] | AnalyzerPackageUncheckedCreateWithoutAnalyzerInput[]
    connectOrCreate?: AnalyzerPackageCreateOrConnectWithoutAnalyzerInput | AnalyzerPackageCreateOrConnectWithoutAnalyzerInput[]
    upsert?: AnalyzerPackageUpsertWithWhereUniqueWithoutAnalyzerInput | AnalyzerPackageUpsertWithWhereUniqueWithoutAnalyzerInput[]
    createMany?: AnalyzerPackageCreateManyAnalyzerInputEnvelope
    set?: AnalyzerPackageWhereUniqueInput | AnalyzerPackageWhereUniqueInput[]
    disconnect?: AnalyzerPackageWhereUniqueInput | AnalyzerPackageWhereUniqueInput[]
    delete?: AnalyzerPackageWhereUniqueInput | AnalyzerPackageWhereUniqueInput[]
    connect?: AnalyzerPackageWhereUniqueInput | AnalyzerPackageWhereUniqueInput[]
    update?: AnalyzerPackageUpdateWithWhereUniqueWithoutAnalyzerInput | AnalyzerPackageUpdateWithWhereUniqueWithoutAnalyzerInput[]
    updateMany?: AnalyzerPackageUpdateManyWithWhereWithoutAnalyzerInput | AnalyzerPackageUpdateManyWithWhereWithoutAnalyzerInput[]
    deleteMany?: AnalyzerPackageScalarWhereInput | AnalyzerPackageScalarWhereInput[]
  }

  export type AnalyzerPackageUncheckedUpdateManyWithoutAnalyzerNestedInput = {
    create?: XOR<AnalyzerPackageCreateWithoutAnalyzerInput, AnalyzerPackageUncheckedCreateWithoutAnalyzerInput> | AnalyzerPackageCreateWithoutAnalyzerInput[] | AnalyzerPackageUncheckedCreateWithoutAnalyzerInput[]
    connectOrCreate?: AnalyzerPackageCreateOrConnectWithoutAnalyzerInput | AnalyzerPackageCreateOrConnectWithoutAnalyzerInput[]
    upsert?: AnalyzerPackageUpsertWithWhereUniqueWithoutAnalyzerInput | AnalyzerPackageUpsertWithWhereUniqueWithoutAnalyzerInput[]
    createMany?: AnalyzerPackageCreateManyAnalyzerInputEnvelope
    set?: AnalyzerPackageWhereUniqueInput | AnalyzerPackageWhereUniqueInput[]
    disconnect?: AnalyzerPackageWhereUniqueInput | AnalyzerPackageWhereUniqueInput[]
    delete?: AnalyzerPackageWhereUniqueInput | AnalyzerPackageWhereUniqueInput[]
    connect?: AnalyzerPackageWhereUniqueInput | AnalyzerPackageWhereUniqueInput[]
    update?: AnalyzerPackageUpdateWithWhereUniqueWithoutAnalyzerInput | AnalyzerPackageUpdateWithWhereUniqueWithoutAnalyzerInput[]
    updateMany?: AnalyzerPackageUpdateManyWithWhereWithoutAnalyzerInput | AnalyzerPackageUpdateManyWithWhereWithoutAnalyzerInput[]
    deleteMany?: AnalyzerPackageScalarWhereInput | AnalyzerPackageScalarWhereInput[]
  }

  export type AnalyzerCreateNestedOneWithoutPackagesInput = {
    create?: XOR<AnalyzerCreateWithoutPackagesInput, AnalyzerUncheckedCreateWithoutPackagesInput>
    connectOrCreate?: AnalyzerCreateOrConnectWithoutPackagesInput
    connect?: AnalyzerWhereUniqueInput
  }

  export type PackageAuthorCreateNestedManyWithoutAnalyzerPackageInput = {
    create?: XOR<PackageAuthorCreateWithoutAnalyzerPackageInput, PackageAuthorUncheckedCreateWithoutAnalyzerPackageInput> | PackageAuthorCreateWithoutAnalyzerPackageInput[] | PackageAuthorUncheckedCreateWithoutAnalyzerPackageInput[]
    connectOrCreate?: PackageAuthorCreateOrConnectWithoutAnalyzerPackageInput | PackageAuthorCreateOrConnectWithoutAnalyzerPackageInput[]
    createMany?: PackageAuthorCreateManyAnalyzerPackageInputEnvelope
    connect?: PackageAuthorWhereUniqueInput | PackageAuthorWhereUniqueInput[]
  }

  export type DeclaredLicensesCreateNestedManyWithoutAnalyzerPackageInput = {
    create?: XOR<DeclaredLicensesCreateWithoutAnalyzerPackageInput, DeclaredLicensesUncheckedCreateWithoutAnalyzerPackageInput> | DeclaredLicensesCreateWithoutAnalyzerPackageInput[] | DeclaredLicensesUncheckedCreateWithoutAnalyzerPackageInput[]
    connectOrCreate?: DeclaredLicensesCreateOrConnectWithoutAnalyzerPackageInput | DeclaredLicensesCreateOrConnectWithoutAnalyzerPackageInput[]
    createMany?: DeclaredLicensesCreateManyAnalyzerPackageInputEnvelope
    connect?: DeclaredLicensesWhereUniqueInput | DeclaredLicensesWhereUniqueInput[]
  }

  export type DeclaredLicensesProcessedCreateNestedManyWithoutAnalyzerPackageInput = {
    create?: XOR<DeclaredLicensesProcessedCreateWithoutAnalyzerPackageInput, DeclaredLicensesProcessedUncheckedCreateWithoutAnalyzerPackageInput> | DeclaredLicensesProcessedCreateWithoutAnalyzerPackageInput[] | DeclaredLicensesProcessedUncheckedCreateWithoutAnalyzerPackageInput[]
    connectOrCreate?: DeclaredLicensesProcessedCreateOrConnectWithoutAnalyzerPackageInput | DeclaredLicensesProcessedCreateOrConnectWithoutAnalyzerPackageInput[]
    createMany?: DeclaredLicensesProcessedCreateManyAnalyzerPackageInputEnvelope
    connect?: DeclaredLicensesProcessedWhereUniqueInput | DeclaredLicensesProcessedWhereUniqueInput[]
  }

  export type BinaryArtifactCreateNestedManyWithoutAnalyzerPackageInput = {
    create?: XOR<BinaryArtifactCreateWithoutAnalyzerPackageInput, BinaryArtifactUncheckedCreateWithoutAnalyzerPackageInput> | BinaryArtifactCreateWithoutAnalyzerPackageInput[] | BinaryArtifactUncheckedCreateWithoutAnalyzerPackageInput[]
    connectOrCreate?: BinaryArtifactCreateOrConnectWithoutAnalyzerPackageInput | BinaryArtifactCreateOrConnectWithoutAnalyzerPackageInput[]
    createMany?: BinaryArtifactCreateManyAnalyzerPackageInputEnvelope
    connect?: BinaryArtifactWhereUniqueInput | BinaryArtifactWhereUniqueInput[]
  }

  export type SourceArtifactCreateNestedManyWithoutAnalyzerPackageInput = {
    create?: XOR<SourceArtifactCreateWithoutAnalyzerPackageInput, SourceArtifactUncheckedCreateWithoutAnalyzerPackageInput> | SourceArtifactCreateWithoutAnalyzerPackageInput[] | SourceArtifactUncheckedCreateWithoutAnalyzerPackageInput[]
    connectOrCreate?: SourceArtifactCreateOrConnectWithoutAnalyzerPackageInput | SourceArtifactCreateOrConnectWithoutAnalyzerPackageInput[]
    createMany?: SourceArtifactCreateManyAnalyzerPackageInputEnvelope
    connect?: SourceArtifactWhereUniqueInput | SourceArtifactWhereUniqueInput[]
  }

  export type VcsCreateNestedManyWithoutAnalyzerPackageInput = {
    create?: XOR<VcsCreateWithoutAnalyzerPackageInput, VcsUncheckedCreateWithoutAnalyzerPackageInput> | VcsCreateWithoutAnalyzerPackageInput[] | VcsUncheckedCreateWithoutAnalyzerPackageInput[]
    connectOrCreate?: VcsCreateOrConnectWithoutAnalyzerPackageInput | VcsCreateOrConnectWithoutAnalyzerPackageInput[]
    createMany?: VcsCreateManyAnalyzerPackageInputEnvelope
    connect?: VcsWhereUniqueInput | VcsWhereUniqueInput[]
  }

  export type VcsProcessedCreateNestedManyWithoutAnalyzerPackageInput = {
    create?: XOR<VcsProcessedCreateWithoutAnalyzerPackageInput, VcsProcessedUncheckedCreateWithoutAnalyzerPackageInput> | VcsProcessedCreateWithoutAnalyzerPackageInput[] | VcsProcessedUncheckedCreateWithoutAnalyzerPackageInput[]
    connectOrCreate?: VcsProcessedCreateOrConnectWithoutAnalyzerPackageInput | VcsProcessedCreateOrConnectWithoutAnalyzerPackageInput[]
    createMany?: VcsProcessedCreateManyAnalyzerPackageInputEnvelope
    connect?: VcsProcessedWhereUniqueInput | VcsProcessedWhereUniqueInput[]
  }

  export type PackageAuthorUncheckedCreateNestedManyWithoutAnalyzerPackageInput = {
    create?: XOR<PackageAuthorCreateWithoutAnalyzerPackageInput, PackageAuthorUncheckedCreateWithoutAnalyzerPackageInput> | PackageAuthorCreateWithoutAnalyzerPackageInput[] | PackageAuthorUncheckedCreateWithoutAnalyzerPackageInput[]
    connectOrCreate?: PackageAuthorCreateOrConnectWithoutAnalyzerPackageInput | PackageAuthorCreateOrConnectWithoutAnalyzerPackageInput[]
    createMany?: PackageAuthorCreateManyAnalyzerPackageInputEnvelope
    connect?: PackageAuthorWhereUniqueInput | PackageAuthorWhereUniqueInput[]
  }

  export type DeclaredLicensesUncheckedCreateNestedManyWithoutAnalyzerPackageInput = {
    create?: XOR<DeclaredLicensesCreateWithoutAnalyzerPackageInput, DeclaredLicensesUncheckedCreateWithoutAnalyzerPackageInput> | DeclaredLicensesCreateWithoutAnalyzerPackageInput[] | DeclaredLicensesUncheckedCreateWithoutAnalyzerPackageInput[]
    connectOrCreate?: DeclaredLicensesCreateOrConnectWithoutAnalyzerPackageInput | DeclaredLicensesCreateOrConnectWithoutAnalyzerPackageInput[]
    createMany?: DeclaredLicensesCreateManyAnalyzerPackageInputEnvelope
    connect?: DeclaredLicensesWhereUniqueInput | DeclaredLicensesWhereUniqueInput[]
  }

  export type DeclaredLicensesProcessedUncheckedCreateNestedManyWithoutAnalyzerPackageInput = {
    create?: XOR<DeclaredLicensesProcessedCreateWithoutAnalyzerPackageInput, DeclaredLicensesProcessedUncheckedCreateWithoutAnalyzerPackageInput> | DeclaredLicensesProcessedCreateWithoutAnalyzerPackageInput[] | DeclaredLicensesProcessedUncheckedCreateWithoutAnalyzerPackageInput[]
    connectOrCreate?: DeclaredLicensesProcessedCreateOrConnectWithoutAnalyzerPackageInput | DeclaredLicensesProcessedCreateOrConnectWithoutAnalyzerPackageInput[]
    createMany?: DeclaredLicensesProcessedCreateManyAnalyzerPackageInputEnvelope
    connect?: DeclaredLicensesProcessedWhereUniqueInput | DeclaredLicensesProcessedWhereUniqueInput[]
  }

  export type BinaryArtifactUncheckedCreateNestedManyWithoutAnalyzerPackageInput = {
    create?: XOR<BinaryArtifactCreateWithoutAnalyzerPackageInput, BinaryArtifactUncheckedCreateWithoutAnalyzerPackageInput> | BinaryArtifactCreateWithoutAnalyzerPackageInput[] | BinaryArtifactUncheckedCreateWithoutAnalyzerPackageInput[]
    connectOrCreate?: BinaryArtifactCreateOrConnectWithoutAnalyzerPackageInput | BinaryArtifactCreateOrConnectWithoutAnalyzerPackageInput[]
    createMany?: BinaryArtifactCreateManyAnalyzerPackageInputEnvelope
    connect?: BinaryArtifactWhereUniqueInput | BinaryArtifactWhereUniqueInput[]
  }

  export type SourceArtifactUncheckedCreateNestedManyWithoutAnalyzerPackageInput = {
    create?: XOR<SourceArtifactCreateWithoutAnalyzerPackageInput, SourceArtifactUncheckedCreateWithoutAnalyzerPackageInput> | SourceArtifactCreateWithoutAnalyzerPackageInput[] | SourceArtifactUncheckedCreateWithoutAnalyzerPackageInput[]
    connectOrCreate?: SourceArtifactCreateOrConnectWithoutAnalyzerPackageInput | SourceArtifactCreateOrConnectWithoutAnalyzerPackageInput[]
    createMany?: SourceArtifactCreateManyAnalyzerPackageInputEnvelope
    connect?: SourceArtifactWhereUniqueInput | SourceArtifactWhereUniqueInput[]
  }

  export type VcsUncheckedCreateNestedManyWithoutAnalyzerPackageInput = {
    create?: XOR<VcsCreateWithoutAnalyzerPackageInput, VcsUncheckedCreateWithoutAnalyzerPackageInput> | VcsCreateWithoutAnalyzerPackageInput[] | VcsUncheckedCreateWithoutAnalyzerPackageInput[]
    connectOrCreate?: VcsCreateOrConnectWithoutAnalyzerPackageInput | VcsCreateOrConnectWithoutAnalyzerPackageInput[]
    createMany?: VcsCreateManyAnalyzerPackageInputEnvelope
    connect?: VcsWhereUniqueInput | VcsWhereUniqueInput[]
  }

  export type VcsProcessedUncheckedCreateNestedManyWithoutAnalyzerPackageInput = {
    create?: XOR<VcsProcessedCreateWithoutAnalyzerPackageInput, VcsProcessedUncheckedCreateWithoutAnalyzerPackageInput> | VcsProcessedCreateWithoutAnalyzerPackageInput[] | VcsProcessedUncheckedCreateWithoutAnalyzerPackageInput[]
    connectOrCreate?: VcsProcessedCreateOrConnectWithoutAnalyzerPackageInput | VcsProcessedCreateOrConnectWithoutAnalyzerPackageInput[]
    createMany?: VcsProcessedCreateManyAnalyzerPackageInputEnvelope
    connect?: VcsProcessedWhereUniqueInput | VcsProcessedWhereUniqueInput[]
  }

  export type AnalyzerUpdateOneRequiredWithoutPackagesNestedInput = {
    create?: XOR<AnalyzerCreateWithoutPackagesInput, AnalyzerUncheckedCreateWithoutPackagesInput>
    connectOrCreate?: AnalyzerCreateOrConnectWithoutPackagesInput
    upsert?: AnalyzerUpsertWithoutPackagesInput
    connect?: AnalyzerWhereUniqueInput
    update?: XOR<XOR<AnalyzerUpdateToOneWithWhereWithoutPackagesInput, AnalyzerUpdateWithoutPackagesInput>, AnalyzerUncheckedUpdateWithoutPackagesInput>
  }

  export type PackageAuthorUpdateManyWithoutAnalyzerPackageNestedInput = {
    create?: XOR<PackageAuthorCreateWithoutAnalyzerPackageInput, PackageAuthorUncheckedCreateWithoutAnalyzerPackageInput> | PackageAuthorCreateWithoutAnalyzerPackageInput[] | PackageAuthorUncheckedCreateWithoutAnalyzerPackageInput[]
    connectOrCreate?: PackageAuthorCreateOrConnectWithoutAnalyzerPackageInput | PackageAuthorCreateOrConnectWithoutAnalyzerPackageInput[]
    upsert?: PackageAuthorUpsertWithWhereUniqueWithoutAnalyzerPackageInput | PackageAuthorUpsertWithWhereUniqueWithoutAnalyzerPackageInput[]
    createMany?: PackageAuthorCreateManyAnalyzerPackageInputEnvelope
    set?: PackageAuthorWhereUniqueInput | PackageAuthorWhereUniqueInput[]
    disconnect?: PackageAuthorWhereUniqueInput | PackageAuthorWhereUniqueInput[]
    delete?: PackageAuthorWhereUniqueInput | PackageAuthorWhereUniqueInput[]
    connect?: PackageAuthorWhereUniqueInput | PackageAuthorWhereUniqueInput[]
    update?: PackageAuthorUpdateWithWhereUniqueWithoutAnalyzerPackageInput | PackageAuthorUpdateWithWhereUniqueWithoutAnalyzerPackageInput[]
    updateMany?: PackageAuthorUpdateManyWithWhereWithoutAnalyzerPackageInput | PackageAuthorUpdateManyWithWhereWithoutAnalyzerPackageInput[]
    deleteMany?: PackageAuthorScalarWhereInput | PackageAuthorScalarWhereInput[]
  }

  export type DeclaredLicensesUpdateManyWithoutAnalyzerPackageNestedInput = {
    create?: XOR<DeclaredLicensesCreateWithoutAnalyzerPackageInput, DeclaredLicensesUncheckedCreateWithoutAnalyzerPackageInput> | DeclaredLicensesCreateWithoutAnalyzerPackageInput[] | DeclaredLicensesUncheckedCreateWithoutAnalyzerPackageInput[]
    connectOrCreate?: DeclaredLicensesCreateOrConnectWithoutAnalyzerPackageInput | DeclaredLicensesCreateOrConnectWithoutAnalyzerPackageInput[]
    upsert?: DeclaredLicensesUpsertWithWhereUniqueWithoutAnalyzerPackageInput | DeclaredLicensesUpsertWithWhereUniqueWithoutAnalyzerPackageInput[]
    createMany?: DeclaredLicensesCreateManyAnalyzerPackageInputEnvelope
    set?: DeclaredLicensesWhereUniqueInput | DeclaredLicensesWhereUniqueInput[]
    disconnect?: DeclaredLicensesWhereUniqueInput | DeclaredLicensesWhereUniqueInput[]
    delete?: DeclaredLicensesWhereUniqueInput | DeclaredLicensesWhereUniqueInput[]
    connect?: DeclaredLicensesWhereUniqueInput | DeclaredLicensesWhereUniqueInput[]
    update?: DeclaredLicensesUpdateWithWhereUniqueWithoutAnalyzerPackageInput | DeclaredLicensesUpdateWithWhereUniqueWithoutAnalyzerPackageInput[]
    updateMany?: DeclaredLicensesUpdateManyWithWhereWithoutAnalyzerPackageInput | DeclaredLicensesUpdateManyWithWhereWithoutAnalyzerPackageInput[]
    deleteMany?: DeclaredLicensesScalarWhereInput | DeclaredLicensesScalarWhereInput[]
  }

  export type DeclaredLicensesProcessedUpdateManyWithoutAnalyzerPackageNestedInput = {
    create?: XOR<DeclaredLicensesProcessedCreateWithoutAnalyzerPackageInput, DeclaredLicensesProcessedUncheckedCreateWithoutAnalyzerPackageInput> | DeclaredLicensesProcessedCreateWithoutAnalyzerPackageInput[] | DeclaredLicensesProcessedUncheckedCreateWithoutAnalyzerPackageInput[]
    connectOrCreate?: DeclaredLicensesProcessedCreateOrConnectWithoutAnalyzerPackageInput | DeclaredLicensesProcessedCreateOrConnectWithoutAnalyzerPackageInput[]
    upsert?: DeclaredLicensesProcessedUpsertWithWhereUniqueWithoutAnalyzerPackageInput | DeclaredLicensesProcessedUpsertWithWhereUniqueWithoutAnalyzerPackageInput[]
    createMany?: DeclaredLicensesProcessedCreateManyAnalyzerPackageInputEnvelope
    set?: DeclaredLicensesProcessedWhereUniqueInput | DeclaredLicensesProcessedWhereUniqueInput[]
    disconnect?: DeclaredLicensesProcessedWhereUniqueInput | DeclaredLicensesProcessedWhereUniqueInput[]
    delete?: DeclaredLicensesProcessedWhereUniqueInput | DeclaredLicensesProcessedWhereUniqueInput[]
    connect?: DeclaredLicensesProcessedWhereUniqueInput | DeclaredLicensesProcessedWhereUniqueInput[]
    update?: DeclaredLicensesProcessedUpdateWithWhereUniqueWithoutAnalyzerPackageInput | DeclaredLicensesProcessedUpdateWithWhereUniqueWithoutAnalyzerPackageInput[]
    updateMany?: DeclaredLicensesProcessedUpdateManyWithWhereWithoutAnalyzerPackageInput | DeclaredLicensesProcessedUpdateManyWithWhereWithoutAnalyzerPackageInput[]
    deleteMany?: DeclaredLicensesProcessedScalarWhereInput | DeclaredLicensesProcessedScalarWhereInput[]
  }

  export type BinaryArtifactUpdateManyWithoutAnalyzerPackageNestedInput = {
    create?: XOR<BinaryArtifactCreateWithoutAnalyzerPackageInput, BinaryArtifactUncheckedCreateWithoutAnalyzerPackageInput> | BinaryArtifactCreateWithoutAnalyzerPackageInput[] | BinaryArtifactUncheckedCreateWithoutAnalyzerPackageInput[]
    connectOrCreate?: BinaryArtifactCreateOrConnectWithoutAnalyzerPackageInput | BinaryArtifactCreateOrConnectWithoutAnalyzerPackageInput[]
    upsert?: BinaryArtifactUpsertWithWhereUniqueWithoutAnalyzerPackageInput | BinaryArtifactUpsertWithWhereUniqueWithoutAnalyzerPackageInput[]
    createMany?: BinaryArtifactCreateManyAnalyzerPackageInputEnvelope
    set?: BinaryArtifactWhereUniqueInput | BinaryArtifactWhereUniqueInput[]
    disconnect?: BinaryArtifactWhereUniqueInput | BinaryArtifactWhereUniqueInput[]
    delete?: BinaryArtifactWhereUniqueInput | BinaryArtifactWhereUniqueInput[]
    connect?: BinaryArtifactWhereUniqueInput | BinaryArtifactWhereUniqueInput[]
    update?: BinaryArtifactUpdateWithWhereUniqueWithoutAnalyzerPackageInput | BinaryArtifactUpdateWithWhereUniqueWithoutAnalyzerPackageInput[]
    updateMany?: BinaryArtifactUpdateManyWithWhereWithoutAnalyzerPackageInput | BinaryArtifactUpdateManyWithWhereWithoutAnalyzerPackageInput[]
    deleteMany?: BinaryArtifactScalarWhereInput | BinaryArtifactScalarWhereInput[]
  }

  export type SourceArtifactUpdateManyWithoutAnalyzerPackageNestedInput = {
    create?: XOR<SourceArtifactCreateWithoutAnalyzerPackageInput, SourceArtifactUncheckedCreateWithoutAnalyzerPackageInput> | SourceArtifactCreateWithoutAnalyzerPackageInput[] | SourceArtifactUncheckedCreateWithoutAnalyzerPackageInput[]
    connectOrCreate?: SourceArtifactCreateOrConnectWithoutAnalyzerPackageInput | SourceArtifactCreateOrConnectWithoutAnalyzerPackageInput[]
    upsert?: SourceArtifactUpsertWithWhereUniqueWithoutAnalyzerPackageInput | SourceArtifactUpsertWithWhereUniqueWithoutAnalyzerPackageInput[]
    createMany?: SourceArtifactCreateManyAnalyzerPackageInputEnvelope
    set?: SourceArtifactWhereUniqueInput | SourceArtifactWhereUniqueInput[]
    disconnect?: SourceArtifactWhereUniqueInput | SourceArtifactWhereUniqueInput[]
    delete?: SourceArtifactWhereUniqueInput | SourceArtifactWhereUniqueInput[]
    connect?: SourceArtifactWhereUniqueInput | SourceArtifactWhereUniqueInput[]
    update?: SourceArtifactUpdateWithWhereUniqueWithoutAnalyzerPackageInput | SourceArtifactUpdateWithWhereUniqueWithoutAnalyzerPackageInput[]
    updateMany?: SourceArtifactUpdateManyWithWhereWithoutAnalyzerPackageInput | SourceArtifactUpdateManyWithWhereWithoutAnalyzerPackageInput[]
    deleteMany?: SourceArtifactScalarWhereInput | SourceArtifactScalarWhereInput[]
  }

  export type VcsUpdateManyWithoutAnalyzerPackageNestedInput = {
    create?: XOR<VcsCreateWithoutAnalyzerPackageInput, VcsUncheckedCreateWithoutAnalyzerPackageInput> | VcsCreateWithoutAnalyzerPackageInput[] | VcsUncheckedCreateWithoutAnalyzerPackageInput[]
    connectOrCreate?: VcsCreateOrConnectWithoutAnalyzerPackageInput | VcsCreateOrConnectWithoutAnalyzerPackageInput[]
    upsert?: VcsUpsertWithWhereUniqueWithoutAnalyzerPackageInput | VcsUpsertWithWhereUniqueWithoutAnalyzerPackageInput[]
    createMany?: VcsCreateManyAnalyzerPackageInputEnvelope
    set?: VcsWhereUniqueInput | VcsWhereUniqueInput[]
    disconnect?: VcsWhereUniqueInput | VcsWhereUniqueInput[]
    delete?: VcsWhereUniqueInput | VcsWhereUniqueInput[]
    connect?: VcsWhereUniqueInput | VcsWhereUniqueInput[]
    update?: VcsUpdateWithWhereUniqueWithoutAnalyzerPackageInput | VcsUpdateWithWhereUniqueWithoutAnalyzerPackageInput[]
    updateMany?: VcsUpdateManyWithWhereWithoutAnalyzerPackageInput | VcsUpdateManyWithWhereWithoutAnalyzerPackageInput[]
    deleteMany?: VcsScalarWhereInput | VcsScalarWhereInput[]
  }

  export type VcsProcessedUpdateManyWithoutAnalyzerPackageNestedInput = {
    create?: XOR<VcsProcessedCreateWithoutAnalyzerPackageInput, VcsProcessedUncheckedCreateWithoutAnalyzerPackageInput> | VcsProcessedCreateWithoutAnalyzerPackageInput[] | VcsProcessedUncheckedCreateWithoutAnalyzerPackageInput[]
    connectOrCreate?: VcsProcessedCreateOrConnectWithoutAnalyzerPackageInput | VcsProcessedCreateOrConnectWithoutAnalyzerPackageInput[]
    upsert?: VcsProcessedUpsertWithWhereUniqueWithoutAnalyzerPackageInput | VcsProcessedUpsertWithWhereUniqueWithoutAnalyzerPackageInput[]
    createMany?: VcsProcessedCreateManyAnalyzerPackageInputEnvelope
    set?: VcsProcessedWhereUniqueInput | VcsProcessedWhereUniqueInput[]
    disconnect?: VcsProcessedWhereUniqueInput | VcsProcessedWhereUniqueInput[]
    delete?: VcsProcessedWhereUniqueInput | VcsProcessedWhereUniqueInput[]
    connect?: VcsProcessedWhereUniqueInput | VcsProcessedWhereUniqueInput[]
    update?: VcsProcessedUpdateWithWhereUniqueWithoutAnalyzerPackageInput | VcsProcessedUpdateWithWhereUniqueWithoutAnalyzerPackageInput[]
    updateMany?: VcsProcessedUpdateManyWithWhereWithoutAnalyzerPackageInput | VcsProcessedUpdateManyWithWhereWithoutAnalyzerPackageInput[]
    deleteMany?: VcsProcessedScalarWhereInput | VcsProcessedScalarWhereInput[]
  }

  export type PackageAuthorUncheckedUpdateManyWithoutAnalyzerPackageNestedInput = {
    create?: XOR<PackageAuthorCreateWithoutAnalyzerPackageInput, PackageAuthorUncheckedCreateWithoutAnalyzerPackageInput> | PackageAuthorCreateWithoutAnalyzerPackageInput[] | PackageAuthorUncheckedCreateWithoutAnalyzerPackageInput[]
    connectOrCreate?: PackageAuthorCreateOrConnectWithoutAnalyzerPackageInput | PackageAuthorCreateOrConnectWithoutAnalyzerPackageInput[]
    upsert?: PackageAuthorUpsertWithWhereUniqueWithoutAnalyzerPackageInput | PackageAuthorUpsertWithWhereUniqueWithoutAnalyzerPackageInput[]
    createMany?: PackageAuthorCreateManyAnalyzerPackageInputEnvelope
    set?: PackageAuthorWhereUniqueInput | PackageAuthorWhereUniqueInput[]
    disconnect?: PackageAuthorWhereUniqueInput | PackageAuthorWhereUniqueInput[]
    delete?: PackageAuthorWhereUniqueInput | PackageAuthorWhereUniqueInput[]
    connect?: PackageAuthorWhereUniqueInput | PackageAuthorWhereUniqueInput[]
    update?: PackageAuthorUpdateWithWhereUniqueWithoutAnalyzerPackageInput | PackageAuthorUpdateWithWhereUniqueWithoutAnalyzerPackageInput[]
    updateMany?: PackageAuthorUpdateManyWithWhereWithoutAnalyzerPackageInput | PackageAuthorUpdateManyWithWhereWithoutAnalyzerPackageInput[]
    deleteMany?: PackageAuthorScalarWhereInput | PackageAuthorScalarWhereInput[]
  }

  export type DeclaredLicensesUncheckedUpdateManyWithoutAnalyzerPackageNestedInput = {
    create?: XOR<DeclaredLicensesCreateWithoutAnalyzerPackageInput, DeclaredLicensesUncheckedCreateWithoutAnalyzerPackageInput> | DeclaredLicensesCreateWithoutAnalyzerPackageInput[] | DeclaredLicensesUncheckedCreateWithoutAnalyzerPackageInput[]
    connectOrCreate?: DeclaredLicensesCreateOrConnectWithoutAnalyzerPackageInput | DeclaredLicensesCreateOrConnectWithoutAnalyzerPackageInput[]
    upsert?: DeclaredLicensesUpsertWithWhereUniqueWithoutAnalyzerPackageInput | DeclaredLicensesUpsertWithWhereUniqueWithoutAnalyzerPackageInput[]
    createMany?: DeclaredLicensesCreateManyAnalyzerPackageInputEnvelope
    set?: DeclaredLicensesWhereUniqueInput | DeclaredLicensesWhereUniqueInput[]
    disconnect?: DeclaredLicensesWhereUniqueInput | DeclaredLicensesWhereUniqueInput[]
    delete?: DeclaredLicensesWhereUniqueInput | DeclaredLicensesWhereUniqueInput[]
    connect?: DeclaredLicensesWhereUniqueInput | DeclaredLicensesWhereUniqueInput[]
    update?: DeclaredLicensesUpdateWithWhereUniqueWithoutAnalyzerPackageInput | DeclaredLicensesUpdateWithWhereUniqueWithoutAnalyzerPackageInput[]
    updateMany?: DeclaredLicensesUpdateManyWithWhereWithoutAnalyzerPackageInput | DeclaredLicensesUpdateManyWithWhereWithoutAnalyzerPackageInput[]
    deleteMany?: DeclaredLicensesScalarWhereInput | DeclaredLicensesScalarWhereInput[]
  }

  export type DeclaredLicensesProcessedUncheckedUpdateManyWithoutAnalyzerPackageNestedInput = {
    create?: XOR<DeclaredLicensesProcessedCreateWithoutAnalyzerPackageInput, DeclaredLicensesProcessedUncheckedCreateWithoutAnalyzerPackageInput> | DeclaredLicensesProcessedCreateWithoutAnalyzerPackageInput[] | DeclaredLicensesProcessedUncheckedCreateWithoutAnalyzerPackageInput[]
    connectOrCreate?: DeclaredLicensesProcessedCreateOrConnectWithoutAnalyzerPackageInput | DeclaredLicensesProcessedCreateOrConnectWithoutAnalyzerPackageInput[]
    upsert?: DeclaredLicensesProcessedUpsertWithWhereUniqueWithoutAnalyzerPackageInput | DeclaredLicensesProcessedUpsertWithWhereUniqueWithoutAnalyzerPackageInput[]
    createMany?: DeclaredLicensesProcessedCreateManyAnalyzerPackageInputEnvelope
    set?: DeclaredLicensesProcessedWhereUniqueInput | DeclaredLicensesProcessedWhereUniqueInput[]
    disconnect?: DeclaredLicensesProcessedWhereUniqueInput | DeclaredLicensesProcessedWhereUniqueInput[]
    delete?: DeclaredLicensesProcessedWhereUniqueInput | DeclaredLicensesProcessedWhereUniqueInput[]
    connect?: DeclaredLicensesProcessedWhereUniqueInput | DeclaredLicensesProcessedWhereUniqueInput[]
    update?: DeclaredLicensesProcessedUpdateWithWhereUniqueWithoutAnalyzerPackageInput | DeclaredLicensesProcessedUpdateWithWhereUniqueWithoutAnalyzerPackageInput[]
    updateMany?: DeclaredLicensesProcessedUpdateManyWithWhereWithoutAnalyzerPackageInput | DeclaredLicensesProcessedUpdateManyWithWhereWithoutAnalyzerPackageInput[]
    deleteMany?: DeclaredLicensesProcessedScalarWhereInput | DeclaredLicensesProcessedScalarWhereInput[]
  }

  export type BinaryArtifactUncheckedUpdateManyWithoutAnalyzerPackageNestedInput = {
    create?: XOR<BinaryArtifactCreateWithoutAnalyzerPackageInput, BinaryArtifactUncheckedCreateWithoutAnalyzerPackageInput> | BinaryArtifactCreateWithoutAnalyzerPackageInput[] | BinaryArtifactUncheckedCreateWithoutAnalyzerPackageInput[]
    connectOrCreate?: BinaryArtifactCreateOrConnectWithoutAnalyzerPackageInput | BinaryArtifactCreateOrConnectWithoutAnalyzerPackageInput[]
    upsert?: BinaryArtifactUpsertWithWhereUniqueWithoutAnalyzerPackageInput | BinaryArtifactUpsertWithWhereUniqueWithoutAnalyzerPackageInput[]
    createMany?: BinaryArtifactCreateManyAnalyzerPackageInputEnvelope
    set?: BinaryArtifactWhereUniqueInput | BinaryArtifactWhereUniqueInput[]
    disconnect?: BinaryArtifactWhereUniqueInput | BinaryArtifactWhereUniqueInput[]
    delete?: BinaryArtifactWhereUniqueInput | BinaryArtifactWhereUniqueInput[]
    connect?: BinaryArtifactWhereUniqueInput | BinaryArtifactWhereUniqueInput[]
    update?: BinaryArtifactUpdateWithWhereUniqueWithoutAnalyzerPackageInput | BinaryArtifactUpdateWithWhereUniqueWithoutAnalyzerPackageInput[]
    updateMany?: BinaryArtifactUpdateManyWithWhereWithoutAnalyzerPackageInput | BinaryArtifactUpdateManyWithWhereWithoutAnalyzerPackageInput[]
    deleteMany?: BinaryArtifactScalarWhereInput | BinaryArtifactScalarWhereInput[]
  }

  export type SourceArtifactUncheckedUpdateManyWithoutAnalyzerPackageNestedInput = {
    create?: XOR<SourceArtifactCreateWithoutAnalyzerPackageInput, SourceArtifactUncheckedCreateWithoutAnalyzerPackageInput> | SourceArtifactCreateWithoutAnalyzerPackageInput[] | SourceArtifactUncheckedCreateWithoutAnalyzerPackageInput[]
    connectOrCreate?: SourceArtifactCreateOrConnectWithoutAnalyzerPackageInput | SourceArtifactCreateOrConnectWithoutAnalyzerPackageInput[]
    upsert?: SourceArtifactUpsertWithWhereUniqueWithoutAnalyzerPackageInput | SourceArtifactUpsertWithWhereUniqueWithoutAnalyzerPackageInput[]
    createMany?: SourceArtifactCreateManyAnalyzerPackageInputEnvelope
    set?: SourceArtifactWhereUniqueInput | SourceArtifactWhereUniqueInput[]
    disconnect?: SourceArtifactWhereUniqueInput | SourceArtifactWhereUniqueInput[]
    delete?: SourceArtifactWhereUniqueInput | SourceArtifactWhereUniqueInput[]
    connect?: SourceArtifactWhereUniqueInput | SourceArtifactWhereUniqueInput[]
    update?: SourceArtifactUpdateWithWhereUniqueWithoutAnalyzerPackageInput | SourceArtifactUpdateWithWhereUniqueWithoutAnalyzerPackageInput[]
    updateMany?: SourceArtifactUpdateManyWithWhereWithoutAnalyzerPackageInput | SourceArtifactUpdateManyWithWhereWithoutAnalyzerPackageInput[]
    deleteMany?: SourceArtifactScalarWhereInput | SourceArtifactScalarWhereInput[]
  }

  export type VcsUncheckedUpdateManyWithoutAnalyzerPackageNestedInput = {
    create?: XOR<VcsCreateWithoutAnalyzerPackageInput, VcsUncheckedCreateWithoutAnalyzerPackageInput> | VcsCreateWithoutAnalyzerPackageInput[] | VcsUncheckedCreateWithoutAnalyzerPackageInput[]
    connectOrCreate?: VcsCreateOrConnectWithoutAnalyzerPackageInput | VcsCreateOrConnectWithoutAnalyzerPackageInput[]
    upsert?: VcsUpsertWithWhereUniqueWithoutAnalyzerPackageInput | VcsUpsertWithWhereUniqueWithoutAnalyzerPackageInput[]
    createMany?: VcsCreateManyAnalyzerPackageInputEnvelope
    set?: VcsWhereUniqueInput | VcsWhereUniqueInput[]
    disconnect?: VcsWhereUniqueInput | VcsWhereUniqueInput[]
    delete?: VcsWhereUniqueInput | VcsWhereUniqueInput[]
    connect?: VcsWhereUniqueInput | VcsWhereUniqueInput[]
    update?: VcsUpdateWithWhereUniqueWithoutAnalyzerPackageInput | VcsUpdateWithWhereUniqueWithoutAnalyzerPackageInput[]
    updateMany?: VcsUpdateManyWithWhereWithoutAnalyzerPackageInput | VcsUpdateManyWithWhereWithoutAnalyzerPackageInput[]
    deleteMany?: VcsScalarWhereInput | VcsScalarWhereInput[]
  }

  export type VcsProcessedUncheckedUpdateManyWithoutAnalyzerPackageNestedInput = {
    create?: XOR<VcsProcessedCreateWithoutAnalyzerPackageInput, VcsProcessedUncheckedCreateWithoutAnalyzerPackageInput> | VcsProcessedCreateWithoutAnalyzerPackageInput[] | VcsProcessedUncheckedCreateWithoutAnalyzerPackageInput[]
    connectOrCreate?: VcsProcessedCreateOrConnectWithoutAnalyzerPackageInput | VcsProcessedCreateOrConnectWithoutAnalyzerPackageInput[]
    upsert?: VcsProcessedUpsertWithWhereUniqueWithoutAnalyzerPackageInput | VcsProcessedUpsertWithWhereUniqueWithoutAnalyzerPackageInput[]
    createMany?: VcsProcessedCreateManyAnalyzerPackageInputEnvelope
    set?: VcsProcessedWhereUniqueInput | VcsProcessedWhereUniqueInput[]
    disconnect?: VcsProcessedWhereUniqueInput | VcsProcessedWhereUniqueInput[]
    delete?: VcsProcessedWhereUniqueInput | VcsProcessedWhereUniqueInput[]
    connect?: VcsProcessedWhereUniqueInput | VcsProcessedWhereUniqueInput[]
    update?: VcsProcessedUpdateWithWhereUniqueWithoutAnalyzerPackageInput | VcsProcessedUpdateWithWhereUniqueWithoutAnalyzerPackageInput[]
    updateMany?: VcsProcessedUpdateManyWithWhereWithoutAnalyzerPackageInput | VcsProcessedUpdateManyWithWhereWithoutAnalyzerPackageInput[]
    deleteMany?: VcsProcessedScalarWhereInput | VcsProcessedScalarWhereInput[]
  }

  export type AnalyzerPackageCreateNestedOneWithoutAuthorsInput = {
    create?: XOR<AnalyzerPackageCreateWithoutAuthorsInput, AnalyzerPackageUncheckedCreateWithoutAuthorsInput>
    connectOrCreate?: AnalyzerPackageCreateOrConnectWithoutAuthorsInput
    connect?: AnalyzerPackageWhereUniqueInput
  }

  export type AnalyzerPackageUpdateOneRequiredWithoutAuthorsNestedInput = {
    create?: XOR<AnalyzerPackageCreateWithoutAuthorsInput, AnalyzerPackageUncheckedCreateWithoutAuthorsInput>
    connectOrCreate?: AnalyzerPackageCreateOrConnectWithoutAuthorsInput
    upsert?: AnalyzerPackageUpsertWithoutAuthorsInput
    connect?: AnalyzerPackageWhereUniqueInput
    update?: XOR<XOR<AnalyzerPackageUpdateToOneWithWhereWithoutAuthorsInput, AnalyzerPackageUpdateWithoutAuthorsInput>, AnalyzerPackageUncheckedUpdateWithoutAuthorsInput>
  }

  export type AnalyzerPackageCreateNestedOneWithoutDeclaredLicensesInput = {
    create?: XOR<AnalyzerPackageCreateWithoutDeclaredLicensesInput, AnalyzerPackageUncheckedCreateWithoutDeclaredLicensesInput>
    connectOrCreate?: AnalyzerPackageCreateOrConnectWithoutDeclaredLicensesInput
    connect?: AnalyzerPackageWhereUniqueInput
  }

  export type AnalyzerPackageUpdateOneRequiredWithoutDeclaredLicensesNestedInput = {
    create?: XOR<AnalyzerPackageCreateWithoutDeclaredLicensesInput, AnalyzerPackageUncheckedCreateWithoutDeclaredLicensesInput>
    connectOrCreate?: AnalyzerPackageCreateOrConnectWithoutDeclaredLicensesInput
    upsert?: AnalyzerPackageUpsertWithoutDeclaredLicensesInput
    connect?: AnalyzerPackageWhereUniqueInput
    update?: XOR<XOR<AnalyzerPackageUpdateToOneWithWhereWithoutDeclaredLicensesInput, AnalyzerPackageUpdateWithoutDeclaredLicensesInput>, AnalyzerPackageUncheckedUpdateWithoutDeclaredLicensesInput>
  }

  export type AnalyzerPackageCreateNestedOneWithoutDeclaredLicensesProcessedInput = {
    create?: XOR<AnalyzerPackageCreateWithoutDeclaredLicensesProcessedInput, AnalyzerPackageUncheckedCreateWithoutDeclaredLicensesProcessedInput>
    connectOrCreate?: AnalyzerPackageCreateOrConnectWithoutDeclaredLicensesProcessedInput
    connect?: AnalyzerPackageWhereUniqueInput
  }

  export type AnalyzerPackageUpdateOneRequiredWithoutDeclaredLicensesProcessedNestedInput = {
    create?: XOR<AnalyzerPackageCreateWithoutDeclaredLicensesProcessedInput, AnalyzerPackageUncheckedCreateWithoutDeclaredLicensesProcessedInput>
    connectOrCreate?: AnalyzerPackageCreateOrConnectWithoutDeclaredLicensesProcessedInput
    upsert?: AnalyzerPackageUpsertWithoutDeclaredLicensesProcessedInput
    connect?: AnalyzerPackageWhereUniqueInput
    update?: XOR<XOR<AnalyzerPackageUpdateToOneWithWhereWithoutDeclaredLicensesProcessedInput, AnalyzerPackageUpdateWithoutDeclaredLicensesProcessedInput>, AnalyzerPackageUncheckedUpdateWithoutDeclaredLicensesProcessedInput>
  }

  export type AnalyzerPackageCreateNestedOneWithoutBinariesInput = {
    create?: XOR<AnalyzerPackageCreateWithoutBinariesInput, AnalyzerPackageUncheckedCreateWithoutBinariesInput>
    connectOrCreate?: AnalyzerPackageCreateOrConnectWithoutBinariesInput
    connect?: AnalyzerPackageWhereUniqueInput
  }

  export type AnalyzerPackageUpdateOneRequiredWithoutBinariesNestedInput = {
    create?: XOR<AnalyzerPackageCreateWithoutBinariesInput, AnalyzerPackageUncheckedCreateWithoutBinariesInput>
    connectOrCreate?: AnalyzerPackageCreateOrConnectWithoutBinariesInput
    upsert?: AnalyzerPackageUpsertWithoutBinariesInput
    connect?: AnalyzerPackageWhereUniqueInput
    update?: XOR<XOR<AnalyzerPackageUpdateToOneWithWhereWithoutBinariesInput, AnalyzerPackageUpdateWithoutBinariesInput>, AnalyzerPackageUncheckedUpdateWithoutBinariesInput>
  }

  export type AnalyzerPackageCreateNestedOneWithoutSourcesInput = {
    create?: XOR<AnalyzerPackageCreateWithoutSourcesInput, AnalyzerPackageUncheckedCreateWithoutSourcesInput>
    connectOrCreate?: AnalyzerPackageCreateOrConnectWithoutSourcesInput
    connect?: AnalyzerPackageWhereUniqueInput
  }

  export type AnalyzerPackageUpdateOneRequiredWithoutSourcesNestedInput = {
    create?: XOR<AnalyzerPackageCreateWithoutSourcesInput, AnalyzerPackageUncheckedCreateWithoutSourcesInput>
    connectOrCreate?: AnalyzerPackageCreateOrConnectWithoutSourcesInput
    upsert?: AnalyzerPackageUpsertWithoutSourcesInput
    connect?: AnalyzerPackageWhereUniqueInput
    update?: XOR<XOR<AnalyzerPackageUpdateToOneWithWhereWithoutSourcesInput, AnalyzerPackageUpdateWithoutSourcesInput>, AnalyzerPackageUncheckedUpdateWithoutSourcesInput>
  }

  export type AnalyzerPackageCreateNestedOneWithoutVcsListInput = {
    create?: XOR<AnalyzerPackageCreateWithoutVcsListInput, AnalyzerPackageUncheckedCreateWithoutVcsListInput>
    connectOrCreate?: AnalyzerPackageCreateOrConnectWithoutVcsListInput
    connect?: AnalyzerPackageWhereUniqueInput
  }

  export type AnalyzerPackageUpdateOneRequiredWithoutVcsListNestedInput = {
    create?: XOR<AnalyzerPackageCreateWithoutVcsListInput, AnalyzerPackageUncheckedCreateWithoutVcsListInput>
    connectOrCreate?: AnalyzerPackageCreateOrConnectWithoutVcsListInput
    upsert?: AnalyzerPackageUpsertWithoutVcsListInput
    connect?: AnalyzerPackageWhereUniqueInput
    update?: XOR<XOR<AnalyzerPackageUpdateToOneWithWhereWithoutVcsListInput, AnalyzerPackageUpdateWithoutVcsListInput>, AnalyzerPackageUncheckedUpdateWithoutVcsListInput>
  }

  export type AnalyzerPackageCreateNestedOneWithoutVcsProcessedInput = {
    create?: XOR<AnalyzerPackageCreateWithoutVcsProcessedInput, AnalyzerPackageUncheckedCreateWithoutVcsProcessedInput>
    connectOrCreate?: AnalyzerPackageCreateOrConnectWithoutVcsProcessedInput
    connect?: AnalyzerPackageWhereUniqueInput
  }

  export type AnalyzerPackageUpdateOneRequiredWithoutVcsProcessedNestedInput = {
    create?: XOR<AnalyzerPackageCreateWithoutVcsProcessedInput, AnalyzerPackageUncheckedCreateWithoutVcsProcessedInput>
    connectOrCreate?: AnalyzerPackageCreateOrConnectWithoutVcsProcessedInput
    upsert?: AnalyzerPackageUpsertWithoutVcsProcessedInput
    connect?: AnalyzerPackageWhereUniqueInput
    update?: XOR<XOR<AnalyzerPackageUpdateToOneWithWhereWithoutVcsProcessedInput, AnalyzerPackageUpdateWithoutVcsProcessedInput>, AnalyzerPackageUncheckedUpdateWithoutVcsProcessedInput>
  }

  export type ScanCreateNestedOneWithoutScannerInput = {
    create?: XOR<ScanCreateWithoutScannerInput, ScanUncheckedCreateWithoutScannerInput>
    connectOrCreate?: ScanCreateOrConnectWithoutScannerInput
    connect?: ScanWhereUniqueInput
  }

  export type LicensesCreateNestedManyWithoutScannerInput = {
    create?: XOR<LicensesCreateWithoutScannerInput, LicensesUncheckedCreateWithoutScannerInput> | LicensesCreateWithoutScannerInput[] | LicensesUncheckedCreateWithoutScannerInput[]
    connectOrCreate?: LicensesCreateOrConnectWithoutScannerInput | LicensesCreateOrConnectWithoutScannerInput[]
    createMany?: LicensesCreateManyScannerInputEnvelope
    connect?: LicensesWhereUniqueInput | LicensesWhereUniqueInput[]
  }

  export type CopyrightsCreateNestedManyWithoutScannerInput = {
    create?: XOR<CopyrightsCreateWithoutScannerInput, CopyrightsUncheckedCreateWithoutScannerInput> | CopyrightsCreateWithoutScannerInput[] | CopyrightsUncheckedCreateWithoutScannerInput[]
    connectOrCreate?: CopyrightsCreateOrConnectWithoutScannerInput | CopyrightsCreateOrConnectWithoutScannerInput[]
    createMany?: CopyrightsCreateManyScannerInputEnvelope
    connect?: CopyrightsWhereUniqueInput | CopyrightsWhereUniqueInput[]
  }

  export type LicensesUncheckedCreateNestedManyWithoutScannerInput = {
    create?: XOR<LicensesCreateWithoutScannerInput, LicensesUncheckedCreateWithoutScannerInput> | LicensesCreateWithoutScannerInput[] | LicensesUncheckedCreateWithoutScannerInput[]
    connectOrCreate?: LicensesCreateOrConnectWithoutScannerInput | LicensesCreateOrConnectWithoutScannerInput[]
    createMany?: LicensesCreateManyScannerInputEnvelope
    connect?: LicensesWhereUniqueInput | LicensesWhereUniqueInput[]
  }

  export type CopyrightsUncheckedCreateNestedManyWithoutScannerInput = {
    create?: XOR<CopyrightsCreateWithoutScannerInput, CopyrightsUncheckedCreateWithoutScannerInput> | CopyrightsCreateWithoutScannerInput[] | CopyrightsUncheckedCreateWithoutScannerInput[]
    connectOrCreate?: CopyrightsCreateOrConnectWithoutScannerInput | CopyrightsCreateOrConnectWithoutScannerInput[]
    createMany?: CopyrightsCreateManyScannerInputEnvelope
    connect?: CopyrightsWhereUniqueInput | CopyrightsWhereUniqueInput[]
  }

  export type ScanUpdateOneRequiredWithoutScannerNestedInput = {
    create?: XOR<ScanCreateWithoutScannerInput, ScanUncheckedCreateWithoutScannerInput>
    connectOrCreate?: ScanCreateOrConnectWithoutScannerInput
    upsert?: ScanUpsertWithoutScannerInput
    connect?: ScanWhereUniqueInput
    update?: XOR<XOR<ScanUpdateToOneWithWhereWithoutScannerInput, ScanUpdateWithoutScannerInput>, ScanUncheckedUpdateWithoutScannerInput>
  }

  export type LicensesUpdateManyWithoutScannerNestedInput = {
    create?: XOR<LicensesCreateWithoutScannerInput, LicensesUncheckedCreateWithoutScannerInput> | LicensesCreateWithoutScannerInput[] | LicensesUncheckedCreateWithoutScannerInput[]
    connectOrCreate?: LicensesCreateOrConnectWithoutScannerInput | LicensesCreateOrConnectWithoutScannerInput[]
    upsert?: LicensesUpsertWithWhereUniqueWithoutScannerInput | LicensesUpsertWithWhereUniqueWithoutScannerInput[]
    createMany?: LicensesCreateManyScannerInputEnvelope
    set?: LicensesWhereUniqueInput | LicensesWhereUniqueInput[]
    disconnect?: LicensesWhereUniqueInput | LicensesWhereUniqueInput[]
    delete?: LicensesWhereUniqueInput | LicensesWhereUniqueInput[]
    connect?: LicensesWhereUniqueInput | LicensesWhereUniqueInput[]
    update?: LicensesUpdateWithWhereUniqueWithoutScannerInput | LicensesUpdateWithWhereUniqueWithoutScannerInput[]
    updateMany?: LicensesUpdateManyWithWhereWithoutScannerInput | LicensesUpdateManyWithWhereWithoutScannerInput[]
    deleteMany?: LicensesScalarWhereInput | LicensesScalarWhereInput[]
  }

  export type CopyrightsUpdateManyWithoutScannerNestedInput = {
    create?: XOR<CopyrightsCreateWithoutScannerInput, CopyrightsUncheckedCreateWithoutScannerInput> | CopyrightsCreateWithoutScannerInput[] | CopyrightsUncheckedCreateWithoutScannerInput[]
    connectOrCreate?: CopyrightsCreateOrConnectWithoutScannerInput | CopyrightsCreateOrConnectWithoutScannerInput[]
    upsert?: CopyrightsUpsertWithWhereUniqueWithoutScannerInput | CopyrightsUpsertWithWhereUniqueWithoutScannerInput[]
    createMany?: CopyrightsCreateManyScannerInputEnvelope
    set?: CopyrightsWhereUniqueInput | CopyrightsWhereUniqueInput[]
    disconnect?: CopyrightsWhereUniqueInput | CopyrightsWhereUniqueInput[]
    delete?: CopyrightsWhereUniqueInput | CopyrightsWhereUniqueInput[]
    connect?: CopyrightsWhereUniqueInput | CopyrightsWhereUniqueInput[]
    update?: CopyrightsUpdateWithWhereUniqueWithoutScannerInput | CopyrightsUpdateWithWhereUniqueWithoutScannerInput[]
    updateMany?: CopyrightsUpdateManyWithWhereWithoutScannerInput | CopyrightsUpdateManyWithWhereWithoutScannerInput[]
    deleteMany?: CopyrightsScalarWhereInput | CopyrightsScalarWhereInput[]
  }

  export type LicensesUncheckedUpdateManyWithoutScannerNestedInput = {
    create?: XOR<LicensesCreateWithoutScannerInput, LicensesUncheckedCreateWithoutScannerInput> | LicensesCreateWithoutScannerInput[] | LicensesUncheckedCreateWithoutScannerInput[]
    connectOrCreate?: LicensesCreateOrConnectWithoutScannerInput | LicensesCreateOrConnectWithoutScannerInput[]
    upsert?: LicensesUpsertWithWhereUniqueWithoutScannerInput | LicensesUpsertWithWhereUniqueWithoutScannerInput[]
    createMany?: LicensesCreateManyScannerInputEnvelope
    set?: LicensesWhereUniqueInput | LicensesWhereUniqueInput[]
    disconnect?: LicensesWhereUniqueInput | LicensesWhereUniqueInput[]
    delete?: LicensesWhereUniqueInput | LicensesWhereUniqueInput[]
    connect?: LicensesWhereUniqueInput | LicensesWhereUniqueInput[]
    update?: LicensesUpdateWithWhereUniqueWithoutScannerInput | LicensesUpdateWithWhereUniqueWithoutScannerInput[]
    updateMany?: LicensesUpdateManyWithWhereWithoutScannerInput | LicensesUpdateManyWithWhereWithoutScannerInput[]
    deleteMany?: LicensesScalarWhereInput | LicensesScalarWhereInput[]
  }

  export type CopyrightsUncheckedUpdateManyWithoutScannerNestedInput = {
    create?: XOR<CopyrightsCreateWithoutScannerInput, CopyrightsUncheckedCreateWithoutScannerInput> | CopyrightsCreateWithoutScannerInput[] | CopyrightsUncheckedCreateWithoutScannerInput[]
    connectOrCreate?: CopyrightsCreateOrConnectWithoutScannerInput | CopyrightsCreateOrConnectWithoutScannerInput[]
    upsert?: CopyrightsUpsertWithWhereUniqueWithoutScannerInput | CopyrightsUpsertWithWhereUniqueWithoutScannerInput[]
    createMany?: CopyrightsCreateManyScannerInputEnvelope
    set?: CopyrightsWhereUniqueInput | CopyrightsWhereUniqueInput[]
    disconnect?: CopyrightsWhereUniqueInput | CopyrightsWhereUniqueInput[]
    delete?: CopyrightsWhereUniqueInput | CopyrightsWhereUniqueInput[]
    connect?: CopyrightsWhereUniqueInput | CopyrightsWhereUniqueInput[]
    update?: CopyrightsUpdateWithWhereUniqueWithoutScannerInput | CopyrightsUpdateWithWhereUniqueWithoutScannerInput[]
    updateMany?: CopyrightsUpdateManyWithWhereWithoutScannerInput | CopyrightsUpdateManyWithWhereWithoutScannerInput[]
    deleteMany?: CopyrightsScalarWhereInput | CopyrightsScalarWhereInput[]
  }

  export type ScannerCreateNestedOneWithoutLicensesInput = {
    create?: XOR<ScannerCreateWithoutLicensesInput, ScannerUncheckedCreateWithoutLicensesInput>
    connectOrCreate?: ScannerCreateOrConnectWithoutLicensesInput
    connect?: ScannerWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ScannerUpdateOneRequiredWithoutLicensesNestedInput = {
    create?: XOR<ScannerCreateWithoutLicensesInput, ScannerUncheckedCreateWithoutLicensesInput>
    connectOrCreate?: ScannerCreateOrConnectWithoutLicensesInput
    upsert?: ScannerUpsertWithoutLicensesInput
    connect?: ScannerWhereUniqueInput
    update?: XOR<XOR<ScannerUpdateToOneWithWhereWithoutLicensesInput, ScannerUpdateWithoutLicensesInput>, ScannerUncheckedUpdateWithoutLicensesInput>
  }

  export type ScannerCreateNestedOneWithoutCopyrightsInput = {
    create?: XOR<ScannerCreateWithoutCopyrightsInput, ScannerUncheckedCreateWithoutCopyrightsInput>
    connectOrCreate?: ScannerCreateOrConnectWithoutCopyrightsInput
    connect?: ScannerWhereUniqueInput
  }

  export type ScannerUpdateOneRequiredWithoutCopyrightsNestedInput = {
    create?: XOR<ScannerCreateWithoutCopyrightsInput, ScannerUncheckedCreateWithoutCopyrightsInput>
    connectOrCreate?: ScannerCreateOrConnectWithoutCopyrightsInput
    upsert?: ScannerUpsertWithoutCopyrightsInput
    connect?: ScannerWhereUniqueInput
    update?: XOR<XOR<ScannerUpdateToOneWithWhereWithoutCopyrightsInput, ScannerUpdateWithoutCopyrightsInput>, ScannerUncheckedUpdateWithoutCopyrightsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ProjectCreateWithoutUserInput = {
    id: string
    name: string
    createdAt?: Date | string
    scans?: ScanCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutUserInput = {
    id: string
    name: string
    createdAt?: Date | string
    scans?: ScanUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutUserInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectCreateManyUserInputEnvelope = {
    data: ProjectCreateManyUserInput | ProjectCreateManyUserInput[]
  }

  export type ProjectUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
  }

  export type ProjectUpdateManyWithWhereWithoutUserInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    userId?: StringFilter<"Project"> | string
  }

  export type UserCreateWithoutProjectsInput = {
    userId: string
    userName?: string | null
    email?: string | null
    password?: string | null
    createdAt?: Date | string | null
  }

  export type UserUncheckedCreateWithoutProjectsInput = {
    userId: string
    userName?: string | null
    email?: string | null
    password?: string | null
    createdAt?: Date | string | null
  }

  export type UserCreateOrConnectWithoutProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type ScanCreateWithoutProjectInput = {
    createdAt?: Date | string
    gitRunId: string
    analyzer?: AnalyzerCreateNestedOneWithoutScanInput
    scanner?: ScannerCreateNestedOneWithoutScanInput
  }

  export type ScanUncheckedCreateWithoutProjectInput = {
    id?: number
    createdAt?: Date | string
    gitRunId: string
    analyzer?: AnalyzerUncheckedCreateNestedOneWithoutScanInput
    scanner?: ScannerUncheckedCreateNestedOneWithoutScanInput
  }

  export type ScanCreateOrConnectWithoutProjectInput = {
    where: ScanWhereUniqueInput
    create: XOR<ScanCreateWithoutProjectInput, ScanUncheckedCreateWithoutProjectInput>
  }

  export type ScanCreateManyProjectInputEnvelope = {
    data: ScanCreateManyProjectInput | ScanCreateManyProjectInput[]
  }

  export type UserUpsertWithoutProjectsInput = {
    update: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateWithoutProjectsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateWithoutProjectsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ScanUpsertWithWhereUniqueWithoutProjectInput = {
    where: ScanWhereUniqueInput
    update: XOR<ScanUpdateWithoutProjectInput, ScanUncheckedUpdateWithoutProjectInput>
    create: XOR<ScanCreateWithoutProjectInput, ScanUncheckedCreateWithoutProjectInput>
  }

  export type ScanUpdateWithWhereUniqueWithoutProjectInput = {
    where: ScanWhereUniqueInput
    data: XOR<ScanUpdateWithoutProjectInput, ScanUncheckedUpdateWithoutProjectInput>
  }

  export type ScanUpdateManyWithWhereWithoutProjectInput = {
    where: ScanScalarWhereInput
    data: XOR<ScanUpdateManyMutationInput, ScanUncheckedUpdateManyWithoutProjectInput>
  }

  export type ScanScalarWhereInput = {
    AND?: ScanScalarWhereInput | ScanScalarWhereInput[]
    OR?: ScanScalarWhereInput[]
    NOT?: ScanScalarWhereInput | ScanScalarWhereInput[]
    id?: IntFilter<"Scan"> | number
    createdAt?: DateTimeFilter<"Scan"> | Date | string
    gitRunId?: StringFilter<"Scan"> | string
    projectId?: StringFilter<"Scan"> | string
  }

  export type ProjectCreateWithoutScansInput = {
    id: string
    name: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateWithoutScansInput = {
    id: string
    name: string
    createdAt?: Date | string
    userId: string
  }

  export type ProjectCreateOrConnectWithoutScansInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutScansInput, ProjectUncheckedCreateWithoutScansInput>
  }

  export type AnalyzerCreateWithoutScanInput = {
    createdAt?: Date | string
    packages?: AnalyzerPackageCreateNestedManyWithoutAnalyzerInput
  }

  export type AnalyzerUncheckedCreateWithoutScanInput = {
    id?: number
    createdAt?: Date | string
    packages?: AnalyzerPackageUncheckedCreateNestedManyWithoutAnalyzerInput
  }

  export type AnalyzerCreateOrConnectWithoutScanInput = {
    where: AnalyzerWhereUniqueInput
    create: XOR<AnalyzerCreateWithoutScanInput, AnalyzerUncheckedCreateWithoutScanInput>
  }

  export type ScannerCreateWithoutScanInput = {
    createdAt?: Date | string
    licenses?: LicensesCreateNestedManyWithoutScannerInput
    copyrights?: CopyrightsCreateNestedManyWithoutScannerInput
  }

  export type ScannerUncheckedCreateWithoutScanInput = {
    id?: number
    createdAt?: Date | string
    licenses?: LicensesUncheckedCreateNestedManyWithoutScannerInput
    copyrights?: CopyrightsUncheckedCreateNestedManyWithoutScannerInput
  }

  export type ScannerCreateOrConnectWithoutScanInput = {
    where: ScannerWhereUniqueInput
    create: XOR<ScannerCreateWithoutScanInput, ScannerUncheckedCreateWithoutScanInput>
  }

  export type ProjectUpsertWithoutScansInput = {
    update: XOR<ProjectUpdateWithoutScansInput, ProjectUncheckedUpdateWithoutScansInput>
    create: XOR<ProjectCreateWithoutScansInput, ProjectUncheckedCreateWithoutScansInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutScansInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutScansInput, ProjectUncheckedUpdateWithoutScansInput>
  }

  export type ProjectUpdateWithoutScansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateWithoutScansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AnalyzerUpsertWithoutScanInput = {
    update: XOR<AnalyzerUpdateWithoutScanInput, AnalyzerUncheckedUpdateWithoutScanInput>
    create: XOR<AnalyzerCreateWithoutScanInput, AnalyzerUncheckedCreateWithoutScanInput>
    where?: AnalyzerWhereInput
  }

  export type AnalyzerUpdateToOneWithWhereWithoutScanInput = {
    where?: AnalyzerWhereInput
    data: XOR<AnalyzerUpdateWithoutScanInput, AnalyzerUncheckedUpdateWithoutScanInput>
  }

  export type AnalyzerUpdateWithoutScanInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packages?: AnalyzerPackageUpdateManyWithoutAnalyzerNestedInput
  }

  export type AnalyzerUncheckedUpdateWithoutScanInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packages?: AnalyzerPackageUncheckedUpdateManyWithoutAnalyzerNestedInput
  }

  export type ScannerUpsertWithoutScanInput = {
    update: XOR<ScannerUpdateWithoutScanInput, ScannerUncheckedUpdateWithoutScanInput>
    create: XOR<ScannerCreateWithoutScanInput, ScannerUncheckedCreateWithoutScanInput>
    where?: ScannerWhereInput
  }

  export type ScannerUpdateToOneWithWhereWithoutScanInput = {
    where?: ScannerWhereInput
    data: XOR<ScannerUpdateWithoutScanInput, ScannerUncheckedUpdateWithoutScanInput>
  }

  export type ScannerUpdateWithoutScanInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    licenses?: LicensesUpdateManyWithoutScannerNestedInput
    copyrights?: CopyrightsUpdateManyWithoutScannerNestedInput
  }

  export type ScannerUncheckedUpdateWithoutScanInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    licenses?: LicensesUncheckedUpdateManyWithoutScannerNestedInput
    copyrights?: CopyrightsUncheckedUpdateManyWithoutScannerNestedInput
  }

  export type ScanCreateWithoutAnalyzerInput = {
    createdAt?: Date | string
    gitRunId: string
    project: ProjectCreateNestedOneWithoutScansInput
    scanner?: ScannerCreateNestedOneWithoutScanInput
  }

  export type ScanUncheckedCreateWithoutAnalyzerInput = {
    id?: number
    createdAt?: Date | string
    gitRunId: string
    projectId: string
    scanner?: ScannerUncheckedCreateNestedOneWithoutScanInput
  }

  export type ScanCreateOrConnectWithoutAnalyzerInput = {
    where: ScanWhereUniqueInput
    create: XOR<ScanCreateWithoutAnalyzerInput, ScanUncheckedCreateWithoutAnalyzerInput>
  }

  export type AnalyzerPackageCreateWithoutAnalyzerInput = {
    createdAt?: Date | string
    packId: string
    purl: string
    description: string
    homepageUrl: string
    authors?: PackageAuthorCreateNestedManyWithoutAnalyzerPackageInput
    declaredLicenses?: DeclaredLicensesCreateNestedManyWithoutAnalyzerPackageInput
    declaredLicensesProcessed?: DeclaredLicensesProcessedCreateNestedManyWithoutAnalyzerPackageInput
    binaries?: BinaryArtifactCreateNestedManyWithoutAnalyzerPackageInput
    sources?: SourceArtifactCreateNestedManyWithoutAnalyzerPackageInput
    vcsList?: VcsCreateNestedManyWithoutAnalyzerPackageInput
    vcsProcessed?: VcsProcessedCreateNestedManyWithoutAnalyzerPackageInput
  }

  export type AnalyzerPackageUncheckedCreateWithoutAnalyzerInput = {
    id?: number
    createdAt?: Date | string
    packId: string
    purl: string
    description: string
    homepageUrl: string
    authors?: PackageAuthorUncheckedCreateNestedManyWithoutAnalyzerPackageInput
    declaredLicenses?: DeclaredLicensesUncheckedCreateNestedManyWithoutAnalyzerPackageInput
    declaredLicensesProcessed?: DeclaredLicensesProcessedUncheckedCreateNestedManyWithoutAnalyzerPackageInput
    binaries?: BinaryArtifactUncheckedCreateNestedManyWithoutAnalyzerPackageInput
    sources?: SourceArtifactUncheckedCreateNestedManyWithoutAnalyzerPackageInput
    vcsList?: VcsUncheckedCreateNestedManyWithoutAnalyzerPackageInput
    vcsProcessed?: VcsProcessedUncheckedCreateNestedManyWithoutAnalyzerPackageInput
  }

  export type AnalyzerPackageCreateOrConnectWithoutAnalyzerInput = {
    where: AnalyzerPackageWhereUniqueInput
    create: XOR<AnalyzerPackageCreateWithoutAnalyzerInput, AnalyzerPackageUncheckedCreateWithoutAnalyzerInput>
  }

  export type AnalyzerPackageCreateManyAnalyzerInputEnvelope = {
    data: AnalyzerPackageCreateManyAnalyzerInput | AnalyzerPackageCreateManyAnalyzerInput[]
  }

  export type ScanUpsertWithoutAnalyzerInput = {
    update: XOR<ScanUpdateWithoutAnalyzerInput, ScanUncheckedUpdateWithoutAnalyzerInput>
    create: XOR<ScanCreateWithoutAnalyzerInput, ScanUncheckedCreateWithoutAnalyzerInput>
    where?: ScanWhereInput
  }

  export type ScanUpdateToOneWithWhereWithoutAnalyzerInput = {
    where?: ScanWhereInput
    data: XOR<ScanUpdateWithoutAnalyzerInput, ScanUncheckedUpdateWithoutAnalyzerInput>
  }

  export type ScanUpdateWithoutAnalyzerInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gitRunId?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneRequiredWithoutScansNestedInput
    scanner?: ScannerUpdateOneWithoutScanNestedInput
  }

  export type ScanUncheckedUpdateWithoutAnalyzerInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gitRunId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    scanner?: ScannerUncheckedUpdateOneWithoutScanNestedInput
  }

  export type AnalyzerPackageUpsertWithWhereUniqueWithoutAnalyzerInput = {
    where: AnalyzerPackageWhereUniqueInput
    update: XOR<AnalyzerPackageUpdateWithoutAnalyzerInput, AnalyzerPackageUncheckedUpdateWithoutAnalyzerInput>
    create: XOR<AnalyzerPackageCreateWithoutAnalyzerInput, AnalyzerPackageUncheckedCreateWithoutAnalyzerInput>
  }

  export type AnalyzerPackageUpdateWithWhereUniqueWithoutAnalyzerInput = {
    where: AnalyzerPackageWhereUniqueInput
    data: XOR<AnalyzerPackageUpdateWithoutAnalyzerInput, AnalyzerPackageUncheckedUpdateWithoutAnalyzerInput>
  }

  export type AnalyzerPackageUpdateManyWithWhereWithoutAnalyzerInput = {
    where: AnalyzerPackageScalarWhereInput
    data: XOR<AnalyzerPackageUpdateManyMutationInput, AnalyzerPackageUncheckedUpdateManyWithoutAnalyzerInput>
  }

  export type AnalyzerPackageScalarWhereInput = {
    AND?: AnalyzerPackageScalarWhereInput | AnalyzerPackageScalarWhereInput[]
    OR?: AnalyzerPackageScalarWhereInput[]
    NOT?: AnalyzerPackageScalarWhereInput | AnalyzerPackageScalarWhereInput[]
    id?: IntFilter<"AnalyzerPackage"> | number
    createdAt?: DateTimeFilter<"AnalyzerPackage"> | Date | string
    packId?: StringFilter<"AnalyzerPackage"> | string
    purl?: StringFilter<"AnalyzerPackage"> | string
    description?: StringFilter<"AnalyzerPackage"> | string
    homepageUrl?: StringFilter<"AnalyzerPackage"> | string
    analyzerId?: IntFilter<"AnalyzerPackage"> | number
  }

  export type AnalyzerCreateWithoutPackagesInput = {
    createdAt?: Date | string
    scan: ScanCreateNestedOneWithoutAnalyzerInput
  }

  export type AnalyzerUncheckedCreateWithoutPackagesInput = {
    id?: number
    createdAt?: Date | string
    scanId: number
  }

  export type AnalyzerCreateOrConnectWithoutPackagesInput = {
    where: AnalyzerWhereUniqueInput
    create: XOR<AnalyzerCreateWithoutPackagesInput, AnalyzerUncheckedCreateWithoutPackagesInput>
  }

  export type PackageAuthorCreateWithoutAnalyzerPackageInput = {
    name: string
  }

  export type PackageAuthorUncheckedCreateWithoutAnalyzerPackageInput = {
    id?: number
    name: string
  }

  export type PackageAuthorCreateOrConnectWithoutAnalyzerPackageInput = {
    where: PackageAuthorWhereUniqueInput
    create: XOR<PackageAuthorCreateWithoutAnalyzerPackageInput, PackageAuthorUncheckedCreateWithoutAnalyzerPackageInput>
  }

  export type PackageAuthorCreateManyAnalyzerPackageInputEnvelope = {
    data: PackageAuthorCreateManyAnalyzerPackageInput | PackageAuthorCreateManyAnalyzerPackageInput[]
  }

  export type DeclaredLicensesCreateWithoutAnalyzerPackageInput = {
    name: string
  }

  export type DeclaredLicensesUncheckedCreateWithoutAnalyzerPackageInput = {
    id?: number
    name: string
  }

  export type DeclaredLicensesCreateOrConnectWithoutAnalyzerPackageInput = {
    where: DeclaredLicensesWhereUniqueInput
    create: XOR<DeclaredLicensesCreateWithoutAnalyzerPackageInput, DeclaredLicensesUncheckedCreateWithoutAnalyzerPackageInput>
  }

  export type DeclaredLicensesCreateManyAnalyzerPackageInputEnvelope = {
    data: DeclaredLicensesCreateManyAnalyzerPackageInput | DeclaredLicensesCreateManyAnalyzerPackageInput[]
  }

  export type DeclaredLicensesProcessedCreateWithoutAnalyzerPackageInput = {
    spdxExpression: string
  }

  export type DeclaredLicensesProcessedUncheckedCreateWithoutAnalyzerPackageInput = {
    id?: number
    spdxExpression: string
  }

  export type DeclaredLicensesProcessedCreateOrConnectWithoutAnalyzerPackageInput = {
    where: DeclaredLicensesProcessedWhereUniqueInput
    create: XOR<DeclaredLicensesProcessedCreateWithoutAnalyzerPackageInput, DeclaredLicensesProcessedUncheckedCreateWithoutAnalyzerPackageInput>
  }

  export type DeclaredLicensesProcessedCreateManyAnalyzerPackageInputEnvelope = {
    data: DeclaredLicensesProcessedCreateManyAnalyzerPackageInput | DeclaredLicensesProcessedCreateManyAnalyzerPackageInput[]
  }

  export type BinaryArtifactCreateWithoutAnalyzerPackageInput = {
    url: string
  }

  export type BinaryArtifactUncheckedCreateWithoutAnalyzerPackageInput = {
    id?: number
    url: string
  }

  export type BinaryArtifactCreateOrConnectWithoutAnalyzerPackageInput = {
    where: BinaryArtifactWhereUniqueInput
    create: XOR<BinaryArtifactCreateWithoutAnalyzerPackageInput, BinaryArtifactUncheckedCreateWithoutAnalyzerPackageInput>
  }

  export type BinaryArtifactCreateManyAnalyzerPackageInputEnvelope = {
    data: BinaryArtifactCreateManyAnalyzerPackageInput | BinaryArtifactCreateManyAnalyzerPackageInput[]
  }

  export type SourceArtifactCreateWithoutAnalyzerPackageInput = {
    url: string
  }

  export type SourceArtifactUncheckedCreateWithoutAnalyzerPackageInput = {
    id?: number
    url: string
  }

  export type SourceArtifactCreateOrConnectWithoutAnalyzerPackageInput = {
    where: SourceArtifactWhereUniqueInput
    create: XOR<SourceArtifactCreateWithoutAnalyzerPackageInput, SourceArtifactUncheckedCreateWithoutAnalyzerPackageInput>
  }

  export type SourceArtifactCreateManyAnalyzerPackageInputEnvelope = {
    data: SourceArtifactCreateManyAnalyzerPackageInput | SourceArtifactCreateManyAnalyzerPackageInput[]
  }

  export type VcsCreateWithoutAnalyzerPackageInput = {
    type: string
    url: string
    revision: string
    path: string
  }

  export type VcsUncheckedCreateWithoutAnalyzerPackageInput = {
    id?: number
    type: string
    url: string
    revision: string
    path: string
  }

  export type VcsCreateOrConnectWithoutAnalyzerPackageInput = {
    where: VcsWhereUniqueInput
    create: XOR<VcsCreateWithoutAnalyzerPackageInput, VcsUncheckedCreateWithoutAnalyzerPackageInput>
  }

  export type VcsCreateManyAnalyzerPackageInputEnvelope = {
    data: VcsCreateManyAnalyzerPackageInput | VcsCreateManyAnalyzerPackageInput[]
  }

  export type VcsProcessedCreateWithoutAnalyzerPackageInput = {
    type: string
    url: string
    revision: string
    path: string
  }

  export type VcsProcessedUncheckedCreateWithoutAnalyzerPackageInput = {
    id?: number
    type: string
    url: string
    revision: string
    path: string
  }

  export type VcsProcessedCreateOrConnectWithoutAnalyzerPackageInput = {
    where: VcsProcessedWhereUniqueInput
    create: XOR<VcsProcessedCreateWithoutAnalyzerPackageInput, VcsProcessedUncheckedCreateWithoutAnalyzerPackageInput>
  }

  export type VcsProcessedCreateManyAnalyzerPackageInputEnvelope = {
    data: VcsProcessedCreateManyAnalyzerPackageInput | VcsProcessedCreateManyAnalyzerPackageInput[]
  }

  export type AnalyzerUpsertWithoutPackagesInput = {
    update: XOR<AnalyzerUpdateWithoutPackagesInput, AnalyzerUncheckedUpdateWithoutPackagesInput>
    create: XOR<AnalyzerCreateWithoutPackagesInput, AnalyzerUncheckedCreateWithoutPackagesInput>
    where?: AnalyzerWhereInput
  }

  export type AnalyzerUpdateToOneWithWhereWithoutPackagesInput = {
    where?: AnalyzerWhereInput
    data: XOR<AnalyzerUpdateWithoutPackagesInput, AnalyzerUncheckedUpdateWithoutPackagesInput>
  }

  export type AnalyzerUpdateWithoutPackagesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scan?: ScanUpdateOneRequiredWithoutAnalyzerNestedInput
  }

  export type AnalyzerUncheckedUpdateWithoutPackagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scanId?: IntFieldUpdateOperationsInput | number
  }

  export type PackageAuthorUpsertWithWhereUniqueWithoutAnalyzerPackageInput = {
    where: PackageAuthorWhereUniqueInput
    update: XOR<PackageAuthorUpdateWithoutAnalyzerPackageInput, PackageAuthorUncheckedUpdateWithoutAnalyzerPackageInput>
    create: XOR<PackageAuthorCreateWithoutAnalyzerPackageInput, PackageAuthorUncheckedCreateWithoutAnalyzerPackageInput>
  }

  export type PackageAuthorUpdateWithWhereUniqueWithoutAnalyzerPackageInput = {
    where: PackageAuthorWhereUniqueInput
    data: XOR<PackageAuthorUpdateWithoutAnalyzerPackageInput, PackageAuthorUncheckedUpdateWithoutAnalyzerPackageInput>
  }

  export type PackageAuthorUpdateManyWithWhereWithoutAnalyzerPackageInput = {
    where: PackageAuthorScalarWhereInput
    data: XOR<PackageAuthorUpdateManyMutationInput, PackageAuthorUncheckedUpdateManyWithoutAnalyzerPackageInput>
  }

  export type PackageAuthorScalarWhereInput = {
    AND?: PackageAuthorScalarWhereInput | PackageAuthorScalarWhereInput[]
    OR?: PackageAuthorScalarWhereInput[]
    NOT?: PackageAuthorScalarWhereInput | PackageAuthorScalarWhereInput[]
    id?: IntFilter<"PackageAuthor"> | number
    name?: StringFilter<"PackageAuthor"> | string
    packageId?: IntFilter<"PackageAuthor"> | number
  }

  export type DeclaredLicensesUpsertWithWhereUniqueWithoutAnalyzerPackageInput = {
    where: DeclaredLicensesWhereUniqueInput
    update: XOR<DeclaredLicensesUpdateWithoutAnalyzerPackageInput, DeclaredLicensesUncheckedUpdateWithoutAnalyzerPackageInput>
    create: XOR<DeclaredLicensesCreateWithoutAnalyzerPackageInput, DeclaredLicensesUncheckedCreateWithoutAnalyzerPackageInput>
  }

  export type DeclaredLicensesUpdateWithWhereUniqueWithoutAnalyzerPackageInput = {
    where: DeclaredLicensesWhereUniqueInput
    data: XOR<DeclaredLicensesUpdateWithoutAnalyzerPackageInput, DeclaredLicensesUncheckedUpdateWithoutAnalyzerPackageInput>
  }

  export type DeclaredLicensesUpdateManyWithWhereWithoutAnalyzerPackageInput = {
    where: DeclaredLicensesScalarWhereInput
    data: XOR<DeclaredLicensesUpdateManyMutationInput, DeclaredLicensesUncheckedUpdateManyWithoutAnalyzerPackageInput>
  }

  export type DeclaredLicensesScalarWhereInput = {
    AND?: DeclaredLicensesScalarWhereInput | DeclaredLicensesScalarWhereInput[]
    OR?: DeclaredLicensesScalarWhereInput[]
    NOT?: DeclaredLicensesScalarWhereInput | DeclaredLicensesScalarWhereInput[]
    id?: IntFilter<"DeclaredLicenses"> | number
    name?: StringFilter<"DeclaredLicenses"> | string
    packageId?: IntFilter<"DeclaredLicenses"> | number
  }

  export type DeclaredLicensesProcessedUpsertWithWhereUniqueWithoutAnalyzerPackageInput = {
    where: DeclaredLicensesProcessedWhereUniqueInput
    update: XOR<DeclaredLicensesProcessedUpdateWithoutAnalyzerPackageInput, DeclaredLicensesProcessedUncheckedUpdateWithoutAnalyzerPackageInput>
    create: XOR<DeclaredLicensesProcessedCreateWithoutAnalyzerPackageInput, DeclaredLicensesProcessedUncheckedCreateWithoutAnalyzerPackageInput>
  }

  export type DeclaredLicensesProcessedUpdateWithWhereUniqueWithoutAnalyzerPackageInput = {
    where: DeclaredLicensesProcessedWhereUniqueInput
    data: XOR<DeclaredLicensesProcessedUpdateWithoutAnalyzerPackageInput, DeclaredLicensesProcessedUncheckedUpdateWithoutAnalyzerPackageInput>
  }

  export type DeclaredLicensesProcessedUpdateManyWithWhereWithoutAnalyzerPackageInput = {
    where: DeclaredLicensesProcessedScalarWhereInput
    data: XOR<DeclaredLicensesProcessedUpdateManyMutationInput, DeclaredLicensesProcessedUncheckedUpdateManyWithoutAnalyzerPackageInput>
  }

  export type DeclaredLicensesProcessedScalarWhereInput = {
    AND?: DeclaredLicensesProcessedScalarWhereInput | DeclaredLicensesProcessedScalarWhereInput[]
    OR?: DeclaredLicensesProcessedScalarWhereInput[]
    NOT?: DeclaredLicensesProcessedScalarWhereInput | DeclaredLicensesProcessedScalarWhereInput[]
    id?: IntFilter<"DeclaredLicensesProcessed"> | number
    spdxExpression?: StringFilter<"DeclaredLicensesProcessed"> | string
    packageId?: IntFilter<"DeclaredLicensesProcessed"> | number
  }

  export type BinaryArtifactUpsertWithWhereUniqueWithoutAnalyzerPackageInput = {
    where: BinaryArtifactWhereUniqueInput
    update: XOR<BinaryArtifactUpdateWithoutAnalyzerPackageInput, BinaryArtifactUncheckedUpdateWithoutAnalyzerPackageInput>
    create: XOR<BinaryArtifactCreateWithoutAnalyzerPackageInput, BinaryArtifactUncheckedCreateWithoutAnalyzerPackageInput>
  }

  export type BinaryArtifactUpdateWithWhereUniqueWithoutAnalyzerPackageInput = {
    where: BinaryArtifactWhereUniqueInput
    data: XOR<BinaryArtifactUpdateWithoutAnalyzerPackageInput, BinaryArtifactUncheckedUpdateWithoutAnalyzerPackageInput>
  }

  export type BinaryArtifactUpdateManyWithWhereWithoutAnalyzerPackageInput = {
    where: BinaryArtifactScalarWhereInput
    data: XOR<BinaryArtifactUpdateManyMutationInput, BinaryArtifactUncheckedUpdateManyWithoutAnalyzerPackageInput>
  }

  export type BinaryArtifactScalarWhereInput = {
    AND?: BinaryArtifactScalarWhereInput | BinaryArtifactScalarWhereInput[]
    OR?: BinaryArtifactScalarWhereInput[]
    NOT?: BinaryArtifactScalarWhereInput | BinaryArtifactScalarWhereInput[]
    id?: IntFilter<"BinaryArtifact"> | number
    url?: StringFilter<"BinaryArtifact"> | string
    packageId?: IntFilter<"BinaryArtifact"> | number
  }

  export type SourceArtifactUpsertWithWhereUniqueWithoutAnalyzerPackageInput = {
    where: SourceArtifactWhereUniqueInput
    update: XOR<SourceArtifactUpdateWithoutAnalyzerPackageInput, SourceArtifactUncheckedUpdateWithoutAnalyzerPackageInput>
    create: XOR<SourceArtifactCreateWithoutAnalyzerPackageInput, SourceArtifactUncheckedCreateWithoutAnalyzerPackageInput>
  }

  export type SourceArtifactUpdateWithWhereUniqueWithoutAnalyzerPackageInput = {
    where: SourceArtifactWhereUniqueInput
    data: XOR<SourceArtifactUpdateWithoutAnalyzerPackageInput, SourceArtifactUncheckedUpdateWithoutAnalyzerPackageInput>
  }

  export type SourceArtifactUpdateManyWithWhereWithoutAnalyzerPackageInput = {
    where: SourceArtifactScalarWhereInput
    data: XOR<SourceArtifactUpdateManyMutationInput, SourceArtifactUncheckedUpdateManyWithoutAnalyzerPackageInput>
  }

  export type SourceArtifactScalarWhereInput = {
    AND?: SourceArtifactScalarWhereInput | SourceArtifactScalarWhereInput[]
    OR?: SourceArtifactScalarWhereInput[]
    NOT?: SourceArtifactScalarWhereInput | SourceArtifactScalarWhereInput[]
    id?: IntFilter<"SourceArtifact"> | number
    url?: StringFilter<"SourceArtifact"> | string
    packageId?: IntFilter<"SourceArtifact"> | number
  }

  export type VcsUpsertWithWhereUniqueWithoutAnalyzerPackageInput = {
    where: VcsWhereUniqueInput
    update: XOR<VcsUpdateWithoutAnalyzerPackageInput, VcsUncheckedUpdateWithoutAnalyzerPackageInput>
    create: XOR<VcsCreateWithoutAnalyzerPackageInput, VcsUncheckedCreateWithoutAnalyzerPackageInput>
  }

  export type VcsUpdateWithWhereUniqueWithoutAnalyzerPackageInput = {
    where: VcsWhereUniqueInput
    data: XOR<VcsUpdateWithoutAnalyzerPackageInput, VcsUncheckedUpdateWithoutAnalyzerPackageInput>
  }

  export type VcsUpdateManyWithWhereWithoutAnalyzerPackageInput = {
    where: VcsScalarWhereInput
    data: XOR<VcsUpdateManyMutationInput, VcsUncheckedUpdateManyWithoutAnalyzerPackageInput>
  }

  export type VcsScalarWhereInput = {
    AND?: VcsScalarWhereInput | VcsScalarWhereInput[]
    OR?: VcsScalarWhereInput[]
    NOT?: VcsScalarWhereInput | VcsScalarWhereInput[]
    id?: IntFilter<"Vcs"> | number
    type?: StringFilter<"Vcs"> | string
    url?: StringFilter<"Vcs"> | string
    revision?: StringFilter<"Vcs"> | string
    path?: StringFilter<"Vcs"> | string
    packageId?: IntFilter<"Vcs"> | number
  }

  export type VcsProcessedUpsertWithWhereUniqueWithoutAnalyzerPackageInput = {
    where: VcsProcessedWhereUniqueInput
    update: XOR<VcsProcessedUpdateWithoutAnalyzerPackageInput, VcsProcessedUncheckedUpdateWithoutAnalyzerPackageInput>
    create: XOR<VcsProcessedCreateWithoutAnalyzerPackageInput, VcsProcessedUncheckedCreateWithoutAnalyzerPackageInput>
  }

  export type VcsProcessedUpdateWithWhereUniqueWithoutAnalyzerPackageInput = {
    where: VcsProcessedWhereUniqueInput
    data: XOR<VcsProcessedUpdateWithoutAnalyzerPackageInput, VcsProcessedUncheckedUpdateWithoutAnalyzerPackageInput>
  }

  export type VcsProcessedUpdateManyWithWhereWithoutAnalyzerPackageInput = {
    where: VcsProcessedScalarWhereInput
    data: XOR<VcsProcessedUpdateManyMutationInput, VcsProcessedUncheckedUpdateManyWithoutAnalyzerPackageInput>
  }

  export type VcsProcessedScalarWhereInput = {
    AND?: VcsProcessedScalarWhereInput | VcsProcessedScalarWhereInput[]
    OR?: VcsProcessedScalarWhereInput[]
    NOT?: VcsProcessedScalarWhereInput | VcsProcessedScalarWhereInput[]
    id?: IntFilter<"VcsProcessed"> | number
    type?: StringFilter<"VcsProcessed"> | string
    url?: StringFilter<"VcsProcessed"> | string
    revision?: StringFilter<"VcsProcessed"> | string
    path?: StringFilter<"VcsProcessed"> | string
    packageId?: IntFilter<"VcsProcessed"> | number
  }

  export type AnalyzerPackageCreateWithoutAuthorsInput = {
    createdAt?: Date | string
    packId: string
    purl: string
    description: string
    homepageUrl: string
    analyzer: AnalyzerCreateNestedOneWithoutPackagesInput
    declaredLicenses?: DeclaredLicensesCreateNestedManyWithoutAnalyzerPackageInput
    declaredLicensesProcessed?: DeclaredLicensesProcessedCreateNestedManyWithoutAnalyzerPackageInput
    binaries?: BinaryArtifactCreateNestedManyWithoutAnalyzerPackageInput
    sources?: SourceArtifactCreateNestedManyWithoutAnalyzerPackageInput
    vcsList?: VcsCreateNestedManyWithoutAnalyzerPackageInput
    vcsProcessed?: VcsProcessedCreateNestedManyWithoutAnalyzerPackageInput
  }

  export type AnalyzerPackageUncheckedCreateWithoutAuthorsInput = {
    id?: number
    createdAt?: Date | string
    packId: string
    purl: string
    description: string
    homepageUrl: string
    analyzerId: number
    declaredLicenses?: DeclaredLicensesUncheckedCreateNestedManyWithoutAnalyzerPackageInput
    declaredLicensesProcessed?: DeclaredLicensesProcessedUncheckedCreateNestedManyWithoutAnalyzerPackageInput
    binaries?: BinaryArtifactUncheckedCreateNestedManyWithoutAnalyzerPackageInput
    sources?: SourceArtifactUncheckedCreateNestedManyWithoutAnalyzerPackageInput
    vcsList?: VcsUncheckedCreateNestedManyWithoutAnalyzerPackageInput
    vcsProcessed?: VcsProcessedUncheckedCreateNestedManyWithoutAnalyzerPackageInput
  }

  export type AnalyzerPackageCreateOrConnectWithoutAuthorsInput = {
    where: AnalyzerPackageWhereUniqueInput
    create: XOR<AnalyzerPackageCreateWithoutAuthorsInput, AnalyzerPackageUncheckedCreateWithoutAuthorsInput>
  }

  export type AnalyzerPackageUpsertWithoutAuthorsInput = {
    update: XOR<AnalyzerPackageUpdateWithoutAuthorsInput, AnalyzerPackageUncheckedUpdateWithoutAuthorsInput>
    create: XOR<AnalyzerPackageCreateWithoutAuthorsInput, AnalyzerPackageUncheckedCreateWithoutAuthorsInput>
    where?: AnalyzerPackageWhereInput
  }

  export type AnalyzerPackageUpdateToOneWithWhereWithoutAuthorsInput = {
    where?: AnalyzerPackageWhereInput
    data: XOR<AnalyzerPackageUpdateWithoutAuthorsInput, AnalyzerPackageUncheckedUpdateWithoutAuthorsInput>
  }

  export type AnalyzerPackageUpdateWithoutAuthorsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packId?: StringFieldUpdateOperationsInput | string
    purl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    homepageUrl?: StringFieldUpdateOperationsInput | string
    analyzer?: AnalyzerUpdateOneRequiredWithoutPackagesNestedInput
    declaredLicenses?: DeclaredLicensesUpdateManyWithoutAnalyzerPackageNestedInput
    declaredLicensesProcessed?: DeclaredLicensesProcessedUpdateManyWithoutAnalyzerPackageNestedInput
    binaries?: BinaryArtifactUpdateManyWithoutAnalyzerPackageNestedInput
    sources?: SourceArtifactUpdateManyWithoutAnalyzerPackageNestedInput
    vcsList?: VcsUpdateManyWithoutAnalyzerPackageNestedInput
    vcsProcessed?: VcsProcessedUpdateManyWithoutAnalyzerPackageNestedInput
  }

  export type AnalyzerPackageUncheckedUpdateWithoutAuthorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packId?: StringFieldUpdateOperationsInput | string
    purl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    homepageUrl?: StringFieldUpdateOperationsInput | string
    analyzerId?: IntFieldUpdateOperationsInput | number
    declaredLicenses?: DeclaredLicensesUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
    declaredLicensesProcessed?: DeclaredLicensesProcessedUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
    binaries?: BinaryArtifactUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
    sources?: SourceArtifactUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
    vcsList?: VcsUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
    vcsProcessed?: VcsProcessedUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
  }

  export type AnalyzerPackageCreateWithoutDeclaredLicensesInput = {
    createdAt?: Date | string
    packId: string
    purl: string
    description: string
    homepageUrl: string
    analyzer: AnalyzerCreateNestedOneWithoutPackagesInput
    authors?: PackageAuthorCreateNestedManyWithoutAnalyzerPackageInput
    declaredLicensesProcessed?: DeclaredLicensesProcessedCreateNestedManyWithoutAnalyzerPackageInput
    binaries?: BinaryArtifactCreateNestedManyWithoutAnalyzerPackageInput
    sources?: SourceArtifactCreateNestedManyWithoutAnalyzerPackageInput
    vcsList?: VcsCreateNestedManyWithoutAnalyzerPackageInput
    vcsProcessed?: VcsProcessedCreateNestedManyWithoutAnalyzerPackageInput
  }

  export type AnalyzerPackageUncheckedCreateWithoutDeclaredLicensesInput = {
    id?: number
    createdAt?: Date | string
    packId: string
    purl: string
    description: string
    homepageUrl: string
    analyzerId: number
    authors?: PackageAuthorUncheckedCreateNestedManyWithoutAnalyzerPackageInput
    declaredLicensesProcessed?: DeclaredLicensesProcessedUncheckedCreateNestedManyWithoutAnalyzerPackageInput
    binaries?: BinaryArtifactUncheckedCreateNestedManyWithoutAnalyzerPackageInput
    sources?: SourceArtifactUncheckedCreateNestedManyWithoutAnalyzerPackageInput
    vcsList?: VcsUncheckedCreateNestedManyWithoutAnalyzerPackageInput
    vcsProcessed?: VcsProcessedUncheckedCreateNestedManyWithoutAnalyzerPackageInput
  }

  export type AnalyzerPackageCreateOrConnectWithoutDeclaredLicensesInput = {
    where: AnalyzerPackageWhereUniqueInput
    create: XOR<AnalyzerPackageCreateWithoutDeclaredLicensesInput, AnalyzerPackageUncheckedCreateWithoutDeclaredLicensesInput>
  }

  export type AnalyzerPackageUpsertWithoutDeclaredLicensesInput = {
    update: XOR<AnalyzerPackageUpdateWithoutDeclaredLicensesInput, AnalyzerPackageUncheckedUpdateWithoutDeclaredLicensesInput>
    create: XOR<AnalyzerPackageCreateWithoutDeclaredLicensesInput, AnalyzerPackageUncheckedCreateWithoutDeclaredLicensesInput>
    where?: AnalyzerPackageWhereInput
  }

  export type AnalyzerPackageUpdateToOneWithWhereWithoutDeclaredLicensesInput = {
    where?: AnalyzerPackageWhereInput
    data: XOR<AnalyzerPackageUpdateWithoutDeclaredLicensesInput, AnalyzerPackageUncheckedUpdateWithoutDeclaredLicensesInput>
  }

  export type AnalyzerPackageUpdateWithoutDeclaredLicensesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packId?: StringFieldUpdateOperationsInput | string
    purl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    homepageUrl?: StringFieldUpdateOperationsInput | string
    analyzer?: AnalyzerUpdateOneRequiredWithoutPackagesNestedInput
    authors?: PackageAuthorUpdateManyWithoutAnalyzerPackageNestedInput
    declaredLicensesProcessed?: DeclaredLicensesProcessedUpdateManyWithoutAnalyzerPackageNestedInput
    binaries?: BinaryArtifactUpdateManyWithoutAnalyzerPackageNestedInput
    sources?: SourceArtifactUpdateManyWithoutAnalyzerPackageNestedInput
    vcsList?: VcsUpdateManyWithoutAnalyzerPackageNestedInput
    vcsProcessed?: VcsProcessedUpdateManyWithoutAnalyzerPackageNestedInput
  }

  export type AnalyzerPackageUncheckedUpdateWithoutDeclaredLicensesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packId?: StringFieldUpdateOperationsInput | string
    purl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    homepageUrl?: StringFieldUpdateOperationsInput | string
    analyzerId?: IntFieldUpdateOperationsInput | number
    authors?: PackageAuthorUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
    declaredLicensesProcessed?: DeclaredLicensesProcessedUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
    binaries?: BinaryArtifactUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
    sources?: SourceArtifactUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
    vcsList?: VcsUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
    vcsProcessed?: VcsProcessedUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
  }

  export type AnalyzerPackageCreateWithoutDeclaredLicensesProcessedInput = {
    createdAt?: Date | string
    packId: string
    purl: string
    description: string
    homepageUrl: string
    analyzer: AnalyzerCreateNestedOneWithoutPackagesInput
    authors?: PackageAuthorCreateNestedManyWithoutAnalyzerPackageInput
    declaredLicenses?: DeclaredLicensesCreateNestedManyWithoutAnalyzerPackageInput
    binaries?: BinaryArtifactCreateNestedManyWithoutAnalyzerPackageInput
    sources?: SourceArtifactCreateNestedManyWithoutAnalyzerPackageInput
    vcsList?: VcsCreateNestedManyWithoutAnalyzerPackageInput
    vcsProcessed?: VcsProcessedCreateNestedManyWithoutAnalyzerPackageInput
  }

  export type AnalyzerPackageUncheckedCreateWithoutDeclaredLicensesProcessedInput = {
    id?: number
    createdAt?: Date | string
    packId: string
    purl: string
    description: string
    homepageUrl: string
    analyzerId: number
    authors?: PackageAuthorUncheckedCreateNestedManyWithoutAnalyzerPackageInput
    declaredLicenses?: DeclaredLicensesUncheckedCreateNestedManyWithoutAnalyzerPackageInput
    binaries?: BinaryArtifactUncheckedCreateNestedManyWithoutAnalyzerPackageInput
    sources?: SourceArtifactUncheckedCreateNestedManyWithoutAnalyzerPackageInput
    vcsList?: VcsUncheckedCreateNestedManyWithoutAnalyzerPackageInput
    vcsProcessed?: VcsProcessedUncheckedCreateNestedManyWithoutAnalyzerPackageInput
  }

  export type AnalyzerPackageCreateOrConnectWithoutDeclaredLicensesProcessedInput = {
    where: AnalyzerPackageWhereUniqueInput
    create: XOR<AnalyzerPackageCreateWithoutDeclaredLicensesProcessedInput, AnalyzerPackageUncheckedCreateWithoutDeclaredLicensesProcessedInput>
  }

  export type AnalyzerPackageUpsertWithoutDeclaredLicensesProcessedInput = {
    update: XOR<AnalyzerPackageUpdateWithoutDeclaredLicensesProcessedInput, AnalyzerPackageUncheckedUpdateWithoutDeclaredLicensesProcessedInput>
    create: XOR<AnalyzerPackageCreateWithoutDeclaredLicensesProcessedInput, AnalyzerPackageUncheckedCreateWithoutDeclaredLicensesProcessedInput>
    where?: AnalyzerPackageWhereInput
  }

  export type AnalyzerPackageUpdateToOneWithWhereWithoutDeclaredLicensesProcessedInput = {
    where?: AnalyzerPackageWhereInput
    data: XOR<AnalyzerPackageUpdateWithoutDeclaredLicensesProcessedInput, AnalyzerPackageUncheckedUpdateWithoutDeclaredLicensesProcessedInput>
  }

  export type AnalyzerPackageUpdateWithoutDeclaredLicensesProcessedInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packId?: StringFieldUpdateOperationsInput | string
    purl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    homepageUrl?: StringFieldUpdateOperationsInput | string
    analyzer?: AnalyzerUpdateOneRequiredWithoutPackagesNestedInput
    authors?: PackageAuthorUpdateManyWithoutAnalyzerPackageNestedInput
    declaredLicenses?: DeclaredLicensesUpdateManyWithoutAnalyzerPackageNestedInput
    binaries?: BinaryArtifactUpdateManyWithoutAnalyzerPackageNestedInput
    sources?: SourceArtifactUpdateManyWithoutAnalyzerPackageNestedInput
    vcsList?: VcsUpdateManyWithoutAnalyzerPackageNestedInput
    vcsProcessed?: VcsProcessedUpdateManyWithoutAnalyzerPackageNestedInput
  }

  export type AnalyzerPackageUncheckedUpdateWithoutDeclaredLicensesProcessedInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packId?: StringFieldUpdateOperationsInput | string
    purl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    homepageUrl?: StringFieldUpdateOperationsInput | string
    analyzerId?: IntFieldUpdateOperationsInput | number
    authors?: PackageAuthorUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
    declaredLicenses?: DeclaredLicensesUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
    binaries?: BinaryArtifactUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
    sources?: SourceArtifactUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
    vcsList?: VcsUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
    vcsProcessed?: VcsProcessedUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
  }

  export type AnalyzerPackageCreateWithoutBinariesInput = {
    createdAt?: Date | string
    packId: string
    purl: string
    description: string
    homepageUrl: string
    analyzer: AnalyzerCreateNestedOneWithoutPackagesInput
    authors?: PackageAuthorCreateNestedManyWithoutAnalyzerPackageInput
    declaredLicenses?: DeclaredLicensesCreateNestedManyWithoutAnalyzerPackageInput
    declaredLicensesProcessed?: DeclaredLicensesProcessedCreateNestedManyWithoutAnalyzerPackageInput
    sources?: SourceArtifactCreateNestedManyWithoutAnalyzerPackageInput
    vcsList?: VcsCreateNestedManyWithoutAnalyzerPackageInput
    vcsProcessed?: VcsProcessedCreateNestedManyWithoutAnalyzerPackageInput
  }

  export type AnalyzerPackageUncheckedCreateWithoutBinariesInput = {
    id?: number
    createdAt?: Date | string
    packId: string
    purl: string
    description: string
    homepageUrl: string
    analyzerId: number
    authors?: PackageAuthorUncheckedCreateNestedManyWithoutAnalyzerPackageInput
    declaredLicenses?: DeclaredLicensesUncheckedCreateNestedManyWithoutAnalyzerPackageInput
    declaredLicensesProcessed?: DeclaredLicensesProcessedUncheckedCreateNestedManyWithoutAnalyzerPackageInput
    sources?: SourceArtifactUncheckedCreateNestedManyWithoutAnalyzerPackageInput
    vcsList?: VcsUncheckedCreateNestedManyWithoutAnalyzerPackageInput
    vcsProcessed?: VcsProcessedUncheckedCreateNestedManyWithoutAnalyzerPackageInput
  }

  export type AnalyzerPackageCreateOrConnectWithoutBinariesInput = {
    where: AnalyzerPackageWhereUniqueInput
    create: XOR<AnalyzerPackageCreateWithoutBinariesInput, AnalyzerPackageUncheckedCreateWithoutBinariesInput>
  }

  export type AnalyzerPackageUpsertWithoutBinariesInput = {
    update: XOR<AnalyzerPackageUpdateWithoutBinariesInput, AnalyzerPackageUncheckedUpdateWithoutBinariesInput>
    create: XOR<AnalyzerPackageCreateWithoutBinariesInput, AnalyzerPackageUncheckedCreateWithoutBinariesInput>
    where?: AnalyzerPackageWhereInput
  }

  export type AnalyzerPackageUpdateToOneWithWhereWithoutBinariesInput = {
    where?: AnalyzerPackageWhereInput
    data: XOR<AnalyzerPackageUpdateWithoutBinariesInput, AnalyzerPackageUncheckedUpdateWithoutBinariesInput>
  }

  export type AnalyzerPackageUpdateWithoutBinariesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packId?: StringFieldUpdateOperationsInput | string
    purl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    homepageUrl?: StringFieldUpdateOperationsInput | string
    analyzer?: AnalyzerUpdateOneRequiredWithoutPackagesNestedInput
    authors?: PackageAuthorUpdateManyWithoutAnalyzerPackageNestedInput
    declaredLicenses?: DeclaredLicensesUpdateManyWithoutAnalyzerPackageNestedInput
    declaredLicensesProcessed?: DeclaredLicensesProcessedUpdateManyWithoutAnalyzerPackageNestedInput
    sources?: SourceArtifactUpdateManyWithoutAnalyzerPackageNestedInput
    vcsList?: VcsUpdateManyWithoutAnalyzerPackageNestedInput
    vcsProcessed?: VcsProcessedUpdateManyWithoutAnalyzerPackageNestedInput
  }

  export type AnalyzerPackageUncheckedUpdateWithoutBinariesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packId?: StringFieldUpdateOperationsInput | string
    purl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    homepageUrl?: StringFieldUpdateOperationsInput | string
    analyzerId?: IntFieldUpdateOperationsInput | number
    authors?: PackageAuthorUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
    declaredLicenses?: DeclaredLicensesUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
    declaredLicensesProcessed?: DeclaredLicensesProcessedUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
    sources?: SourceArtifactUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
    vcsList?: VcsUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
    vcsProcessed?: VcsProcessedUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
  }

  export type AnalyzerPackageCreateWithoutSourcesInput = {
    createdAt?: Date | string
    packId: string
    purl: string
    description: string
    homepageUrl: string
    analyzer: AnalyzerCreateNestedOneWithoutPackagesInput
    authors?: PackageAuthorCreateNestedManyWithoutAnalyzerPackageInput
    declaredLicenses?: DeclaredLicensesCreateNestedManyWithoutAnalyzerPackageInput
    declaredLicensesProcessed?: DeclaredLicensesProcessedCreateNestedManyWithoutAnalyzerPackageInput
    binaries?: BinaryArtifactCreateNestedManyWithoutAnalyzerPackageInput
    vcsList?: VcsCreateNestedManyWithoutAnalyzerPackageInput
    vcsProcessed?: VcsProcessedCreateNestedManyWithoutAnalyzerPackageInput
  }

  export type AnalyzerPackageUncheckedCreateWithoutSourcesInput = {
    id?: number
    createdAt?: Date | string
    packId: string
    purl: string
    description: string
    homepageUrl: string
    analyzerId: number
    authors?: PackageAuthorUncheckedCreateNestedManyWithoutAnalyzerPackageInput
    declaredLicenses?: DeclaredLicensesUncheckedCreateNestedManyWithoutAnalyzerPackageInput
    declaredLicensesProcessed?: DeclaredLicensesProcessedUncheckedCreateNestedManyWithoutAnalyzerPackageInput
    binaries?: BinaryArtifactUncheckedCreateNestedManyWithoutAnalyzerPackageInput
    vcsList?: VcsUncheckedCreateNestedManyWithoutAnalyzerPackageInput
    vcsProcessed?: VcsProcessedUncheckedCreateNestedManyWithoutAnalyzerPackageInput
  }

  export type AnalyzerPackageCreateOrConnectWithoutSourcesInput = {
    where: AnalyzerPackageWhereUniqueInput
    create: XOR<AnalyzerPackageCreateWithoutSourcesInput, AnalyzerPackageUncheckedCreateWithoutSourcesInput>
  }

  export type AnalyzerPackageUpsertWithoutSourcesInput = {
    update: XOR<AnalyzerPackageUpdateWithoutSourcesInput, AnalyzerPackageUncheckedUpdateWithoutSourcesInput>
    create: XOR<AnalyzerPackageCreateWithoutSourcesInput, AnalyzerPackageUncheckedCreateWithoutSourcesInput>
    where?: AnalyzerPackageWhereInput
  }

  export type AnalyzerPackageUpdateToOneWithWhereWithoutSourcesInput = {
    where?: AnalyzerPackageWhereInput
    data: XOR<AnalyzerPackageUpdateWithoutSourcesInput, AnalyzerPackageUncheckedUpdateWithoutSourcesInput>
  }

  export type AnalyzerPackageUpdateWithoutSourcesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packId?: StringFieldUpdateOperationsInput | string
    purl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    homepageUrl?: StringFieldUpdateOperationsInput | string
    analyzer?: AnalyzerUpdateOneRequiredWithoutPackagesNestedInput
    authors?: PackageAuthorUpdateManyWithoutAnalyzerPackageNestedInput
    declaredLicenses?: DeclaredLicensesUpdateManyWithoutAnalyzerPackageNestedInput
    declaredLicensesProcessed?: DeclaredLicensesProcessedUpdateManyWithoutAnalyzerPackageNestedInput
    binaries?: BinaryArtifactUpdateManyWithoutAnalyzerPackageNestedInput
    vcsList?: VcsUpdateManyWithoutAnalyzerPackageNestedInput
    vcsProcessed?: VcsProcessedUpdateManyWithoutAnalyzerPackageNestedInput
  }

  export type AnalyzerPackageUncheckedUpdateWithoutSourcesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packId?: StringFieldUpdateOperationsInput | string
    purl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    homepageUrl?: StringFieldUpdateOperationsInput | string
    analyzerId?: IntFieldUpdateOperationsInput | number
    authors?: PackageAuthorUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
    declaredLicenses?: DeclaredLicensesUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
    declaredLicensesProcessed?: DeclaredLicensesProcessedUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
    binaries?: BinaryArtifactUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
    vcsList?: VcsUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
    vcsProcessed?: VcsProcessedUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
  }

  export type AnalyzerPackageCreateWithoutVcsListInput = {
    createdAt?: Date | string
    packId: string
    purl: string
    description: string
    homepageUrl: string
    analyzer: AnalyzerCreateNestedOneWithoutPackagesInput
    authors?: PackageAuthorCreateNestedManyWithoutAnalyzerPackageInput
    declaredLicenses?: DeclaredLicensesCreateNestedManyWithoutAnalyzerPackageInput
    declaredLicensesProcessed?: DeclaredLicensesProcessedCreateNestedManyWithoutAnalyzerPackageInput
    binaries?: BinaryArtifactCreateNestedManyWithoutAnalyzerPackageInput
    sources?: SourceArtifactCreateNestedManyWithoutAnalyzerPackageInput
    vcsProcessed?: VcsProcessedCreateNestedManyWithoutAnalyzerPackageInput
  }

  export type AnalyzerPackageUncheckedCreateWithoutVcsListInput = {
    id?: number
    createdAt?: Date | string
    packId: string
    purl: string
    description: string
    homepageUrl: string
    analyzerId: number
    authors?: PackageAuthorUncheckedCreateNestedManyWithoutAnalyzerPackageInput
    declaredLicenses?: DeclaredLicensesUncheckedCreateNestedManyWithoutAnalyzerPackageInput
    declaredLicensesProcessed?: DeclaredLicensesProcessedUncheckedCreateNestedManyWithoutAnalyzerPackageInput
    binaries?: BinaryArtifactUncheckedCreateNestedManyWithoutAnalyzerPackageInput
    sources?: SourceArtifactUncheckedCreateNestedManyWithoutAnalyzerPackageInput
    vcsProcessed?: VcsProcessedUncheckedCreateNestedManyWithoutAnalyzerPackageInput
  }

  export type AnalyzerPackageCreateOrConnectWithoutVcsListInput = {
    where: AnalyzerPackageWhereUniqueInput
    create: XOR<AnalyzerPackageCreateWithoutVcsListInput, AnalyzerPackageUncheckedCreateWithoutVcsListInput>
  }

  export type AnalyzerPackageUpsertWithoutVcsListInput = {
    update: XOR<AnalyzerPackageUpdateWithoutVcsListInput, AnalyzerPackageUncheckedUpdateWithoutVcsListInput>
    create: XOR<AnalyzerPackageCreateWithoutVcsListInput, AnalyzerPackageUncheckedCreateWithoutVcsListInput>
    where?: AnalyzerPackageWhereInput
  }

  export type AnalyzerPackageUpdateToOneWithWhereWithoutVcsListInput = {
    where?: AnalyzerPackageWhereInput
    data: XOR<AnalyzerPackageUpdateWithoutVcsListInput, AnalyzerPackageUncheckedUpdateWithoutVcsListInput>
  }

  export type AnalyzerPackageUpdateWithoutVcsListInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packId?: StringFieldUpdateOperationsInput | string
    purl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    homepageUrl?: StringFieldUpdateOperationsInput | string
    analyzer?: AnalyzerUpdateOneRequiredWithoutPackagesNestedInput
    authors?: PackageAuthorUpdateManyWithoutAnalyzerPackageNestedInput
    declaredLicenses?: DeclaredLicensesUpdateManyWithoutAnalyzerPackageNestedInput
    declaredLicensesProcessed?: DeclaredLicensesProcessedUpdateManyWithoutAnalyzerPackageNestedInput
    binaries?: BinaryArtifactUpdateManyWithoutAnalyzerPackageNestedInput
    sources?: SourceArtifactUpdateManyWithoutAnalyzerPackageNestedInput
    vcsProcessed?: VcsProcessedUpdateManyWithoutAnalyzerPackageNestedInput
  }

  export type AnalyzerPackageUncheckedUpdateWithoutVcsListInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packId?: StringFieldUpdateOperationsInput | string
    purl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    homepageUrl?: StringFieldUpdateOperationsInput | string
    analyzerId?: IntFieldUpdateOperationsInput | number
    authors?: PackageAuthorUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
    declaredLicenses?: DeclaredLicensesUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
    declaredLicensesProcessed?: DeclaredLicensesProcessedUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
    binaries?: BinaryArtifactUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
    sources?: SourceArtifactUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
    vcsProcessed?: VcsProcessedUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
  }

  export type AnalyzerPackageCreateWithoutVcsProcessedInput = {
    createdAt?: Date | string
    packId: string
    purl: string
    description: string
    homepageUrl: string
    analyzer: AnalyzerCreateNestedOneWithoutPackagesInput
    authors?: PackageAuthorCreateNestedManyWithoutAnalyzerPackageInput
    declaredLicenses?: DeclaredLicensesCreateNestedManyWithoutAnalyzerPackageInput
    declaredLicensesProcessed?: DeclaredLicensesProcessedCreateNestedManyWithoutAnalyzerPackageInput
    binaries?: BinaryArtifactCreateNestedManyWithoutAnalyzerPackageInput
    sources?: SourceArtifactCreateNestedManyWithoutAnalyzerPackageInput
    vcsList?: VcsCreateNestedManyWithoutAnalyzerPackageInput
  }

  export type AnalyzerPackageUncheckedCreateWithoutVcsProcessedInput = {
    id?: number
    createdAt?: Date | string
    packId: string
    purl: string
    description: string
    homepageUrl: string
    analyzerId: number
    authors?: PackageAuthorUncheckedCreateNestedManyWithoutAnalyzerPackageInput
    declaredLicenses?: DeclaredLicensesUncheckedCreateNestedManyWithoutAnalyzerPackageInput
    declaredLicensesProcessed?: DeclaredLicensesProcessedUncheckedCreateNestedManyWithoutAnalyzerPackageInput
    binaries?: BinaryArtifactUncheckedCreateNestedManyWithoutAnalyzerPackageInput
    sources?: SourceArtifactUncheckedCreateNestedManyWithoutAnalyzerPackageInput
    vcsList?: VcsUncheckedCreateNestedManyWithoutAnalyzerPackageInput
  }

  export type AnalyzerPackageCreateOrConnectWithoutVcsProcessedInput = {
    where: AnalyzerPackageWhereUniqueInput
    create: XOR<AnalyzerPackageCreateWithoutVcsProcessedInput, AnalyzerPackageUncheckedCreateWithoutVcsProcessedInput>
  }

  export type AnalyzerPackageUpsertWithoutVcsProcessedInput = {
    update: XOR<AnalyzerPackageUpdateWithoutVcsProcessedInput, AnalyzerPackageUncheckedUpdateWithoutVcsProcessedInput>
    create: XOR<AnalyzerPackageCreateWithoutVcsProcessedInput, AnalyzerPackageUncheckedCreateWithoutVcsProcessedInput>
    where?: AnalyzerPackageWhereInput
  }

  export type AnalyzerPackageUpdateToOneWithWhereWithoutVcsProcessedInput = {
    where?: AnalyzerPackageWhereInput
    data: XOR<AnalyzerPackageUpdateWithoutVcsProcessedInput, AnalyzerPackageUncheckedUpdateWithoutVcsProcessedInput>
  }

  export type AnalyzerPackageUpdateWithoutVcsProcessedInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packId?: StringFieldUpdateOperationsInput | string
    purl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    homepageUrl?: StringFieldUpdateOperationsInput | string
    analyzer?: AnalyzerUpdateOneRequiredWithoutPackagesNestedInput
    authors?: PackageAuthorUpdateManyWithoutAnalyzerPackageNestedInput
    declaredLicenses?: DeclaredLicensesUpdateManyWithoutAnalyzerPackageNestedInput
    declaredLicensesProcessed?: DeclaredLicensesProcessedUpdateManyWithoutAnalyzerPackageNestedInput
    binaries?: BinaryArtifactUpdateManyWithoutAnalyzerPackageNestedInput
    sources?: SourceArtifactUpdateManyWithoutAnalyzerPackageNestedInput
    vcsList?: VcsUpdateManyWithoutAnalyzerPackageNestedInput
  }

  export type AnalyzerPackageUncheckedUpdateWithoutVcsProcessedInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packId?: StringFieldUpdateOperationsInput | string
    purl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    homepageUrl?: StringFieldUpdateOperationsInput | string
    analyzerId?: IntFieldUpdateOperationsInput | number
    authors?: PackageAuthorUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
    declaredLicenses?: DeclaredLicensesUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
    declaredLicensesProcessed?: DeclaredLicensesProcessedUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
    binaries?: BinaryArtifactUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
    sources?: SourceArtifactUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
    vcsList?: VcsUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
  }

  export type ScanCreateWithoutScannerInput = {
    createdAt?: Date | string
    gitRunId: string
    project: ProjectCreateNestedOneWithoutScansInput
    analyzer?: AnalyzerCreateNestedOneWithoutScanInput
  }

  export type ScanUncheckedCreateWithoutScannerInput = {
    id?: number
    createdAt?: Date | string
    gitRunId: string
    projectId: string
    analyzer?: AnalyzerUncheckedCreateNestedOneWithoutScanInput
  }

  export type ScanCreateOrConnectWithoutScannerInput = {
    where: ScanWhereUniqueInput
    create: XOR<ScanCreateWithoutScannerInput, ScanUncheckedCreateWithoutScannerInput>
  }

  export type LicensesCreateWithoutScannerInput = {
    createdAt?: Date | string
    licenseName: string
    path: string
    startLine: number
    endLine: number
    score: number
  }

  export type LicensesUncheckedCreateWithoutScannerInput = {
    id?: number
    createdAt?: Date | string
    licenseName: string
    path: string
    startLine: number
    endLine: number
    score: number
  }

  export type LicensesCreateOrConnectWithoutScannerInput = {
    where: LicensesWhereUniqueInput
    create: XOR<LicensesCreateWithoutScannerInput, LicensesUncheckedCreateWithoutScannerInput>
  }

  export type LicensesCreateManyScannerInputEnvelope = {
    data: LicensesCreateManyScannerInput | LicensesCreateManyScannerInput[]
  }

  export type CopyrightsCreateWithoutScannerInput = {
    createdAt?: Date | string
    statement: string
    path: string
    startLine: number
    endLine: number
  }

  export type CopyrightsUncheckedCreateWithoutScannerInput = {
    id?: number
    createdAt?: Date | string
    statement: string
    path: string
    startLine: number
    endLine: number
  }

  export type CopyrightsCreateOrConnectWithoutScannerInput = {
    where: CopyrightsWhereUniqueInput
    create: XOR<CopyrightsCreateWithoutScannerInput, CopyrightsUncheckedCreateWithoutScannerInput>
  }

  export type CopyrightsCreateManyScannerInputEnvelope = {
    data: CopyrightsCreateManyScannerInput | CopyrightsCreateManyScannerInput[]
  }

  export type ScanUpsertWithoutScannerInput = {
    update: XOR<ScanUpdateWithoutScannerInput, ScanUncheckedUpdateWithoutScannerInput>
    create: XOR<ScanCreateWithoutScannerInput, ScanUncheckedCreateWithoutScannerInput>
    where?: ScanWhereInput
  }

  export type ScanUpdateToOneWithWhereWithoutScannerInput = {
    where?: ScanWhereInput
    data: XOR<ScanUpdateWithoutScannerInput, ScanUncheckedUpdateWithoutScannerInput>
  }

  export type ScanUpdateWithoutScannerInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gitRunId?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneRequiredWithoutScansNestedInput
    analyzer?: AnalyzerUpdateOneWithoutScanNestedInput
  }

  export type ScanUncheckedUpdateWithoutScannerInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gitRunId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    analyzer?: AnalyzerUncheckedUpdateOneWithoutScanNestedInput
  }

  export type LicensesUpsertWithWhereUniqueWithoutScannerInput = {
    where: LicensesWhereUniqueInput
    update: XOR<LicensesUpdateWithoutScannerInput, LicensesUncheckedUpdateWithoutScannerInput>
    create: XOR<LicensesCreateWithoutScannerInput, LicensesUncheckedCreateWithoutScannerInput>
  }

  export type LicensesUpdateWithWhereUniqueWithoutScannerInput = {
    where: LicensesWhereUniqueInput
    data: XOR<LicensesUpdateWithoutScannerInput, LicensesUncheckedUpdateWithoutScannerInput>
  }

  export type LicensesUpdateManyWithWhereWithoutScannerInput = {
    where: LicensesScalarWhereInput
    data: XOR<LicensesUpdateManyMutationInput, LicensesUncheckedUpdateManyWithoutScannerInput>
  }

  export type LicensesScalarWhereInput = {
    AND?: LicensesScalarWhereInput | LicensesScalarWhereInput[]
    OR?: LicensesScalarWhereInput[]
    NOT?: LicensesScalarWhereInput | LicensesScalarWhereInput[]
    id?: IntFilter<"Licenses"> | number
    createdAt?: DateTimeFilter<"Licenses"> | Date | string
    licenseName?: StringFilter<"Licenses"> | string
    path?: StringFilter<"Licenses"> | string
    startLine?: IntFilter<"Licenses"> | number
    endLine?: IntFilter<"Licenses"> | number
    score?: FloatFilter<"Licenses"> | number
    scannerId?: IntFilter<"Licenses"> | number
  }

  export type CopyrightsUpsertWithWhereUniqueWithoutScannerInput = {
    where: CopyrightsWhereUniqueInput
    update: XOR<CopyrightsUpdateWithoutScannerInput, CopyrightsUncheckedUpdateWithoutScannerInput>
    create: XOR<CopyrightsCreateWithoutScannerInput, CopyrightsUncheckedCreateWithoutScannerInput>
  }

  export type CopyrightsUpdateWithWhereUniqueWithoutScannerInput = {
    where: CopyrightsWhereUniqueInput
    data: XOR<CopyrightsUpdateWithoutScannerInput, CopyrightsUncheckedUpdateWithoutScannerInput>
  }

  export type CopyrightsUpdateManyWithWhereWithoutScannerInput = {
    where: CopyrightsScalarWhereInput
    data: XOR<CopyrightsUpdateManyMutationInput, CopyrightsUncheckedUpdateManyWithoutScannerInput>
  }

  export type CopyrightsScalarWhereInput = {
    AND?: CopyrightsScalarWhereInput | CopyrightsScalarWhereInput[]
    OR?: CopyrightsScalarWhereInput[]
    NOT?: CopyrightsScalarWhereInput | CopyrightsScalarWhereInput[]
    id?: IntFilter<"Copyrights"> | number
    createdAt?: DateTimeFilter<"Copyrights"> | Date | string
    statement?: StringFilter<"Copyrights"> | string
    path?: StringFilter<"Copyrights"> | string
    startLine?: IntFilter<"Copyrights"> | number
    endLine?: IntFilter<"Copyrights"> | number
    scannerId?: IntFilter<"Copyrights"> | number
  }

  export type ScannerCreateWithoutLicensesInput = {
    createdAt?: Date | string
    scan: ScanCreateNestedOneWithoutScannerInput
    copyrights?: CopyrightsCreateNestedManyWithoutScannerInput
  }

  export type ScannerUncheckedCreateWithoutLicensesInput = {
    id?: number
    createdAt?: Date | string
    scanId: number
    copyrights?: CopyrightsUncheckedCreateNestedManyWithoutScannerInput
  }

  export type ScannerCreateOrConnectWithoutLicensesInput = {
    where: ScannerWhereUniqueInput
    create: XOR<ScannerCreateWithoutLicensesInput, ScannerUncheckedCreateWithoutLicensesInput>
  }

  export type ScannerUpsertWithoutLicensesInput = {
    update: XOR<ScannerUpdateWithoutLicensesInput, ScannerUncheckedUpdateWithoutLicensesInput>
    create: XOR<ScannerCreateWithoutLicensesInput, ScannerUncheckedCreateWithoutLicensesInput>
    where?: ScannerWhereInput
  }

  export type ScannerUpdateToOneWithWhereWithoutLicensesInput = {
    where?: ScannerWhereInput
    data: XOR<ScannerUpdateWithoutLicensesInput, ScannerUncheckedUpdateWithoutLicensesInput>
  }

  export type ScannerUpdateWithoutLicensesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scan?: ScanUpdateOneRequiredWithoutScannerNestedInput
    copyrights?: CopyrightsUpdateManyWithoutScannerNestedInput
  }

  export type ScannerUncheckedUpdateWithoutLicensesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scanId?: IntFieldUpdateOperationsInput | number
    copyrights?: CopyrightsUncheckedUpdateManyWithoutScannerNestedInput
  }

  export type ScannerCreateWithoutCopyrightsInput = {
    createdAt?: Date | string
    scan: ScanCreateNestedOneWithoutScannerInput
    licenses?: LicensesCreateNestedManyWithoutScannerInput
  }

  export type ScannerUncheckedCreateWithoutCopyrightsInput = {
    id?: number
    createdAt?: Date | string
    scanId: number
    licenses?: LicensesUncheckedCreateNestedManyWithoutScannerInput
  }

  export type ScannerCreateOrConnectWithoutCopyrightsInput = {
    where: ScannerWhereUniqueInput
    create: XOR<ScannerCreateWithoutCopyrightsInput, ScannerUncheckedCreateWithoutCopyrightsInput>
  }

  export type ScannerUpsertWithoutCopyrightsInput = {
    update: XOR<ScannerUpdateWithoutCopyrightsInput, ScannerUncheckedUpdateWithoutCopyrightsInput>
    create: XOR<ScannerCreateWithoutCopyrightsInput, ScannerUncheckedCreateWithoutCopyrightsInput>
    where?: ScannerWhereInput
  }

  export type ScannerUpdateToOneWithWhereWithoutCopyrightsInput = {
    where?: ScannerWhereInput
    data: XOR<ScannerUpdateWithoutCopyrightsInput, ScannerUncheckedUpdateWithoutCopyrightsInput>
  }

  export type ScannerUpdateWithoutCopyrightsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scan?: ScanUpdateOneRequiredWithoutScannerNestedInput
    licenses?: LicensesUpdateManyWithoutScannerNestedInput
  }

  export type ScannerUncheckedUpdateWithoutCopyrightsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scanId?: IntFieldUpdateOperationsInput | number
    licenses?: LicensesUncheckedUpdateManyWithoutScannerNestedInput
  }

  export type ProjectCreateManyUserInput = {
    id: string
    name: string
    createdAt?: Date | string
  }

  export type ProjectUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scans?: ScanUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scans?: ScanUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScanCreateManyProjectInput = {
    createdAt?: Date | string
    gitRunId: string
  }

  export type ScanUpdateWithoutProjectInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gitRunId?: StringFieldUpdateOperationsInput | string
    analyzer?: AnalyzerUpdateOneWithoutScanNestedInput
    scanner?: ScannerUpdateOneWithoutScanNestedInput
  }

  export type ScanUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gitRunId?: StringFieldUpdateOperationsInput | string
    analyzer?: AnalyzerUncheckedUpdateOneWithoutScanNestedInput
    scanner?: ScannerUncheckedUpdateOneWithoutScanNestedInput
  }

  export type ScanUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gitRunId?: StringFieldUpdateOperationsInput | string
  }

  export type AnalyzerPackageCreateManyAnalyzerInput = {
    createdAt?: Date | string
    packId: string
    purl: string
    description: string
    homepageUrl: string
  }

  export type AnalyzerPackageUpdateWithoutAnalyzerInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packId?: StringFieldUpdateOperationsInput | string
    purl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    homepageUrl?: StringFieldUpdateOperationsInput | string
    authors?: PackageAuthorUpdateManyWithoutAnalyzerPackageNestedInput
    declaredLicenses?: DeclaredLicensesUpdateManyWithoutAnalyzerPackageNestedInput
    declaredLicensesProcessed?: DeclaredLicensesProcessedUpdateManyWithoutAnalyzerPackageNestedInput
    binaries?: BinaryArtifactUpdateManyWithoutAnalyzerPackageNestedInput
    sources?: SourceArtifactUpdateManyWithoutAnalyzerPackageNestedInput
    vcsList?: VcsUpdateManyWithoutAnalyzerPackageNestedInput
    vcsProcessed?: VcsProcessedUpdateManyWithoutAnalyzerPackageNestedInput
  }

  export type AnalyzerPackageUncheckedUpdateWithoutAnalyzerInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packId?: StringFieldUpdateOperationsInput | string
    purl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    homepageUrl?: StringFieldUpdateOperationsInput | string
    authors?: PackageAuthorUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
    declaredLicenses?: DeclaredLicensesUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
    declaredLicensesProcessed?: DeclaredLicensesProcessedUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
    binaries?: BinaryArtifactUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
    sources?: SourceArtifactUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
    vcsList?: VcsUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
    vcsProcessed?: VcsProcessedUncheckedUpdateManyWithoutAnalyzerPackageNestedInput
  }

  export type AnalyzerPackageUncheckedUpdateManyWithoutAnalyzerInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packId?: StringFieldUpdateOperationsInput | string
    purl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    homepageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type PackageAuthorCreateManyAnalyzerPackageInput = {
    name: string
  }

  export type DeclaredLicensesCreateManyAnalyzerPackageInput = {
    name: string
  }

  export type DeclaredLicensesProcessedCreateManyAnalyzerPackageInput = {
    spdxExpression: string
  }

  export type BinaryArtifactCreateManyAnalyzerPackageInput = {
    url: string
  }

  export type SourceArtifactCreateManyAnalyzerPackageInput = {
    url: string
  }

  export type VcsCreateManyAnalyzerPackageInput = {
    type: string
    url: string
    revision: string
    path: string
  }

  export type VcsProcessedCreateManyAnalyzerPackageInput = {
    type: string
    url: string
    revision: string
    path: string
  }

  export type PackageAuthorUpdateWithoutAnalyzerPackageInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PackageAuthorUncheckedUpdateWithoutAnalyzerPackageInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PackageAuthorUncheckedUpdateManyWithoutAnalyzerPackageInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DeclaredLicensesUpdateWithoutAnalyzerPackageInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DeclaredLicensesUncheckedUpdateWithoutAnalyzerPackageInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DeclaredLicensesUncheckedUpdateManyWithoutAnalyzerPackageInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DeclaredLicensesProcessedUpdateWithoutAnalyzerPackageInput = {
    spdxExpression?: StringFieldUpdateOperationsInput | string
  }

  export type DeclaredLicensesProcessedUncheckedUpdateWithoutAnalyzerPackageInput = {
    id?: IntFieldUpdateOperationsInput | number
    spdxExpression?: StringFieldUpdateOperationsInput | string
  }

  export type DeclaredLicensesProcessedUncheckedUpdateManyWithoutAnalyzerPackageInput = {
    id?: IntFieldUpdateOperationsInput | number
    spdxExpression?: StringFieldUpdateOperationsInput | string
  }

  export type BinaryArtifactUpdateWithoutAnalyzerPackageInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type BinaryArtifactUncheckedUpdateWithoutAnalyzerPackageInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type BinaryArtifactUncheckedUpdateManyWithoutAnalyzerPackageInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type SourceArtifactUpdateWithoutAnalyzerPackageInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type SourceArtifactUncheckedUpdateWithoutAnalyzerPackageInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type SourceArtifactUncheckedUpdateManyWithoutAnalyzerPackageInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type VcsUpdateWithoutAnalyzerPackageInput = {
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    revision?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
  }

  export type VcsUncheckedUpdateWithoutAnalyzerPackageInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    revision?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
  }

  export type VcsUncheckedUpdateManyWithoutAnalyzerPackageInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    revision?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
  }

  export type VcsProcessedUpdateWithoutAnalyzerPackageInput = {
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    revision?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
  }

  export type VcsProcessedUncheckedUpdateWithoutAnalyzerPackageInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    revision?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
  }

  export type VcsProcessedUncheckedUpdateManyWithoutAnalyzerPackageInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    revision?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
  }

  export type LicensesCreateManyScannerInput = {
    createdAt?: Date | string
    licenseName: string
    path: string
    startLine: number
    endLine: number
    score: number
  }

  export type CopyrightsCreateManyScannerInput = {
    createdAt?: Date | string
    statement: string
    path: string
    startLine: number
    endLine: number
  }

  export type LicensesUpdateWithoutScannerInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseName?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    startLine?: IntFieldUpdateOperationsInput | number
    endLine?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
  }

  export type LicensesUncheckedUpdateWithoutScannerInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseName?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    startLine?: IntFieldUpdateOperationsInput | number
    endLine?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
  }

  export type LicensesUncheckedUpdateManyWithoutScannerInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseName?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    startLine?: IntFieldUpdateOperationsInput | number
    endLine?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
  }

  export type CopyrightsUpdateWithoutScannerInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statement?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    startLine?: IntFieldUpdateOperationsInput | number
    endLine?: IntFieldUpdateOperationsInput | number
  }

  export type CopyrightsUncheckedUpdateWithoutScannerInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statement?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    startLine?: IntFieldUpdateOperationsInput | number
    endLine?: IntFieldUpdateOperationsInput | number
  }

  export type CopyrightsUncheckedUpdateManyWithoutScannerInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statement?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    startLine?: IntFieldUpdateOperationsInput | number
    endLine?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}