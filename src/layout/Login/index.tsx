import { FormEvent, FormEventHandler, ReactElement } from "react";
import m from "./index.module.scss";
import close from "../../assets/close.svg";
import union from "../../assets/Union.svg";
import Button from "../../components/Button";
import { Link, NavigateFunction, useNavigate } from "react-router";

function Login(): ReactElement {
    const navigate: NavigateFunction = useNavigate()

    const closeLogin: () => void = () => {
        navigate("/")
    }

    const formHandler: FormEventHandler = (e: FormEvent) => {
        e.preventDefault()
    }

    return (
        <aside className={m.aside} onMouseDown={closeLogin}>
            <div className={m.loginWrapper} onMouseDown={(e) => e.stopPropagation()}>
                <Link to="/">
                    <img src={close} alt="" className={m.loginWrapper__close} />
                </Link>
                <div className={m.contentWrapper}>
                    <div className={m.unionWrapper}>
                        <img src={union} alt="" />
                    </div>
                    <h2 className={m.contentWrapper__title}>Connexion</h2>
                    <p className={m.contentWrapper__para}>Connectez-vous grâce à votre adresse e-mail</p>
                    <form onSubmit={formHandler} className={m.form}>
                        <label htmlFor="email">adresse e-mail</label>
                        <input type="email" name="email" id="email" className={m.form__input} />
                        <Button content="Se connecter" type="full" />
                    </form>
                    <span className={m.contentWrapper__help}>Besoin d'aide ?</span>
                </div>
            </div>
        </aside>
    )
}

export default Login