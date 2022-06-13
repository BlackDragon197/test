import {useState} from "react";
import ReactModal from "react-modal";

export const RestItem = ({id, name, logo, type, hours, review, description}) => {
    const [modal_is_open, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal_is_open);
    }
    const showReview = () => {
        return review
    }
    const truncateString = (source, size) => {
        return source.length > size ? source.slice(0, size - 1) + "…" : source;
    }

    const showHours = () => {
        let hours_array
        let today = new Date()

        switch (today.getDay()) {
            case 1:
                hours_array = [hours.monday.opens_at, hours.monday.closes_at, hours.monday.is_closed ? "open now" : 'closed, sorry']
                break
            case 2:
                hours_array = [hours.tuesday.opens_at, hours.tuesday.closes_at, hours.tuesday.is_closed ? "open now" : 'closed, sorry']
                break
            case 3:
                hours_array = [hours.wednesday.opens_at, hours.wednesday.closes_at, hours.wednesday.is_closed ? "open now" : 'closed, sorry']
                break
            case 4:
                hours_array = [hours.thursday.opens_at, hours.thursday.closes_at, hours.thursday.is_closed ? "open now" : 'closed, sorry']
                break
            case 5:
                hours_array = [hours.friday.opens_at, hours.friday.closes_at, hours.friday.is_closed ? "open now" : 'closed, sorry']
                break
            case 6:
                hours_array = [hours.saturday.opens_at, hours.saturday.closes_at, hours.saturday.is_closed ? "open now" : 'closed, sorry']
                break
            case 7:
                hours_array = [hours.sunday.opens_at, hours.sunday.closes_at, hours.sunday.is_closed ? "open now" : 'closed, sorry']
                break
        }

        return {
            opens_at: hours_array[0],
            closes_at: hours_array[1],
            status: hours_array[2]
        };
    }

    return (
        <a key={id} href="#" onClick={toggleModal}>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{width: '90px'}}><span>{id}</span></div>
                <div><img width="100" height="100" src={logo} alt={'logo'}/></div>
                <div style={{width: '200px', textAlign: 'center'}}><span>{name}</span></div>
                <div style={{width: '90px', textAlign: 'center'}}><span>{type}</span></div>
                <div style={{width: '200px', textAlign: 'center'}}><span>{truncateString(description, 110)}</span></div>
            </div>
            <ReactModal
                isOpen={modal_is_open}
                onRequestClose={toggleModal}
                contentLabel="single rest modal"
                ariaHideApp={false}
            >
                <h2>rest modal</h2>
                <button
                    style={{position: 'absolute', right: '15px', top: '15px'}} onClick={toggleModal}>Close modal</button>
                <div style={{display: 'flex'}}>
                    review: {showReview()}<br/>
                    opens_at: {showHours().opens_at}<br/>
                    closes_at: {showHours().closes_at}<br/>
                    We are {showHours().status}
                </div>
                <img src={logo} alt={'logo'}/>
            </ReactModal>
        </a>
    );
};
