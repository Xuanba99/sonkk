import React from 'react';
import { Row, Col, Icon } from 'antd';
class Itemblog extends React.Component {
    render() {
        var blogs = this.props.datablog;
        var isLoaded = this.props.isLoaded;


        if (!isLoaded) {
            return <div>Loading <Icon type="loading" /></div>
        } else {
            return (
                <div>
                   {blogs.slice(blogs.length-2, blogs.length).map(blog=>(
                       
                        <div>
                            <Row className="content-blog" key={blog._id}>
                                <Col className="img-blog-main" span={22} offset={2}>
                                    <a href={'detail/{blog._id }'}>
                                        <img src={`data:image/png;base64,${blog.image}`} alt="smartphone" />
                                    </a>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={22} offset={2}>
                                    <a href={'detail/{blog._id }'}>
                                        <h3>{blog.name}</h3>
                                    </a>
                                </Col>
                            </Row>
                        </div>
                       
                   ))}
                         
                    
                </div>
            );

        }


    }

}
export default Itemblog;
