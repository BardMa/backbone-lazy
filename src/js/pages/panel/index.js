define(['backbone', 'pages/panel/views/index'],
    function(Backbone, MainView) {
        return {
            main: function(){
                this.mainView = new MainView();
            }
        }
    }
);