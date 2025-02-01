
function Greeting() {
    const name = "John";
    const d = new Date();
    return (
        <div>
            <h1>
                Hello {name}, how are you?
            </h1>
            <p>
                today's date : {d.getDate()}
            </p>
        </div>
    )
}

export default Greeting