function Book(title, author){
   this.title = title;
   this.author = author;
   this.isRead = false;
}

Book.prototype.markAsRead = function(){
   this.isRead = true
}



angular.module('someModule', []).factory('BookListService', function($http){
    var service {
        books: [],
        load: function(){
            $http.get('/books').then(function(res){
                angular.forEach(res.data, function(book){
                    service.books.push(new Book(book.title, book.author))
                })
            })
         }
    };
    return service; 
})