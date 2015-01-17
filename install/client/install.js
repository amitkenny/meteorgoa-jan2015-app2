Template.install.rendered = function () {
Session.set('RegisterError',false)
};



Template.install.helpers({
	registererror: function () {
		return Session.get('RegisterError');
	}
});


Template.install.events({
	'submit #loginform': function (event) {
		var email = event.currentTarget.email.value;
		var password = event.currentTarget.password.value;
		var profilename = event.currentTarget.profilename.value;

		if(email.length > 0 && password.length > 0 && profilename.length >= 3)
		{
			Meteor.call('installApp',profilename,email,password,function (err) {
				if(err)
				{
					Session.set('RegisterError',err.reason)
				}
				else
				{
					Session.set('RegisterError',false)
					
				}
			});
			event.currentTarget.email.value = "";
			event.currentTarget.password.value = "";
			event.currentTarget.profilename.value = "";

		}
		else
		{
			Session.set('RegisterError','Please enter valid values.')
		}
		return false;
	}
});