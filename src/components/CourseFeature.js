import React from 'react';
import asyncComponent from './AsyncComponent'
import { Row, Col, List } from 'antd';

const BarReact = asyncComponent(() => import(/* webpackChunkName: "Bar" */'../echarts/BarReact'))

class CourseFeature extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Infodata = [
      <p>开课学校：{this.props.teacher_school}</p>,
      <p>课程名称：{this.props.course_title}</p>,
      <p>课程类型：{this.props.course_type}</p>,
      <p>学 生 数：{this.props.course_student_num}人</p>,
    ];

    return (
      <div>
        <Row  type="flex" justify="start">
          <Col span={10}>
            <BarReact option={this.props.chart_option} />
          </Col>
          <Col span={10} offset={1}>
            <List
              // size='small'
              // header={<div>详细信息</div>}
              bordered
              dataSource={Infodata}
              renderItem={item => (<List.Item>{item}</List.Item>)}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default CourseFeature;