// Global variable housing;

    var bigList = [];

// Function housing;

    function thisFunc(){
        event.preventDefault();
        let list = document.getElementById('form').serializeArray();
        let formed = {
            name: list[0].value,
            email: list[1].value,
            age: list[2].value,
            message: list[3].value
        };
        bigList.push(formed);
        localStorage.formies = JSON.stringify(bigList);
    }

// Run on load housing;

    if(localStorage.formies){
        bigList = JSON.parse(localStorage.formies);
    };

    console.log(bigList);

// Action-lead event housing;