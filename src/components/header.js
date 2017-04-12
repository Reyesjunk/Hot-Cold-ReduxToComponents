import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';
import { connect } from 'react-redux'

export class Header extends React.Component  {
    render() {
        let infoModal;
        console.log(this.props.showInfoModal)
        if (this.props.showInfoModal) {
            infoModal = <InfoModal  />;
        }

        return (
            <header>
                <TopNav onInfo={() => this.toggleInfoModal()}
                    onNewGame={this.props.onNewGame} />
                {infoModal}
                <h1>HOT or COLD</h1>
            </header>
        );
    }
};

const mapStateToProps = state => ({
    showInfoModal: state.showInfoModal
});
export default connect(mapStateToProps)(Header);