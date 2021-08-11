var ids = [];
var textboxes = [];
var values = [];
var on = true;
var auto_advance = false;
var zip = ""
var gender = "1" // 1 for male 2 for female
var age = "24"
var year= "1996"
var none = false
var trick_question = false
var captcha = false
var weird_input = false
var state = "California" //Your State Here
var race = "Human" //Your race here.
var generation_count =1;

trick_words= ["For","quality","control","purposes","please","select","robot","select"]
input_types = ["container","checkbox","radio","slider","dragndrop","limitcheckbox","limititem","100percent","text"]


containers = []
all_forms = []
inputs = []
radios = []
sliders = []
dragndrop = []
limitcheckbox = []
textboxes = []




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

            else if (on == true) {
                alert("Robofiller OFF")
                on = false;
            }

        }
		 if (e.keyCode == 114) {
            if (auto_advance == false) {
                alert("Robofiller ON")
                auto_advance = true;
            }

            else if (auto_advance == true) {
                alert("Robofiller OFF")
                auto_advance = false;
            }

        }
		
		
		
		if(!document.body.innerText.match(/none/gi) || document.body.innerText.match(/prefer/gi)){
							none = true
			}
			
			
		if(none){
			var x = document.querySelectorAll("[type=checkbox]")
			if(x.length != 0){
			if(x.length != 2){
			for(i=0; i>x.length-2; i++){
				x[i].click();
			}
			}
			else {
				x[0].click()
				
			}
			}
		}
		
		else {
			var x = document.querySelectorAll("[type=checkbox]")
			if(x.length != 0){
			for(i=0; i>x.length-1; i++){
				x[i].click();
			}
			}
		}
		
			
			
        if (on==true) {
			
			document.querySelectorAll(".fir-icon").forEach( item => {

item.setAttribute("class","fir-icon selected")

})
			
            document.querySelectorAll("body *").forEach(item => {
				 
				if(!none){
				
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
						else {
						if(item.childElementCount == 0){
							
							if(!item.hasAttribute("href")){
								console.log(item.innerHTML)
								item.click()
								inputs.push()
							}
							
							
						}
						
						else if((item.childElementCount == 1) || (item.tagName != "FORM") ){
							
						 containers.push(item)
						}
						
						else {
                            all_forms.push(item)							
							
							
						}
						
						
						
					}
				}
                    })
					
					
					
					
                }
				
				if(!trick_question){
					if(auto_advance){
				var bruh = document.querySelector("[type=submit]")
     				if(typeof(bruh) != 'undefined' && bruh != null){
					bruh.click()
				}
				document.getElementById("NextButton").click();
					}
				}
				
}