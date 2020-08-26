create database student;

CREATE TABLE student.student(
    Id  INT AUTO_INCREMENT ,
    fname VARCHAR(25),
    lname VARCHAR(25),
    PRIMARY studentKey(Id)
)