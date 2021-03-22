import React, { useState } from 'react';
import input from './inputData/input.json';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Header, Tab, Dropdown, Image } from 'semantic-ui-react';
import './App.css';
import { withTranslation } from "react-i18next";
import TabContent from './Components/TabContent';
import { default as logo } from './icons/logo.png';

const App = (props) => {
  
  // for localization
  const { t } = props;

  // initial json input data
  const campaignArray = input.data;

  const [campaigns, setCampaigns] = useState(campaignArray);

  // updating state through child component (App -> TabContent -> TableContent -> Reschedule) for date rescheduling
  const handleUpdate = (game, dtval) => {
    let updatedCampaigns = campaigns.map(item => item.name === game.name ? {...item, createdOn: dtval} : item);
    setCampaigns(updatedCampaigns);
  }
  
  // tabs for each category of campaign. Each Tab Content receives campaigns state and filter tabs according to date, handleUpdate is being passed as a prop to the Reschedule component to update state in parent for changes to reflect
  const panes = [
    {
      menuItem: t("Upcoming Campaigns"),
      render: () => <Tab.Pane attached={false}> <TabContent campaigns={campaigns} className='upcoming' onUpdate={handleUpdate} /> </Tab.Pane>,
    },
    {
      menuItem: t("Live Campaigns"),
      render: () => <Tab.Pane attached={false}> <TabContent campaigns={campaigns} className='live' onUpdate={handleUpdate} /> </Tab.Pane>,
    },
    {
      menuItem: t("Past Campaigns"),
      render: () => <Tab.Pane attached={false}> <TabContent campaigns={campaigns} className='past' onUpdate={handleUpdate} /> </Tab.Pane>,
    }
  ]
  
  // dropdown options for language localization
  const options = [
    { key: 'en', text: 'English', value: 'en' },
    { key: 'sv', text: 'Swedish', value: 'sv' },
  ]

  const handleDropdown = (e, data) => {
    let language = data.value;
    props.i18n.changeLanguage(language);
  }
  
  // used semantic ui react UI library for responsive UI and clean consistent code.
  return (
    <div>
      <Grid centered>
        <Grid.Row>
          <Grid.Column style={{height: '80px', background: '#1F2640' }}>
            <Header> <Image src={logo} style={{width: "147px", height: "45px", left: "182px", top: "17px"}} alt='logo'/> </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={2} verticalAlign='middle'>
            <Dropdown
              selection
              options={options}
              onChange={(e,data) => handleDropdown(e,data)}
              placeholder='Choose a Language'
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={12} verticalAlign='middle'>
            <Header as='h1' textAlign='left' style={{ color: '#2B416C', fontSize: '48px'}}> {t("Manage Campaigns")} </Header>
          </Grid.Column>
          <Grid.Column width={12} verticalAlign='middle'>
            <Tab menu={{ secondary: true, pointing: true, className: "wrapped" }} panes={panes} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default withTranslation()(App);
         
