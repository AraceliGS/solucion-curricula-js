//Asegurate de que el usuario está listo para jugar.
confirm("¡Estoy listo para empezar!");
//Pregunta por la edad del usuario.
var edad = prompt("¿Cuántos años tienes?");
// Pon una condición
if( edad < 13)
{
    confirm("Puedes jugar, pero bajo tu propia responsabilidad.");
}
else
{
    confirm("¡Diviértete! Ya puedes empezar a jugar");
}
// Crea tu historia
document.write("Ves a Messi caminando por la calle Florida. Está disfrazado y vos sos la única persona que lo reconoce. A su lado camina un guardaespaldas con cara de pocos amigos. Caminás hacia él.");
document.write("Te acercás a Messi. El guardaespaldas te mira con odio.");
//Pregúntale al usuario si está animado a jugar.
var respuestaUsuario = prompt("¿Te animás a enfrentarte al guardaespaldas?");
//Pon otra condición
if (respuestaUsuario ==="Sí")
{
    document.write("El guardaespaldas se ríe. ¡Solo te quería asustar! Claro que podés sacarte una foto con la pulga. ¡Sonrían!");
}
else
{
    document.write("¡Qué lástima! No conseguiste una foto con Messi para subir a tu muro de Facebook.");
}
//Pídele que califique el juego.
var opinion = prompt("¿Cómo calificas al juego en una escala del 1 al 10?");
//Pon una condición
if (opinion > 8)
{
    alert("Este es solo el primero de mis juegos. Si querés ver más, ¡No te desconectes!");
}
else
{
     alert("¿Me maté haciendo este juego para que me des esa calificación?! ¡Es el colmo!");
}
