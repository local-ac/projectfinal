// src/api/homeApi.ts
import { connectToDatabase } from './database';

// ฟังก์ชันดึงข้อมูลผู้ใช้
export async function getUsers() {
  const client = await connectToDatabase();
  try {
    const result = await client.query('SELECT * FROM users');
    return result.rows;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  } finally {
    await client.end();
  }
}
