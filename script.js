//your JS code here. If required.

function onSubmit(){
    event.preventDefault();

    let age=document.getElementById("age").value.trim();
    let name1=document.getElementById("name").value.trim();
    if(age==="" || name1===""){
        alert("Please enter valid details")
        return false
    }   

     let myPromise=new Promise((resolve,reject)=>{
     age = parseInt(age);

    setTimeout(()=>{
            if(age>18){
                resolve(`Welcome,${name1}. You can vote.`);
            }
            else{
                reject(`Oh sorry ${name1}. You aren\'t old enough.`);
            }
    },4000)
})

myPromise
    .then(message => alert(message))
    .catch(error => alert(error));

}



