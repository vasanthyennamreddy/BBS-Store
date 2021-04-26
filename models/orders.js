const db = require('../middleware/database');


module.exports = class Order {
  constructor( userid, pid, quan, buy = 'y', tot) {
    
    
    this.user_id = userid;
    this.p_id    = pid;
    this.quantity = quan;
    this.buy = buy;
    this.total =  tot;
  }

  save() {
    return db.execute(
      'INSERT INTO orders (user_id, , p_id, quantity, Buy, total) VALUES (?, ?, ?, ?, ?)',
      [this.user_id, this.p_id,this.quantity, this.buy , this.total ]
    );
  }

  findById(userid) {
    return db.execute('SELECT * FROM orders WHERE user_id = ?', [userid]);
  }
};
