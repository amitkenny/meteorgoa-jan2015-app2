Router.configure({
layoutTemplate : 'basiclayout'

})



Router.onBeforeAction(function(){
	if(!Meteor.userId())
	{
		var routerThis = this;
		Meteor.call('checkUsers',function(err,result){

			if(result)
			{
				routerThis.layout('startlayout');
				routerThis.render('header',{to: 'header'});
				routerThis.render('login',{to : 'main'});
			}
			else
			{
				routerThis.layout('startlayout');
				routerThis.render('header',{to: 'header'});
				routerThis.render('install',{to : 'main'});
			}
		})
	}
	else
	{
		this.next();
	}

})


Router.route('/',function(){

})

