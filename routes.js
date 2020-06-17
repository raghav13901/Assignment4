(
  function(){
    angular.module("MenuApp")
    .config(RoutesInject);
    RoutesInject.$inject= ['$stateProvider','$urlRouterProvider'];
    function RoutesInject($stateProvider,$urlRouterProvider){
      $urlRouterProvider.otherwise('/');

      $stateProvider
      .state('home',{
        url:'/',
        templateUrl:'home.html'
      })
      .state('category',{
        templateUrl:"category.html",
        url:"/category",
        controller:"categoryList as list",
        resolve:{
          items: ['MenuDataService', function (MenuDataService) {
            // console.log(MenuDataService.getAllCategories().data);
            // return MenuDataService.getAllCategories();
            var item = [];
            var i =0;
            var promise=  MenuDataService.getAllCategories();
            promise.then(function(response){
              for(i=0;i<response.data.length;i++){
                var x = {
                  name:response.data[i].name,
                  sn:response.data[i].short_name
                };
                item.push(x);
              }
            });
            return item;
          }]
        }
      })
      .state('item-detail',{
        templateUrl:"item.html",
        url:"/item/{{short_name}}",
        controller:"itemsList as list",
        resolve:{
          item:['$stateParams','MenuDataService',function($stateParams,MenuDataService){
            var items=  [];
            var i=0;
            var promise =  MenuDataService.getItemsForCategory($stateParams.short_name).then(
              function(response){
                for(i=0;i<response.data.menu_items.length;i++){
                  items.push(response.data.menu_items[i]);
                }
                // console.log(items);
                return items;
              }
            );
            return items;
          }]
        }
      });
    }
  }
)();
