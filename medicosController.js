const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
      conn.query('SELECT * FROM medico', (err, medicos) => {
       if (err) {
        res.json(err);
       }
       res.render('medicos', {
       data: medicos
       });
      });
    });
  };

  controller.save = (req, res) => {
    const data = req.body;
    //console.log(req.body)
    req.getConnection((err, connection) => {
      const query = connection.query('INSERT INTO medico set ?', [data], (err, medico) => {
        console.log(medico);
        res.redirect('/medicos');
      })
    })
  };

  controller.edit = (req, res) => {
    const { rfc } = req.params;
    req.getConnection((err, conn) => {
      conn.query("SELECT * FROM medico WHERE rfc = ?", [rfc], (err, rows) => {
        res.render('medicos_edit', {
          data: rows[0]
        })
      });
    });
  };
  
  controller.update = (req, res) => {
    const { rfc } = req.params;
    const newmedico = req.body;
    req.getConnection((err, conn) => {
  
    conn.query('UPDATE medico set ? where rfc = ?', [newmedico, rfc], (err, rows) => {
      res.redirect('/medicos');
    });
    });
  };
  
  controller.delete = (req, res) => {
    const { rfc } = req.params;
    req.getConnection((err, connection) => {
      connection.query('DELETE FROM medico WHERE rfc = ?', [rfc], (err, rows) => {
        res.redirect('/medicos');
      });
    });
  }
  
module.exports = controller;
