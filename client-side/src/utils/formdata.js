const loginForm = [
    {
        label: 'Username', 
        name: 'username', 
        type: 'text', 
        title: 'Type your username', 
        required: true, 
    },
    {
        label: 'Password', 
        name: 'password', 
        type: 'password', 
        title: 'Type your password', 
        required: true, 
    },
    {
        label: 'Hospital', 
        name: 'is_hospital', 
        type: 'checkbox', 
        title: 'Check if loging in as hospital', 
        required: true, 
    },
    
];
const registrationForm = [
    {
        label: 'Username', 
        name: 'username', 
        type: 'text', 
        title: 'Type your username', 
        required: true, 
    },
    {
        label: 'Password', 
        name: 'password', 
        type: 'password', 
        title: 'Type your password', 
        required: true, 
    },
    {
        label: 'Name', 
        name: 'name', 
        type: 'text', 
        title: 'Type your name', 
        required: false, 
    },
    {
        label: 'Domain', 
        name: 'domain', 
        type: 'text', 
        title: 'Type your domain, if multiple seperated by commas', 
        required: true, 
    },
];

const addPatientForm = [
    {
        label: 'Name', 
        name: 'name', 
        type: 'text', 
        title: 'Type your name', 
        required: true, 
    },
    {
        label: 'Age', 
        name: 'age', 
        type: 'number', 
        title: 'Type your age', 
        required: true, 
    },
    {
        label: 'Cause', 
        name: 'cause', 
        type: 'text', 
        title: 'Enter cause if more than one enter seperated by commas', 
        required: true, 
    },
    {
        label: 'Gender', 
        name: 'gender', 
        type: 'male', 
        title: 'Type your gender', 
        required: true, 
    },
];

export {
    loginForm, 
    registrationForm,
    addPatientForm,
}