import React from 'react';
import TableContent from './TableContent';
import { withTranslation } from "react-i18next";

const TabContent = (props) => {
    const { t } = props;
    const calculateDays = 1000*60*60*24;
    // calculations are done according to the current time so yesterday's afternoon campaign can still run up on live till today's afternoon until the 24 hour window period is over
    let today = Date.now();

    // campaigns data is filtered into each tab according to date and rendered as a table through TableContent component, again OnTabUpdate pass callback to the Reschedule component to update state in parent
    let upcomingCampaign = props.campaigns.filter(item => (item.createdOn - today)/calculateDays > 0);
    let liveCampaign = props.campaigns.filter(item => (item.createdOn - today)/calculateDays > -1 && (item.createdOn - today)/calculateDays <= 0);
    let pastCampaign = props.campaigns.filter(item => (item.createdOn - today)/calculateDays <= -1);
    
    return (
        <div>
            {props.className === 'Upcoming' ? <TableContent campaignData={upcomingCampaign} className={t("Ahead")} onTabUpdate={props.onUpdate} />: 
            props.className === 'Live' ? <TableContent campaignData={liveCampaign} onTabUpdate={props.onUpdate} />:
            <TableContent campaignData={pastCampaign} className={t("Ago")} onTabUpdate={props.onUpdate} />
            }
        </div>
    )
}

export default withTranslation()(TabContent);