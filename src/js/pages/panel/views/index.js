define([
        'backbone'
        ,'doT'
        ,'text!pages/panel/templates/index.html'
    ],
    function(Backbone, doT, Tpl) {
        var $container = $('#content');
        return Backbone.View.extend({

            className:'page page-panel',

            template: doT.template(Tpl),

            initialize: function() {
                $container.empty().addClass('loading');
                this.render();

            },

            render: function() {
                $container.html(this.template()).removeClass('loading');
                return this;
            }
        });
    }
);