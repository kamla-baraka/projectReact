import React , { Component } from 'react';
import axios from 'axios'
import {SocialMedia,Socials,Icon,SocialP,Info1,Info2} from './style.js'
class Social extends Component { 
  state = {
    social:[]
  }
  componentDidMount(){
    axios.get('js/data.json').then(res => {this.setState({social: res.data.social})})
  }

  render(){
    const {social} = this.state;
    const SocialLists = social.map((socialItems =>{
      return(
        <Socials item={socialItems.id} key = {socialItems.id}>
                <Icon className={socialItems.icon}></Icon>
                <SocialP>
                    <Info1>{socialItems.title}</Info1>
                    <Info2>{socialItems.body}</Info2>
                </SocialP>
        </Socials>
      )
    }))
    return (
      <SocialMedia>
            
            {SocialLists}

        </SocialMedia>
    );
}
} 

export default Social;
