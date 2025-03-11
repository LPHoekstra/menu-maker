import { useContext } from "react"
import Modal from "./components/Modal"
import Footer from "./layout/Footer"
import Header from "./layout/Header"
import Login from "./layout/Login"
import Home from "./pages/Home"
import "./styles/main.scss"
import { ModalContext } from "./context"

function App() {
  const modal = useContext(ModalContext)

  return (
    <>
      {modal?.modalIsOpen &&
        <Modal>
          <Login />
        </Modal>
      }
      <Header />
      <Home />
      <Footer />
    </>
  )
}

export default App
