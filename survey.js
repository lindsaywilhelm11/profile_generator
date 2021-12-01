const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :)\n', (answer1) => {
    console.log(`Thank you for your valuable feedback: ${answer1}`);
    rl.question('What\'s an activity you like doing?\n', (answer2) => {
        console.log(`Thank you for your valuable feedback: ${answer2}`);
        rl.question('What do you listen to while doing that?\n', (answer3) => {
            console.log(`Thank you for your valuable feedback: ${answer3}`);
            rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)\n', (answer4) => {
                console.log(`Thank you for your valuable feedback: ${answer4}`);
                rl.question('What\'s your favourite thing to eat for that meal?\n', (answer5) => {
                    console.log(`Thank you for your valuable feedback: ${answer5}`);
                    rl.question('Which sport is your absolute favourite?\n', (answer6) => {
                        console.log(`Thank you for your valuable feedback: ${answer6}`);
                        rl.question('What is your superpower? In a few words, tell us what you are amazing at!\n', (answer7) => {
                            console.log(`Thank you for your valuable feedback: ${answer7}`);
                            rl.close();
                            console.log(`${answer1} likes ${answer2} while listening to ${answer3}.\n ${answer4} is their favourite meal and ${answer5} is their favourite thing to eat.\n They like to play ${answer6} and their super power is ${answer7}`)
                        });
                    });
                });
            });
        });
    });
});  

  
 


    

 





    




