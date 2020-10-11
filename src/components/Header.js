import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Hamburger from './Hamburger';

const Header = ({ history }) => {
  // DISABLE MENU
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: 'Menu',
  });

  // DISABLE BUTTON
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    // LISTEN FOR PAGE CHANGE
    history.listen(() => {
      setState({ clicked: false, menuName: 'Menu' });
    });
  });
  // USE EFFECT OR PAGE CHANGE

  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: 'Closed',
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: 'Menu',
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: 'Closed',
      });
    }
  };

  // DETERMINE IF MENU SHOULD BE DISABLED

  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <Link to="/">HAMBRG.</Link>
            </div>

            <div className="menu">
              <button onClick={handleMenu} disabled={disabled}>
                Menu
              </button>
            </div>
          </div>
        </div>
      </div>

      <Hamburger state={state} />
    </header>
  );
};

export default withRouter(Header);
