// Vercel API route for registration
export default async function handler(req, res) {
  // Enable CORS for all origins
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { username, email, phone, password, confirmPassword } = req.body;
    
    // Validation
    if (!username || !email || !phone || !password || !confirmPassword) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }
    
    if (password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters' });
    }
    
    // Simple in-memory storage (for demo purposes)
    const users = global.users || new Map();
    global.users = users;
    
    // Check if user already exists
    if (users.has(username)) {
      return res.status(400).json({ message: 'Username already exists' });
    }
    
    if (Array.from(users.values()).some(user => user.email === email)) {
      return res.status(400).json({ message: 'Email already exists' });
    }
    
    // Store user
    const newUser = {
      id: Date.now().toString(),
      username,
      email,
      phone,
      password, // WARNING: Don't store plain text passwords in production!
      created_at: new Date().toISOString()
    };
    
    users.set(username, newUser);
    
    res.status(201).json({ message: 'register success' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error during registration' });
  }
}