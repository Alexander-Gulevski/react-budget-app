import { ChangeEvent } from 'react';
import { StyledSearch } from './styles';

interface IProps {
    handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
    searchValue: string;
}

const Search = ({ handleSearch, searchValue }: IProps) => {
    return (
        <StyledSearch
            placeholder="search ..."
            onChange={handleSearch}
            value={searchValue}
        />
    );
};

export default Search;
