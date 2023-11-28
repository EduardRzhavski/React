// // solve using inline styling

// import React from 'react';

// const Box4 = () => {
//   const box4Style = {
//     width: '50px',
//     height: '50px',
//     backgroundColor: 'purple',
//     margin: '5px',
//   };

//   return <div style={box4Style}></div>;
// };

// const Box3 = () => {
//   const box3Style = {
//     width: '150px',
//     height: '150px',
//     backgroundColor: 'pink',
//     padding: '10px',
//     margin: '10px',
//     display: 'flex',
//     flexDirection: 'column',
//   };

//   return (
//     <div style={box3Style}>
//       <Box4 />
//       <Box4 />
//     </div>
//   );
// };

// const Box2 = () => {
//   const box2Style = {
//     width: '300px',
//     height: '300px',
//     backgroundColor: 'blue',
//     padding: '20px',
//     margin: '20px',
//   };

//   return (
//     <div style={box2Style}>
//       <Box3 />
//     </div>
//   );
// };

// const Box1 = () => {
//   const box1Style = {
//     width: '500px',
//     height: '500px',
//     backgroundColor: 'green',
//     padding: '30px',
//     margin: '30px',
//   };

//   return (
//     <div style={box1Style}>
//       <Box2 />
//     </div>
//   );
// };

// export { Box1, Box2, Box3, Box4 };

// solve using classes

// import React from 'react';
// import './styles.css'; 

// const Box4 = () => {
//   return <div className="box4"></div>;
// };

// const Box3 = () => {
//   return (
//     <div className="box3">
//       <Box4 />
//       <Box4 />
//     </div>
//   );
// };

// const Box2 = () => {
//   return (
//     <div className="box2">
//       <Box3 />
//     </div>
//   );
// };

// const Box1 = () => {
//   return (
//     <div className="box1">
//       <Box2 />
//     </div>
//   );
// };

// export { Box1, Box2, Box3, Box4 };

// // css

// /* styles.css */

// .box1 {
//     width: 500px;
//     height: 500px;
//     background-color: green;
//     padding: 30px;
//     margin: 30px;
//   }
  
//   .box2 {
//     width: 300px;
//     height: 300px;
//     background-color: blue;
//     padding: 20px;
//     margin: 20px;
//   }
  
//   .box3 {
//     width: 150px;
//     height: 150px;
//     background-color: pink;
//     padding: 10px;
//     margin: 10px;
//     display: flex;
//     flex-direction: column;
//   }
  
//   .box4 {
//     width: 50px;
//     height: 50px;
//     background-color: purple;
//     margin: 5px;
//   }
  
// //  solve using styled-components

// import React from 'react';
// import styled from 'styled-components';

// const Box4 = styled.div`
//   width: 50px;
//   height: 50px;
//   background-color: purple;
//   margin: 5px;
// `;

// const Box3 = styled.div`
//   width: 150px;
//   height: 150px;
//   background-color: pink;
//   padding: 10px;
//   margin: 10px;
//   display: flex;
//   flex-direction: column;
// `;

// const Box2 = styled.div`
//   width: 300px;
//   height: 300px;
//   background-color: blue;
//   padding: 20px;
//   margin: 20px;
// `;

// const Box1 = styled.div`
//   width: 500px;
//   height: 500px;
//   background-color: green;
//   padding: 30px;
//   margin: 30px;
// `;

// export { Box1, Box2, Box3, Box4 };

