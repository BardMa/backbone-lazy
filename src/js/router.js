define(['jquery', 'backbone'],
    function($, Backbone) {
        var Router = Backbone.Router.extend({
            initialize: function() {
                $(document).on('click', 'a[href^="/"]', function(e) {
                    event.preventDefault();
                    var href = $(e.currentTarget).attr('href');
                    Backbone.history.navigate(href, true);
                    return false
                });
            },
            routes: {
                '': 'home', //首页
                'shop/:id': 'shop'
            },
            home: function() {
                require(['home/app'], function (router) {
                    router.main();
                });
            },
            shop: function(id) {
                require(['shop/app'], function (router) {
                    router.main(id);
                });
            }


        });
        new Router();
        Backbone.history.start();

    }
);