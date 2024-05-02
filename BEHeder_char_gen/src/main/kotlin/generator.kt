import kotlin.random.Random

// The abilities are listed in priority order of what I consider important after a class's top two preferences.
// If possible, in the future, I may recode this to allow the user to assign scores to abilities as desired.
enum class Abilities {
    CONSTITUTION, WISDOM, DEXTERITY, INTELLIGENCE, STRENGTH, CHARISMA
}

// Very limited options. With more time, I hope to add more to actually make this generator useful.
val Names = setOf("Samuele Argall","Ada Stern","Lital Wright","Eir Goldhirsch","Gracjan Fodor")
val Races = setOf("Human","Elf","Dwarf","Dragonborn","Halfling")
val Backgrounds = setOf("Acolyte","Soldier","Charlatan","Sage")
val Classes = mapOf("Fighter" to Pair(Abilities.STRENGTH, Abilities.CONSTITUTION),
    "Rogue" to Pair(Abilities.DEXTERITY, Abilities.CHARISMA),
    "Cleric" to Pair(Abilities.WISDOM, Abilities.CONSTITUTION),
    "Wizard" to Pair(Abilities.INTELLIGENCE, Abilities.CONSTITUTION))

class Character(private val name:String, private val race:String,
                private val charClass:String, private val background:String) {
    private val abilityScores = mutableMapOf("str" to 0, "dex" to 0, "con" to 0, "int" to 0, "wis" to 0, "cha" to 0)

    // This method simulates rolling 4d6 and dropping the lowest result to generate an ability score.
    private fun rollScore():Int {
        val diceRolls = mutableListOf<Int>()
        for (number in 1..4) {
            diceRolls.add(Random.nextInt(1,7))
        }
        diceRolls.remove(diceRolls.min())
        return diceRolls.reduce{acc, roll -> acc + roll}
    }

    // This method updates the input ability score, then removes that score from the unassigned scores.
    private fun assignScore(ability:Abilities?, scores:MutableList<Int>) {
        when (ability) {
            Abilities.STRENGTH -> {
                if (abilityScores["str"] == 0) {
                    abilityScores["str"] = scores.max()
                    scores.remove(scores.max())
                }
            }
            Abilities.DEXTERITY -> {
                if (abilityScores["dex"] == 0) {
                    abilityScores["dex"] = scores.max()
                    scores.remove(scores.max())
                }
            }
            Abilities.CONSTITUTION -> {
                if (abilityScores["con"] == 0) {
                    abilityScores["con"] = scores.max()
                    scores.remove(scores.max())
                }
            }
            Abilities.INTELLIGENCE -> {
                if (abilityScores["int"] == 0) {
                    abilityScores["int"] = scores.max()
                    scores.remove(scores.max())
                }
            }
            Abilities.WISDOM -> {
                if (abilityScores["wis"] == 0) {
                    abilityScores["wis"] = scores.max()
                    scores.remove(scores.max())
                }
            }
            Abilities.CHARISMA -> {
                if (abilityScores["cha"] == 0) {
                    abilityScores["cha"] = scores.max()
                    scores.remove(scores.max())
                }
            }
            null -> println("Unexpected error in assignScore()!!!")
        }
    }

    fun assignScores() {
        // First, generate a list of 6 scores.
        var scores = mutableListOf<Int>()
        for (number in 1..6) {
            scores.add(rollScore())
        }

        // Second, assign the race's ability score bonuses.
        if (race == "Human") {
            scores = scores.map { it + 1 }.toMutableList()
        }
        else {
            scores.sortDescending()
            scores[0] += 2
            scores[1] += 1
        }

        // Third, assign the top two scores to the character's class's preferred abilities.
        val priorityOne = Classes[charClass]?.first
        val priorityTwo = Classes[charClass]?.second
        assignScore(priorityOne, scores)
        assignScore(priorityTwo, scores)

        // Finally, assign the remaining scores to the remaining abilities.
        // The Abilities enumeration is already in post-class priority order.
        for (ability in Abilities.entries) {
            assignScore(ability, scores)
        }
    }

    override fun toString(): String {
        return "Name: ${this.name}\n" +
                "Race: ${this.race}\n" +
                "Class: ${this.charClass}\n" +
                "Background: ${this.background}\n" +
                "Ability Scores: \n" +
                "~Strength: ${this.abilityScores["str"]}\n" +
                "~Dexterity: ${this.abilityScores["dex"]}\n" +
                "~Constitution: ${this.abilityScores["con"]}\n" +
                "~Intelligence: ${this.abilityScores["int"]}\n" +
                "~Wisdom: ${this.abilityScores["wis"]}\n" +
                "~Charisma: ${this.abilityScores["cha"]}"
    }
}

