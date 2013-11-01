// Knockout Auto Scrolling Plugin
// (c) Jeremy Bao - bao1018@gmail.com
// License: MIT (http://www.opensource.org/licenses/mit-license.php)

ko.extenders.scrollTo = function (target, params) {
  target.subscribe(function(element) {
    try{
    if(element.constructor.name === 'Array') {
    var container = document.querySelector(params.containerSelector);
    var heightDiff = container.scrollHeight - container.clientHeight;
    if (container.scrollTop !== heightDiff) {
      // have to push our code outside of this thread since the text hasn't updated yet
      setTimeout(function () { container.scrollTop = heightDiff;}, 0);
    }
    }
    else if (element.constructor.name === 'String'){
        var container = document.querySelector(params.containerSelector); 
        var child_top = container.scrollTop + document.querySelector(element).offsetTop;
        var heightDiff = child_top - container.clientHeight;
       if (container.scrollTop !== heightDiff) {
      setTimeout(function () { container.scrollTop = heightDiff;}, 0);
    }
   else 
     console.log('Not a valid Knockout object; Exit!');
    }
    } catch(err){
      console.log(err);
    }

  });
  
  return target;
};