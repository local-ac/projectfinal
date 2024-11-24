import { connectToDatabase } from './database';

export async function registerUser(username: string, password: string, email: string, phone: string) {
  const client = await connectToDatabase();
  try {
    console.log('Registering user with:', username, password, email, phone);
    const query = 'INSERT INTO users (username, password, email, phone) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [username, password, email, phone];
    const result = await client.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error('Error inserting user:', error);
    throw error;
  } finally {
    await client.end();
  }
}
