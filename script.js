function Page() {
    return (
        <div>
            <h1 className="header">Header tag</h1>
        </div>
    )
}

const root = document.querySelector("#root")

ReactDOM.render(<Page />, root)