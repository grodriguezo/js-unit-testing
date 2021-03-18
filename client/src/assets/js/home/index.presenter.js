'use strict';

var IndexPresenter = function (config) {

    if (typeof (config) == "undefined" || config == null) throw "config is null or undefined";
    if (typeof (config.view) == "undefined" || config.view == null) throw "config.view is null or undefined";
    if (typeof (config.localStorage) == "undefined" || config.localStorage == null) throw "config.localStorage is null or undefined";

    var _config = {
        view: config.view,
        localStorage: config.localStorage
    };

    var _init = function () {
        var userLoggedIn = _config.localStorage.getItem(Constants.localStorageKey.isUserLoggedIn) || false;

        if(!userLoggedIn){
            _config.view.showTodoSection(false);
            _config.view.showGoToLoginSection();
            _config.view.showGoToLoginSection();
            return 
        }
        _config.view.showTodoSection();
        _config.view.showGoToLoginSection(false);
        _config.view.showGoToLoginSection(false);
    };

    return {
        //view : _config.view,
        init: _init
    };
};