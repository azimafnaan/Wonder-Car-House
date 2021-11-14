import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'
import './Dashboard.css';

const Dashboard = () => {
    const { admin } = useAuth();
    return (
        <div className="container mb-5 mt-3 dashboard-section">
            <h2>Your Dashboard</h2>
            <Nav fill variant="tabs" defaultActiveKey="/home">
                {admin && <div>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/makeAdmin">Make Admin</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/addProduct" eventKey="link-2">Add Product</Nav.Link>
                    </Nav.Item>
                </div>}
                <Nav.Item>
                    <Nav.Link as={Link} to="/myOrder" eventKey="link-1">My Orders</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link as={Link} to="/addReview" eventKey="link-3">Add Review</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/pay" eventKey="link-4">Pay</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default Dashboard;