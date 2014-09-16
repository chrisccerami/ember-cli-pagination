// Generated by CoffeeScript 1.7.1
import Ember from 'ember';
var c;

c = Ember.Object.extend({
  responseHash: function() {
    var k, page, res;
    page = this.pageFromRequest(this.request);
    k = "" + this.name + "s";
    res = {};
    res[k] = this.objsForPage(page);
    res.meta = {
      total_pages: this.totalPages()
    };
    return res;
  },
  objsForPage: function(page) {
    var e, s;
    s = (page - 1) * 2;
    e = s + 1;
    return this.all.slice(s, +e + 1 || 9e9);
  },
  pageFromRequest: function(request) {
    var res;
    res = request.url.match(/page\=(\d+)/);
    if (res) {
      return parseInt(res[1]);
    } else {
      return 1;
    }
  },
  totalPages: function() {
    return parseInt((parseFloat(this.all.length) + 1.99) / 2.0);
  }
});

c.reopenClass({
  responseHash: function(request, all, name) {
    return this.create({
      request: request,
      all: all,
      name: name
    }).responseHash();
  }
});

export default c;
