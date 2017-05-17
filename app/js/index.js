/**
 * Created by taho on 11.05.17.
 */
// var temp= Promise require ('text!../../templates/imageTemp.html!strip');

require(['text!../../templates/imageTemp.html!strip'],function (temp) {
    var $ = window.$;
    var conductor=1;
    $( "#titer" ).click(function() {
        // alert( "Handler for .click() called." );
        if (conductor%2)
            $("#titer").css({'color':'red'});
        else
            $("#titer").css({'color':'black'});
        conductor++;
    });
});


