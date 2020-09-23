$(document).ready(function(){
    database.collection("cv").get().then((data)=>{
        data.forEach(element => {
            console.log(element.data());
        });
    });
});