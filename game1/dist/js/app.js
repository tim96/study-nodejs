jQuery(function($) {
    'use strict';

    var App = {

        gameId: 0,
        myRole: '',
        mySocketId: '',
        currentRound: 0,

        init: function() {
            console.log('init call');

            App.cacheElements();
            App.showInitScreen();
            App.bindEvents();
        },

        cacheElements: function() {
            console.log('cacheElements call');

            App.$doc = $(document);

            // Templates
            App.$gameArea = $('#gameArea');
            App.$templateIntroScreen = $('#intro-screen-template').html();
        },

        bindEvents: function() {
            console.log('bindEvents call');

            App.$doc.on('click', '#btnCreateGame', App.Host.onCreateClick);
            App.$doc.on('click', '#btnJoinGame', App.Player.onJoinClick);
        },

        showInitScreen: function() {
            console.log('showInitScreen call');

            App.$gameArea.html(App.$templateIntroScreen);
        },

        Host : {
            onCreateClick: function () {
                console.log('onCreateClick call');
            }
        },

        Player : {
            onJoinClick: function () {
                console.log('onJoinClick call');

            }
        }
    };

    App.init();
});