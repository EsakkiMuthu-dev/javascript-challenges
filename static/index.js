
// first js challenges to calculate age in days

//step 1 : get DOB from user and validate the DOB

//step2: getting Current date ,year,month using date function
let today = new Date();
let current_year = today.getFullYear();
let current_month = (today.getMonth()+1);
let current_date=today.getDate();
let dayslist = {
    1:31,
    2:28, 
    3:31, 
    4:30, 
    5:31, 
    6:30, 
    7:31, 
    8:31, 
    9:30, 
    10:31, 
    11:30, 
    12:31};
console.log(current_date,current_month,current_year);

//step 3 :validate the user input
function validate(yr,mo,da){
    if ((yr <=current_year) && (mo<=12) && (da<=31)){
        return true
    }
    else{
        return false
    }
}


//step 4: calaculating remaining days after ur birth in birthyear
function days_in_b_year(yr,mo,da){
    if (mo <= 12){
        var days=0;
        for(mo ; mo<=12 ;mo++){
            var days = days + dayslist[mo];
        }
        var days = days - da
       return days
    }

}

//step 5: calaculating the days spend in this current year
function day_in_this_year(yr,mo,da){

    var spend=0;
    for(let i =1 ; i<mo ;i++){
        var spend = spend + dayslist[i];
    }

    var spend = spend + (da-1);
    return spend;
}

//step 6: calculating leapyears till this year
function leapyear(b_yr,c_yr){
    var leap_count =0;
    for(b_yr ; b_yr<=c_yr; b_yr++ ){
        if((b_yr%400 == 0)||(b_yr%100 != 0)&& (b_yr%4 == 0)){
            leap_count+=1;
        }
    }
    return leap_count;
  
}

//step6: performing simple maths and display ur days u spend in ur lifetime
function main(){

    let birth_year = prompt('enter ur yr');
    let birth_month = prompt('enter ur month');
    let birth_day = prompt('enter ur date');
    console.log('Your Date of Birth is :'+birth_day+'-'+birth_month+'-'+birth_year)
 
    if (validate(birth_year,birth_month,birth_day)){
        let leap_days =leapyear(birth_year,current_year)
        let a =days_in_b_year(birth_year,birth_month,birth_day);
        let b = day_in_this_year(current_year,current_month,current_date);
        let random_days = a+b;
        spend_year = (current_year-1) - (birth_year);
        spend_days = spend_year * 365;
        total_days = random_days + spend_days + leap_days;
        console.log('Days u spend in ur lifetime: '+total_days);
        var h1 = document.createElement('h1')
        var text = document.createTextNode('Days u spend in ur lifetime: '+total_days)
        h1.setAttribute('id','results')
        h1.appendChild(text)
        document.getElementById('flex-box-result').appendChild(h1)
    
    }
    else{
        alert('Enter Correct Input');
    }


    

}
function reset(){
    document.getElementById('results').remove();
}


// challenge 2 Background image generator
function bggen(){
    var image = document.createElement('img');
    var div = document.getElementById('bg-gen');
    image.src='Screenshot from 2021-09-20 18-45-42.png'
    div.appendChild(image)
}

//challenge 3 rock paper scissors

function rpsgame(urchoice){
    var humanchoice = urchoice.id;
    var botchoice = randomchoice();
    results =decidewinner(humanchoice,botchoice);//return as [1,0] human win|bot lost
    console.log(results)
    message = finalmessage(results);//return as {'message':'you win!','color':'green'}
    console.log(message)
    rpsfrontend(humanchoice,botchoice,message);
}
function randomchoice(){
    var ran = Math.floor(Math.random() *3);
    choice =['rock','paper','scissors']
    return choice[ran]
}

function decidewinner(hchoice,bchoice){
    // winning possibilites r s,p r, s p
    //else you lost
    // equals tied
    console.log(hchoice)
    console.log(bchoice)
    if(hchoice == bchoice){
        return [0.5,0.5];
    }
    else{
        if((hchoice == 'rock' && bchoice == 'scissors')||(hchoice == 'paper' && bchoice == 'rock')||(hchoice == 'scissors' && bchoice == 'paper')){
            return [1,0];
        }

        else{
            return [0,1];
        }
    }
}


