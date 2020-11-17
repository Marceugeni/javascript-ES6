// Tenim un array de tasques i volem aconseguir un array que contingui únicament els noms de les tasques. 

var tasks = [
    {
       'name' : 'Start React web',
       'duration' : 120
    },
    {
       'name' : 'Work out',
       'duration' : 60
    },
    {
       'name' : 'Procrastinate on facebook',
       'duration' : 240
    }
    ];


    // Usar map()

    let taskNames = [];
    tasks.map((e) => {
        taskNames.push(e.name);
    })


    // Usar forEach()

    let taskNames2 = [];
    tasks.forEach((e) => {
        taskNames2.push (e.name);
    })

