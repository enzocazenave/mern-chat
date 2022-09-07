export const SetInfo = () => {
    return (
        <div className="SetInfo-container fadeIn">
            <h2 className="SetInfo-container_title">Agregar información</h2>
            <form className="SetInfo-container_form">
                <input 
                    className="form-input" 
                    placeholder="Nombre de usuario" 
                    type="text"
                />
                <input type="file"/>
                <button>Seleccionar imagen</button>
                <button>Actualizar</button>
            </form>
        </div>
    )
}