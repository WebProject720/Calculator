//add click sound to button
let audio=new Audio("Keyboard_Button_1-fesliyanstudios.com.mp3");
window.addEventListener("keydown",playSound);
function playSound(){
    audio.play();
}
//clear()
let screen = document.getElementById("screen");
let clean_btn=document.getElementById("restart");
function cleanEvent (e) { 
    playSound();
    if(e.key=="Delete"){
        restart();
    }
}
window.addEventListener("keydown",cleanEvent);
//enter()
//restart btn
// let restart=document.getElementById("restart");
function restart() {
    screen.value = '';
}
function EnterBtn() {
    playSound();

    let Question = screen.value;
    if (Question == '') {
        alert('Please enter something');
    } else {
        // alert('Please enter something 2');
        calculation(Question);
    }
}
let all = document.getElementsByClassName("all");

function onclickFun(value) {
    playSound();
    let id = document.getElementById(value).value;
    screen.value += id;
}

function EnterBtn_new(e) {
    e.preventDefault();
    let screen = document.getElementById("screen");
    let Question = screen.value;
    if (Question == '') {
        alert('Please enter something');
    } else {
        // alert('Please enter something 2');
        calculation(Question);
    }
}
//other btn
let input = document.getElementById("screen");
input.addEventListener("keypress", eventfun);
// input.addEventListener("keyup", eventfun);
// input.addEventListener("keydown", eventfun);
function eventfun(e) {
    //console.log(e);
    if (e.key == "Enter") {
        EnterBtn_new(e);
    } else {
        // //console.log(e.key);
    }
}
//let's creat a function for calulation

function calculation(value) {
    //console.log(value);
    let str = value.toString();
    let indexNumber, character;
    let i = 0;
    let symbol = ['+', '-', '*', '/'];
    let Arr_index_Are = new Array();

    function check_symbol_fun(element) {
        do {

            indexNumber = str.indexOf(element, i);
            if (indexNumber != -1) {
                character = str.charAt(indexNumber);
                // //console.log(character, indexNumber);
                Arr_index_Are.push(indexNumber);
            }
            i = indexNumber + 1;
        } while (indexNumber != -1);
    }
    for (let f = 0; f < symbol.length; f++) {
        const element = symbol[f];
        check_symbol_fun(element);
    }
    // //console.log(Arr_index_Are);
    let New_arr = Arr_index_Are.sort(function(a, b) {
        return a - b;
    });
    // //console.log(New_arr);
    Creat_arr(value);

    function Creat_arr(value) {
        // //console.log(value);
        let assamble = new Array();
        let assSymbol = new Array();
        let w1 = 0;
        for (let j = 0; j < New_arr.length; j++) {
            const element = New_arr[j];
            // //console.log(value.substring(w1, element));
            let SepNumber = value.substring(w1, element);
            assamble.push(SepNumber);
            let symbol001 = value.substring(element, element + 1);
            // assSymbol.push(symbol001);
            assamble.push(symbol001);
            // //console.log(value.substring(element, element + 1));
            if (New_arr[j + 1] == undefined) {
                // //console.log(value.lastIndexOf(''));
                // //console.log(value.substring(element + 1, value.lastIndexOf('')));
                let last = value.substring(element + 1, value.lastIndexOf(''));
                assamble.push(last);
            }
            w1 = element + 1;
        }
        // //console.log(assamble);
        let New_assamble;
        if (assamble[0] == '') {
            if (assamble[1] == '+' || assamble[1] == '-') {
                delete assamble[0];
                New_assamble = assamble.insert(0, '0');
            }
            if (assamble[1] == '*' || assamble[1] == '/') {
                delete assamble[0];
                New_assamble = assamble.insert(0, '1');

            }
            assamble = assamble.filter(n => String);
        }
        //console.log(assamble);
        main_con(assamble);
    }
}


Array.prototype.insert = function(index, ...items) {
    this.splice(index, 0, ...items);
};

