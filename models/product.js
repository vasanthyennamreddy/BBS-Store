const db = require('../middleware/database');


module.exports = class Product {
  constructor( name, imageUrl, description,tag,seller_id, price) {
    
    this.p_name = name;
    this.imageUrl = imageUrl;
    this.description = description;
    this.category = tag;
    this.seller_id = seller_id;
    this.price = price;
  }

  save() {
    return db.execute(
      'INSERT INTO products (p_name, imageUrl, description, category, seller_id, price) VALUES (?, ?, ?, ?, ?, ?)',
      [this.p_name, this.imageUrl,this.description, this.category , this.seller_id ,this.price   ]
    );
  }

  static deleteById(id) {
    return db.execute('DELETE FROM products WHERE seller_id = auth_user.id AND p_id = ?',[id]);
  }

  static fetchAll() {
    return db.execute('SELECT * FROM products');
  }

  static findById(id) {
    return db.execute('SELECT * FROM products WHERE products.p_id = ?', [id]);
  }
};