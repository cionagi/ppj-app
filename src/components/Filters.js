// Dependency
import React from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';

const Filters = ({ filterList = [], filterAction, filterSelected }) => {
  const renderFilters = () => {
    return filterList.map((filter) => {
      return (
        <Button
          variant="outline-secondary"
          className="m-1"
          active={filter === filterSelected}
          onClick={() => filterAction(filter)}
        >
          {filter}
        </Button>
      );
    });
  };

  return (
    <Accordion defaultActiveKey="0" className="mb-4">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          Filtrar por serie
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>{renderFilters()}</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default Filters;
