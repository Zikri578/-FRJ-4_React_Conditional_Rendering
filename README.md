# -FRJ-4_Conditional_Rendering

Apa itu Conditional Rendering?
- Conditional Rendering merupakan sebuah state untuk menentukan component mana yang akan dirender. ada beberapa bentuk conditional rendering yang bisa digunakan yaitu : 
  1. If
  2. If dan Else
  3. tenary operator (simbolnya : ?)
  4. logical and (simbolnya : &&)

Sumber : https://devsaurus.com/react-conditional-rendering-list

Contoh penggunaan Conditional Rendering yaitu : 

        //File index.css
        .modal{
            width: 100vw;
            height: 100vh;
            background-color: lightgray;
            color: black;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: fixed;
            top: 0;
            left: 0;
        }
        .modal_close{
            width: 100vw;
            height: 100vh;
            background-color:goldenrod;
            color: black;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: fix;
            top: 0;
            left: 0;
        }

        // letak File : App.jsx
        import React from 'react'

        //merupakan component yang bernama App
        export default function App() {

          //membuat state
          const [modal, setModal] = useState(false);

          const handleModal = () => {
             setModal(!modal);
          }



          //bagian ini merupakan JSX
          return(
            <div>
              {modal && (
                  <div className="modal">
                      <h1>Selamat Datang !</h1>
                      <button onClick={handleModal}> Close Modal !</button>
                  </div>
              )}

              <div className="close_modal">
                  <h1>React JS - Conditional Rendering</h1>
                  <button onClick={handleModal}> Open Modal !</button>
              </div>

            </div>
          )

        }
