import React, { useState } from "react";
import '../hojas-de-estilo/TareaFormulario.css'
import { v4 as uuidv4 } from 'uuid'

function TareaFormulario(props) {

  const [input, setInput] = useState('')

  const manejarCambio = e => {
    setInput(e.target.value)
  }

  const manejarEnvio = e => {
    e.preventDefault()

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completa: false
    }

    props.onSubmit(tareaNueva)

    setInput('') // Actualiza el estado input a una cadena vacía
  }

  return (
    <form
      className="tarea-formulario"
      onSubmit={manejarEnvio}>
      <input
        className="tarea-input"
        type='text'
        placeholder='Escribe una Tarea'
        name='texto'
        onChange={manejarCambio}
        value={input}
      />
      <button className="tarea-boton">
        Agregar Tarea
      </button>
    </form>
  )
}

export default TareaFormulario