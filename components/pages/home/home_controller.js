'use strict';

var Backbone = require('backbone'),
    Marionette = require('backbone.marionette'),
    AppLayoutView = require('./views/app_layout_view.js');

var HomeController = Marionette.ItemView.extend({
    
    appLayoutView: new AppLayoutView(),

    initialize: function() {
        App.vent.on('render:app_layout_view', this.renderAppLayoutView, this);
    },

    renderAppLayoutView: function() {
        App.regions.main.show(this.appLayoutView, {preventDestroy: true});
    }

  });

module.exports = HomeController;