import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();
async function testConnection() {
    try {
      await db.$connect();
      console.log("Database connected successfully");
    } catch (error) {
      console.error("Error connecting to the database", error);
    } 
  }
  testConnection();