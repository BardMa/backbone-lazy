define(['backbone', 'pages/msg/views/index'],
    function(Backbone, MainView) {
        return {
            main: function(){
                this.mainView = new MainView();
            }
        }
    }
);