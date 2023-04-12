
ALTER TABLE "public"."group" ALTER COLUMN "deleted_at" TYPE date;

ALTER TABLE "public"."group" ALTER COLUMN "updated_at" TYPE date;

ALTER TABLE "public"."group" ALTER COLUMN "created_at" TYPE date;

DROP TABLE "public"."task";

DROP TABLE "public"."group_member";

DROP TABLE "public"."group";

DROP TABLE "public"."user";

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- DROP table "public"."user";
