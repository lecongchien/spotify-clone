import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '~/components/button/Button';
import { faCaretDown, faCaretUp, faChevronLeft, faChevronRight, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import SearchItem from '~/pages/Search/SearchItem';

const cx = classNames.bind(styles);

function Header({ children }) {
    const [changes, setChanges] = useState(false);

    const location = useLocation();
    console.log(location.pathname === '/search');
    return (
        <div className={cx('header')}>
            <div className={cx('left-sidebar')}>
                <Button button icon={<FontAwesomeIcon icon={faChevronLeft} />} />
                <Button button icon={<FontAwesomeIcon icon={faChevronRight} />} />
                {location.pathname !== '/search' || <SearchItem />}
            </div>

            <div className={cx('right-sidebar')}>
                <Button button active title={'Nâng cấp'} />
                <Button
                    user
                    title={'chien le'}
                    icon={<FontAwesomeIcon icon={faUser} />}
                    icon2={<FontAwesomeIcon icon={changes ? faCaretUp : faCaretDown} />}
                    onClick={() => setChanges(!changes)}
                />
            </div>
        </div>
    );
}

export default Header;
