import React from 'react';
const years = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]

const Filter = ({ selectedYear, successLaunch, successLand, onChangeYear, onChangeLaunch, onChangeLand }) => {
    return (
        <div className="filterbox">
            <h4>Filters</h4>
            <p>Launch Year</p>
            <hr className="divider"></hr>
            <div className="row m-b-10">
                {years.map(year => {
                    return <div key={year} className="button_box">
                        <button tabIndex={0} className={selectedYear === year ? 'selected' : ''} onClick={() => onChangeYear(year)}>{year}</button>
                    </div>
                })}
            </div>
            <p>Successful Launch</p>
            <hr className="divider"></hr>
            <div className="row m-b-10">
                <div className="button_box">
                    <button tabIndex={0} className={successLaunch === true? 'selected' : ''} onClick={() => onChangeLaunch(true)}>True</button>
                </div>
                <div className="button_box">
                    <button tabIndex={0} className={successLaunch === false ? 'selected' : ''} onClick={() => onChangeLaunch(false)}>False</button>
                </div>
            </div>
            <p>Successful Landing</p>
            <hr className="divider"></hr>
            <div className="row">
                <div className="button_box">
                    <button tabIndex={0} className={successLand === true ? 'selected' : ''} onClick={() => onChangeLand(true)}>True</button>
                </div>
                <div className="button_box">
                    <button tabIndex={0} className={successLand === false ? 'selected' : ''} onClick={() => onChangeLand(false)}>False</button>
                </div>
            </div>
        </div>
    )
}

export default Filter;