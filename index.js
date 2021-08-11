var ids = [];
var textboxes = [];
var values = [];
var on = true;

document.onkeypress = function(e) {
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
		
	
            }
			
	 if (on==true) {
            document.querySelectorAll("input").forEach(item => {
                    if (item.getAttribute("type") == "checkbox") {
                        item.click()
                    } else if (item.getAttribute("type") == "text") {
                        if (item.hasAttribute("id")) {
                                if (!ids.includes(item.getAttribute("id"))) {
                                    item.value = "asdasdasdasdasd"
                                    ids.push(item.getAttribute("id"))
                                }
                            }
                        }

                        else if (item.getAttribute("type") == "radio") {
                            var array = document.getElementsByName(item.getAttribute("name"));
                            var randomNumber = Math.floor(Math.random() * array.length);
                            array[randomNumber].click();
                        }
                    })
                }
				var bruh = document.querySelectorAll("input[type=submit]")
                if(bruh == true){
					bruh.click()
				}
			