//Characters to choose from will be listed at the top of the screen
//To start the game the user just needs to click any of the characters they wish to start off with
//Once they choose their starting characters, the remaining characters will now become a list of enemies to choose from to battle
//Once the player chooses their enemy, the enemy will move to the "defender" column
//The user will use the attack button to attack the defender
//Each character has a certain amount of health and attk points
//In order to win the game, the user must defeat all 3 enemies
//Once the game ends
//If the user wins there will be a winning message
//If the user loses there will be a losing message
//Both messages will have a restart button tagged along

$(document).ready(function () {

    var selectedCharacter = "";
    var selectedEnemy = "";
    var selectedCharacterId = "";
    var selectedEnemyId = "";
    var selectedCharacterHealth = "";
    var selectedEnemyHealth = "";

    //Characters should be objects
    var thor = {
        "name": $(".thorname").html("Thor"),
        "health": 125,
        "attack": 20,
        "hammer": 0,
        "id": $("#thor")

    }


    var blackPanther = {
        "name": $(".panthername").html("Black Panther"),
        "health": 150,
        "attack": 20,
        "claws": 0,
        "id": $("#blackpanther")

    };

    var loki = {
        "name": $(".lokiname").html("Loki"),
        "health": $("#lokihealth").html(100),
        "attack": 0,
        "sneaky": 0,
        "id": $("#loki")

    };

    var killmonger = {
        "name": $(".killmongername").html("Killmonger"),
        "health": $("#killmongerhealth").html(175),
        "attack": 20,
        "revenge": 0,
        "id": $("#killmonger")

    };

    //CHOOSE CHARACTERS AND ENEMIES

    $(".marvel").click(function () {
        //click on any character you wish to start with, this stores which character you chose
        selectedCharacter = $(this);
        //these variable provides the id and class names of the character you chose so that we can use it later
        selectedCharacterId = selectedCharacter.attr("id");
        //copies the html from our characters div, but filtering out the already selected character by concatenating our id name with the "#" and removing it from the code. Then rewriting this new code into our enemies div.
        $("#enemies").append($("#characters").clone().find("#" + selectedCharacterId).remove().end().html());
        //our selected character will be the only html in our characters div
        $("#characters").html(selectedCharacter);
        console.log(selectedCharacter);
        console.log(selectedCharacterId);


        $(".test").click(function () {
            //click on the enemy you wish to battle
            selectedEnemy = $(this);
            //this variable finds the id name of the enemy you chose so that we can use it later
            selectedEnemyId = selectedEnemy.attr("id");
            //copies the html from our enemies div, but filtering out the already selected character by concatenating our id name with the "#" and removing it from the code. Then rewriting this new code into our defender div
            $("#defender").append($("#enemies").clone().find("#" + selectedEnemyId).remove().end().html());
            //puts our selected enemy into the defender
            $("#defender").html(selectedEnemy);
            // $(selectedEnemy).switchClass("marvel", selectedEnemy);
            console.log(selectedEnemy);
            console.log(selectedEnemyId);



            //CHARACTER IF STATEMENTS

            //if our selected character is thor, we wanted to assign our selected character variable to his object and in order to make the properties accesable with a different variable we have to make a new object
            if (selectedCharacterId == "thor") {
                selectedCharacter === thor;
                for (var health in thor) selectedCharacter[health] = thor[health];
                for (var attack in thor) selectedCharacter[attack] = thor[attack];


                //if our selected character is black panther, we wanted to assign our selected character variable to his object and in order to make the properties accesable with a different variable we have to make a new object
            } else if (selectedCharacterId == "blackpanther") {
                selectedCharacter === blackPanther;
                for (var health in blackPanther) selectedCharacter[health] = blackPanther.health;
                for (var attack in blackPanther) selectedCharacter[attack] = blackPanther.attack;

                //if our selected character is loki, we wanted to assign our selected character variable to his object and in order to make the properties accesable with a different variable we have to make a new object
            } else if (selectedCharacterId == "loki") {
                selectedCharacter === loki;
                for (var health in loki) selectedCharacter[health] = loki[health];
                for (var attack in loki) selectedCharacter[attack] = loki[attack];

                //if our selected character is killmonger we wanted to assign our selected character variable to his object and in order to make the properties accesable with a different variable we have to make a new object

            } else if (selectedCharacterId == "killmonger") {
                selectedCharacter === killmonger;
                for (var health in killmonger) selectedCharacter[health] = killmonger[health];
                for (var attack in killmonger) selectedCharacter[attack] = killmonger[attack];
            };


            //ENEMY IF STATEMENTS

            //same for Thor as above, but only if he is chosen as an enemy
            if (selectedEnemyId == "thor") {
                selectedEnemy === thor;
                for (var health in thor) selectedEnemy[health] = thor[health];
                for (var attack in thor) selectedEnemy[attack] = thor[attack];

                //same for black panther as above, but only if he is chosen as an enemy
            } else if (selectedEnemyId == "blackpanther") {
                selectedEnemy === blackPanther;
                for (var health in blackPanther) selectedEnemy[health] = blackPanther[health];
                for (var attack in blackPanther) selectedEnemy[attack] = blackPanther[attack];
                console.log(blackPanther[attack]);

                //same for loki as above, but only if he is chosen as an enemy
            } else if (selectedEnemyId == "loki") {
                selectedEnemy === loki;
                for (var health in loki) selectedEnemy[health] = loki[health];
                for (var attack in loki) selectedEnemy[attack] = loki[attack];

                //same for killmonger as above, but only if he is chosen as an enemy
            } else if (selectedEnemyId == "killmonger") {
                selectedEnemy === killmonger;
                console.log(selectedEnemy);
                for (var health in killmonger) selectedEnemy[health] = killmonger[health];
                for (var attack in killmonger) selectedEnemy[attack] = killmonger[attack];
            };

            console.log(selectedCharacter);
            console.log(selectedEnemy);
            


            $(".btn").click(function () {
                selectedCharacterHealth =  selectedCharacter[health] - selectedEnemy[attack];
                $("#" + selectedCharacterId + "health").html(selectedCharacterHealth);
            });
        
        console.log(selectedCharacterHealth);
        console.log(selectedCharacter[health]);
        console.log(selectedEnemy[attack]);

        });


    });




















});



