define(['backbone', 'pages/searchbar/views/index'],
    function(Backbone, MainView) {
        return {
            main: function(){
                this.mainView = new MainView();
            }
        }
    }
);