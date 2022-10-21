import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import getImageList from "../../api/apiCall";
import CustomImageCard from "../../componets/Card/Card";
import groupList from "../../utils/normaliseList";

const LandingPage = () => {

    const [imgList, setImgList] = useState([]);
    const fetchData = async () => {
        let response = await getImageList();
        let groupedList = groupList(response?.data?.photos?.photo || []);
        setImgList(groupedList);
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Container style={{ display: 'flex', backgroundColor: '#000' }}>
            {
                imgList.map((e, i) => {
                    return (
                        <div style={{ display: 'inline-block', width: '15rem', backgroundColor: '#000' }}>
                            {
                                e.map(p => {
                                    return (
                                        <CustomImageCard id={p.id} secret={p.secret} server={p.server} />
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </Container>
    )
}

export default LandingPage;