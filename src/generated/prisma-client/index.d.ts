// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  sample: (where?: SampleWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  sample: (where: SampleWhereUniqueInput) => SampleNullablePromise;
  samples: (args?: {
    where?: SampleWhereInput;
    orderBy?: SampleOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Sample>;
  samplesConnection: (args?: {
    where?: SampleWhereInput;
    orderBy?: SampleOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => SampleConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createSample: (data: SampleCreateInput) => SamplePromise;
  updateSample: (args: {
    data: SampleUpdateInput;
    where: SampleWhereUniqueInput;
  }) => SamplePromise;
  updateManySamples: (args: {
    data: SampleUpdateManyMutationInput;
    where?: SampleWhereInput;
  }) => BatchPayloadPromise;
  upsertSample: (args: {
    where: SampleWhereUniqueInput;
    create: SampleCreateInput;
    update: SampleUpdateInput;
  }) => SamplePromise;
  deleteSample: (where: SampleWhereUniqueInput) => SamplePromise;
  deleteManySamples: (where?: SampleWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  sample: (
    where?: SampleSubscriptionWhereInput
  ) => SampleSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type SampleOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "isbn_ASC"
  | "isbn_DESC"
  | "title_ASC"
  | "title_DESC"
  | "author_ASC"
  | "author_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "email_ASC"
  | "email_DESC"
  | "fullname_ASC"
  | "fullname_DESC"
  | "password_ASC"
  | "password_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type SampleWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface SampleWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  isbn?: Maybe<String>;
  isbn_not?: Maybe<String>;
  isbn_in?: Maybe<String[] | String>;
  isbn_not_in?: Maybe<String[] | String>;
  isbn_lt?: Maybe<String>;
  isbn_lte?: Maybe<String>;
  isbn_gt?: Maybe<String>;
  isbn_gte?: Maybe<String>;
  isbn_contains?: Maybe<String>;
  isbn_not_contains?: Maybe<String>;
  isbn_starts_with?: Maybe<String>;
  isbn_not_starts_with?: Maybe<String>;
  isbn_ends_with?: Maybe<String>;
  isbn_not_ends_with?: Maybe<String>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  author?: Maybe<String>;
  author_not?: Maybe<String>;
  author_in?: Maybe<String[] | String>;
  author_not_in?: Maybe<String[] | String>;
  author_lt?: Maybe<String>;
  author_lte?: Maybe<String>;
  author_gt?: Maybe<String>;
  author_gte?: Maybe<String>;
  author_contains?: Maybe<String>;
  author_not_contains?: Maybe<String>;
  author_starts_with?: Maybe<String>;
  author_not_starts_with?: Maybe<String>;
  author_ends_with?: Maybe<String>;
  author_not_ends_with?: Maybe<String>;
  AND?: Maybe<SampleWhereInput[] | SampleWhereInput>;
  OR?: Maybe<SampleWhereInput[] | SampleWhereInput>;
  NOT?: Maybe<SampleWhereInput[] | SampleWhereInput>;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  email?: Maybe<String>;
}>;

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  email?: Maybe<String>;
  email_not?: Maybe<String>;
  email_in?: Maybe<String[] | String>;
  email_not_in?: Maybe<String[] | String>;
  email_lt?: Maybe<String>;
  email_lte?: Maybe<String>;
  email_gt?: Maybe<String>;
  email_gte?: Maybe<String>;
  email_contains?: Maybe<String>;
  email_not_contains?: Maybe<String>;
  email_starts_with?: Maybe<String>;
  email_not_starts_with?: Maybe<String>;
  email_ends_with?: Maybe<String>;
  email_not_ends_with?: Maybe<String>;
  fullname?: Maybe<String>;
  fullname_not?: Maybe<String>;
  fullname_in?: Maybe<String[] | String>;
  fullname_not_in?: Maybe<String[] | String>;
  fullname_lt?: Maybe<String>;
  fullname_lte?: Maybe<String>;
  fullname_gt?: Maybe<String>;
  fullname_gte?: Maybe<String>;
  fullname_contains?: Maybe<String>;
  fullname_not_contains?: Maybe<String>;
  fullname_starts_with?: Maybe<String>;
  fullname_not_starts_with?: Maybe<String>;
  fullname_ends_with?: Maybe<String>;
  fullname_not_ends_with?: Maybe<String>;
  password?: Maybe<String>;
  password_not?: Maybe<String>;
  password_in?: Maybe<String[] | String>;
  password_not_in?: Maybe<String[] | String>;
  password_lt?: Maybe<String>;
  password_lte?: Maybe<String>;
  password_gt?: Maybe<String>;
  password_gte?: Maybe<String>;
  password_contains?: Maybe<String>;
  password_not_contains?: Maybe<String>;
  password_starts_with?: Maybe<String>;
  password_not_starts_with?: Maybe<String>;
  password_ends_with?: Maybe<String>;
  password_not_ends_with?: Maybe<String>;
  samples_every?: Maybe<SampleWhereInput>;
  samples_some?: Maybe<SampleWhereInput>;
  samples_none?: Maybe<SampleWhereInput>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export interface SampleCreateInput {
  id?: Maybe<ID_Input>;
  isbn: String;
  title: String;
  author?: Maybe<String>;
}

export interface SampleUpdateInput {
  isbn?: Maybe<String>;
  title?: Maybe<String>;
  author?: Maybe<String>;
}

export interface SampleUpdateManyMutationInput {
  isbn?: Maybe<String>;
  title?: Maybe<String>;
  author?: Maybe<String>;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  email: String;
  fullname: String;
  password: String;
  samples?: Maybe<SampleCreateManyInput>;
}

export interface SampleCreateManyInput {
  create?: Maybe<SampleCreateInput[] | SampleCreateInput>;
  connect?: Maybe<SampleWhereUniqueInput[] | SampleWhereUniqueInput>;
}

export interface UserUpdateInput {
  email?: Maybe<String>;
  fullname?: Maybe<String>;
  password?: Maybe<String>;
  samples?: Maybe<SampleUpdateManyInput>;
}

export interface SampleUpdateManyInput {
  create?: Maybe<SampleCreateInput[] | SampleCreateInput>;
  update?: Maybe<
    | SampleUpdateWithWhereUniqueNestedInput[]
    | SampleUpdateWithWhereUniqueNestedInput
  >;
  upsert?: Maybe<
    | SampleUpsertWithWhereUniqueNestedInput[]
    | SampleUpsertWithWhereUniqueNestedInput
  >;
  delete?: Maybe<SampleWhereUniqueInput[] | SampleWhereUniqueInput>;
  connect?: Maybe<SampleWhereUniqueInput[] | SampleWhereUniqueInput>;
  set?: Maybe<SampleWhereUniqueInput[] | SampleWhereUniqueInput>;
  disconnect?: Maybe<SampleWhereUniqueInput[] | SampleWhereUniqueInput>;
  deleteMany?: Maybe<SampleScalarWhereInput[] | SampleScalarWhereInput>;
  updateMany?: Maybe<
    | SampleUpdateManyWithWhereNestedInput[]
    | SampleUpdateManyWithWhereNestedInput
  >;
}

export interface SampleUpdateWithWhereUniqueNestedInput {
  where: SampleWhereUniqueInput;
  data: SampleUpdateDataInput;
}

export interface SampleUpdateDataInput {
  isbn?: Maybe<String>;
  title?: Maybe<String>;
  author?: Maybe<String>;
}

export interface SampleUpsertWithWhereUniqueNestedInput {
  where: SampleWhereUniqueInput;
  update: SampleUpdateDataInput;
  create: SampleCreateInput;
}

export interface SampleScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  isbn?: Maybe<String>;
  isbn_not?: Maybe<String>;
  isbn_in?: Maybe<String[] | String>;
  isbn_not_in?: Maybe<String[] | String>;
  isbn_lt?: Maybe<String>;
  isbn_lte?: Maybe<String>;
  isbn_gt?: Maybe<String>;
  isbn_gte?: Maybe<String>;
  isbn_contains?: Maybe<String>;
  isbn_not_contains?: Maybe<String>;
  isbn_starts_with?: Maybe<String>;
  isbn_not_starts_with?: Maybe<String>;
  isbn_ends_with?: Maybe<String>;
  isbn_not_ends_with?: Maybe<String>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  author?: Maybe<String>;
  author_not?: Maybe<String>;
  author_in?: Maybe<String[] | String>;
  author_not_in?: Maybe<String[] | String>;
  author_lt?: Maybe<String>;
  author_lte?: Maybe<String>;
  author_gt?: Maybe<String>;
  author_gte?: Maybe<String>;
  author_contains?: Maybe<String>;
  author_not_contains?: Maybe<String>;
  author_starts_with?: Maybe<String>;
  author_not_starts_with?: Maybe<String>;
  author_ends_with?: Maybe<String>;
  author_not_ends_with?: Maybe<String>;
  AND?: Maybe<SampleScalarWhereInput[] | SampleScalarWhereInput>;
  OR?: Maybe<SampleScalarWhereInput[] | SampleScalarWhereInput>;
  NOT?: Maybe<SampleScalarWhereInput[] | SampleScalarWhereInput>;
}

export interface SampleUpdateManyWithWhereNestedInput {
  where: SampleScalarWhereInput;
  data: SampleUpdateManyDataInput;
}

export interface SampleUpdateManyDataInput {
  isbn?: Maybe<String>;
  title?: Maybe<String>;
  author?: Maybe<String>;
}

export interface UserUpdateManyMutationInput {
  email?: Maybe<String>;
  fullname?: Maybe<String>;
  password?: Maybe<String>;
}

export interface SampleSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<SampleWhereInput>;
  AND?: Maybe<SampleSubscriptionWhereInput[] | SampleSubscriptionWhereInput>;
  OR?: Maybe<SampleSubscriptionWhereInput[] | SampleSubscriptionWhereInput>;
  NOT?: Maybe<SampleSubscriptionWhereInput[] | SampleSubscriptionWhereInput>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Sample {
  id: ID_Output;
  isbn: String;
  title: String;
  author?: String;
}

export interface SamplePromise extends Promise<Sample>, Fragmentable {
  id: () => Promise<ID_Output>;
  isbn: () => Promise<String>;
  title: () => Promise<String>;
  author: () => Promise<String>;
}

export interface SampleSubscription
  extends Promise<AsyncIterator<Sample>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  isbn: () => Promise<AsyncIterator<String>>;
  title: () => Promise<AsyncIterator<String>>;
  author: () => Promise<AsyncIterator<String>>;
}

export interface SampleNullablePromise
  extends Promise<Sample | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  isbn: () => Promise<String>;
  title: () => Promise<String>;
  author: () => Promise<String>;
}

export interface SampleConnection {
  pageInfo: PageInfo;
  edges: SampleEdge[];
}

export interface SampleConnectionPromise
  extends Promise<SampleConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<SampleEdge>>() => T;
  aggregate: <T = AggregateSamplePromise>() => T;
}

