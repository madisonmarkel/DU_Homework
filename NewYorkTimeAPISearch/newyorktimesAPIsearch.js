// on click of search submit button 
$("#searchSubmit").click(function(searchKeywords) {
    var searchKeyword = $("#searchTerm").val();
    var beginDate = $("#startYear").val();
    var endDate = $("#endYear").val();
        //AJAX CALLS
    var params = {
          'api-key': "992735765fb441bfbbbade81193103ea",
          'q': searchKeyword,
    };
    
    if(beginDate) {
      params.begin_date = beginDate;
    };
    if(endDate) {
      params.end_date = endDate;
    };
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param(params);
        console.log('URL', url);
        $.ajax({
          url: url,
          method: 'GET',
        }).then(function(response) {
          console.log(response);
          // number of records to retrieve = #retrieve (value is associated)
          // start year = #startYear
          // end year = #endYear
                var results = response.response.docs;
                console.log(results);
              for (var i=0; i < results.length; i++) {
                //Variable names for responses
                    // Selecting Form
                    var searchTermRetrieve = $("#searchTerm");
                    // Selecting Headline
                    var headlineFromAPI = results[i].headline;
                    //Selecting Byline
                    var bylineFromAPI = results[i].byline;
                    // Selecting Article Link
                    var articleLinkFromAPI = results[i].web_url;
                // Appending Results
                    $("#topArticles").append(headlineFromAPI);
                    $("#topArticles").append(bylineFromAPI);
                    $("#topArticles").append(articleLinkFromAPI);
              }
          });
    });