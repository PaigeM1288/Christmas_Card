//songs
let jBRock, hollyJolly, babyCold, doThey, warOver, lastChr, scrooge, rockAround, runRudolph, santaBaby, mrGrinch, weWish;
//snippets
let hollyJollySnip, babyColdSnip, doTheySnip, warOverSnip, lastChrSnip, scroogeSnip, rockAroundSnip, runRudolphSnip, santaBabySnip, mrGrinchSnip;
//effects
let whoosh, bells;
//font
let myFont;
//images
let chrVillage, thumbDown, thumbUp;
let showPosResultImage = false;
let showNegResultImage = false;
//buttons
let playBut, exBut, mainMenu, playSong, clickMe, nextBut, backBut;
//Answer Box and answers
let ansBox;
let correctAnsOne = 'last christmas';
let correctAnsTwo = ['a holly jolly christmas', 'holly jolly christmas'];
let correctAnsThree = [ "baby, it's cold outside", "baby it's cold outside", 'baby its cold outside'];
let correctAnsFour = ['rockin around the christmas tree', 'rocking around the christmas tree'];
let correctAnsFive = ["do they know it's christmas", 'do they know its christmas'];
let correctAnsSix = 'santa baby';
let correctAnsSeven = ["you're a mean one mr grinch", 'youre a mean one mr grinch'];
let correctAnsEight = ['run rudolph run', 'run run rudolph'];
let correctAnsNine = ['happy christmas', 'the war is over', 'war is over', 'happy christmas (the war is over)'];
let correctAnsTen = 'scrooge';

function preload() {
//songs for quiz
jBRock = loadSound("assets/Jingle Bell Rock - Bobby Helms.wav");
hollyJolly = loadSound("assets/A Holly Jolly Christmas - Burl Ives.wav");
babyCold = loadSound("assets/Baby, It's Cold Outside - Dean Martin.wav");
doThey = loadSound("assets/Do They Know It's Christmas - Band Aid.wav");
warOver = loadSound("assets/Happy Christmas (The War is Over) - John Lennon.wav");
lastChr = loadSound("assets/Last Christmas - Wham.wav");
scrooge = loadSound("assets/Muppets Christmas Carol - Scrooge.wav");
rockAround = loadSound("assets/Rockin Around the Christmas Tree - Brenda Lee.wav");
runRudolph = loadSound("assets/Run Rudolph Run - Chuck Berry.wav");
santaBaby = loadSound("assets/Santa Baby - Eartha Kitt.wav");
mrGrinch = loadSound("assets/You're A Mean One Mr Grinch.wav");
weWish = loadSound("assets/We Wish You a Merry Christmas - The Muppets and John Denver.wav");

//song snippets
lastChrSnip = loadSound("assets/Last Christmas - 18sec.mp3");
mrGrinchSnip = loadSound("assets/You're A Mean One 8 sec .mp3");
hollyJollySnip = loadSound("assets/A Holly Jolly Christmas 14 sec 01.mp3");
babyColdSnip = loadSound("assets/Baby, It's Cold 10sec 01.mp3");
doTheySnip = loadSound("assets/Do They Know 23sec 01.mp3");
warOverSnip = loadSound("assets/Happy Christmas (The War is Over) 17 sec 01.mp3");
scroogeSnip = loadSound("assets/Scrooge 23sec.mp3");
rockAroundSnip = loadSound("assets/Rockin Around 7 secs_01.mp3");
runRudolphSnip = loadSound("assets/Run Rudolph Run 13 sec01.mp3");
santaBabySnip = loadSound("assets/Santa Baby 13 sec 01.mp3");

//effects
whoosh = loadSound("assets/christmas-whoosh_3-264376.mp3");
bells = loadSound("assets/sam-mountain-audio-christmas-bells-264890.mp3")

//font
myFont = loadFont("assets/MountainsofChristmas-Bold.ttf");

//images
chrVillage = loadImage("assets/Christmas Village_page-0001.jpg");
thumbUp = loadImage("assets/harold thumb up.jpg");
thumbDown = loadImage("assets/man thumb down.jpg");

}

