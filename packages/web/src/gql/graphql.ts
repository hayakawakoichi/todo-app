/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string
    String: string
    Boolean: boolean
    Int: number
    Float: number
    timestamptz: unknown
    uuid: unknown
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
    _eq?: InputMaybe<Scalars['String']>
    _gt?: InputMaybe<Scalars['String']>
    _gte?: InputMaybe<Scalars['String']>
    /** does the column match the given case-insensitive pattern */
    _ilike?: InputMaybe<Scalars['String']>
    _in?: InputMaybe<Array<Scalars['String']>>
    /** does the column match the given POSIX regular expression, case insensitive */
    _iregex?: InputMaybe<Scalars['String']>
    _is_null?: InputMaybe<Scalars['Boolean']>
    /** does the column match the given pattern */
    _like?: InputMaybe<Scalars['String']>
    _lt?: InputMaybe<Scalars['String']>
    _lte?: InputMaybe<Scalars['String']>
    _neq?: InputMaybe<Scalars['String']>
    /** does the column NOT match the given case-insensitive pattern */
    _nilike?: InputMaybe<Scalars['String']>
    _nin?: InputMaybe<Array<Scalars['String']>>
    /** does the column NOT match the given POSIX regular expression, case insensitive */
    _niregex?: InputMaybe<Scalars['String']>
    /** does the column NOT match the given pattern */
    _nlike?: InputMaybe<Scalars['String']>
    /** does the column NOT match the given POSIX regular expression, case sensitive */
    _nregex?: InputMaybe<Scalars['String']>
    /** does the column NOT match the given SQL regular expression */
    _nsimilar?: InputMaybe<Scalars['String']>
    /** does the column match the given POSIX regular expression, case sensitive */
    _regex?: InputMaybe<Scalars['String']>
    /** does the column match the given SQL regular expression */
    _similar?: InputMaybe<Scalars['String']>
}

/** user group */
export type Group = {
    __typename?: 'group'
    created_at: Scalars['timestamptz']
    created_by: Scalars['String']
    deleted_at?: Maybe<Scalars['timestamptz']>
    /** An array relationship */
    group_members: Array<Group_Member>
    id: Scalars['uuid']
    name: Scalars['String']
    /** An array relationship */
    tasks: Array<Task>
    updated_at: Scalars['timestamptz']
    /** An object relationship */
    user: User
}

/** user group */
export type GroupGroup_MembersArgs = {
    distinct_on?: InputMaybe<Array<Group_Member_Select_Column>>
    limit?: InputMaybe<Scalars['Int']>
    offset?: InputMaybe<Scalars['Int']>
    order_by?: InputMaybe<Array<Group_Member_Order_By>>
    where?: InputMaybe<Group_Member_Bool_Exp>
}

/** user group */
export type GroupTasksArgs = {
    distinct_on?: InputMaybe<Array<Task_Select_Column>>
    limit?: InputMaybe<Scalars['Int']>
    offset?: InputMaybe<Scalars['Int']>
    order_by?: InputMaybe<Array<Task_Order_By>>
    where?: InputMaybe<Task_Bool_Exp>
}

/** order by aggregate values of table "group" */
export type Group_Aggregate_Order_By = {
    count?: InputMaybe<Order_By>
    max?: InputMaybe<Group_Max_Order_By>
    min?: InputMaybe<Group_Min_Order_By>
}

/** input type for inserting array relation for remote table "group" */
export type Group_Arr_Rel_Insert_Input = {
    data: Array<Group_Insert_Input>
    /** upsert condition */
    on_conflict?: InputMaybe<Group_On_Conflict>
}

/** Boolean expression to filter rows from the table "group". All fields are combined with a logical 'AND'. */
export type Group_Bool_Exp = {
    _and?: InputMaybe<Array<Group_Bool_Exp>>
    _not?: InputMaybe<Group_Bool_Exp>
    _or?: InputMaybe<Array<Group_Bool_Exp>>
    created_at?: InputMaybe<Timestamptz_Comparison_Exp>
    created_by?: InputMaybe<String_Comparison_Exp>
    deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>
    group_members?: InputMaybe<Group_Member_Bool_Exp>
    id?: InputMaybe<Uuid_Comparison_Exp>
    name?: InputMaybe<String_Comparison_Exp>
    tasks?: InputMaybe<Task_Bool_Exp>
    updated_at?: InputMaybe<Timestamptz_Comparison_Exp>
    user?: InputMaybe<User_Bool_Exp>
}

/** unique or primary key constraints on table "group" */
export enum Group_Constraint {
    /** unique or primary key constraint */
    GroupPkey = 'group_pkey',
}

