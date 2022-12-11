# CRUD
CRUD de Clientes, medicos y medicamentos en un servidor local
Requisitos:
  1.- Tener instalado Visual Studio Code
  2.- Tener instalado node.js
  3.- En la terminal de VS instalar las dependencias "ejs, express, express-myconnection, morgan y mysql"
    Codigo: npm i express mysql express-myconnection morgan ejs
  4.- En la terminal instalar como dev dependencia "nodemon" 
    Codigo: npm install nodemon -D
    5.- Tener algun software para crear base de datos (De su preferencia)
Dentro de una carpeta estaran los archivos que empiezan por "package.json" que son creados al instalar los modulos
Dentro de su carpeta se crea una carpera llamada "src" en donde estaran dentro 3 carpetas llamadas "routes", "views", "controllers"
Los archivos ".ejs" tienen que ir en una carpeta llamada "views"
Los archivos ".js" tienen que ir en la carpeta llamada "routes"
los archvios "Controller.js" teinen que ir en la carpeta llamada "controllers"
Tener creada una base de datos llamada "bdcitas" y correr el archivo "bd citas medicas.sql" anexado
En el archivo app.js que esta dentro de la carpeta "src" de la linea 22 a 26 modificar los datos a su respectivo usuario y su contraseña
Esto para realizar la conexion con sql.

--------------------------------------------------------------------------------------------------------------------------------------------------
# CRUD
CRUD of Clients, doctors and medications on a local server
Requirements:
  1.- Have Visual Studio Code installed
  2.- Have node.js installed
  3.- In the VS terminal install the dependencies "ejs, express, express-myconnection, morgan and mysql"
    Code: npm i express mysql express-myconnection morgan ejs
  4.- In the terminal install as dev dependency "nodemon"
    Code: npm install nodemon -D
    5.- Have some software to create a database (Your preference)
Inside a folder will be the files that start with "package.json" that are created when installing the modules
Inside your folder, a folder called "src" is created where 3 folders called "routes", "views", "controllers" will be inside.
The ".ejs" files have to go in a folder called "views"
The ".js" files have to go in the folder called "routes"
the "Controller.js" files have to go in the folder called "controllers"
Have created a database called "bdcitas" and run the file "bd medical appointments.sql" attached
In the app.js file that is inside the "src" folder from line 22 to 26, modify the data to its respective username and password
This to make the connection with sql.
