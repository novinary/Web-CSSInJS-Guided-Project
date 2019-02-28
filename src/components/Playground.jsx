import React from 'react';

const getStyle = () => ({
  header: {
    padding: '10px',
    marginTop: '10px',
    border: `4px solid black`
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
