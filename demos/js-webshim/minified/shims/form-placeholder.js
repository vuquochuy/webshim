(function(b){if(!b.support.placeholder){var h=function(d,e,a,c,f){if(!c){c=b.data(d,"placeHolder");if(!c)return}if(f=="focus"||!f&&d===document.activeElement)c.box.removeClass("placeholder-visible");else{if(e===false)e=b.attr(d,"value");if(e)c.box.removeClass("placeholder-visible");else{if(a===false)a=b.attr(d,"placeholder");c.box[a&&!e?"addClass":"removeClass"]("placeholder-visible")}}},n=function(d){d=b(d);var e=d.attr("id"),a=!!(d.attr("title")||d.attr("aria-labeledby"));if(!a&&e)a=!!b('label[for="'+
e+'"]',d[0].form)[0];return b(a?'<span class="placeholder-text"></span>':'<label for="'+(e||b.webshims.getID(d))+'" class="placeholder-text"></label>')},l=function(){var d=/\n|\r|\f|\t/g,e={text:1,search:1,url:1,email:1,password:1,tel:1};return{create:function(a){var c=b.data(a,"placeHolder");if(c)return c;c=b.data(a,"placeHolder",{text:n(a)});c.box=b(a).wrap('<span class="placeholder-box placeholder-box-'+(a.nodeName||"").toLowerCase()+'" />').bind("focus.placeholder blur.placeholder",function(j){h(this,
false,false,c,j.type)}).parent();c.text.insertAfter(a).bind("mousedown.placeholder",function(){h(this,false,false,c,"focus");a.focus();return false});b.each(["Left","Top"],function(j,g){var i=(parseInt(b.curCSS(a,"padding"+g),10)||0)+Math.max(parseInt(b.curCSS(a,"margin"+g),10)||0,0)+(parseInt(b.curCSS(a,"border"+g+"Width"),10)||0);c.text.css("padding"+g,i)});b.curCSS(a,"lineHeight");var f={width:b(a).width(),height:b(a).height()},k=b.curCSS(a,"float");b.each(["lineHeight","fontSize","fontFamily",
"fontWeight"],function(j,g){var i=b.curCSS(a,g);c.text.css(g)!=i&&c.text.css(g,i)});f.width&&f.height&&c.text.css(f);k!=="none"&&c.box.addClass("placeholder-box-"+k);return c},update:function(a,c){if(e[b.attr(a,"type")]||b.nodeName(a,"textarea")){if(b.nodeName(a,"input"))c=c.replace(d,"");var f=l.create(a);a.setAttribute("placeholder",c);f.text.text(c);h(a,false,c,f)}}}}();b.webshims.attr("placeholder",{elementNames:["input","textarea"],setter:function(d,e){l.update(d,e)},getter:function(d){return d.getAttribute("placeholder")||
""}});var m={elementNames:["input","textarea"],setter:function(d,e,a){var c=d.getAttribute("placeholder");c&&"value"in d&&h(d,e,c);a()},getter:true};b.webshims.attr("value",m);var o=b.fn.val;b.fn.val=function(d){d!==undefined&&this.each(function(){this.nodeType===1&&m.setter(this,d,b.noop)});return o.apply(this,arguments)};b.webshims.addReady(function(d,e){b("input[placeholder], textarea[placeholder]",d).add(e.filter("input[placeholder], textarea[placeholder]")).attr("placeholder",function(a,c){return c})})}})(jQuery);
