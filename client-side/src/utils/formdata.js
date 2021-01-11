const loginform = [
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
        label: 'Doctor', 
        name: 'role', 
        type: 'checkbox', 
        title: 'Check if loging in as doctor', 
        required: true, 
    },
    {
        label: 'Hospital', 
        name: 'role', 
        type: 'checkbox', 
        title: 'Check if loging in as hospital', 
        required: true, 
    },
    
];
const registrationform = [
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
        label: 'Confirm Password', 
        name: 'confirm password', 
        type: 'password', 
        title: 'Re-Type your password', 
        required: true, 
    },
];


export {
    loginform, 
    registrationform,

}