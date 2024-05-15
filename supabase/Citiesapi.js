import supabase from "./supabase"
export async function getcities (){
    
let { data: cities, error } = await supabase
  .from('cirties')
  .select('*')
  console.log(cities)
if(error) {
    throw new Error("cities could not be loaded")
}
return cities;
}


// export async function pushCity (){
//     const { cities, error } = await supabase
//   .from('cities')
//   .insert([
//     { some_column: 'someValue', other_column: 'otherValue' },
//   ])
//   .select()
// }