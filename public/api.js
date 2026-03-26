// Static API simulation for GitHub Pages
class PizzaAPI {
    constructor() {
        this.pizzas = [
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
        
        this.orders = this.loadOrders();
        this.orderIdCounter = this.orders.length > 0 ? Math.max(...this.orders.map(o => o.id)) + 1 : 1;
    }

    loadOrders() {
        const stored = localStorage.getItem('pizzeria_orders');
        return stored ? JSON.parse(stored) : [];
    }

    saveOrders() {
        localStorage.setItem('pizzeria_orders', JSON.stringify(this.orders));
    }

    async getPizzas() {
        return this.pizzas;
    }

    async getOrders() {
        return this.orders;
    }

    async createOrder(orderData) {
        const { customerName, pizzas } = orderData;
        
        if (!customerName || !pizzas || pizzas.length === 0) {
            throw new Error('Dati ordine incompleti');
        }

        const total = pizzas.reduce((sum, pizza) => sum + (pizza.price * pizza.quantity), 0);
        
        const order = {
            id: this.orderIdCounter++,
            customerName,
            pizzas,
            total,
            timestamp: new Date().toISOString(),
            status: 'in attesa'
        };

        this.orders.push(order);
        this.saveOrders();
        return order;
    }

    async updateOrderStatus(orderId, status) {
        const order = this.orders.find(o => o.id === orderId);
        if (!order) {
            throw new Error('Ordine non trovato');
        }
        
        order.status = status;
        this.saveOrders();
        return order;
    }
}

// Create global API instance
window.pizzaAPI = new PizzaAPI();
