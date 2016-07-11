define(['backbone', 'pages/icons/views/index'],
    function(Backbone, MainView) {
        return {
            main: function(){
                this.mainView = new MainView();
            }
        }
    }
);