function finalmessage(info){
    console.log(info)
    if (info[0]=== 0.5){
        return {'message':'Match Tied!!','color':'blue'}
    }
    else{
        if(info[0] ===1){
            return {'message':'You Win!!','color':'green'}
        }
        else{
            return {'message':'You Lost!!','color':'red'}
        }
    }

}

function rpsfrontend(hchoice,bchoice,minfo){
    var himg = document.getElementById(hchoice)
    var bimg = document.getElementById(bchoice)

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humandiv = document.createElement('div');
    var messagediv = document.createElement('div');
    var botdiv = document.createElement('div');
    humandiv.append(himg);


    var message = document.createElement('h1');
    var text = document.createTextNode(minfo['message']);
    message.setAttribute('style','color :' + minfo['color']);
 
    message.append(text);
    messagediv.append(message);

    botdiv.append(bimg);

    document.getElementById('flex-box-rps-div').append(humandiv,messagediv,botdiv)


 
} 

//challenge :4 change buttons color
var all_buttons=document.getElementsByTagName('button');
let buttons =[];
for (let i =0; i<all_buttons.length;i++){
    buttons.push(all_buttons[i].classList[1])

}
console.log(buttons)

function changecolor(color){
    var buttoncolor = color.value;
    console.log(buttoncolor);
    var buttonval ={
        'red':'btn-danger',
        'blue':'btn-primary',
        'green':'btn-success',
        'yellow':'btn-warning'
    };
    console.log(buttonval[buttoncolor]);

    if (buttoncolor ==='reset'){
        buttonreset();
    }
    else if (buttoncolor ==='random'){
        buttonrandom();
    }
    else{
        for (let i=0;i<all_buttons.length;i++){
            all_buttons[i].classList.remove(all_buttons[i].classList[1])
            all_buttons[i].classList.add(buttonval[buttoncolor]);
        }
    }
}

function buttonreset(){
    for (let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add(buttons[i]);
    }

}

function buttonrandom(){
    var buttonval ={
        'red':'btn-danger',
        'blue':'btn-primary',
        'green':'btn-success',
        'yellow':'btn-warning'
    };
    var randomlist=['green','blue','yellow','red']
    for (let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        var random_button = randomlist[Math.floor(Math.random()*4)];
        all_buttons[i].classList.add(buttonval[random_button] );
    }

}

//challenge 5: Blackjack

let blackjack ={
    'you':{'scoreboard':'#ur_score','div':'#human-board','scorespan':'#ur_score','score':0 ,},
    'bot':{'scoreboard':'#bot_score','div':'#bot-board','scorespan':'#bot_score','score':0 ,},
    'cards':['2','3','4','5','6','7','8','9','10','K','Q','J','A'],
    'wins':0,
    'loss':0,
    'draws':0,
    'isstand':false,
    'isturnover':false,
}

const YOU = blackjack['you'];
const BOT = blackjack['bot'];

document.querySelector('#hit').addEventListener('click',blackjackhit);

document.querySelector('#deal').addEventListener('click',blackjackdeal);

document.querySelector('#stand').addEventListener('click',blackjackstand);

const hitsound= new Audio('static/sounds/swish.m4a');
const winsound = new Audio('static/sounds/cash.mp3');
const losssound = new Audio('static/sounds/aww.mp3');
function blackjackhit(){
    if(blackjack['isstand'] === false){
    let card = randomcard(YOU);
    showcard(YOU,card);
    showscore(YOU);
    }
}

function showcard(activeplayer,card){
    if (activeplayer['score']<=21)
    {
        var cardimage  = document.createElement('img');
        cardimage.src=card;
        cardimage.height ='150';
        cardimage.width='150';
        document.querySelector(activeplayer['div']).appendChild(cardimage);
        hitsound.play();
    }

   
}

