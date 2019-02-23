

function getParameters() {
    let stringParameters = decodeURI(location.href.split('?')[1]);
    return new URLSearchParams(stringParameters);
}

function setValues(parameters) {
    let gender = "gender-" + parameters.get("gender");
    parameters.delete("gender");
    document.getElementById(gender).checked = "checked";
    parameters.forEach((value, key) => {
        document.getElementById(key).value = value;
            console.info(key,value);
    })
}



document.onreadystatechange = function() {
    if (document.readyState === 'complete') {
        let parameters = getParameters();
        setValues(parameters);
    }
};