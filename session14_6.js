
let List =[
    {
        id: 1,
        name: "sach1",
        author: "Alex",
        year: 2020
    },
    {
        id: 2,
        name: "sach2",
        author: "Bob",
        year: 2021
    }
]
while(true){
let input = prompt("Nhap A/S/Sr/D/E");
if(input==="A"){
    let id= +prompt("Nhap ID sach moi");
    let name= prompt("Nhap ten sach");
    let author= prompt("Nhap tac gia cua sach");
    let year= +prompt("Nhap nam xuat ban");
    List.push({id:id, name: name, author:author, year:year});
    show();
}else if (input==="S"){
    show();
}else if (input==="Sr"){
    let name = prompt("Nhap ten sach ban muon tim");
    let index = List.findIndex(function(el){
        return el.name === name;
})
    if (index ===-1){
        console.log("Khong tim thay sach");
    }else{
        console.log("Sach tim thay:");
        console.log(`ID: ${List[index].id}`);
        console.log(`Ten sach: ${List[index].name}`);
        console.log(`Tac gia: ${List[index].author}`);
        console.log(`Nam xuat ban: ${List[index].year}`);
    }
}else if (input ==="D"){
    let id = +prompt("Nhap id sach muon xoa");
    let index = List.findIndex(function(el){
        return el.id === id;
    })
    if (index ===-1){
        console.log("Khong thay sach muon xoa");
    }else{
        List.splice(index,1);
        show();
    }
}else if (input ==="E"){
    break;
}else {
    console.log("Ban nhap sai cuu phap");
}}









function show(){
    for ( let book of List){
        console.log(`ID: ${book.id}`);
        console.log(`Ten sach: ${book.name}`);
        console.log(`Tac gia: ${book.author}`);
        console.log(`Nam xuat ban: ${book.year}`);
        console.log("-------------");
    }
};