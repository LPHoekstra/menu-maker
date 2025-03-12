// import { createContext, ReactNode, useState } from "react";

// interface ModalContextType {
//     modalIsOpen: boolean
//     setModalIsOpen: (isOpen: boolean) => void
// }

// export const ModalContext = createContext<ModalContextType | undefined>(undefined)

// interface ModalProviderProps {
//     children: ReactNode
// }

// export const ModalProvider = ({ children }: ModalProviderProps) => {
//     const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

//     return (
//         <ModalContext.Provider value={{ modalIsOpen, setModalIsOpen }}>
//             {children}
//         </ModalContext.Provider>
//     )
// }