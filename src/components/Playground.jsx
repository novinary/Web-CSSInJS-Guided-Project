import React from 'react';
import styled from 'styled-components';
/*
Styled Components is a library for writing CSS in our JS files.

o get started with styled-components we run yarn add styled-components 


// div
const StyledDiv = styled.div``;

// paragraph
const StyledP = styled.p``;

// section
const StyledSection = styled.section``;

// headers h1 - h6
const StyledHeading = styled.h1``;

// a
const StyledA = styled.a``;

*/

/*
// styled.div creates a new component
const StyleDiv = styled.div`
width: 50%;
height: 50%;
border: 2px solid black;
`;
*/

//passing in props to change the color of buttons
const Button = styled.button`
padding: 6px 10px;
margin: 5px;
border: none;
border-radius: 3px;
color: white;

${props => (props.type === 'primary' ? `background: #2196f3;` : null)}

`;

const Button2 = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button2)`
  color: tomato;
  border-color: tomato;
`;


/*   Below are code for normal CSS styling in JS */
/*
const getStyle = () => ({
  header: {
    padding: '10px',
    marginTop: '10px',
    border: `4px solid black`,
  },

  nav: {
    border: `5px solid red`,
  },
});


export default function Playground() {
  // didn't invoke it here earlier
  let styles = getStyle();
  return (
    <div style={styles.header}>
      This is the playground component
      <div style={styles.nav}>Child's playground component</div>
    </div>
  );
}
 */

export default function Playground() {
  return (
    <div>
    <Button type="primary">Primary</Button>
    <TomatoButton>Tomato Button</TomatoButton>
    <Button2>Tomato Button</Button2>
    </div>
  );
}