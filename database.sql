CREATE TABLE "taskList" (
	"id" SERIAL PRIMARY KEY,
	"name" varchar(100) NOT NULL,
	"description" varchar,
	"completeByDate" date
);