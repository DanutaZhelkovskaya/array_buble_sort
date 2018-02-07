/* var myName=5;
 var yourName=myName;
 alert(yourName);
var userName="Dana";
 alert(userName);
 alert(typeof userName);
 alert(typeof myName);
 var a;
 alert(typeof a);
 alert(b);
 var x=10;
 x+=1;
 var y=5;
 var name="name";
var result=x*y;
 alert(result);
 function first(){
     var user="Dana";
     alert(user);
 }
 first();
 var result=prompt('Ваша фамилия:',);
alert("Ваша фамилия-"+result);
 var ask=confirm("Готов?");
 var x=prompt('x');
 if(x>5){
     alert('x>5');
}
 else{
     alert("x<5");
 }


var age=prompt('Введите ваш возраст');
 if(age<18){
   alert('ваш возраст слишком маленький');
    }
    else if(age>18 && age<50){
        alert('отличный возраст');
     }
    else {
        alert("вау");
    }

var a="Админ",b="null", c;
var Password="passord";

var A=prompt('hello');
if (A==a){
    var password=prompt('введите пароль');
    if (password=Password){
        alert('Добро пожаловать')
    }
    else if(password!==Password){
        alert('Вход отменен');
    }
}
else if(A!==a){
    alert('Я вас не знаю');    
}

var login = prompt('Как вас зовут?')
var message = (login == 'Вася') ? 'Привет':
(login == 'Директор') ? 'Здравствуйте':
(login == 'Директор') ? ' ' :  'Нет логина';
    alert(message);


// for(var i=0; i<15; i++){
//     alert("hi");    
// }
var i=17;
var x=34;
for(var i=17;i<x; i++) {
if(i%2==1) {continue;}
    else if(x%2==1) continue;
     if ( x % 2==0 ){
         if(i==x-2) continue;
     }
     else{
         if ( x % 2==0 ){
             if(i==x-1) continue;}
     }
document.write(i + "<br>");
}
// var x=0, y=0;
// while(x<10){
//     document.write(x+"<br>");
//     ;
// }

var arr=[1,2,3,4,5];
for (var i=0; i<arr.length; i++){
    document.write(arr[i]+"<br>");
}*/

// var arr=[];
// var A=5, sum=0;
// for(i=0; i<5; i++){
//     arr[i]=A;
//     A+=1;
//     document.write(arr[i]+"<br>");
// }
// for(i=0; i<5; i++){
//     sum+=arr[i];
// }
// document.write(sum);

// var arr_1 = new Array();
// var arr_2 = new Array();
// var arr_3 = new Array();
// for( var i = 0; i<5; i++) arr_1[i]=i;
// for( var i = 0; i<10; i++) arr_2[i]=i;
// for( var i = 0; i<15; i++) arr_3[i]=i;

// { for (var j = 0; j < n-1-i; j++)
//     { if (A[j+1] < A[j])
//        { var t = A[j+1]; A[j+1] = A[j]; A[j] = t; }
//     }
//  } 
// var arr = new Array(arr_1,arr_2,arr_3);
//     for (var x = 0;x<arr.length; x++){
//         for(var j=0; j<arr[x].length; j++){
//             document.write(arr[x][j]+"  ");
//         }
//         document.write("<br>")        
//     }

var testArr=[5, 8, 0, 3, 9];
/*testArr.sort();
alert(testArr);*/
for(var x=0;x<testArr.length;x++){
    for(var i=0; i<testArr.length; i++){
        if (testArr[i]>testArr[i+1]){
            var t=testArr[i+1]; 
            testArr[i+1]=testArr[i]; 
            testArr[i]=t;
        }
    }

}
console.log(testArr);