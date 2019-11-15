import React from "react";
import { DateTime } from "luxon";
import { Container, Row, Col, Card, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

import DropDownDeparture from "./DropDownDeparture.jsx";
import DropDownArrival from "./DropDownArrival.jsx";

export default class ClassApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: [],

      searchParams: {
        fly_from: "",
        fly_to: "LGW",
        partner: "picky"
      }, 
    };
  }

  componentDidMount() {
    this.callAPI(this.state.searchParams);
  }

  callAPI = (searchParams) =>{
    const params = new URLSearchParams(searchParams);
    const url = new URL(`?${params}`, "https://api.skypicker.com/flights");
    fetch(url.href)
      .then(res => res.json())
      .then(data => {
        console.log("data", data.data);
        this.setState({
          flights: data.data
        });
      });
  }
  setDepartureCode = (code) => {
      console.log('code', code)
      this.setState(prevState => ({
          ...prevState,
          searchParams: {
              ...prevState.searchParams,
              fly_from: code
          }
      }))
  }

  setArrivalCode = (code) => {
    console.log('code', code)
    this.setState(prevState => ({
        ...prevState,
        searchParams: {
            ...prevState.searchParams,
            fly_to: code
        }
    }))
}

  submitHandle = (searchParams) => {
      this.setState(
          console.log(this.state.searchParams)
        // this.callAPI(this.state.searchParams)
      )

  }
  render() {

    if (!this.state.flights.length) return <h1 style={{ padding: '1rem' }}>Loading... </h1>;

    return (
      <div style={{ marginTop: '1rem' }}>
        <Container>
            <Row>
        <DropDownArrival setArrivalCode={this.setArrivalCode}/>
        <DropDownDeparture setDepartureCode={this.setDepartureCode}/>
        <Button outline color="info" onClick={this.submitHandle}>Submit</Button> {''}
        </Row>
        
          <Row>
          
            {this.state.flights.map((flight, index) => {
              return (
                // console.log('detail', flight)
                <Col xs="6" sm="4" p="1" style={{ paddingTop: '1rem', paddingBottom: '1rem' }} key={index}>
                    
                  <Card style={{ padding: '1rem' }}> 
                    <div>
                      <h1>Flight</h1>
                      <p>
                        {flight.cityFrom} ({flight.flyFrom}) -> {flight.cityTo}{" "} ({flight.flyTo})
                      </p>
                      <p>
                        Price:{" "}
                        <strong>{`EUR : ${flight.conversion.EUR}`}</strong>
                      </p>
                      <p>
                        Departure Time:{" "}
                        {DateTime.fromMillis(`${flight.dTime}` * 1000).toFormat(
                          "hh:mm"
                        )}
                      </p>
                      <p>
                        Arrival Time:{" "}
                        {DateTime.fromMillis(`${flight.aTime}` * 1000).toFormat(
                          "hh:mm"
                        )}
                      </p>
                    </div>
                  </Card>
                  
                </Col>
            
              );
            })}
            
          </Row>
          
        </Container>
      </div>
    );
  }
}
