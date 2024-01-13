/* use js minifier */
try {
document.hasFocus = function() {return true}; /* afk? */
let tableDiv = document.createElement('div');
document.head.appendChild(tableDiv);
tableDiv.style.position = "fixed";
tableDiv.id = "tableDiv"
this.charactersLearned = [];
const nothing = () => {};
var e = this.window.e
var f = this.window.f
let b = document.createElement("button"); /* actually a list of charactersLearned*/
function GetAudioanswer() {
   try {
       return document.querySelector('#answer-box').querySelector('.sound').getAttribute('path').split('words/')[1].split('-')[1];
   } catch (error) {
       return "";
   };
};


function GetChoicesInContextQuestion() {
   try {
       return document.querySelectorAll('.choice');
   } catch (err) {
       return [];
   };
};


function GetanswerChoiceInContextQuestion() {
   let e = null;
   try {
       let choices = GetChoicesInContextQuestion();
       choices.forEach((choice) => {
           if (choice.getAttribute("class").includes("answer")) {
               e = choice;
           };
       });
   } catch (err) {
       return null
   };
   return e;
};
let trainer = window.currentTrainer;
const CharactersLearnedHasCharacter = (character) => {
   charactersLearned.forEach(tbl => {
       if (tbl.character == character) {
           return true
       }
   });
   return false
}




function Correctanswer() {
   try {
       if (window.currentTrainer) {
           trainer = window.currentTrainer;
       }
       if (trainer) {
           try {
               if (trainer.currentQuiz) {


                   if (trainer.currentQuiz.timer) {
                       currentTrainer.currentQuiz.timer.startTimer = new Date()
                   }
               }
           } catch (errro) {};
           try {
               trainer.autoClickDetected = false;
               /*console.log(String(trainer.startTime))*/
               trainer.startTime = new Date()


           } catch (errr) {}


       }
       let answer = null;
       let ctxA = GetanswerChoiceInContextQuestion();
       let audioA = GetAudioanswer();
       answer = ctxA || audioA;
       try {
           try {
               nothing(answer.textContent); /* make sure its an element lol (this is a bad way) */
               let def = document.querySelector('.def-text').textContent
               let ans = answer.textContent;
               let pronounce = document.querySelector('#orthoepy').textContent;
               let word = document.querySelector('.wordform').textContent;
               let wordTreeLink = `https://cdn1.membean.com/public/data/wnjson2w/${word}.json`
               word = word.replaceAll("↵", "");
               pronounce = pronounce.replaceAll("↵", "");
               ans = ans.replaceAll("↵", "");
               def = def.replaceAll("↵", "")
               let data = {
                   definition: def,
                   answerOption: ans,
                   pronounce: pronounce,
                   character: word,
                   wordTreeLink: wordTreeLink
               };
               //console.log(data)
               if(!CharactersLearnedHasCharacter(word)) {
                   charactersLearned.push(data);
               };
           } catch (err) {}
           answer.click();
       } catch (err) {
           try {
               if (answer) {
                   if (typeof(answer) != "string") {
                       answer.children[0].click();
                   } else {
                       try {
                           document.querySelector("#answer-box").querySelector("input").value = answer;
                       } catch (er) {}
                   }
               }
           } catch (err) {}
       };
       try {
           document.querySelector('#next-btn').click();
       } catch (error) {}
   } catch (erre) {};
   if (window.currentTrainer) {
       window.currentTrainer = trainer;
   };
};
if (f) {
   clearInterval(f);
};
if (e) {
   if (f) {
       clearInterval(f);
   };
   clearInterval(e);
   this.window.e = setInterval(Correctanswer, 2000);
   console.log(e);
   this.window.f = setInterval(() => {
       if (window.currentTrainer) {
           try {
               window.currentTrainer.currentQuiz.callback.correct();
           } catch (errror) {}
       }
   }, 2000)


} else {
   if (f) {
       clearInterval(f);
   };
   if (e) {
       clearInterval(e);
   };
   this.window.e = setInterval(Correctanswer, 2000);
   this.window.f = setInterval(() => {
       if (window.currentTrainer) {
           try {
               window.currentTrainer.currentQuiz.callback.correct();
           } catch (errror) {}
       }
   }, 2000)
   console.log(e);
   console.log(f)
};


   if(!window.ea) {
       window.ea = document.createElement("button");
   }; 
   try {
   document.body.appendChild(ea);
   }catch(err) {console.warn("ea", err)}
   ea.id = "listofwordsbutton";
   /*if(!window.img) {
   window.img = document.createElement("img");
   document.body.appendChild(img);
   };
   img.outerHTML = `<img src="data:image/png;base64,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" alt="" />`;
   e.appendChild(img);
   img.id = "lowb2"
   */
   if(!window.ej) {
       window.ej = document.createElement('style');
   };
   if(!window.tablaaa) {
       window.tablaaa = document.createElement('table');
   };
   try {
   tableDiv.appendChild(tablaaa);
   }catch(err) {console.warn("tablaaa", err)}
  
   tablaaa.id = "words82";
   tablaaa.innerHTML = `
   <tr>
       <th id="bje24">Character</th>
       <th id="bje24">Definition</th>
       <th id="bje24">Pronouncing</th>
       <th id="bje24">Word Tree Link</th>
       <th id="bje24">Answer Option</th>
  
      
   </tr>
   `;
  
   /*
   let data = {
                       definition: def,
                       answerOption: ans,
                       pronounce: pronounce,
                       character: word,
                       wordTreeLink: wordTreeLink
                   };
   */
   /*
       <th id="bje24">Character</th>
       <th id="bje24">Definition</th>
       <th id="bje24">Pronouncing</th>
       <th id="bje24">Word Tree Link</th>
       <th id="bje24">Answer Option</th>
   */
   let lastTableItems = [];
   const CharactersLearnedHasCharacter2 = (data) => {
       lastTableItems.forEach(tbl => {
           if (tbl.character == data.character) {
               return true
           }
           if(tbl.pronounce == data.pronounce) {
               return true
           }
       });
       return false
   }
   function UpdateTable(items) {
       if(tablaaa) {
           lastTableItems.forEach((elem) => {try {elem.remove()} catch(err) {console.log(err)}});
           items.forEach(data => {
               let def = data.definition;
               let answerd = data.answerOption;
               let pronounce = data.pronounce;
               let char = data.character;
               let wordTree = data.wordTreeLink;


               if(CharactersLearnedHasCharacter2(data) == false) {
               let ga = document.createElement("tr");
               let create = true;
               ga.innerHTML = `
               <td id="char_001">${char}</td>
               <td id="def_001">${def}</td>
               <td id="pronounce_001">${pronounce}</td>
               <td id="word_001">${wordTree}</td>
               <td id="answer_001">${answerd}</td>
               `;
              
               try {
               let a = ch = tablaaa.children;
               a = Array.prototype.slice.call(a);
               a.forEach((elem, i) => {
                   let cha = elem.querySelector("#char_001")
                   let de = elem.querySelector("#def_001");
                   if(de) {
                       if(de.textContent == def) {
                           create = false;
                       }
                   }
                   if(cha) {
                       if(cha.textContent == char) {
                           create = false;
                       }
                   }
               })
               if(create) {
               tablaaa.appendChild(ga);
               }
               }catch(err) {console.log("EEEEEEA")};
               try {
                   if(create) {
               lastTableItems.push(ga);
                   }
               }catch(err) {console.log("FFFGGGGGGG")}
           }
  
           });
       };
  
   };
   ej.innerHTML = `
   #words82 {
       border-radius: 10px;
       font-family: monospace;
       border: 0.2px solid #dddddd;
       position: fixed;
       top: 25px;
       left: 75px;
       transition: all 1s;
       z-index: 100000000;
   }
   #tableDiv {
       position: fixed;
       top: 25px;
       left: 60px;
       width: 100%;
       padding: 10px;
       height: 200px;
       border-radius: 10px;
       color: black;
       opacity: 0.8;
       transition: all 1s;
   }
   #bje24 {
       border: 0.45px solid #dddddd;
       text-align: left;
       transition: all 1s;
       font-family: monospace;
       border-radius: 10px;
       padding: 8px;
       z-index: 100000000;


   }
   th {
       border: 0.45px solid #dddddd;
       text-align: left;
       transition: all 1s;
       font-family: monospace;
       border-radius: 10px;
       padding: 8px;
       z-index: 100000000;


   }
   #lowb2  {
       border-radius: 5px;
       font-family: monospace;
       width: 50px;
       height: 50px;
       transition: all 0.5s;
       font-size: 25px;
       z-index: 100000000;


   }
   #listofwordsbutton:before {
       content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsSAAALEgHS3X78AAAA6UlEQVRIie2WSwrCMBRFT2xdgj/EuT/QiaADRzpwD25FJ67PbkIH7sDPSFGuUKJFQ9WI9sLllds+ThvSJJAp0wcVyHYWpnDAN2sq29kCmAFzB8/UN02C5VR7wFHuKxvGsjQeWKyLjGoJWMoVZTUgAjbAClg7eKW+CKharBv4dULE3y4PlIGiowvqC5OgNjx+nfiwo8yzN18FfCij2gCa1lCfswkwAsYOHqmvkfQxV0Ad2MktZV1gn3JGH4C2xboL3sbAnXeCvQ2118nl7XcyqqEWjI8sIMbXkpnztUl42xa/QsHfHX0y/ZZOU56O0FZCArAAAAAASUVORK5CYII=);
   }
   #listofwordsbutton  {
        border-radius: 10px;
        font-family: monospace;
        width: 50px;
        z-index: 100000000;
        top: 10px;
        left: 20px;
        position: fixed;
        height: 50px;
        transition: all 0.5s;
        font-size: 25px;
   }
   #listofwordsbutton:hover {
       filter: blur(0.5px) brightness(0.5);
       font-size: 27px;
   }
   #listofwordsbutton:active {
       filter:blur(1px) brightness(0.4);
   }
   `;
   try {
   document.head.appendChild(ej);
   }catch(err) {console.warn('ej:', err)}
   ea.onclick = function(event) {
       if(tableDiv.parentElement != document.body) {
           document.body.appendChild(tableDiv);
       } else {
           document.head.appendChild(tableDiv)
       }
   };
   setInterval(() => {
       UpdateTable(charactersLearned);
}, 500)
}catch(err) {console.warn(err)}

