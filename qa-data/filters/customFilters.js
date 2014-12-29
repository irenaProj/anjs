angular.module("customFilters", [])
    .filter("unique", function() {
        return function(data, propertyName) {
            if (angular.isArray(data) && angular.isString(propertyName)) {
                var results = [];
                var keys = {};

                for (var i= 0; i < data.length; i++ ) {
                    var val = data[i][propertyName];

                    if (angular.isUndefined(keys[val])) {
                        keys[val] = true;
                        results.push(val);
                    }
                }

                return results;
            } 

            return  data;
        }
    })
    .filter("range", function($filter) {
        return function(data, page, size) {

            if (angular.isArray(data) && angular.isNumber(page) && angular.isNumber(size)) {
                var start_index = (page - 1) * size;

                if (data.length < start_index) {
                    return [];
                } 

                return $filter("limitTo")(data.splice(start_index), size);
            }

            return data;
        }
    })
    .filter("pageCount", function() {
        return function(data, size) {
            if (angular.isArray(data) && angular.isNumber(size)) {
                var result = [];
                var cnt = Math.ceil(data.length / size);

                for (var i = 0; i < cnt; i++ ) {
                    result.push(i);
                }

                return result;
            }

            return data;
        }
    });