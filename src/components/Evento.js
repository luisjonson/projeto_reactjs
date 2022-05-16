function Evento({numero}){
    function meuEvento(){
        console.log(`Opa fui Ativado. ${numero}`)
    }
    return(
        <>
            <p>Clique para disparar um evento:</p>
            <button onClick={meuEvento}>Ativar</button>
        </>
    )
}

export default Evento