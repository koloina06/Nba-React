import React from "react";

class Statistiques extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            statistiques : [],
        };
    }

    async componentDidMount() {
        try {
            const response = await fetch('https://nba-spring-production.up.railway.app/statistiques');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const body = await response.json();
            this.setState({ statistiques: body });
            console.log(this.state.statistiques);
           
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }

    render(){
        const {statistiques} = this.state;
        return (
            <div>
                 <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Classement</th>
                        <th>Joueur</th>
                        <th>Equipe</th>
                        <th>M</th>
                        <th>MJ</th>
                        <th>PPM</th>
                        <th>RPM</th>
                        <th>PDPM</th>
                        <th>MPM</th>
                        <th>FG%</th>
                        <th>3P%</th>
                        <th>%LF</th>
                    </tr>
                </thead>
                    <tbody>
                    {statistiques.map((player, index) => (
                        <tr key={index}>
                            <td>{player.joueur.idJoueur}</td>
                            <td>{player.joueur.nomJoueur}</td>
                            <td>{player.joueur.equipe.abbreviation}</td>
                            <td>{player.matchEquipe}</td>
                            <td>{player.matchJoue}</td>
                            <td>{player.pointParMatch}</td>
                            <td>{player.rebondParMatch}</td>
                            <td>{player.passeDecisiveParMatch}</td>
                            <td>{player.minuteParMatch}</td>
                            <td>{player.fg}</td>
                            <td>{player.three}</td>
                            <td>{player.lf}</td>
                        </tr>
                    ))}
                    </tbody>
            </table>
            </div>
        );
    }
};

export default Statistiques;
