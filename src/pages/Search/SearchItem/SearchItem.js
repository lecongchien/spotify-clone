import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './SearchItem.module.scss';

const cx = classNames.bind(styles);

function SearchItem() {
    return (
        <div className={cx('search')}>
            <div className={cx('searchTopic')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input id="Search" type="search" name="search" placeholder="Bạn muốn nghe gì? " />
                {/* <FontAwesomeIcon icon={faXmark} /> */}
            </div>
        </div>
    );
}

export default SearchItem;
