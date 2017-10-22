import React, { Component } from 'react';
import './App.css';

let ARSENAL = [
    {
        number   : 33,
        name     : 'Peter Cech',
        position : 'Goalkeepers',
        avatar   : 'https://www.arsenal.com/sites/default/files/styles/large/public/images/Petr%20Cech_400x252.png?itok=cHGz3iYV',
        url      : 'https://www.arsenal.com/arsenal/players/petr-cech',
    },
    {
        number   : 6,
        name     : 'Laurent Koscielny',
        position : 'Defender',
        avatar   : 'https://www.arsenal.com/sites/default/files/styles/large/public/images/Laurent%20Koscielny_400x252.png?itok=bojfwDBy',
        url      : 'https://www.arsenal.com/arsenal/players/laurent-koscielny',
    },
    {
        number   : 20,
        name     : 'Shkodran Mustafi',
        position : 'Defender',
        avatar   : 'https://www.arsenal.com/sites/default/files/styles/large/public/images/Shkodran%20Mustafi_400x252.png?itok=tSTbwJXi',
        url      : 'https://www.arsenal.com/arsenal/players/shkodran-mustafi',
    },
    {
        number   : 24,
        name     : 'Hector Bellerin',
        position : 'Defender',
        avatar   : 'https://www.arsenal.com/sites/default/files/styles/large/public/images/Hector%20Bellerin_400x252.png?itok=abypV1db',
        url      : 'https://www.arsenal.com/arsenal/players/hector-bellerin',
    },
    {
        number   : 31,
        name     : 'Sead Kolasinac',
        position : 'Defender',
        avatar   : 'https://www.arsenal.com/sites/default/files/styles/large/public/images/Sead%20Kolasinac_400x252.png?itok=ObAfXeMu',
        url      : 'https://www.arsenal.com/arsenal/players/sead-kolasinac',
    },
    {
        number   : 10,
        name     : 'Jack Wilshere',
        position : 'Midfielder',
        avatar   : 'https://www.arsenal.com/sites/default/files/styles/large/public/images/Jack%20Wilshere_400x252.png?itok=ouMfRiNl',
        url      : 'https://www.arsenal.com/arsenal/players/jack-wilshere',
    },
    {
        number   : 8,
        name     : 'Aaron Ramsey',
        position : 'Midfielder',
        avatar   : 'https://www.arsenal.com/sites/default/files/styles/large/public/images/Aaron%20Ramsey_400x252.png?itok=WFKEmOJ5',
        url      : 'https://www.arsenal.com/arsenal/players/aaron-ramsey',
    },
    {
        number   : 11,
        name     : 'Mesut Ozil',
        position : 'Midfielder',
        avatar   : 'https://www.arsenal.com/sites/default/files/styles/large/public/images/Mesut%20Ozil_400x252.png?itok=rh3b7yne',
        url      : 'https://www.arsenal.com/arsenal/players/mesut-ozil',
    },
    {
        number   : 19,
        name     : 'Santi Cazorla',
        position : 'Midfielder',
        avatar   : 'https://www.arsenal.com/sites/default/files/styles/large/public/images/Santi%20Cazorla_400x252.png?itok=MVCgq9Nd',
        url      : 'https://www.arsenal.com/arsenal/players/santi-cazorla',
    },
    {
        number   : 7,
        name     : 'Alexis Sanchez',
        position : 'Forward',
        avatar   : 'https://www.arsenal.com/sites/default/files/styles/large/public/images/Alexis_400x252.png?itok=fT1c1Dzm',
        url      : 'https://www.arsenal.com/arsenal/players/alexis',
    },
    {
        number   : 9,
        name     : 'Alexandre Lacazette',
        position : 'Forward',
        avatar   : 'https://www.arsenal.com/sites/default/files/styles/large/public/images/Alexandre%20Lacazette_400x252.png?itok=PWYR5f_D',
        url      : 'https://www.arsenal.com/arsenal/players/alexandre-lacazette',
    },

];

class Team extends Component{

    render(){
        return (
                <div className="team">
                    <h1>We are Arsenal</h1>
                    <TeamList/>
                </div>
        )
    }

}

class TeamList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            displayArray: ARSENAL
        };
    }

    Change = (e) => {

        let currentVal = e.target.value.toLowerCase();
        let filterVal = ARSENAL.filter((e) => {
            let filterElem = e.name.toLowerCase();
            return filterElem.indexOf(currentVal) !== -1;
        });

        this.setState(() => {
            return {
                displayArray: filterVal
            }
        })
    }

    render(){

        let team = this.state.displayArray.map((elem, id) => {
            return (
                    <ul key={id} className="teamLists">
                        <li className="item-avatar"><a target="_blank" href={elem.url}><img src={elem.avatar} alt="" height="70px" width="70px"/></a></li>
                        <div className="align-right">
                            <li className="item-number"><a target="_blank" href={elem.url}>{elem.number}</a></li>
                            <li className="item-name"><a target="_blank" href={elem.url}>{elem.name}</a></li>
                            <li className="item-position"><a target="_blank" href={elem.url}>{elem.position}</a></li>
                        </div>
                    </ul>
            )
        });
        return (
            <div className="wrapper-team-list">
                <form action="" className="teamForm">
                    <label>Search player ...</label>
                    <input type="text" onChange={ this.Change } placeholder="Name ..."/>
                </form>
                {team}
            </div>
        )
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <Team/>
      </div>
    );
  }
}

export default App;
