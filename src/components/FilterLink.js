import {connect} from 'react-redux'
import {setVisibilityFilter} from '../actions'
import React, {Component} from "react";

class Link extends Component {

    render() {
        const {active, children, filter} = this.props;
        const disabled = active === filter;
        return (
            <button
                onClick={() => this.props.setVisibilityFilter(filter)}
                disabled={disabled}
                style={{
                    marginLeft: '60px',
                    color: disabled ? '#36a1da' : 'black'
                }}
            >
                {children}
            </button>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        active: state.visibilityFilter
    }
};

const mapDispatchToProps = {
    setVisibilityFilter
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)
