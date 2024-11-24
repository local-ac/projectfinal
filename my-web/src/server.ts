// src/server.ts
import express from 'express';
import { authenticateUser } from './api/loginApi';
import { authenticateAdmin } from './api/loginAdminApi';
import { getUsers } from './api/homeApi';
import bodyParser from 'body-parser';
import { registerUser } from './api/signupApi';
import { deleteUser, updateUser } from './api/adminApi';
import fetch from 'node-fetch';
const app = express();
const PORT = 3001;


app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Server is up and running');
});

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const authResult = await authenticateUser(username, password);
    if (authResult.authenticated) {
      res.json({ success: true, user: authResult.user });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error authenticating user' });
  }
});

app.get('/api/users', async (req, res) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).send('Error fetching users');
  }

  
});

app.post('/api/signup', async (req, res) => {
  const { username, password, email, phone} = req.body;
  try {
    const newUser = await registerUser(username, password, email, phone);
    res.status(201).json({ success: true, user: newUser });
  } catch (error) {
    res.status(500).json({ error: 'Error registering user' });
  }
});

app.delete('/api/users/:id', async (req, res) => {
  try {
    const userId = parseInt(req.params.id, 10);
    await deleteUser(userId);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting user' });
  }
});

app.put('/api/users/:id', async (req, res) => {
  try {
    const userId = parseInt(req.params.id, 10);
    const { username, password, email, phone} = req.body;
    await updateUser(userId, username, password, email, phone);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Error updating user' });
  }
});

app.post('/api/adminLogin', async (req, res) => {
  const { username, password } = req.body;
  try {
    const authResult = await authenticateAdmin(username, password);
    if (authResult.authenticated) {
      res.json({ success: true, user: authResult.user });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error authenticating admin' });
  }
});

/*app.get('/api/pokemon', async (req, res) => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Pokémon data' });
  }
});*/


app.get('/api/pokemon', async (req, res) => {
  const searchQuery = req.query.search?.toString().toLowerCase() || ''; // รับคำค้นหา (search query)

  try {
      // ดึงข้อมูล Pokémon ทั้งหมด
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10000');
      if (!response.ok) throw new Error('Failed to fetch Pokémon data');

      const data = await response.json();

      // กรองข้อมูลด้วยคำค้นหา
      const filteredPokemon = data.results.filter((pokemon: any) =>
          pokemon.name.toLowerCase().includes(searchQuery)
      );

      // ส่งคืนผลลัพธ์
      res.json(filteredPokemon);
  } catch (error: any) {
      console.error('Error fetching Pokémon data:', error.message);
      res.status(500).json({ error: 'Failed to fetch Pokémon data. Please try again later.' });
  }
});



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
