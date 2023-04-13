import { ChangeEvent } from 'react';
import './SearchBar.scss'
import { useDispatch } from 'react-redux';
import { setSearchTerm} from '../../slices/posts/searchSlice';
import { useTranslation } from 'react-i18next';

function SearchBar() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  }

  return (
    <div>        
      <input className="input" placeholder={t('searchCleverpost')} onChange={handleFilter}/>
    </div>
  )
}

export default SearchBar