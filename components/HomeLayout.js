
import Filter from './Filter';
import Filghts from './Filghts';
import { useEffect, useState } from 'react';

export default function HomeLayout({ filghts }) {
    const [data, setData] = useState([]);
    const [selectedYear, setSelectedYear] = useState(null);
    const [successLaunch, setSuccessLaunch] = useState(null);
    const [successLand, setSuccessLand] = useState(null);

    const onChangeYear = (year) => {
        changeFilters(year, successLaunch, successLand);
        setSelectedYear(year);
    }
    const onChangeLaunch = (boolean) => {
        changeFilters(selectedYear, boolean, successLand);
        setSuccessLaunch(boolean);
    }
    const onChangeLand = (boolean) => {
        changeFilters(selectedYear, successLaunch, boolean);
        setSuccessLand(boolean);
    }

    useEffect(() => {
        setData(filghts)
    }, [])

    const changeFilters = async (year, launch, land) => {
        const query = `${year !== null ? `&launch_year=${year}` : ''}${launch !== null ? `&launch_success=${launch}` : ''}${land !== null ? `&land_success=${land}` : ''}`;
        const response = await fetch(`https://api.spaceXdata.com/v3/launches?limit=100${query}`);
        const filghts = await response.json();
        setData(filghts)
    }

    return (
        <div className="row m-lr-5">
            <div className="col-20">
                <Filter
                    selectedYear={selectedYear}
                    successLaunch={successLaunch}
                    successLand={successLand}
                    onChangeYear={onChangeYear}
                    onChangeLaunch={onChangeLaunch}
                    onChangeLand={onChangeLand}
                />
            </div>
            <Filghts data={data} />
        </div>
    )
}
