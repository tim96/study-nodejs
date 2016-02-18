jQuery(function($) {
    'use strict';

    var App = {

        gameId: 0,
        myRole: '',
        mySocketId: '',
        currentRound: 0,

        init : function() {
            console.log('init call');

            App.cacheElements();
        },

        cacheElements : function() {
            console.log('cacheElements call');

            App.$doc = $(document);

            // Templates
            App.$gameArea = $('#gameArea');
            App.$templateIntroScreen = $('#intro-screen-template').html();
        }
    };

    App.init();
});