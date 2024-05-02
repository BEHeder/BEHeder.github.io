fun main(args: Array<String>) {
    println("Welcome, player, to this limited D&D character generator!\n" +
            "You may choose or randomly roll on each of the following:\n" +
            "~Name, Race, Class, and Background\n" +
            "The generator will then roll 6 scores (4d6, drop the lowest) and assign them to the abilities.\n" +
            "Humans get +1 to every ability score. Other races get +2 to one score and +1 to another score.\n" +
            "This generator will assign the +2/+1 bonuses to the class's preferred ability scores." +
            "Due to time constraints, the allowed choices are very limited at this time.\n")

    println("Enter a name or 'roll'. The name must be 20 characters or less.")
    var name = readln()
    while (name.length > 20 || name.isEmpty()) {
        println("\nEnter a name or 'roll'. The name must be 20 characters or less.")
        name = readln()
    }
    if (name == "roll") {
        name = Names.random()
    }

    println("\nEnter one of the following races or 'roll'.\n" +
            "~Human\n" +
            "~Elf\n" +
            "~Dwarf\n" +
            "~Dragonborn\n" +
            "~Halfling")
    var race = readln()
    while (race != "roll" && !Races.contains(race)) {
        println("\nEnter one of the following races or 'roll'.\n" +
                "~Human\n" +
                "~Elf\n" +
                "~Dwarf\n" +
                "~Dragonborn\n" +
                "~Halfling")
        race = readln()
    }
    if (race == "roll") {
        race = Races.random()
    }

    println("\nEnter one of the following classes or 'roll'.\n" +
            "~Fighter\n" +
            "~Rogue\n" +
            "~Cleric\n" +
            "~Wizard")
    var charClass = readln()
    while (charClass != "roll" && !Classes.contains(charClass)) {
        println("\nEnter one of the following classes or 'roll'.\n" +
                "~Fighter\n" +
                "~Rogue\n" +
                "~Cleric\n" +
                "~Wizard")
        charClass = readln()
    }
    if (charClass == "roll") {
        charClass = Classes.keys.random()
    }

    println("\nEnter one of the following backgrounds or 'roll'.\n" +
            "~Acolyte\n" +
            "~Soldier\n" +
            "~Charlatan\n" +
            "~Sage")
    var background = readln()
    while (background != "roll" && !Backgrounds.contains(background)) {
        println("\nEnter one of the following backgrounds or 'roll'.\n" +
                "~Acolyte\n" +
                "~Soldier\n" +
                "~Charlatan\n" +
                "~Sage")
        background = readln()
    }
    if (background == "roll") {
        background = Backgrounds.random()
    }

    val newCharacter = Character(name, race, charClass, background)
    newCharacter.assignScores()
    println("\n" + newCharacter)
}