import { useSearchParams } from "react-router-dom";

export const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  console.log(searchParams);
  return (
    <>
    <input onChange={(e)=>{
      setSearchParams({value: e.target.value})
    }} value={searchParams.get('value') ?? ''} type="text"/>
    <button type="submit">Пошук</button>
    
  </>
  );
}