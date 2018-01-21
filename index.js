$(() => {



    //create the ajax call (add in other joke apis later)
        $('#jokeForm').submit((t) => {
            t.preventDefault();
            $.get('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke')
            .done((res) => {
                let jokes = res;
                console.log(jokes.type)
                
                $(`#jokeLanding`).prepend(insertJokeToLanding(jokes).addClass('dam'))
                $(`.dam`)[5].remove();
                
                
            })
        })


    


function insertJokeToLanding(joke) {
    //set it up just like the starwars, use it as reference if stuck.
    let row = $(`<tr></tr>`);
    
    let jokeSetup = $(`<td>${joke.setup}</td>`);
    let jokePuchline = $(`<td>${joke.punchline}</td>`)
    
    let randomizer = Math.floor(Math.random()*10)
    let colorRandom ='#C80000'
    if (randomizer === 1){
        colorRandom ='#980000'
    } else if (randomizer === 2) {
        colorRandom ='#F66F00'
    } else if (randomizer === 3) {
        colorRandom ='#00D8D8'
    } else if (randomizer === 4) {
        colorRandom ='#f60000'
    } else if (randomizer === 5) {
        colorRandom ='#FF0000'
    } else if (randomizer === 6) {
        colorRandom ='#00EB00'
    } else if (randomizer === 7) {
        colorRandom ='#009393'
    } else if (randomizer === 8) {
        colorRandom ='#00C500'
    } else if (randomizer === 9) {
        colorRandom ='#007A00'
    } else if (randomizer === 10) {
        colorRandom ='#005B5B'
    } else {
        colorRandom ='#FF0000'
    }
    row.append(jokeSetup).css('background-color', colorRandom);
    row.append(jokePuchline).css('background-color', colorRandom);
    return row
}











})