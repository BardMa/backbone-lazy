define([
        'backbone'
        ,'doT'
        ,'home/model'
        ,'text!home/tpl.html'
    ],
    function(Backbone, doT, Model, Tpl) {

        return Backbone.View.extend({

            className:'page page-area',

            template: doT.template(Tpl),

            initialize: function() {
                $('.page').removeClass('active')
                if($('.page-area')[0])
                {
                    $('.page-area').addClass('active')

                }else{
                    this.model=new Model();
                    this.model.on('sync',this.render,this)
                    this.model.fetch();
                    $('body').append(this.$el);
                }
            },

            render: function() {
                this.$el.html(this.template(this.model.get('data'))).addClass('active');
                return this;
            }
        });
    }
);