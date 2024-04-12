import React, { Component } from 'react';
import "./News.css" 

class News extends Component {
    render() {
        return (
            <div className="News">

                <div className="New1">
                    Содержимое контейнера 1 
                </div>
                <div className="New2">
                    Содержимое контейнера 2 
                </div>
                <div className="New3">
                     Содержимое контейнера 3 
                </div>
                <div className="New4">
                     Содержимое контейнера 4 
                </div>
            </div>
        );
    }
}

export default News;
