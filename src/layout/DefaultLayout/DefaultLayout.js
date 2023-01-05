import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <>
            <div className={cx('container')}>
                <Navbar />
                <Header />
            </div>
            {children}
        </>
    );
}

export default DefaultLayout;
