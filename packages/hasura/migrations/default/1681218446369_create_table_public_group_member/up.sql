CREATE TABLE "public"."group_member" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "user_id" uuid NOT NULL, "group_id" UUID NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "deleted_at" timestamptz, PRIMARY KEY ("id") , FOREIGN KEY ("group_id") REFERENCES "public"."group"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON UPDATE restrict ON DELETE restrict);COMMENT ON TABLE "public"."group_member" IS E'group member';
CREATE EXTENSION IF NOT EXISTS pgcrypto;