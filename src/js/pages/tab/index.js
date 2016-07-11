define(['backbone', 'pages/tab/views/index'],
    function(Backbone, MainView) {
        return {
            main: function(){
                this.mainView = new MainView();
            }
        }
    }
);