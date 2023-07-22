const EmailVal = document.getElementById("email");
const PswVal = document.getElementById("psw");
const submitButton = document.getElementById("submit")
const thanks = document.getElementsByClassName("thanks");
const button = document.getElementById("but");
const btn = document.getElementsByClassName('btn');
const date = new Date()


submitButton.addEventListener('click', (e) =>{
  e.preventDefault();
  checkInputs();
});


function checkInputs(){
  const eVal = EmailVal.value.trim();
  const pVal = PswVal.value.trim();
  
  if(eVal === ''){
    alert('Email cannot be left blank');
  } else if(!isEmail(eVal)){
    alert('Email is not valid');
  } else if(isEmail(eVal)){
    console.log(true);
  }
  if(pVal === ''){
    alert('Password cannot be left blank');
  } else {
    console.log(true);
  }


  if(isEmail(eVal) == true && pVal !== true){
    alert('Thanks for logging in on ' + date.toDateString());
  }
}


function isEmail(EmailVal){
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(EmailVal);
}
function toggleButton(){
  var final = document.getElementById('final');
  var main = document.getElementById('main');
  final.classList.toggle("closed");
  main.classList.add('closed');
}
function toggle1(){
            var x = document.getElementById('ans1');
            var y = document.getElementById('rot1');
            y.classList.toggle('rotate');
            x.classList.toggle('closed');
        }
function toggle2(){
            var x = document.getElementById('ans2');
            var y = document.getElementById('rot2');
            y.classList.toggle('rotate');
            x.classList.toggle('closed');
        }
function toggle3(){
            var x = document.getElementById('ans3');
            var y = document.getElementById('rot3');
            y.classList.toggle('rotate');
            x.classList.toggle('closed');
        }
function toggle4(){
            var x = document.getElementById('ans4');
            var y = document.getElementById('rot4');
            y.classList.toggle('rotate');
            x.classList.toggle('closed');
}
function toggle5(){
            var x = document.getElementById('ans5');
            var y = document.getElementById('rot5');
            y.classList.toggle('rotate');
            x.classList.toggle('closed');
}
function toggle6(){
            var x = document.getElementById('ans6');
            var y = document.getElementById('rot6');
            y.classList.toggle('rotate');
            x.classList.toggle('closed');
}

function toggle7(){
          var x = document.getElementById('ans7');
          var y = document.getElementById('rot7');
          y.classList.toggle('rotate');
          x.classList.toggle('closed');
}