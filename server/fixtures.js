if (Posts.find().count() === 0) {
	Posts.insert({
		title: 'A New Hope',
		url: 'http://StarWarsIV.com/best-movie-ever/'
});

	Posts.insert({
		title: 'Empire Strikes Back',
		url: 'http://StarWarsV.com/it-was-ok/'
});

	Posts.insert({
		title: 'Return of the Jedi',
		url: 'http://StarWarsVI.com/brillent-end-to-series/'
});

	Posts.insert({
		title: 'The Force Awakens',
		url: 'http://StarWarsVII.com/doesnt-exsist-yet/'
});
}
