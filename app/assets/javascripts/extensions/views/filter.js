define([
  'extensions/views/view'
],
function (View) {
  var Filter = View.extend({
    
    initialize: function (options) {
      options = options || {};
      View.prototype.initialize.apply(this, arguments);
      this.id = options.id || 'filter';
      this.collection.filtered.on('reset', this.hideShowElements, this);
    },
    
    events: {
      'keyup input': 'onKeyUp'
    },
    
    hideShowElements: function () {
      this.collection.each(function (model) {
        model.get('el').addClass('performance-hidden');
      });
      this.collection.filtered.each(function (model) {
        model.get('el').removeClass('performance-hidden');
      });
      
      if (this.countEl) {
        this.countEl.text(this.collection.filtered.length);
      }
    },
    
    onKeyUp: function (e) {
      var term = this.inputEl.val();
      if (e.keyCode == 27) {
        if (!term.length) {
          this.inputEl.blur();
          return;
        }
        this.inputEl.val('');
        term = '';
      }
      
      this.collection.applyFilter(term);
    },
    
    render: function () {
      View.prototype.render.apply(this, arguments);
      
      if (this.label) {
        var label = $('<label/>').prop('for', this.id).text(this.label);
        this.$el.append(label);
      }
      
      var input = this.inputEl = $('<input/>').prop('id', this.id);
      if (this.placeholder) {
        input.prop('placeholder', this.placeholder);
      }
      this.$el.append(input);
    }
  });
  
  return Filter;
});