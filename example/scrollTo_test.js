var arrGifts = ['Card', 'Flower', 'Car', 'Book', 'Cellphone', 'Ring', 'PC'];
var vm1 = {
	newGift: ko.observable(),
	gifts: ko.observableArray().extend({scrollTo: {containerSelector: '#gift_list1'}}),
	add: function(data){

		this.gifts.push(this.newGift());
		this.newGift('');
	}
};

ko.applyBindings(vm1, document.getElementById('1'));
 
 arrGifts.forEach(function(strGift){
	vm1.gifts.push(strGift);
})
////
 var vm2= {
	newGift: ko.observable(),
    gifts: ko.observableArray(),   
	toGift: ko.observable().extend({scrollTo: {containerSelector: '#gift_list2'}}),
	goto: function(){
		this.toGift('#'+ this.newGift());
	}
};

ko.applyBindings(vm2, document.getElementById('2'));

arrGifts.forEach(function(strGift){
	vm2.gifts.push(strGift);
})

vm2.toGift('#' + arrGifts[0]);