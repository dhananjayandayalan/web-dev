function eventListener() {

}

formData = document.getElementById('customer-form');
const formName = formData.name.value;
const formCourse = formData.course.value;
const formAuthor = formData.author.value;

document.getElementById('customer-form').addEventListener('submit', (event) => {
    //Name
    //Course
    //Author
    const customer = new Customer(formName, formAuthor, formAuthor);
    const display = new Display();

    // customer.prototype = Object.create(customer);
});

function Display() {
    this.fullName = document.getElementById(`customer-name`);
    this.course = document.getElementById(`customer-course`);
    this.author = document.getElementById(`customer-author`);
    this.customer = document.querySelector('.customer-list');


}

function Customer(name, course, author) {
    this.name = name;
    this.course = course;
    this.author = author;
}

Display.prototype.addCustomer = (customer) => {
    const div = document.createElement('div');

};

Display.prototype.clearFields = () => {
    this.name.value = '';
    this.course.value = '';
    this.author.value = '';
};

Display.prototype.validateFields = () => {
    
}