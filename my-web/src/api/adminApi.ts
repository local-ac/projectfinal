import { connectToDatabase } from './database';

export async function getUsers() {
  const client = await connectToDatabase();
  try {
    const result = await client.query('SELECT * FROM users');
    return result.rows;
  } finally {
    await client.end();
  }
}

export async function deleteUser(userId: number) {
  const client = await connectToDatabase();
  try {
    await client.query('DELETE FROM users WHERE id = $1', [userId]);
    return { success: true };
  } finally {
    await client.end();
  }
}

export async function updateUser(userId: number, username: string, password: string, email: string, phone: string) {
  const client = await connectToDatabase();
  try {
    await client.query('UPDATE users SET username = $1, password = $2, email = $3, phone = $4 WHERE id = $5', [username, password, email, phone, userId]);
    return { success: true };
  } finally {
    await client.end();
  }
}
