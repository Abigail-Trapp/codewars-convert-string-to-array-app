function stringToArray(string){
    return string.split(' ')
      // code code code
    
    }
  let button = document.getElementById("button")
  button.addEventListener("click", submit)

  function submit(event){
    event.preventDefault();
    
let form = document.querySelector("form")
   let result = document.getElementById("result_input").value;
  let output = document.createElement("div")
  output.innerHTML = `[${stringToArray(result)}]`
  form.append(output)
  }