Template.login.rendered = function () {
Session.set('LoginError',false)
};

Template.login.helpers({
	loginerror: function () {
		return Session.get('LoginError');
	}
});


Template.login.events({
	'submit #loginform': function (event) {
	  var email = event.currentTarget.email.value;
		var password = event.currentTarget.password.value;
		if(email.length > 0 && password.length > 0)
		{
			Meteor.loginWithPassword(email,password,function(err){
				if(err)
				{
					Session.set('LoginError',err.reason)
				}
				else
				{
					Session.set('LoginError',false)
					
				}
			})
		}
		return false;
	}
});