function setup(){
    createCanvas(800, 800);
    imageMode(CENTER);
    playBut = createButton("Play");
    const mainContainer = select("main");
    playBut.parent(mainContainer);
    playBut.position(250, 750);
    playBut.size(100);
    playBut.mouseClicked(playClicked);              //Opens first screen

    exBut = createButton("Exit");
    exBut.parent(mainContainer);
    exBut.position(450, 750);
    exBut.size(100);
    exBut.mouseClicked(exitClicked);               //exits program

    clickMe = createButton ("Click Me");
    clickMe.parent(mainContainer);
    clickMe.style('background-color', 'green');
    clickMe.style('color', 'red');
    clickMe.position (365, 400);
    clickMe.mouseClicked(clickMeCalled);

    ansBox = createInput();
    ansBox.hide();
}

function draw(){
    image(chrVillage, width/2, height/2);
    textFont(myFont);
    textAlign(CENTER, TOP);
    fill(255, 221, 31);
    textSize(80);
    text('Merry Christmas!', 400, 20);

    textFont(myFont);
    textAlign(CENTER);
    textSize(35);
    text('Can you guess the names of all 10 Christmas Songs?', 400, 120);

    textSize(25);
    text('How to play: Listen to the snippets, type your answer and press ENTER to submit', 400, 180)
    text('Guess while the songs play, play them as much as you need', 400, 210);
    text('If you get stuck, press Main Menu', 400, 240);
    text('The songs must be playing in order to submit as well as to click next and back', 400, 270)

    if (showPosResultImage) {
            image(thumbUp, 400, 600, width/3, height/4);
        } else if (showNegResultImage){
            image(thumbDown, 400, 600, width/4, height/4);
        }
    
}
/**
 * Button used to play the title screen music
 * Toggles playback of jingle bell
 */
function clickMeCalled(){
    if (!jBRock.isPlaying()) {
    clickMe.style('background-color', 'red');
    clickMe.style('color', 'gold')
    clickMe.html("Pause");
    jBRock.setVolume(0.2);
    jBRock.play();
    } else {
    clickMe.style('background-color', 'gold');
    clickMe.style('color', 'green');
    clickMe.html("Play");
    jBRock.pause();
    }
}
/**
 * Closes game window
 */
function exitClicked() {
    window.close();
}

/**
 * Toggles jingle bell rock to pause
 * Toggles 'whoosh' to play
 * calls screen one of the card
 */
function playClicked(){
    jBRock.pause();
    whoosh.setVolume(0.2);
    whoosh.play();
    screenOne();
   
}

