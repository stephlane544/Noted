import React, { Component } from 'react';
import './Styles/Home.css'
import notes from './Images/notes.png';
import collection from './Images/collection.png';

class Home extends Component {
    render() {
        return (
            <div className='homeBackground'>
                <div className='homeNotes'>
                    <div className='noteText'>Make notes that you can edit or delete</div>
                    <img src={notes} alt=""/>
                </div>
                <div className='collectionBackground'></div>
                <div className='homeCollection'>
                    <div className='collectionText'>Make collections of whatever you want that will look like a book with pages</div>
                    <img src={collection} alt=""/>
                </div>

            </div>
        );
    }
}

export default Home;