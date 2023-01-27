import React from "react";
import { Form } from "bootstrap-4-react";
import Checkbox from "./Checkbox";

const FilterControls = (props) => {
  console.log(props);

  const handleCheckAnswered = (e) => {
    console.log(props);

    props.changeFilters({
      ...props.filters.filters,
      answered: !props?.filters?.filters?.answered,
    });
  };

  const handleCheckUnanswered = (e) => {
    props.changeFilters({
      ...props.filters.filters,
      unanswered: !props?.filters?.filters?.unanswered,
    });
  };

  return (
    <Form>
      <Form.Group>
        <div className='d-flex'>
          <Checkbox
            label="Questions I've Voted On"
            isSelected={props?.filters?.filters?.answered}
            onCheckboxChange={(e) => {
              handleCheckAnswered(e);
            }}
          />
          <Checkbox
            label="Questions I Haven't"
            isSelected={props?.filters?.filters?.unanswered}
            onCheckboxChange={(e) => handleCheckUnanswered(e)}
          />
        </div>
      </Form.Group>
    </Form>
  );
};

export default FilterControls;
