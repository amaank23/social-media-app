import React, { useState } from "react";

export const ModalContext = React.createContext({
    isModalVisible: false,
    setIsModalVisible: () => {}
});

function ModalContextProvider({ children }){
    const [isModalVisible, setIsModalVisible] = useState(false);
    return (
        <ModalContext.Provider value={{ isModalVisible, setIsModalVisible }}>
            { children }
        </ModalContext.Provider>
    )
}

export default ModalContextProvider