/** input type for inserting data into table "group" */
export type Group_Insert_Input = {
    created_at?: InputMaybe<Scalars['timestamptz']>
    created_by?: InputMaybe<Scalars['String']>
    deleted_at?: InputMaybe<Scalars['timestamptz']>
    group_members?: InputMaybe<Group_Member_Arr_Rel_Insert_Input>
    id?: InputMaybe<Scalars['uuid']>
    name?: InputMaybe<Scalars['String']>
    tasks?: InputMaybe<Task_Arr_Rel_Insert_Input>
    updated_at?: InputMaybe<Scalars['timestamptz']>
    user?: InputMaybe<User_Obj_Rel_Insert_Input>
}

/** order by max() on columns of table "group" */
export type Group_Max_Order_By = {
    created_at?: InputMaybe<Order_By>
    created_by?: InputMaybe<Order_By>
    deleted_at?: InputMaybe<Order_By>
    id?: InputMaybe<Order_By>
    name?: InputMaybe<Order_By>
    updated_at?: InputMaybe<Order_By>
}

/** group member */
export type Group_Member = {
    __typename?: 'group_member'
    created_at: Scalars['timestamptz']
    deleted_at?: Maybe<Scalars['timestamptz']>
    /** An object relationship */
    group: Group
    group_id: Scalars['uuid']
    id: Scalars['uuid']
    updated_at: Scalars['timestamptz']
    user_id: Scalars['String']
}

/** order by aggregate values of table "group_member" */
export type Group_Member_Aggregate_Order_By = {
    count?: InputMaybe<Order_By>
    max?: InputMaybe<Group_Member_Max_Order_By>
    min?: InputMaybe<Group_Member_Min_Order_By>
}

/** input type for inserting array relation for remote table "group_member" */
export type Group_Member_Arr_Rel_Insert_Input = {
    data: Array<Group_Member_Insert_Input>
    /** upsert condition */
    on_conflict?: InputMaybe<Group_Member_On_Conflict>
}

