import React from "react";
import '../style/BotonClear.css'

const BotonClear = (porps) => (
    <div className="boton-clear">
        {porps.children}
    </div>
)

export default BotonClear;