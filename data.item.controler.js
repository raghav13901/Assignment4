(
  function(){
    angular.module('data')
    .controller('itemsList',itemsList);
    itemsList.$inject= ['item'];
    function itemsList(item){
      var list = this;
      list.items = item;
      // console.log(item);
    }
  }
)();
