import React from 'react';
import { toggleInfoModal, startNewGame } from '../actions';
import { connect } from 'react-redux';

export class TopNav extends React.Component {
    onNewGame(event) {
        event.preventDefault();
        if (this.props.onNewGame) {
            this.props.onNewGame();
        }
    }

    onInfo(event) {
        event.preventDefault();
        if (this.props.onInfo) {
            this.props.onInfo();
        }
    }

    render() {
        return (
            <nav>
                <ul className="clearfix">
                    <li>
                        <a className="what" href="#" onClick={() => this.props.dispatch(toggleInfoModal(true))}>
                            What?
                        </a>
                    </li>
                    <li>
                        <a className="new" href="#" onClick={e => this.props.dispatch(startNewGame())}>
                            + New Game
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
};

const mapStateToProps = state => ({
    showInfoModal: state.showInfoModal
});
export default connect(mapStateToProps)(TopNav);
