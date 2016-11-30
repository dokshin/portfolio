'use strict';

var console =             $('.console'),
    
    consoleMessage =      $('.console-message'),
    consoleMessageWrapp = $('.console-message-wrapper'),
    consoleMessageWelc =  $('.console-message-welcom'),
    consoleMessageNew =   $('.console-message-new'),
    consoleMessageUs =    $('.console-message-user').html(),
    consoleMessageList =  $('.console-message-list').html(),
    
    consoleForm =         $('.console-form'),
    consoleArea =         $('.console-form-area'),
    consoleAreaBorder =   $('.console-form-area-border');

var consoleMessageData = {
        html :         $('.console-message-data-html'),
        pug :          $('.console-message-data-pug'),
        css :          $('.console-message-data-css'),
        flexbox :      $('.console-message-data-flexbox'),
        sass :         $('.console-message-data-sass'),
        smacss :       $('.console-message-data-smacss'),
        js :           $('.console-message-data-js'),
        jquery :       $('.console-message-data-jquery'),
        gulp :         $('.console-message-data-gulp'),
        english :      $('console-message-data-english'),
        git :          $('.console-message-data-git'),
        experience :   $('.console-message-data-experience'),
        english :      $('.console-message-data-english'),
        education :    $('.console-message-data-education'),
        age :          $('.console-message-data-age'),
        list :         $('.console-message-list'),
        'folio-code' : $('.console-message-folio-code'),
        gulpfile :     $('.console-message-gulpfile'),
        warning :      $('.console-message-warning')
};


//CONSOLE

consoleArea.on('keydown', function(e) {
    
    if (e.keyCode == 13) {
        var consoleAreaVal =  consoleArea.val().replace(/\r|\n/g, ''),
            dataMessage = null;
        
        if (consoleAreaVal == '') {
            consoleAreaVal == '';
        } else {
            //Add message user
            consoleMessageNew.append(consoleMessageUs + consoleAreaVal);
            consoleMessage.animate( { scrollTop: consoleMessage.offset().top
                                    + 10000 }, 10 );
            
            //Data message
            for (var key in consoleMessageData) {
                if (consoleAreaVal == key) {
                    consoleMessageNew.append(consoleMessageData
                                             [key].html() );
                    dataMessage = 1;
                    break;
                };
            };
            
            //Sys message
            if (consoleAreaVal == 'clear') {
                consoleMessageWelc.addClass('hidden');
                consoleMessageNew.html('');
            } else if (dataMessage == null) {
                consoleMessageNew.append( consoleMessageData.warning.html() );
            };
            
            //Clear consoleArea
            consoleArea.val(function(i, val){
                return val = null;
            });
        };
       
         
    };
            
});