function main_con(arr2) {
    for (let r = 0; r < arr2.length; r++) {
        const element = arr2[r];
        let value;
        let New_arr_number;
        // let value_arr = new Array();
        switch (element) {
            case '/':
                setTimeout(() => {

                    //console.log("%cRound 1", "color:blue");
                    // //console.log(r, element, typeof element);
                    // value = divide(arr2[r - 1], arr2[r + 1]);
                    // // value_arr.push(value);
                    // //console.log(value);
                    // delete arr2[r - 1], delete arr2[r + 1], delete arr2[r];
                    // arr2.insert(r + 1, value.toString());
                    New_arr_number = (arr2.filter(n => String));
                    //console.log(New_arr_number);
                    let r_p;
                    for (let s = New_arr_number.length; s > 0; s--) {
                        if (New_arr_number[s] == '/') {
                            r_p = s;
                            // break;
                        }
                    }
                    r = r_p;
                    let element2 = New_arr_number[r];
                    // //console.log(New_arrs_number);
                    //console.log(r, element2, typeof element2);
                    value = divide(New_arr_number[r - 1], New_arr_number[r + 1]);
                    //console.log(value);
                    delete New_arr_number[r - 1], delete New_arr_number[r + 1], delete New_arr_number[r];
                    New_arr_number.insert(r + 1, value.toString());
                    arr2 = New_arr_number;
                    if (New_arr_number.filter(n => String).length == 1) {
                        //console.log(`Answer of the Question is ${value}`);
                        screen.value = `= ${value}`;

                    }
                }, 1);
                break;
            case '*':
                setTimeout(() => {
                    //console.log("%cRound 2", "color:blue");

                    // //console.log(value_arr);
                    // let value54 = value.toString();
                    // arr2.insert(r + 1, value54);

                    New_arr_number = (arr2.filter(n => String));
                    //console.log(New_arr_number);
                    let r_p;
                    for (let s = New_arr_number.length; s > 0; s--) {
                        if (New_arr_number[s] == '*') {
                            r_p = s;
                            // break;
                        }
                    }
                    r = r_p;
                    let element2 = New_arr_number[r];
                    // //console.log(New_arrs_number);
                    //console.log(r, element2, typeof element2);
                    value = malti(New_arr_number[r - 1], New_arr_number[r + 1]);
                    //console.log(value);
                    delete New_arr_number[r - 1], delete New_arr_number[r + 1], delete New_arr_number[r];
                    New_arr_number.insert(r + 1, value.toString());
                    arr2 = New_arr_number;
                    if (New_arr_number.filter(n => String).length == 1) {
                        //console.log(`Answer of the Question is ${value}`);
                        screen.value = `= ${value}`;
                    }
                    // //console.log(arr2);
                }, 100);
                break;

            case '-':
                setTimeout(() => {
                    //console.log("%cRound 3", "color:blue");
                    let minus_arr = arr2.filter(n => String);
                    //console.log(minus_arr);
                    let g_p;
                    for (let d = minus_arr.length; d > 0; d--) {
                        if (minus_arr[d] == '-') {
                            g_p = d;
                        }
                    }
                    r = g_p
                    //console.log(r, element, typeof element);
                    value = minus(minus_arr[r - 1], minus_arr[r + 1]);
                    //console.log(value);
                    delete minus_arr[r - 1], delete minus_arr[r + 1], delete minus_arr[r];
                    minus_arr.insert(r + 1, value.toString());
                    // //console.log(minus_arr.filter(n => String));
                    if (minus_arr.filter(n => String).length == 1) {
                        //console.log(`Answer of the Question is ${value}`);
                        screen.value = `= ${value}`;
                    }
                    arr2 = minus_arr;

                }, 200);
                break;
            case '+':
                setTimeout(() => {
                    // let Bool_value = true;
                    // if (Bool_value == true) {

                    //console.log("%cRound 4", "color:blue");
                    // let value54 = value.toString();
                    // arr2.insert(r + 1, value54);
                    let r_p;
                    New_arr_number = (arr2.filter(n => String));
                    for (let s = New_arr_number.length; s > 0; s--) {
                        if (New_arr_number[s] == '+') {
                            r_p = s;
                            // break;
                        }
                    }
                    // //console.log(r);
                    r = r_p;
                    //console.log(New_arr_number);
                    let element3 = New_arr_number[r];
                    //console.log(r, element3, typeof element3, typeof New_arr_number[r + 1]);
                    value = add(New_arr_number[r - 1], New_arr_number[r + 1]);
                    //console.log(value);
                    // delete arr2[r - 1], delete arr2[r + 1], delete arr2[r];
                    delete New_arr_number[r - 1], delete New_arr_number[r + 1], delete New_arr_number[r];
                    New_arr_number.insert(r + 1, value.toString());
                    arr2 = New_arr_number;
                    // }
                    if (New_arr_number.filter(n => String).length == 1) {
                        //console.log(`Answer of the Question is ${value}`);
                        screen.value = `= ${value}`;
                    }

                }, 300);
                break;
        }
        // //console.log(value);
        // //console.log(r, element, typeof element);
        // value = add(arr2[r - 1], arr2[r + 1]);
        // //console.log(value);
    }
}
// }

function add(x, y) {
    x = Number(x);
    y = Number(y);
    return x + y;
}

