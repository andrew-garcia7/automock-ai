
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
 * Model Resume
 * 
 */
export type Resume = $Result.DefaultSelection<Prisma.$ResumePayload>
/**
 * Model ResumeDraft
 * 
 */
export type ResumeDraft = $Result.DefaultSelection<Prisma.$ResumeDraftPayload>
/**
 * Model Interview
 * 
 */
export type Interview = $Result.DefaultSelection<Prisma.$InterviewPayload>
/**
 * Model Response
 * 
 */
export type Response = $Result.DefaultSelection<Prisma.$ResponsePayload>

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
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.resume`: Exposes CRUD operations for the **Resume** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resumes
    * const resumes = await prisma.resume.findMany()
    * ```
    */
  get resume(): Prisma.ResumeDelegate<ExtArgs>;

  /**
   * `prisma.resumeDraft`: Exposes CRUD operations for the **ResumeDraft** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResumeDrafts
    * const resumeDrafts = await prisma.resumeDraft.findMany()
    * ```
    */
  get resumeDraft(): Prisma.ResumeDraftDelegate<ExtArgs>;

  /**
   * `prisma.interview`: Exposes CRUD operations for the **Interview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Interviews
    * const interviews = await prisma.interview.findMany()
    * ```
    */
  get interview(): Prisma.InterviewDelegate<ExtArgs>;

  /**
   * `prisma.response`: Exposes CRUD operations for the **Response** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Responses
    * const responses = await prisma.response.findMany()
    * ```
    */
  get response(): Prisma.ResponseDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Resume: 'Resume',
    ResumeDraft: 'ResumeDraft',
    Interview: 'Interview',
    Response: 'Response'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "resume" | "resumeDraft" | "interview" | "response"
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
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      Resume: {
        payload: Prisma.$ResumePayload<ExtArgs>
        fields: Prisma.ResumeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResumeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResumeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          findFirst: {
            args: Prisma.ResumeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResumeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          findMany: {
            args: Prisma.ResumeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>[]
          }
          create: {
            args: Prisma.ResumeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          createMany: {
            args: Prisma.ResumeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResumeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>[]
          }
          delete: {
            args: Prisma.ResumeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          update: {
            args: Prisma.ResumeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          deleteMany: {
            args: Prisma.ResumeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResumeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ResumeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          aggregate: {
            args: Prisma.ResumeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResume>
          }
          groupBy: {
            args: Prisma.ResumeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResumeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResumeCountArgs<ExtArgs>
            result: $Utils.Optional<ResumeCountAggregateOutputType> | number
          }
        }
      }
      ResumeDraft: {
        payload: Prisma.$ResumeDraftPayload<ExtArgs>
        fields: Prisma.ResumeDraftFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResumeDraftFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeDraftPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResumeDraftFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeDraftPayload>
          }
          findFirst: {
            args: Prisma.ResumeDraftFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeDraftPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResumeDraftFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeDraftPayload>
          }
          findMany: {
            args: Prisma.ResumeDraftFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeDraftPayload>[]
          }
          create: {
            args: Prisma.ResumeDraftCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeDraftPayload>
          }
          createMany: {
            args: Prisma.ResumeDraftCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResumeDraftCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeDraftPayload>[]
          }
          delete: {
            args: Prisma.ResumeDraftDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeDraftPayload>
          }
          update: {
            args: Prisma.ResumeDraftUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeDraftPayload>
          }
          deleteMany: {
            args: Prisma.ResumeDraftDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResumeDraftUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ResumeDraftUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeDraftPayload>
          }
          aggregate: {
            args: Prisma.ResumeDraftAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResumeDraft>
          }
          groupBy: {
            args: Prisma.ResumeDraftGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResumeDraftGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResumeDraftCountArgs<ExtArgs>
            result: $Utils.Optional<ResumeDraftCountAggregateOutputType> | number
          }
        }
      }
      Interview: {
        payload: Prisma.$InterviewPayload<ExtArgs>
        fields: Prisma.InterviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InterviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InterviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>
          }
          findFirst: {
            args: Prisma.InterviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InterviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>
          }
          findMany: {
            args: Prisma.InterviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>[]
          }
          create: {
            args: Prisma.InterviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>
          }
          createMany: {
            args: Prisma.InterviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InterviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>[]
          }
          delete: {
            args: Prisma.InterviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>
          }
          update: {
            args: Prisma.InterviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>
          }
          deleteMany: {
            args: Prisma.InterviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InterviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InterviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>
          }
          aggregate: {
            args: Prisma.InterviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInterview>
          }
          groupBy: {
            args: Prisma.InterviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<InterviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.InterviewCountArgs<ExtArgs>
            result: $Utils.Optional<InterviewCountAggregateOutputType> | number
          }
        }
      }
      Response: {
        payload: Prisma.$ResponsePayload<ExtArgs>
        fields: Prisma.ResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResponseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResponseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>
          }
          findFirst: {
            args: Prisma.ResponseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResponseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>
          }
          findMany: {
            args: Prisma.ResponseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>[]
          }
          create: {
            args: Prisma.ResponseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>
          }
          createMany: {
            args: Prisma.ResponseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResponseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>[]
          }
          delete: {
            args: Prisma.ResponseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>
          }
          update: {
            args: Prisma.ResponseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>
          }
          deleteMany: {
            args: Prisma.ResponseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResponseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ResponseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>
          }
          aggregate: {
            args: Prisma.ResponseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResponse>
          }
          groupBy: {
            args: Prisma.ResponseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResponseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResponseCountArgs<ExtArgs>
            result: $Utils.Optional<ResponseCountAggregateOutputType> | number
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
    interviews: number
    resumeDrafts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interviews?: boolean | UserCountOutputTypeCountInterviewsArgs
    resumeDrafts?: boolean | UserCountOutputTypeCountResumeDraftsArgs
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
  export type UserCountOutputTypeCountInterviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountResumeDraftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumeDraftWhereInput
  }


  /**
   * Count Type InterviewCountOutputType
   */

  export type InterviewCountOutputType = {
    responses: number
  }

  export type InterviewCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responses?: boolean | InterviewCountOutputTypeCountResponsesArgs
  }

  // Custom InputTypes
  /**
   * InterviewCountOutputType without action
   */
  export type InterviewCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewCountOutputType
     */
    select?: InterviewCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InterviewCountOutputType without action
   */
  export type InterviewCountOutputTypeCountResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResponseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string | null
    password: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    interviews?: boolean | User$interviewsArgs<ExtArgs>
    resumeDrafts?: boolean | User$resumeDraftsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interviews?: boolean | User$interviewsArgs<ExtArgs>
    resumeDrafts?: boolean | User$resumeDraftsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      interviews: Prisma.$InterviewPayload<ExtArgs>[]
      resumeDrafts: Prisma.$ResumeDraftPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string | null
      password: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    interviews<T extends User$interviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$interviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findMany"> | Null>
    resumeDrafts<T extends User$resumeDraftsArgs<ExtArgs> = {}>(args?: Subset<T, User$resumeDraftsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumeDraftPayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
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
  }

  /**
   * User.interviews
   */
  export type User$interviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    where?: InterviewWhereInput
    orderBy?: InterviewOrderByWithRelationInput | InterviewOrderByWithRelationInput[]
    cursor?: InterviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InterviewScalarFieldEnum | InterviewScalarFieldEnum[]
  }

  /**
   * User.resumeDrafts
   */
  export type User$resumeDraftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeDraft
     */
    select?: ResumeDraftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeDraftInclude<ExtArgs> | null
    where?: ResumeDraftWhereInput
    orderBy?: ResumeDraftOrderByWithRelationInput | ResumeDraftOrderByWithRelationInput[]
    cursor?: ResumeDraftWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResumeDraftScalarFieldEnum | ResumeDraftScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Resume
   */

  export type AggregateResume = {
    _count: ResumeCountAggregateOutputType | null
    _avg: ResumeAvgAggregateOutputType | null
    _sum: ResumeSumAggregateOutputType | null
    _min: ResumeMinAggregateOutputType | null
    _max: ResumeMaxAggregateOutputType | null
  }

  export type ResumeAvgAggregateOutputType = {
    id: number | null
    atsScore: number | null
  }

  export type ResumeSumAggregateOutputType = {
    id: number | null
    atsScore: number | null
  }

  export type ResumeMinAggregateOutputType = {
    id: number | null
    filename: string | null
    text: string | null
    atsScore: number | null
    createdAt: Date | null
  }

  export type ResumeMaxAggregateOutputType = {
    id: number | null
    filename: string | null
    text: string | null
    atsScore: number | null
    createdAt: Date | null
  }

  export type ResumeCountAggregateOutputType = {
    id: number
    filename: number
    text: number
    atsScore: number
    createdAt: number
    _all: number
  }


  export type ResumeAvgAggregateInputType = {
    id?: true
    atsScore?: true
  }

  export type ResumeSumAggregateInputType = {
    id?: true
    atsScore?: true
  }

  export type ResumeMinAggregateInputType = {
    id?: true
    filename?: true
    text?: true
    atsScore?: true
    createdAt?: true
  }

  export type ResumeMaxAggregateInputType = {
    id?: true
    filename?: true
    text?: true
    atsScore?: true
    createdAt?: true
  }

  export type ResumeCountAggregateInputType = {
    id?: true
    filename?: true
    text?: true
    atsScore?: true
    createdAt?: true
    _all?: true
  }

  export type ResumeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resume to aggregate.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resumes
    **/
    _count?: true | ResumeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResumeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResumeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResumeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResumeMaxAggregateInputType
  }

  export type GetResumeAggregateType<T extends ResumeAggregateArgs> = {
        [P in keyof T & keyof AggregateResume]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResume[P]>
      : GetScalarType<T[P], AggregateResume[P]>
  }




  export type ResumeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumeWhereInput
    orderBy?: ResumeOrderByWithAggregationInput | ResumeOrderByWithAggregationInput[]
    by: ResumeScalarFieldEnum[] | ResumeScalarFieldEnum
    having?: ResumeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResumeCountAggregateInputType | true
    _avg?: ResumeAvgAggregateInputType
    _sum?: ResumeSumAggregateInputType
    _min?: ResumeMinAggregateInputType
    _max?: ResumeMaxAggregateInputType
  }

  export type ResumeGroupByOutputType = {
    id: number
    filename: string
    text: string
    atsScore: number | null
    createdAt: Date
    _count: ResumeCountAggregateOutputType | null
    _avg: ResumeAvgAggregateOutputType | null
    _sum: ResumeSumAggregateOutputType | null
    _min: ResumeMinAggregateOutputType | null
    _max: ResumeMaxAggregateOutputType | null
  }

  type GetResumeGroupByPayload<T extends ResumeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResumeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResumeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResumeGroupByOutputType[P]>
            : GetScalarType<T[P], ResumeGroupByOutputType[P]>
        }
      >
    >


  export type ResumeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    text?: boolean
    atsScore?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["resume"]>

  export type ResumeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    text?: boolean
    atsScore?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["resume"]>

  export type ResumeSelectScalar = {
    id?: boolean
    filename?: boolean
    text?: boolean
    atsScore?: boolean
    createdAt?: boolean
  }


  export type $ResumePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resume"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      filename: string
      text: string
      atsScore: number | null
      createdAt: Date
    }, ExtArgs["result"]["resume"]>
    composites: {}
  }

  type ResumeGetPayload<S extends boolean | null | undefined | ResumeDefaultArgs> = $Result.GetResult<Prisma.$ResumePayload, S>

  type ResumeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ResumeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ResumeCountAggregateInputType | true
    }

  export interface ResumeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resume'], meta: { name: 'Resume' } }
    /**
     * Find zero or one Resume that matches the filter.
     * @param {ResumeFindUniqueArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResumeFindUniqueArgs>(args: SelectSubset<T, ResumeFindUniqueArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Resume that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ResumeFindUniqueOrThrowArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResumeFindUniqueOrThrowArgs>(args: SelectSubset<T, ResumeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Resume that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindFirstArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResumeFindFirstArgs>(args?: SelectSubset<T, ResumeFindFirstArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Resume that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindFirstOrThrowArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResumeFindFirstOrThrowArgs>(args?: SelectSubset<T, ResumeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Resumes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resumes
     * const resumes = await prisma.resume.findMany()
     * 
     * // Get first 10 Resumes
     * const resumes = await prisma.resume.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resumeWithIdOnly = await prisma.resume.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResumeFindManyArgs>(args?: SelectSubset<T, ResumeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Resume.
     * @param {ResumeCreateArgs} args - Arguments to create a Resume.
     * @example
     * // Create one Resume
     * const Resume = await prisma.resume.create({
     *   data: {
     *     // ... data to create a Resume
     *   }
     * })
     * 
     */
    create<T extends ResumeCreateArgs>(args: SelectSubset<T, ResumeCreateArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Resumes.
     * @param {ResumeCreateManyArgs} args - Arguments to create many Resumes.
     * @example
     * // Create many Resumes
     * const resume = await prisma.resume.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResumeCreateManyArgs>(args?: SelectSubset<T, ResumeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Resumes and returns the data saved in the database.
     * @param {ResumeCreateManyAndReturnArgs} args - Arguments to create many Resumes.
     * @example
     * // Create many Resumes
     * const resume = await prisma.resume.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Resumes and only return the `id`
     * const resumeWithIdOnly = await prisma.resume.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResumeCreateManyAndReturnArgs>(args?: SelectSubset<T, ResumeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Resume.
     * @param {ResumeDeleteArgs} args - Arguments to delete one Resume.
     * @example
     * // Delete one Resume
     * const Resume = await prisma.resume.delete({
     *   where: {
     *     // ... filter to delete one Resume
     *   }
     * })
     * 
     */
    delete<T extends ResumeDeleteArgs>(args: SelectSubset<T, ResumeDeleteArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Resume.
     * @param {ResumeUpdateArgs} args - Arguments to update one Resume.
     * @example
     * // Update one Resume
     * const resume = await prisma.resume.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResumeUpdateArgs>(args: SelectSubset<T, ResumeUpdateArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Resumes.
     * @param {ResumeDeleteManyArgs} args - Arguments to filter Resumes to delete.
     * @example
     * // Delete a few Resumes
     * const { count } = await prisma.resume.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResumeDeleteManyArgs>(args?: SelectSubset<T, ResumeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resumes
     * const resume = await prisma.resume.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResumeUpdateManyArgs>(args: SelectSubset<T, ResumeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Resume.
     * @param {ResumeUpsertArgs} args - Arguments to update or create a Resume.
     * @example
     * // Update or create a Resume
     * const resume = await prisma.resume.upsert({
     *   create: {
     *     // ... data to create a Resume
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resume we want to update
     *   }
     * })
     */
    upsert<T extends ResumeUpsertArgs>(args: SelectSubset<T, ResumeUpsertArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Resumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeCountArgs} args - Arguments to filter Resumes to count.
     * @example
     * // Count the number of Resumes
     * const count = await prisma.resume.count({
     *   where: {
     *     // ... the filter for the Resumes we want to count
     *   }
     * })
    **/
    count<T extends ResumeCountArgs>(
      args?: Subset<T, ResumeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResumeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResumeAggregateArgs>(args: Subset<T, ResumeAggregateArgs>): Prisma.PrismaPromise<GetResumeAggregateType<T>>

    /**
     * Group by Resume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeGroupByArgs} args - Group by arguments.
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
      T extends ResumeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResumeGroupByArgs['orderBy'] }
        : { orderBy?: ResumeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResumeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResumeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resume model
   */
  readonly fields: ResumeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resume.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResumeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Resume model
   */ 
  interface ResumeFieldRefs {
    readonly id: FieldRef<"Resume", 'Int'>
    readonly filename: FieldRef<"Resume", 'String'>
    readonly text: FieldRef<"Resume", 'String'>
    readonly atsScore: FieldRef<"Resume", 'Float'>
    readonly createdAt: FieldRef<"Resume", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Resume findUnique
   */
  export type ResumeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume findUniqueOrThrow
   */
  export type ResumeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume findFirst
   */
  export type ResumeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resumes.
     */
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume findFirstOrThrow
   */
  export type ResumeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resumes.
     */
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume findMany
   */
  export type ResumeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Filter, which Resumes to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume create
   */
  export type ResumeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * The data needed to create a Resume.
     */
    data: XOR<ResumeCreateInput, ResumeUncheckedCreateInput>
  }

  /**
   * Resume createMany
   */
  export type ResumeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resumes.
     */
    data: ResumeCreateManyInput | ResumeCreateManyInput[]
  }

  /**
   * Resume createManyAndReturn
   */
  export type ResumeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Resumes.
     */
    data: ResumeCreateManyInput | ResumeCreateManyInput[]
  }

  /**
   * Resume update
   */
  export type ResumeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * The data needed to update a Resume.
     */
    data: XOR<ResumeUpdateInput, ResumeUncheckedUpdateInput>
    /**
     * Choose, which Resume to update.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume updateMany
   */
  export type ResumeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resumes.
     */
    data: XOR<ResumeUpdateManyMutationInput, ResumeUncheckedUpdateManyInput>
    /**
     * Filter which Resumes to update
     */
    where?: ResumeWhereInput
  }

  /**
   * Resume upsert
   */
  export type ResumeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * The filter to search for the Resume to update in case it exists.
     */
    where: ResumeWhereUniqueInput
    /**
     * In case the Resume found by the `where` argument doesn't exist, create a new Resume with this data.
     */
    create: XOR<ResumeCreateInput, ResumeUncheckedCreateInput>
    /**
     * In case the Resume was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResumeUpdateInput, ResumeUncheckedUpdateInput>
  }

  /**
   * Resume delete
   */
  export type ResumeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Filter which Resume to delete.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume deleteMany
   */
  export type ResumeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resumes to delete
     */
    where?: ResumeWhereInput
  }

  /**
   * Resume without action
   */
  export type ResumeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
  }


  /**
   * Model ResumeDraft
   */

  export type AggregateResumeDraft = {
    _count: ResumeDraftCountAggregateOutputType | null
    _avg: ResumeDraftAvgAggregateOutputType | null
    _sum: ResumeDraftSumAggregateOutputType | null
    _min: ResumeDraftMinAggregateOutputType | null
    _max: ResumeDraftMaxAggregateOutputType | null
  }

  export type ResumeDraftAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    atsScore: number | null
  }

  export type ResumeDraftSumAggregateOutputType = {
    id: number | null
    userId: number | null
    atsScore: number | null
  }

  export type ResumeDraftMinAggregateOutputType = {
    id: number | null
    userId: number | null
    title: string | null
    payload: string | null
    templateKey: string | null
    atsScore: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResumeDraftMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    title: string | null
    payload: string | null
    templateKey: string | null
    atsScore: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResumeDraftCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    payload: number
    templateKey: number
    atsScore: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ResumeDraftAvgAggregateInputType = {
    id?: true
    userId?: true
    atsScore?: true
  }

  export type ResumeDraftSumAggregateInputType = {
    id?: true
    userId?: true
    atsScore?: true
  }

  export type ResumeDraftMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    payload?: true
    templateKey?: true
    atsScore?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResumeDraftMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    payload?: true
    templateKey?: true
    atsScore?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResumeDraftCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    payload?: true
    templateKey?: true
    atsScore?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ResumeDraftAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResumeDraft to aggregate.
     */
    where?: ResumeDraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResumeDrafts to fetch.
     */
    orderBy?: ResumeDraftOrderByWithRelationInput | ResumeDraftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResumeDraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResumeDrafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResumeDrafts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResumeDrafts
    **/
    _count?: true | ResumeDraftCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResumeDraftAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResumeDraftSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResumeDraftMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResumeDraftMaxAggregateInputType
  }

  export type GetResumeDraftAggregateType<T extends ResumeDraftAggregateArgs> = {
        [P in keyof T & keyof AggregateResumeDraft]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResumeDraft[P]>
      : GetScalarType<T[P], AggregateResumeDraft[P]>
  }




  export type ResumeDraftGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumeDraftWhereInput
    orderBy?: ResumeDraftOrderByWithAggregationInput | ResumeDraftOrderByWithAggregationInput[]
    by: ResumeDraftScalarFieldEnum[] | ResumeDraftScalarFieldEnum
    having?: ResumeDraftScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResumeDraftCountAggregateInputType | true
    _avg?: ResumeDraftAvgAggregateInputType
    _sum?: ResumeDraftSumAggregateInputType
    _min?: ResumeDraftMinAggregateInputType
    _max?: ResumeDraftMaxAggregateInputType
  }

  export type ResumeDraftGroupByOutputType = {
    id: number
    userId: number | null
    title: string
    payload: string
    templateKey: string
    atsScore: number | null
    createdAt: Date
    updatedAt: Date
    _count: ResumeDraftCountAggregateOutputType | null
    _avg: ResumeDraftAvgAggregateOutputType | null
    _sum: ResumeDraftSumAggregateOutputType | null
    _min: ResumeDraftMinAggregateOutputType | null
    _max: ResumeDraftMaxAggregateOutputType | null
  }

  type GetResumeDraftGroupByPayload<T extends ResumeDraftGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResumeDraftGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResumeDraftGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResumeDraftGroupByOutputType[P]>
            : GetScalarType<T[P], ResumeDraftGroupByOutputType[P]>
        }
      >
    >


  export type ResumeDraftSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    payload?: boolean
    templateKey?: boolean
    atsScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | ResumeDraft$userArgs<ExtArgs>
  }, ExtArgs["result"]["resumeDraft"]>

  export type ResumeDraftSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    payload?: boolean
    templateKey?: boolean
    atsScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | ResumeDraft$userArgs<ExtArgs>
  }, ExtArgs["result"]["resumeDraft"]>

  export type ResumeDraftSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    payload?: boolean
    templateKey?: boolean
    atsScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ResumeDraftInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ResumeDraft$userArgs<ExtArgs>
  }
  export type ResumeDraftIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ResumeDraft$userArgs<ExtArgs>
  }

  export type $ResumeDraftPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResumeDraft"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number | null
      title: string
      payload: string
      templateKey: string
      atsScore: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["resumeDraft"]>
    composites: {}
  }

  type ResumeDraftGetPayload<S extends boolean | null | undefined | ResumeDraftDefaultArgs> = $Result.GetResult<Prisma.$ResumeDraftPayload, S>

  type ResumeDraftCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ResumeDraftFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ResumeDraftCountAggregateInputType | true
    }

  export interface ResumeDraftDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResumeDraft'], meta: { name: 'ResumeDraft' } }
    /**
     * Find zero or one ResumeDraft that matches the filter.
     * @param {ResumeDraftFindUniqueArgs} args - Arguments to find a ResumeDraft
     * @example
     * // Get one ResumeDraft
     * const resumeDraft = await prisma.resumeDraft.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResumeDraftFindUniqueArgs>(args: SelectSubset<T, ResumeDraftFindUniqueArgs<ExtArgs>>): Prisma__ResumeDraftClient<$Result.GetResult<Prisma.$ResumeDraftPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ResumeDraft that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ResumeDraftFindUniqueOrThrowArgs} args - Arguments to find a ResumeDraft
     * @example
     * // Get one ResumeDraft
     * const resumeDraft = await prisma.resumeDraft.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResumeDraftFindUniqueOrThrowArgs>(args: SelectSubset<T, ResumeDraftFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResumeDraftClient<$Result.GetResult<Prisma.$ResumeDraftPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ResumeDraft that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeDraftFindFirstArgs} args - Arguments to find a ResumeDraft
     * @example
     * // Get one ResumeDraft
     * const resumeDraft = await prisma.resumeDraft.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResumeDraftFindFirstArgs>(args?: SelectSubset<T, ResumeDraftFindFirstArgs<ExtArgs>>): Prisma__ResumeDraftClient<$Result.GetResult<Prisma.$ResumeDraftPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ResumeDraft that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeDraftFindFirstOrThrowArgs} args - Arguments to find a ResumeDraft
     * @example
     * // Get one ResumeDraft
     * const resumeDraft = await prisma.resumeDraft.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResumeDraftFindFirstOrThrowArgs>(args?: SelectSubset<T, ResumeDraftFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResumeDraftClient<$Result.GetResult<Prisma.$ResumeDraftPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ResumeDrafts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeDraftFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResumeDrafts
     * const resumeDrafts = await prisma.resumeDraft.findMany()
     * 
     * // Get first 10 ResumeDrafts
     * const resumeDrafts = await prisma.resumeDraft.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resumeDraftWithIdOnly = await prisma.resumeDraft.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResumeDraftFindManyArgs>(args?: SelectSubset<T, ResumeDraftFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumeDraftPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ResumeDraft.
     * @param {ResumeDraftCreateArgs} args - Arguments to create a ResumeDraft.
     * @example
     * // Create one ResumeDraft
     * const ResumeDraft = await prisma.resumeDraft.create({
     *   data: {
     *     // ... data to create a ResumeDraft
     *   }
     * })
     * 
     */
    create<T extends ResumeDraftCreateArgs>(args: SelectSubset<T, ResumeDraftCreateArgs<ExtArgs>>): Prisma__ResumeDraftClient<$Result.GetResult<Prisma.$ResumeDraftPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ResumeDrafts.
     * @param {ResumeDraftCreateManyArgs} args - Arguments to create many ResumeDrafts.
     * @example
     * // Create many ResumeDrafts
     * const resumeDraft = await prisma.resumeDraft.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResumeDraftCreateManyArgs>(args?: SelectSubset<T, ResumeDraftCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ResumeDrafts and returns the data saved in the database.
     * @param {ResumeDraftCreateManyAndReturnArgs} args - Arguments to create many ResumeDrafts.
     * @example
     * // Create many ResumeDrafts
     * const resumeDraft = await prisma.resumeDraft.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ResumeDrafts and only return the `id`
     * const resumeDraftWithIdOnly = await prisma.resumeDraft.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResumeDraftCreateManyAndReturnArgs>(args?: SelectSubset<T, ResumeDraftCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumeDraftPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ResumeDraft.
     * @param {ResumeDraftDeleteArgs} args - Arguments to delete one ResumeDraft.
     * @example
     * // Delete one ResumeDraft
     * const ResumeDraft = await prisma.resumeDraft.delete({
     *   where: {
     *     // ... filter to delete one ResumeDraft
     *   }
     * })
     * 
     */
    delete<T extends ResumeDraftDeleteArgs>(args: SelectSubset<T, ResumeDraftDeleteArgs<ExtArgs>>): Prisma__ResumeDraftClient<$Result.GetResult<Prisma.$ResumeDraftPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ResumeDraft.
     * @param {ResumeDraftUpdateArgs} args - Arguments to update one ResumeDraft.
     * @example
     * // Update one ResumeDraft
     * const resumeDraft = await prisma.resumeDraft.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResumeDraftUpdateArgs>(args: SelectSubset<T, ResumeDraftUpdateArgs<ExtArgs>>): Prisma__ResumeDraftClient<$Result.GetResult<Prisma.$ResumeDraftPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ResumeDrafts.
     * @param {ResumeDraftDeleteManyArgs} args - Arguments to filter ResumeDrafts to delete.
     * @example
     * // Delete a few ResumeDrafts
     * const { count } = await prisma.resumeDraft.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResumeDraftDeleteManyArgs>(args?: SelectSubset<T, ResumeDraftDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResumeDrafts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeDraftUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResumeDrafts
     * const resumeDraft = await prisma.resumeDraft.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResumeDraftUpdateManyArgs>(args: SelectSubset<T, ResumeDraftUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ResumeDraft.
     * @param {ResumeDraftUpsertArgs} args - Arguments to update or create a ResumeDraft.
     * @example
     * // Update or create a ResumeDraft
     * const resumeDraft = await prisma.resumeDraft.upsert({
     *   create: {
     *     // ... data to create a ResumeDraft
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResumeDraft we want to update
     *   }
     * })
     */
    upsert<T extends ResumeDraftUpsertArgs>(args: SelectSubset<T, ResumeDraftUpsertArgs<ExtArgs>>): Prisma__ResumeDraftClient<$Result.GetResult<Prisma.$ResumeDraftPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ResumeDrafts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeDraftCountArgs} args - Arguments to filter ResumeDrafts to count.
     * @example
     * // Count the number of ResumeDrafts
     * const count = await prisma.resumeDraft.count({
     *   where: {
     *     // ... the filter for the ResumeDrafts we want to count
     *   }
     * })
    **/
    count<T extends ResumeDraftCountArgs>(
      args?: Subset<T, ResumeDraftCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResumeDraftCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResumeDraft.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeDraftAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResumeDraftAggregateArgs>(args: Subset<T, ResumeDraftAggregateArgs>): Prisma.PrismaPromise<GetResumeDraftAggregateType<T>>

    /**
     * Group by ResumeDraft.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeDraftGroupByArgs} args - Group by arguments.
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
      T extends ResumeDraftGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResumeDraftGroupByArgs['orderBy'] }
        : { orderBy?: ResumeDraftGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResumeDraftGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResumeDraftGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResumeDraft model
   */
  readonly fields: ResumeDraftFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResumeDraft.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResumeDraftClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends ResumeDraft$userArgs<ExtArgs> = {}>(args?: Subset<T, ResumeDraft$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the ResumeDraft model
   */ 
  interface ResumeDraftFieldRefs {
    readonly id: FieldRef<"ResumeDraft", 'Int'>
    readonly userId: FieldRef<"ResumeDraft", 'Int'>
    readonly title: FieldRef<"ResumeDraft", 'String'>
    readonly payload: FieldRef<"ResumeDraft", 'String'>
    readonly templateKey: FieldRef<"ResumeDraft", 'String'>
    readonly atsScore: FieldRef<"ResumeDraft", 'Float'>
    readonly createdAt: FieldRef<"ResumeDraft", 'DateTime'>
    readonly updatedAt: FieldRef<"ResumeDraft", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ResumeDraft findUnique
   */
  export type ResumeDraftFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeDraft
     */
    select?: ResumeDraftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeDraftInclude<ExtArgs> | null
    /**
     * Filter, which ResumeDraft to fetch.
     */
    where: ResumeDraftWhereUniqueInput
  }

  /**
   * ResumeDraft findUniqueOrThrow
   */
  export type ResumeDraftFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeDraft
     */
    select?: ResumeDraftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeDraftInclude<ExtArgs> | null
    /**
     * Filter, which ResumeDraft to fetch.
     */
    where: ResumeDraftWhereUniqueInput
  }

  /**
   * ResumeDraft findFirst
   */
  export type ResumeDraftFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeDraft
     */
    select?: ResumeDraftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeDraftInclude<ExtArgs> | null
    /**
     * Filter, which ResumeDraft to fetch.
     */
    where?: ResumeDraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResumeDrafts to fetch.
     */
    orderBy?: ResumeDraftOrderByWithRelationInput | ResumeDraftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResumeDrafts.
     */
    cursor?: ResumeDraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResumeDrafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResumeDrafts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResumeDrafts.
     */
    distinct?: ResumeDraftScalarFieldEnum | ResumeDraftScalarFieldEnum[]
  }

  /**
   * ResumeDraft findFirstOrThrow
   */
  export type ResumeDraftFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeDraft
     */
    select?: ResumeDraftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeDraftInclude<ExtArgs> | null
    /**
     * Filter, which ResumeDraft to fetch.
     */
    where?: ResumeDraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResumeDrafts to fetch.
     */
    orderBy?: ResumeDraftOrderByWithRelationInput | ResumeDraftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResumeDrafts.
     */
    cursor?: ResumeDraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResumeDrafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResumeDrafts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResumeDrafts.
     */
    distinct?: ResumeDraftScalarFieldEnum | ResumeDraftScalarFieldEnum[]
  }

  /**
   * ResumeDraft findMany
   */
  export type ResumeDraftFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeDraft
     */
    select?: ResumeDraftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeDraftInclude<ExtArgs> | null
    /**
     * Filter, which ResumeDrafts to fetch.
     */
    where?: ResumeDraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResumeDrafts to fetch.
     */
    orderBy?: ResumeDraftOrderByWithRelationInput | ResumeDraftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResumeDrafts.
     */
    cursor?: ResumeDraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResumeDrafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResumeDrafts.
     */
    skip?: number
    distinct?: ResumeDraftScalarFieldEnum | ResumeDraftScalarFieldEnum[]
  }

  /**
   * ResumeDraft create
   */
  export type ResumeDraftCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeDraft
     */
    select?: ResumeDraftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeDraftInclude<ExtArgs> | null
    /**
     * The data needed to create a ResumeDraft.
     */
    data: XOR<ResumeDraftCreateInput, ResumeDraftUncheckedCreateInput>
  }

  /**
   * ResumeDraft createMany
   */
  export type ResumeDraftCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResumeDrafts.
     */
    data: ResumeDraftCreateManyInput | ResumeDraftCreateManyInput[]
  }

  /**
   * ResumeDraft createManyAndReturn
   */
  export type ResumeDraftCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeDraft
     */
    select?: ResumeDraftSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ResumeDrafts.
     */
    data: ResumeDraftCreateManyInput | ResumeDraftCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeDraftIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResumeDraft update
   */
  export type ResumeDraftUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeDraft
     */
    select?: ResumeDraftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeDraftInclude<ExtArgs> | null
    /**
     * The data needed to update a ResumeDraft.
     */
    data: XOR<ResumeDraftUpdateInput, ResumeDraftUncheckedUpdateInput>
    /**
     * Choose, which ResumeDraft to update.
     */
    where: ResumeDraftWhereUniqueInput
  }

  /**
   * ResumeDraft updateMany
   */
  export type ResumeDraftUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResumeDrafts.
     */
    data: XOR<ResumeDraftUpdateManyMutationInput, ResumeDraftUncheckedUpdateManyInput>
    /**
     * Filter which ResumeDrafts to update
     */
    where?: ResumeDraftWhereInput
  }

  /**
   * ResumeDraft upsert
   */
  export type ResumeDraftUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeDraft
     */
    select?: ResumeDraftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeDraftInclude<ExtArgs> | null
    /**
     * The filter to search for the ResumeDraft to update in case it exists.
     */
    where: ResumeDraftWhereUniqueInput
    /**
     * In case the ResumeDraft found by the `where` argument doesn't exist, create a new ResumeDraft with this data.
     */
    create: XOR<ResumeDraftCreateInput, ResumeDraftUncheckedCreateInput>
    /**
     * In case the ResumeDraft was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResumeDraftUpdateInput, ResumeDraftUncheckedUpdateInput>
  }

  /**
   * ResumeDraft delete
   */
  export type ResumeDraftDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeDraft
     */
    select?: ResumeDraftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeDraftInclude<ExtArgs> | null
    /**
     * Filter which ResumeDraft to delete.
     */
    where: ResumeDraftWhereUniqueInput
  }

  /**
   * ResumeDraft deleteMany
   */
  export type ResumeDraftDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResumeDrafts to delete
     */
    where?: ResumeDraftWhereInput
  }

  /**
   * ResumeDraft.user
   */
  export type ResumeDraft$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ResumeDraft without action
   */
  export type ResumeDraftDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeDraft
     */
    select?: ResumeDraftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeDraftInclude<ExtArgs> | null
  }


  /**
   * Model Interview
   */

  export type AggregateInterview = {
    _count: InterviewCountAggregateOutputType | null
    _avg: InterviewAvgAggregateOutputType | null
    _sum: InterviewSumAggregateOutputType | null
    _min: InterviewMinAggregateOutputType | null
    _max: InterviewMaxAggregateOutputType | null
  }

  export type InterviewAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    score: number | null
  }

  export type InterviewSumAggregateOutputType = {
    id: number | null
    userId: number | null
    score: number | null
  }

  export type InterviewMinAggregateOutputType = {
    id: number | null
    userId: number | null
    category: string | null
    level: string | null
    startedAt: Date | null
    endedAt: Date | null
    score: number | null
    transcript: string | null
    questions: string | null
  }

  export type InterviewMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    category: string | null
    level: string | null
    startedAt: Date | null
    endedAt: Date | null
    score: number | null
    transcript: string | null
    questions: string | null
  }

  export type InterviewCountAggregateOutputType = {
    id: number
    userId: number
    category: number
    level: number
    startedAt: number
    endedAt: number
    score: number
    transcript: number
    questions: number
    _all: number
  }


  export type InterviewAvgAggregateInputType = {
    id?: true
    userId?: true
    score?: true
  }

  export type InterviewSumAggregateInputType = {
    id?: true
    userId?: true
    score?: true
  }

  export type InterviewMinAggregateInputType = {
    id?: true
    userId?: true
    category?: true
    level?: true
    startedAt?: true
    endedAt?: true
    score?: true
    transcript?: true
    questions?: true
  }

  export type InterviewMaxAggregateInputType = {
    id?: true
    userId?: true
    category?: true
    level?: true
    startedAt?: true
    endedAt?: true
    score?: true
    transcript?: true
    questions?: true
  }

  export type InterviewCountAggregateInputType = {
    id?: true
    userId?: true
    category?: true
    level?: true
    startedAt?: true
    endedAt?: true
    score?: true
    transcript?: true
    questions?: true
    _all?: true
  }

  export type InterviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Interview to aggregate.
     */
    where?: InterviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interviews to fetch.
     */
    orderBy?: InterviewOrderByWithRelationInput | InterviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InterviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Interviews
    **/
    _count?: true | InterviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InterviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InterviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InterviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InterviewMaxAggregateInputType
  }

  export type GetInterviewAggregateType<T extends InterviewAggregateArgs> = {
        [P in keyof T & keyof AggregateInterview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInterview[P]>
      : GetScalarType<T[P], AggregateInterview[P]>
  }




  export type InterviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewWhereInput
    orderBy?: InterviewOrderByWithAggregationInput | InterviewOrderByWithAggregationInput[]
    by: InterviewScalarFieldEnum[] | InterviewScalarFieldEnum
    having?: InterviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InterviewCountAggregateInputType | true
    _avg?: InterviewAvgAggregateInputType
    _sum?: InterviewSumAggregateInputType
    _min?: InterviewMinAggregateInputType
    _max?: InterviewMaxAggregateInputType
  }

  export type InterviewGroupByOutputType = {
    id: number
    userId: number | null
    category: string
    level: string
    startedAt: Date
    endedAt: Date | null
    score: number | null
    transcript: string | null
    questions: string
    _count: InterviewCountAggregateOutputType | null
    _avg: InterviewAvgAggregateOutputType | null
    _sum: InterviewSumAggregateOutputType | null
    _min: InterviewMinAggregateOutputType | null
    _max: InterviewMaxAggregateOutputType | null
  }

  type GetInterviewGroupByPayload<T extends InterviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InterviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InterviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InterviewGroupByOutputType[P]>
            : GetScalarType<T[P], InterviewGroupByOutputType[P]>
        }
      >
    >


  export type InterviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    category?: boolean
    level?: boolean
    startedAt?: boolean
    endedAt?: boolean
    score?: boolean
    transcript?: boolean
    questions?: boolean
    user?: boolean | Interview$userArgs<ExtArgs>
    responses?: boolean | Interview$responsesArgs<ExtArgs>
    _count?: boolean | InterviewCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interview"]>

  export type InterviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    category?: boolean
    level?: boolean
    startedAt?: boolean
    endedAt?: boolean
    score?: boolean
    transcript?: boolean
    questions?: boolean
    user?: boolean | Interview$userArgs<ExtArgs>
  }, ExtArgs["result"]["interview"]>

  export type InterviewSelectScalar = {
    id?: boolean
    userId?: boolean
    category?: boolean
    level?: boolean
    startedAt?: boolean
    endedAt?: boolean
    score?: boolean
    transcript?: boolean
    questions?: boolean
  }

  export type InterviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Interview$userArgs<ExtArgs>
    responses?: boolean | Interview$responsesArgs<ExtArgs>
    _count?: boolean | InterviewCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InterviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Interview$userArgs<ExtArgs>
  }

  export type $InterviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Interview"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      responses: Prisma.$ResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number | null
      category: string
      level: string
      startedAt: Date
      endedAt: Date | null
      score: number | null
      transcript: string | null
      questions: string
    }, ExtArgs["result"]["interview"]>
    composites: {}
  }

  type InterviewGetPayload<S extends boolean | null | undefined | InterviewDefaultArgs> = $Result.GetResult<Prisma.$InterviewPayload, S>

  type InterviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InterviewFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InterviewCountAggregateInputType | true
    }

  export interface InterviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Interview'], meta: { name: 'Interview' } }
    /**
     * Find zero or one Interview that matches the filter.
     * @param {InterviewFindUniqueArgs} args - Arguments to find a Interview
     * @example
     * // Get one Interview
     * const interview = await prisma.interview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InterviewFindUniqueArgs>(args: SelectSubset<T, InterviewFindUniqueArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Interview that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InterviewFindUniqueOrThrowArgs} args - Arguments to find a Interview
     * @example
     * // Get one Interview
     * const interview = await prisma.interview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InterviewFindUniqueOrThrowArgs>(args: SelectSubset<T, InterviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Interview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewFindFirstArgs} args - Arguments to find a Interview
     * @example
     * // Get one Interview
     * const interview = await prisma.interview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InterviewFindFirstArgs>(args?: SelectSubset<T, InterviewFindFirstArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Interview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewFindFirstOrThrowArgs} args - Arguments to find a Interview
     * @example
     * // Get one Interview
     * const interview = await prisma.interview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InterviewFindFirstOrThrowArgs>(args?: SelectSubset<T, InterviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Interviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Interviews
     * const interviews = await prisma.interview.findMany()
     * 
     * // Get first 10 Interviews
     * const interviews = await prisma.interview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const interviewWithIdOnly = await prisma.interview.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InterviewFindManyArgs>(args?: SelectSubset<T, InterviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Interview.
     * @param {InterviewCreateArgs} args - Arguments to create a Interview.
     * @example
     * // Create one Interview
     * const Interview = await prisma.interview.create({
     *   data: {
     *     // ... data to create a Interview
     *   }
     * })
     * 
     */
    create<T extends InterviewCreateArgs>(args: SelectSubset<T, InterviewCreateArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Interviews.
     * @param {InterviewCreateManyArgs} args - Arguments to create many Interviews.
     * @example
     * // Create many Interviews
     * const interview = await prisma.interview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InterviewCreateManyArgs>(args?: SelectSubset<T, InterviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Interviews and returns the data saved in the database.
     * @param {InterviewCreateManyAndReturnArgs} args - Arguments to create many Interviews.
     * @example
     * // Create many Interviews
     * const interview = await prisma.interview.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Interviews and only return the `id`
     * const interviewWithIdOnly = await prisma.interview.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InterviewCreateManyAndReturnArgs>(args?: SelectSubset<T, InterviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Interview.
     * @param {InterviewDeleteArgs} args - Arguments to delete one Interview.
     * @example
     * // Delete one Interview
     * const Interview = await prisma.interview.delete({
     *   where: {
     *     // ... filter to delete one Interview
     *   }
     * })
     * 
     */
    delete<T extends InterviewDeleteArgs>(args: SelectSubset<T, InterviewDeleteArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Interview.
     * @param {InterviewUpdateArgs} args - Arguments to update one Interview.
     * @example
     * // Update one Interview
     * const interview = await prisma.interview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InterviewUpdateArgs>(args: SelectSubset<T, InterviewUpdateArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Interviews.
     * @param {InterviewDeleteManyArgs} args - Arguments to filter Interviews to delete.
     * @example
     * // Delete a few Interviews
     * const { count } = await prisma.interview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InterviewDeleteManyArgs>(args?: SelectSubset<T, InterviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Interviews
     * const interview = await prisma.interview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InterviewUpdateManyArgs>(args: SelectSubset<T, InterviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Interview.
     * @param {InterviewUpsertArgs} args - Arguments to update or create a Interview.
     * @example
     * // Update or create a Interview
     * const interview = await prisma.interview.upsert({
     *   create: {
     *     // ... data to create a Interview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Interview we want to update
     *   }
     * })
     */
    upsert<T extends InterviewUpsertArgs>(args: SelectSubset<T, InterviewUpsertArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Interviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewCountArgs} args - Arguments to filter Interviews to count.
     * @example
     * // Count the number of Interviews
     * const count = await prisma.interview.count({
     *   where: {
     *     // ... the filter for the Interviews we want to count
     *   }
     * })
    **/
    count<T extends InterviewCountArgs>(
      args?: Subset<T, InterviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InterviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Interview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InterviewAggregateArgs>(args: Subset<T, InterviewAggregateArgs>): Prisma.PrismaPromise<GetInterviewAggregateType<T>>

    /**
     * Group by Interview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewGroupByArgs} args - Group by arguments.
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
      T extends InterviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InterviewGroupByArgs['orderBy'] }
        : { orderBy?: InterviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InterviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Interview model
   */
  readonly fields: InterviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Interview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InterviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Interview$userArgs<ExtArgs> = {}>(args?: Subset<T, Interview$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    responses<T extends Interview$responsesArgs<ExtArgs> = {}>(args?: Subset<T, Interview$responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Interview model
   */ 
  interface InterviewFieldRefs {
    readonly id: FieldRef<"Interview", 'Int'>
    readonly userId: FieldRef<"Interview", 'Int'>
    readonly category: FieldRef<"Interview", 'String'>
    readonly level: FieldRef<"Interview", 'String'>
    readonly startedAt: FieldRef<"Interview", 'DateTime'>
    readonly endedAt: FieldRef<"Interview", 'DateTime'>
    readonly score: FieldRef<"Interview", 'Float'>
    readonly transcript: FieldRef<"Interview", 'String'>
    readonly questions: FieldRef<"Interview", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Interview findUnique
   */
  export type InterviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * Filter, which Interview to fetch.
     */
    where: InterviewWhereUniqueInput
  }

  /**
   * Interview findUniqueOrThrow
   */
  export type InterviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * Filter, which Interview to fetch.
     */
    where: InterviewWhereUniqueInput
  }

  /**
   * Interview findFirst
   */
  export type InterviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * Filter, which Interview to fetch.
     */
    where?: InterviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interviews to fetch.
     */
    orderBy?: InterviewOrderByWithRelationInput | InterviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Interviews.
     */
    cursor?: InterviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Interviews.
     */
    distinct?: InterviewScalarFieldEnum | InterviewScalarFieldEnum[]
  }

  /**
   * Interview findFirstOrThrow
   */
  export type InterviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * Filter, which Interview to fetch.
     */
    where?: InterviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interviews to fetch.
     */
    orderBy?: InterviewOrderByWithRelationInput | InterviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Interviews.
     */
    cursor?: InterviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Interviews.
     */
    distinct?: InterviewScalarFieldEnum | InterviewScalarFieldEnum[]
  }

  /**
   * Interview findMany
   */
  export type InterviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * Filter, which Interviews to fetch.
     */
    where?: InterviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interviews to fetch.
     */
    orderBy?: InterviewOrderByWithRelationInput | InterviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Interviews.
     */
    cursor?: InterviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interviews.
     */
    skip?: number
    distinct?: InterviewScalarFieldEnum | InterviewScalarFieldEnum[]
  }

  /**
   * Interview create
   */
  export type InterviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Interview.
     */
    data: XOR<InterviewCreateInput, InterviewUncheckedCreateInput>
  }

  /**
   * Interview createMany
   */
  export type InterviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Interviews.
     */
    data: InterviewCreateManyInput | InterviewCreateManyInput[]
  }

  /**
   * Interview createManyAndReturn
   */
  export type InterviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Interviews.
     */
    data: InterviewCreateManyInput | InterviewCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Interview update
   */
  export type InterviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Interview.
     */
    data: XOR<InterviewUpdateInput, InterviewUncheckedUpdateInput>
    /**
     * Choose, which Interview to update.
     */
    where: InterviewWhereUniqueInput
  }

  /**
   * Interview updateMany
   */
  export type InterviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Interviews.
     */
    data: XOR<InterviewUpdateManyMutationInput, InterviewUncheckedUpdateManyInput>
    /**
     * Filter which Interviews to update
     */
    where?: InterviewWhereInput
  }

  /**
   * Interview upsert
   */
  export type InterviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Interview to update in case it exists.
     */
    where: InterviewWhereUniqueInput
    /**
     * In case the Interview found by the `where` argument doesn't exist, create a new Interview with this data.
     */
    create: XOR<InterviewCreateInput, InterviewUncheckedCreateInput>
    /**
     * In case the Interview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InterviewUpdateInput, InterviewUncheckedUpdateInput>
  }

  /**
   * Interview delete
   */
  export type InterviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * Filter which Interview to delete.
     */
    where: InterviewWhereUniqueInput
  }

  /**
   * Interview deleteMany
   */
  export type InterviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Interviews to delete
     */
    where?: InterviewWhereInput
  }

  /**
   * Interview.user
   */
  export type Interview$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Interview.responses
   */
  export type Interview$responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    where?: ResponseWhereInput
    orderBy?: ResponseOrderByWithRelationInput | ResponseOrderByWithRelationInput[]
    cursor?: ResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResponseScalarFieldEnum | ResponseScalarFieldEnum[]
  }

  /**
   * Interview without action
   */
  export type InterviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
  }


  /**
   * Model Response
   */

  export type AggregateResponse = {
    _count: ResponseCountAggregateOutputType | null
    _avg: ResponseAvgAggregateOutputType | null
    _sum: ResponseSumAggregateOutputType | null
    _min: ResponseMinAggregateOutputType | null
    _max: ResponseMaxAggregateOutputType | null
  }

  export type ResponseAvgAggregateOutputType = {
    id: number | null
    interviewId: number | null
    score: number | null
  }

  export type ResponseSumAggregateOutputType = {
    id: number | null
    interviewId: number | null
    score: number | null
  }

  export type ResponseMinAggregateOutputType = {
    id: number | null
    interviewId: number | null
    question: string | null
    answer: string | null
    score: number | null
    createdAt: Date | null
  }

  export type ResponseMaxAggregateOutputType = {
    id: number | null
    interviewId: number | null
    question: string | null
    answer: string | null
    score: number | null
    createdAt: Date | null
  }

  export type ResponseCountAggregateOutputType = {
    id: number
    interviewId: number
    question: number
    answer: number
    score: number
    createdAt: number
    _all: number
  }


  export type ResponseAvgAggregateInputType = {
    id?: true
    interviewId?: true
    score?: true
  }

  export type ResponseSumAggregateInputType = {
    id?: true
    interviewId?: true
    score?: true
  }

  export type ResponseMinAggregateInputType = {
    id?: true
    interviewId?: true
    question?: true
    answer?: true
    score?: true
    createdAt?: true
  }

  export type ResponseMaxAggregateInputType = {
    id?: true
    interviewId?: true
    question?: true
    answer?: true
    score?: true
    createdAt?: true
  }

  export type ResponseCountAggregateInputType = {
    id?: true
    interviewId?: true
    question?: true
    answer?: true
    score?: true
    createdAt?: true
    _all?: true
  }

  export type ResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Response to aggregate.
     */
    where?: ResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Responses to fetch.
     */
    orderBy?: ResponseOrderByWithRelationInput | ResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Responses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Responses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Responses
    **/
    _count?: true | ResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResponseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResponseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResponseMaxAggregateInputType
  }

  export type GetResponseAggregateType<T extends ResponseAggregateArgs> = {
        [P in keyof T & keyof AggregateResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResponse[P]>
      : GetScalarType<T[P], AggregateResponse[P]>
  }




  export type ResponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResponseWhereInput
    orderBy?: ResponseOrderByWithAggregationInput | ResponseOrderByWithAggregationInput[]
    by: ResponseScalarFieldEnum[] | ResponseScalarFieldEnum
    having?: ResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResponseCountAggregateInputType | true
    _avg?: ResponseAvgAggregateInputType
    _sum?: ResponseSumAggregateInputType
    _min?: ResponseMinAggregateInputType
    _max?: ResponseMaxAggregateInputType
  }

  export type ResponseGroupByOutputType = {
    id: number
    interviewId: number
    question: string
    answer: string
    score: number
    createdAt: Date
    _count: ResponseCountAggregateOutputType | null
    _avg: ResponseAvgAggregateOutputType | null
    _sum: ResponseSumAggregateOutputType | null
    _min: ResponseMinAggregateOutputType | null
    _max: ResponseMaxAggregateOutputType | null
  }

  type GetResponseGroupByPayload<T extends ResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResponseGroupByOutputType[P]>
            : GetScalarType<T[P], ResponseGroupByOutputType[P]>
        }
      >
    >


  export type ResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    interviewId?: boolean
    question?: boolean
    answer?: boolean
    score?: boolean
    createdAt?: boolean
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["response"]>

  export type ResponseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    interviewId?: boolean
    question?: boolean
    answer?: boolean
    score?: boolean
    createdAt?: boolean
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["response"]>

  export type ResponseSelectScalar = {
    id?: boolean
    interviewId?: boolean
    question?: boolean
    answer?: boolean
    score?: boolean
    createdAt?: boolean
  }

  export type ResponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
  }
  export type ResponseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
  }

  export type $ResponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Response"
    objects: {
      interview: Prisma.$InterviewPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      interviewId: number
      question: string
      answer: string
      score: number
      createdAt: Date
    }, ExtArgs["result"]["response"]>
    composites: {}
  }

  type ResponseGetPayload<S extends boolean | null | undefined | ResponseDefaultArgs> = $Result.GetResult<Prisma.$ResponsePayload, S>

  type ResponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ResponseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ResponseCountAggregateInputType | true
    }

  export interface ResponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Response'], meta: { name: 'Response' } }
    /**
     * Find zero or one Response that matches the filter.
     * @param {ResponseFindUniqueArgs} args - Arguments to find a Response
     * @example
     * // Get one Response
     * const response = await prisma.response.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResponseFindUniqueArgs>(args: SelectSubset<T, ResponseFindUniqueArgs<ExtArgs>>): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Response that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ResponseFindUniqueOrThrowArgs} args - Arguments to find a Response
     * @example
     * // Get one Response
     * const response = await prisma.response.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResponseFindUniqueOrThrowArgs>(args: SelectSubset<T, ResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Response that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseFindFirstArgs} args - Arguments to find a Response
     * @example
     * // Get one Response
     * const response = await prisma.response.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResponseFindFirstArgs>(args?: SelectSubset<T, ResponseFindFirstArgs<ExtArgs>>): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Response that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseFindFirstOrThrowArgs} args - Arguments to find a Response
     * @example
     * // Get one Response
     * const response = await prisma.response.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResponseFindFirstOrThrowArgs>(args?: SelectSubset<T, ResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Responses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Responses
     * const responses = await prisma.response.findMany()
     * 
     * // Get first 10 Responses
     * const responses = await prisma.response.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const responseWithIdOnly = await prisma.response.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResponseFindManyArgs>(args?: SelectSubset<T, ResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Response.
     * @param {ResponseCreateArgs} args - Arguments to create a Response.
     * @example
     * // Create one Response
     * const Response = await prisma.response.create({
     *   data: {
     *     // ... data to create a Response
     *   }
     * })
     * 
     */
    create<T extends ResponseCreateArgs>(args: SelectSubset<T, ResponseCreateArgs<ExtArgs>>): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Responses.
     * @param {ResponseCreateManyArgs} args - Arguments to create many Responses.
     * @example
     * // Create many Responses
     * const response = await prisma.response.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResponseCreateManyArgs>(args?: SelectSubset<T, ResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Responses and returns the data saved in the database.
     * @param {ResponseCreateManyAndReturnArgs} args - Arguments to create many Responses.
     * @example
     * // Create many Responses
     * const response = await prisma.response.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Responses and only return the `id`
     * const responseWithIdOnly = await prisma.response.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResponseCreateManyAndReturnArgs>(args?: SelectSubset<T, ResponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Response.
     * @param {ResponseDeleteArgs} args - Arguments to delete one Response.
     * @example
     * // Delete one Response
     * const Response = await prisma.response.delete({
     *   where: {
     *     // ... filter to delete one Response
     *   }
     * })
     * 
     */
    delete<T extends ResponseDeleteArgs>(args: SelectSubset<T, ResponseDeleteArgs<ExtArgs>>): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Response.
     * @param {ResponseUpdateArgs} args - Arguments to update one Response.
     * @example
     * // Update one Response
     * const response = await prisma.response.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResponseUpdateArgs>(args: SelectSubset<T, ResponseUpdateArgs<ExtArgs>>): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Responses.
     * @param {ResponseDeleteManyArgs} args - Arguments to filter Responses to delete.
     * @example
     * // Delete a few Responses
     * const { count } = await prisma.response.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResponseDeleteManyArgs>(args?: SelectSubset<T, ResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Responses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Responses
     * const response = await prisma.response.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResponseUpdateManyArgs>(args: SelectSubset<T, ResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Response.
     * @param {ResponseUpsertArgs} args - Arguments to update or create a Response.
     * @example
     * // Update or create a Response
     * const response = await prisma.response.upsert({
     *   create: {
     *     // ... data to create a Response
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Response we want to update
     *   }
     * })
     */
    upsert<T extends ResponseUpsertArgs>(args: SelectSubset<T, ResponseUpsertArgs<ExtArgs>>): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Responses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseCountArgs} args - Arguments to filter Responses to count.
     * @example
     * // Count the number of Responses
     * const count = await prisma.response.count({
     *   where: {
     *     // ... the filter for the Responses we want to count
     *   }
     * })
    **/
    count<T extends ResponseCountArgs>(
      args?: Subset<T, ResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Response.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResponseAggregateArgs>(args: Subset<T, ResponseAggregateArgs>): Prisma.PrismaPromise<GetResponseAggregateType<T>>

    /**
     * Group by Response.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseGroupByArgs} args - Group by arguments.
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
      T extends ResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResponseGroupByArgs['orderBy'] }
        : { orderBy?: ResponseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Response model
   */
  readonly fields: ResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Response.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    interview<T extends InterviewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InterviewDefaultArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Response model
   */ 
  interface ResponseFieldRefs {
    readonly id: FieldRef<"Response", 'Int'>
    readonly interviewId: FieldRef<"Response", 'Int'>
    readonly question: FieldRef<"Response", 'String'>
    readonly answer: FieldRef<"Response", 'String'>
    readonly score: FieldRef<"Response", 'Float'>
    readonly createdAt: FieldRef<"Response", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Response findUnique
   */
  export type ResponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * Filter, which Response to fetch.
     */
    where: ResponseWhereUniqueInput
  }

  /**
   * Response findUniqueOrThrow
   */
  export type ResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * Filter, which Response to fetch.
     */
    where: ResponseWhereUniqueInput
  }

  /**
   * Response findFirst
   */
  export type ResponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * Filter, which Response to fetch.
     */
    where?: ResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Responses to fetch.
     */
    orderBy?: ResponseOrderByWithRelationInput | ResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Responses.
     */
    cursor?: ResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Responses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Responses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Responses.
     */
    distinct?: ResponseScalarFieldEnum | ResponseScalarFieldEnum[]
  }

  /**
   * Response findFirstOrThrow
   */
  export type ResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * Filter, which Response to fetch.
     */
    where?: ResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Responses to fetch.
     */
    orderBy?: ResponseOrderByWithRelationInput | ResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Responses.
     */
    cursor?: ResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Responses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Responses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Responses.
     */
    distinct?: ResponseScalarFieldEnum | ResponseScalarFieldEnum[]
  }

  /**
   * Response findMany
   */
  export type ResponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * Filter, which Responses to fetch.
     */
    where?: ResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Responses to fetch.
     */
    orderBy?: ResponseOrderByWithRelationInput | ResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Responses.
     */
    cursor?: ResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Responses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Responses.
     */
    skip?: number
    distinct?: ResponseScalarFieldEnum | ResponseScalarFieldEnum[]
  }

  /**
   * Response create
   */
  export type ResponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * The data needed to create a Response.
     */
    data: XOR<ResponseCreateInput, ResponseUncheckedCreateInput>
  }

  /**
   * Response createMany
   */
  export type ResponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Responses.
     */
    data: ResponseCreateManyInput | ResponseCreateManyInput[]
  }

  /**
   * Response createManyAndReturn
   */
  export type ResponseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Responses.
     */
    data: ResponseCreateManyInput | ResponseCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Response update
   */
  export type ResponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * The data needed to update a Response.
     */
    data: XOR<ResponseUpdateInput, ResponseUncheckedUpdateInput>
    /**
     * Choose, which Response to update.
     */
    where: ResponseWhereUniqueInput
  }

  /**
   * Response updateMany
   */
  export type ResponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Responses.
     */
    data: XOR<ResponseUpdateManyMutationInput, ResponseUncheckedUpdateManyInput>
    /**
     * Filter which Responses to update
     */
    where?: ResponseWhereInput
  }

  /**
   * Response upsert
   */
  export type ResponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * The filter to search for the Response to update in case it exists.
     */
    where: ResponseWhereUniqueInput
    /**
     * In case the Response found by the `where` argument doesn't exist, create a new Response with this data.
     */
    create: XOR<ResponseCreateInput, ResponseUncheckedCreateInput>
    /**
     * In case the Response was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResponseUpdateInput, ResponseUncheckedUpdateInput>
  }

  /**
   * Response delete
   */
  export type ResponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * Filter which Response to delete.
     */
    where: ResponseWhereUniqueInput
  }

  /**
   * Response deleteMany
   */
  export type ResponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Responses to delete
     */
    where?: ResponseWhereInput
  }

  /**
   * Response without action
   */
  export type ResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ResumeScalarFieldEnum: {
    id: 'id',
    filename: 'filename',
    text: 'text',
    atsScore: 'atsScore',
    createdAt: 'createdAt'
  };

  export type ResumeScalarFieldEnum = (typeof ResumeScalarFieldEnum)[keyof typeof ResumeScalarFieldEnum]


  export const ResumeDraftScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    payload: 'payload',
    templateKey: 'templateKey',
    atsScore: 'atsScore',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ResumeDraftScalarFieldEnum = (typeof ResumeDraftScalarFieldEnum)[keyof typeof ResumeDraftScalarFieldEnum]


  export const InterviewScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    category: 'category',
    level: 'level',
    startedAt: 'startedAt',
    endedAt: 'endedAt',
    score: 'score',
    transcript: 'transcript',
    questions: 'questions'
  };

  export type InterviewScalarFieldEnum = (typeof InterviewScalarFieldEnum)[keyof typeof InterviewScalarFieldEnum]


  export const ResponseScalarFieldEnum: {
    id: 'id',
    interviewId: 'interviewId',
    question: 'question',
    answer: 'answer',
    score: 'score',
    createdAt: 'createdAt'
  };

  export type ResponseScalarFieldEnum = (typeof ResponseScalarFieldEnum)[keyof typeof ResponseScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


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
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    interviews?: InterviewListRelationFilter
    resumeDrafts?: ResumeDraftListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    interviews?: InterviewOrderByRelationAggregateInput
    resumeDrafts?: ResumeDraftOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    interviews?: InterviewListRelationFilter
    resumeDrafts?: ResumeDraftListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ResumeWhereInput = {
    AND?: ResumeWhereInput | ResumeWhereInput[]
    OR?: ResumeWhereInput[]
    NOT?: ResumeWhereInput | ResumeWhereInput[]
    id?: IntFilter<"Resume"> | number
    filename?: StringFilter<"Resume"> | string
    text?: StringFilter<"Resume"> | string
    atsScore?: FloatNullableFilter<"Resume"> | number | null
    createdAt?: DateTimeFilter<"Resume"> | Date | string
  }

  export type ResumeOrderByWithRelationInput = {
    id?: SortOrder
    filename?: SortOrder
    text?: SortOrder
    atsScore?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type ResumeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ResumeWhereInput | ResumeWhereInput[]
    OR?: ResumeWhereInput[]
    NOT?: ResumeWhereInput | ResumeWhereInput[]
    filename?: StringFilter<"Resume"> | string
    text?: StringFilter<"Resume"> | string
    atsScore?: FloatNullableFilter<"Resume"> | number | null
    createdAt?: DateTimeFilter<"Resume"> | Date | string
  }, "id">

  export type ResumeOrderByWithAggregationInput = {
    id?: SortOrder
    filename?: SortOrder
    text?: SortOrder
    atsScore?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ResumeCountOrderByAggregateInput
    _avg?: ResumeAvgOrderByAggregateInput
    _max?: ResumeMaxOrderByAggregateInput
    _min?: ResumeMinOrderByAggregateInput
    _sum?: ResumeSumOrderByAggregateInput
  }

  export type ResumeScalarWhereWithAggregatesInput = {
    AND?: ResumeScalarWhereWithAggregatesInput | ResumeScalarWhereWithAggregatesInput[]
    OR?: ResumeScalarWhereWithAggregatesInput[]
    NOT?: ResumeScalarWhereWithAggregatesInput | ResumeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Resume"> | number
    filename?: StringWithAggregatesFilter<"Resume"> | string
    text?: StringWithAggregatesFilter<"Resume"> | string
    atsScore?: FloatNullableWithAggregatesFilter<"Resume"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Resume"> | Date | string
  }

  export type ResumeDraftWhereInput = {
    AND?: ResumeDraftWhereInput | ResumeDraftWhereInput[]
    OR?: ResumeDraftWhereInput[]
    NOT?: ResumeDraftWhereInput | ResumeDraftWhereInput[]
    id?: IntFilter<"ResumeDraft"> | number
    userId?: IntNullableFilter<"ResumeDraft"> | number | null
    title?: StringFilter<"ResumeDraft"> | string
    payload?: StringFilter<"ResumeDraft"> | string
    templateKey?: StringFilter<"ResumeDraft"> | string
    atsScore?: FloatNullableFilter<"ResumeDraft"> | number | null
    createdAt?: DateTimeFilter<"ResumeDraft"> | Date | string
    updatedAt?: DateTimeFilter<"ResumeDraft"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type ResumeDraftOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    title?: SortOrder
    payload?: SortOrder
    templateKey?: SortOrder
    atsScore?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ResumeDraftWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ResumeDraftWhereInput | ResumeDraftWhereInput[]
    OR?: ResumeDraftWhereInput[]
    NOT?: ResumeDraftWhereInput | ResumeDraftWhereInput[]
    userId?: IntNullableFilter<"ResumeDraft"> | number | null
    title?: StringFilter<"ResumeDraft"> | string
    payload?: StringFilter<"ResumeDraft"> | string
    templateKey?: StringFilter<"ResumeDraft"> | string
    atsScore?: FloatNullableFilter<"ResumeDraft"> | number | null
    createdAt?: DateTimeFilter<"ResumeDraft"> | Date | string
    updatedAt?: DateTimeFilter<"ResumeDraft"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type ResumeDraftOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    title?: SortOrder
    payload?: SortOrder
    templateKey?: SortOrder
    atsScore?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ResumeDraftCountOrderByAggregateInput
    _avg?: ResumeDraftAvgOrderByAggregateInput
    _max?: ResumeDraftMaxOrderByAggregateInput
    _min?: ResumeDraftMinOrderByAggregateInput
    _sum?: ResumeDraftSumOrderByAggregateInput
  }

  export type ResumeDraftScalarWhereWithAggregatesInput = {
    AND?: ResumeDraftScalarWhereWithAggregatesInput | ResumeDraftScalarWhereWithAggregatesInput[]
    OR?: ResumeDraftScalarWhereWithAggregatesInput[]
    NOT?: ResumeDraftScalarWhereWithAggregatesInput | ResumeDraftScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ResumeDraft"> | number
    userId?: IntNullableWithAggregatesFilter<"ResumeDraft"> | number | null
    title?: StringWithAggregatesFilter<"ResumeDraft"> | string
    payload?: StringWithAggregatesFilter<"ResumeDraft"> | string
    templateKey?: StringWithAggregatesFilter<"ResumeDraft"> | string
    atsScore?: FloatNullableWithAggregatesFilter<"ResumeDraft"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"ResumeDraft"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ResumeDraft"> | Date | string
  }

  export type InterviewWhereInput = {
    AND?: InterviewWhereInput | InterviewWhereInput[]
    OR?: InterviewWhereInput[]
    NOT?: InterviewWhereInput | InterviewWhereInput[]
    id?: IntFilter<"Interview"> | number
    userId?: IntNullableFilter<"Interview"> | number | null
    category?: StringFilter<"Interview"> | string
    level?: StringFilter<"Interview"> | string
    startedAt?: DateTimeFilter<"Interview"> | Date | string
    endedAt?: DateTimeNullableFilter<"Interview"> | Date | string | null
    score?: FloatNullableFilter<"Interview"> | number | null
    transcript?: StringNullableFilter<"Interview"> | string | null
    questions?: StringFilter<"Interview"> | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    responses?: ResponseListRelationFilter
  }

  export type InterviewOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    category?: SortOrder
    level?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    transcript?: SortOrderInput | SortOrder
    questions?: SortOrder
    user?: UserOrderByWithRelationInput
    responses?: ResponseOrderByRelationAggregateInput
  }

  export type InterviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InterviewWhereInput | InterviewWhereInput[]
    OR?: InterviewWhereInput[]
    NOT?: InterviewWhereInput | InterviewWhereInput[]
    userId?: IntNullableFilter<"Interview"> | number | null
    category?: StringFilter<"Interview"> | string
    level?: StringFilter<"Interview"> | string
    startedAt?: DateTimeFilter<"Interview"> | Date | string
    endedAt?: DateTimeNullableFilter<"Interview"> | Date | string | null
    score?: FloatNullableFilter<"Interview"> | number | null
    transcript?: StringNullableFilter<"Interview"> | string | null
    questions?: StringFilter<"Interview"> | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    responses?: ResponseListRelationFilter
  }, "id">

  export type InterviewOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    category?: SortOrder
    level?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    transcript?: SortOrderInput | SortOrder
    questions?: SortOrder
    _count?: InterviewCountOrderByAggregateInput
    _avg?: InterviewAvgOrderByAggregateInput
    _max?: InterviewMaxOrderByAggregateInput
    _min?: InterviewMinOrderByAggregateInput
    _sum?: InterviewSumOrderByAggregateInput
  }

  export type InterviewScalarWhereWithAggregatesInput = {
    AND?: InterviewScalarWhereWithAggregatesInput | InterviewScalarWhereWithAggregatesInput[]
    OR?: InterviewScalarWhereWithAggregatesInput[]
    NOT?: InterviewScalarWhereWithAggregatesInput | InterviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Interview"> | number
    userId?: IntNullableWithAggregatesFilter<"Interview"> | number | null
    category?: StringWithAggregatesFilter<"Interview"> | string
    level?: StringWithAggregatesFilter<"Interview"> | string
    startedAt?: DateTimeWithAggregatesFilter<"Interview"> | Date | string
    endedAt?: DateTimeNullableWithAggregatesFilter<"Interview"> | Date | string | null
    score?: FloatNullableWithAggregatesFilter<"Interview"> | number | null
    transcript?: StringNullableWithAggregatesFilter<"Interview"> | string | null
    questions?: StringWithAggregatesFilter<"Interview"> | string
  }

  export type ResponseWhereInput = {
    AND?: ResponseWhereInput | ResponseWhereInput[]
    OR?: ResponseWhereInput[]
    NOT?: ResponseWhereInput | ResponseWhereInput[]
    id?: IntFilter<"Response"> | number
    interviewId?: IntFilter<"Response"> | number
    question?: StringFilter<"Response"> | string
    answer?: StringFilter<"Response"> | string
    score?: FloatFilter<"Response"> | number
    createdAt?: DateTimeFilter<"Response"> | Date | string
    interview?: XOR<InterviewRelationFilter, InterviewWhereInput>
  }

  export type ResponseOrderByWithRelationInput = {
    id?: SortOrder
    interviewId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    interview?: InterviewOrderByWithRelationInput
  }

  export type ResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ResponseWhereInput | ResponseWhereInput[]
    OR?: ResponseWhereInput[]
    NOT?: ResponseWhereInput | ResponseWhereInput[]
    interviewId?: IntFilter<"Response"> | number
    question?: StringFilter<"Response"> | string
    answer?: StringFilter<"Response"> | string
    score?: FloatFilter<"Response"> | number
    createdAt?: DateTimeFilter<"Response"> | Date | string
    interview?: XOR<InterviewRelationFilter, InterviewWhereInput>
  }, "id">

  export type ResponseOrderByWithAggregationInput = {
    id?: SortOrder
    interviewId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    _count?: ResponseCountOrderByAggregateInput
    _avg?: ResponseAvgOrderByAggregateInput
    _max?: ResponseMaxOrderByAggregateInput
    _min?: ResponseMinOrderByAggregateInput
    _sum?: ResponseSumOrderByAggregateInput
  }

  export type ResponseScalarWhereWithAggregatesInput = {
    AND?: ResponseScalarWhereWithAggregatesInput | ResponseScalarWhereWithAggregatesInput[]
    OR?: ResponseScalarWhereWithAggregatesInput[]
    NOT?: ResponseScalarWhereWithAggregatesInput | ResponseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Response"> | number
    interviewId?: IntWithAggregatesFilter<"Response"> | number
    question?: StringWithAggregatesFilter<"Response"> | string
    answer?: StringWithAggregatesFilter<"Response"> | string
    score?: FloatWithAggregatesFilter<"Response"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Response"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    interviews?: InterviewCreateNestedManyWithoutUserInput
    resumeDrafts?: ResumeDraftCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    interviews?: InterviewUncheckedCreateNestedManyWithoutUserInput
    resumeDrafts?: ResumeDraftUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviews?: InterviewUpdateManyWithoutUserNestedInput
    resumeDrafts?: ResumeDraftUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviews?: InterviewUncheckedUpdateManyWithoutUserNestedInput
    resumeDrafts?: ResumeDraftUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeCreateInput = {
    filename: string
    text: string
    atsScore?: number | null
    createdAt?: Date | string
  }

  export type ResumeUncheckedCreateInput = {
    id?: number
    filename: string
    text: string
    atsScore?: number | null
    createdAt?: Date | string
  }

  export type ResumeUpdateInput = {
    filename?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    atsScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    atsScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeCreateManyInput = {
    id?: number
    filename: string
    text: string
    atsScore?: number | null
    createdAt?: Date | string
  }

  export type ResumeUpdateManyMutationInput = {
    filename?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    atsScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    atsScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeDraftCreateInput = {
    title?: string
    payload: string
    templateKey?: string
    atsScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutResumeDraftsInput
  }

  export type ResumeDraftUncheckedCreateInput = {
    id?: number
    userId?: number | null
    title?: string
    payload: string
    templateKey?: string
    atsScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResumeDraftUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    templateKey?: StringFieldUpdateOperationsInput | string
    atsScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutResumeDraftsNestedInput
  }

  export type ResumeDraftUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    templateKey?: StringFieldUpdateOperationsInput | string
    atsScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeDraftCreateManyInput = {
    id?: number
    userId?: number | null
    title?: string
    payload: string
    templateKey?: string
    atsScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResumeDraftUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    templateKey?: StringFieldUpdateOperationsInput | string
    atsScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeDraftUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    templateKey?: StringFieldUpdateOperationsInput | string
    atsScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewCreateInput = {
    category: string
    level: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    score?: number | null
    transcript?: string | null
    questions?: string
    user?: UserCreateNestedOneWithoutInterviewsInput
    responses?: ResponseCreateNestedManyWithoutInterviewInput
  }

  export type InterviewUncheckedCreateInput = {
    id?: number
    userId?: number | null
    category: string
    level: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    score?: number | null
    transcript?: string | null
    questions?: string
    responses?: ResponseUncheckedCreateNestedManyWithoutInterviewInput
  }

  export type InterviewUpdateInput = {
    category?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutInterviewsNestedInput
    responses?: ResponseUpdateManyWithoutInterviewNestedInput
  }

  export type InterviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: StringFieldUpdateOperationsInput | string
    responses?: ResponseUncheckedUpdateManyWithoutInterviewNestedInput
  }

  export type InterviewCreateManyInput = {
    id?: number
    userId?: number | null
    category: string
    level: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    score?: number | null
    transcript?: string | null
    questions?: string
  }

  export type InterviewUpdateManyMutationInput = {
    category?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: StringFieldUpdateOperationsInput | string
  }

  export type InterviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: StringFieldUpdateOperationsInput | string
  }

  export type ResponseCreateInput = {
    question: string
    answer: string
    score: number
    createdAt?: Date | string
    interview: InterviewCreateNestedOneWithoutResponsesInput
  }

  export type ResponseUncheckedCreateInput = {
    id?: number
    interviewId: number
    question: string
    answer: string
    score: number
    createdAt?: Date | string
  }

  export type ResponseUpdateInput = {
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interview?: InterviewUpdateOneRequiredWithoutResponsesNestedInput
  }

  export type ResponseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    interviewId?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResponseCreateManyInput = {
    id?: number
    interviewId: number
    question: string
    answer: string
    score: number
    createdAt?: Date | string
  }

  export type ResponseUpdateManyMutationInput = {
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResponseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    interviewId?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type InterviewListRelationFilter = {
    every?: InterviewWhereInput
    some?: InterviewWhereInput
    none?: InterviewWhereInput
  }

  export type ResumeDraftListRelationFilter = {
    every?: ResumeDraftWhereInput
    some?: ResumeDraftWhereInput
    none?: ResumeDraftWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type InterviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResumeDraftOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ResumeCountOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    text?: SortOrder
    atsScore?: SortOrder
    createdAt?: SortOrder
  }

  export type ResumeAvgOrderByAggregateInput = {
    id?: SortOrder
    atsScore?: SortOrder
  }

  export type ResumeMaxOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    text?: SortOrder
    atsScore?: SortOrder
    createdAt?: SortOrder
  }

  export type ResumeMinOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    text?: SortOrder
    atsScore?: SortOrder
    createdAt?: SortOrder
  }

  export type ResumeSumOrderByAggregateInput = {
    id?: SortOrder
    atsScore?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ResumeDraftCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    payload?: SortOrder
    templateKey?: SortOrder
    atsScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResumeDraftAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    atsScore?: SortOrder
  }

  export type ResumeDraftMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    payload?: SortOrder
    templateKey?: SortOrder
    atsScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResumeDraftMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    payload?: SortOrder
    templateKey?: SortOrder
    atsScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResumeDraftSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    atsScore?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type ResponseListRelationFilter = {
    every?: ResponseWhereInput
    some?: ResponseWhereInput
    none?: ResponseWhereInput
  }

  export type ResponseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InterviewCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    level?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    score?: SortOrder
    transcript?: SortOrder
    questions?: SortOrder
  }

  export type InterviewAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    score?: SortOrder
  }

  export type InterviewMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    level?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    score?: SortOrder
    transcript?: SortOrder
    questions?: SortOrder
  }

  export type InterviewMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    level?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    score?: SortOrder
    transcript?: SortOrder
    questions?: SortOrder
  }

  export type InterviewSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    score?: SortOrder
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

  export type InterviewRelationFilter = {
    is?: InterviewWhereInput
    isNot?: InterviewWhereInput
  }

  export type ResponseCountOrderByAggregateInput = {
    id?: SortOrder
    interviewId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
  }

  export type ResponseAvgOrderByAggregateInput = {
    id?: SortOrder
    interviewId?: SortOrder
    score?: SortOrder
  }

  export type ResponseMaxOrderByAggregateInput = {
    id?: SortOrder
    interviewId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
  }

  export type ResponseMinOrderByAggregateInput = {
    id?: SortOrder
    interviewId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
  }

  export type ResponseSumOrderByAggregateInput = {
    id?: SortOrder
    interviewId?: SortOrder
    score?: SortOrder
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

  export type InterviewCreateNestedManyWithoutUserInput = {
    create?: XOR<InterviewCreateWithoutUserInput, InterviewUncheckedCreateWithoutUserInput> | InterviewCreateWithoutUserInput[] | InterviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InterviewCreateOrConnectWithoutUserInput | InterviewCreateOrConnectWithoutUserInput[]
    createMany?: InterviewCreateManyUserInputEnvelope
    connect?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
  }

  export type ResumeDraftCreateNestedManyWithoutUserInput = {
    create?: XOR<ResumeDraftCreateWithoutUserInput, ResumeDraftUncheckedCreateWithoutUserInput> | ResumeDraftCreateWithoutUserInput[] | ResumeDraftUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResumeDraftCreateOrConnectWithoutUserInput | ResumeDraftCreateOrConnectWithoutUserInput[]
    createMany?: ResumeDraftCreateManyUserInputEnvelope
    connect?: ResumeDraftWhereUniqueInput | ResumeDraftWhereUniqueInput[]
  }

  export type InterviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InterviewCreateWithoutUserInput, InterviewUncheckedCreateWithoutUserInput> | InterviewCreateWithoutUserInput[] | InterviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InterviewCreateOrConnectWithoutUserInput | InterviewCreateOrConnectWithoutUserInput[]
    createMany?: InterviewCreateManyUserInputEnvelope
    connect?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
  }

  export type ResumeDraftUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ResumeDraftCreateWithoutUserInput, ResumeDraftUncheckedCreateWithoutUserInput> | ResumeDraftCreateWithoutUserInput[] | ResumeDraftUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResumeDraftCreateOrConnectWithoutUserInput | ResumeDraftCreateOrConnectWithoutUserInput[]
    createMany?: ResumeDraftCreateManyUserInputEnvelope
    connect?: ResumeDraftWhereUniqueInput | ResumeDraftWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type InterviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<InterviewCreateWithoutUserInput, InterviewUncheckedCreateWithoutUserInput> | InterviewCreateWithoutUserInput[] | InterviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InterviewCreateOrConnectWithoutUserInput | InterviewCreateOrConnectWithoutUserInput[]
    upsert?: InterviewUpsertWithWhereUniqueWithoutUserInput | InterviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InterviewCreateManyUserInputEnvelope
    set?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    disconnect?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    delete?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    connect?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    update?: InterviewUpdateWithWhereUniqueWithoutUserInput | InterviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InterviewUpdateManyWithWhereWithoutUserInput | InterviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InterviewScalarWhereInput | InterviewScalarWhereInput[]
  }

  export type ResumeDraftUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResumeDraftCreateWithoutUserInput, ResumeDraftUncheckedCreateWithoutUserInput> | ResumeDraftCreateWithoutUserInput[] | ResumeDraftUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResumeDraftCreateOrConnectWithoutUserInput | ResumeDraftCreateOrConnectWithoutUserInput[]
    upsert?: ResumeDraftUpsertWithWhereUniqueWithoutUserInput | ResumeDraftUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResumeDraftCreateManyUserInputEnvelope
    set?: ResumeDraftWhereUniqueInput | ResumeDraftWhereUniqueInput[]
    disconnect?: ResumeDraftWhereUniqueInput | ResumeDraftWhereUniqueInput[]
    delete?: ResumeDraftWhereUniqueInput | ResumeDraftWhereUniqueInput[]
    connect?: ResumeDraftWhereUniqueInput | ResumeDraftWhereUniqueInput[]
    update?: ResumeDraftUpdateWithWhereUniqueWithoutUserInput | ResumeDraftUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResumeDraftUpdateManyWithWhereWithoutUserInput | ResumeDraftUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResumeDraftScalarWhereInput | ResumeDraftScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InterviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InterviewCreateWithoutUserInput, InterviewUncheckedCreateWithoutUserInput> | InterviewCreateWithoutUserInput[] | InterviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InterviewCreateOrConnectWithoutUserInput | InterviewCreateOrConnectWithoutUserInput[]
    upsert?: InterviewUpsertWithWhereUniqueWithoutUserInput | InterviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InterviewCreateManyUserInputEnvelope
    set?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    disconnect?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    delete?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    connect?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    update?: InterviewUpdateWithWhereUniqueWithoutUserInput | InterviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InterviewUpdateManyWithWhereWithoutUserInput | InterviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InterviewScalarWhereInput | InterviewScalarWhereInput[]
  }

  export type ResumeDraftUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResumeDraftCreateWithoutUserInput, ResumeDraftUncheckedCreateWithoutUserInput> | ResumeDraftCreateWithoutUserInput[] | ResumeDraftUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResumeDraftCreateOrConnectWithoutUserInput | ResumeDraftCreateOrConnectWithoutUserInput[]
    upsert?: ResumeDraftUpsertWithWhereUniqueWithoutUserInput | ResumeDraftUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResumeDraftCreateManyUserInputEnvelope
    set?: ResumeDraftWhereUniqueInput | ResumeDraftWhereUniqueInput[]
    disconnect?: ResumeDraftWhereUniqueInput | ResumeDraftWhereUniqueInput[]
    delete?: ResumeDraftWhereUniqueInput | ResumeDraftWhereUniqueInput[]
    connect?: ResumeDraftWhereUniqueInput | ResumeDraftWhereUniqueInput[]
    update?: ResumeDraftUpdateWithWhereUniqueWithoutUserInput | ResumeDraftUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResumeDraftUpdateManyWithWhereWithoutUserInput | ResumeDraftUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResumeDraftScalarWhereInput | ResumeDraftScalarWhereInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutResumeDraftsInput = {
    create?: XOR<UserCreateWithoutResumeDraftsInput, UserUncheckedCreateWithoutResumeDraftsInput>
    connectOrCreate?: UserCreateOrConnectWithoutResumeDraftsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutResumeDraftsNestedInput = {
    create?: XOR<UserCreateWithoutResumeDraftsInput, UserUncheckedCreateWithoutResumeDraftsInput>
    connectOrCreate?: UserCreateOrConnectWithoutResumeDraftsInput
    upsert?: UserUpsertWithoutResumeDraftsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutResumeDraftsInput, UserUpdateWithoutResumeDraftsInput>, UserUncheckedUpdateWithoutResumeDraftsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutInterviewsInput = {
    create?: XOR<UserCreateWithoutInterviewsInput, UserUncheckedCreateWithoutInterviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInterviewsInput
    connect?: UserWhereUniqueInput
  }

  export type ResponseCreateNestedManyWithoutInterviewInput = {
    create?: XOR<ResponseCreateWithoutInterviewInput, ResponseUncheckedCreateWithoutInterviewInput> | ResponseCreateWithoutInterviewInput[] | ResponseUncheckedCreateWithoutInterviewInput[]
    connectOrCreate?: ResponseCreateOrConnectWithoutInterviewInput | ResponseCreateOrConnectWithoutInterviewInput[]
    createMany?: ResponseCreateManyInterviewInputEnvelope
    connect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
  }

  export type ResponseUncheckedCreateNestedManyWithoutInterviewInput = {
    create?: XOR<ResponseCreateWithoutInterviewInput, ResponseUncheckedCreateWithoutInterviewInput> | ResponseCreateWithoutInterviewInput[] | ResponseUncheckedCreateWithoutInterviewInput[]
    connectOrCreate?: ResponseCreateOrConnectWithoutInterviewInput | ResponseCreateOrConnectWithoutInterviewInput[]
    createMany?: ResponseCreateManyInterviewInputEnvelope
    connect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneWithoutInterviewsNestedInput = {
    create?: XOR<UserCreateWithoutInterviewsInput, UserUncheckedCreateWithoutInterviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInterviewsInput
    upsert?: UserUpsertWithoutInterviewsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInterviewsInput, UserUpdateWithoutInterviewsInput>, UserUncheckedUpdateWithoutInterviewsInput>
  }

  export type ResponseUpdateManyWithoutInterviewNestedInput = {
    create?: XOR<ResponseCreateWithoutInterviewInput, ResponseUncheckedCreateWithoutInterviewInput> | ResponseCreateWithoutInterviewInput[] | ResponseUncheckedCreateWithoutInterviewInput[]
    connectOrCreate?: ResponseCreateOrConnectWithoutInterviewInput | ResponseCreateOrConnectWithoutInterviewInput[]
    upsert?: ResponseUpsertWithWhereUniqueWithoutInterviewInput | ResponseUpsertWithWhereUniqueWithoutInterviewInput[]
    createMany?: ResponseCreateManyInterviewInputEnvelope
    set?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    disconnect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    delete?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    connect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    update?: ResponseUpdateWithWhereUniqueWithoutInterviewInput | ResponseUpdateWithWhereUniqueWithoutInterviewInput[]
    updateMany?: ResponseUpdateManyWithWhereWithoutInterviewInput | ResponseUpdateManyWithWhereWithoutInterviewInput[]
    deleteMany?: ResponseScalarWhereInput | ResponseScalarWhereInput[]
  }

  export type ResponseUncheckedUpdateManyWithoutInterviewNestedInput = {
    create?: XOR<ResponseCreateWithoutInterviewInput, ResponseUncheckedCreateWithoutInterviewInput> | ResponseCreateWithoutInterviewInput[] | ResponseUncheckedCreateWithoutInterviewInput[]
    connectOrCreate?: ResponseCreateOrConnectWithoutInterviewInput | ResponseCreateOrConnectWithoutInterviewInput[]
    upsert?: ResponseUpsertWithWhereUniqueWithoutInterviewInput | ResponseUpsertWithWhereUniqueWithoutInterviewInput[]
    createMany?: ResponseCreateManyInterviewInputEnvelope
    set?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    disconnect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    delete?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    connect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    update?: ResponseUpdateWithWhereUniqueWithoutInterviewInput | ResponseUpdateWithWhereUniqueWithoutInterviewInput[]
    updateMany?: ResponseUpdateManyWithWhereWithoutInterviewInput | ResponseUpdateManyWithWhereWithoutInterviewInput[]
    deleteMany?: ResponseScalarWhereInput | ResponseScalarWhereInput[]
  }

  export type InterviewCreateNestedOneWithoutResponsesInput = {
    create?: XOR<InterviewCreateWithoutResponsesInput, InterviewUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: InterviewCreateOrConnectWithoutResponsesInput
    connect?: InterviewWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InterviewUpdateOneRequiredWithoutResponsesNestedInput = {
    create?: XOR<InterviewCreateWithoutResponsesInput, InterviewUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: InterviewCreateOrConnectWithoutResponsesInput
    upsert?: InterviewUpsertWithoutResponsesInput
    connect?: InterviewWhereUniqueInput
    update?: XOR<XOR<InterviewUpdateToOneWithWhereWithoutResponsesInput, InterviewUpdateWithoutResponsesInput>, InterviewUncheckedUpdateWithoutResponsesInput>
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type InterviewCreateWithoutUserInput = {
    category: string
    level: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    score?: number | null
    transcript?: string | null
    questions?: string
    responses?: ResponseCreateNestedManyWithoutInterviewInput
  }

  export type InterviewUncheckedCreateWithoutUserInput = {
    id?: number
    category: string
    level: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    score?: number | null
    transcript?: string | null
    questions?: string
    responses?: ResponseUncheckedCreateNestedManyWithoutInterviewInput
  }

  export type InterviewCreateOrConnectWithoutUserInput = {
    where: InterviewWhereUniqueInput
    create: XOR<InterviewCreateWithoutUserInput, InterviewUncheckedCreateWithoutUserInput>
  }

  export type InterviewCreateManyUserInputEnvelope = {
    data: InterviewCreateManyUserInput | InterviewCreateManyUserInput[]
  }

  export type ResumeDraftCreateWithoutUserInput = {
    title?: string
    payload: string
    templateKey?: string
    atsScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResumeDraftUncheckedCreateWithoutUserInput = {
    id?: number
    title?: string
    payload: string
    templateKey?: string
    atsScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResumeDraftCreateOrConnectWithoutUserInput = {
    where: ResumeDraftWhereUniqueInput
    create: XOR<ResumeDraftCreateWithoutUserInput, ResumeDraftUncheckedCreateWithoutUserInput>
  }

  export type ResumeDraftCreateManyUserInputEnvelope = {
    data: ResumeDraftCreateManyUserInput | ResumeDraftCreateManyUserInput[]
  }

  export type InterviewUpsertWithWhereUniqueWithoutUserInput = {
    where: InterviewWhereUniqueInput
    update: XOR<InterviewUpdateWithoutUserInput, InterviewUncheckedUpdateWithoutUserInput>
    create: XOR<InterviewCreateWithoutUserInput, InterviewUncheckedCreateWithoutUserInput>
  }

  export type InterviewUpdateWithWhereUniqueWithoutUserInput = {
    where: InterviewWhereUniqueInput
    data: XOR<InterviewUpdateWithoutUserInput, InterviewUncheckedUpdateWithoutUserInput>
  }

  export type InterviewUpdateManyWithWhereWithoutUserInput = {
    where: InterviewScalarWhereInput
    data: XOR<InterviewUpdateManyMutationInput, InterviewUncheckedUpdateManyWithoutUserInput>
  }

  export type InterviewScalarWhereInput = {
    AND?: InterviewScalarWhereInput | InterviewScalarWhereInput[]
    OR?: InterviewScalarWhereInput[]
    NOT?: InterviewScalarWhereInput | InterviewScalarWhereInput[]
    id?: IntFilter<"Interview"> | number
    userId?: IntNullableFilter<"Interview"> | number | null
    category?: StringFilter<"Interview"> | string
    level?: StringFilter<"Interview"> | string
    startedAt?: DateTimeFilter<"Interview"> | Date | string
    endedAt?: DateTimeNullableFilter<"Interview"> | Date | string | null
    score?: FloatNullableFilter<"Interview"> | number | null
    transcript?: StringNullableFilter<"Interview"> | string | null
    questions?: StringFilter<"Interview"> | string
  }

  export type ResumeDraftUpsertWithWhereUniqueWithoutUserInput = {
    where: ResumeDraftWhereUniqueInput
    update: XOR<ResumeDraftUpdateWithoutUserInput, ResumeDraftUncheckedUpdateWithoutUserInput>
    create: XOR<ResumeDraftCreateWithoutUserInput, ResumeDraftUncheckedCreateWithoutUserInput>
  }

  export type ResumeDraftUpdateWithWhereUniqueWithoutUserInput = {
    where: ResumeDraftWhereUniqueInput
    data: XOR<ResumeDraftUpdateWithoutUserInput, ResumeDraftUncheckedUpdateWithoutUserInput>
  }

  export type ResumeDraftUpdateManyWithWhereWithoutUserInput = {
    where: ResumeDraftScalarWhereInput
    data: XOR<ResumeDraftUpdateManyMutationInput, ResumeDraftUncheckedUpdateManyWithoutUserInput>
  }

  export type ResumeDraftScalarWhereInput = {
    AND?: ResumeDraftScalarWhereInput | ResumeDraftScalarWhereInput[]
    OR?: ResumeDraftScalarWhereInput[]
    NOT?: ResumeDraftScalarWhereInput | ResumeDraftScalarWhereInput[]
    id?: IntFilter<"ResumeDraft"> | number
    userId?: IntNullableFilter<"ResumeDraft"> | number | null
    title?: StringFilter<"ResumeDraft"> | string
    payload?: StringFilter<"ResumeDraft"> | string
    templateKey?: StringFilter<"ResumeDraft"> | string
    atsScore?: FloatNullableFilter<"ResumeDraft"> | number | null
    createdAt?: DateTimeFilter<"ResumeDraft"> | Date | string
    updatedAt?: DateTimeFilter<"ResumeDraft"> | Date | string
  }

  export type UserCreateWithoutResumeDraftsInput = {
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    interviews?: InterviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutResumeDraftsInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    interviews?: InterviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutResumeDraftsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResumeDraftsInput, UserUncheckedCreateWithoutResumeDraftsInput>
  }

  export type UserUpsertWithoutResumeDraftsInput = {
    update: XOR<UserUpdateWithoutResumeDraftsInput, UserUncheckedUpdateWithoutResumeDraftsInput>
    create: XOR<UserCreateWithoutResumeDraftsInput, UserUncheckedCreateWithoutResumeDraftsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutResumeDraftsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutResumeDraftsInput, UserUncheckedUpdateWithoutResumeDraftsInput>
  }

  export type UserUpdateWithoutResumeDraftsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviews?: InterviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutResumeDraftsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviews?: InterviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutInterviewsInput = {
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    resumeDrafts?: ResumeDraftCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInterviewsInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    resumeDrafts?: ResumeDraftUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInterviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInterviewsInput, UserUncheckedCreateWithoutInterviewsInput>
  }

  export type ResponseCreateWithoutInterviewInput = {
    question: string
    answer: string
    score: number
    createdAt?: Date | string
  }

  export type ResponseUncheckedCreateWithoutInterviewInput = {
    id?: number
    question: string
    answer: string
    score: number
    createdAt?: Date | string
  }

  export type ResponseCreateOrConnectWithoutInterviewInput = {
    where: ResponseWhereUniqueInput
    create: XOR<ResponseCreateWithoutInterviewInput, ResponseUncheckedCreateWithoutInterviewInput>
  }

  export type ResponseCreateManyInterviewInputEnvelope = {
    data: ResponseCreateManyInterviewInput | ResponseCreateManyInterviewInput[]
  }

  export type UserUpsertWithoutInterviewsInput = {
    update: XOR<UserUpdateWithoutInterviewsInput, UserUncheckedUpdateWithoutInterviewsInput>
    create: XOR<UserCreateWithoutInterviewsInput, UserUncheckedCreateWithoutInterviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInterviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInterviewsInput, UserUncheckedUpdateWithoutInterviewsInput>
  }

  export type UserUpdateWithoutInterviewsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumeDrafts?: ResumeDraftUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInterviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumeDrafts?: ResumeDraftUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ResponseUpsertWithWhereUniqueWithoutInterviewInput = {
    where: ResponseWhereUniqueInput
    update: XOR<ResponseUpdateWithoutInterviewInput, ResponseUncheckedUpdateWithoutInterviewInput>
    create: XOR<ResponseCreateWithoutInterviewInput, ResponseUncheckedCreateWithoutInterviewInput>
  }

  export type ResponseUpdateWithWhereUniqueWithoutInterviewInput = {
    where: ResponseWhereUniqueInput
    data: XOR<ResponseUpdateWithoutInterviewInput, ResponseUncheckedUpdateWithoutInterviewInput>
  }

  export type ResponseUpdateManyWithWhereWithoutInterviewInput = {
    where: ResponseScalarWhereInput
    data: XOR<ResponseUpdateManyMutationInput, ResponseUncheckedUpdateManyWithoutInterviewInput>
  }

  export type ResponseScalarWhereInput = {
    AND?: ResponseScalarWhereInput | ResponseScalarWhereInput[]
    OR?: ResponseScalarWhereInput[]
    NOT?: ResponseScalarWhereInput | ResponseScalarWhereInput[]
    id?: IntFilter<"Response"> | number
    interviewId?: IntFilter<"Response"> | number
    question?: StringFilter<"Response"> | string
    answer?: StringFilter<"Response"> | string
    score?: FloatFilter<"Response"> | number
    createdAt?: DateTimeFilter<"Response"> | Date | string
  }

  export type InterviewCreateWithoutResponsesInput = {
    category: string
    level: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    score?: number | null
    transcript?: string | null
    questions?: string
    user?: UserCreateNestedOneWithoutInterviewsInput
  }

  export type InterviewUncheckedCreateWithoutResponsesInput = {
    id?: number
    userId?: number | null
    category: string
    level: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    score?: number | null
    transcript?: string | null
    questions?: string
  }

  export type InterviewCreateOrConnectWithoutResponsesInput = {
    where: InterviewWhereUniqueInput
    create: XOR<InterviewCreateWithoutResponsesInput, InterviewUncheckedCreateWithoutResponsesInput>
  }

  export type InterviewUpsertWithoutResponsesInput = {
    update: XOR<InterviewUpdateWithoutResponsesInput, InterviewUncheckedUpdateWithoutResponsesInput>
    create: XOR<InterviewCreateWithoutResponsesInput, InterviewUncheckedCreateWithoutResponsesInput>
    where?: InterviewWhereInput
  }

  export type InterviewUpdateToOneWithWhereWithoutResponsesInput = {
    where?: InterviewWhereInput
    data: XOR<InterviewUpdateWithoutResponsesInput, InterviewUncheckedUpdateWithoutResponsesInput>
  }

  export type InterviewUpdateWithoutResponsesInput = {
    category?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutInterviewsNestedInput
  }

  export type InterviewUncheckedUpdateWithoutResponsesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: StringFieldUpdateOperationsInput | string
  }

  export type InterviewCreateManyUserInput = {
    id?: number
    category: string
    level: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    score?: number | null
    transcript?: string | null
    questions?: string
  }

  export type ResumeDraftCreateManyUserInput = {
    id?: number
    title?: string
    payload: string
    templateKey?: string
    atsScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InterviewUpdateWithoutUserInput = {
    category?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: StringFieldUpdateOperationsInput | string
    responses?: ResponseUpdateManyWithoutInterviewNestedInput
  }

  export type InterviewUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: StringFieldUpdateOperationsInput | string
    responses?: ResponseUncheckedUpdateManyWithoutInterviewNestedInput
  }

  export type InterviewUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: StringFieldUpdateOperationsInput | string
  }

  export type ResumeDraftUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    templateKey?: StringFieldUpdateOperationsInput | string
    atsScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeDraftUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    templateKey?: StringFieldUpdateOperationsInput | string
    atsScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeDraftUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    templateKey?: StringFieldUpdateOperationsInput | string
    atsScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResponseCreateManyInterviewInput = {
    id?: number
    question: string
    answer: string
    score: number
    createdAt?: Date | string
  }

  export type ResponseUpdateWithoutInterviewInput = {
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResponseUncheckedUpdateWithoutInterviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResponseUncheckedUpdateManyWithoutInterviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InterviewCountOutputTypeDefaultArgs instead
     */
    export type InterviewCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InterviewCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ResumeDefaultArgs instead
     */
    export type ResumeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ResumeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ResumeDraftDefaultArgs instead
     */
    export type ResumeDraftArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ResumeDraftDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InterviewDefaultArgs instead
     */
    export type InterviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InterviewDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ResponseDefaultArgs instead
     */
    export type ResponseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ResponseDefaultArgs<ExtArgs>

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