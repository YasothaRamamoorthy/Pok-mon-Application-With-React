import React, {useState,useEffect} from 'react'
import PokemonList from './PokemonList';
import Pagination from './pagination';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([])

  const[currentPageUrl,setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const[nextPageUrl,setNextPageUrl] = useState()
  const[prevPageUrl,setPrevPageUrl] = useState()
  const[loading,setLoading]=useState(true)

  useEffect(()=>{
    setLoading(true)
    let cancel
    axios.get(currentPageUrl,{
      cancelToken : new axios.CancelToken(c=>cancel=c)
    }).then(res=>
    {
      setLoading(false)
      setNextPageUrl(res.data.next)
      setNextPageUrl(res.data.previous)
      setPokemon(res.data.results.map(p=>p.name))
    })
    return()=>{
cancel.cancel()
    }
  },[currentPageUrl])

  function gotoNextpage()
  {
    setCurrentPageUrl(nextPageUrl)
  }

  function gotoPrevpage()
  {
    setCurrentPageUrl(prevPageUrl)
  }


  if(loading) return "loading..."
   
  return (
  <><PokemonList pokemon={pokemon} /><Pagination gotoNextpage={nextPageUrl ? gotoNextpage:null}
      gotoPrevpage={prevPageUrl ?gotoPrevpage:null} /></>
  );

}

export default App;
