import { useState, useContext, useEffect } from "react";
import { DiaryStateContext } from "../App";
import { getMonthRangeByDate, setPageTitle } from "../util";
import Button from "../component/Button";
import Header from "../component/Header";
import DiaryList from "../component/DiaryList";

const Home = () => {
    const data = useContext(DiaryStateContext);
    const [pivotDate, setPivoDate] = useState(new Date());
    const [filteredData, setFilteredData] = useState([]);
    const headerTitle = `${pivotDate.getFullYear()}년
                         ${pivotDate.getMonth() + 1}월`;
    
    const onIncreaseMonth = () => {
        setPivoDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() +1));
    };

    const onDecreaseMonth = () => {
        setPivoDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() -1));
    };

    useEffect(() => {
        if (data.length >= 1) {
            const { beginTimeStamp, endTimeStamp } = getMonthRangeByDate(pivotDate);
            setFilteredData(
                data.filter(
                    (it) => beginTimeStamp <= it.date <= endTimeStamp
                )
            );
        }
        else { setFilteredData([]); }
    }, [data, pivotDate]);

    useEffect(() => {
        setPageTitle("나만의 감정 일기장");
      }, []);

    return (
        <div>
            <Header
                title={headerTitle}
                leftChild={<Button text={"<"} onClick={onDecreaseMonth}/>}
                rightChild={<Button text={">"} onClick={onIncreaseMonth}/>}
            />
            <DiaryList data={filteredData} />
        </div>
    );
};
export default Home;
