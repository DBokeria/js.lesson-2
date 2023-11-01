// davaaleba 1 - ციკლის საშუალებით გამოიტანეთ რიცხვები 5დან - 100მდე
let a=5
while (a<=100) {
    console.log(a);
    a++;
}
// დავალება 2  მოცემულია მასივიდან
// ციკლის საშუალებით გამოიტანეთ მხოლოდ ის რიცხვები რომლებიც მეტია 0 ზე და ნაკლებია 10ზე

let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
for (let a = 0; a < array1.length; a++) {
    const element = array1[a];
    if (element > 0 && element < 10) {
        console.log(element);
    }
}

// დავალება 3 მოცემული მასივიდან ციკლის საშუალებით შეამოწმეთ, თუ ამ მასივში არის რიცხვი 5 - მაშინ დალოგეთ - ‘არის’ და გააჩერეთ ციკლი
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for(let itemArrey of array2){
    if (itemArrey == 5) {
        console.log("არის");
        break
    }
}

// დავალება 4 მოცემული მასივიდან ციკლის საშუალებით გამოთვალეთ რიცხვების ჯამი
let array3= [1, 2, 3, 4, 5];
let p = 0;
 for (let b = 0; b < array3.length; b++) { 
  p += array3[b];
}
console.log(p);

// დავალება 5 მოცემული მასივიდან ციკლის საშვალებით გამოთვალეთ მასივის საშვალო არითმეტიკული.
let array4 = [1, 2, 3, 7, 6, 9];
let sum = 0;
for (let i = 0; i < array4.length; i++) {
    sum += array4[i];     
}
console.log(sum/array4.length);

// დავალება 6 მოცემული მასივიდან გამოიტანეთ ყველა რიცხვი 7 ის გარდა

let array5 = [1, 2, 3, 7, 6, 9];
for (let smallArray of array5) {
    if (smallArray == 7){
        continue;
    }
    console.log(smallArray);

}
// დავალება 7 მოცემული ობიექტიდან ამოიღეთ user ცვლადის სტუდენტის სტატუსი;
let user = {
        firstname: "giorgi",
        lastname: "smith",
        age: 25,
        studentstatus: "active"
    };
    console.log(user.studentstatus);   
    
    
// დავალება 8 მოცემული ობიექტიდან თუ უსერის ასაკი ნაკლებია 18ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი: hello;
// თუ უსერის სახელი უდრის ლევანს მაშინ დაიბეჭდოს ტექსტი: hello levani;
// თუ უსერის სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25ზე დაიბეჭდოს ტექსტი: hello world;
// ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი: error;
let user1 = {
    name: 'giorgi',
    age: 20,
    studentstatus: 'active'
}
// 
if (user.age < 18 && user.studentstatus == 'active') {
    console.log("hello");
} else if (user.name === 'levani') {
    console.log("hello levani");
} else if (user.studentstatus === 'active' || user.age < 25) {
    console.log("hello world");
} else {
    console.log("Error");
}

//  მოცემული მასივიდან for ციკლი ს საშუალებით კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები:
let array = [
    [2, -3, 5, 10],
    [25, -24, -11, 100],
    [-6, -7, 11, 10],
  ];

  for (let a = 0; a < array.length; a++) {
    const elementNew = array[a];
        // console.log(array[a]); 
    // დაიბეჭდება თითოეული მასივი
    for (let b = 0; b < elementNew.length; b++) {
            const elementcousin = elementNew[b]
            if (elementcousin > 0) {
                console.log(elementcousin);
            }
    }
    
  }

//   დავალება 10: მოცემული მასივიდან 
// ამოიღეთ ლუწი რიცხვები
// ამოიღეთ კენტი რიცხვები
let array7 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]
for (let c = 0; c < array7.length; c++) {
    const elements = array7[c];
    // if (elements % 2 == 0) {
        if (elements % 2 == 1) {
        console.log(elements);
    }
}

// დავალება 11: მოცემული მასივიდან კონსოლში გამოიტანეთ მარტო ის ობიექტი, რომლის status property-ის მნიშვნელობა არის true;
let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
]
for (let item of users) {
    if (item.status == true) {
        console.log(item);
    }
}

