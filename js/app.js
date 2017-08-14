var ViewModel=function(){
	this.catname=ko.observable('komala');
	this.count=ko.observable(0);
	this.urle=ko.observable('images/catimage.jpg');
	this.nicknames=ko.observableArray(["komala","deepu","komi","kodi"]);
	

	this.incrementCounter=function(){
		this.count(this.count()+1);
	};

	this.level=ko.computed(function(){
		var message;
		var currentclicks=this.count();
		if(currentclicks<5){
			message='new-born';
		}
		else if(currentclicks<10){
			message='infant';
		} 
		else if(currentclicks<15){
			message='teen';
		}
		else if(currentclicks<20){
			message='adult';
		}
		else{
			message='old';
		}
		return message;
	},this);

}
ko.applyBindings(new ViewModel())