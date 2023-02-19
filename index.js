window.addEventListener('load',init)

const levels = {
    easy : 5,
    medium : 4,
    hard : 3,
    superHard : 2
}

const curLevel = levels.medium;

let time = curLevel;
let score = 0;

let isPlaying;




const words = [  "abandon",
"abandoned",
"ability",
"able",
"about",
"above",
"abroad",
"absence",
"absent",
"absolute",
"absolutely",
"absorb",
"abuse",
"academic",
"accent",
"accept",
"acceptable",
"access",
"accident",
"accidental",
"accidentally",
"accommodation",
"accompany",
"according to",
"account",
"account for",
"accurate",
"accurately",
"accuse",
"achieve",
"achievement",
"acid",
"acknowledge",
"a couple",
"acquire",
"across",
"act",
"action",
"active",
"actively",
"activity",
"actor",
"actress",
"actual",
"actually",
"ad",
"adapt",
"add",
"addition",
"additional",
"add on",
"address",
"add up",
"add up to",
"adequate",
"adequately",
"adjust",
"admiration",
"admire",
"admit",
"adopt",
"adult",
"advance",
"advanced",
"advantage",
"adventure",
"advert",
"advertise",
"advertisement",
"advertising",
"advice",
"advise",
"affair", "affect",
"affection",
"afford",
"afraid",
"after",
"afternoon",
"afterwards",
"again",
"against",
"age",
"aged",
"agency",
"agent",
"aggressive",
"ago",
"agree",
"agreement",
"ahead",
"aid",
"aim",
"air",
"aircraft",
"airport",
"alarm",
"alarmed",
"alarming",
"alcohol",
"alcoholic",
"alive",
"all",
"allied",
"allow",
"allow for",
"all right",
"ally",
"almost",
"alone",
"along",
"alongside",
"aloud",
"alphabet",
"alphabetical",
"alphabetically",
"already",
"also",
"alter",
"alternative",
"alternatively",
"although",
"altogether",
"always",
"a.m.",
"amaze",
"amazed",
"amazing",
"ambition",
"ambulance",
"among",
"amount",
"amount to",
"amuse",
"amused",
"amusing",
"analyse",
"analysis",
"ancient",
"and",
"anger",
"angle",
"angrily",
"angry",
"animal",
"ankle",
"anniversary",
"announce",
"annoy",
"annoyed",
"annoying",
"annual",
"annually",
"another",
"answer",
"anti-",
"anticipate",
"anxiety",
"anxious",
"anxiously",
"any",
"anybody",
"anyone","anything",
"anyway",
"anywhere",
"apart",
"apart from",
"apartment",
"apologize",
"apparent",
"apparently",
"appeal",
"appear",
"appearance",
"apple",
"application",
"apply",
"appoint",
"appointment",
"appreciate",
"approach",
"appropriate",
"approval",
"approve",
"approving",
"approximate",
"approximately",
"April",
"area",
"argue",
"argument",
"arise",
"arm",
"armed",
"arms",
"army",
"around",
"arrange",
"arrangement",
"arrest",
"arrival",
"arrive",
"arrive at",
"arrow",
"art",
"article",
"artificial",
"artificially",
"artist",
"artistic",
"artistically",
"as",
"ashamed",
"aside",
"aside from",
"ask",
"asleep",
"aspect",
"assist",
"assistance",
"assistant",
"associate",
"associated",
"association",
"assume",
"assure",
"at",
"atmosphere",
"atom",
"attach",
"attached",
"attack",
"attempt",
"attempted",
"attend",
"attend to",
"attention",
"attitude",
"attorney",
"attract",
"attraction",
"attractive",
"audience",
"August",
"aunt",
"author",
"authority",
"automatic",
"automatically",
"autumn",
"available",
"average",
"avoid",
"awake",
"award",
"aware",
"away",
"awful",
"awfully",
"awkward",
"awkwardly",
"baby",
"back",
"background",
"back up",
"backward",
"backwards",
"bacteria",
"bad",
"badly",
"bad-tempered",
"bag",
"baggage",
"bake",
"balance",
"ball",
"ban",
"band",
"bandage",
"bank",
"bar",
"bargain",
"barrier",
"base",
"based",
"base on",
"basic",
"basically",
"basis",
"bath",
"bathroom",
"battery",
"battle",
"bay",
"be",
"beach",
"beak",
"bear",
"beard",
"beat",
"beat up",
"beautiful",
"beautifully",
"beauty",
"because",
"because of",
"become",
"bed",
"bedroom",
"beef",
"beer",
"before",
"begin",
"beginning",
"behalf",
"behave",
"behaviour",
"behind",
"be left over",
"belief",
"believe",
"believe in",
"bell",
"belong",
"belong to",
"below",
"belt","bend", "beneath", "benefit", "bent", "beside", "best", "bet", "better", "betting", "between", "beyond", "bicycle", "bid", "big", "bike", "bill", "billion", "bin", "biology", "bird", "birth", "birthday", "biscuit", "bit", "bite", "bitter", "bitterly", "black", "blade", "blame", "blank", "blind", "block", "blonde", "blood", "blow", "blow out", "blow up", "blue", "board", "boat", "body", "boil", "bomb", "bone", "book", "boot", "border", "bore", "bored", "boring", "born", "borrow", "boss", "both", "bother", "bottle", "bottom", "bound", "bowl", "box", "boy", "boyfriend", "brain", "branch", "brand", "brave", "bread", "break", "break down", "breakfast", "break in", "break into", "break off", "break out", "break up", "breast", "breath", "breathe", "breathe in", "breathe out", "breathing", "breed", "brick", "bridge", "brief", "briefly", "bright", "brightly", "brilliant", "bring", "bring back", "bring down", "bring forward", "bring out", "bring up", "broad", "broadcast", "broadly", "broken", "brother", "brown", "brush", "bubble", "budget", "build", "building", "build up", "bullet", "bunch", "burn", "burn down", "burnt", "burst", "burst into", "burst out", "bury", "bus", "bush", "business", "businessman", "busy", "but", "butter", "button", "buy", "buyer", "by", "bye", "cabinet", "cable", "cake", "calculate", "calculation", "call", "call back", "called", "call for", "call off", "call up", "calm", "calm down", "calmly", "camera", "camp", "campaign", "camping", "can", "can", "cancel", "cancer", "candidate", "candy", "cannot", "cap", "capable", "capacity", "capital", "captain", "capture", "car", "card", "cardboard", "care", "career", "care for", "careful", "carefully", "careless", "carelessly", "carpet", "carrot", "carry", "carry on", "carry out", "case", "cash", "cast", "castle", "cat", "catch", "catch up", "category", "cause", "CD", "cease", "ceiling", "celebrate", "celebration", "cell", "cell phone", "cent", "centimetre", "central", "centre", "century", "ceremony", "certain", "certainly", "certificate", "chain", "chair", "chairman", "chairwoman", "challenge", "chamber", "chance", "change", "change round", "channel", "chapter", "character", "characteristic", "charge", "charity", "chart"

]

