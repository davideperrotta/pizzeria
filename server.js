const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// In-memory storage for orders
let orders = [];
let orderIdCounter = 1;

// Pizza menu
const pizzas = [
  { id: 1, name: 'Margherita', price: 8.50, ingredients: ['pomodoro', 'mozzarella', 'basilico'] },
  { id: 2, name: 'Marinara', price: 7.00, ingredients: ['pomodoro', 'aglio', 'origano'] },
  { id: 3, name: 'Pepperoni', price: 10.00, ingredients: ['pomodoro', 'mozzarella', 'pepperoni'] },
  { id: 4, name: 'Quattro Stagioni', price: 12.00, ingredients: ['pomodoro', 'mozzarella', 'funghi', 'prosciutto', 'carciofi', 'olive'] },
  { id: 5, name: 'Capricciosa', price: 11.50, ingredients: ['pomodoro', 'mozzarella', 'funghi', 'prosciutto', 'carciofi', 'uovo'] },
  { id: 6, name: 'Diavola', price: 10.50, ingredients: ['pomodoro', 'mozzarella', 'salame piccante', 'peperoncino'] },
  { id: 7, name: 'Bianca', price: 9.00, ingredients: ['mozzarella', 'ricotta', 'basilico', 'olio extra vergine'] },
  { id: 8, name: 'Frutti di Mare', price: 13.00, ingredients: ['pomodoro', 'mozzarella', 'frutti di mare', 'aglio', 'prezzemolo'] },
  { id: 9, name: 'Vegetariana', price: 9.50, ingredients: ['pomodoro', 'mozzarella', 'verdure miste', 'funghi', 'peperoni', 'olive'] },
  { id: 10, name: 'Tartufo', price: 14.00, ingredients: ['pomodoro', 'mozzarella', 'tartufo', 'funghi', 'prosciutto crudo'] }
];

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/orders', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'orders.html'));
});

// API Routes
app.get('/api/pizzas', (req, res) => {
  res.json(pizzas);
});

app.get('/api/orders', (req, res) => {
  res.json(orders);
});

app.post('/api/orders', (req, res) => {
  const { customerName, pizzas } = req.body;
  
  if (!customerName || !pizzas || pizzas.length === 0) {
    return res.status(400).json({ error: 'Dati ordine incompleti' });
  }

  const total = pizzas.reduce((sum, pizza) => sum + (pizza.price * pizza.quantity), 0);
  
  const order = {
    id: orderIdCounter++,
    customerName,
    pizzas,
    total,
    timestamp: new Date().toISOString(),
    status: 'in attesa'
  };

  orders.push(order);
  res.status(201).json(order);
});

app.put('/api/orders/:id/status', (req, res) => {
  const orderId = parseInt(req.params.id);
  const { status } = req.body;
  
  const order = orders.find(o => o.id === orderId);
  if (!order) {
    return res.status(404).json({ error: 'Ordine non trovato' });
  }
  
  order.status = status;
  res.json(order);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server pizzeria in esecuzione su http://localhost:${PORT}`);
});
