(
  function(){
    angular.module("data")
    .controller("categoryList",categoryList);
    categoryList.$inject= ["items"];
    function categoryList(items){
      var list = this;
      list.items = items;
    }
  }
)();
