const form = document.getElementById("form")

let validate = false

const printAlert = (message, element) =>{
   const alert = document.createElement("P")
   alert.classList.add("form__error")
   alert.textContent = message

   element.insertAdjacentElement("afterend", alert)
}

const validateForm = element =>{
      if(!element.value.trim().length > 0 || element.value == null){
         element.classList.add("form_input_error")
         !element.nextElementSibling.classList.contains("form__error") && printAlert(" can'nt' be empty", element)
   

         validate = false
      }else{
         element.classList.remove("form_input_error")
         if(element.nextElementSibling.classList.contains("form__error")){
            element.nextElementSibling.remove()
         }   
         validate = true
      }

   
}

form.addEventListener("submit", e =>{
   e.preventDefault()

   validateForm(form.firstname)
   validateForm(form.lastname)
   validateForm(form.email)
   validateForm(form.password)

   validate && form.reset()
})