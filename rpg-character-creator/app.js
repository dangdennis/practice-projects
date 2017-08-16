    $(document).ready(function() {
        var arr = [1,2,3,4];

        var dices = new Dices();
        
        var austin = new Character(createName());
        var dennis = new Character(createName());
        var armory = new Armory();
        console.log('armory: ', armory);
        // setting stats to players
        for(stat in austin.stats) {
            austin.stats[stat] = dices.dice1.roll() + dices.dice2.roll() + dices.dice3.roll();
        }
        for(stat in dennis.stats) {
            dennis.stats[stat] = dices.dice1.roll() + dices.dice2.roll() + dices.dice3.roll();
        }
        for(item in dennis.armor){
            // length = armory.helmet.length
            var length = armory[item].length;
            var randomIndex = Math.floor(Math.random() * length);
            dennis.armor[item] = armory[item][randomIndex];
        }
        for(item in austin.armor){
            var length = armory[item].length;
            var randomIndex = Math.floor(Math.random() * length);
            austin.armor[item] = armory[item][randomIndex];
        }

        console.log('dennis character', dennis);
        console.log('austin character',austin);
        // person with 
            // stats
                // strength, dex, intel, charisma, const, willp
            // name
            // items
                // helmet, hat, chest armor, leg, necklace, 2 rings, hand armor, weapon, shield if 1 handed
    })

    function Armory() {
        this.helmet = ['skull Cap', 'lich king helmet', 'peasant feather'];
        this.chest = ['copper chest', 'radioactive chest','adamantium chest'];
        this.hand = ['cloth gloves','leather gloves','chain gloves'];
        this.leg = ['cloth leggings','leather leggings','plate leggings'];
        this.neck = ['dogtag'];
        this.weapon = ['bow','slingshot','sword','2handed-sword'];
        this.shield = ['shield'];
        this.rings = ['ring of power','bitch ring'];

    }

    function Dices() {
        this.dice1 = {
            roll: function (){
                return ( Math.floor(Math.random() * 6) + 1 );
            }
        }
        this.dice2 = {
            roll: function(){
                return ( Math.floor(Math.random() * 6) + 1 );
            }
        }
        this.dice3 = {
            roll: function(){
                return ( Math.floor(Math.random() * 6) + 1 );
            }
        }
    }    

    function createName() {
        var vowels = ['a','e','i','o','u'];
        var consonants = // [ fromCharCode(random number betewen 65 - 93) && != vowels[index].fromCharCode]
        var name = vowels[0] + consonants;
        return name;
    }



    function Character(name) {
        this.name = name
        this.stats = {
            strength: 0,
            dexterity: 0,
            intel: 0,
            charisma: 0,
            constitution: 0,
            willpower: 0
        };
        this.armor = {
            helmet : null,
            chest : null,
            hand : null,
            leg : null,
            neck : null,
            weapon : null,
            shield : null,
            rings : null
        };
    }
