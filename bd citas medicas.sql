DROP DATABASE dbcitas;
CREATE DATABASE dbcitas;
Use dbcitas;

CREATE TABLE cliente(telefono char(10) primary key, nombre VARCHAR(60), rfc char(13), direccion VARCHAR(120), correo VARCHAR(45));

CREATE TABLE cita(cita int primary key, fecha date, hora TIME(6));

CREATE TABLE medico(rfc char(13) primary key, nombre VARCHAR(60), direccion VARCHAR(120), telefono char(10), especialidad VARCHAR(45));
Show tables;
use dbcitas;
show tables;
desc cliente;

desc medico;
insert into cliente values
('9611191120', 'Jose Luis Gomez', 'GOLJ90050812', 'AV Tulija 10', ''),
('9611239734', 'Manuel Urtado', 'URFM75040312', 'Chiapas 678', ''), 
('3326165790', 'Miguel Gonzalez', 'GORM00092612', 'Chiapas 50900', ''), 
('9612568115', 'Pedro Hernandez', 'HEJP71102112', 'Hidalgo 43', ''),
('9611750134', 'Mariana Castilla', 'CATM90061312', '2Pte 940', ''), 
('9612067146', 'Enrique Moscoso', ' MOCE83070912', 'Central 97', ''), 
('9611008155', 'Sara Gonzalez', 'GOSA75040312', 'Juarez 906', ''), 
('9612027501', 'Ricardo Lopez', 'LORA78042312', 'Montes Urales 34', '');
delete from cliente;
select * from cliente;
insert into medico values
('GORM00092610', 'Miguel Angel Gonzalez Rodriguez', 'Chiapas 50900', '3326165790', 'Odortodoncista'),
('GOLJ90050813', 'Sergio', 'AV Tulija 10', '9611191120', 'Dentista General'),
('GOLJ90050812', 'Jose', 'AV Tulija 10', '9611191120', 'Dentista General'),
('URFM75040312', 'Manuel', 'Chiapas 678', '9611239734', 'Odontopediatra'), 
('GORM00092612', 'Miguel', 'Chiapas 50900', '3326165790', 'Odortodoncista'), 
('HEJP71102112', 'Pedro', 'Hidalgo 43', '9612568115', 'Periodoncista'), 
('CATM90061312', 'Mariana', '2Pte 940', '9611750134', 'Endodoncista'), 
('MOCE83070912', 'Enrique', 'Central 97', '961206714', 'Patologo Oral'), 
('GOSA75040312', 'Sara', 'Juarez 906', '9611008155', 'Prostodoncista'), 
('LORA78042312', 'Ricardo', 'Montes Urales 34', '9612027501', 'Dentista General'); 
delete from medico;
desc medico;
select * from medico;
drop table cita;
show tables;
CREATE TABLE cita(telefono char(10),fecha date, hora TIME(6), rfc char(13));
insert into cita values
("","2022/10/10", "8:00:00", "GOLJ90050812"),
("","2022/10/10", "8:30:00", "GOLJ90050812"),
("","2022/10/10", "9:00:00", "GOLJ90050812"),
("","2022/10/10", "9:30:00", "GOLJ90050812"),
("","2022/10/10", "10:00:00", "GOLJ90050812"),
("","2022/10/10", "10:30:00", "GOLJ90050812"),
("","2022/10/10", "11:00:00", "GOLJ90050812"),
("","2022/10/10", "11:30:00", "GOLJ90050812"),
("","2022/10/10", "12:00:00", "GOLJ90050812"),
("","2022/10/10", "12:30:00", "GOLJ90050812"),
("","2022/11/10", "8:00:00", "GOLJ90050812"),
("","2022/11/10", "8:30:00", "GOLJ90050812"),
("","2022/11/10", "9:00:00", "GOLJ90050812"),
("","2022/11/10", "9:30:00", "GOLJ90050812"),
("","2022/11/10", "10:00:00", "GOLJ90050812"),
("","2022/11/10", "10:30:00", "GOLJ90050812"),
("","2022/11/10", "11:00:00", "GOLJ90050812"),
("","2022/11/10", "11:30:00", "GOLJ90050812"),
("","2022/11/10", "12:00:00", "GOLJ90050812"),
("","2022/11/10", "12:30:00", "GOLJ90050812"),
("","2022/12/10", "8:00:00", "GOLJ90050812"),
("","2022/12/10", "8:30:00", "GOLJ90050812"),
("","2022/12/10", "9:00:00", "GOLJ90050812"),
("","2022/12/10", "9:30:00", "GOLJ90050812"),
("","2022/12/10", "10:00:00", "GOLJ90050812"),
("","2022/12/10", "10:30:00", "GOLJ90050812"),
("","2022/12/10", "11:00:00", "GOLJ90050812"),
("","2022/12/10", "11:30:00", "GOLJ90050812"),
("","2022/12/10", "12:00:00", "GOLJ90050812"),
("","2022/12/10", "12:30:00", "GOLJ90050812");
select * from cita;
insert into cita values
("","2022/10/10", "8:00:00", "URFM75040312"),
("","2022/10/10", "8:30:00", "URFM75040312"),
("","2022/10/10", "9:00:00", "URFM75040312"),
("","2022/10/10", "9:30:00", "URFM75040312"),
("","2022/10/10", "10:00:00", "URFM75040312"),
("","2022/10/10", "10:30:00", "URFM75040312"),
("","2022/10/10", "11:00:00", "URFM75040312"),
("","2022/10/10", "11:30:00", "URFM75040312"),
("","2022/10/10", "12:00:00", "URFM75040312"),
("","2022/10/10", "12:30:00", "URFM75040312");
update cita set telefono ="96111911202" where fecha="2022/10/10" and hora="8:30:00" and rfc="URFM75040312";

create table medicamento (codigo int primary key, nombre varchar(50), dosis varchar(45));
insert into medicamento values
("10","Simvastatina","20 a 40 mg/dia"),
("20","Aspirina","75 a 100 mg/dia"),
("30","Omeprazol","10 a 20 mg/dia"),
("40","Lexotiroxina sódica","100 a 150 mg/dia"),
("50","Ramipril","1,25 mg/dia"),
("60","Amlodipina","5 a 10 mg/dia"),
("70","Paracetamol","60 mg/dia");
