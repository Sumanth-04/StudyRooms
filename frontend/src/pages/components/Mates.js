import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table, Tag, Space } from 'antd';


class Mates extends Component {
    constructor(){
        super();
        this.state = {

        }
    }
    static propTypes = {

    }

    render() {
        const columns = [
            {
                title: 'Sl No.',
                dataIndex: 'key',
                key: 'key',
            },
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
              render: text => <a>{text}</a>,
            },
            /*{
              title: 'Age',
              dataIndex: 'age',
              key: 'age',
            },
            {
              title: 'Address',
              dataIndex: 'address',
              key: 'address',
            },*/
            {
              title: 'Tags',
              key: 'tags',
              dataIndex: 'tags',
              render: tags => (
                <>
                  {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                      color = 'volcano';
                    }
                    return (
                      <Tag color={color} key={tag}>
                        {tag.toUpperCase()}
                      </Tag>
                    );
                  })}
                </>
              ),
            },
            /*
            {
              title: 'Action',
              key: 'action',
              render: (text, record) => (
                <Space size="middle">
                  <a>Invite {record.name}</a>
                  <a>Delete</a>
                </Space>
              ),
            },*/
          ];
          
          const data = [
            {
              key: '1',
              name: 'John Brown',
              age: 32,
              address: 'New York No. 1 Lake Park',
              tags: ['Student'],
            },
            {
              key: '2',
              name: 'Jim Green',
              age: 42,
              address: 'London No. 1 Lake Park',
              tags: ['Student'],
            },
            {
              key: '3',
              name: 'Joe Black',
              age: 32,
              address: 'Sidney No. 1 Lake Park',
              tags: [ 'teacher'],
            },
          ];
        return (
            <div
                style={{textAlign:'center'}}
            >
                <h1>All Members</h1>
                <Table columns={columns} dataSource={data} />
            </div>
        )
    }
}

export default Mates;