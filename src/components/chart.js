import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function avgData(data) {
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  return (
    <div className="">
    <Sparklines data={props.data} svgWidth={200} svgHeight={150}>
      <SparklinesLine color={props.color} />
      <SparklinesReferenceLine type="avg" />
    </Sparklines>
    <div>{avgData(props.data)}{ props.units}</div>
    </div>
  );
}
