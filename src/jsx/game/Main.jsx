import React from 'react';

import Styles from 'Styles.jsx';

import Board from 'game/Board.jsx';

const styles = {
    main: {
        height: '360px',
        width: '640px',
        background: Styles.main.background,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
};

export default class Main extends React.Component {
    render() {
        return (
            <div style={styles.main}>
                <Board result={this.props.result} />
            </div>
        );
    }
}
