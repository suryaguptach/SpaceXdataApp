import React from 'react';

const Filghts = ({ data }) => {
    return (
        <div className="col-80 data-section">
            {
                data.map(item => {
                    return <div className="filght_details" key={item.mission_name + item.flight_number}>
                        <div className="mission_patch">
                            <img src={item.links.mission_patch} alt={item.mission_name} />
                        </div>
                        <p className="m_name">{item.mission_name} #{item.flight_number}</p>
                        <p className="h_label">Mission Ids:</p>
                        <ul>
                            {item.mission_id.map(id => {
                                return <li key={id}>{id}</li>
                            })}
                        </ul>
                        <p className="h_label">Launch Year: <span>{item.launch_year}</span></p>
                        <p className="h_label">Successful Launch: <span>{item.launch_success ? 'true' : 'false'}</span></p>
                        <p className="h_label">Successful Landing: <span>{item.rocket.first_stage.cores[0].land_success ? 'true' : 'false'}</span></p>
                    </div>
                })
            }
        </div>
    )
}

export default Filghts;