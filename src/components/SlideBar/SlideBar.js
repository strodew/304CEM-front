import React, { Component } from 'react'
import './SlideBar.css'
import { slide as Menu } from 'react-burger-menu'

export default class SlideBar extends Component {
    render() {
        return (
            <Menu>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Search:
                        <input type='text' name='searchBar' onChange={this.handleChange} />
                    </label>
                    <button type='submit'>Search</button>
                </form>
            </Menu>
        )
    }
}
