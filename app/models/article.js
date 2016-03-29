import DS from 'ember-data';

export default DS.Model.extend({
    author: DS.attr(),
    image: DS.attr(),
    title: DS.attr(),
    text: DS.attr(),
    genre: DS.attr()
});
