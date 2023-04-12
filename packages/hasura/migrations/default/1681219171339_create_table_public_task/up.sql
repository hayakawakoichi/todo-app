CREATE TABLE "public"."task" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "name" text NOT NULL, "priority" text NOT NULL, "deadline" timestamptz, "created_by" uuid NOT NULL, "group_id" uuid NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "deleted_at" timestamptz, PRIMARY KEY ("id") , FOREIGN KEY ("group_id") REFERENCES "public"."group"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("created_by") REFERENCES "public"."user"("id") ON UPDATE restrict ON DELETE restrict);COMMENT ON TABLE "public"."task" IS E'user\'s (group\'s) task';
CREATE EXTENSION IF NOT EXISTS pgcrypto;