
console.log('hello world')

function test(){
     console.log("function tested!")
}

test();
const obj1: obj = {
    name: 'hello',
    roleId:1
}
const obj2 = {
    lastName:'test',
    roleId:'2'
}

let obj3:obj = obj1

// let obj1:obj ={
//     name:'shubham',
//     rollno:12,
//     fullname:'shubham singh',
//     marks:9

// }


interface obj {
    [key:string]:string|number,
}
let myRoleId: string | number;


function add(num:number,num2:number):number{
    return num + num2;
}

add(2,4)


function display<t>(num:t):t{
    return num;
}

console.log(display<number>(3));
console.log(display<string>('hello'));


// type aliases

type student = {
    name:string,
    marks:number;
};

type rollNo = number | string;


type extendStudent = student & {
    class : string;
};
const myrollNo : rollNo = 25;

const Student : extendStudent = {name:'shubham',marks:90,class:'12th'};

console.log(Student);
