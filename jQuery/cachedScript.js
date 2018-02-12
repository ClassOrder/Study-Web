// document.domain = "https://kr.api.riotgames.com/"

// $.getScript("../JS/testData.js", function(data, textStatus, jqxhr) {   
//     console.log("DATA: ");
//     console.log(data);
//     console.log("TEXTSTATUS: ");
//     console.log(textStatus);
//     console.log("JQXHR: ");
//     console.log(jqxhr);
// })


$.getScript("../JS/testData.js")
    .done(function( script, textStatus ) {
        console.log(script);
        console.log( textStatus );
    })
    .fail(function( jqxhr, settings, exception ) {
        $( "div.log" ).text( "Triggered ajaxError handler." );
    });

