Meteor.methods({
	installApp : function(name, email, password){
			if(Meteor.users.find({}).fetch().length == 0)
			{
					if(email.length > 0 && password.length > 0 && name.length >= 3)
					{
						var userid = Accounts.createUser({
				
										password: password,
										email: email,
										profile: {
											name: name
											}
											});

						Roles.addUsersToRoles(userid,'admin');
					}
					else
					{
						throw new Meteor.Error('install-error','Please enter valid values')
					}
					
			}
			else
			{

				throw new Meteor.Error('install-error','App already installed')
			}

	}
})