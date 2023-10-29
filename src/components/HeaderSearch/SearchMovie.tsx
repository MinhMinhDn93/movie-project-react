
import styles from './SearchMovie.module.css';
import { FiSearch } from 'react-icons/fi';
import { Link } from "react-router-dom";
import useSearch from "../../hooks/useSearch";
import { useState } from "react";


const SearchMovie = () => {
    const { onchange } = useSearch();
    // câu lệnh dùng để lưu giá trị search vào
    const [data, setData] = useState<string>("");
    const handleSearch = () => {
        onchange(data);
    };
    return (
        <div>
            <div className={styles.searchbox}>
                <input className={styles.inputsearch}
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                    type="text" placeholder="Search Moive" />
                <div className={styles.iconsearch}>
                    <Link to={"/search"} onClick={handleSearch}>
                        <FiSearch />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SearchMovie