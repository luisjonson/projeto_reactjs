import Item from "./Item"
function List(){
    
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca = "Fiat" ano_lancamento={1985}/>
                <Item marca = "Ferrari" ano_lancamento={1990}/>
                <Item />
            </ul>
        </>
    )
}

export default List