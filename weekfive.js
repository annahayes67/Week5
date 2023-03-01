class Student {
    constructor(name, grade){
        this.name = name;
        this.grade = grade;
    }
    describe(){
        return `${this.name} is in grade ${this.grade}`;
    }
}

class Grade {
    constructor(name){
        this.name = name;
        this.students = [];
    }
    addStudent(student){
        if (player instanceof Student){
            this.students.push(student);
        } else {
        throw new Error(`You can only add an instance of Student. Argument is not a player: ${student}`);
        }
    }

    describe(){
        return `${this.gradeLevel} has ${this.students.length} students.`;
    }
}
//creating my different classes

class Menu{
    constructor(){
        this.grade = [];
        this.selectedGrade = null;
    }

    start(){
        let selection = this.showMainMenuOptions();
        while(selection != 0){
            switch (selection){
                case '1':
                    this.createGrade();
                    break;
                case '2':
                    this.viewGrade();
                    break;
                case '3':
                    this.deleteGrade();
                    break;
                case '4':
                    this.displayGrade();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert(`Goodbye!`);
    }

    showMainMenuOptions(){
        return prompt(`
        0) exit
        1) create new grade
        2) view grade
        3) delete grade
        4) display all grades
        `)
    }

    showClassMenuOptions(classInfo){
        return prompt(`
        0) back
        1) create student
        2) delete student
        ------------------
        ${classInfo}
        `);
    }

    displayGrade(){
        let gradeString = '';
        for (let i = 0; i < this.grade.length; i++){
            gradeString += i + ') ' + this.grade[i].name + '\n';
        }
        alert(gradeString);
    }
    
    createGrade(){
        let name = prompt('Enter a new grade class');
        this.grade.push(new Grade(name));
    }

    viewGrade(){
        let index = prompt('Enter name of class you would like to view:');
        if (index > -1 && index < this.grade.length){
            this.selectedGrade = this.grade[index];
            let description = 'Class Name: ' + this.selectedGrade.name + '\n';
            for(let i = 0; i < this.selectedGrade.students.length; i++){
                description += i + ') ' + this.selectedGrade.students[i].name + '- ' + this.selectedGrade.students[i].class + '\n';
              }
              let selection = this.showClassMenuOptions(description);
              switch (selection){
                case '1':
                 this.createStudent();
                 break;
                case '2':
                 this.deleteStudent();
              } 
        }
    }

    deleteGrade(){
        let index = prompt('Enter the index of the grade you would like to delete:');
        if (index > -1 && index < this.grade.length)
        this.grade.splice(index, 1);
    }

    createStudent(){
        let name = prompt('Enter name for new student:');
        let position = prompt('Enter class for new student');
        this.selectedGrade.students.push(new Student(name, grade));
    }

    deleteStudent(){
        let index = prompt('Enter the index of the sudent you would like to delete');
        if (index > -1 && index < this.selectedGrade.students.lenght){
            this.selectedGrade.students.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();


console.log("hi");