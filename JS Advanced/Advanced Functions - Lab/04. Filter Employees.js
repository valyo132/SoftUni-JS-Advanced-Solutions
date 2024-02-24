function solve(input, criteria){
    let data = JSON.parse(input);

    let [key, value] = criteria.split('-');

    let sorted = [];

    data.forEach(el => {
        if (el[key] == value){
            sorted.push(el);
        }
    });

    let index = -1;
    for (const employee of sorted) {
        console.log(`${++index}. ${employee['first_name']} ${employee['last_name']} - ${employee['email']}`);
    }
}

solve(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
 'last_name-Johnson'

)