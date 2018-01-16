class Musician{
        constructor(name){
            this.name = name;}
    play(piece){
        console.log(this.name +' is now playing '+ piece )
        }
}
 
let Violinist = new Musician('Anil');
Violinist.play('Violin');
let Pianist = new Musician('Rabin');
Pianist.play('Piano');