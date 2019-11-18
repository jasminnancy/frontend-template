import React from 'react'
const API = 'http://localhost:3000/fetches'

class Search extends React.Component {
    constructor() {
        super()

        this.state = {
            query: ''
        }
    }

    changeHandler = (e) => {
        this.setState({
            query: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()

        fetch(API, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.jwt}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                query: this.state.query
            })
        })
        .then(r => r.json())
        .then(console.log)
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.submitHandler(e)}>
                    <input onChange={(e) => this.changeHandler(e)} id='input' type='text' placeholder='search query'></input>
                    <button type='submit' name='submit'>Search</button>
                </form>
            </div>
        )
    }
}

export default Search