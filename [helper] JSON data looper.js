function displayData(data){
    Object.keys(data).forEach(function(key){
        var value = data[key];

        // if (typeof value === "object") {
        //     displayData(value);
        // }else{
        //     console.log(key + ": " + value);
        // }
        console.log(key + ": " + value);
    });
}