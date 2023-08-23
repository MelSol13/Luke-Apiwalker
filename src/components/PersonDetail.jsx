import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PersonDetail = () => {
    const { id } = useParams();

    const [responseData, setResponseData] = useState(null);
    const [homeworld, setHomeworld] = useState('');

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then((response) => {
                setResponseData(response.data);
                axios.get(response.data.homeworld)
                    .then((homeworldResponse) => {
                        setHomeworld(homeworldResponse.data.name);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    return (
        <div>
            {responseData && (
                <div className='card text-white bg-dark mb-3'>
                    <div className='card-header'><h5 className='my-1'>{responseData.name}</h5></div>
                    <div className='card-body pb-1'>
                        <p><span className='text-muted'>Height:</span> {responseData.height}</p>
                        <p><span className='text-muted'>Hair Color:</span> {responseData.hair_color}</p>
                        <p><span className='text-muted'>Birth Year:</span> {responseData.birth_year}</p>
                        <p><span className='text-muted'>Gender:</span> {responseData.gender}</p>
                        <p><span className='text-muted'>Homeworld:</span> {homeworld}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PersonDetail;