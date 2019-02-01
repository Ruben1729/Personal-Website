jQuery.githubUser = function(username, callback) {
   jQuery.getJSON('https://api.github.com/users/'+username+'/repos?callback=?',callback)
}
 
jQuery.fn.loadRepositories = function(username) {
    this.html("<span>Querying GitHub for " + username +"'s repositories...</span>");

    var target = this;
    $.githubUser(username, function(data) {

        var repos = data.data; // JSON Parsing

        sortByName(repos); 

        var table = $('<table/>');
        target.empty().append(table);
        table.append('<tr><th>Project Name</th><th>Programming Language</th><th>Project Description</th></tr>');
        $(repos).each(function() {
            if (this.name != (username.toLowerCase()+'.github.com')) {
                table.append('<tr><td><a href="'+ (this.homepage?this.homepage:this.html_url) +'">' + this.name + '</a></td><td>'+(this.language?('('+this.language+')'):'')+'</td><td>' + this.description +'</td></tr>');
            }
        });      
      });
      
    function sortByName(repos) {
        repos.sort(function(a,b) {
        return a.name - b.name;
       });
    }
};