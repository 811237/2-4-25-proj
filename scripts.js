// Global variable housing;

    var bigList = [];
    var heya = document.getElementById('entries');

// Function housing;

    function showOff(){
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
    }

    // Runs when the form is submitted
    function thisFunc(){
        event.preventDefault();
        let buns = document.getElementById('form');
        // Accesses and returns the values of the form
        let formed = {
            name: buns.elements[0].value,
            email: buns.elements[1].value,
            age: buns.elements[2].value,
            message: buns.elements[3].value
        };
        bigList.push(formed);
        localStorage.formies = JSON.stringify(bigList);
        // Local storage updates ^ and updates the welcome phrase \/
        let mained = document.getElementById('mainstayed');
        mained.innerHTML = `<h2>Thank you for siging up, ${buns.elements[0].value}!</h2>`;
        heya.innerHTML = '';
        showOff();
    }

    function clearStor(){
        localStorage.clear();
        location.reload();
    }

// Run on load housing;

    showOff();

// Action-lead event housing;