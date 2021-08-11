var ids = [];
var textboxes = [];
var values = [];
var on = true;
var zip = ""
var gender = "" // 1 for male 2 for female
var age = "24"
var year= "1996"
var none = false
var trick_question = false
var captcha = false
var weird_input = false
var state = "California" //Your State Here
var race = "Human" //Your race here.

trick_words= ["For","quality","control","purposes","please","select","robot","select"]
input_types = ["checkbox","radio","slider","dragndrop","limitcheckbox","limititem","100percent","text"]
form_list = [];





if(document.body.innerText.match(/zip/gi)){
	document.querySelectorAll("text").forEach( item => {
		item.value = zip								
	})
	document.querySelectorAll("[type=text]").forEach( item => {
		item.value = zip								
	})
	
}
									
if(document.body.innerText.match(/year/gi)){
		document.querySelectorAll("text").forEach( item => {
			item.value = year							
		})
		document.querySelectorAll("[type=text]").forEach( item => {
		item.value = year								
	})
}
									
if(document.body.innerText.match(/ age /gi) || document.body.innerText.match(/old/gi)){
		document.querySelectorAll("text").forEach( item => {
			item.value = age							
		})
		document.querySelectorAll("[type=text]").forEach( item => {
		item.value = age								
	})
}



for(i=0; i<trick_words; i++){
	if(document.body.search(trick_words[i])){
		trick_question = true;	
	}
	
	document.querySelectorAll("text").forEach( item => {
		item.value = zip								
	})
}



document.querySelectorAll("select").forEach( item => {
						item.selectedIndex = '9'
						})

document.onkeypress = function(e) {
		var i=0
        if (e.keyCode == 113) {
            if (on == false) {
                alert("Robofiller ON")
                on = true;
            }

            if (on == true) {
                alert("Robofiller OFF")
                on = false;
            }

        }
		
		if(!document.body.innerText.match(/none/gi) || document.body.innerText.match(/prefer/gi)){
							none = true
			}
			
			
		if(none){
			var x = document.querySelectorAll("[type=checkbox]")
			if(x.size != 1){
			for(i=0; i>x.size-1; i++){
				x[i].click();
			}
			}
		}
		
		else {
			var x = document.querySelectorAll("[type=checkbox]")
			for(i=0; i>x.size-1; i++){
				x[i].click();
			}
			}
			
		
			
			
        if (on==true) {
			
			document.querySelectorAll(".fir-icon").forEach( item => {

item.setAttribute("class","fir-icon selected")

})
			
            document.querySelectorAll("*").forEach(item => {
				
				if(item.childElementCount != 0){
					item.querySelectorAll("*").forEach(item => {
						item.querySelectorAll("*").forEach(thing => {
							stop = false;
							  if(!stop){
								var temp = thing.innerHTML;
								thing.click();
								if(temp != thing.innerHTML){
									form_list.push(item);
									stop = true;
								}
						}
						})
						
					})
				}
				 
				if(!none){
					if(item.getAttribute("type") == "checkbox"){
							item.click()
						}
				}
			
					if (item.getAttribute("type") == "text") {
                        if (item.hasAttribute("id")) {
                                if (!ids.includes(item.getAttribute("id"))) {
					
								
                                    ids.push(item.getAttribute("id"))
                                }
                            }
                        }

                        else if (item.getAttribute("type") == "radio") {
                            var array = document.getElementsByName(item.getAttribute("name"));
                            var randomNumber = Math.floor(Math.random() * array.length);
                            array[randomNumber].click();
                        }
						
						 else if (item.getAttribute("type") == "range") {
                            var array = document.getElementsByName(item.getAttribute("name"));
                            var randomNumber = Math.floor(Math.random() * array.length);
                            array[randomNumber].click();
                        }
						
		
                    })
                }
				/*
				if(!trick_question){
				var bruh = document.querySelector("input[type=submit]")
     				if(typeof(bruh) != 'undefined' && bruh != null){
					bruh.click()
				}
				document.getElementById("NextButton").click();
				}
				*/
            
}