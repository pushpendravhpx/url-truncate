import logo from './logo.svg';

import URLTruncation from './Components/URLTruncation';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row } from 'antd';
import { useState } from 'react';

import { urlToURLTruncation } from "./Components/URLTruncation"

function App() {

  let [state, setState] = useState({
    result:''
  })

  let formSubmit = (e)=>{
    e.preventDefault()
    setState(prev=>{
      return {...prev, result: urlToURLTruncation(e.target.value)}
    })
  }


  return (
    <div>

      <Row>
        <Col span={12} offset={6}>
          <form onSubmit={formSubmit}>
            <h1>URL Truncator</h1>
            <Form.Item>
              <Input placeholder="Enter URL to truncate" type='text' name='url' id='url' onChange={formSubmit} />
            </Form.Item>
            <h2>Result</h2>
            Output - {state.result}
          </form>
        </Col>
      </Row>

      <Row>
        <Col span={12} offset={6}>
      <hr />
          <h3>Examples</h3>
          <ul>
            {/* <li>
              <URLTruncation url={"https://www.npmjs.com/package/react-truncate"} limit={30} />
            </li>
            <li>
              <URLTruncation url={"https://stackoverflow.com/questions/34315774/url-be-truncated-if-it-contains-in-chrome"} limit={30} />
            </li>
            <li>
              <URLTruncation url={"https://www.silabs.com/documents/public/data-sheets/C8051F12x-13x.pdf"} limit={30} />
            </li> */}
          </ul>
        </Col>
      </Row>
    </div>
  );
}

export default App;
