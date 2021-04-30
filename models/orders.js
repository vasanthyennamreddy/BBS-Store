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

  static findById(userid) {
    return db.execute('SELECT * FROM orders WHERE user_id = ?', [userid]);
  }

  static Update(o_id){
    return db.execute('UPDATE orders SET buy = "y" WHERE o_id = ?', [o_id]);
  }

  static getPreviousOrders(id){
    return db.execute(
      'SELECT * FROM placedorders WHERE o_complete = "y" AND user_id = ?',[id]
     
    );
  }

  static getPendingOrders(id){
    return db.execute(
      'SELECT * FROM placedorders WHERE o_complete = "n" AND user_id = ?',[id]
    );
  }

  static getDispatcable(seller_id){
    return db.execute(
      'SELECT  * FROM shipping_details where seller_id = ?',[seller_id]
      
    );
  }


  static dispatchUpdate(o_id){
    return db.execute('UPDATE orders SET o_complete = "y" WHERE o_id = ? AND o_complete = "n"', [o_id]);
  }
};
