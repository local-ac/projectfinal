// src/api/loginApi.ts
import { connectToDatabase } from './database';

export async function authenticateAdmin(username: string, password: string) {
  const client = await connectToDatabase();
  try {
    const query = 'SELECT * FROM admin WHERE username = $1 AND password = $2';
    const values = [username, password];
    const result = await client.query(query, values);

    if (result.rows.length > 0) {
      return { authenticated: true, user: result.rows[0] };
    } else {
      return { authenticated: false };
    }
  } finally {
    await client.end();
  }
}
