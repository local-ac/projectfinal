// src/api/database.ts
import { Client } from 'pg';

export async function connectToDatabase() {
  const client = new Client({
    user: 'postgres',          // ชื่อผู้ใช้
    host: process.env.DATABASE_HOST || 'localhost',    // ใช้ localhost ถ้า container ของ Node.js และ PostgreSQL ใช้ network เดียวกัน
    database: '66130757', // ชื่อฐานข้อมูล
    password: '12345678',      // รหัสผ่าน
    port: 5434,            // พอร์ตของ PostgreSQL
  });

  await client.connect();
  return client;
}
