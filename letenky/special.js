const input = document.getElementById('poznamky');
input.addEventListener('keypress', function(event){
    let key = event.key;
    let regex = new RegExp("^[a-zA-Z0-9]+$");
    if(!regex.test(key)){
        event.preventDefault();  
        return false;
    }
});