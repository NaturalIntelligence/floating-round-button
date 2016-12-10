
/*
======================================================
=            RBT : Floating Round Button             =
======================================================
*/
/*
 * Copyright 2016 Amit Gupta
 * Released under the MIT license
 * https://github.com/NaturalIntelligence/floating-round-button/blob/master/LICENSE
 *
 * @author: Amit Gupta
 */

function rbt_display(el, config, postAction){
	if(!el || !config || !config.main || !config.links){
		throw new Error("Floating RBT: Invalid element or data");
	}else{
	    main_btn = config.main;
	    color_style = (main_btn.color)? "color:"+main_btn.color+";" : "";
	    bg_color_style = (main_btn.bgcolor)? "background-color:"+main_btn.bgcolor+";" : "";
	    main_btn_dom = "<button data-link-href='"+((main_btn.url)?main_btn.url:"")+"' data-link-target='"+((main_btn.target)?main_btn.target:"")+"' class='rbt_main_btn' style='"+bg_color_style+"'><span style='"+color_style+"'>"+main_btn.icon+"</span></button>";
	   
	    sub_rbt = "";
	    for (var i = 0; i < config.links.length; i++) {
	        color_style = (config.links[i].color)? "color:"+config.links[i].color+";" : "";
	        bg_color_style = (config.links[i].bgcolor)? "background-color:"+config.links[i].bgcolor+";" : "";

	        sub_rbt += "<div><button id='sub_rbt_btn_"+i+"' data-link-title='"+config.links[i].title+"' data-link-href='"+(config.links[i].url?config.links[i].url:"")+"' data-link-target='"+((config.links[i].target)?config.links[i].target:"")+"' class='sub_rbt' style='"+bg_color_style+"'><span style='"+color_style+"'>"+config.links[i].icon+"</span></button></div>";
	        
	    };
	    sub_rbt = "<div class='sub_rbt_wrapper'>"+sub_rbt+"</div>";
	    el.append(sub_rbt).append(main_btn_dom);

	    rbt_registerEvents(config);
	    if(postAction){
	    	postAction($(".sub_rbt_wrapper"));
	    }
	}
}

function rbt_registerEvents(config){
	rbt_click($(".rbt_main_btn"),function(){
		if(config.main.onClick){
			config.main.onClick($(this));
		}
		$(".sub_rbt_wrapper").toggleClass('show');
	});
	
	for (var i = 0; i < config.links.length; i++) {
		rbt_click($("#sub_rbt_btn_"+i),config.links[i].onClick);
	}
	
	$(window).click(function() {
		$(".sub_rbt_wrapper").removeClass('show');
	});
	/*$(window).focusout(function() {
		$(".sub_rbt_wrapper").removeClass('show');
	});*/
}

/*
On click 1) open link, 2) onClick callback
*/
function rbt_click(el,action){
	el.click(function(e){
		e.stopPropagation();
		if ($(this).attr('data-link-href').length > 0){
		    if ($(this).attr('data-link-target')){
		        window.open($(this).attr('data-link-href'), $(this).attr('data-link-target'));
		    }else{
		        window.location.href = $(this).attr('data-link-href');
		    }
		}
		if(action){
	    	action($(this));
	    }
	});
}