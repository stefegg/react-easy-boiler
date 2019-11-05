import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Placeholder = styled.p`
    font-size: 16px;
    margin-right: 5px;
    color: black;
`;

function Sidebar({
    // unlockView
}){
    return(
        //placeholder
        <Placeholder>
            Testest
        </Placeholder>

    );
}

Sidebar.propTypes = {
    unlockView: PropTypes.bool,
}

export default Sidebar