function screenOne() {
    playBut.hide()
    exBut.hide();
    clickMe.hide();
    ansBox.position(420, 550);
        if (ansBox.hide()) {
            ansBox.show();
        }



    mainMenu = createButton("Main Menu");
    const mainContainer = select("main");
    mainMenu.parent(mainContainer);
    mainMenu.position(720, 0);
    mainMenu.mouseClicked(menuClicked);
        /**
         * pauses all songs
         * returns to the title screen of the card
         * hides buttons that weren't originally on the title screen
         * hides answer box
         * changes position of exit button in case user is coming from the end screen
         * hides positive and negative result images
         */
        function menuClicked() {
            showNegResultImage = false;
            showPosResultImage = false;
            playBut.show();
            exBut.show();
            exBut.position(450, 750);
            mainMenu.hide();
            clickMe.show();
            playSong.hide();
            ansBox.hide();
            lastChrSnip.pause();
            lastChr.pause();
            nextBut.hide();
            backBut.hide();
            hollyJolly.pause();
            hollyJollySnip.pause();
            weWish.stop();
            babyCold.pause();
            babyColdSnip.pause();
            doThey.pause();
            doTheySnip.pause();
            warOver.pause();
            warOverSnip.pause();
            scrooge.pause();
            scroogeSnip.pause();
            rockAround.pause();
            rockAroundSnip.pause();
            runRudolph.pause();
            runRudolphSnip.pause();
            santaBaby.pause();
            santaBabySnip.pause();
            mrGrinch.pause();
            mrGrinchSnip.pause();
            clickMeEnd.hide();
            
    
    }

    playSong = createButton("Play Song");
    playSong.parent(mainContainer);
    playSong.position(365, 400);
    playSong.mouseClicked(playSongOne);

    nextBut = createButton('Next');
    nextBut.parent(mainContainer);
    nextBut.position (660, 0);
    nextBut.mouseClicked(nextClicked);

    backBut = createButton('Back');
    backBut.parent(mainContainer);
    backBut.position(0, 0)
    backBut.mouseClicked(backClicked);
    backBut.hide();

    /**
     * function to play 'last christmas'
     */
        function playSongOne() {
            if (!lastChr.isPlaying()){
            lastChrSnip.play();
            }
            if (lastChrSnip.isPlaying()){
                lastChrSnip.stop();
                lastChrSnip.play();
            }
        }
    
    }

    /**
     * key function to submit all user answers
     */
    function keyPressed() {
            if (keyCode === ENTER){
                if (lastChrSnip.isPlaying()){
                    checkAnswerOne();
                } else if (hollyJollySnip.isPlaying()){
                    checkAnswerTwo();
                } else if (babyColdSnip.isPlaying()){
                    checkAnswerThree();
                } else if (rockAroundSnip.isPlaying()){
                    checkAnswerFour();
                } else if (doTheySnip.isPlaying()){
                    checkAnswerFive();
                } else if (santaBabySnip.isPlaying()){
                    checkAnswerSix();
                } else if (mrGrinchSnip.isPlaying()){
                    checkAnswerSeven();
                } else if (runRudolphSnip.isPlaying()){
                    checkAnswerEight();
                } else if (warOverSnip.isPlaying()){
                    checkAnswerNine();
                } else if (scroogeSnip.isPlaying()){
                    checkAnswerTen();
                }
                ansBox.value("");
            }
        }

        /**
         * function to check if user answer on screen one is correct or incorrect
         */
    function checkAnswerOne(){
        let userAnswer = ansBox.value().trim().toLowerCase();
        let correctAnswerOne = correctAnsOne.toLowerCase();
        if (userAnswer === correctAnswerOne) {
            if (lastChrSnip.isPlaying()){
            showPosResultImage = true;
            showNegResultImage = false;
            lastChr.play();
            lastChrSnip.pause();
            }
        } else {
            playSong.show();
            lastChr.pause();
            lastChrSnip.pause();
            showNegResultImage = true;
            showPosResultImage = false;
            
        }
    }
