

 import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
 import { useState } from "react";
 // import axios from "axios";
 // import { BASE_URL } from "../data/BASE_URL";
 
 const Holiday = ({ holiday }) => {
   const [productCount, setProductCount] = useState(1);
 
   const decrease = () => {
     productCount > 1 && setProductCount(productCount - 1);
   };
   const increase = () => {
     setProductCount(productCount + 1);
   };
 
   // const removeHoliday = async () => {
   //   try {
   //     await axios.delete(`${BASE_URL}${holiday.id}`);
   //   }
   // };
 
   return (
     <div className="text-center m-5">
       <div>
         <img src={holiday.image} alt="" width={"400px"} />
       </div>
       <div>
         <span>{holiday.name}</span>
         <span>{holiday.price * 0.75}</span>
         <span className="text-decoration-line-through">{holiday.price}</span>
         <div className="counter m-2">
           <button
             className="btn btn-warning p-1"
             onClick={() => {
               decrease();
             }}
           >
             <AiOutlineMinus />
           </button>
           <span>{productCount}</span>
           <button
             className="btn btn-warning p-1"
             onClick={() => {
               increase();
             }}
           >
             <AiOutlinePlus />
           </button>
         </div>
         <button className="btn btn-danger">Remove</button>
         <span>Product Total: {holiday.price * productCount}</span>
       </div>
     </div>
   );
 };
 
 export default Holiday;