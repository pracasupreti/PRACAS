import image from "../assets/image.png";
export function Carrers(){

    return(
        <div  className="p-[125px] ">
<div 
  className="mx-auto relative twl2:w-[1000px] w-[1000px] elev:w-[940px]  2xl:w-[1208px] h-[600px] bg-cover bg-center rounded-lg"
  style={{ backgroundImage: `url(${image})` }} 
>
<div className="absolute top-1/4 2xl:left-48 twl2:left-44 left-[100px] elev:left-40 flex gap-4 ">
    <select
    
        className="mt-1 block twl2:w-[300px] w-[400px]  2xl:w-[400px] h-[50px] px-3 py-1 border border-gray-300  shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      >
         <option value="All Cities">All Cities</option>
        <option value="Kathmandu">Kathmandu</option>
        <option value="Bhaktapur">Bhaktapur</option>
        <option value="Biratnagar">Biratnagar</option>
        
      </select>

      <select
    
    className="mt-1 block twl2:w-[300px] 2xl:w-[400px] w-[300px] h-[50px] px-3 py-1 border border-gray-300  shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
  >
     <option value="All Cities">All Profession</option>
    <option value="Kathmandu">Cleaner</option>
    <option value="Bhaktapur">Carpenter</option>
    <option value="Biratnagar">Developer</option>
    
  </select>

    </div>
    <button className="w-[100px] absolute top-1/4 2xl:right-[99px] right-[108px] twl2:right-[99px] h-[50px] bg-[#88181D] text-white mt-1  ">
 Search
  </button>
           
        </div>
           </div>
      
    )
}