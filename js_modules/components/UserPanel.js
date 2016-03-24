import React, { Component, PropTypes } from 'react';

export default class UserPanel extends Component {
    constructor(props) {
        super(props);

        this.onClickLogoutBtn = this.onClickLogoutBtn.bind(this);
    }
    onClickLogoutBtn(e) {
        e.preventDefault();
        this.props.setLogined(false);
    }
    render() {
        const fetching = this.props.fetching,
            logined = this.props.logined,
            name = this.props.name;

        return (
            <p className='navbar-text navbar-right'>
                {fetching ? <span>Начали</span> : <span>Закончили</span>}
                {logined ?
                    <span><a href='#' className='navbar-link'> {name} </a> <a href='#' id='logout' onClick= {this.onClickLogoutBtn} className='navbar-link'>Выйти</a></span>
                    :
                    <span><a href='/login' className='navbar-link'>Войти</a><a href='/register' className='navbar-link'>Зарегистрироваться</a></span>}
            </p>
        );
    }
}

UserPanel.PropTypes = {
    logined: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    setLogined: PropTypes.func.isRequired
};