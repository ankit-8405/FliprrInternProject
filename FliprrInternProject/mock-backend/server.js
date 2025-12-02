import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const app = express();
const PORT = 8080;
const JWT_SECRET = 'YourSecretKeyForJWTTokenGenerationMustBeLongEnough';

app.use(cors());
app.use(express.json());

// In-memory database
let offerings = [
  {
    id: 1,
    tag: 'HOUSE',
    image: '/assest/Next Invest - Landing Page (images)/10.svg',
    title: 'Oxalis',
    location: 'Brooklyn, NY',
    description: 'A recognized leader in language immersion & early education, opening second school',
    totalPrice: 1000000,
    securityType: 'Revenue Sharing Note',
    investmentMultiple: 1.4,
    maturity: 48,
    minimumInvestment: 100
  },
  {
    id: 2,
    tag: 'HOUSE',
    image: '/assest/Next Invest - Landing Page (images)/12.svg',
    title: 'Oxalis',
    location: 'Brooklyn, NY',
    description: 'A recognized leader in language immersion & early education, opening second school',
    totalPrice: 1000000,
    securityType: 'Revenue Sharing Note',
    investmentMultiple: 1.4,
    maturity: 48,
    minimumInvestment: 100
  },
  {
    id: 3,
    tag: 'HOUSE',
    image: '/assest/Next Invest - Landing Page (images)/8.svg',
    title: 'Oxalis',
    location: 'Brooklyn, NY',
    description: 'A recognized leader in language immersion & early education, opening second school',
    totalPrice: 1000000,
    securityType: 'Revenue Sharing Note',
    investmentMultiple: 1.4,
    maturity: 48,
    minimumInvestment: 100
  },
  {
    id: 4,
    tag: 'HOUSE',
    image: '/assest/Next Invest - Landing Page (images)/10.svg',
    title: 'Oxalis',
    location: 'Brooklyn, NY',
    description: 'A recognized leader in language immersion & early education, opening second school',
    totalPrice: 1000000,
    securityType: 'Revenue Sharing Note',
    investmentMultiple: 1.4,
    maturity: 48,
    minimumInvestment: 100
  },
  {
    id: 5,
    tag: 'HOUSE',
    image: '/assest/Next Invest - Landing Page (images)/11.svg',
    title: 'Oxalis',
    location: 'Brooklyn, NY',
    description: 'A recognized leader in language immersion & early education, opening second school',
    totalPrice: 1000000,
    securityType: 'Revenue Sharing Note',
    investmentMultiple: 1.4,
    maturity: 48,
    minimumInvestment: 100
  },
  {
    id: 6,
    tag: 'HOUSE',
    image: '/assest/Next Invest - Landing Page (images)/12.svg',
    title: 'Oxalis',
    location: 'Brooklyn, NY',
    description: 'A recognized leader in language immersion & early education, opening second school',
    totalPrice: 1000000,
    securityType: 'Revenue Sharing Note',
    investmentMultiple: 1.4,
    maturity: 48,
    minimumInvestment: 100
  }
];

let subscribers = [];
let users = [];
let nextOfferingId = 7;
let nextSubscriberId = 1;
let nextUserId = 1;

// Admin user (username: admin, password: admin123)
const adminUser = {
  username: 'admin',
  password: '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy',
  role: 'ROLE_ADMIN'
};

// Middleware to verify JWT
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  
  const token = authHeader.substring(7);
  
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

// Auth Routes
// User Registration
app.post('/api/auth/register', async (req, res) => {
  const { name, email, password } = req.body;
  
  // Check if user already exists
  if (users.find(u => u.email === email)) {
    return res.status(400).json({ message: 'Email already registered' });
  }
  
  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  
  const newUser = {
    id: nextUserId++,
    name,
    email,
    password: hashedPassword,
    role: 'USER',
    createdAt: new Date().toISOString()
  };
  
  users.push(newUser);
  
  res.json({
    message: 'Registration successful',
    user: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role
    }
  });
});

// User Login
app.post('/api/auth/login', async (req, res) => {
  const { email, password, username } = req.body;
  
  // Check if it's admin login (using username)
  if (username) {
    if (username !== adminUser.username) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    const isValid = await bcrypt.compare(password, adminUser.password);
    
    if (!isValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    const token = jwt.sign({ username: adminUser.username, role: 'ADMIN' }, JWT_SECRET, { expiresIn: '24h' });
    
    return res.json({
      token,
      username: adminUser.username,
      role: adminUser.role
    });
  }
  
  // Regular user login (using email)
  const user = users.find(u => u.email === email);
  
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  
  const isValid = await bcrypt.compare(password, user.password);
  
  if (!isValid) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  
  const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '24h' });
  
  res.json({
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    }
  });
});

// Offerings Routes
app.get('/api/offerings', (req, res) => {
  res.json(offerings);
});

app.get('/api/offerings/:id', (req, res) => {
  const offering = offerings.find(o => o.id === parseInt(req.params.id));
  if (!offering) {
    return res.status(404).json({ message: 'Offering not found' });
  }
  res.json(offering);
});

app.post('/api/offerings', verifyToken, (req, res) => {
  const newOffering = {
    id: nextOfferingId++,
    ...req.body
  };
  offerings.push(newOffering);
  res.json(newOffering);
});

app.put('/api/offerings/:id', verifyToken, (req, res) => {
  const index = offerings.findIndex(o => o.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ message: 'Offering not found' });
  }
  
  offerings[index] = {
    ...offerings[index],
    ...req.body,
    id: parseInt(req.params.id)
  };
  
  res.json(offerings[index]);
});

app.delete('/api/offerings/:id', verifyToken, (req, res) => {
  const index = offerings.findIndex(o => o.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ message: 'Offering not found' });
  }
  
  offerings.splice(index, 1);
  res.status(204).send();
});

// Newsletter Routes
app.post('/api/newsletter/subscribe', (req, res) => {
  const { email } = req.body;
  
  if (subscribers.find(s => s.email === email)) {
    return res.status(400).json({ message: 'Email already subscribed' });
  }
  
  const newSubscriber = {
    id: nextSubscriberId++,
    email,
    createdAt: new Date().toISOString()
  };
  
  subscribers.push(newSubscriber);
  res.json(newSubscriber);
});

app.get('/api/newsletter/subscribers', verifyToken, (req, res) => {
  res.json(subscribers);
});

app.delete('/api/newsletter/subscribers/:id', verifyToken, (req, res) => {
  const index = subscribers.findIndex(s => s.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ message: 'Subscriber not found' });
  }
  
  subscribers.splice(index, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`🚀 Mock Backend Server running on http://localhost:${PORT}`);
  console.log(`📊 API Base URL: http://localhost:${PORT}/api`);
  console.log(`\n👤 Admin Credentials:`);
  console.log(`   Username: admin`);
  console.log(`   Password: admin123`);
  console.log(`\n✅ Ready to accept requests!`);
});
