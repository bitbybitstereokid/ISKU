const radioButtons = document.querySelectorAll('.list-tabs > li >input[type="radio"]');

function FindProduct(selectedOption){
    let collections = document.querySelectorAll(".list-collection")
    let counter = 0;
    collections.forEach((collection)=>{
        if(collection.classList.contains(selectedOption)){
            counter++
        }
    })
    return counter
}
function DisplayCollectionOption(selectedOption){
    let collections = document.querySelectorAll(".list-collection")
    collections.forEach((collection)=>{
        if(collection.classList.contains(selectedOption)){
            collection.style.display = "block"
        }
        else {
            collection.style.display = "none"
        }
    })
}
function ShowAll(){
    let collections = document.querySelectorAll(".list-collection")
    collections.forEach((collection)=>{
        collection.style.display = "block"
    })
}
radioButtons.forEach((button) => {
    button.addEventListener('change', (event) => {
        const selectedOption = document.querySelector('.list-tabs > li >input[type="radio"]:checked').value;
        if(FindProduct(selectedOption) > 0){
            DisplayCollectionOption(selectedOption)
        }
        else {
            ShowAll()
        }
    });
});