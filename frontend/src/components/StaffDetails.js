import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const StaffDetails = () => {
    const [staff, setStaff] = useState({
        
    });
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8070/staff/detail/${id}`)
            .then(result => {
                console.log("Result:", result.data); // Check what data you're receiving
                if (result.data.status === "User fetched") {
                    setStaff(result.data.staff); // Set staff details in state
                }
            })
            .catch(err => console.error("Error:", err));
    }, [id]);

    return (
        <div>
            {staff && staff.name && <div>{staff.name}</div>}
        </div>
    );
};

export default StaffDetails