var zip = "92336"
var gender = "1" // 1 for male 2 for female
var age = "99"
var year= "1996"
var none = false
var trick_question = false
var captcha = false
var weird_input = false
var state = "State" //Your State Here
var race = "human" //Your race here.
form_list = []


document.querySelectorAll("*").forEach( item => 
{
if(!item.hasAttribute("href")){
	item.click();
}

})