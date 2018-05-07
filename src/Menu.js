import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
	constructor(props) {
			super(props);
	}

	render() {
			const menuItemsArray = ['Quiz', 'High score', 'Profile'];
			const currentTab = this.props.chosenTab;
			const listItems = menuItemsArray.map(function(tab ) {
          if (tab == currentTab) {
            return <div className="chosen" key={tab}>
                          {tab}
                    </div>;
          } else if (tab != currentTab){
            return <div key={tab}>
                          {tab}
                    </div>;
          }//end of else
      });

      return (
        <nav>
            {listItems}
        </nav>
      );//end of return
	  } //end of render
} //end of component

export default Menu;