const timeDisplay = document.querySelector('#seconds')

const wordInput = document.querySelector('#input') // input tag se 
const currWord = document.querySelector('#current-word')//from our side,jo new word hoga,udr dikhega 

const msg = document.querySelector('#msg')//from our side 
const scoreUpdate = document.querySelector('#scoreId')
const highScore = document.querySelector('#highScore')


function init(){
    timeDisplay.innerHTML= curLevel
    showWord(words)
    //match input
    wordInput.addEventListener('input', startMatchingWords )
    setInterval( countDown, 1000 );//har ek second baad yeh run ho
    setInterval( checkstatus, 50 );
}

//select the word randomly
function showWord(words){
    var randIndex = Math.floor(Math.random() * words.length );
    console.log({randIndex})

    //generate new word
    currWord.innerHTML = words[randIndex];//word from our side  to this id element pr bhejdo
}

//time decremnent
function countDown(){
    if(time > 0){
        time--;
    }else if( time === 0 ){
        isPlaying = false;
    }

    timeDisplay.innerHTML = time;

}

//show message Game Over
function checkstatus(){
    if( !isPlaying && time === 0 ){
        if( highScore.innerHTML < score ){
            highScore.innerHTML = score;
        }
        
        msg.innerHTML = " Game Over "
        // score = 0; not this because our rule is to restart the game type the word again shown on the screen
        score = -1;
        // wordInput.value ='';//BIG MISTAKE
        // wordInput.placeholder ='Warm up word ';
    }

    
}

function startMatchingWords( ){
    console.log(matchWords())
    if( matchWords() ){
        // wordInput.innerHTML =''; wrong
        wordInput.value ='';

        isPlaying = true;//true
        time = curLevel + 1; //time update
        
        showWord(words);//new word k liye call
        // scoreUpdate.innerHTML = score++;//why not working here here
        //1
        score++;
    }
    // else{ why else not working here
    //     score = 0
    // }
    //if score = -1 display zero
    if( score == -1 ){
        scoreUpdate.innerHTML = 0;
    }else{
        scoreUpdate.innerHTML = score;
    }
    //do score here
}
//wordInput is text input it will element so we write .valwu
function matchWords(){
   
    if( wordInput.value === currWord.innerHTML ){
        msg.innerHTML = "Correct ! "
        return true
    }else{
        msg.innerHTML='';
        return false;
    }
    //causing some problem this code
    // else{
    //     // scoreUpdate.innerHTML = score--;
    //     return false;
    // }
}