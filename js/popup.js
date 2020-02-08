$(function(){ 
    //function we are calling
    $('#name').keyup(function(){    
    //selects the 'name element' where the user's input is being stored
    $('#greet').text('Hello ' + $('#name').val()) 
    // changes text of extension to say hello and user input
    })
})