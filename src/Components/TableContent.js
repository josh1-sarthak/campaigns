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
  // t for localization
    const { t } = props;

  return (
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
                <em> {Math.abs(Math.ceil((item.createdOn - today)/calculateDays))} {t("Days")} {props.className} </em>
              </Table.Cell>
              <Table.Cell> 
                <Header as='h4' image>
                  <Image src={process.env.PUBLIC_URL + item.image_url} />
                  <Header.Content>
                    {item.name}
                    <Header.Subheader> {item.region} </Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>
                <Pricing item={item} tablelocale={t}/>
              </Table.Cell>
              <Table.Cell> <span className="noContentInside"> <Image src={csvIcon} alt='csv' verticalAlign='middle' /> {item.csv} </span> </Table.Cell>
              <Table.Cell> <span className="noContentInside"> <Image src={reportIcon} alt='report' verticalAlign='middle' /> {t(item.report)} </span> </Table.Cell>
              <Table.Cell> 
              <Reschedule item={item} onTableUpdate={props.onTabUpdate} tablelocale={t} />
              </Table.Cell> 
            </Table.Row> 
          )}
        </Table.Body>
      </Table>
  )
}

// Pricing Component - renders Pricing Modal
const Pricing = (props) => {
  const [open, setOpen] = useState(false);

  const handleChange = () => {
    setOpen(!open);
  }

  const subscriptions = [
    {
      duration: '1 Week - 1 Month',
      cost: '$100.00',
    },
    {
      duration: '6 Months',
      cost: '$100.00',
    },
    {
      duration: '1 Year',
      cost: '$100.00',
    },
  ]

  return (
    <div>
        <Modal size='mini' onClose={handleChange} onOpen={handleChange} open={open} 
        trigger={
        <span className='viewPrice'><Image src={priceIcon} alt='price' verticalAlign='middle' /> {props.tablelocale(props.item.price)} </span>}>
          <Modal.Content>
            <div className='headModal'>
              <Image src={process.env.PUBLIC_URL + props.item.image_url} />
                <div className='modalHeadContent'> 
                <strong> {props.item.name} </strong> <br/>
                {props.item.region} </div>
            </div>
            <div className='bodyModal'>
              <h3> {props.tablelocale("Pricing")} </h3>
              {subscriptions.map(pack => 
                <p key={pack.duration} style={{textAlign: 'left'}}> {props.tablelocale(pack.duration)} <span style={{float: 'right'}}><strong> {pack.cost} </strong></span> </p>
              )}
            </div>
            <div className='modalBtn'>
            <button onClick={handleChange}> {props.tablelocale("Close")} </button>
            </div>
          </Modal.Content>
        </Modal>
    
    </div>
  )
}

// Reschedule Component - Renders DatePicker
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
    // onTableUpdate is a callback function that passes campaign name and modified date 
    // to the handleUpdate function in parent (App) component in order to change state 
    onTableUpdate(item, datems)
  }, [startDate]) // eslint-disable-line


  const handleDate = (date) => {
    setStartDate(date)
  }

// datepicker library used to select dates
  return (
    <div>
    <span className='reschedule' onClick={handleCal}> <Image src={calIcon} alt='calendar' verticalAlign='middle'/> {props.tablelocale("Schedule Again")} </span>
    {showcal ? <div className='calendar'> <DatePicker selected={startDate} onChange={handleDate}/> </div> : null }
    </div>
  )

}

export default withTranslation()(TableContent);