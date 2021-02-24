import React from 'react';
// import { render } from 'react-dom';
import '../style/css/Detail.css';
import ReactPlayer from 'react-player'

class Detail extends React.Component{
    
    
    componentDidMount(){
        const {location, history} = this.props;
        if(location.state === undefined){
            // console.log("undefined!!");
            history.push("/");
        } 
    }
    render(){
        const {location} = this.props;
        // console.log(this.props);
        
        if(location.state === undefined){
            return null;
        }else{  
            return (
                <div className = "Detail__Container" style={{backgroundImage : `url(${location.state.poster})`}}>
                    <div className = "Detail__Info" >
                        <span className= "Detail__Title">{location.state.title}</span>
                        <span className= "Detail__Summary">{location.state.summary}</span>
                        <div className="Detail__Video">
                            <ReactPlayer
                                url = {`'https://www.youtube.com/watch?v=${location.state.yt_trailer_code}'`}
                                playing = {true}
                                controls = {true}
                            />
                        </div>
                    </div>
                </div>
            );
        }
    }
}



export default Detail;