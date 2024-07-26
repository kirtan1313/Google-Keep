import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { BiBellPlus } from 'react-icons/bi'
import { BsPersonPlus } from 'react-icons/bs'
import { IoColorPaletteOutline } from 'react-icons/io5'
import { MdDeleteOutline, MdOutlineImage } from 'react-icons/md'
import { PiBoxArrowDown } from 'react-icons/pi'
import { HiDotsVertical } from 'react-icons/hi'
import Dropdown from 'react-bootstrap/Dropdown';
import { deleteNoteAsync, GetDataAsync } from '../Service/Action/keepAction'

function BoxView() {
    const dispatch = useDispatch()
    const { notes } = useSelector(state => state.keepReducer)
    console.log("notes", notes);

    useEffect(() => {
        dispatch(GetDataAsync())
    }, [])

    const handleDelete = (id) =>{
        console.log("delete",id);
        dispatch(deleteNoteAsync(id))
    }
    return (
        <>
            <Container>
                <Row>
                    {notes.map((mes) => (
                        <Col className="col-3 p-2 m-0">
                            <div className="main_card">
                                <div className="card_header">{mes.title}</div>
                                <div className="card_body">
                                    {mes.note}
                                </div>
                                <div className="overlay">

                                    <div className="col-1">
                                        <div className='hover-rounded'>
                                            <BiBellPlus />
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        <div className='hover-rounded'>
                                            <BsPersonPlus />
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        <div className='hover-rounded'>
                                            <IoColorPaletteOutline />
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        <div className='hover-rounded'>
                                            <MdOutlineImage />

                                        </div>
                                    </div>
                                    <div className="col-1">
                                        <div className='hover-rounded'>
                                            <PiBoxArrowDown />
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        <div className='hover-rounded'>
                                            <HiDotsVertical />
                                        </div>
                                    </div>
                                   

                                    <button className='text-danger border-0 fs-5 ' onClick={()=>handleDelete(mes.id)}>
                                        <MdDeleteOutline />
                                    </button> 
                                </div>
                            </div>
                        </Col>
                     ))} 
                </Row>
            </Container>
        </>
    )
}

export default BoxView;