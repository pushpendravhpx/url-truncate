import logo from './logo.svg';

import URLTruncation from './Components/URLTruncation';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, InputNumber, Row } from 'antd';
import { useState } from 'react';

import { urlToURLTruncation } from "./Components/URLTruncation"

function App() {

  let [state, setState] = useState({
    result:''
  })

  let formSubmit = (e)=>{
    // console.log(e)
    setState(prev=>{
      return {...prev, result: urlToURLTruncation(e.url, e.limit)}
    })
  }


  return (
    <div>

      <Row>
        <Col span={12} offset={6}>
          <Form  onFinish={(e)=>formSubmit(e)} initialValues={{url:'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity', limit:65535}} >
            <h1>URL Truncator</h1>
            <Form.Item  name='url' id='url' label='URL'>
              <Input placeholder="Enter URL to truncate" type='text' />
            </Form.Item>
            <Form.Item name='limit' id='limit' label='Each Parts Limits'>
              <InputNumber name='limit' placeholder="Enter limit truncate" />
            </Form.Item>
              <Button  type="primary" htmlType="submit" >Submit</Button>
            
            <h2>Result</h2>
              Output - {state.result}
          </Form>
        </Col>
      </Row>

      <Row>
        <Col span={14} offset={4}>
      <hr />
          <h3>Examples</h3>
          <ul>
            <li>
              <URLTruncation url={"https://www.npmjs.com/package/react-truncate"} limit={30} />
            </li>
            <li>
              <URLTruncation url={"https://stackoverflow.com/questions/34315774/url-be-truncated-if-it-contains-in-chrome"} limit={30} />
            </li>
            <li>
              <URLTruncation url={"https://www.silabs.com/documents/public/data-sheets/C8051F12x-13x.pdf"} limit={30} />
            </li>
            <hr />
            <h4>Given Examples</h4>
            <li>
              <b>Given URL - http://www.foobar.com/abc/def/ghi/index.html ( Limit = 26):</b> <br />
              <b>Output - </b>
              <URLTruncation url={"http://www.foobar.com/abc/def/ghi/index.html"} limit={26} />
            </li>
            <hr />
            <li><b>Given URL - https://www.foobar.com/abc/def/ghi/jkl/ ( Limit = 26):</b> <br />
              <b>Output - </b>
              <URLTruncation url={"https://www.foobar.com/abc/def/ghi/jkl/"} limit={26} />
            </li>
            <hr />
            <li><b>Given URL - https://www.foobar.com/abc/def/ghi/jkl/ ( Limit = 1):</b> <br />
              <b>Output - </b>
              <URLTruncation url={"https://www.foobar.com/abc/def/ghi/jkl/"} limit={1} />
            </li>
            <hr />
            <li>
            <b>Given URL - http://www.foobar.com/search/?q=foo&page=bar ( Limit = 35):</b> <br />
              <b>Output - </b>

              <URLTruncation url={"http://www.foobar.com/search/?q=foo&page=bar"} limit={35} />
            </li>
            <hr />
            <li>
            <b>Given URL - http://www.foobar.com/search?q=foo&page=bar ( Limit = 20):</b> <br />
              <b>Output - </b>
              <URLTruncation url={"http://www.foobar.com/search?q=foo&page=bar"} limit={20} />
            </li>
            <hr />
            <li>
            <b>Given URL - http://www.foobar.com/search/?q=foo&page=bar ( Limit = 12):</b> <br />
              <b>Output - </b>
              <URLTruncation url={"http://www.foobar.com/search/?q=foo&page=bar"} limit={12} />
            </li>
            <hr />
            <li>
            <b>Given URL - http://www.foobar.com/foo-bar-foo-bar.html ( Limit = 12):</b> <br />
              <b>Output - </b>
              <URLTruncation url={"http://www.foobar.com/foo-bar-foo-bar.html"} limit={12} />
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
}

export default App;
