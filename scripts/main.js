require.config( {
    paths:{
        "jquery":"libs/jquery",
        "underscore":"libs/underscore",
        "handlebars":"libs/handlebars",
        "backbone":"libs/backbone"
    },
    shim:{
        "backbone":{
            deps:["underscore", "handlebars", "jquery"],
            exports:"Backbone"
        }
    }
} );

require( ["backbone"], function ( Backbone ) {
} );
