
DROP table "public"."user";

CREATE TABLE "public"."user" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "user_id" Text NOT NULL, "name" text NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "deleted_at" timestamptz, PRIMARY KEY ("id") , UNIQUE ("user_id"), UNIQUE ("id"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE "public"."group" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "name" text NOT NULL, "created_by" uuid NOT NULL, "created_at" date NOT NULL DEFAULT now(), "updated_at" date NOT NULL DEFAULT now(), "deleted_at" date, PRIMARY KEY ("id") , FOREIGN KEY ("created_by") REFERENCES "public"."user"("id") ON UPDATE restrict ON DELETE restrict);COMMENT ON TABLE "public"."group" IS E'user group';
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE "public"."group_member" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "user_id" uuid NOT NULL, "group_id" UUID NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "deleted_at" timestamptz, PRIMARY KEY ("id") , FOREIGN KEY ("group_id") REFERENCES "public"."group"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON UPDATE restrict ON DELETE restrict);COMMENT ON TABLE "public"."group_member" IS E'group member';
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE "public"."task" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "name" text NOT NULL, "priority" text NOT NULL, "deadline" timestamptz, "created_by" uuid NOT NULL, "group_id" uuid NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "deleted_at" timestamptz, PRIMARY KEY ("id") , FOREIGN KEY ("group_id") REFERENCES "public"."group"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("created_by") REFERENCES "public"."user"("id") ON UPDATE restrict ON DELETE restrict);COMMENT ON TABLE "public"."task" IS E'user\'s (group\'s) task';
CREATE EXTENSION IF NOT EXISTS pgcrypto;

ALTER TABLE "public"."group" ALTER COLUMN "created_at" TYPE timestamptz;

ALTER TABLE "public"."group" ALTER COLUMN "updated_at" TYPE timestamptz;

ALTER TABLE "public"."group" ALTER COLUMN "deleted_at" TYPE timestamptz;
