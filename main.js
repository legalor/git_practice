
    const jokes = ['People say...','Are you sure...', 'Do you know...']
    const randomIndex = Math.floor(Math.random()*jokes.length);
    const randomJokes = jokes[randomIndex]

const randomMsg = (question) => {
    question = question.toLowerCase();
    console.log('Do you want a random joke? (Please type yes or no)');
    if (question === 'yes') {
        return randomJokes
    }
}

console.log(randomMsg('Yes'))