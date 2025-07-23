let studentList = [
    {
        name: "A",
        age: 18,
        id: 1
    },
    {
        name: "B",
        age: 19,
        id: 2
    }
];


function show() {
    for (let student of studentList) {
        console.log(`Ten: ${student.name}`);
        console.log(`Tuoi: ${student.age}`);
        console.log(`ID: ${student.id}`);
        console.log(`--------------`);
    }
}


let x = prompt("Nhap A/S/D");
if (x === "A") {
    let student = prompt("Nhap ten hoc sinh");
    let id = +prompt("Nhap id cua hoc sinh");
    let Age = +prompt("Nhap tuoi")
    studentList.push({ name: student, age: Age, id: id });
    show();
} else if (x === "S") {
    show();
} else if (x === "D") {
    let id = +prompt("Nhap id muon xoa");
    let index = studentList.findIndex(function (el) {
        return el.id === id;
    });
    if (index === -1) {
        console.log("Khong tim thay id");
    } else {
        studentList.splice(index, 1);
        console.log(`Da xoa hoc sinh co id: ${id}`);
        show();
    }
}
else {
    console.log("Vui long nhap lai");
}



