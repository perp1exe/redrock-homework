const student ={name:'edg',age:18,sex:'male',hobby:['play game','sleep']};

function copy(obj) {
    const result = {};
    for (const key in obj) {
        result[key] = obj[key];
    }
    return result;
}

const student1 = copy(student);

const student2 = Object.assign({},student);

const student3 = {...student};

const Students = [student,student1,student2,student3];
console.table(Students);