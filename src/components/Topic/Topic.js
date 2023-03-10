import React from 'react';
import { useNavigate } from 'react-router-dom';

const Topic = ({ topic }) => {
    const {id, name, logo, total} = topic;

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/quiz/${id}`);
    };
    return (
      <div>
        <div className="card text-white bg-base-100 shadow-xl">
          <figure>
            <img src={logo} alt="Shoes" />
          </figure>
          <div className="card-body bg-sky-800">
            <h2 className="card-title">{name}</h2>
            <p>Questions: {total}</p>
            <div className="card-actions justify-end">
              <button onClick={handleNavigate} className="btn btn-primary">
                Let's Go
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Topic;