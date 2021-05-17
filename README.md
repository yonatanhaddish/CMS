

# # CMS

# LINKS 
https://drive.google.com/file/d/18-TxLusJprLjrjbBIotFfUprxBMdONe3/view
https://yonatanhaddish.github.io/CMS/

# How to use the program

* * Our main file is located in the root (script.js). Once you are inside the script.js file, initiate the program using "node script.js". Then a list of options will be dispalyed and a user can choose one of the list.
 
    * If the user chose "View all departments", then the data of the table department will be dispalyed using console.table(data)
    * If the user chose "View all roles", then the data of the table role will be dispalyed using console.table(data)
    * If the user chose "View all employees", then the data of the table employee will be dispalyed using console.table(data)
    * If the user chose "Add a department", then the user must enter a department name, then the data will be added to the table Department.
    * If the user chose "Add a role", then the user must enter role title, role salary which is number and role department which must be number also, then data will be added to the table Role
    * If the user chose "Add a employee", then the user must enter employees first name, last name, employee role id which must be integer and employees manager id also must be an integer, the a new employee data will be added to the employee table


* * Things tobe updated in the future
1. The update option is not written in the code
2. Validate the inquirer questions especially. ( All inquirer.prompt will be validated)