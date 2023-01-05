import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
const cx = classNames.bind(styles);

function Button({
    to,
    href,
    nav,
    dflex = false,
    title = false,
    icon = false,
    icon2 = false,
    icon3 = false,
    heart = false,
    button = false,
    active = false,
    user = false,
    children,
    ...pastProps
}) {
    let Component = 'div';
    const props = {
        ...pastProps,
    };

    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    } else if (nav) {
        props.to = nav;
        Component = NavLink;
    }

    const className = cx('', {
        dflex,
        heart,
        active,
        button,
        user,
        icon2,
        icon3,
    });
    return (
        <Component className={className} {...props}>
            {children}
            {dflex && (
                <>
                    {icon}
                    <p>{title}</p>
                </>
            )}
            {heart && (
                <>
                    <img src={icon} alt="heart" />
                    <p>{title}</p>
                </>
            )}
            {button ? (
                <>
                    {active ? (
                        <button className={cx('title')} type="button">
                            {title}
                        </button>
                    ) : (
                        <button className={cx('icon')} type="button">
                            {icon}
                        </button>
                    )}
                </>
            ) : null}
            {user ? (
                <>
                    <Tippy
                        content={
                            <strong>
                                <span style={{ fontWeight: 'bold' }}>Chien le</span>
                            </strong>
                        }
                        duration={[500, 0]}
                        arrow={false}
                    >
                        <div className={cx('box-user')}>
                            <Tippy
                                content={'Chien le'}
                                delay={[500]}
                                animation={'scale'}
                                followCursor={true}
                                arrow={false}
                            >
                                <div className={cx('users')}>{icon}</div>
                            </Tippy>
                            <div className={cx('username')}>{title}</div>
                            <div className={cx('downandup')}>{icon2}</div>
                        </div>
                    </Tippy>
                </>
            ) : null}
        </Component>
    );
}

export default Button;
