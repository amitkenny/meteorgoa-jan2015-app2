Accounts.config({loginExpirationInDays : 1 });

Meteor.methods({
	checkUsers : function(){
		if(Meteor.users)
		{
			if(Meteor.users.find({}).fetch().length > 0 )
			{
				return true;
			}
			return false;
		}
		return false;
	}
})



