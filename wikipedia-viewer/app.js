$(function(){
  function getData(){
    var searchTerm = $('#search-term').val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm +"&format=json&callback=?"

    $.ajax(url,{
      type: 'GET',
      dataType: 'json',
      success: function(data){
          $('#search-term').val("");
          $('#results').html('');
        for(var i=0;i<data[1].length;i++){
          $('#results').append("<li class='well'><h3><a target='_blank' href=" + data[3][i] + ">" + data[1][i] + "</a></h3>"
          + "<p>" + data[2][i]
          + "</p></li>");
        }
      },
      error: function(err){
        console.log('Some error occurs');
      }
    })
  }

  $('#search').click(getData);
  $('#search-term').keypress(function(e){
    if(e.which === 13){
      getData();
    }
  });
})
