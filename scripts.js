// Global variable housing;

    var bigList = [];
    var heya = document.getElementById('past');

// Function housing;

    function thisFunc(){
        event.preventDefault();
        let buns = document.getElementById('form');
        let formed = {
            name: buns.elements[0].value,
            email: buns.elements[1].value,
            age: buns.elements[2].value,
            message: buns.elements[3].value
        };
        bigList.push(formed);
        localStorage.formies = JSON.stringify(bigList);
        console.log(bigList);
        let mained = document.getElementById('mainstayed');
        mained.innerHTML = `<h2>Thank you for siging up, ${buns.elements[0].value}!</h2>`;
    }

// Run on load housing;

    if(localStorage.formies){
        bigList = JSON.parse(localStorage.formies);
        if(bigList.length >= 10){
            for(let i = bigList.length - 1; i >= bigList.length - 10; i--){
                heya.innerHTML += `<p>${bigList[i].name} | ${bigList[i].email} | Age: ${bigList[i].age} | Message: ${bigList[i].message}</p>`;
            }
        }else{
            for(let i = bigList.length - 1; i >= 0; i--){
                heya.innerHTML += `<p>${bigList[i].name} | ${bigList[i].email} | Age: ${bigList[i].age} | Message: ${bigList[i].message}</p>`;
            }
        };
        
    };

    console.log(bigList);

// Action-lead event housing;