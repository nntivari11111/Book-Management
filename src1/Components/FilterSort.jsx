import React, { useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";
// import { getBooks } from "../Redux/action";
const FilterSort=()=>{
  const [searchParams,setSearchParams]=useSearchParams()  

  const urlCategory=searchParams.getAll("category");
  const urlSort=searchParams.getAll("sortBy");
const [category,setCategory]=useState(urlCategory || []);
const [sortBy,setSortBy]=useState(urlSort||"");

const handleCheckbox=(e)=>{

  const option=e.target.value;
  let newCategory=[...category];
  if(category.includes(option)){
      newCategory.splice(newCategory.indexOf(option),1);
  }
  else{
    newCategory.push(option)
  }
  setCategory(newCategory);
}
const handleSort=(e)=>{
  setSortBy(e.target.value);
}

useEffect(()=>{
  if(category){
    setSearchParams({category});
  
  }
},[category,setSearchParams]);

useEffect(()=>{
if(category || sortBy){
  let params={};
  category && (params.category =category);
  sortBy && (params.sortBy=sortBy);
  setSearchParams(params);
}

},[category,setSearchParams,sortBy])

// useEffect(()=>{
//   if(sortBy){
//     let params={
//       category:searchParams.getAll("category"),
//       sortBy,
//     }
    
//     setSearchParams(params)
   
//   }
// },[setSearchParams,sortBy,searchParams,dispatch])
// console.log(searchParams)
return (
  <div>
<h3>Filter</h3>
<div>
  <div>
    <input type="checkbox" value="Novel" onChange={handleCheckbox} checked={category.includes("Novel")} />
    <label htmlFor="">Novel</label>
  </div>
  <div>
    <input type="checkbox" value="Science_Fiction" onChange={handleCheckbox} checked={category.includes("Science_Fiction")} />
    <label htmlFor="">Science_Fiction</label>
  </div>
  <div>
    <input type="checkbox" value="Motivational" onChange={handleCheckbox} checked={category.includes("Motivational")} />
    <label htmlFor="">Motivational</label>
  </div>
  <div>
    <input type="checkbox" value="Thriller" onChange={handleCheckbox} checked={category.includes("Thriller")} />
    <label htmlFor="">Thriller</label>
  </div>

</div>
<h3>Sort</h3>
<div onChange={handleSort}>
<input type="radio" value="asc" name="sortBy" checked={sortBy==="asc"} />
{" "}
Ascending
<input type="radio" value="desc" name="sortBy" checked={sortBy==="desc"} />
{" "}
Descending
</div>
  </div>
);
}
export default FilterSort;