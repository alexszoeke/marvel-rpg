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
    // var characterStats = ""; << May or may not need this later

    //Characters should be objects
    var thor = {
        name: $(".thorname").html("Thor"),
        health: 125,
        attack: 20,
        hammer: 0,
        id: $("#thor")

    }
    console.log(thor);

    

        //functions can be properties as well and have attributes

    var blackPanther = {
        name: $(".panthername").html("Black Panther"),
        health: 150,
        attack: 20,
        claws: 0,
        id: $("#blackpanther")

        //functions can be properties as well and have attributes
    };

    var loki = {
        name: $(".lokiname").html("Loki"),
        health: $("#lokihealth").html(100),
        attack: 0,
        sneaky: 0,
        id: $("#loki")

        //functions can be properties as well and have attributes
    };

    var killmonger = {
        name: $(".killmongername").html("Killmonger"),
        health: $("#killmongerhealth").html(175),
        attack: 0,
        revenge: 0,
        id: $("#killmonger")

        //functions can be properties as well and have attributes
    };

    //choose characters and enemies
    $(".marvel").click(function () {
        //click on any character you wish to start with, this stores which character you chose
        selectedCharacter = $(this);
        //these variable provides the id and class names of the character you chose so that we can use it later
        selectedCharacterId = selectedCharacter.attr("id");
        //copies the html from our characters div, but filtering out the already selected character by concatenating our id name with the "#" and removing it from the code. Then rewriting this new code into our enemies div.
        $("#enemies").append($("#characters").clone().find("#" + selectedCharacterId).remove().end().html());
        //our selected character will be the only html in our characters div
        $("#characters").html(selectedCharacter); 


        $(".marvel").click(function() {
            //click on the enemy you wish to battle
            selectedEnemy = $(this);
            //this variable finds the id name of the enemy you chose so that we can use it later
            selectedEnemyId = selectedEnemy.attr("id");
            //copies the html from our enemies div, but filtering out the already selected character by concatenating our id name with the "#" and removing it from the code. Then rewriting this new code into our defender div
            $("#defender").append($("#enemies").clone().find("#" + selectedEnemyId).remove().end().html());
            //puts our selected enemy into the defender
            $("#defender").html(selectedEnemy);
            // $(selectedEnemy).switchClass("marvel", selectedEnemy);
        });

        //if our selected character is thor, we wanted to assign our selected character variable to his object and in order to make the properties accesable with a different variable we have to make a new object
        if (selectedCharacterId == "thor") {
            selectedCharacter === thor;
            for (var health in thor) selectedCharacter[health] = thor.attack;
            for (var attack in thor) selectedCharacter[attack] = thor.attack;
            console.log(selectedCharacter);
            console.log(thor);


        } else if (selectedCharacterId == "blackpanther") {
            selectedCharacter === blackPanther;
            for (var health in blackPanther) characterStats[health] = blackPanther.health;
        } else if (selectedCharacterId == "loki") {
            selectedCharacter === loki;
            for (var health in loki) characterStats[health] = loki.health;
        } else if (selectedCharacterId == "killmonger") {
            selectedCharacter === killmonger;
            for (var health in killmonger) characterStats[health] = killmonger.health;
        };

        if (selectedEnemyId == "thor") {
            selectedEnemy === thor;
            for (var health in thor) characterStats[health] = thor.health;
        } else if (selectedEnemyId == "blackpanther") {
            selectedEnemy === blackPanther;
            for (var health in blackPanther) characterStats[health] = blackPanther.health;
        } else if (selectedEnemyId == "loki") {
            selectedEnemy === loki;
            for (var health in loki) characterStats[health] = loki.health;
        } else if (selectedEnemyId == "killmonger") {
            selectedEnemy === killmonger;
            for (var health in killmonger) characterStats[health] = killmonger.health;
        };


    // var characterStats = Object.assign({}, selectedCharacter);
    // console.log(characterStats);
    // console.log(characterStats.health);
    // var enemyStats = Object.assign({}, selectedEnemy);
    // console.log(enemyStats);
    // console.log(enemyStats.health);

    $(".btn").click(function () {
        characterStats.health = ($(characterStats.health) - $(enemyStats.attack)); 
        console.log(characterStats.health);
    });    





    });




    

    













});



