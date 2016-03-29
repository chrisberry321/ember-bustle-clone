import Ember from 'ember';

export default Ember.Component.extend({
  addNewArticle: false,
  actions: {
    articleFormShow() {
      this.set('addNewArticle', true);
    },
    save1() {
     var params = {
       author: this.get('author'),
       genre: this.get('genre'),
       image: this.get('image'),
       text: this.get('text'),
       title: this.get('title'),
     };
     this.set('addNewArticle', false);
     this.sendAction('save2', params);
   }
  }
});
