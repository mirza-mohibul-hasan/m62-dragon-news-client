import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'
const RightNav = () => {
    return (
        <div>
            <h2>Login With</h2>
            <Button className='w-100 mb-3' variant="outline-primary"><FaGoogle></FaGoogle>Login with Google</Button>
            <Button className='w-100' variant="outline-dark"><FaGithub></FaGithub>Login with Github</Button>
            <h2>Find Us On</h2>
            <ListGroup>
                <ListGroup.Item><FaFacebook></FaFacebook>facebook</ListGroup.Item>
                <ListGroup.Item><FaTwitter></FaTwitter>twitter</ListGroup.Item>
                <ListGroup.Item><FaInstagram></FaInstagram>instagram</ListGroup.Item>
            </ListGroup>
            <QZone></QZone>
            
        </div>
    );
};

export default RightNav;