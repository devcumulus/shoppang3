// import React, { useState } from "react";
// import CardForm from "./CardForm";
// import BtnAdd from "./BtnAdd";

// const CardContainer = () => {
//   const [cardRows, setCardRows] = useState([[]]);

//   const handleAddCard = () => {
//     const currentRow = [...cardRows[cardRows.length - 1]];
//     if (currentRow.length < 3) {
//       currentRow.push(<CardForm key={currentRow.length} />);
//       setCardRows([...cardRows.slice(0, -1), currentRow]);
//     } else {
//       setCardRows([...cardRows, [<CardForm key={0} />]]);
//     }
//   };

//   return (
//     <div style={{ position: "relative" }}>
//       {cardRows.map((row, rowIndex) => (
//         <div key={rowIndex} style={{ display: "flex" }}>
//           {row}
//         </div>
//       ))}
//       <BtnAdd onAddCard={handleAddCard} />
//     </div>
//   );
// };

// export default CardContainer;
