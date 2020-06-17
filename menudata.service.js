(
  function(){
    angular.module("data")
    .service("MenuDataService",MenuDataService);
    MenuDataService.$inject = ["$http"]
    function MenuDataService($http){
      var service = this;
      service.getAllCategories = function(){
        // console.log("a");
        var response = $http({
          method:"GET",
          url:"https://davids-restaurant.herokuapp.com/categories.json"
        });
        return response;
      }
      service.getItemsForCategory = function(sn){
      var response = $http({
        method:"GET",
        url:"https://davids-restaurant.herokuapp.com/menu_items.json?category="+sn
      });
      return response;
    }
    }
  }
)();
