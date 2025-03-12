import { FormEvent, FormEventHandler, ReactElement, useState } from "react";
import m from "./index.module.scss";
import close from "../../assets/close.svg";
import union from "../../assets/Union.svg";
import letter from "../../assets/letter.svg";
import check from "../../assets/check.svg";
import Button from "../../components/Button";
import { Link, NavigateFunction, useNavigate } from "react-router";
import Loaders from "../../components/Loaders";

function Login(): ReactElement {
    const navigate: NavigateFunction = useNavigate()
    const [isEmailSent, setIsEmailSent] = useState<boolean>(false)
    const [isEmailConfirmed, setIsEmailConfirmed] = useState<boolean>(false)

    const closeLogin: () => void = () => {
        navigate("/")
    }

    const formHandler: FormEventHandler = (e: FormEvent) => {
        e.preventDefault()

        setIsEmailSent(true)
        setIsEmailConfirmed(true)
    }

    return (
        <aside className={m.aside} onMouseDown={closeLogin}>
            <div className={m.loginWrapper} onMouseDown={(e) => e.stopPropagation()}>
                <Link to="/">
                    <img src={close} alt="" className={m.loginWrapper__close} />
                </Link>
                {/* if email is not confirmed, render the content. otherwise it show the success icon */}
                {!isEmailConfirmed ?
                    <div className={m.contentWrapper}>
                        <div className={m.unionWrapper}>
                            <img src={!isEmailSent ? union : letter} alt="" />
                        </div>
                        {/* if email is not sent, render the connexion form. otherwise it show the confirmation loaders */}
                        {!isEmailSent ?
                            <>
                                <h2 className={m.contentWrapper__title}>Connexion</h2>
                                <p className={m.contentWrapper__para}>Connectez-vous grâce à votre adresse e-mail</p>
                                <form onSubmit={formHandler} className={m.form}>
                                    <label htmlFor="email">adresse e-mail</label>
                                    <input type="email" name="email" id="email" autoComplete="email" className={m.form__input} />
                                    <Button content="Se connecter" type="full" />
                                </form>
                            </>
                            :
                            <>
                                <h2 className={m.contentWrapper__title}>Confirmez votre e-mail</h2>
                                <Loaders />
                            </>
                        }
                        <span className={m.contentWrapper__help}>Besoin d'aide ?</span>
                    </div>
                    :
                    <div className={`${m.unionWrapper} ${m.unionWrapper_success}`}>
                        <img src={check} alt="" />
                    </div>
                }
            </div>
        </aside>
    )
}

export default Login