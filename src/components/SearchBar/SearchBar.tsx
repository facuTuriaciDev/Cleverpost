import { ChangeEvent } from 'react';
import './SearchBar.scss'
import { useDispatch } from 'react-redux';
import { setSearchTerm} from '../../slices/posts/searchSlice';
import { translate } from '../../utils/utils';

function SearchBar() {
  const dispatch = useDispatch();

  const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  }

  return (
    <div>        
      <input className="input" placeholder={translate('searchCleverpost')} onChange={handleFilter}/>
    </div>
  )
}

export default SearchBar