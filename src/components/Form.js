function Form(){
    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(`Usuario cadastrado com Sucesso`)
    }
    return(
        <div>
            <h1>Meu Cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Diga o seu nome"/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form