/**
 * function to use the next button which allows user to click through the screens as long as audio local to each screen is playing
 */
    function nextClicked() {
        showNegResultImage = false;
        showPosResultImage = false;
        playSong.hide();
        ansBox.value("");
        if (lastChr.isPlaying()|| lastChrSnip.isPlaying()){
            lastChr.stop();
            lastChrSnip.stop();
            screenTwo();
            backBut.show();
        } else if (hollyJolly.isPlaying()|| hollyJollySnip.isPlaying()){
            hollyJolly.stop();
            hollyJollySnip.stop();
            screenThree();
        } else if (babyCold.isPlaying()|| babyColdSnip.isPlaying()){
            babyCold.stop();
            babyColdSnip.stop();
            screenFour();
        } else if (rockAround.isPlaying()|| rockAroundSnip.isPlaying()){
            rockAround.stop();
            rockAroundSnip.stop();
            screenFive();
        } else if (doThey.isPlaying()|| doTheySnip.isPlaying()){
            doThey.stop();
            doTheySnip.stop();
            screenSix();
        } else if (santaBaby.isPlaying()|| santaBabySnip.isPlaying()){
            santaBaby.stop();
            santaBabySnip.stop();
            screenSeven();
        } else if (mrGrinch.isPlaying()|| mrGrinchSnip.isPlaying()){
            mrGrinch.stop();
            mrGrinchSnip.stop();
            screenEight();
        } else if (runRudolph.isPlaying()|| runRudolphSnip.isPlaying()){
            runRudolph.stop();
            runRudolphSnip.stop();
            screenNine();
        } else if (warOver.isPlaying()|| warOverSnip.isPlaying()){
            warOver.stop();
            warOverSnip.stop();
            ScreenTen();
        } else if (scrooge.isPlaying()|| scroogeSnip.isPlaying()){
            scrooge.stop();
            scroogeSnip.stop();
            endScreen();
            backBut.hide();
        }
    }

    /**
     * Same as nextClicked function but moves back between screens
     * back button is not shown on either the first or final screen
     */
    function backClicked(){
        showNegResultImage = false;
        showPosResultImage = false;
        playSong.hide();
        ansBox.value("");
        
        if (hollyJolly.isPlaying()|| hollyJollySnip.isPlaying()){
            hollyJolly.stop();
            hollyJollySnip.stop();
            backBut.hide();
            screenOne();
        } else if (babyCold.isPlaying()|| babyColdSnip.isPlaying()){
            babyCold.stop();
            babyColdSnip.stop();
            screenTwo();
        } else if (rockAround.isPlaying()|| rockAroundSnip.isPlaying()){
            rockAround.stop();
            rockAroundSnip.stop();
            screenThree();
        } else if (doThey.isPlaying()|| doTheySnip.isPlaying()){
            doThey.stop();
            doTheySnip.stop();
            screenFour();
        } else if (santaBaby.isPlaying()|| santaBabySnip.isPlaying()){
            santaBaby.stop();
            santaBabySnip.stop();
            screenFive();
        }else if (mrGrinch.isPlaying()|| mrGrinchSnip.isPlaying()){
            mrGrinch.stop();
            mrGrinchSnip.stop();
            screenSix();
        } else if (runRudolph.isPlaying()|| runRudolphSnip.isPlaying()){
            runRudolph.stop();
            runRudolphSnip.stop();
            screenSeven();
        } else if (warOver.isPlaying()|| warOverSnip.isPlaying()){
            warOver.stop();
            warOverSnip.stop();
            screenEight();
        } else if (scrooge.isPlaying()|| scroogeSnip.isPlaying()){
            scrooge.stop();
            scroogeSnip.stop();
            screenNine();
        }
    }
    /**
     * function screenTwo: calls second screen of card, functions below with same name but different screen number perform same function
     * function playSongTwo: play the song local to screenTwo, functions below with same name but different song numbers perform same function
     * function checkAnswerTwo: to check if user answer on screen two is correct or incorrect, functions below with same name yet different numbers perform same action
     */
    function screenTwo(){
        playSong = createButton("Play Song");
        const mainContainer = select("main");
        playSong.parent(mainContainer);
        playSong.position(365, 400);
        playSong.mouseClicked(playSongTwo);
    }
