# floating-round-button
Floating Round Button

check [example](https://naturalintelligence.github.io/floating-round-button/)
### Sample
####HTML
```HTML
<div class="rbt_wrapper" ></div>
```

####Javascript
```javascript
var config = {
    main: {
        "bgcolor":"#e74c3c",
        "icon":"<i class='fa fa-bars'></i>",
        onClick: function(){
            console.log("applied");
        }
    },
    links:[
        {
            "url":"doceditor.html",
            "bgcolor":"#03A9F4",
            "color":"#fffff",
            "icon":"<i class='fa fa-file'></i>",
            "target":"_blank",
            "title" : "New Document",
            onClick: function(){
                navigateToLink("doceditor.html");
            }
        },{
            "url":"http://www.example.com",
            "bgcolor":"black",
            "color":"white",
            "icon":"<i class='fa fa-cog'></i>",
            "title" : "Settings"
        },{
            "url":"http://www.example.com",
            "bgcolor":"#3B5998",
            "color":"white",
            "icon":"<i class='fa fa-folder-open'></i>",
            "target":"_blank",
            "title" : "Open"
        }
    ]
}

$(document).ready(function(){
    rbt_display($(".rbt_wrapper"),config,(menu) => {
        menu.slideDown( "slow" );
    });
});
```

Implement `.sub_rbt` for CSS effects on menu item like: hover,animation etc.
