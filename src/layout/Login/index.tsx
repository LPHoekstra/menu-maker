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
import { getCookie } from "../../utils/function";

function Login(): ReactElement {
    const navigate: NavigateFunction = useNavigate()
    const [isEmailSent, setIsEmailSent] = useState<boolean>(false)
    const [isEmailConfirmed, setIsEmailConfirmed] = useState<boolean>(false)
    const [error, setError] = useState<string>("")

    const closeLogin: () => void = () => {
        navigate("/")
    }

    const handleVisibilityChange = () => {
        if (document.visibilityState === "visible") {
            const isConnectedCookie: string | undefined = getCookie("isConnected")
            if (isConnectedCookie) {
                setIsEmailConfirmed(true)

                const timeout = setTimeout(() => {
                    navigate("/dashboard")

                    document.removeEventListener("visibilitychange", handleVisibilityChange)
                }, 1000)

                return () => {
                    clearTimeout(timeout)
                    document.removeEventListener("visibilitychange", handleVisibilityChange)
                }
            }
        }
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
            setIsEmailSent(true)

            await apiUser.login(jsonEmail)

            // check every 5 sec if cookie are here ?
            document.addEventListener("visibilitychange", handleVisibilityChange)
        } catch (e: unknown) {
            if (e instanceof Error) {
                console.error(e.message)
                setError(e.message)
            }

            setIsEmailSent(false)
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