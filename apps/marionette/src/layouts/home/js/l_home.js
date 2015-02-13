// Filename: views/project/list
define([
   'jquery',
   'underscore',
   'backbone',
   'marionette',
   'text!../templates/home.html'
], function($, _, Backbone, Marionette, HomePanelTemp) {

   "use strict";
   var HomePanel = Backbone.Marionette.LayoutView.extend({

      template: HomePanelTemp,
      ui: {
         "toggleSiderbarHeader": "#toggle-siderbar-header",
         "toggleInnerSiderbar": "#toggle-inner-siderbar",
         "fog": "#blur-layout"
      },

      regions: {
         SideBarContent: "#sidebar-layout",
         mainContent: "#main-layout"
      },

      events: {
         "click @ui.toggleSiderbarHeader": "siderbarToggle",
         "click @ui.toggleInnerSiderbar": "siderbarToggle",
         "click @ui.fog": "siderbarToggle"
      },
      siderbarToggle: function() {
         $("#middle-layout").toggleClass("toggle-sidebar");
      },
      detailToggle: function() {
         $("#middle-layout").toggleClass("toggle-detail");
      },
      render: function() {
         // Using Underscore we can compile our template with data
         var data = {};
         var compiledTemplate = _.template(HomePanelTemp, data);
         this.$el.append(compiledTemplate);
      }
   });
   return HomePanel;
});
