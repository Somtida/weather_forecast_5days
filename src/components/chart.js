import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function avgData(data) {
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  return (
    <div className="">
    <Sparklines data={props.data} svgWidth={180} svgHeight={120}>
      <SparklinesLine color={props.color} />
      <SparklinesReferenceLine type="avg" />
    </Sparklines>
    <div>avg. {avgData(props.data)}{ props.units}</div>
    </div>
  );
}
