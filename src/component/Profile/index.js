import React , { Component } from 'react';
import axios from 'axios'
import {ProfileSkills,ProfileList,ProfileTitleSpan,ProfileTitle,ProfileSection,ProfileItem,ItemSpan,SkillsSection,Web,SkillsTitle,SkillsTitleSpan,
  SkillsDesc,Bar,BarTitle,BarPerc,BarParent,BarParentSpan} from './style.js'
class Profile extends Component { 
  state = {
    profiles:[]
  }
  componentDidMount(){
    axios.get('js/data.json').then(res => {this.setState({profiles: res.data.Profile})})
  }

  render(){
    const {profiles} = this.state;
    const ProfileLists = profiles.map((profileItems =>{
      return(
        <Bar key={profileItems.id}>
          <BarTitle>{profileItems.name}</BarTitle>
          <BarPerc>{profileItems.Pers}</BarPerc>
          <BarParent>
              <BarParentSpan className={profileItems.perant}></BarParentSpan>
          </BarParent>
        </Bar>
      )
    }))
    return (
      <ProfileSkills>
            <div className="container">
                <ProfileSection>
                    <ProfileTitle><ProfileTitleSpan>My </ProfileTitleSpan>Profile</ProfileTitle>
                    <ProfileList>
                        <ProfileItem>
                            <ItemSpan>Name</ItemSpan>
                            Abed Fayyad
                        </ProfileItem>
                        <ProfileItem>
                            <ItemSpan>Birthday</ItemSpan>
                            21/1/1988
                        </ProfileItem>
                        <ProfileItem>
                            <ItemSpan>Address</ItemSpan>
                            Khan
                        </ProfileItem>
                        <ProfileItem>
                            <ItemSpan>Phone</ItemSpan>
                            4444 5555 6666
                        </ProfileItem>
                        <ProfileItem>
                            <ItemSpan>Email</ItemSpan>
                            abed@gmail.com
                        </ProfileItem>
                        <ProfileItem>
                            <ItemSpan>Website</ItemSpan>
                            <Web>www.google.com</Web>
                        </ProfileItem>
                    </ProfileList>
                </ProfileSection>
                
                <SkillsSection>
                    <SkillsTitle>Some <SkillsTitleSpan>skills</SkillsTitleSpan></SkillsTitle>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    
                    {ProfileLists}

                </SkillsSection>
                
            </div>
        </ProfileSkills>
        
    );
}
  
}
export default Profile;