function blackjackdeal(){
    if(blackjack['isturnover']===true){

    
    // let winner =computewinner();
    // showresults(winner);
    let listed_images = document.querySelector(YOU['div']).querySelectorAll('img');
    let dealer_images = document.querySelector(BOT['div']).querySelectorAll('img');

    for(let i =0 ; i<listed_images.length;i++){
        listed_images[i].remove();
    }
    for(let i =0 ; i<dealer_images.length;i++){
        dealer_images[i].remove();
    }
    YOU['score']=0;
    BOT['score']=0;
    document.querySelector(YOU['scoreboard']).textContent= YOU['score'];
    document.querySelector(YOU['scoreboard']).style.color = 'white';


    document.querySelector(BOT['scoreboard']).textContent= BOT['score'];
    document.querySelector(BOT['scoreboard']).style.color = 'white';

    document.querySelector('#black-jack-result').textContent='Lets play ';
    document.querySelector('#black-jack-result').style.color = 'white';

    showscore(YOU);
    showscore(BOT);
    blackjack['isstand']=false;
    blackjack['isturnover']=false;
}



    
}

function randomcard(activeplayer){
    let index= Math.floor(Math.random()* 13);
    let card = blackjack['cards'][index];
    updatescore(card,activeplayer)
    cardsrc= '/home/harrypotter/Downloads/javascrpt_crash_cousre/challenge/static/images/'+card+'.png';
    return cardsrc
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));  
}

async function blackjackstand(){
    blackjack['isstand'] = true;

    while(BOT['score']<16 && blackjack['isstand']===true){
        let card = randomcard(BOT);
        showcard(BOT,card);
        showscore(BOT);
        await sleep(1000);
    }
    let winner = computewinner();
    showresults(winner);
    blackjack['isturnover']=true;


}

function updatescore(card,activeplayer){
    let values ={
        'J':10,
        'Q':10,
        'K':10,
        'A':[1,11],
    }

    if ( parseInt(card) <=10){
        activeplayer['score'] += parseInt(card);        
    }
    else if(String(card)==='A'){
        let index = Math.floor(Math.random()*2);
        console.log('Youuuu');
        activeplayer['score']+= values[String(card)][index];
    }
    else{
        activeplayer['score']+=values[String(card)];
    }

}

function showscore(activeplayer){
    if(activeplayer['score']<=21){
        document.querySelector(activeplayer['scoreboard']).textContent = activeplayer['score'];

    }
    else{
        document.querySelector(activeplayer['scoreboard']).textContent = 'Bust!';
        document.querySelector(activeplayer['scoreboard']).style.color = 'red';
    }
  
}

function computewinner(){
    let winner;
    //if our score is less than 21
    if(YOU['score']<21){
        if(YOU['score']> BOT['score']||(BOT['score']>21)){
       
            winner = 'YOU';
        }else if (YOU['score']<BOT['score']&&(BOT['score']<=21)){
      
            winner='BOT';
        }
        else if(YOU['score'] === BOT['score']){
      
            winner = 'Drew';
        
        }
    }
    else if(YOU['score']>21 && BOT['score']<=21){
    
        winner='BOT';
    }
    else if (YOU['score']>=21 && BOT['score']>=21 ){
  
        winner ='Drew';

    }
    return winner
}

function showresults(winner){
    if(winner==='YOU'){
        message = 'You win!';
        messagecolor='green';
        blackjack['wins']+=1;
        document.querySelector('#wins').textContent=blackjack['wins'];
        winsound.play();
    }
    else if(winner==='BOT'){
        message='You Lost!';
        messagecolor='red'
        blackjack['loss']+=1;
        document.querySelector('#losses').textContent=blackjack['loss'];
        losssound.play();
    }
    else if(winner==='Drew'){
        message='You Drew!!'
        messagecolor='blue'
        blackjack['draws']+=1;
        document.querySelector('#draws').textContent=blackjack['draws'];
    }
    
    document.querySelector('#black-jack-result').textContent=message;
    document.querySelector('#black-jack-result').style.color=messagecolor;
}

