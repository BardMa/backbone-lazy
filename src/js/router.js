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
                'actionsheet': 'actionSheet',
                'article': 'article',
                'button': 'button',
                'cell': 'cell',
                'dialog': 'dialog',
                'icons': 'icons',
                'msg': 'msg',
                'panel': 'panel',
                'progress': 'progress',
                'searchbar': 'searchBar',
                'tab': 'tab',
                'toast': 'toast',
            },
            home: function() {
                require(['pages/home/index'], function (router) {
                    router.main();
                });
            },
            article: function() {
                require(['pages/article/index'], function (router) {
                    router.main();
                });
            },
            actionSheet: function() {
                require(['pages/actionsheet/index'], function (router) {
                    router.main();
                });
            },
            button: function(id) {
                require(['pages/button/index'], function (router) {
                    router.main();
                });
            },
            cell: function(id) {
                require(['pages/cell/index'], function (router) {
                    router.main();
                });
            },
            dialog: function(id) {
                require(['pages/dialog/index'], function (router) {
                    router.main();
                });
            },
            icons: function(id) {
                require(['pages/icons/index'], function (router) {
                    router.main();
                });
            },
            msg: function(id) {
                require(['pages/msg/index'], function (router) {
                    router.main();
                });
            },
            panel: function(id) {
                require(['pages/panel/index'], function (router) {
                    router.main();
                });
            },
            progress: function(id) {
                require(['pages/progress/index'], function (router) {
                    router.main();
                });
            },
            searchBar: function(id) {
                require(['pages/searchbar/index'], function (router) {
                    router.main();
                });
            },
            tab: function(id) {
                require(['pages/tab/index'], function (router) {
                    router.main();
                });
            },
            toast: function(id) {
                require(['pages/toast/index'], function (router) {
                    router.main();
                });
            }



        });
        new Router();
        Backbone.history.start();

    }
);