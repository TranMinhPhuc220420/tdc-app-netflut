document.addEventListener("DOMContentLoaded", function (event) {

    /*
    * When it's USER
    * */
    if (IS_CLIENT) {
        require('./components/client/AppClient');
    }

    /*
    * When it's ADMIN
    * */
    else {
        require('./components/admin/AppAdmin');
    }
});

require('./bootstrap');
