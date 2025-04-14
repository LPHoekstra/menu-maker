import { FormEvent, FormEventHandler, ReactElement, useState } from "react";
import m from "./index.module.scss";
import close from "../../assets/close.svg";
import union from "../../assets/Union.svg";
import letter from "../../assets/letter.svg";
import check from "../../assets/check.svg";
import Button from "../../components/Button";
import { Link, NavigateFunction, useNavigate } from "react-router";
import Loaders from "../../components/Loaders";
import apiUser from "../../api/apiUser";

function Login(): ReactElement {
    const navigate: NavigateFunction = useNavigate()
    const [isEmailSent, setIsEmailSent] = useState<boolean>(false)
    const [isEmailConfirmed, setIsEmailConfirmed] = useState<boolean>(false)
    const [error, setError] = useState<string>("")

    const closeLogin: () => void = () => {
        navigate("/")
    }

    const formHandler: FormEventHandler<HTMLFormElement> = async (e: FormEvent) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        const emailInput = form.elements.namedItem("email") as HTMLInputElement

        const regExpEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (!regExpEmail.test(emailInput.value)) {
            setError("Email invalide")
            return
        }

        const jsonEmail = JSON.stringify(emailInput.value)

        try {
            const response = await apiUser.login(jsonEmail)

            if (response.httpStatus === 200) {
                setIsEmailSent(true)
            }
        } catch (e) {
            console.error(e)
            // an error msg must be used instead of a static message
            setError("error")
        }

        // check if the token is added in cookie
        // then redirect to the dashboard

        // simulate a token
        if (localStorage.getItem("token")) {
            setIsEmailConfirmed(true)
        }
    }

    // refactor for a better read ?
    return (
        <aside className={m.aside} onMouseDown={closeLogin}>
            <div className={m.loginWrapper} onMouseDown={(e) => e.stopPropagation()}>
                <Link to="/">
                    <img src={close} alt="" className={m.loginWrapper__close} />
                </Link>
                {/* if email is not confirmed, render the content. otherwise it show the success icon */}
                {!isEmailConfirmed ?
                    <div className={m.contentWrapper}>
                        <div className={m.iconWrapper}>
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
                                    {error && <span className={m.form__error}>{error}</span>}
                                    <Button content="Se connecter" type="full" />
                                </form>
                            </>
                            :
                            <>
                                <h2 className={m.contentWrapper__title}>Confirmez votre e-mail</h2>
                                <Loaders />
                            </>
                        }
                        <a href="mailto:mockedEmail.contact@menu-maker-qwenta.com " className={m.contentWrapper__help}>Besoin d'aide ?</a>
                    </div>
                    :
                    <div className={`${m.iconWrapper} ${m.iconWrapper_success}`}>
                        <img src={check} alt="" />
                    </div>
                }
            </div>
        </aside>
    )
}

export default Login