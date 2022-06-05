import React, { useState, useEffect } from 'react'
import { Layout, Table } from 'antd';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const List = () => {
    const { Content } = Layout
    const [products, setProdcuts] = useState([]);

    const getData = async () => {
        const { data } = await axios.get("https://crudsimulacro1.herokuapp.com/productos");
        console.log(data);
        setProdcuts(data)
    }

    const dataKeys = products.map(dato => ({
        ...dato,
        key: dato.id
    }));

    const deleting = async id => {
        await axios.delete(`https://crudsimulacro1.herokuapp.com/productos/${id}`);
        getData()
    }

    useEffect(() => {
        getData()
    }, [])


    useEffect(() => {
    }, [products])


    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Product Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Product Type',
            dataIndex: 'tag',
            key: 'tag',
        },
        {
            title: 'Image',
            dataIndex: 'img',
            key: 'img',
            render: data => (<img style={{ width: "50px" }} src={data} alt="img" />)
        },
        {
            title: 'Delete',
            key: 'action',
            render: u => (<Button variant="danger" onClick={() => deleting(u.id)}>Eliminar</Button>),
        },
        {
            title: 'View',
            key: 'action',
            render: u => (<Button variant="success" onClick={() => localStorage.setItem("chosen", (u.id))
            } href={`/list/${u.id}`}>Detalles</Button>),
        },
    ];
    return (
        <Content
            style={{
                padding: '0 50px',
                margin: "80px auto",
                display: "flex",
                justifyContent: "center",

            }}
        >
            <Table style={{ textAlign: "center" }} dataSource={dataKeys} columns={columns} pagination={false} />
        </Content>
    )
}

export default List