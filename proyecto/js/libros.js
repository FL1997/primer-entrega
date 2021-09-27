
class Libro{

          constructor (id, titulo, descripcion,categoria , precio, stock, seccion) {
               this.id = id
               this.titulo=titulo
               this.descripcion=descripcion
               this.categoria=categoria
               this.precio=precio
               this.stock=stock
               this.seccion=seccion
               seccion=['newBook','mostSelledBook','recommendedBook']
          }
        
          asInnerHTMLForBooks() {
          
               return (
               `<div  id="book-${this.id}" >
                                   <img  class="pad-style"  src="./miniaturas/libro${this.id}.jpg" alt="">
                                   <br>
                                   <a  href="libro1.html"><span class="titulo">${this.titulo} </span></a>
                                   <br>
                                   <span class="Precio"  >$ ${this.precio}</span>
                              
                              </div>`
               )
          } 
          
         
          

          // asInnerHTMLForBookPage(){
               
          //      return (
          //           `<div>
          //                <h1>${this.title}</h1>

          //                     <img src="/css/images/libro${this.id}" alt="">

          //                     <span>{this.title}</span> 
          //                     <p id="descripcion">${this.descripcion}</p>

          //           </div>`)

          

     }    






