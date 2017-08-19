var initialCats=[{
    		 'catname' : 'redcat',
    		 'catId' : 0,
    		 'count' : 0,
    		 'urle' : 'images/catimage.jpg',
    		 'nicknames' : ['koms','deeps','deepu']
    	}, {
      	   	'catname' : 'blackcat',
      	 	'catId' : 1,
      	 	'count' : 0,
      	 	'urle' : 'images/catimage2.jpg',
      	 	'nicknames' : ['pavan','kem','pav']
      	}, {
      	 	'catname' :'bluecat',
      	 	'catId' : 2,
      	 	'count' : 0,
      		'urle' : 'images/catimage3.jpg',
      		'nicknames' : ['cuty','bluely']
      	}, {
      	 	'catname' :'pinkcat',
      	 	'catId' : 3,
      	 	'count' : 0,
      	 	'urle' : 'images/catimage4.jpg',
      	 	'nicknames' : ['pinky','kitty']
      	}, {
      	 	'catname' :'whitecat',
      	 	'catId' : 4,
      	 	'count' : 0,
      	 	'urle' : 'images/catimage5.jpg',
      	 	'nicknames' : ['snowy','oreo']
      	}]


var Cat = function(data) {
    this.count = ko.observable(data.count);
    this.catname = ko.observable(data.catname);
    this.urle = ko.observable(data.urle);
    this.nicknames = ko.observableArray(data.nicknames);

    this.level = ko.computed(function() {
        if(this.count() >= 20) {
            return 'Adult';
        }
        else if(this.count() >= 15) {
            return 'Teen';
        }
        else if (this.count() >= 10) {
            return 'Child';
        }
        else if(this.count() >=5) {
            return 'Infant';
        }
        else return 'Newborn';

    }, this);
};

var ViewModel = function() {
    var self = this;

    this.catList = ko.observableArray([]);

    initialCats.forEach(function(catItem) {
        self.catList.push(new Cat(catItem));
    });

    this.currentCat = ko.observable( this.catList()[0] );

    this.incrementCounter = function() {
        self.currentCat().count(self.currentCat().count() + 1);
    };

    this.changeCat = function(cat) {
        self.currentCat(cat);
    };
};

ko.applyBindings(new ViewModel());