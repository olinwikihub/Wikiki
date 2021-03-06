var server = {
    GET : function(url, callback) {
        $.get(url).done(function(data) {
            callback(data);
        }).error(this.errorHandler);
    },
    POST : function(url, data, callback) {
        $.post(url, data).done(function (result) {
            callback(result);
        }).error(this.errorHandler);
    },
    errorHandler : function(err, status) {
        console.log(status + " " + err);
    }
}