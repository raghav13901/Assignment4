(
  function(){
    angular.module("data")
    .component("category",{
      template:"categories.component.html",
      bindings:{
        items:"<"
      }
    });
  }
)();