export interface SampleConnectionSubscription
  extends Promise<AsyncIterator<SampleConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<SampleEdgeSubscription>>>() => T;
  aggregate: <T = AggregateSampleSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface SampleEdge {
  node: Sample;
  cursor: String;
}

export interface SampleEdgePromise extends Promise<SampleEdge>, Fragmentable {
  node: <T = SamplePromise>() => T;
  cursor: () => Promise<String>;
}

export interface SampleEdgeSubscription
  extends Promise<AsyncIterator<SampleEdge>>,
    Fragmentable {
  node: <T = SampleSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateSample {
  count: Int;
}

export interface AggregateSamplePromise
  extends Promise<AggregateSample>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateSampleSubscription
  extends Promise<AsyncIterator<AggregateSample>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface User {
  id: ID_Output;
  email: String;
  fullname: String;
  password: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  fullname: () => Promise<String>;
  password: () => Promise<String>;
  samples: <T = FragmentableArray<Sample>>(args?: {
    where?: SampleWhereInput;
    orderBy?: SampleOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  fullname: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  samples: <T = Promise<AsyncIterator<SampleSubscription>>>(args?: {
    where?: SampleWhereInput;
    orderBy?: SampleOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  fullname: () => Promise<String>;
  password: () => Promise<String>;
  samples: <T = FragmentableArray<Sample>>(args?: {
    where?: SampleWhereInput;
    orderBy?: SampleOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface SampleSubscriptionPayload {
  mutation: MutationType;
  node: Sample;
  updatedFields: String[];
  previousValues: SamplePreviousValues;
}

export interface SampleSubscriptionPayloadPromise
  extends Promise<SampleSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = SamplePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = SamplePreviousValuesPromise>() => T;
}

export interface SampleSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<SampleSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = SampleSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = SamplePreviousValuesSubscription>() => T;
}

export interface SamplePreviousValues {
  id: ID_Output;
  isbn: String;
  title: String;
  author?: String;
}

export interface SamplePreviousValuesPromise
  extends Promise<SamplePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  isbn: () => Promise<String>;
  title: () => Promise<String>;
  author: () => Promise<String>;
}

export interface SamplePreviousValuesSubscription
  extends Promise<AsyncIterator<SamplePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  isbn: () => Promise<AsyncIterator<String>>;
  title: () => Promise<AsyncIterator<String>>;
  author: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
  email: String;
  fullname: String;
  password: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  fullname: () => Promise<String>;
  password: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  fullname: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Sample",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
