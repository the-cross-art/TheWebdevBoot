var mongoose = require("mongoose");
//mongoose.connect("mongodb://localhost/blog_demo");
 mongoose.set("useUnifiedTopology", true);
mongoose.connect("mongodb://localhost/blog_demo_2", { useNewUrlParser: true });

//user - email -name
var Post= require("./models/posts");

// USER - email, name
var User = require("./models/user")
// User.create({
// 	email:"bbotmail@gmail.com",
// 	name:"Bob Belcher"
// })

Post.create({
	title:"How to create best burger , pt4",
	content:"jknvjkghjhgiks"
},function(err , post){
	User.findOne({email:"bbotmail@gmail.com"} , function(err , foundUser){
		if(err){
			console.log(err);
		} else {
			foundUser.posts.push(post);
			foundUser.save(function(err,data){
				if(err){
					console.log(err);
				} else {
					console.log(data);
				}
			})
		}
	})
})
	
User.findOne({email:"bbotmail@gmail.com"}).populate("posts").exec(function(err,user){
	if(err){
		console.log(err);
	} else {
		console.log(user);
	}
})	