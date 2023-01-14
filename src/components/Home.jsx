const Home = () => {
    const handleClick = () =>{
        console.log("Hello!")
    }
    const handleClickMeAgain = (name) =>{
        console.log("hello " + name)
    }
    return (
        <div className="Home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={()=>handleClickMeAgain('me')}>Click Me Again</button>
        </div>
    );
}
 
export default Home;