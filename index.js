 
function displayPoem(response){
    new Typewriter('#h1', {
        strings: response.data.answer,
        autoStart: true,
        cursor:"",
        delay:30,
      });
}
function generatePoem(event)
{
    event.preventDefaault();
    let instructionInput=document.querySelector("#user-instructions")
 
    let apiKey="ae3df4fe6d37bc70o28te4b4ca16cf4e"
    let prompt=`Generate an English about love ${instructionInput.value}`;
    let context=`Generatean english poem then add <br> between sentences and then  sign with <strong>SheCodes AI</strong> at the bottom`;
    let apiURL=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`
    
    axios.get(apiURL).then(displayPoem);

   
    }
let poemElement=document.querySelector("#poem-generator-form");
poemElement.addEventListener("submit",generatePoem);