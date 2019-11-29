
const chengeModal = (elem, fun) => {                    
elem.addEventListener('click', fun);
}
const UpDownForm = () => { form.classList.toggle("modal_area_top") }
const form = document.getElementById('form');
const cross = document.getElementById("cross");
const us = document.getElementById("user");
const button = document.getElementById("button");
 chengeModal(cross,UpDownForm);
 chengeModal(us,UpDownForm);

const inputArr = form.getElementsByTagName('input')  
const NewObject = (arr) => {
    let userData  = {};
 for (let i = 0; i < arr.length; i+=1) {
     let name = arr[i].name
     let value= arr[i].value 
     userData[name] = value
 }
return userData
    }
    let getUserData = NewObject(inputArr).userData
   
    
  //Object.assign(getUserData, NewObject(inputArr) )

  




