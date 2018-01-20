$(() => {




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
    let row = $(`<tr></tr>`);
    
    let jokeSetup = $(`<td>${joke.setup}</td>`);
    let jokePuchline = $(`<td>${joke.punchline}</td>`);
    

    
    row.append(jokeSetup);
    row.append(jokePuchline);
    return row;
}











})