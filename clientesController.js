const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
      conn.query('SELECT * FROM cliente', (err, clientes) => {
       if (err) {
        res.json(err);
       }
       res.render('clientes', {
       data: clientes
       });
      });
    });
  };

controller.save = (req, res) => {
  const data = req.body;
  //console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO cliente set ?', [data], (err, cliente) => {
      console.log(cliente);
      res.redirect('/');
    })
  })
};

controller.edit = (req, res) => {
  const { telefono } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM cliente WHERE telefono = ?", [telefono], (err, rows) => {
      res.render('clientes_edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { telefono } = req.params;
  const newcliente = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE cliente set ? where telefono = ?', [newcliente, telefono], (err, rows) => {
    res.redirect('/');
  });
  });
};

controller.delete = (req, res) => {
  const { telefono } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM cliente WHERE telefono = ?', [telefono], (err, rows) => {
      res.redirect('/');
    });
  });
}

module.exports = controller;
