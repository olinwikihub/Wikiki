var server = {
    GET : function(url, callback) {
        $.get(url).done(function(data) {
            callback(data);
        }).error(errorHandler);
    },
    errorHandler : function(err, status) {
        console.log(status + " " + err);
    }
}