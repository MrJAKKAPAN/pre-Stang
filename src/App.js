import React, { useEffect, useState, Fragment } from "react";
import { useDispatch } from "react-redux";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import "antd/dist/antd.css";
import ListItem from "./components/ListItem";
import { Row, Col } from "antd";
import "./App.scss";

import { ADD_REQ } from "./redux/constant";

const App = () => {
  const dispatch = useDispatch();
  const action = (type, payload) => dispatch({ type, payload });

  const [data, setData] = useState([]);

  let url = data.map((item) => item.symbol);
  const listUrl = url.sort();


  const fetchData = () => {
      axios
      .get("https://satangcorp.com/api/v3/ticker/24hr")
      .then(res => ( action(ADD_REQ, res.data), setData(res.data)))
      // .slice(0,10)
      .catch((err) => console.log(err));
  };
  

  useEffect(() => {
    let intervalId = setInterval(()=> fetchData(),5000)
    return(() => {
      clearInterval(intervalId)
    })
  }, [ ]);

  
  return (
    <Fragment>
      <Row style={{ height: "100vh" }}>
        <Col xs={1} sm={3} md={4} lg={5} xl={5} />
        <Col xs={22} sm={18} md={16} lg={14} xl={14}>
          <div className="block_list_menu"> 
          <div className="list_menu">
            {listUrl.map((item, i) => (
              <div key={i} className="blog_list">
                <Link to={`/market/${item.toUpperCase()}`}>
                  {item.toUpperCase()}
                </Link>
              </div>
            ))}
          </div>
          <div className="detail_menu">
            {listUrl.map((item, i) => (
              <Route exact key={i} path={`/market/${item}`}>
                <ListItem name={item} />
              </Route>
            ))}
          </div>
          </div>
        </Col>
        <Col xs={1} sm={3} md={6} lg={5} xl={5} />
      </Row>
    </Fragment>
  );
};

export default App;
