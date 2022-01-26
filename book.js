// OOPs Approach ES6

// ------------------------- varible declarations--------------------------
const add_btn = document.querySelector('.add-btn')
const model = document.querySelector('.modal')
const hide_modal = document.querySelector('.hide-modal-btn')
const book_title= document.querySelector('.book-title')
const add_book_btn=document.querySelector('.add-book-btn')
const container = document.querySelector('.container')
let delete_keys = document.querySelectorAll('.cross-btn')
const id_value=1
let book_ctn;

let books=[];
// -------------------------END OF variable declaration-------------------------

// -----------------------------classes-------------------------------
class B{

    setBooks(){
        if(localStorage.getItem("books1")){
            books = JSON.parse(localStorage.getItem("books1"))
    
        }
        
        this.BuildUi(books)
    }

    static delete_book_from_local(bname){

        localStorage.getItem("books")
        books = JSON.parse(localStorage.getItem("books1"));
        for(let i=0;i<books.length;i++){
            if(books[i].title==bname){
             //    books.pop(books[i]);
     
                 // localStorage.removeItem(key);
     
                 const index = books.indexOf(books[i]);
                 if (index > -1) {
                     books.splice(i, 1); // 2nd parameter means remove one item only
     
                 }
                localStorage.setItem("books1",JSON.stringify(books))
                 // console.log(localStorage.getItem("books1"))
     
            }
     
        }
        
     
        
     
     
     }

     

    BuildUi(books){

        container.innerHTML="";
        books.forEach((book)=>{
            book_ctn = document.createElement('div')
            book_ctn.classList.add('book')
            const book_name = document.createElement('h2')
            book_name.classList.add("book-name")
            book_name.innerText=book.title
    
            const icon = document.createElement('img')
            icon.classList.add("cross-btn")
    
            icon.setAttribute('id',Math.floor(Math.random() * 100) + 1)
            icon.setAttribute('src',"cross.png")
            book_ctn.append(book_name,icon)
            container.append(book_ctn)
        })
        delete_keys = document.querySelectorAll('.cross-btn')
        console.log(delete_keys);
        delete_keys.forEach(function(key){

            console.log(key);


            key.addEventListener('click',function(event){
                // console.log(event.target.classList[0])
                console.log(event.srcElement.id)
                let id= event.srcElement.id;
                let inner=document.getElementById(id);
                let bname=inner.parentNode.querySelector('.book-name').textContent;
                console.log(bname);
                B.delete_book_from_local(bname);
            
              
            
                inner.parentNode.parentNode.removeChild(inner.parentNode);
                
                
            
                console.log("clicked")
            })
    
        })
    }


    fetchBookTitle(event){
    

        // event.preventDefault();
        
        const book ={
            title:book_title.value
        }
        books.push(book)
        localStorage.setItem("books1",JSON.stringify(books))
        console.log(localStorage.getItem("books1"));
        setBooks();
        book_title.value="" ;
        
        
    }

    
     
     // let books=[];
     showModal(){
          model.classList.add('show-modal')  
     }
     hideModal(){
         model.classList.remove('show-modal')
     }
     



}


// -----------------------------END of classes-------------------------------


// Creating object of class and calling methods

let obj_b=new B();
// here the everything should be rendered including the Localstorage items..

obj_b.setBooks();  // 1st Function to be called.

// ---------------------------------------------------------------------





// the eventlistiners

add_book_btn.addEventListener('click',obj_b.fetchBookTitle);
hide_modal.addEventListener('click',obj_b.hideModal);
add_btn.addEventListener('click',obj_b.showModal);



