define(['backbone', 'shop/view'],
    function(Backbone, MainView) {
        return {
            main: function(id){
                this.mainView = new MainView(id);
            }
        }
    }
);