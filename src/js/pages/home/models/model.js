/**
 * Created by chloe on 15/8/30.
 */
define(['backbone'],
    function(Backbone) {
        return Backbone.Model.extend({

            url: '/data.json'

        });

    }
);