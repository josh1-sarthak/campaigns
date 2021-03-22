import React, {useState, useEffect} from 'react';
import { Table, Image, Header, Modal } from 'semantic-ui-react';
import { default as calIcon } from '../icons/calendar.svg';
import { default as csvIcon } from '../icons/file.svg';
import { default as priceIcon } from '../icons/Price.svg';
import { default as reportIcon } from '../icons/statistics-report.svg';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { withTranslation } from "react-i18next";

const calculateDays = 1000*60*60*24;
// calculations are done according to the current time so yesterday's afternoon campaign can still run up on live till today's afternoon until the 24 hour window period is over
let today = Date.now();

const TableContent = (props) => {
    const { t } = props;

  return (
    <div>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell> {t("DATE")} </Table.HeaderCell>
            <Table.HeaderCell> {t("CAMPAIGN")} </Table.HeaderCell> 
            <Table.HeaderCell> {t("VIEW")} </Table.HeaderCell> 
            <Table.HeaderCell colSpan='3'> {t("ACTIONS")} </Table.HeaderCell> 
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {props.campaignData.map(item =>
            <Table.Row key={item.name}>
              <Table.Cell> 
                {new Date(item.createdOn).toLocaleString('default', { month:'short'})} {new Date(item.createdOn).getFullYear()}, {new Date(item.createdOn).getDate()} <br/>
                {Math.abs(Math.ceil((item.createdOn - today)/calculateDays))} {t("Days")} {props.className}
              </Table.Cell>
              <Table.Cell> 
                <Header as='h4' image>
                  <Image src={`${item.image_url}`} />
                  <Header.Content>
                    {item.name}
                    <Header.Subheader> {item.region} </Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>
                <Pricing item={item} />
              </Table.Cell>
              <Table.Cell> <Image src={csvIcon} alt='csv' verticalAlign='middle' /> {item.csv} </Table.Cell>
              <Table.Cell> <Image src={reportIcon} alt='report' verticalAlign='middle' /> {item.report} </Table.Cell>
              {/* to include schedule again field in json or not for targetting updated date through pick up calendar */}
              <Table.Cell> 
              <Reschedule item={item} onTableUpdate={props.onTabUpdate} />
              {/* <Image src={calIcon} alt='calendar' verticalAlign='middle' /> 
              Schedule Again  */}
              </Table.Cell> 
            </Table.Row> 
          )}
        </Table.Body>
      </Table>
    </div>
  )
}

const Pricing = (props) => {
  // renders pricing modal
  const [open, setOpen] = useState(false);

  const handleChange = () => {
    setOpen(!open);
  }

  const subscriptions = [
    {
      duration: '1 Week - 1 Month',
      cost: '$100',
    },
    {
      duration: '6 Months',
      cost: '$100',
    },
    {
      duration: '1 Year',
      cost: '$100',
    },
  ]

  return (
    <div>
        <Modal size='mini' onClose={handleChange} onOpen={handleChange} open={open} 
        trigger={
        <span className='viewPrice'><Image src={priceIcon} alt='price' verticalAlign='middle' /> {props.item.price} </span>}>
          <Modal.Content>
            <div className='headModal'>
              <Image src={`${props.item.image_url}`} />
                <span className='modalHeadContent'> 
                <strong> {props.item.name} </strong> <br/>
                {props.item.region} </span>
            </div>
            <div className='bodyModal'>
              <h3> Pricing </h3>
              {subscriptions.map(pack => 
                <p key={pack.duration} style={{textAlign: 'left'}}> {pack.duration} <span style={{float: 'right'}}><strong> {pack.cost} </strong></span> </p>
              )}
            </div>
            <div className='modalBtn'>
            <button onClick={handleChange}> Close </button>
            </div>
          </Modal.Content>
        </Modal>
    
    </div>
  )
}

const Reschedule = (props) => {
  // changes state in parent component through callback passed to it via props
  const { item, onTableUpdate } = props;
  
  const [startDate, setStartDate] = useState(new Date(props.item.createdOn));
  const [showcal, setShowCal] = useState(false);


  const handleCal = () => {
    setShowCal(!showcal);
  }

  useEffect(() => {
    let datems = startDate.getTime();
    onTableUpdate(item, datems)
  }, [startDate])


  const handleDate = (date) => {
    setStartDate(date)
  }

// datepicker library used to select dates
  return (
    <div>
    <span className='reschedule' onClick={handleCal}> <Image src={calIcon} alt='calendar' verticalAlign='middle' /> 
    Schedule Again </span>
    {showcal ? <div className='calendar'> <DatePicker selected={startDate} onChange={handleDate}/> </div> : null }
    </div>
  )

}

export default withTranslation()(TableContent);