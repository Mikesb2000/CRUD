const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
      conn.query('SELECT * FROM medicamento', (err, medicamentos) => {
       if (err) {
        res.json(err);
       }
       res.render('medicamentos', {
       data: medicamentos
       });
      });
    });
  };

  controller.save = (req, res) => {
    const data = req.body;
    //console.log(req.body)
    req.getConnection((err, connection) => {
      const query = connection.query('INSERT INTO medicamento set ?', [data], (err, medicamento) => {
        console.log(medicamento);
        res.redirect('/medicamentos');
      })
    })
  };
  
  controller.edit = (req, res) => {
    const { codigo } = req.params;
    req.getConnection((err, conn) => {
      conn.query("SELECT * FROM medicamento WHERE codigo = ?", [codigo], (err, rows) => {
        res.render('medicamentos_edit', {
          data: rows[0]
        })
      });
    });
  };
  
  controller.update = (req, res) => {
    const { codigo } = req.params;
    const newmedicamento = req.body;
    req.getConnection((err, conn) => {
  
    conn.query('UPDATE medicamento set ? where codigo = ?', [newmedicamento, codigo], (err, rows) => {
      res.redirect('/medicamentos');
    });
    });
  };
  
  controller.delete = (req, res) => {
    const { codigo } = req.params;
    req.getConnection((err, connection) => {
      connection.query('DELETE FROM medicamento WHERE codigo = ?', [codigo], (err, rows) => {
        res.redirect('/medicamentos');
      });
    });
  }
  
module.exports = controller;