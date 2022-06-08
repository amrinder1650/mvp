drop database randomTeams_db;
create database randomTeams_db;
use randomTeams_db;

create table randomTeams (
  id int auto_increment,
  player varchar(20) not null,
  primary key (id)
);

insert into randomTeams (player) values ('Serena Williams');