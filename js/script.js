document.querySelector('#submit').addEventListener('click',function(){
    let cliente = document.querySelector('#nome').value;
    let endereço = document.querySelector('#email').value;
    let pedido = document.querySelector('#pedido').value;
    
   let url = "https://api.whatsapp.com/send?phone=5588994865303&text= Bem vindo a Mik's Milk -->> %0AQual é o seu nome? %0A " + cliente + "%0AQual o seu endereço? %0A "+ endereço +" %0AQual seu pedido? %0A" + pedido; 
   
   window.open(url);
   
   });