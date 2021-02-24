import React from 'react';

const Recipe = (props) => {
    return (
       <section>
           <h1>props.name</h1>
           <p>props.description</p>
       </section> 
    );
}

export default Recipe;