# Knockout ScrollTo

A Auto Scrolling Plugin for KnockoutJS

##  Get Started
1. Pull down the code from https://github.com/bao1018/KnockoutScrollTo.git
2. Include knockout and Knockout ScrollTo in your code
<pre>
<script type="text/javascript" src='knockout.js'></script>
<script type="text/javascript" src='knockout-scroll-to.js'></script>
</pre>
3. If you want to observe a array change, if will scroll the last element if you append a element to that array
<pre>
ko.observableArray().extend({scrollTo: {containerSelector: 'container_selector'}})
</pre>
If you want to observe a variable change, the vairable should be the selector of the target element yyou want to scroll to
<pre>
ko.observable().extend({scrollTo: {containerSelector: 'container_selector'}})
</pre>
## Example
See how to use it in example folder

## License

MIT license - [ http://www.opensource.org/licenses/mit-license.php]( http://www.opensource.org/licenses/mit-license.php)

## TODO
1. Add animation support
2. Improve the array observe feature
...








