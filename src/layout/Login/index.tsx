import { ReactElement, useContext } from "react";
import m from "./index.module.scss";
import close from "../../assets/close.svg";
import union from "../../assets/Union.svg";
import Button from "../../components/Button";
import { ModalContext } from "../../context";

function Login(): ReactElement {
    const modal = useContext(ModalContext)

    const closeModal = () => {
        modal?.setModalIsOpen(false)
    }

    return (
        <div className={m.loginWrapper}>
            <img src={close} alt="" className={m.loginWrapper__close} onClick={closeModal} />
            <div className={m.contentWrapper}>
                <div className={m.unionWrapper}>
                    <img src={union} alt="" />
                </div>
                <h2 className={m.contentWrapper__title}>Connexion</h2>
                <p className={m.contentWrapper__para}>Connectez-vous grâce à votre adresse e-mail</p>
                <div className={m.inputWrapper}>
                    <label htmlFor="email">adresse e-mail</label>
                    <input type="email" name="email" id="email" className={m.inputWrapper__input} />
                </div>
                <Button content="Se connecter" type="full" additionnalClass={m.inputWrapper__btn} />
                <span className={m.contentWrapper__help}>Besoin d'aide ?</span>
            </div>
        </div>
    )
}

export default Login