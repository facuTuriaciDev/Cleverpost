import { ChangeEvent } from 'react';
import './SearchBar.scss'
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm} from '../../slices/posts/searchSlice';

function SearchBar() {
  const dispatch = useDispatch();

  const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  }

  return (
    <div>        
      <input className="input" placeholder="Buscar en Cleverpost" onChange={handleFilter}/>
    </div>
  )
}

export default SearchBar