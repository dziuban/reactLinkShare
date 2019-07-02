const LinksList = (props) => {
    const links = props.links;
    const linkItems = links.map((link, i) => (
        <div key={i} className="link-item">
            <p>{link}</p>
            <hr />
        </div>
        )
    );
    return (
        <div>{linkItems}</div>
    );
}

class App extends React.Component {

    state= {
        links: ["ghjgjghh", "dsfsdfsdf"]
    }

    inputNewLink = (e) => {
        this.setState({newLink: e.target.value});
    }

    addNewLink = () => {
        this.state.links.push(this.state.newLink)
        const newLinks = this.state.links;
        this.setState({ links: newLinks});
    }

    render () {
        return <div>
                <div className="adding-form">
                    <input type="text" onChange={this.inputNewLink} />&nbsp;
                    <button onClick={this.addNewLink}>Add Link</button>
                </div>
                <LinksList links={this.state.links}/>
            </div>
    }

}

function InputItem() {
    
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);