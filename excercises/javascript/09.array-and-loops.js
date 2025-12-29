
let listArray = [];

    document.querySelector('.js-button').addEventListener('click', () => {
        addTodo ();
    })
function addTodo () {
    const text = document.querySelector('.js-name');
    let name = text.value;

    const num = document.querySelector('.js-date');
    let date = num.value;
    listArray.push({
        name: name,
        date: date
    });

    text.value = '';
    todoList();
}

function todoList () {
    let todoListHTML = '';
    for (let i = 0; i < listArray.length; i++) {
        let todoObject = listArray[i]
        let name = todoObject.name;
        let date = todoObject.date;
        let html = `<div>${name}</div>
        <div>${date}</div>
        <button class="js-remove-button" style="background: tomato; border: transparent; border-radius: 30px; color: #fff; padding: 10px 10px;">Delete</button>
        `;
        todoListHTML += html;
        
        
    }
    
    document.querySelector('.showing').innerHTML = todoListHTML;

    document.querySelectorAll('.js-remove-button').forEach((deleteButton, i) => {
            deleteButton.addEventListener('click', () => {
                listArray.splice(i, 1); 
                todoList();
            });
        });
  
}



// Array is reference like object 
let array1 = [1, 2, 3];
// we use slice to differ between array1 and array2
let array2 = array1.slice();
array2.push(4);
console.log(array1);
console.log(array2);

// we have shortcut to get specific value from array
const [firstValue, secondValue] = [1, 2, 3];
console.log(firstValue);

// we use break to stop the program
for (let i = 1; i <= 10; i++) {
    console.log(i);
    if (i === 5) {
        break;
    }
}

// we use continue to skip one value that we need
for(let j = 1; j <= 10; j++) {
    if (j % 3 === 0) {
        continue;
    }
    console.log(j);
}

// we can use while loop as for 
let i = 1;
while (i <= 10) {
    if (i % 3 === 0) {
        i++;
        continue;
    }
    console.log(i);
    i++;    
} 

// we can use for with function 
function nums (listedArray) {
        let listedArray1 = [];
        for (let i = 0; i < listedArray.length; i++) {
            s = listedArray[i];
            if (s === 0) {
            break;
        }
            listedArray1.push(s * 2);
        
        }
        console.log(listedArray1);
}
nums ([1, 1, 0, 5]);
nums ([2, 2, 5]);

