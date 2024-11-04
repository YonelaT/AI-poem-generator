function generatePoem(event)
{
    event.preventDefaault();
    new Typewriter('#h1', {
        strings: "let me not to the marriage of true love",
        autoStart: true,
        cursor:"",
        delay:30,
      });
    }
let poemElement=document.querySelector("#poem-generator-form");
poemElement.addEventListener("submit",generatePoem);