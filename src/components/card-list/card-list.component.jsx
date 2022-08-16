import {Component} from "react";


class CardList extends Component{

    render(){
        
        const {monsters} = this.props;
        
        return (
            <div>
                <h2>Card List Component</h2>
                {monsters.map(monster =>(
                    <h1 key = {monster.id}>{monster.name}</h1>
                )) }
            
            
            </div>
        )
    }
}

export default CardList;