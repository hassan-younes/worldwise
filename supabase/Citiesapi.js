import supabase from "./supabase";
export async function getcities (){
    
let { data: cities, error } = await supabase
  .from('cities')
  .select('*')
  
if(error) {
    throw new Error("cities could not be loaded")
}
return cities;
}
export async function getCity (id){
    
let { data: array, error } = await supabase
  .from('cities')
  .select().eq("id",id)
  console.log("re-render")
const city = await array[0]
  return city;

}
export async function deleteCity (id){
    
const { error } = await supabase
  .from('cities')
  .delete()
  .eq("id",id)
  
if(error) {
    throw new Error("cities could not be loaded")
}

}


export async function pushCity (newCity){
  const {position,cityName,date,id,country,emoji}=newCity  
  console.log(position)
  const { data:cities, error } = await supabase
  .from('cities')
  .insert([
    {cityName:cityName,emoji:emoji,date:date,id:id,position:position,country:country}])
  .single()
  if(error) {
    throw new Error("cities could not be loaded")
}
  return cities
}