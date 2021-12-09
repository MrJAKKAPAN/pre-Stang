import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Card } from "antd";
import "./listItem.scss";

const Items = (props) => {
  const detailReducer = useSelector(({ detailReducer }) => detailReducer.result)
  const filterName = detailReducer.filter((obj) => props.name === obj.symbol)
  const { volume, symbol, lastPrice } = filterName[0];
  return (
    <Fragment>
      <div className="card">
        <Card>
          <p>{symbol.toUpperCase()}</p>
          <p className="price">{lastPrice}</p>
          <p className="text-mute">Volume : {volume}</p>
        </Card>
      </div>
    </Fragment>
  );
};

export default Items;