function minus(x, y) {
    x = Number(x);
    y = Number(y);
    return x - y;
}

function malti(x, y) {
    x = Number(x);
    y = Number(y);
    return x * y;
}

function divide(x, y) {
    x = Number(x);
    y = Number(y);
    return x / y;
}
// window.Question_value = assamble;
// let NumArr = new Array();
// for (let g = 0; g < assamble.length; g++) {
//     const element = assamble[g];
//     let Num = Number(element);
//     NumArr.push(Num);
// }
// // //console.log(assSymbol);
// // let sym = assSymbol[0];
// // // assSymbol.forEach(element => {
// // // if (sym == '-') {
// // // let New_symbol = 1 / 1;
// // let symcode = '+';
// // //console.log('+'.charCodeAt(0));
// // //console.log('-'.codePointAt());
// // // //console.log(typeof New_symbol);
// // // }

// // // });
// // //console.log(NumArr[1] + NumArr[2]);
// for (let k = 0; k < assamble.length; k++) {
//     const element = assamble[k];
//     // symbol.forEach(element2 => {
//     // let indeNum;
//     // if (element == '/') {
//     // indeNum = k;
//     // }
//     function simple(a, b, c, fun) {
//         let sol = fun(assamble[a], assamble[b]);
//         //console.log(sol);
//         delete assamble[a];
//     }

//     function scan(array, symbol) {
//         // array.forEach(element => {
//         for (let t = 0; t < array.length; t++) {
//             //console.log(t);
//             let element = array[t].toString();
//             //console.log(element);
//             let bool_valu;
//             //console.log(array);
//             if (element == symbol) {
//                 // //console.log(symbol);
//                 return bool_valu = "run loop";
//                 // return true;
//             } else {
//                 return bool_valu = "Stop loop";
//                 // return false;
//             }
//         }
//     }
// }
// }
// }
// });
//             switch (element) {
//                 case '/':
//                     // do {

//                     //console.log("%cround %d ", "color:blue", k);
//                     //console.log(k, k - 1, k + 1);
//                     let sol = (dividenum(assamble[k - 1], assamble[k + 1]));
//                     //console.log(sol);
//                     // let assamble = assamble.copyWithin(0, k - 1, k + 1);
//                     // assamble = assamble.slice(k - 1, '45', k + 1, '2');
//                     (delete assamble[k], delete assamble[k - 1], delete assamble[k + 1]);
//                     //console.log(assamble);
//                     Array.prototype.insert = function(index, ...items) {
//                         this.splice(index, 0, ...items);
//                     };
//                     assamble.insert(k + 1, sol);
//                     assamble = (assamble.filter(n => String));
//                     //console.log(assamble);
//                     let bool = scan(assamble, '/');
//                     //console.log(bool);
//                     // let new_arr_test = assamble.slice(k - 1, 1, 'sol');
//                     // //console.log(assamble);
//                     // //console.log(new_arr_test);
//                     // //console.log(bool_valu);
//                     break;
//                     // } while (bool == false);
//                 case '*':
//                     //console.log("%cround %d ", "color:blue", k);
//                     //console.log(k, k - 1, k + 1);
//                     //console.log(maltinum(assamble[k - 1], assamble[k + 1]));
//                     break;
//                 case '+':
//                     //console.log("%cround %d ", "color:blue", k);
//                     //console.log(k, k - 1, k + 1);
//                     //console.log(plusnum(assamble[k - 1], assamble[k + 1]));
//                     // //console.log(assamble[k + 1], assamble[k - 1]);
//                     break;
//                 case '-':
//                     //console.log("%cround %d ", "color:blue", k);
//                     //console.log(k, k - 1, k + 1);
//                     //console.log(minusnum(assamble[k - 1], assamble[k + 1]));
//                     break;

//                 default:
//                     break;
//             }
//             // });
//         }

//     }

//     function dividenum(value005, value006) {
//         let num1 = Number(value005);
//         let num2 = Number(value006);
//         return (num1 / num2);
//     }

//     function maltinum(value005, value006) {
//         let num1 = Number(value005);
//         let num2 = Number(value006);
//         return num2 * num1;
//     }

//     function plusnum(value005, value006) {
//         let num1 = Number(value005);
//         let num2 = Number(value006);
//         return num2 + num1;
//     }

//     function minusnum(value005, value006) {
//         let num1 = Number(value005);
//         let num2 = Number(value006);
//         return num1 - num2;
//     }

// }
//expriment
// let sym = ['+', '-', '/', '*'];
// mainFun(arr2);
// //console.log(arr2);

// function mainFun(arr2) {