import React from "react";
import { DateTime } from "luxon";
import { Container, Row, Col, Card } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

import DropDownDeparture from "./DropDownDeparture.jsx";
import DropDownArrival from "./DropDownArrival.jsx";

export default class ClassApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: [],

      searchParams: {
        flyFrom: "",
        to: "LGW",
        partner: "picky"
      },

      flight: {
        cityFrom: "Prague"
      }
    };
  }

  componentDidMount() {
    const params = new URLSearchParams(this.state.searchParams);
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

  render() {
    const cityFrom = this.state.flights.map((flight, key) => {
      // console.log('cityFrom', flight.cityFrom)
      <div key={key}>{flight.cityFrom}</div>;
    });

    console.log("city", this.state.cityFrom);
    if (!this.state.flights.length) return <h1>Loading... </h1>;

    return (
      <div>
        <Container>
            <Row>
        <DropDownArrival flights={this.cityFrom} />
        <DropDownDeparture />
        </Row>
        
          <Row>
            {this.state.flights.map((flight, index) => {
              return (
                // console.log('detail', flight)
                <Col key={index}>
                  <Card>
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