/** Boolean expression to filter rows from the table "group_member". All fields are combined with a logical 'AND'. */
export type Group_Member_Bool_Exp = {
    _and?: InputMaybe<Array<Group_Member_Bool_Exp>>
    _not?: InputMaybe<Group_Member_Bool_Exp>
    _or?: InputMaybe<Array<Group_Member_Bool_Exp>>
    created_at?: InputMaybe<Timestamptz_Comparison_Exp>
    deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>
    group?: InputMaybe<Group_Bool_Exp>
    group_id?: InputMaybe<Uuid_Comparison_Exp>
    id?: InputMaybe<Uuid_Comparison_Exp>
    updated_at?: InputMaybe<Timestamptz_Comparison_Exp>
    user_id?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "group_member" */
export enum Group_Member_Constraint {
    /** unique or primary key constraint */
    GroupMemberPkey = 'group_member_pkey',
}

/** input type for inserting data into table "group_member" */
export type Group_Member_Insert_Input = {
    created_at?: InputMaybe<Scalars['timestamptz']>
    deleted_at?: InputMaybe<Scalars['timestamptz']>
    group?: InputMaybe<Group_Obj_Rel_Insert_Input>
    group_id?: InputMaybe<Scalars['uuid']>
    id?: InputMaybe<Scalars['uuid']>
    updated_at?: InputMaybe<Scalars['timestamptz']>
    user_id?: InputMaybe<Scalars['String']>
}

/** order by max() on columns of table "group_member" */
export type Group_Member_Max_Order_By = {
    created_at?: InputMaybe<Order_By>
    deleted_at?: InputMaybe<Order_By>
    group_id?: InputMaybe<Order_By>
    id?: InputMaybe<Order_By>
    updated_at?: InputMaybe<Order_By>
    user_id?: InputMaybe<Order_By>
}

/** order by min() on columns of table "group_member" */
export type Group_Member_Min_Order_By = {
    created_at?: InputMaybe<Order_By>
    deleted_at?: InputMaybe<Order_By>
    group_id?: InputMaybe<Order_By>
    id?: InputMaybe<Order_By>
    updated_at?: InputMaybe<Order_By>
    user_id?: InputMaybe<Order_By>
}

/** response of any mutation on the table "group_member" */
export type Group_Member_Mutation_Response = {
    __typename?: 'group_member_mutation_response'
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: Array<Group_Member>
}

/** on_conflict condition type for table "group_member" */
export type Group_Member_On_Conflict = {
    constraint: Group_Member_Constraint
    update_columns?: Array<Group_Member_Update_Column>
    where?: InputMaybe<Group_Member_Bool_Exp>
}

/** Ordering options when selecting data from "group_member". */
export type Group_Member_Order_By = {
    created_at?: InputMaybe<Order_By>
    deleted_at?: InputMaybe<Order_By>
    group?: InputMaybe<Group_Order_By>
    group_id?: InputMaybe<Order_By>
    id?: InputMaybe<Order_By>
    updated_at?: InputMaybe<Order_By>
    user_id?: InputMaybe<Order_By>
}

/** primary key columns input for table: group_member */
export type Group_Member_Pk_Columns_Input = {
    id: Scalars['uuid']
}

/** select columns of table "group_member" */
export enum Group_Member_Select_Column {
    /** column name */
    CreatedAt = 'created_at',
    /** column name */
    DeletedAt = 'deleted_at',
    /** column name */
    GroupId = 'group_id',
    /** column name */
    Id = 'id',
    /** column name */
    UpdatedAt = 'updated_at',
    /** column name */
    UserId = 'user_id',
}

/** input type for updating data in table "group_member" */
export type Group_Member_Set_Input = {
    created_at?: InputMaybe<Scalars['timestamptz']>
    deleted_at?: InputMaybe<Scalars['timestamptz']>
    group_id?: InputMaybe<Scalars['uuid']>
    id?: InputMaybe<Scalars['uuid']>
    updated_at?: InputMaybe<Scalars['timestamptz']>
    user_id?: InputMaybe<Scalars['String']>
}

/** update columns of table "group_member" */
export enum Group_Member_Update_Column {
    /** column name */
    CreatedAt = 'created_at',
    /** column name */
    DeletedAt = 'deleted_at',
    /** column name */
    GroupId = 'group_id',
    /** column name */
    Id = 'id',
    /** column name */
    UpdatedAt = 'updated_at',
    /** column name */
    UserId = 'user_id',
}

/** order by min() on columns of table "group" */
export type Group_Min_Order_By = {
    created_at?: InputMaybe<Order_By>
    created_by?: InputMaybe<Order_By>
    deleted_at?: InputMaybe<Order_By>
    id?: InputMaybe<Order_By>
    name?: InputMaybe<Order_By>
    updated_at?: InputMaybe<Order_By>
}

/** response of any mutation on the table "group" */
export type Group_Mutation_Response = {
    __typename?: 'group_mutation_response'
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: Array<Group>
}

/** input type for inserting object relation for remote table "group" */
export type Group_Obj_Rel_Insert_Input = {
    data: Group_Insert_Input
    /** upsert condition */
    on_conflict?: InputMaybe<Group_On_Conflict>
}

/** on_conflict condition type for table "group" */
export type Group_On_Conflict = {
    constraint: Group_Constraint
    update_columns?: Array<Group_Update_Column>
    where?: InputMaybe<Group_Bool_Exp>
}

/** Ordering options when selecting data from "group". */
export type Group_Order_By = {
    created_at?: InputMaybe<Order_By>
    created_by?: InputMaybe<Order_By>
    deleted_at?: InputMaybe<Order_By>
    group_members_aggregate?: InputMaybe<Group_Member_Aggregate_Order_By>
    id?: InputMaybe<Order_By>
    name?: InputMaybe<Order_By>
    tasks_aggregate?: InputMaybe<Task_Aggregate_Order_By>
    updated_at?: InputMaybe<Order_By>
    user?: InputMaybe<User_Order_By>
}

/** primary key columns input for table: group */
export type Group_Pk_Columns_Input = {
    id: Scalars['uuid']
}

/** select columns of table "group" */
export enum Group_Select_Column {
    /** column name */
    CreatedAt = 'created_at',
    /** column name */
    CreatedBy = 'created_by',
    /** column name */
    DeletedAt = 'deleted_at',
    /** column name */
    Id = 'id',
    /** column name */
    Name = 'name',
    /** column name */
    UpdatedAt = 'updated_at',
}

/** input type for updating data in table "group" */
export type Group_Set_Input = {
    created_at?: InputMaybe<Scalars['timestamptz']>
    created_by?: InputMaybe<Scalars['String']>
    deleted_at?: InputMaybe<Scalars['timestamptz']>
    id?: InputMaybe<Scalars['uuid']>
    name?: InputMaybe<Scalars['String']>
    updated_at?: InputMaybe<Scalars['timestamptz']>
}

/** update columns of table "group" */
export enum Group_Update_Column {
    /** column name */
    CreatedAt = 'created_at',
    /** column name */
    CreatedBy = 'created_by',
    /** column name */
    DeletedAt = 'deleted_at',
    /** column name */
    Id = 'id',
    /** column name */
    Name = 'name',
    /** column name */
    UpdatedAt = 'updated_at',
}

/** mutation root */
export type Mutation_Root = {
    __typename?: 'mutation_root'
    /** insert data into the table: "group" */
    insert_group?: Maybe<Group_Mutation_Response>
    /** insert data into the table: "group_member" */
    insert_group_member?: Maybe<Group_Member_Mutation_Response>
    /** insert a single row into the table: "group_member" */
    insert_group_member_one?: Maybe<Group_Member>
    /** insert a single row into the table: "group" */
    insert_group_one?: Maybe<Group>
    /** insert data into the table: "task" */
    insert_task?: Maybe<Task_Mutation_Response>
    /** insert a single row into the table: "task" */
    insert_task_one?: Maybe<Task>
    /** insert data into the table: "user" */
    insert_user?: Maybe<User_Mutation_Response>
    /** insert a single row into the table: "user" */
    insert_user_one?: Maybe<User>
    /** update data of the table: "group" */
    update_group?: Maybe<Group_Mutation_Response>
    /** update single row of the table: "group" */
    update_group_by_pk?: Maybe<Group>
    /** update data of the table: "group_member" */
    update_group_member?: Maybe<Group_Member_Mutation_Response>
    /** update single row of the table: "group_member" */
    update_group_member_by_pk?: Maybe<Group_Member>
    /** update data of the table: "task" */
    update_task?: Maybe<Task_Mutation_Response>
    /** update single row of the table: "task" */
    update_task_by_pk?: Maybe<Task>
    /** update data of the table: "user" */
    update_user?: Maybe<User_Mutation_Response>
    /** update single row of the table: "user" */
    update_user_by_pk?: Maybe<User>
}

/** mutation root */
export type Mutation_RootInsert_GroupArgs = {
    objects: Array<Group_Insert_Input>
    on_conflict?: InputMaybe<Group_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Group_MemberArgs = {
    objects: Array<Group_Member_Insert_Input>
    on_conflict?: InputMaybe<Group_Member_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Group_Member_OneArgs = {
    object: Group_Member_Insert_Input
    on_conflict?: InputMaybe<Group_Member_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Group_OneArgs = {
    object: Group_Insert_Input
    on_conflict?: InputMaybe<Group_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_TaskArgs = {
    objects: Array<Task_Insert_Input>
    on_conflict?: InputMaybe<Task_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Task_OneArgs = {
    object: Task_Insert_Input
    on_conflict?: InputMaybe<Task_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_UserArgs = {
    objects: Array<User_Insert_Input>
    on_conflict?: InputMaybe<User_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
    object: User_Insert_Input
    on_conflict?: InputMaybe<User_On_Conflict>
}

/** mutation root */
export type Mutation_RootUpdate_GroupArgs = {
    _set?: InputMaybe<Group_Set_Input>
    where: Group_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Group_By_PkArgs = {
    _set?: InputMaybe<Group_Set_Input>
    pk_columns: Group_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Group_MemberArgs = {
    _set?: InputMaybe<Group_Member_Set_Input>
    where: Group_Member_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Group_Member_By_PkArgs = {
    _set?: InputMaybe<Group_Member_Set_Input>
    pk_columns: Group_Member_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_TaskArgs = {
    _set?: InputMaybe<Task_Set_Input>
    where: Task_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Task_By_PkArgs = {
    _set?: InputMaybe<Task_Set_Input>
    pk_columns: Task_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
    _set?: InputMaybe<User_Set_Input>
    where: User_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
    _set?: InputMaybe<User_Set_Input>
    pk_columns: User_Pk_Columns_Input
}

/** column ordering options */
export enum Order_By {
    /** in ascending order, nulls last */
    Asc = 'asc',
    /** in ascending order, nulls first */
    AscNullsFirst = 'asc_nulls_first',
    /** in ascending order, nulls last */
    AscNullsLast = 'asc_nulls_last',
    /** in descending order, nulls first */
    Desc = 'desc',
    /** in descending order, nulls first */
    DescNullsFirst = 'desc_nulls_first',
    /** in descending order, nulls last */
    DescNullsLast = 'desc_nulls_last',
}

export type Query_Root = {
    __typename?: 'query_root'
    /** fetch data from the table: "group" */
    group: Array<Group>
    /** fetch data from the table: "group" using primary key columns */
    group_by_pk?: Maybe<Group>
    /** fetch data from the table: "group_member" */
    group_member: Array<Group_Member>
    /** fetch data from the table: "group_member" using primary key columns */
    group_member_by_pk?: Maybe<Group_Member>
    /** fetch data from the table: "task" */
    task: Array<Task>
    /** fetch data from the table: "task" using primary key columns */
    task_by_pk?: Maybe<Task>
    /** fetch data from the table: "user" */
    user: Array<User>
    /** fetch data from the table: "user" using primary key columns */
    user_by_pk?: Maybe<User>
}

export type Query_RootGroupArgs = {
    distinct_on?: InputMaybe<Array<Group_Select_Column>>
    limit?: InputMaybe<Scalars['Int']>
    offset?: InputMaybe<Scalars['Int']>
    order_by?: InputMaybe<Array<Group_Order_By>>
    where?: InputMaybe<Group_Bool_Exp>
}

export type Query_RootGroup_By_PkArgs = {
    id: Scalars['uuid']
}

export type Query_RootGroup_MemberArgs = {
    distinct_on?: InputMaybe<Array<Group_Member_Select_Column>>
    limit?: InputMaybe<Scalars['Int']>
    offset?: InputMaybe<Scalars['Int']>
    order_by?: InputMaybe<Array<Group_Member_Order_By>>
    where?: InputMaybe<Group_Member_Bool_Exp>
}

export type Query_RootGroup_Member_By_PkArgs = {
    id: Scalars['uuid']
}

export type Query_RootTaskArgs = {
    distinct_on?: InputMaybe<Array<Task_Select_Column>>
    limit?: InputMaybe<Scalars['Int']>
    offset?: InputMaybe<Scalars['Int']>
    order_by?: InputMaybe<Array<Task_Order_By>>
    where?: InputMaybe<Task_Bool_Exp>
}

export type Query_RootTask_By_PkArgs = {
    id: Scalars['uuid']
}

export type Query_RootUserArgs = {
    distinct_on?: InputMaybe<Array<User_Select_Column>>
    limit?: InputMaybe<Scalars['Int']>
    offset?: InputMaybe<Scalars['Int']>
    order_by?: InputMaybe<Array<User_Order_By>>
    where?: InputMaybe<User_Bool_Exp>
}

export type Query_RootUser_By_PkArgs = {
    id: Scalars['uuid']
}

export type Subscription_Root = {
    __typename?: 'subscription_root'
    /** fetch data from the table: "group" */
    group: Array<Group>
    /** fetch data from the table: "group" using primary key columns */
    group_by_pk?: Maybe<Group>
    /** fetch data from the table: "group_member" */
    group_member: Array<Group_Member>
    /** fetch data from the table: "group_member" using primary key columns */
    group_member_by_pk?: Maybe<Group_Member>
    /** fetch data from the table: "task" */
    task: Array<Task>
    /** fetch data from the table: "task" using primary key columns */
    task_by_pk?: Maybe<Task>
    /** fetch data from the table: "user" */
    user: Array<User>
    /** fetch data from the table: "user" using primary key columns */
    user_by_pk?: Maybe<User>
}

export type Subscription_RootGroupArgs = {
    distinct_on?: InputMaybe<Array<Group_Select_Column>>
    limit?: InputMaybe<Scalars['Int']>
    offset?: InputMaybe<Scalars['Int']>
    order_by?: InputMaybe<Array<Group_Order_By>>
    where?: InputMaybe<Group_Bool_Exp>
}

export type Subscription_RootGroup_By_PkArgs = {
    id: Scalars['uuid']
}

export type Subscription_RootGroup_MemberArgs = {
    distinct_on?: InputMaybe<Array<Group_Member_Select_Column>>
    limit?: InputMaybe<Scalars['Int']>
    offset?: InputMaybe<Scalars['Int']>
    order_by?: InputMaybe<Array<Group_Member_Order_By>>
    where?: InputMaybe<Group_Member_Bool_Exp>
}

export type Subscription_RootGroup_Member_By_PkArgs = {
    id: Scalars['uuid']
}

export type Subscription_RootTaskArgs = {
    distinct_on?: InputMaybe<Array<Task_Select_Column>>
    limit?: InputMaybe<Scalars['Int']>
    offset?: InputMaybe<Scalars['Int']>
    order_by?: InputMaybe<Array<Task_Order_By>>
    where?: InputMaybe<Task_Bool_Exp>
}

export type Subscription_RootTask_By_PkArgs = {
    id: Scalars['uuid']
}

export type Subscription_RootUserArgs = {
    distinct_on?: InputMaybe<Array<User_Select_Column>>
    limit?: InputMaybe<Scalars['Int']>
    offset?: InputMaybe<Scalars['Int']>
    order_by?: InputMaybe<Array<User_Order_By>>
    where?: InputMaybe<User_Bool_Exp>
}

export type Subscription_RootUser_By_PkArgs = {
    id: Scalars['uuid']
}

/** user's (group's) task */
export type Task = {
    __typename?: 'task'
    created_at: Scalars['timestamptz']
    created_by: Scalars['String']
    deadline?: Maybe<Scalars['timestamptz']>
    deleted_at?: Maybe<Scalars['timestamptz']>
    /** An object relationship */
    group?: Maybe<Group>
    group_id?: Maybe<Scalars['uuid']>
    id: Scalars['uuid']
    name: Scalars['String']
    priority: Scalars['String']
    updated_at: Scalars['timestamptz']
    /** An object relationship */
    user: User
}

/** order by aggregate values of table "task" */
export type Task_Aggregate_Order_By = {
    count?: InputMaybe<Order_By>
    max?: InputMaybe<Task_Max_Order_By>
    min?: InputMaybe<Task_Min_Order_By>
}

/** input type for inserting array relation for remote table "task" */
export type Task_Arr_Rel_Insert_Input = {
    data: Array<Task_Insert_Input>
    /** upsert condition */
    on_conflict?: InputMaybe<Task_On_Conflict>
}

/** Boolean expression to filter rows from the table "task". All fields are combined with a logical 'AND'. */
export type Task_Bool_Exp = {
    _and?: InputMaybe<Array<Task_Bool_Exp>>
    _not?: InputMaybe<Task_Bool_Exp>
    _or?: InputMaybe<Array<Task_Bool_Exp>>
    created_at?: InputMaybe<Timestamptz_Comparison_Exp>
    created_by?: InputMaybe<String_Comparison_Exp>
    deadline?: InputMaybe<Timestamptz_Comparison_Exp>
    deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>
    group?: InputMaybe<Group_Bool_Exp>
    group_id?: InputMaybe<Uuid_Comparison_Exp>
    id?: InputMaybe<Uuid_Comparison_Exp>
    name?: InputMaybe<String_Comparison_Exp>
    priority?: InputMaybe<String_Comparison_Exp>
    updated_at?: InputMaybe<Timestamptz_Comparison_Exp>
    user?: InputMaybe<User_Bool_Exp>
}

/** unique or primary key constraints on table "task" */
export enum Task_Constraint {
    /** unique or primary key constraint */
    TaskPkey = 'task_pkey',
}

/** input type for inserting data into table "task" */
export type Task_Insert_Input = {
    created_at?: InputMaybe<Scalars['timestamptz']>
    deadline?: InputMaybe<Scalars['timestamptz']>
    deleted_at?: InputMaybe<Scalars['timestamptz']>
    group?: InputMaybe<Group_Obj_Rel_Insert_Input>
    group_id?: InputMaybe<Scalars['uuid']>
    id?: InputMaybe<Scalars['uuid']>
    name?: InputMaybe<Scalars['String']>
    priority?: InputMaybe<Scalars['String']>
    updated_at?: InputMaybe<Scalars['timestamptz']>
    user?: InputMaybe<User_Obj_Rel_Insert_Input>
}

/** order by max() on columns of table "task" */
export type Task_Max_Order_By = {
    created_at?: InputMaybe<Order_By>
    created_by?: InputMaybe<Order_By>
    deadline?: InputMaybe<Order_By>
    deleted_at?: InputMaybe<Order_By>
    group_id?: InputMaybe<Order_By>
    id?: InputMaybe<Order_By>
    name?: InputMaybe<Order_By>
    priority?: InputMaybe<Order_By>
    updated_at?: InputMaybe<Order_By>
}

/** order by min() on columns of table "task" */
export type Task_Min_Order_By = {
    created_at?: InputMaybe<Order_By>
    created_by?: InputMaybe<Order_By>
    deadline?: InputMaybe<Order_By>
    deleted_at?: InputMaybe<Order_By>
    group_id?: InputMaybe<Order_By>
    id?: InputMaybe<Order_By>
    name?: InputMaybe<Order_By>
    priority?: InputMaybe<Order_By>
    updated_at?: InputMaybe<Order_By>
}

/** response of any mutation on the table "task" */
export type Task_Mutation_Response = {
    __typename?: 'task_mutation_response'
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: Array<Task>
}

/** on_conflict condition type for table "task" */
export type Task_On_Conflict = {
    constraint: Task_Constraint
    update_columns?: Array<Task_Update_Column>
    where?: InputMaybe<Task_Bool_Exp>
}

/** Ordering options when selecting data from "task". */
export type Task_Order_By = {
    created_at?: InputMaybe<Order_By>
    created_by?: InputMaybe<Order_By>
    deadline?: InputMaybe<Order_By>
    deleted_at?: InputMaybe<Order_By>
    group?: InputMaybe<Group_Order_By>
    group_id?: InputMaybe<Order_By>
    id?: InputMaybe<Order_By>
    name?: InputMaybe<Order_By>
    priority?: InputMaybe<Order_By>
    updated_at?: InputMaybe<Order_By>
    user?: InputMaybe<User_Order_By>
}

/** primary key columns input for table: task */
export type Task_Pk_Columns_Input = {
    id: Scalars['uuid']
}

/** select columns of table "task" */
export enum Task_Select_Column {
    /** column name */
    CreatedAt = 'created_at',
    /** column name */
    CreatedBy = 'created_by',
    /** column name */
    Deadline = 'deadline',
    /** column name */
    DeletedAt = 'deleted_at',
    /** column name */
    GroupId = 'group_id',
    /** column name */
    Id = 'id',
    /** column name */
    Name = 'name',
    /** column name */
    Priority = 'priority',
    /** column name */
    UpdatedAt = 'updated_at',
}

/** input type for updating data in table "task" */
export type Task_Set_Input = {
    created_at?: InputMaybe<Scalars['timestamptz']>
    created_by?: InputMaybe<Scalars['String']>
    deadline?: InputMaybe<Scalars['timestamptz']>
    deleted_at?: InputMaybe<Scalars['timestamptz']>
    group_id?: InputMaybe<Scalars['uuid']>
    id?: InputMaybe<Scalars['uuid']>
    name?: InputMaybe<Scalars['String']>
    priority?: InputMaybe<Scalars['String']>
    updated_at?: InputMaybe<Scalars['timestamptz']>
}

/** update columns of table "task" */
export enum Task_Update_Column {
    /** column name */
    CreatedAt = 'created_at',
    /** column name */
    CreatedBy = 'created_by',
    /** column name */
    Deadline = 'deadline',
    /** column name */
    DeletedAt = 'deleted_at',
    /** column name */
    GroupId = 'group_id',
    /** column name */
    Id = 'id',
    /** column name */
    Name = 'name',
    /** column name */
    Priority = 'priority',
    /** column name */
    UpdatedAt = 'updated_at',
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
    _eq?: InputMaybe<Scalars['timestamptz']>
    _gt?: InputMaybe<Scalars['timestamptz']>
    _gte?: InputMaybe<Scalars['timestamptz']>
    _in?: InputMaybe<Array<Scalars['timestamptz']>>
    _is_null?: InputMaybe<Scalars['Boolean']>
    _lt?: InputMaybe<Scalars['timestamptz']>
    _lte?: InputMaybe<Scalars['timestamptz']>
    _neq?: InputMaybe<Scalars['timestamptz']>
    _nin?: InputMaybe<Array<Scalars['timestamptz']>>
}

/** columns and relationships of "user" */
export type User = {
    __typename?: 'user'
    created_at: Scalars['timestamptz']
    deleted_at?: Maybe<Scalars['timestamptz']>
    email: Scalars['String']
    family_name?: Maybe<Scalars['String']>
    given_name?: Maybe<Scalars['String']>
    /** An array relationship */
    groups: Array<Group>
    id: Scalars['uuid']
    name: Scalars['String']
    /** An array relationship */
    tasks: Array<Task>
    updated_at: Scalars['timestamptz']
    user_id: Scalars['String']
}

/** columns and relationships of "user" */
export type UserGroupsArgs = {
    distinct_on?: InputMaybe<Array<Group_Select_Column>>
    limit?: InputMaybe<Scalars['Int']>
    offset?: InputMaybe<Scalars['Int']>
    order_by?: InputMaybe<Array<Group_Order_By>>
    where?: InputMaybe<Group_Bool_Exp>
}

/** columns and relationships of "user" */
export type UserTasksArgs = {
    distinct_on?: InputMaybe<Array<Task_Select_Column>>
    limit?: InputMaybe<Scalars['Int']>
    offset?: InputMaybe<Scalars['Int']>
    order_by?: InputMaybe<Array<Task_Order_By>>
    where?: InputMaybe<Task_Bool_Exp>
}

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
    _and?: InputMaybe<Array<User_Bool_Exp>>
    _not?: InputMaybe<User_Bool_Exp>
    _or?: InputMaybe<Array<User_Bool_Exp>>
    created_at?: InputMaybe<Timestamptz_Comparison_Exp>
    deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>
    email?: InputMaybe<String_Comparison_Exp>
    family_name?: InputMaybe<String_Comparison_Exp>
    given_name?: InputMaybe<String_Comparison_Exp>
    groups?: InputMaybe<Group_Bool_Exp>
    id?: InputMaybe<Uuid_Comparison_Exp>
    name?: InputMaybe<String_Comparison_Exp>
    tasks?: InputMaybe<Task_Bool_Exp>
    updated_at?: InputMaybe<Timestamptz_Comparison_Exp>
    user_id?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
    /** unique or primary key constraint */
    UserPkey = 'user_pkey',
    /** unique or primary key constraint */
    UserUserIdKey = 'user_user_id_key',
}

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
    created_at?: InputMaybe<Scalars['timestamptz']>
    deleted_at?: InputMaybe<Scalars['timestamptz']>
    email?: InputMaybe<Scalars['String']>
    family_name?: InputMaybe<Scalars['String']>
    given_name?: InputMaybe<Scalars['String']>
    groups?: InputMaybe<Group_Arr_Rel_Insert_Input>
    id?: InputMaybe<Scalars['uuid']>
    name?: InputMaybe<Scalars['String']>
    tasks?: InputMaybe<Task_Arr_Rel_Insert_Input>
    updated_at?: InputMaybe<Scalars['timestamptz']>
    user_id?: InputMaybe<Scalars['String']>
}

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
    __typename?: 'user_mutation_response'
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: Array<User>
}

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
    data: User_Insert_Input
    /** upsert condition */
    on_conflict?: InputMaybe<User_On_Conflict>
}

/** on_conflict condition type for table "user" */
export type User_On_Conflict = {
    constraint: User_Constraint
    update_columns?: Array<User_Update_Column>
    where?: InputMaybe<User_Bool_Exp>
}

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
    created_at?: InputMaybe<Order_By>
    deleted_at?: InputMaybe<Order_By>
    email?: InputMaybe<Order_By>
    family_name?: InputMaybe<Order_By>
    given_name?: InputMaybe<Order_By>
    groups_aggregate?: InputMaybe<Group_Aggregate_Order_By>
    id?: InputMaybe<Order_By>
    name?: InputMaybe<Order_By>
    tasks_aggregate?: InputMaybe<Task_Aggregate_Order_By>
    updated_at?: InputMaybe<Order_By>
    user_id?: InputMaybe<Order_By>
}

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
    id: Scalars['uuid']
}

/** select columns of table "user" */
export enum User_Select_Column {
    /** column name */
    CreatedAt = 'created_at',
    /** column name */
    DeletedAt = 'deleted_at',
    /** column name */
    Email = 'email',
    /** column name */
    FamilyName = 'family_name',
    /** column name */
    GivenName = 'given_name',
    /** column name */
    Id = 'id',
    /** column name */
    Name = 'name',
    /** column name */
    UpdatedAt = 'updated_at',
    /** column name */
    UserId = 'user_id',
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
    created_at?: InputMaybe<Scalars['timestamptz']>
    deleted_at?: InputMaybe<Scalars['timestamptz']>
    email?: InputMaybe<Scalars['String']>
    family_name?: InputMaybe<Scalars['String']>
    given_name?: InputMaybe<Scalars['String']>
    id?: InputMaybe<Scalars['uuid']>
    name?: InputMaybe<Scalars['String']>
    updated_at?: InputMaybe<Scalars['timestamptz']>
    user_id?: InputMaybe<Scalars['String']>
}

/** update columns of table "user" */
export enum User_Update_Column {
    /** column name */
    CreatedAt = 'created_at',
    /** column name */
    DeletedAt = 'deleted_at',
    /** column name */
    Email = 'email',
    /** column name */
    FamilyName = 'family_name',
    /** column name */
    GivenName = 'given_name',
    /** column name */
    Id = 'id',
    /** column name */
    Name = 'name',
    /** column name */
    UpdatedAt = 'updated_at',
    /** column name */
    UserId = 'user_id',
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
    _eq?: InputMaybe<Scalars['uuid']>
    _gt?: InputMaybe<Scalars['uuid']>
    _gte?: InputMaybe<Scalars['uuid']>
    _in?: InputMaybe<Array<Scalars['uuid']>>
    _is_null?: InputMaybe<Scalars['Boolean']>
    _lt?: InputMaybe<Scalars['uuid']>
    _lte?: InputMaybe<Scalars['uuid']>
    _neq?: InputMaybe<Scalars['uuid']>
    _nin?: InputMaybe<Array<Scalars['uuid']>>
}

export type InsertTaskMutationVariables = Exact<{
    deadline?: InputMaybe<Scalars['timestamptz']>
    name?: InputMaybe<Scalars['String']>
    priority?: InputMaybe<Scalars['String']>
}>

export type InsertTaskMutation = {
    __typename?: 'mutation_root'
    insert_task?: {
        __typename?: 'task_mutation_response'
        affected_rows: number
    } | null
}

export const InsertTaskDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'InsertTask' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'deadline' },
                    },
                    type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'timestamptz' },
                    },
                    defaultValue: {
                        kind: 'StringValue',
                        value: '',
                        block: false,
                    },
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'name' },
                    },
                    type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'String' },
                    },
                    defaultValue: {
                        kind: 'StringValue',
                        value: '',
                        block: false,
                    },
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'priority' },
                    },
                    type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'String' },
                    },
                    defaultValue: {
                        kind: 'StringValue',
                        value: '',
                        block: false,
                    },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'insert_task' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'objects' },
                                value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                        {
                                            kind: 'ObjectField',
                                            name: {
                                                kind: 'Name',
                                                value: 'created_at',
                                            },
                                            value: {
                                                kind: 'StringValue',
                                                value: 'now()',
                                                block: false,
                                            },
                                        },
                                        {
                                            kind: 'ObjectField',
                                            name: {
                                                kind: 'Name',
                                                value: 'deadline',
                                            },
                                            value: {
                                                kind: 'Variable',
                                                name: {
                                                    kind: 'Name',
                                                    value: 'deadline',
                                                },
                                            },
                                        },
                                        {
                                            kind: 'ObjectField',
                                            name: {
                                                kind: 'Name',
                                                value: 'name',
                                            },
                                            value: {
                                                kind: 'Variable',
                                                name: {
                                                    kind: 'Name',
                                                    value: 'name',
                                                },
                                            },
                                        },
                                        {
                                            kind: 'ObjectField',
                                            name: {
                                                kind: 'Name',
                                                value: 'priority',
                                            },
                                            value: {
                                                kind: 'Variable',
                                                name: {
                                                    kind: 'Name',
                                                    value: 'priority',
                                                },
                                            },
                                        },
                                        {
                                            kind: 'ObjectField',
                                            name: {
                                                kind: 'Name',
                                                value: 'updated_at',
                                            },
                                            value: {
                                                kind: 'StringValue',
                                                value: 'now()',
                                                block: false,
                                            },
                                        },
                                    ],
                                },
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: {
                                        kind: 'Name',
                                        value: 'affected_rows',
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<InsertTaskMutation, InsertTaskMutationVariables>
