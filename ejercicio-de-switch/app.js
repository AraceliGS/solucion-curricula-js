//Preguntando al usuario
var answer = prompt("¿Cómo te sientes?");

//Comenzando switch
switch(answer){
  case 'feliz':
   alert('Sigue siendo feliz');
  break;
  case 'triste':
   alert('Todo pasa, nada es eterno');
  break;

  default:
   alert('Tu estado emocional es complicado');
}
