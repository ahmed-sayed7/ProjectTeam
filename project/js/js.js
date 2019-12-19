/*
loops :
for 
while

*/

/*document.getElementById("demo").innerHTML="route academy"


console.log("hello js");

window.alert("lnokn")*/

/*var firstUserName="eslam";
var userMail='ahemd';
var id=310;

if(id <200){
    window.alert(" wlcome ");
}
else if(id>300){
    window.alert("hello");
}
else{
    window.alert("good mornanig");
}

for (var i=0 ; i<10;i+=1){
    console.log("hello");
    console.log("hello");
}*/
/*function welcome(){
    var userName= document.getElementById("userInp").value;
    window.alert("welcome "+userName);
}*/

/* q1 */ 
/*function prtNum(){
  var num1=document.getElementById("num").value;
  window.alert(num1);
}

function check(){
    var num=document.getElementById("num2").value;
    if( num%3==0 && num%4==0 ){
        document.getElementById("output").innerHTML= "yes";
    }else {
        document.getElementById("output").innerHTML= "No";
    }
}*/

/* session 2 */

/*function checkMail(){
    var fullmail =document.getElementById("fullmailinp").value ;

    var index =fullmail.search("@");
    var userName = fullmail.slice(0,index);
    var domain =fullmail.slice(index+1)

    document.getElementById("userNameinp").value=userName;
    document.getElementById("domain").value=domain;

}*/

//var radioButtons =document.getElementsByName("onSale");

/*productcontainer =[];


function addProduct(){
     
    /*var proPrice=document.getElementById("productPrice").Value;
    var procategory=document.getElementById("productcategory").Value;
    var proDecs=document.getElementById("productDesc").Value;
    var productsale=false;
    console.log(document.getElementById("#012").value);
}
    /*if(radioButtons[0].checked==true){
        productsale=true;
    }*/

    /*var product ={
        name:proName,
        price: proPrice,
        category:procategory,
        Desc:proDecs,
        onsale:productsale
    }
    productcontainer.push(product);
    console.log(productcontainer);
    clearForm();
    displayProduct();*/


/*function clearForm(){
    for(var i=0 ; i<inputs.length ;i++){
        inputs[i].value="";
    }
}

function displayProduct(){
    var temp ="";
    for (var i=0 ;i<productcontainer.length;i++){
        temp +=`  <div class="col-md-3">
        <div class="product">
            <img src="" alt="">
            <h4> `+productcontainer[i].name+`<span class="badge badge-info"> mobile</span> </h4>
            <h5 class="text-muted"> price :`+productcontainer[i].price`</h5>
            <p> `+ productcontainer[i].Desc+ de` </p>
        
            <div class="sale">sale</div>
        </div>
    </div>`;

    }

    document.getElementById("productRow").innerHTML=temp;*/



/*if (true)
{
    var u=5;
}
console.log(u);
var welcome= function(){
    console.log("welcome")
} // expresion function is haosted as a variable
console.log(welcome());

sum(5,4);

function sum(y,z){
    var x=y+z; 
    console.log(x);
} // statment function



var us="eslam and khaled and";
us.replace ("khaled" , "mohamed");
us.slice(1,5)
us.indexOf("s")
var v=us.search("and")
console.log(v);
*/

/*var img=document.getElementById("M");
document.addEventListener("mousemove" , function(e){
    img.style.left = e.clientX;
    img.style.top = e.clientY;
})*/


/*let preson = function(name , age ,salary ,gender){
    this .Pname=name;
    this .Psalary=salary;
    this .Page=age;
    this .Pgender=gender;
}

preson.prototype.walcome= function(){
    console.log(`welcome ${this.Pname}`);
}
preson.prototype.calcSalaryByDo= function(){
    console.log(`Your salary is ${this.Psalary} $`);
}

let p1=new preson ("eslam" ,21 ,5000,"male")

p1.walcome();
p1.calcSalaryByDo();*/


/*class Person{
    constructor(name , age ,salary ,gender){
        this .Pname=name;
        this .Psalary=salary;
        this .Page=age;
        this .Pgender=gender;
    }
    welcome(){
        window.alert(`welcome ${this.Pname}`)
    }

    changeSalary(){
        window.alert(`your salary Is ${this.Psalary}$`)
    }
}
let p1=new Person("eslam" ,21,5000,"male");

p1.welcome();
p1.changeSalary();*/

$(".btn").click(function(){
    //$(".test").toggle(1000);
    //$(".test").hide(1000);
    //$(".test").show(1000);
    //$(".test").slideDown(1000);
    //$(".test").slideUp(1000);
    //$(".test").slideToggle(1000);
    //$(".test").fadeIn(1000);
    //$(".test").fadeOut(1000);
    //$(".test").fadeToggle(1000);
    //$(".test").fade(1000,0.5);

    
})


console.log(";mlnk")