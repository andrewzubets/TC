import {useEffect, useState} from "react";
import axios from "axios";
import {Table, Tag} from "antd";
import {VISIBILITY_LABELS} from "../../data/i18n.mjs";


const fetchTemplateList = () => {
    return new Promise((resolve,reject) => {
        let data = []
        axios.get('/api/survey/templates')
            .then(r => {
                resolve( r.data.items.map(item => ({
                    ...item,
                    key: item.id
                })))
            }).catch(error => {
            console.error('failed fetch templates', error)
            reject()
        })

    })
}

function TemplateList(){
    let [templateList, setTemplateList] = useState([])

    useEffect(() => {
        fetchTemplateList()
            .then(templates => {
                console.log('templates', templates)
                setTemplateList(templates)
            })
    }, []);

    return ( <Table dataSource={templateList}>
        <Table.Column key="name" dataIndex="name" title="Name" />
        <Table.Column key="visibility" dataIndex="visibility" title="Visibility"
                      render={(visibility) => (<Tag color="blue" key={visibility}>
                                      {VISIBILITY_LABELS[visibility]}
                                  </Tag>)}
        />
    </Table>)
}

export default TemplateList