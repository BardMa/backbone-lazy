define([
        'backbone'
        ,'doT'
        ,'home/model'
        ,'text!shop/tpl.html'
    ],
    function(Backbone, doT, Model, Tpl) {

        return Backbone.View.extend({

            className:'page page-shop',

            template: doT.template(Tpl),

            initialize: function(id) {
                $('.page').removeClass('active')
                if($('.page-shop')[0])
                {
                    $('.page-shop').remove()

                }
                this.id=id;
                this.model=new Model();
                this.model.on('sync',this.render,this)
                this.model.fetch();
                $('body').append(this.$el);
            },

            render: function() {
                this.$el.html(this.template(this.model.get('data')[this.id])).addClass('active');
                return this;
            }
        });
    }
);