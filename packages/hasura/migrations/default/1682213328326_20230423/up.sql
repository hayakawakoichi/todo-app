
alter table "public"."user" add column "family_name" text
 null;

alter table "public"."user" add column "given_name" text
 null;

alter table "public"."user" add column "email" text
 not null;

alter table "public"."group_member" drop constraint "group_member_group_id_fkey";

alter table "public"."group_member" drop constraint "group_member_user_id_fkey";

alter table "public"."group" drop constraint "group_created_by_fkey";

alter table "public"."task" drop constraint "task_created_by_fkey";

ALTER TABLE "public"."task" ALTER COLUMN "created_by" TYPE text;

ALTER TABLE "public"."group_member" ALTER COLUMN "user_id" TYPE text;
alter table "public"."group_member" add constraint "group_member_user_id_key" unique ("user_id");

ALTER TABLE "public"."group" ALTER COLUMN "created_by" TYPE text;
alter table "public"."group" add constraint "group_created_by_key" unique ("created_by");

alter table "public"."task" add constraint "task_created_by_key" unique ("created_by");

alter table "public"."user"
  add constraint "user_user_id_fkey"
  foreign key ("user_id")
  references "public"."task"
  ("created_by") on update restrict on delete restrict;

alter table "public"."user" drop constraint "user_user_id_fkey";

alter table "public"."task" drop constraint "task_created_by_key";

alter table "public"."group_member" drop constraint "group_member_user_id_key";

alter table "public"."group" drop constraint "group_created_by_key";

alter table "public"."user" drop constraint "user_user_id_key";

alter table "public"."user" add constraint "user_user_id_key" unique ("user_id");

alter table "public"."group_member"
  add constraint "group_member_user_id_fkey"
  foreign key ("user_id")
  references "public"."user"
  ("user_id") on update restrict on delete restrict;

alter table "public"."group"
  add constraint "group_created_by_fkey"
  foreign key ("created_by")
  references "public"."user"
  ("user_id") on update restrict on delete restrict;

alter table "public"."group_member"
  add constraint "group_member_group_id_fkey"
  foreign key ("group_id")
  references "public"."group"
  ("id") on update restrict on delete restrict;

alter table "public"."task"
  add constraint "task_created_by_fkey"
  foreign key ("created_by")
  references "public"."user"
  ("user_id") on update restrict on delete restrict;

alter table "public"."group_member" drop constraint "group_member_user_id_fkey";

alter table "public"."task" alter column "group_id" drop not null;
