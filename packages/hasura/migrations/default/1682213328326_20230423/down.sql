
alter table "public"."task" alter column "group_id" set not null;

alter table "public"."group_member"
  add constraint "group_member_user_id_fkey"
  foreign key ("user_id")
  references "public"."user"
  ("user_id") on update restrict on delete restrict;

alter table "public"."task" drop constraint "task_created_by_fkey";

alter table "public"."group_member" drop constraint "group_member_group_id_fkey";

alter table "public"."group" drop constraint "group_created_by_fkey";

alter table "public"."group_member" drop constraint "group_member_user_id_fkey";

alter table "public"."user" drop constraint "user_user_id_key";

alter table "public"."user" add constraint "user_user_id_key" unique ("user_id");

alter table "public"."group" add constraint "group_created_by_key" unique ("created_by");

alter table "public"."group_member" add constraint "group_member_user_id_key" unique ("user_id");

alter table "public"."task" add constraint "task_created_by_key" unique ("created_by");

alter table "public"."user"
  add constraint "user_user_id_fkey"
  foreign key ("user_id")
  references "public"."task"
  ("created_by") on update restrict on delete restrict;

alter table "public"."user" drop constraint "user_user_id_fkey";

alter table "public"."task" drop constraint "task_created_by_key";

alter table "public"."group" drop constraint "group_created_by_key";
ALTER TABLE "public"."group" ALTER COLUMN "created_by" TYPE uuid;

alter table "public"."group_member" drop constraint "group_member_user_id_key";
ALTER TABLE "public"."group_member" ALTER COLUMN "user_id" TYPE uuid;

ALTER TABLE "public"."task" ALTER COLUMN "created_by" TYPE uuid;

alter table "public"."task"
  add constraint "task_created_by_fkey"
  foreign key ("created_by")
  references "public"."user"
  ("id") on update restrict on delete restrict;

alter table "public"."group"
  add constraint "group_created_by_fkey"
  foreign key ("created_by")
  references "public"."user"
  ("id") on update restrict on delete restrict;

alter table "public"."group_member"
  add constraint "group_member_user_id_fkey"
  foreign key ("user_id")
  references "public"."user"
  ("id") on update restrict on delete restrict;

alter table "public"."group_member"
  add constraint "group_member_group_id_fkey"
  foreign key ("group_id")
  references "public"."group"
  ("id") on update restrict on delete restrict;

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."user" add column "email" text
--  not null;

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."user" add column "given_name" text
--  null;

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."user" add column "family_name" text
--  null;
