INSERT INTO department (name)
VALUES
('Department A'),
('Department B'),
('Department C'),
('Department D'),
('Department E'),
('Department F'),
('Department F'),
('Department H');

INSERT INTO managers (first_name, last_name)
VALUES
('Batman', 'Bruce'),
('Jackie', 'Chan'),
('Leonl', 'Messi');

INSERT INTO rolee (title, salary, department_id)
VALUES
('Front-End', 70000, 6),
('Back-End', 90000, 3),
('Full-stack', 120000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('James', 'Fraser', 2, 2),
('Derek', 'Johnson', 1, 3),
('Emil', 'John', 3, 1),
('Ronald', 'Firbank', 1, 1),
('Virginia', 'Woolf', 1, 1),
('Piers', 'Gaveston', 1, 3),
('Charles', 'LeRoi', 2, 1),
('Katherine', 'Mansfield', 2, 1),
('Dora', 'Carrington', 3, 3),
('Edward', 'Bellamy', 3, 2),
('Montague', 'Summers', 3, 1),
('Octavia', 'Butler', 3, 1),
('Unica', 'Zurn', 3, 1);