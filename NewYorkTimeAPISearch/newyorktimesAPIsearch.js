// on click of search submit button 
	$("#searchSubmit").click(function(searchKeywords) {

	var searchKeyword = $("#searchTerm").val();
	var beginDate = $("#startYear").val();
	var endDate = $("#endYear").val();

		//AJAX CALLS
		var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
		url += '?' + $.param({
		  'api-key': "992735765fb441bfbbbade81193103ea",
		  'q': searchKeyword,
		  'begin_date': beginDate,
		  'end_date': endDate
		});
		console.log('URL', url);
		$.ajax({
		  url: url,
		  method: 'GET',
		}).then(function(response) {
		  console.log(response);

		  // number of records to retrieve = #retrieve (value is associated)
		  // start year = #startYear
		  // end year = #endYear
			  var results = response.data;


			  for (var i=0; i < results.length; i++) {
			  	//Variable names for responses
				  	// Selecting Form
				  	var searchTermRetrieve = $("#searchTerm");
				  	// Selecting Headline
				  	var headlineFromAPI = response.docs[i].headline;
				  	//Selecting Byline
				  	var bylineFromAPI = response.docs[i].byline;
				  	// Selecting Article Link
				  	var articleLinkFromAPI = response.docs[i].web_url;
				// Appending Results
					("#topArticles").append(headlineFromAPI);
					("#topArticles").append(bylineFromAPI);
					("#topArticles").append(articleLinkFromAPI);
			  }

		  });

	});