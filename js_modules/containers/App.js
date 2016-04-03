//Core
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userActions from '../actions/UserActions'
import * as modalActions from '../actions/ModalActions'

//Components
import NavbarBrand from '../components/NavbarBrand'
import UserPanel from '../components/UserPanel'
import Footer from '../components/Footer'
import PopUp from '../components/PopUp'
import Content from '../components/Content'
import Cards from '../components/Cards'
import { Layout, Header, Drawer } from 'react-mdl'


class App extends Component {
    render() {
        const { name, logined } = this.props.user; //имя пользователя и статус авторизации
        const { setLogined, setName } = this.props.userActions; //меняем статус авторизации пользователя
        const { modalIsOpen } = this.props.modal; //статус модального окна
        const { setModalState } = this.props.modalActions; //меняем статус модального окна

        return (
            <Layout fixedHeader>
                <Header title={<NavbarBrand />} >
                    <UserPanel name={name} logined={logined} setLogined={setLogined} setModalState={setModalState} />
                </Header>
                <Drawer>
                    <NavbarBrand />
                </Drawer>
                <main className="mdl-layout__content">
                    <Content>
                        <Cards />
                    </Content>
                </main>
                <Footer />
                <PopUp setModalState={setModalState} modalIsOpen={modalIsOpen} setLogined={setLogined} setName={setName} />
            </Layout>
        );
    }
}


function mapStateToProps (state) {
    return {
        user: state.user,
        page: state.page,
        modal: state.modal
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch),
        modalActions: bindActionCreators(modalActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);