/**
 * if hollyJolly is not playing, play the snippet
 * play song button stays on screen, to keep the song from playing over itself the second if statement is required as it stops and starts the song
 */
    function playSongTwo() {
        if (!hollyJolly.isPlaying()){
            hollyJollySnip.play();
        }
        if (hollyJollySnip.isPlaying()){
            hollyJollySnip.stop();
            hollyJollySnip.play();
        }
    }

        function checkAnswerTwo(){
            let userAnswer = ansBox.value().trim().toLowerCase();
            let correctAnswerTwo = correctAnsTwo;
            if (correctAnswerTwo.includes(userAnswer)) {
                if (hollyJollySnip.isPlaying()){
                showPosResultImage = true;
                showNegResultImage = false;
                hollyJolly.play();
                hollyJollySnip.pause();
                }
            } else {
                playSong.show();
                hollyJolly.pause();
                hollyJollySnip.pause();
                showNegResultImage = true;
                showPosResultImage = false;
                
            }
        }

        function screenThree(){
            playSong = createButton("Play Song");
            const mainContainer = select("main");
            playSong.parent(mainContainer);
            playSong.position(365, 400);
            playSong.mouseClicked(playSongThree);
        }

        function playSongThree(){
            if (!babyCold.isPlaying()){
                babyColdSnip.play();
            }
            if (babyColdSnip.isPlaying()){
                babyColdSnip.stop();
                babyColdSnip.play();
            }
        }

        function checkAnswerThree(){
            let userAnswer = ansBox.value().trim().toLowerCase();
            let correctAnswerThree = correctAnsThree;
            if (correctAnswerThree.includes(userAnswer)) {
                if (babyColdSnip.isPlaying()){
                showPosResultImage = true;
                showNegResultImage = false;
                babyCold.play();
                babyColdSnip.pause();
                }
            } else {
                playSong.show();
                babyCold.pause();
                babyColdSnip.pause();
                showNegResultImage = true;
                showPosResultImage = false;
            }
        }

         function screenFour(){
            playSong = createButton("Play Song");
            const mainContainer = select("main");
            playSong.parent(mainContainer);
            playSong.position(365, 400);
            playSong.mouseClicked(playSongFour);
        }

        function playSongFour(){
            if (!rockAround.isPlaying()){
                rockAroundSnip.play();
            }
            if (rockAroundSnip.isPlaying()){
                rockAroundSnip.stop();
                rockAroundSnip.play();
            }
        }

        function checkAnswerFour(){
            let userAnswer = ansBox.value().trim().toLowerCase();
            let correctAnswerFour = correctAnsFour;
            if (correctAnswerFour.includes(userAnswer)) {
                if (rockAroundSnip.isPlaying()){
                showPosResultImage = true;
                showNegResultImage = false;
                rockAround.play();
                rockAroundSnip.pause();
                }
            } else {
                playSong.show();
                rockAround.pause();
                rockAroundSnip.pause();
                showNegResultImage = true;
                showPosResultImage = false;
            }
        }

        function screenFive(){
            playSong = createButton("Play Song");
            const mainContainer = select("main");
            playSong.parent(mainContainer);
            playSong.position(365, 400);
            playSong.mouseClicked(playSongFive);
        }

        function playSongFive(){
            if (!doThey.isPlaying()){
                doTheySnip.play();
            }
            if (doTheySnip.isPlaying()){
                doTheySnip.stop();
                doTheySnip.play();
            }
        }

        function checkAnswerFive(){
            let userAnswer = ansBox.value().trim().toLowerCase();
            let correctAnswerFive = correctAnsFive;
            if (correctAnswerFive.includes(userAnswer)) {
                if (doTheySnip.isPlaying()){
                showPosResultImage = true;
                showNegResultImage = false;
                doThey.play();
                doTheySnip.pause();
                }
            } else {
                playSong.show();
                doThey.pause();
                doTheySnip.pause();
                showNegResultImage = true;
                showPosResultImage = false;
            }
        }

        function screenSix(){
            playSong = createButton("Play Song");
            const mainContainer = select("main");
            playSong.parent(mainContainer);
            playSong.position(365, 400);
            playSong.mouseClicked(playSongSix);
        }

        function playSongSix(){
            if (!santaBaby.isPlaying()){
                santaBabySnip.play();
            }
            if (santaBabySnip.isPlaying()){
                santaBabySnip.stop();
                santaBabySnip.play();
            }
        }

        function checkAnswerSix(){
        let userAnswer = ansBox.value().trim().toLowerCase();
        let correctAnswerSix = correctAnsSix.toLowerCase();
        if (userAnswer === correctAnswerSix) {
            if (santaBabySnip.isPlaying()){
            showPosResultImage = true;
            showNegResultImage = false;
            santaBaby.play();
            santaBabySnip.pause();
            }
        } else {
            playSong.show();
            santaBaby.pause();
            santaBabySnip.pause();
            showNegResultImage = true;
            showPosResultImage = false; 
        }
    }

        function screenSeven(){
            playSong = createButton("Play Song");
            const mainContainer = select("main");
            playSong.parent(mainContainer);
            playSong.position(365, 400);
            playSong.mouseClicked(playSongSeven);
        }

        function playSongSeven(){
            if (!mrGrinch.isPlaying()){
                mrGrinchSnip.play();
            }
            if (mrGrinchSnip.isPlaying()){
                mrGrinchSnip.stop();
                mrGrinchSnip.play();
            }
        }

        function checkAnswerSeven(){
            let userAnswer = ansBox.value().trim().toLowerCase();
            let correctAnswerSeven = correctAnsSeven;
            if (correctAnswerSeven.includes(userAnswer)) {
                if (mrGrinchSnip.isPlaying()){
                showPosResultImage = true;
                showNegResultImage = false;
                mrGrinch.play();
                mrGrinchSnip.pause();
                }
            } else {
                playSong.show();
                mrGrinch.pause();
                mrGrinchSnip.pause();
                showNegResultImage = true;
                showPosResultImage = false;
            }
        }

        function screenEight(){
            playSong = createButton("Play Song");
            const mainContainer = select("main");
            playSong.parent(mainContainer);
            playSong.position(365, 400);
            playSong.mouseClicked(playSongEight);
        }

        function playSongEight(){
            if (!runRudolph.isPlaying()){
                runRudolphSnip.play();
            }
            if (runRudolphSnip.isPlaying()){
                runRudolphSnip.stop();
                runRudolphSnip.play();
            }
        }

        function checkAnswerEight(){
            let userAnswer = ansBox.value().trim().toLowerCase();
            let correctAnswerEight = correctAnsEight;
            if (correctAnswerEight.includes(userAnswer)) {
                if (runRudolphSnip.isPlaying()){
                showPosResultImage = true;
                showNegResultImage = false;
                runRudolph.play();
                runRudolphSnip.pause();
                }
            } else {
                playSong.show();
                runRudolph.pause();
                runRudolphSnip.pause();
                showNegResultImage = true;
                showPosResultImage = false;
            }
        }

        function screenNine(){
            playSong = createButton("Play Song");
            const mainContainer = select("main");
            playSong.parent(mainContainer);
            playSong.position(365, 400);
            playSong.mouseClicked(playSongNine);
        }

        function playSongNine(){
            if (!warOver.isPlaying()){
                warOverSnip.play();
            }
            if (warOverSnip.isPlaying()){
                warOverSnip.stop();
                warOverSnip.play();
            }
        }

        function checkAnswerNine(){
            let userAnswer = ansBox.value().trim().toLowerCase();
            let correctAnswerNine = correctAnsNine;
            if (correctAnswerNine.includes(userAnswer)) {
                if (warOverSnip.isPlaying()){
                showPosResultImage = true;
                showNegResultImage = false;
                warOver.play();
                warOverSnip.pause();
                }
            } else {
                playSong.show();
                warOver.pause();
                warOverSnip.pause();
                showNegResultImage = true;
                showPosResultImage = false;
            }
        }

        function ScreenTen(){
            playSong = createButton("Play Song");
            const mainContainer = select("main");
            playSong.parent(mainContainer);
            playSong.position(365, 400);
            playSong.mouseClicked(playSongTen);
        }
        
        function playSongTen(){
            if (!scrooge.isPlaying()){
                scroogeSnip.play();
            }
            if (scroogeSnip.isPlaying()){
                scroogeSnip.stop();
                scroogeSnip.play();
            }
        }

        function checkAnswerTen(){
        let userAnswer = ansBox.value().trim().toLowerCase();
        let correctAnswerTen = correctAnsTen.toLowerCase();
        if (userAnswer === correctAnswerTen) {
            if (scroogeSnip.isPlaying()){
            showPosResultImage = true;
            showNegResultImage = false;
            scrooge.play();
            scroogeSnip.pause();
            }
        } else {
            playSong.show();
            scrooge.pause();
            scroogeSnip.pause();
            showNegResultImage = true;
            showPosResultImage = false; 
        }
    }
/**
 * hides answer box
 * changes position of exit button to bottom middle of screen
 * creates new variation of click me button which plays we wish you a merry christmas
 * next button is hidden
 */
    function endScreen(){
        ansBox.hide();
        exBut.position (350, 750);
        exBut.show();
        nextBut.hide();

        clickMeEnd = createButton ("Thanks for playing! Click Me");
        const mainContainer = select("main");
        clickMeEnd.parent(mainContainer);
        clickMeEnd.position (300, 400);
        clickMeEnd.style('background-color', 'gold');
        clickMeEnd.style('color', 'red');
        clickMeEnd.size(200, 100);
        clickMeEnd.mouseClicked(clickMeCalledEnd);

        function clickMeCalledEnd(){
            if (!weWish.isPlaying()) {
                clickMeEnd.html("Merry Christmas!");
                clickMeEnd.style('background-color', 'green');
                clickMeEnd.style('color', 'gold');
                weWish.setVolume(0.7);
                weWish.play();
            } else {
                clickMeEnd.style('background-color', 'red');
                clickMeEnd.style('color', 'gold');
                clickMeEnd.html("Happy Holidays!");
            }
        }
    }